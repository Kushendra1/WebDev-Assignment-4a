(this["webpackJsonpassignment-4"]=this["webpackJsonpassignment-4"]||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var o=t(1),c=t.n(o),l=t(7),r=t.n(l),i=(t(12),t(5)),a=(t(13),t(4)),s=t(0),d=function(e){var n=e.colorSelected,t=e.handleApplyColor;return Object(s.jsx)("td",{style:{backgroundColor:n},onClick:t})},u=function(e){var n=e.numCols,t=e.handleApplyColor;return Object(s.jsx)("tr",{children:Object(a.a)(Array(n)).map((function(e,n){return Object(s.jsx)(d,{handleApplyColor:t},n)}))})},j=function(e){var n=e.numRows,t=e.numCols,o=e.handleApplyColor;return Object(s.jsx)("table",{id:"grid",children:Object(s.jsx)("tbody",{children:Object(a.a)(Array(n)).map((function(e,n){return Object(s.jsx)(u,{numCols:t,handleApplyColor:o},n)}))})})},b=function(){var e=Object(o.useState)(0),n=Object(i.a)(e,2),t=n[0],c=n[1],l=Object(o.useState)(0),r=Object(i.a)(l,2),a=r[0],d=r[1],u=Object(o.useState)("red"),b=Object(i.a)(u,2),h=b[0],O=b[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{class:"header",children:"ReactGrid"}),Object(s.jsxs)("div",{class:"description",children:[Object(s.jsx)("p",{children:"Add some rows and columns, create a grid, and draw a picture."}),Object(s.jsx)("p",{children:"CHALLENGE: Create an AmongUs character!"})]}),Object(s.jsx)("button",{onClick:function(){0===t?(c(1),d(1)):c((function(e){return e+1})),console.log(t)},children:"Add Row"}),Object(s.jsx)("button",{onClick:function(){0===a?(c(1),d(1)):d((function(e){return e+1}))},children:"Add Column"}),Object(s.jsx)("button",{onClick:function(){t>0&&(1===t?(c(0),c(0)):c((function(e){return e-1})),console.log(t))},children:"Remove Row"}),Object(s.jsx)("button",{onClick:function(){a>0&&(1===a?(d(0),d(0)):d((function(e){return e-1})),console.log(a))},children:"Remove Column"}),Object(s.jsx)("button",{onClick:function(){for(var e=document.getElementById("grid").getElementsByTagName("td"),n=0;n<e.length;n++)""===e[n].style.backgroundColor&&(e[n].style.backgroundColor=h)},children:"Fill Uncolored"}),Object(s.jsx)("button",{onClick:function(){for(var e=document.getElementById("grid").getElementsByTagName("td"),n=0;n<e.length;n++)e[n].style.backgroundColor=h},children:"Fill All"}),Object(s.jsx)("button",{onClick:function(){for(var e=document.getElementById("grid").getElementsByTagName("td"),n=0;n<e.length;n++)e[n].style.backgroundColor=""},class:"clear",children:"Clear"}),Object(s.jsxs)("select",{onChange:function(e){return O(e.target.value)},children:[Object(s.jsx)("option",{value:"red",children:"Red"}),Object(s.jsx)("option",{value:"#ffc0cb",children:"Pink"}),Object(s.jsx)("option",{value:"#FFE5B4",children:"Peach"}),Object(s.jsx)("option",{value:"#1338be",children:"Blue"}),Object(s.jsx)("option",{value:"#000080",children:"Navy Blue"}),Object(s.jsx)("option",{value:"yellow",children:"Yellow"}),Object(s.jsx)("option",{value:"brown",children:"Brown"}),Object(s.jsx)("option",{value:"#00FFFF",children:"Cyan"}),Object(s.jsx)("option",{value:"",children:"Erase"})]}),Object(s.jsx)(j,{numRows:t,numCols:a,handleApplyColor:function(e){return e.target.style.backgroundColor=h}})]})};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6d0d0f25.chunk.js.map