import{m as M,i as E,l as u,k as S,r as _,b as h,g as T,w as H,e as n,H as g,t as p,d as r,u as t,a6 as R,a7 as L,I as b,z as q,A as B}from"./index-94cddbf2.js";import{T as I}from"./views-29c7636e.js";const O={class:"flex flex-col gap-4"},z={class:"flex sm:flex-row flex-col gap-4"},J={class:"flex-1"},P={class:"mb-1.5 text-sm text-gray-600"},$=n("span",{class:"text-red-500"},"*",-1),A={class:"flex-1"},G={class:"mb-1.5 text-sm text-gray-600"},K={class:"mb-1.5 text-sm text-gray-600"},Q=n("span",{class:"text-red-500"},"*",-1),W={class:"mb-1.5 text-sm text-gray-600"},X={class:"mb-1.5 text-sm text-gray-600"},Y=n("span",{class:"text-red-500"},"*",-1),le={__name:"EmailTemplateModal",props:M({emailTemplate:{type:Object,default:{}}},{modelValue:{},modelModifiers:{},reloadEmailTemplates:{},reloadEmailTemplatesModifiers:{}}),emits:M(["after"],["update:modelValue","update:reloadEmailTemplates"]),setup(c,{emit:Z}){const v=c,i=E(c,"modelValue"),k=E(c,"reloadEmailTemplates"),s=u(""),V=u(null),x=u(null),d=u(!1);let e=u({content_type:"Rich Text"});async function D(){if(!C())return;const a={...v.emailTemplate},l={...e.value},m=a.name!==l.name;delete a.name,delete l.name;const f=JSON.stringify(a)!==JSON.stringify(l),y=l;if(!m&&!f){i.value=!1;return}m&&await U(),f&&await j(y),w()}async function U(){return await b("frappe.client.rename_doc",{doctype:"Email Template",old_name:v.emailTemplate.name,new_name:e.value.name})}async function j(a){return(await b("frappe.client.set_value",{doctype:"Email Template",name:e.value.name,fieldname:a})).name}async function N(){if(!C())return;const a=await b("frappe.client.insert",{doc:{doctype:"Email Template",...e.value}});a.name&&(q("email_template_created",{doctype:a.reference_doctype}),w())}function w(a){var l;(l=k.value)==null||l.reload(),i.value=!1}function C(){return e.value.use_html=e.value.content_type=="HTML",e.value.name?e.value.subject?!e.value.use_html&&(!e.value.response||e.value.response==="<p></p>")||e.value.use_html&&!e.value.response_html?(s.value="Content is required",!1):!0:(s.value="Subject is required",!1):(s.value="Name is required",!1)}return S(()=>i.value,a=>{a&&(d.value=!1,s.value="",B(()=>{e.value.name?V.value.el.focus():x.value.el.focus(),e.value={...v.emailTemplate},e.value.content_type=e.value.use_html?"HTML":"Rich Text",e.value.name&&(d.value=!0)}))}),(a,l)=>{const m=_("TextInput"),f=_("FormControl"),y=_("ErrorMessage"),F=_("Dialog");return h(),T(F,{modelValue:i.value,"onUpdate:modelValue":l[7]||(l[7]=o=>i.value=o),options:{title:d.value?a.__(c.emailTemplate.name):a.__("Create Email Template"),size:"xl",actions:[{label:d.value?a.__("Update"):a.__("Create"),variant:"solid",onClick:()=>d.value?D():N()}]}},{"body-content":H(()=>[n("div",O,[n("div",z,[n("div",J,[n("div",P,[g(p(a.__("Name"))+" ",1),$]),r(m,{ref_key:"nameRef",ref:x,variant:"outline",modelValue:t(e).name,"onUpdate:modelValue":l[0]||(l[0]=o=>t(e).name=o),placeholder:a.__("Payment Reminder")},null,8,["modelValue","placeholder"])]),n("div",A,[n("div",G,p(a.__("Doctype")),1),r(t(R),{variant:"outline",modelValue:t(e).reference_doctype,"onUpdate:modelValue":l[1]||(l[1]=o=>t(e).reference_doctype=o),options:["CRM Deal","CRM Lead"],placeholder:a.__("CRM Deal")},null,8,["modelValue","placeholder"])])]),n("div",null,[n("div",K,[g(p(a.__("Subject"))+" ",1),Q]),r(m,{ref_key:"subjectRef",ref:V,variant:"outline",modelValue:t(e).subject,"onUpdate:modelValue":l[2]||(l[2]=o=>t(e).subject=o),placeholder:a.__("Payment Reminder from Frappé - (#{{ name }})")},null,8,["modelValue","placeholder"])]),n("div",null,[n("div",W,p(a.__("Content Type")),1),r(t(R),{variant:"outline",modelValue:t(e).content_type,"onUpdate:modelValue":l[3]||(l[3]=o=>t(e).content_type=o),default:"Rich Text",options:["Rich Text","HTML"],placeholder:a.__("Rich Text")},null,8,["modelValue","placeholder"])]),n("div",null,[n("div",X,[g(p(a.__("Content"))+" ",1),Y]),t(e).content_type==="HTML"?(h(),T(f,{key:0,type:"textarea",variant:"outline",ref:"content",rows:10,modelValue:t(e).response_html,"onUpdate:modelValue":l[4]||(l[4]=o=>t(e).response_html=o),placeholder:a.__(`<p>Dear {{ lead_name }},</p>

<p>This is a reminder for the payment of {{ grand_total }}.</p>

<p>Thanks,</p>
<p>Frappé</p>`)},null,8,["modelValue","placeholder"])):(h(),T(t(I),{key:1,variant:"outline",ref:"content","editor-class":"!prose-sm overflow-auto min-h-[180px] max-h-80 py-1.5 px-2 rounded border border-gray-300 bg-white hover:border-gray-400 hover:shadow-sm focus:bg-white focus:border-gray-500 focus:shadow-sm focus:ring-0 focus-visible:ring-2 focus-visible:ring-gray-400 text-gray-800 transition-colors",bubbleMenu:!0,content:t(e).response,onChange:l[5]||(l[5]=o=>t(e).response=o),placeholder:a.__(`Dear {{ lead_name }}, 

This is a reminder for the payment of {{ grand_total }}. 

Thanks, 
Frappé`)},null,8,["content","placeholder"]))]),n("div",null,[r(t(L),{modelValue:t(e).enabled,"onUpdate:modelValue":l[6]||(l[6]=o=>t(e).enabled=o),label:a.__("Enabled")},null,8,["modelValue","label"])]),r(y,{message:a.__(s.value)},null,8,["message"])])]),_:1},8,["modelValue","options"])}}};export{le as _};
//# sourceMappingURL=EmailTemplateModal-8c6fb82c.js.map
