import{_ as me,a as ue}from"./SidePanelModal-38441ea1.js";import{a as _e}from"./FadedScrollableDiv-9739b5b1.js";import{_ as pe}from"./Section-8b41410b.js";import{g as fe,S as ge,_ as ve}from"./view-2824ccd2.js";import{_ as ye}from"./LayoutHeader-1f47b812.js";import{P as be}from"./PhoneIcon-206b2bf3.js";import{E as he}from"./views-29c7636e.js";import{C as we}from"./CameraIcon-002a69e5.js";import{D as Ce}from"./DealsIcon-c75ef9a8.js";import{_ as ke}from"./DealsListView-a9ac245f.js";import{_ as xe}from"./AddressModal-c9e0b8b2.js";import{g as Ie,u as Ve,e as V,h as ze,d as Se,t as $e,b as J,c as De}from"./index-79582337.js";import{o as Fe}from"./organizations-31488e15.js";import{s as Pe}from"./statuses-7de18649.js";import{c as Ne}from"./settings-76fff180.js";import{h as je,v as Be,l as z,x as E,j as S,K as Ee,B as Ue,r as j,b as r,c as h,u as o,g as p,w as m,p as u,e as c,d,F as K,I as y,G as U,C as qe,t as C,f as Me,n as q,H as Q}from"./index-94cddbf2.js";import{_ as Re}from"./Breadcrumbs.vue_vue_type_script_setup_true_lang-ac4cff83.js";import{_ as Te}from"./Dropdown.vue_vue_type_script_setup_true_lang-f30ca23a.js";import{F as Ae}from"./FileUploader-22e9b494.js";import"./DragVerticalIcon-2b8c1048.js";import"./Switch.vue_vue_type_script_setup_true_lang-34bdad39.js";import"./ArrowUpRightIcon-1f7d0656.js";import"./ListBulkActions-9825310d.js";import"./DatePicker.vue_vue_type_script_setup_true_lang-3cf9a372.js";import"./AssignmentModal-b1255d73.js";import"./IndicatorIcon-4dd9059c.js";import"./ListRows-818fdf9d.js";import"./ListFooter-74d62f00.js";import"./QuickEntryModal-c9cc5254.js";import"./Fields-0a7d93b5.js";const Le={ref:"parentRef",class:"flex h-full"},Oe={class:"border-b"},Ge={class:"flex flex-col items-start justify-start gap-4 p-5"},He={class:"flex gap-4 items-center"},Je={class:"group relative h-15.5 w-15.5"},Ke={class:"z-1 absolute bottom-0 left-0 right-0 flex h-14 cursor-pointer items-center justify-center rounded-b-full bg-black bg-opacity-40 pt-5 opacity-0 duration-300 ease-in-out group-hover:opacity-100",style:{"-webkit-clip-path":"inset(22px 0 0 0)","clip-path":"inset(22px 0 0 0)"}},Qe={class:"flex flex-col gap-2 truncate"},We={class:"truncate text-2xl font-medium"},Xe={key:0},Ye={key:0,class:"flex items-center gap-1.5 text-base text-gray-800"},Ze={class:""},ea={class:"flex gap-1.5"},aa={key:0,class:"flex flex-1 flex-col justify-between overflow-hidden"},ta={class:"flex flex-col overflow-y-auto"},oa={key:1,class:"grid flex-1 place-items-center text-xl font-medium text-gray-500"},la={class:"flex flex-col items-center justify-center space-y-3"},Ba={__name:"Contact",props:{contactId:{type:String,required:!0}},setup(W){const{$dialog:X,makeCall:Y}=Ie(),{getUser:M,isManager:Z}=Ve(),{getOrganization:R}=Fe(),{getDealStatus:ee}=Pe(),f=W,w=je(),ae=Be(),$=z(!1),D=z(!1),_=z({}),F=z({}),a=E({url:"crm.api.contact.get_contact",cache:["contact",f.contactId],params:{name:f.contactId},auto:!0,transform:e=>({...e,actual_mobile_no:e.mobile_no,mobile_no:e.mobile_no})}),te=S(()=>{var t;let e=[{label:__("Contacts"),route:{name:"Contacts"}}];if(w.query.view||w.query.viewType){let i=fe(w.query.view,w.query.viewType,"Contact");i&&e.push({label:__(i.label),icon:i.icon,route:{name:"Contacts",params:{viewType:w.query.viewType},query:{view:w.query.view}}})}return e.push({label:(t=a.data)==null?void 0:t.full_name,route:{name:"Contact",params:{contactId:f.contactId}}}),e});Ee(()=>{var e,t;return{title:((e=a.data)==null?void 0:e.full_name)||((t=a.data)==null?void 0:t.name)}});function oe(e){let t=e.name.split(".").pop().toLowerCase();if(!["png","jpg","jpeg"].includes(t))return __("Only PNG and JPG images are allowed")}async function T(e){await y("frappe.client.set_value",{doctype:"Contact",name:f.contactId,fieldname:"image",value:(e==null?void 0:e.file_url)||""}),a.reload()}async function le(){X({title:__("Delete contact"),message:__("Are you sure you want to delete this contact?"),actions:[{label:__("Delete"),theme:"red",variant:"solid",async onClick(e){await y("frappe.client.delete",{doctype:"Contact",name:f.contactId}),e(),ae.push({name:"Contacts"})}}]})}const A=z(0),ne=[{label:"Deals",icon:Ue(Ce,{class:"h-4 w-4"}),count:S(()=>{var e;return(e=P.data)==null?void 0:e.length})}],P=E({url:"crm.api.contact.get_linked_deals",cache:["deals",f.contactId],params:{contact:f.contactId},auto:!0}),B=S(()=>!P.data||P.data==[]?[]:P.data.map(e=>ce(e))),k=E({url:"crm.api.doc.get_sidebar_fields",cache:["fieldsLayout",f.contactId],params:{doctype:"Contact",name:f.contactId},auto:!0,transform:e=>se(e)});function se(e){return e.map(t=>({...t,fields:S(()=>t.fields.map(i=>{var g,x,N,l;return i.name==="email_id"?{...i,type:"dropdown",options:((x=(g=a.data)==null?void 0:g.email_ids)==null?void 0:x.map(n=>({name:n.name,value:n.email_id,selected:n.email_id===a.data.email_id,placeholder:"john@doe.com",onClick:()=>{_.value.email_id=n.email_id,L("email",n.email_id)},onSave:(s,v)=>{v?(O("email",s.value),a.data.email_ids.length===1&&(_.value.email_id=s.value)):G("Contact Email",s.name,"email_id",s.value)},onDelete:async(s,v)=>{var I;a.data.email_ids=a.data.email_ids.filter(b=>b.name!==s.name),!v&&await H("Contact Email",s.name),_.value.email_id===s.value&&(a.data.email_ids.length===0?_.value.email_id="":_.value.email_id=(I=a.data.email_ids.find(b=>b.is_primary))==null?void 0:I.email_id)}})))||[],create:()=>{var n,s;(s=(n=a.data)==null?void 0:n.email_ids)==null||s.push({name:"new-1",value:"",selected:!1,isNew:!0})}}:i.name==="mobile_no"?{...i,type:"dropdown",options:((l=(N=a.data)==null?void 0:N.phone_nos)==null?void 0:l.map(n=>({name:n.name,value:n.phone,selected:n.phone===a.data.actual_mobile_no,onClick:()=>{_.value.actual_mobile_no=n.phone,_.value.mobile_no=n.phone,L("mobile_no",n.phone)},onSave:(s,v)=>{v?(O("phone",s.value),a.data.phone_nos.length===1&&(_.value.actual_mobile_no=s.value)):G("Contact Phone",s.name,"phone",s.value)},onDelete:async(s,v)=>{var I;a.data.phone_nos=a.data.phone_nos.filter(b=>b.name!==s.name),!v&&await H("Contact Phone",s.name),_.value.actual_mobile_no===s.value&&(a.data.phone_nos.length===0?_.value.actual_mobile_no="":_.value.actual_mobile_no=(I=a.data.phone_nos.find(b=>b.is_primary_mobile_no))==null?void 0:I.phone)}})))||[],create:()=>{var n,s;(s=(n=a.data)==null?void 0:n.phone_nos)==null||s.push({name:"new-1",value:"",selected:!1,isNew:!0})}}:i.name==="address"?{...i,create:(n,s)=>{_.value.address=n,F.value={},$.value=!0,s()},edit:async n=>{F.value=await y("frappe.client.get",{doctype:"Address",name:n}),$.value=!0}}:i}))}))}async function L(e,t){await y("crm.api.contact.set_as_primary",{contact:a.data.name,field:e,value:t})&&(a.reload(),V({title:"Contact updated",icon:"check",iconClasses:"text-green-600"}))}async function O(e,t){if(!t)return;await y("crm.api.contact.create_new",{contact:a.data.name,field:e,value:t})&&(a.reload(),V({title:"Contact updated",icon:"check",iconClasses:"text-green-600"}))}async function G(e,t,i,g){await y("frappe.client.set_value",{doctype:e,name:t,fieldname:i,value:g})&&(a.reload(),V({title:"Contact updated",icon:"check",iconClasses:"text-green-600"}))}async function H(e,t){await y("frappe.client.delete",{doctype:e,name:t}),await a.reload(),V({title:"Contact updated",icon:"check",iconClasses:"text-green-600"})}async function ie(e,t){await y("frappe.client.set_value",{doctype:"Contact",name:f.contactId,fieldname:e,value:t}),V({title:"Contact updated",icon:"check",iconClasses:"text-green-600"}),a.reload()}const re=S(()=>de);function ce(e){var t,i;return{name:e.name,organization:{label:e.organization,logo:(t=R(e.organization))==null?void 0:t.organization_logo},annual_revenue:ze(e.annual_revenue,e.currency),status:{label:e.status,color:(i=ee(e.status))==null?void 0:i.iconColorClass},email:e.email,mobile_no:e.mobile_no,deal_owner:{label:e.deal_owner&&M(e.deal_owner).full_name,...e.deal_owner&&M(e.deal_owner)},modified:{label:Se(e.modified,De),timeAgo:__($e(e.modified))}}}const de=[{label:__("Organization"),key:"organization",width:"11rem"},{label:__("Amount"),key:"annual_revenue",width:"9rem"},{label:__("Status"),key:"status",width:"10rem"},{label:__("Email"),key:"email",width:"12rem"},{label:__("Mobile no"),key:"mobile_no",width:"11rem"},{label:__("Deal owner"),key:"deal_owner",width:"10rem"},{label:__("Last modified"),key:"modified",width:"8rem"}];return(e,t)=>{const i=j("ErrorMessage"),g=j("Button"),x=j("FeatherIcon"),N=j("Badge");return r(),h(K,null,[o(a).data?(r(),p(ye,{key:0},{"left-header":m(()=>[d(o(Re),{items:te.value},{prefix:m(({item:l})=>[l.icon?(r(),p(_e,{key:0,icon:l.icon,class:"mr-2 h-4"},null,8,["icon"])):u("",!0)]),_:1},8,["items"])]),_:1})):u("",!0),c("div",Le,[o(a).data?(r(),p(me,{key:0,parent:e.$refs.parentRef,class:"flex h-full flex-col overflow-hidden border-r"},{default:m(()=>[c("div",Oe,[d(o(Ae),{onSuccess:T,validateFile:oe},{default:m(({openFileSelector:l,error:n})=>{var s;return[c("div",Ge,[c("div",He,[c("div",Je,[d(o(J),{size:"3xl",class:"h-15.5 w-15.5",label:o(a).data.full_name,image:o(a).data.image},null,8,["label","image"]),(r(),p(U(o(a).data.image?o(Te):"div"),qe(o(a).data.image?{options:[{icon:"upload",label:o(a).data.image?e.__("Change image"):e.__("Upload image"),onClick:l},{icon:"trash-2",label:e.__("Remove image"),onClick:()=>T("")}]}:{onClick:l},{class:"!absolute bottom-0 left-0 right-0"}),{default:m(()=>[c("div",Ke,[d(we,{class:"h-6 w-6 cursor-pointer text-white"})])]),_:2},1040))]),c("div",Qe,[c("div",We,[o(a).data.salutation?(r(),h("span",Xe,C(o(a).data.salutation+". "),1)):u("",!0),c("span",null,C(o(a).data.full_name),1)]),o(a).data.company_name?(r(),h("div",Ye,[d(o(J),{size:"xs",label:o(a).data.company_name,image:(s=o(R)(o(a).data.company_name))==null?void 0:s.organization_logo},null,8,["label","image"]),c("span",Ze,C(o(a).data.company_name),1)])):u("",!0),d(i,{message:e.__(n)},null,8,["message"])])]),c("div",ea,[o(a).data.actual_mobile_no?(r(),p(g,{key:0,label:e.__("Make Call"),size:"sm",onClick:t[0]||(t[0]=v=>o(Ne)&&o(Y)(o(a).data.actual_mobile_no))},{prefix:m(()=>[d(be,{class:"h-4 w-4"})]),_:1},8,["label"])):u("",!0),d(g,{label:e.__("Delete"),theme:"red",size:"sm",onClick:le},{prefix:m(()=>[d(x,{name:"trash-2",class:"h-4 w-4"})]),_:1},8,["label"])])])]}),_:1})]),o(k).data?(r(),h("div",aa,[c("div",ta,[(r(!0),h(K,null,Me(o(k).data,(l,n)=>(r(),h("div",{key:l.label,class:q(["flex flex-col p-3",{"border-b":n!==o(k).data.length-1}])},[d(pe,{"is-opened":l.opened,label:l.label},{actions:m(()=>[n==0&&o(Z)()?(r(),p(g,{key:0,variant:"ghost",class:"w-7",onClick:t[1]||(t[1]=s=>D.value=!0)},{default:m(()=>[d(he,{class:"h-4 w-4"})]),_:1})):u("",!0)]),default:m(()=>[l.fields?(r(),p(ge,{key:0,fields:l.fields,isLastSection:n==o(k).data.length-1,modelValue:o(a).data,"onUpdate:modelValue":t[2]||(t[2]=s=>o(a).data=s),onUpdate:ie},null,8,["fields","isLastSection","modelValue"])):u("",!0)]),_:2},1032,["is-opened","label"])],2))),128))])])):u("",!0)]),_:1},8,["parent"])):u("",!0),d(o(ve),{class:"overflow-hidden",modelValue:A.value,"onUpdate:modelValue":t[3]||(t[3]=l=>A.value=l),tabs:ne},{tab:m(({tab:l,selected:n})=>[c("button",{class:q(["group flex items-center gap-2 border-b border-transparent py-2.5 text-base text-gray-600 duration-300 ease-in-out hover:border-gray-400 hover:text-gray-900",{"text-gray-900":n}])},[l.icon?(r(),p(U(l.icon),{key:0,class:"h-5"})):u("",!0),Q(" "+C(e.__(l.label))+" ",1),d(N,{class:q(["group-hover:bg-gray-900",[n?"bg-gray-900":"bg-gray-600"]]),variant:"solid",theme:"gray",size:"sm"},{default:m(()=>[Q(C(l.count),1)]),_:2},1032,["class"])],2)]),default:m(({tab:l})=>[l.label==="Deals"&&B.value.length?(r(),p(ke,{key:0,class:"mt-4",rows:B.value,columns:re.value,options:{selectable:!1,showTooltip:!1}},null,8,["rows","columns"])):u("",!0),B.value.length?u("",!0):(r(),h("div",oa,[c("div",la,[(r(),p(U(l.icon),{class:"!h-10 !w-10"})),c("div",null,C(e.__("No {0} Found",[e.__(l.label)])),1)])]))]),_:1},8,["modelValue"])],512),D.value?(r(),p(ue,{key:1,modelValue:D.value,"onUpdate:modelValue":t[4]||(t[4]=l=>D.value=l),doctype:"Contact",onReload:t[5]||(t[5]=()=>o(k).reload())},null,8,["modelValue"])):u("",!0),d(xe,{modelValue:$.value,"onUpdate:modelValue":t[6]||(t[6]=l=>$.value=l),address:F.value,"onUpdate:address":t[7]||(t[7]=l=>F.value=l)},null,8,["modelValue","address"])],64)}}};export{Ba as default};
//# sourceMappingURL=Contact-20de75fb.js.map
