if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(n.map((s=>o[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-78e2cf90"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AddressModal-f05a16ba.js",revision:null},{url:"assets/ArrowUpRightIcon-c7d9b987.js",revision:null},{url:"assets/AssignmentModal-05490a15.js",revision:null},{url:"assets/Breadcrumbs.vue_vue_type_script_setup_true_lang-f62edb55.js",revision:null},{url:"assets/CalendarIcon-82335e5a.js",revision:null},{url:"assets/callLog-a8cebf6e.js",revision:null},{url:"assets/CallLogs-3848b2d2.js",revision:null},{url:"assets/CallLogs-452f60e3.css",revision:null},{url:"assets/CallUI-9e306b4a.css",revision:null},{url:"assets/CallUI-a34e2e63.js",revision:null},{url:"assets/CameraIcon-41c034c5.js",revision:null},{url:"assets/CommentIcon-34bc4e38.js",revision:null},{url:"assets/Contact-aafe7f34.js",revision:null},{url:"assets/ContactModal-9b743d3c.js",revision:null},{url:"assets/ContactModal-eca9ff9c.css",revision:null},{url:"assets/Contacts-73813030.js",revision:null},{url:"assets/contacts-8b95bc33.js",revision:null},{url:"assets/ContactsIcon-c26dc44d.js",revision:null},{url:"assets/ContactsListView-30425fb6.js",revision:null},{url:"assets/CustomActions-a217a3f8.js",revision:null},{url:"assets/Dashboard-31977458.js",revision:null},{url:"assets/DatePicker.vue_vue_type_script_setup_true_lang-794b5ef3.js",revision:null},{url:"assets/Deal-6bb0fdfb.js",revision:null},{url:"assets/Deal-e696fd7f.css",revision:null},{url:"assets/Deals-d88276f5.js",revision:null},{url:"assets/DealsIcon-b0065eff.js",revision:null},{url:"assets/DealsListView-8346040c.js",revision:null},{url:"assets/DesktopLayout-46d7637f.js",revision:null},{url:"assets/DetailsIcon-163fe66d.js",revision:null},{url:"assets/DragVerticalIcon-a9ef58cc.js",revision:null},{url:"assets/Dropdown.vue_vue_type_script_setup_true_lang-12b7bb51.js",revision:null},{url:"assets/Email2Icon-f91ce801.js",revision:null},{url:"assets/EmailAtIcon-7ebcd968.js",revision:null},{url:"assets/EmailTemplate-6ebc18eb.js",revision:null},{url:"assets/EmailTemplateModal-7714e68d.js",revision:null},{url:"assets/EmailTemplates-70dd12d0.js",revision:null},{url:"assets/FadedScrollableDiv-d2244b1c.js",revision:null},{url:"assets/Fields-440c5ac3.css",revision:null},{url:"assets/Fields-613332f3.js",revision:null},{url:"assets/FileUploader-1bae2b25.js",revision:null},{url:"assets/FontColor-3d6ff841.js",revision:null},{url:"assets/IconPicker-495e01ca.js",revision:null},{url:"assets/index-34a9c97b.css",revision:null},{url:"assets/index-44d5e71e.js",revision:null},{url:"assets/index-f8842404.js",revision:null},{url:"assets/IndicatorIcon-8b86ca34.js",revision:null},{url:"assets/InsertImage-1ca7a6d1.js",revision:null},{url:"assets/InsertLink-b2b5187f.js",revision:null},{url:"assets/InsertVideo-276d3ae6.js",revision:null},{url:"assets/InvalidPage-d6ed109a.js",revision:null},{url:"assets/KanbanView-943060ed.js",revision:null},{url:"assets/LayoutHeader-eee8b844.js",revision:null},{url:"assets/Lead-e97d7dce.js",revision:null},{url:"assets/Leads-f6884fcf.js",revision:null},{url:"assets/LeadsIcon-b3b59295.js",revision:null},{url:"assets/LinkIcon-46e7e2fd.js",revision:null},{url:"assets/ListBulkActions-e8f07fb0.js",revision:null},{url:"assets/ListFooter-bcd33ede.js",revision:null},{url:"assets/ListRows-1b856e88.js",revision:null},{url:"assets/MarkAsDoneIcon-6100ca50.js",revision:null},{url:"assets/MobileContact-97fb6e7c.js",revision:null},{url:"assets/MobileDeal-9c42e52c.js",revision:null},{url:"assets/MobileLayout-7ff3bdfe.js",revision:null},{url:"assets/MobileLead-877b6c7d.js",revision:null},{url:"assets/MobileNotification-1eb08853.js",revision:null},{url:"assets/MobileOrganization-4d7c19cc.js",revision:null},{url:"assets/NoteModal-c0696905.js",revision:null},{url:"assets/Notes-0bbebac6.js",revision:null},{url:"assets/notifications-7747c1ed.js",revision:null},{url:"assets/Organization-9afc4829.js",revision:null},{url:"assets/OrganizationModal-6994d635.js",revision:null},{url:"assets/organizations-20ed6c43.js",revision:null},{url:"assets/Organizations-56ae83c2.js",revision:null},{url:"assets/OrganizationsIcon-ee772c59.js",revision:null},{url:"assets/PhoneIcon-c4a5b6b9.js",revision:null},{url:"assets/PinIcon-892715bb.js",revision:null},{url:"assets/QuickEntryModal-d0d6fb81.js",revision:null},{url:"assets/Section-866fa152.js",revision:null},{url:"assets/settings-eb655a0b.js",revision:null},{url:"assets/SidePanelModal-61bc5f39.js",revision:null},{url:"assets/statuses-12883252.js",revision:null},{url:"assets/Switch.vue_vue_type_script_setup_true_lang-8c5606e7.js",revision:null},{url:"assets/TaskIcon-41a3f866.js",revision:null},{url:"assets/TaskModal-38b94265.js",revision:null},{url:"assets/TaskModal-50dd9ecc.css",revision:null},{url:"assets/Tasks-edcef2b4.js",revision:null},{url:"assets/useActiveTabManager-5729630a.js",revision:null},{url:"assets/useActiveTabManager-5c5d8759.css",revision:null},{url:"assets/view-67dd7097.js",revision:null},{url:"assets/view-96305c41.css",revision:null},{url:"assets/ViewControls-4fe56d83.js",revision:null},{url:"assets/views-c6d92e18.js",revision:null},{url:"assets/WebsiteIcon-723387b8.js",revision:null},{url:"assets/WhatsAppIcon-e519cf18.js",revision:null},{url:"index.html",revision:"ccf5843d08fcf9fb299b2430dd5160e5"},{url:"registerSW.js",revision:"c05366fa02b0c433223d141a5e2f2040"},{url:"manifest.webmanifest",revision:"8bd1dc465e950b2ed01f4b3c89979f05"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
