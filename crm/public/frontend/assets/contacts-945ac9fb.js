import{N as h,y as n,x as i}from"./index-94cddbf2.js";const d=h("crm-contacts",()=>{let c=n({}),o=n({}),u=n({}),s=n([]);const r=i({url:"crm.api.session.get_contacts",cache:"contacts",initialData:[],auto:!0,transform(t){var a;for(let e of t)e.actual_mobile_no=e.mobile_no,e.mobile_no=(a=e.mobile_no)==null?void 0:a.replace(/[^0-9+]/g,""),c[e.mobile_no]=e,o[e.name]=e;return s=[...t],t},onError(t){t&&t.exc_type==="AuthenticationError"&&router.push("/login")}});i({url:"crm.api.session.get_lead_contacts",cache:"lead_contacts",initialData:[],auto:!0,transform(t){var a;for(let e of t)e.mobile_no=(a=e.mobile_no)==null?void 0:a.replace(/[^0-9+]/g,""),e.full_name=e.lead_name,u[e.mobile_no]=e;return t},onError(t){t&&t.exc_type==="AuthenticationError"&&router.push("/login")}});function l(t){return t=t==null?void 0:t.replace(/[^0-9+]/g,""),c[t]}function f(t){return o[t]}function g(t){return t=t==null?void 0:t.replace(/[^0-9+]/g,""),u[t]}function p(){return s||(r==null?void 0:r.data)||[]}return{contacts:r,getContacts:p,getContact:l,getContactByName:f,getLeadContact:g}});export{d as c};
//# sourceMappingURL=contacts-945ac9fb.js.map
