"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[658],{5658:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var a=n(9439),r=n(4420),s="Form_form__YWAbU",c="Form_button__ncXv5",i="Form_input__R2HMA",o=n(2791),l=n(1686),u=n.n(l),m=n(4794),f=n(9247),d=n(184),_=function(){var e=(0,o.useState)(""),t=(0,a.Z)(e,2),n=t[0],l=t[1],_=(0,o.useState)(""),h=(0,a.Z)(_,2),p=h[0],v=h[1],x=(0,r.I0)(),j=(0,r.v9)(m.rT),b=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":l(a);break;case"number":v(a)}},C=function(e,t){return e.find((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))},N=function(){l(""),v("")};return(0,d.jsxs)("form",{className:s,onSubmit:function(e){e.preventDefault();var t={name:n,phone:p};void 0===C(j,t)?(x((0,f.je)(t)),N()):u().Notify.failure("".concat(t.name," is already in contacts"),{width:"400px",position:"center-center",timeout:3e3,fontSize:"20px"})},children:[(0,d.jsxs)("label",{children:["Name ",(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:i,type:"text",name:"name",value:n,required:!0,onChange:b})]}),(0,d.jsxs)("label",{children:["Phone number ",(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:i,type:"tel",name:"number",value:p,required:!0,onChange:b})]}),(0,d.jsx)("button",{className:c,type:"submit",children:"Add contact"})]})},h="ContactsPage_title__WYTlr",p="ContactsPage_contactsWrapper__7MKLe",v="ContactsPage_phonebookWrapper__Qj+YV",x={filterField:"Filter_filterField__hjFfe"},j=n(2155),b=function(){var e=(0,r.I0)(),t=(0,r.v9)(j.zK);return(0,d.jsxs)("label",{className:x.filterInput,children:["Find contacts by name: ",(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:x.filterField,type:"text",name:"filter",value:t,onChange:function(t){var n=t.currentTarget.value;e((0,j.Ks)(n))}})]})},C=n(8844),N="ContactList_listContact__gg2c1",g="ContactList_buttonDelete__3LEoC",k="ContactList_contactItem__ppNQ5",w=function(){var e=(0,r.I0)();(0,o.useEffect)((function(){e((0,f.m$)())}),[e]);var t=(0,r.v9)(m.rT),n=(0,r.v9)(j.zK).toLowerCase(),a=t.filter((function(e){return e.name.toLowerCase().includes(n)}));return(0,d.jsx)("ul",{className:N,children:a.map((function(t){var n=t.name,a=t.phone,r=t.id;return(0,d.jsxs)("li",{className:k,children:[(0,d.jsxs)("p",{children:[n,": ",a]}),(0,d.jsx)("button",{type:"button",className:g,onClick:function(){return t=r,void e((0,f.xX)(t));var t},children:"Delete"})]},r)}))})},F=function(){var e=(0,r.v9)(m.Vc),t=(0,r.v9)(m.rT);return(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:v,children:[(0,d.jsx)("h1",{className:h,children:"Phonebook"}),(0,d.jsx)(_,{})]}),(0,d.jsxs)("div",{className:p,children:[(0,d.jsx)("h2",{className:h,children:"Contacts"}),null!==t&&(0,d.jsx)(b,{}),e&&(0,d.jsx)(C.a,{}),(0,d.jsx)(w,{})]})]})}}}]);
//# sourceMappingURL=658.65868c4f.chunk.js.map