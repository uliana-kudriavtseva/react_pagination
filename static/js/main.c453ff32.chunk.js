(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(5),n=c.n(t),i=c(4),r=c(1);function l(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}var s=c(2),o=c.n(s),j=c(0),d=function(e){var a=e.total,c=e.perPage,t=e.currentPage,n=e.handlePageChange,i=Math.ceil(a/c),r=l(1,i);return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:o()("page-item",{disabled:1===t}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===t,onClick:function(){1!==t&&n(t-1)},children:"\xab"})}),r.map((function(e){return Object(j.jsx)("li",{className:o()("page-item",{active:t===e}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})},e)})),Object(j.jsx)("li",{className:o()("page-item",{disabled:t===i}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t===i,onClick:function(){t!==i&&n(t+1)},children:"\xbb"})})]})},u=(c(11),l(1,42)),h=[3,5,10,20],m=function(){var e=Object(r.useState)(1),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Object(r.useState)(5),s=Object(i.a)(n,2),o=s[0],m=s[1],p=u.length,b=o*(c-1)+1,g=Math.min(o*c,p),f=l(b,g).map((function(e){return"Item ".concat(e)}));return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(c," (items ").concat(b," - ").concat(g," of ").concat(p,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:o,onChange:function(e){m(+e.target.value),t(1)},children:h.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:p,perPage:o,currentPage:c,handlePageChange:function(e){t(e)}}),Object(j.jsx)("ul",{children:f.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.c453ff32.chunk.js.map