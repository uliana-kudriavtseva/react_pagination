(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var c=t(5),n=t.n(c),i=t(4),r=t(1);function l(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}var s=1,o=5,j={option1:3,option2:5,option3:10,option4:20},d=t(2),p=t.n(d),u=t(0),h=function(e){var a=e.total,t=e.perPage,c=e.currentPage,n=e.handlePageChange,i=Math.ceil(a/t),r=l(1,i);return Object(u.jsxs)("ul",{className:"pagination",children:[Object(u.jsx)("li",{className:p()("page-item",{disabled:1===c}),children:Object(u.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===c,onClick:function(){1!==c&&n(c-1)},children:"\xab"})}),r.map((function(e){return Object(u.jsx)("li",{className:p()("page-item",{active:c===e}),children:Object(u.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})},e)})),Object(u.jsx)("li",{className:p()("page-item",{disabled:c===i}),children:Object(u.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":c===i,onClick:function(){c!==i&&n(c+1)},children:"\xbb"})})]})},m=(t(11),l(1,42)),b=function(){var e=Object(r.useState)(s),a=Object(i.a)(e,2),t=a[0],c=a[1],n=Object(r.useState)(o),d=Object(i.a)(n,2),p=d[0],b=d[1],g=m.length,O=p*(t-1)+1,f=Math.min(p*t,g),x=l(O,f).map((function(e){return"Item ".concat(e)}));return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Items with Pagination"}),Object(u.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(t," (items ").concat(O," - ").concat(f," of ").concat(g,")")}),Object(u.jsxs)("div",{className:"form-group row",children:[Object(u.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(u.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:p,onChange:function(e){b(+e.target.value),c(1)},children:Object.keys(j).map((function(e){return Object(u.jsx)("option",{value:j[e],children:j[e]},e)}))})}),Object(u.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(u.jsx)(h,{total:g,perPage:p,currentPage:t,handlePageChange:function(e){c(e)}}),Object(u.jsx)("ul",{children:x.map((function(e){return Object(u.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.372a52f2.chunk.js.map