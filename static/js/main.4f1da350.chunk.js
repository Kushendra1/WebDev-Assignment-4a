(this["webpackJsonpassignment-4"]=this["webpackJsonpassignment-4"]||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var o=t(1),c=t.n(o),l=t(7),r=t.n(l),u=(t(12),t(5)),i=(t(13),t(4)),d=t(0),s=function(e){var n=e.colorSelected,t=e.handleApplyColor;return Object(d.jsx)("td",{style:{backgroundColor:n},onClick:t})},a=function(e){var n=e.numCols,t=e.handleApplyColor;return Object(d.jsx)("tr",{children:Object(i.a)(Array(n)).map((function(e,n){return Object(d.jsx)(s,{handleApplyColor:t},n)}))})},j=function(e){var n=e.numRows,t=e.numCols,o=e.handleApplyColor;return Object(d.jsx)("table",{id:"grid",children:Object(d.jsx)("tbody",{children:Object(i.a)(Array(n)).map((function(e,n){return Object(d.jsx)(a,{numCols:t,handleApplyColor:o},n)}))})})},b=function(){var e=Object(o.useState)(0),n=Object(u.a)(e,2),t=n[0],c=n[1],l=Object(o.useState)(0),r=Object(u.a)(l,2),i=r[0],s=r[1],a=Object(o.useState)("red"),b=Object(u.a)(a,2),h=b[0],g=b[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{class:"header",children:"ReactGrid"}),Object(d.jsx)("button",{onClick:function(){0===t?(c(1),s(1)):c((function(e){return e+1})),console.log(t)},children:"Add Row"}),Object(d.jsx)("button",{onClick:function(){0===i?(c(1),s(1)):s((function(e){return e+1}))},children:"Add Column"}),Object(d.jsx)("button",{onClick:function(){t>0&&(1===t?(c(0),c(0)):c((function(e){return e-1})),console.log(t))},children:"Remove Row"}),Object(d.jsx)("button",{onClick:function(){i>0&&(1===i?(s(0),s(0)):s((function(e){return e-1})),console.log(i))},children:"Remove Column"}),Object(d.jsx)("button",{onClick:function(){for(var e=document.getElementById("grid").getElementsByTagName("td"),n=0;n<e.length;n++)""===e[n].style.backgroundColor&&(e[n].style.backgroundColor=h)},children:"Fill Uncolored"}),Object(d.jsx)("button",{onClick:function(){for(var e=document.getElementById("grid").getElementsByTagName("td"),n=0;n<e.length;n++)e[n].style.backgroundColor=h},children:"Fill All"}),Object(d.jsx)("button",{onClick:function(){for(var e=document.getElementById("grid").getElementsByTagName("td"),n=0;n<e.length;n++)e[n].style.backgroundColor=""},children:"Clear"}),Object(d.jsxs)("select",{onChange:function(e){return g(e.target.value)},children:[Object(d.jsx)("option",{value:"red",children:"Red"}),Object(d.jsx)("option",{value:"blue",children:"Blue"}),Object(d.jsx)("option",{value:"yellow",children:"Yellow"}),Object(d.jsx)("option",{value:"brown",children:"Brown"})]}),Object(d.jsx)(j,{numRows:t,numCols:i,handleApplyColor:function(e){return e.target.style.backgroundColor=h}})]})};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4f1da350.chunk.js.map