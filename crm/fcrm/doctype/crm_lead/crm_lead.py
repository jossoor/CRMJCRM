# Copyright (c) 2023, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt
import json

import frappe
from frappe import _
from frappe.desk.form.assign_to import add as assign
from frappe.model.document import Document

from frappe.utils import has_gravatar, validate_email_address
from crm.fcrm.doctype.crm_service_level_agreement.utils import get_sla
from crm.fcrm.doctype.crm_status_change_log.crm_status_change_log import add_status_change_log


class CRMLead(Document):
	def before_validate(self):
                pass
		#self.set_sla()

	def validate(self):
		self.set_full_name()
		self.set_lead_name()
		self.set_title()
		self.validate_email()
		if not self.is_new() and self.has_value_changed("lead_owner") and self.lead_owner:
			self.share_with_agent(self.lead_owner)
			self.assign_agent(self.lead_owner)
		if self.has_value_changed("status"):
			add_status_change_log(self)

	def after_insert(self):
		if self.lead_owner:
			self.assign_agent(self.lead_owner)

	def before_save(self):
                pass
		#self.apply_sla()

	def set_full_name(self):
		if self.first_name:
			self.lead_name = " ".join(
				filter(None, [self.salutation, self.first_name, self.middle_name, self.last_name])
			)

	def set_lead_name(self):
                pass
		#if not self.lead_name:
			# Check for leads being created through data import
		#	if not self.organization and not self.email and not self.flags.ignore_mandatory:
		#		frappe.throw(_("A Lead requires either a person's name or an organization's name"))
		#	elif self.organization:
		#		self.lead_name = self.organization
		#	elif self.email:
		#		self.lead_name = self.email.split("@")[0]
		#	else:
		#		self.lead_name = "Unnamed Lead"

	def set_title(self):
                pass
		#self.title = self.organization or self.lead_name

	def validate_email(self):
		if self.email:
			if not self.flags.ignore_email_validation:
				validate_email_address(self.email, throw=True)

			if self.email == self.lead_owner:
				frappe.throw(_("Lead Owner cannot be same as the Lead Email Address"))

			if self.is_new() or not self.image:
				self.image = has_gravatar(self.email)

	def assign_agent(self, agent):
		if not agent:
			return

		assignees = self.get_assigned_users()
		if assignees:
			for assignee in assignees:
				if agent == assignee:
					# the agent is already set as an assignee
					return

		assign({"assign_to": [agent], "doctype": "CRM Lead", "name": self.name})

	def share_with_agent(self, agent):
		if not agent:
			return

		docshares = frappe.get_all(
			"DocShare",
			filters={"share_name": self.name, "share_doctype": self.doctype},
			fields=["name", "user"],
		)

		shared_with = [d.user for d in docshares] + [agent]

		for user in shared_with:
			if user == agent and not frappe.db.exists("DocShare", {"user": agent, "share_name": self.name, "share_doctype": self.doctype}):
				frappe.share.add_docshare(
					self.doctype, self.name, agent, write=1, flags={"ignore_share_permission": True}
				)
			elif user != agent:
				frappe.share.remove(self.doctype, self.name, user)

	def create_contact(self, throw=True):
		if not self.lead_name:
			self.set_full_name()
			self.set_lead_name()

		existing_contact = self.contact_exists(throw)
		if existing_contact:
			return existing_contact

		contact = frappe.new_doc("Contact")
		contact.update(
			{
				"first_name": self.first_name or self.lead_name,
				"last_name": self.last_name,
				"salutation": self.salutation,
				"gender": self.gender,
				"designation": self.job_title,
				"company_name": self.organization,
				"image": self.image or "",
			}
		)

		if self.email:
			contact.append("email_ids", {"email_id": self.email, "is_primary": 1})

		if self.phone:
			contact.append("phone_nos", {"phone": self.phone, "is_primary_phone": 1})

		if self.mobile_no:
			contact.append("phone_nos", {"phone": self.mobile_no, "is_primary_mobile_no": 1})

		contact.insert(ignore_permissions=True)
		contact.reload()  # load changes by hooks on contact

		return contact.name

	def create_organization(self):
		if not self.organization:
			return

		existing_organization = frappe.db.exists("CRM Organization", {"organization_name": self.organization})
		if existing_organization:
			return existing_organization

		organization = frappe.new_doc("CRM Organization")
		organization.update(
			{
				"organization_name": self.organization,
				"website": self.website,
				"territory": self.territory,
				"industry": self.industry,
				"annual_revenue": self.annual_revenue,
			}
		)
		organization.insert(ignore_permissions=True)
		return organization.name

	def contact_exists(self, throw=True):
		email_exist = frappe.db.exists("Contact Email", {"email_id": self.email})
		phone_exist = frappe.db.exists("Contact Phone", {"phone": self.phone})
		mobile_exist = frappe.db.exists("Contact Phone", {"phone": self.mobile_no})

		doctype = "Contact Email" if email_exist else "Contact Phone"
		name = email_exist or phone_exist or mobile_exist

		if name:
			text = "Email" if email_exist else "Phone" if phone_exist else "Mobile No"
			data = self.email if email_exist else self.phone if phone_exist else self.mobile_no

			value = "{0}: {1}".format(text, data)

			contact = frappe.db.get_value(doctype, name, "parent")

			if throw:
				frappe.throw(
					_("Contact already exists with {0}").format(value),
					title=_("Contact Already Exists"),
				)
			return contact

		return False

	def create_deal(self, contact, organization):
		deal = frappe.new_doc("CRM Deal")

		lead_deal_map = {
			"lead_owner": "deal_owner",
		}

		restricted_fieldtypes = ["Tab Break", "Section Break", "Column Break", "HTML", "Button", "Attach", "Table"]
		restricted_map_fields = ["name", "naming_series", "creation", "owner", "modified", "modified_by", "idx", "docstatus", "status", "email", "mobile_no", "phone", "sla", "sla_status", "response_by", "first_response_time", "first_responded_on", "communication_status", "sla_creation"]

		for field in self.meta.fields:
			if field.fieldtype in restricted_fieldtypes:
				continue
			if field.fieldname in restricted_map_fields:
				continue

			fieldname = field.fieldname
			if field.fieldname in lead_deal_map:
				fieldname = lead_deal_map[field.fieldname]

			if hasattr(deal, fieldname):
				if fieldname == "organization":
					deal.update({fieldname: organization})
				else:
					deal.update({fieldname: self.get(field.fieldname)})

		deal.update(
			{
				"lead": self.name,
				"contacts": [{"contact": contact}],
			}
		)

		if self.first_responded_on:
			deal.update(
				{
					"sla_creation": self.sla_creation,
					"response_by": self.response_by,
					"sla_status": self.sla_status,
					"communication_status": self.communication_status,
					"first_response_time": self.first_response_time,
					"first_responded_on": self.first_responded_on
				}
			)

		deal.insert(ignore_permissions=True)
		return deal.name

	def set_sla(self):
		"""
		Find an SLA to apply to the lead.
		"""
		if self.sla: return

		sla = get_sla(self)
		if not sla:
			self.first_responded_on = None
			self.first_response_time = None
			return
		self.sla = sla.name

	def apply_sla(self):
		"""
		Apply SLA if set.
		"""
		if not self.sla:
			return
		sla = frappe.get_last_doc("CRM Service Level Agreement", {"name": self.sla})
		if sla:
			sla.apply(self)

	def convert_to_deal(self):
		return convert_to_deal(lead=self.name, doc=self)

	@staticmethod
	def get_non_filterable_fields():
		return ["converted"]

	@staticmethod
	def default_list_data():
		columns = [
			{
				'label': 'Name',
				'type': 'Data',
				'key': 'lead_name',
				'width': '12rem',
			},
			{
				'label': 'Organization',
				'type': 'Link',
				'key': 'organization',
				'options': 'CRM Organization',
				'width': '10rem',
			},
			{
				'label': 'Status',
				'type': 'Select',
				'key': 'status',
				'width': '8rem',
			},
			{
				'label': 'Email',
				'type': 'Data',
				'key': 'email',
				'width': '12rem',
			},
			{
				'label': 'Mobile No',
				'type': 'Data',
				'key': 'mobile_no',
				'width': '11rem',
			},
			{
				'label': 'Assigned To',
				'type': 'Text',
				'key': '_assign',
				'width': '10rem',
			},
			{
				'label': 'Last Modified',
				'type': 'Datetime',
				'key': 'modified',
				'width': '8rem',
			},
		]
		rows = [
			"name",
			"lead_name",
			"organization",
			"status",
			"email",
			"mobile_no",
			"lead_owner",
			"first_name",
			"sla_status",
			"response_by",
			"first_response_time",
			"first_responded_on",
			"modified",
			"_assign",
			"image",
		]
		return {'columns': columns, 'rows': rows}

	@staticmethod
	def default_kanban_settings():
		return {
			"column_field": "status",
			"title_field": "lead_name",
			"kanban_fields": '["organization", "email", "mobile_no", "_assign", "modified"]'
		}


@frappe.whitelist()
def convert_to_deal(lead):
    if not frappe.has_permission("CRM Lead", "write", lead):
        frappe.throw(_("Not allowed to convert Lead to Deal"), frappe.PermissionError)

    lead_doc = frappe.get_doc("CRM Lead", lead)
    if not lead_doc:
        frappe.throw(_("Lead does not exist"))

    if lead_doc.converted:
        frappe.throw(_("This Lead has already been converted to a Deal"))

    # Update lead status
    if frappe.db.exists("CRM Lead Status", "Qualified"):
        lead_doc.status = "Qualified"
    lead_doc.converted = 1

    lead_doc.save(ignore_permissions=True)

    # Create deal and copy relevant fields
    deal = frappe.get_doc({
        "doctype": "CRM Deal",
        "naming_series": "CRM-DEAL-.YYYY.-",
        "lead": lead_doc.name,
        "lead_name": lead_doc.lead_name,
        "status": "Qualification",
        "deal_owner": frappe.session.user,
        # Map common fields
        "email": lead_doc.email,
        "mobile_no": lead_doc.phone,
        "source": lead_doc.source,
        "gender": lead_doc.gender,
        "salutation": lead_doc.salutation,
        "first_name": lead_doc.first_name,
        "last_name": lead_doc.last_name,
    })
    deal.insert(ignore_permissions=True)

    return deal.name


def get_permission_query_conditions_for_crm_lead(user):
    if "System Manager" in frappe.get_roles(user):
        return None
    elif "Sales User" in frappe.get_roles(user):
        escaped_user = frappe.db.escape(user)
        return (
            f"(`tabCRM Lead`.owner = {escaped_user} "
            f"or `tabCRM Lead`.lead_owner = {escaped_user}) "
            f"or (`tabCRM Lead`.name in (select `tabCRM Lead`.name from `tabCRM Lead` where (`tabCRM Lead`._assign like '%\"{user}\"%')))"
        )

@frappe.whitelist()
def validate_duplicate_phone(self, method=None):
    existing_lead = frappe.db.get_value(
        "CRM Lead",
        {"phone": self.phone, "name": ("!=", self.name)},
        ["name", "lead_owner"]
    )
    if existing_lead:
        frappe.throw(
            _("Phone number already exists for Lead {0}. Lead Owner is {1}").format(
                existing_lead.name, existing_lead.lead_owner
            )
        )
