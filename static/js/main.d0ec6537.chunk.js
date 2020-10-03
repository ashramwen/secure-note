(this["webpackJsonpsecure-note"]=this["webpackJsonpsecure-note"]||[]).push([[0],{134:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(34),o=n.n(l),c=n(35),i=n(2),u=n(1),s="#ffffff";function f(){var e=Object(i.a)(["\n  button {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    border: none;\n    &:focus {\n      outline: none;\n    }\n\n    svg {\n      margin-right: 8px;\n    }\n  }\n"]);return f=function(){return e},e}var d=Object(u.css)(f());function p(){var e=Object(i.a)(["\n  input,\n  textarea {\n    border: none;\n    &:focus {\n      outline: none;\n    }\n  }\n"]);return p=function(){return e},e}var m=Object(u.css)(p());function v(){var e=Object(i.a)(["\n  html, body {\n    height: 100%;\n  }\n\n  body {\n    margin: 0;\n    font-family: 'Arial', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n      monospace;\n  }\n\n  *, *::before, *::after{\n    color: ",";\n  } \n\n  #root {\n    height: 100%;\n  }\n\n  ",";\n  ",";\n"]);return v=function(){return e},e}var h=Object(u.createGlobalStyle)(v(),"#05203f",d,m),b=n(13),g=n(44),y=n(25),O=n(7);function x(e,t){switch(t.type){case"switchMode":return Object(O.a)({},e,{editMode:t.payload});case"selectNote":return Object(O.a)({},e,{selected:t.payload,plainText:null});case"decrypt":return Object(O.a)({},e,{plainText:t.payload});case"newNote":return Object(O.a)({},e,{selected:null,editMode:!0,plainText:null});case"saveNewNote":var n,r,a=t.payload,l=a.title,o=a.content,c=a.plainText,i={id:(null!==(n=null===(r=e.notes[e.notes.length-1])||void 0===r?void 0:r.id)&&void 0!==n?n:0)+1,title:l,content:o};return Object(O.a)({},e,{notes:[].concat(Object(y.a)(e.notes),[i]),selected:i,editMode:!1,plainText:c});case"updateNote":var u=e.notes,s=e.selected,f=t.payload,d=f.title,p=f.content,m=f.plainText,v=null,h=u.map((function(e){return e.id===s.id?v={id:s.id,title:d,content:p}:e}));return Object(O.a)({},e,{notes:h,selected:v,editMode:!1,plainText:m});case"deleteNote":var b=e.notes,g=e.selected,x=b.reduce((function(e,t){return t.id===g.id?e:[].concat(Object(y.a)(e),[t])}),[]);return Object(O.a)({},e,{notes:x,selected:null,editMode:!1,plainText:null,modal:!1});case"switchSpinner":return Object(O.a)({},e,{spinning:t.payload});case"switchModal":return Object(O.a)({},e,{modal:t.payload});default:return e}}var E={notes:[],selected:null,editMode:!1,plainText:null,spinning:!1,modal:!1},j=Object(r.createContext)({}),w=function(e){var t=e.children,n=Object(g.a)(x,E),r=Object(b.a)(n,2),l={state:r[0],dispatch:r[1]};return a.a.createElement(j.Provider,{value:l},t)},k=n(3);function R(){var e=Object(i.a)(["\n  box-sizing: border-box;\n\n  ","\n"]);return R=function(){return e},e}var C=Object(k.d)(k.h,k.f,k.c,k.b,k.a,k.g,k.i),P=u.default.div(R(),C);P.displayName="Box";var N=P;function S(){var e=Object(i.a)(["\n  display: flex;\n\n  ",";\n"]);return S=function(){return e},e}var M=Object(u.default)(N)(S(),k.e);M.displayName="Flex";var L=M;function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var I=a.a.createElement("rect",{width:14,height:14,fill:"none"}),B=a.a.createElement("g",{transform:"translate(-1999.5 -356.5)"},a.a.createElement("line",{x2:10,y2:10,transform:"translate(2001.5 358.5)",fill:"none",stroke:"#fff",strokeLinecap:"round",strokeWidth:2}),a.a.createElement("line",{x1:10,y2:10,transform:"translate(2001.5 358.5)",fill:"none",stroke:"#fff",strokeLinecap:"round",strokeWidth:2})),D=function(e){var t=e.svgRef,n=e.title,r=W(e,["svgRef","title"]);return a.a.createElement("svg",T({width:14,height:14,viewBox:"0 0 14 14",ref:t},r),n?a.a.createElement("title",null,n):null,I,B)},H=a.a.forwardRef((function(e,t){return a.a.createElement(D,T({svgRef:t},e))}));n.p;function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var G=a.a.createElement("g",{transform:"translate(0.414 0.414)"},a.a.createElement("rect",{width:14,height:14,fill:"none"}),a.a.createElement("g",{transform:"translate(-2000.5 -357.5)"},a.a.createElement("line",{x2:12,y2:12,transform:"translate(2001.5 358.5)",fill:"none",stroke:"#ccc",strokeLinecap:"round",strokeWidth:2}),a.a.createElement("line",{x1:12,y2:12,transform:"translate(2001.5 358.5)",fill:"none",stroke:"#ccc",strokeLinecap:"round",strokeWidth:2}))),V=function(e){var t=e.svgRef,n=e.title,r=F(e,["svgRef","title"]);return a.a.createElement("svg",A({width:14.828,height:14.828,viewBox:"0 0 14.828 14.828",ref:t},r),n?a.a.createElement("title",null,n):null,G)},z=a.a.forwardRef((function(e,t){return a.a.createElement(V,A({svgRef:t},e))}));n.p;function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var U=a.a.createElement("rect",{width:16,height:18,fill:"none"}),J=a.a.createElement("g",{transform:"translate(-1814.6 -763)"},a.a.createElement("path",{d:"M8.357,18.722A1.752,1.752,0,0,0,10.071,20.5h6.857a1.752,1.752,0,0,0,1.714-1.778V6.491H8.357ZM19.5,5.389h-3L15.643,4.5H11.357l-.857.889h-3v.778h12Z",transform:"translate(1809.1 759.5)",fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:1.5}),a.a.createElement("line",{y2:6,transform:"translate(1822.5 770.5)",fill:"none",stroke:"#fff",strokeLinecap:"round",strokeWidth:1.5}),a.a.createElement("line",{y2:6,transform:"translate(1820 770.5)",fill:"none",stroke:"#fff",strokeLinecap:"round",strokeWidth:1.5}),a.a.createElement("line",{y2:6,transform:"translate(1825 770.5)",fill:"none",stroke:"#fff",strokeLinecap:"round",strokeWidth:1.5})),Y=function(e){var t=e.svgRef,n=e.title,r=_(e,["svgRef","title"]);return a.a.createElement("svg",Z({width:16,height:18,viewBox:"0 0 16 18",ref:t},r),n?a.a.createElement("title",null,n):null,U,J)},$=a.a.forwardRef((function(e,t){return a.a.createElement(Y,Z({svgRef:t},e))}));n.p;function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Q=a.a.createElement("rect",{width:18,height:18,fill:"none"}),X=a.a.createElement("g",{transform:"translate(-2 -1.818)"},a.a.createElement("path",{d:"M10.157,6H4.59A1.59,1.59,0,0,0,3,7.59V18.723a1.59,1.59,0,0,0,1.59,1.59H15.723a1.59,1.59,0,0,0,1.59-1.59V13.157",transform:"translate(0 -1.495)",fill:"none",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5}),a.a.createElement("path",{d:"M20.349,3.312A1.687,1.687,0,0,1,22.735,5.7l-7.554,7.554-3.181.8.8-3.181Z",transform:"translate(-4.229)",fill:"none",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5})),ee=function(e){var t=e.svgRef,n=e.title,r=K(e,["svgRef","title"]);return a.a.createElement("svg",q({width:18,height:18,viewBox:"0 0 18 18",ref:t},r),n?a.a.createElement("title",null,n):null,Q,X)},te=a.a.forwardRef((function(e,t){return a.a.createElement(ee,q({svgRef:t},e))}));n.p;function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function re(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ae=a.a.createElement("defs",null,a.a.createElement("style",null,"\n      .plus-cls-1 {\n        fill: none;\n      }\n    ")),le=a.a.createElement("g",{id:"Group_23","data-name":"Group 23",transform:"translate(-587 -153)"},a.a.createElement("rect",{id:"Rectangle_13","data-name":"Rectangle 13",className:"plus-cls-1",width:16,height:16,transform:"translate(587 153)"}),a.a.createElement("path",{id:"Icon_Add","data-name":"Icon Add",d:"M23.969,15.969H17.961V9.961a1,1,0,0,0-1.992,0v6.008H9.961a1,1,0,0,0,0,1.992h6.008v6.008a1,1,0,1,0,1.992,0V17.961h6.008a1,1,0,0,0,0-1.992Z",transform:"translate(578.042 144.035)"})),oe=function(e){var t=e.svgRef,n=e.title,r=re(e,["svgRef","title"]);return a.a.createElement("svg",ne({width:16.007,height:16,viewBox:"0 0 16.007 16",ref:t},r),n?a.a.createElement("title",null,n):null,ae,le)},ce=a.a.forwardRef((function(e,t){return a.a.createElement(oe,ne({svgRef:t},e))}));n.p;function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ue(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var se=a.a.createElement("rect",{width:18,height:18,fill:"none"}),fe=a.a.createElement("g",{transform:"translate(-3.5 -3.5)"},a.a.createElement("path",{d:"M18.722,20.5H6.278A1.778,1.778,0,0,1,4.5,18.722V6.278A1.778,1.778,0,0,1,6.278,4.5h9.778L20.5,8.944v9.778A1.778,1.778,0,0,1,18.722,20.5Z",fill:"none",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5}),a.a.createElement("path",{d:"M19.389,26.611V19.5H10.5v7.111",transform:"translate(-2.444 -6.111)",fill:"none",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5}),a.a.createElement("path",{d:"M10.5,4.5V8.944h7.111",transform:"translate(-2.444)",fill:"none",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5})),de=function(e){var t=e.svgRef,n=e.title,r=ue(e,["svgRef","title"]);return a.a.createElement("svg",ie({width:18,height:18,viewBox:"0 0 18 18",ref:t},r),n?a.a.createElement("title",null,n):null,se,fe)},pe=a.a.forwardRef((function(e,t){return a.a.createElement(de,ie({svgRef:t},e))}));n.p;function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ve(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var he=a.a.createElement("rect",{width:18,height:18,fill:"none"}),be=a.a.createElement("g",{transform:"translate(-6359 -1522)"},a.a.createElement("circle",{cx:1.559,cy:1.559,r:1.559,transform:"translate(6365.997 1522)",fill:"#fff"}),a.a.createElement("circle",{cx:1.559,cy:1.559,r:1.559,transform:"translate(6361.013 1524.209)",fill:"#fff"}),a.a.createElement("circle",{cx:1.299,cy:1.299,r:1.299,transform:"translate(6359 1529.993)",fill:"#fff"}),a.a.createElement("circle",{cx:1.039,cy:1.039,r:1.039,transform:"translate(6361.533 1535.776)",fill:"#fff"}),a.a.createElement("ellipse",{cx:.909,cy:.91,rx:.909,ry:.91,transform:"translate(6366.387 1538.181)",fill:"#fff"}),a.a.createElement("g",{transform:"translate(6369.892 1524.209)"},a.a.createElement("circle",{cx:1.56,cy:1.56,r:1.56,transform:"translate(1.52)",fill:"#fff"}),a.a.createElement("circle",{cx:1.755,cy:1.755,r:1.755,transform:"translate(3.599 5.328)",fill:"#fff"}),a.a.createElement("circle",{cx:2.144,cy:2.144,r:2.144,transform:"translate(0 10.462)",fill:"#fff"}))),ge=function(e){var t=e.svgRef,n=e.title,r=ve(e,["svgRef","title"]);return a.a.createElement("svg",me({width:18,height:18,viewBox:"0 0 18 18",ref:t},r),n?a.a.createElement("title",null,n):null,he,be)};a.a.forwardRef((function(e,t){return a.a.createElement(ge,me({svgRef:t},e))})),n.p;function ye(){return(ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Oe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var xe=a.a.createElement("rect",{width:47.999,height:47.999,fill:"none"}),Ee=a.a.createElement("circle",{cx:4.157,cy:4.157,r:4.157,transform:"translate(18.659)",fill:"rgba(66,156,252,0.7)"}),je=a.a.createElement("circle",{cx:4.157,cy:4.157,r:4.157,transform:"translate(5.368 5.892)",fill:"rgba(66,156,252,0.6)"}),we=a.a.createElement("circle",{cx:3.464,cy:3.464,r:3.464,transform:"translate(0 21.314)",fill:"rgba(66,156,252,0.5)"}),ke=a.a.createElement("circle",{cx:2.771,cy:2.771,r:2.771,transform:"translate(6.755 36.736)",fill:"rgba(66,156,252,0.4)"}),Re=a.a.createElement("ellipse",{cx:2.425,cy:2.426,rx:2.425,ry:2.426,transform:"translate(19.699 43.148)",fill:"rgba(66,156,252,0.3)"}),Ce=a.a.createElement("g",{transform:"translate(29.045 5.892)"},a.a.createElement("circle",{cx:4.159,cy:4.159,r:4.159,transform:"translate(4.052)",fill:"rgba(66,156,252,0.8)"}),a.a.createElement("circle",{cx:4.679,cy:4.679,r:4.679,transform:"translate(9.598 14.209)",fill:"rgba(66,156,252,0.9)"}),a.a.createElement("circle",{cx:5.718,cy:5.718,r:5.718,transform:"translate(0 27.898)",fill:"#429cfc"})),Pe=function(e){var t=e.svgRef,n=e.title,r=Oe(e,["svgRef","title"]);return a.a.createElement("svg",ye({width:48,height:47.999,viewBox:"0 0 48 47.999",ref:t},r),n?a.a.createElement("title",null,n):null,xe,Ee,je,we,ke,Re,Ce)},Ne=a.a.forwardRef((function(e,t){return a.a.createElement(Pe,ye({svgRef:t},e))}));n.p;function Se(){var e=Object(i.a)(["\n  animation: "," 1.6s linear infinite;\n"]);return Se=function(){return e},e}function Me(){var e=Object(i.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);return Me=function(){return e},e}var Le=Object(u.keyframes)(Me()),Te=u.default.div(Se(),Le);function We(e){var t=e.overlay,n=e.absolute;return a.a.createElement(L,{flexGrow:"1",justifyContent:"center",alignItems:"center",bg:t&&"rgba(0, 0, 0, 0.3)",position:n&&"absolute",height:"100%",width:"100%"},a.a.createElement(Te,null,a.a.createElement(Ne,{"aria-label":"spinner"})))}We.defaultProps={overlay:!1,absolute:!1};var Ie=We,Be=function(e){return null==e},De=n(39),He=n.n(De);function Ae(){var e=Object(i.a)(["\n  height: 36px;\n  border-radius: 4px;\n  padding: 0 16px;\n  color: ",";\n\n  &.edit {\n    background-color: ",";\n\n    &:hover {\n      background-color: ",";\n    }\n  }\n\n  &.save {\n    background-color: ",";\n\n    &:hover {\n      background-color: ",";\n    }\n  }\n\n  &.cancel {\n    background-color: ",";\n\n    &:hover {\n      background-color: ",";\n    }\n  }\n\n  &.delete {\n    background-color: ",";\n\n    &:hover {\n      background-color: ",";\n    }\n  }\n\n  ",";\n"]);return Ae=function(){return e},e}var Fe=u.default.button(Ae(),s,"#5caf5c","#79b779","#429cfc","#60adff","#cccccc","#9d9d9d","#cb444a","#e86a6f",k.h);Fe.displayName="Button";var Ge=Fe;function Ve(){var e=Object(i.a)(["\n  width: 100%;\n  margin: 24px 0;\n  border-bottom: 1px solid ",";\n"]);return Ve=function(){return e},e}var ze=u.default.div(Ve(),"#cccccc");ze.displayName="Divider";var Ze=ze;function _e(){var e=Object(i.a)(["\n  width: 4px;\n  height: 100%;\n  background-color: ",";\n  border-top-right-radius: 2px;\n  border-bottom-right-radius: 2px;\n"]);return _e=function(){return e},e}var Ue=Object(u.css)(_e(),"#429cfc");function Je(){var e=Object(i.a)(["\n  margin-right: 16px;\n\n  ","\n"]);return Je=function(){return e},e}var Ye=u.default.div(Je(),Ue);Ye.displayName="TitleHighlight";var $e=Ye;var qe=function(){var e=Object(r.useContext)(j),t=e.state,n=e.dispatch,l=t.selected,o=t.plainText,c=t.editMode;return a.a.createElement(a.a.Fragment,null,l&&!Be(o)&&!c&&a.a.createElement(a.a.Fragment,null,a.a.createElement(L,{flexGrow:"1",flexDirection:"column"},a.a.createElement(L,{height:"25px",alignItems:"center"},a.a.createElement($e,null),a.a.createElement(N,{fontSize:"20px",p:"1px 0 1px 2px"},l.title)),a.a.createElement(Ze,null),a.a.createElement(N,null,a.a.createElement(He.a,{source:o}))),a.a.createElement(L,{justifyContent:"flex-end",p:"5px"},a.a.createElement(Ge,{className:"edit",onClick:function(){n({type:"switchMode",payload:!0})}},a.a.createElement(te,null),"Edit"))))},Ke=n(5),Qe=n.n(Ke),Xe=n(9),et=function(){var e=Object(Xe.a)(Qe.a.mark((function e(t){return Qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){setTimeout(e,t)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),tt=function(){var e=Object(Xe.a)(Qe.a.mark((function e(t){return Qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,et(500);case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),nt=function(){var e=Object(Xe.a)(Qe.a.mark((function e(t){return Qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,et(500);case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function rt(){var e=Object(i.a)(["\n  resize: none;\n  height: 100%;\n"]);return rt=function(){return e},e}function at(){var e=Object(i.a)(["\n  font-size: 20px;\n"]);return at=function(){return e},e}var lt=u.default.input(at()),ot=u.default.textarea(rt());var ct=function(){var e,t=Object(r.useContext)(j),n=t.state,l=t.dispatch,o=n.selected,c=n.editMode,i=n.plainText,u=Object(r.useState)(null!==(e=null===o||void 0===o?void 0:o.title)&&void 0!==e?e:""),s=Object(b.a)(u,2),f=s[0],d=s[1],p=Object(r.useState)(null!==i&&void 0!==i?i:""),m=Object(b.a)(p,2),v=m[0],h=m[1],g=function(){var e=Object(Xe.a)(Qe.a.mark((function e(){var t,n;return Qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l({type:"switchSpinner",payload:!0}),e.next=3,tt(v);case 3:t=e.sent,n={title:""===f?"Untitled":f,content:t,plainText:v},l(o?{type:"updateNote",payload:n}:{type:"saveNewNote",payload:n}),l({type:"switchSpinner",payload:!1});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e;c&&(d(null!==(e=null===o||void 0===o?void 0:o.title)&&void 0!==e?e:""),h(null!==i&&void 0!==i?i:""))}),[o,i,c]),a.a.createElement(a.a.Fragment,null,c&&a.a.createElement(a.a.Fragment,null,a.a.createElement(L,{flexGrow:"1",flexDirection:"column"},a.a.createElement(L,null,a.a.createElement(lt,{type:"text",placeholder:"Title","aria-label":"title",value:f,onChange:function(e){d(e.target.value)}})),a.a.createElement(Ze,null),a.a.createElement(ot,{"aria-label":"content",placeholder:"Write your note here...",value:v,onChange:function(e){h(e.target.value)}})),a.a.createElement(L,{justifyContent:"space-between"},a.a.createElement(Ge,{className:"cancel",onClick:function(){l({type:"switchMode",payload:!1})}},a.a.createElement(H,null),"Cancel"),a.a.createElement(L,null,a.a.createElement(Ge,{className:"save",onClick:g},a.a.createElement(pe,null),"Save"),o&&a.a.createElement(Ge,{className:"delete",ml:"24px",onClick:function(){l({type:"switchModal",payload:!0})}},a.a.createElement($,null),"Delete")))))};var it=function(){var e=Object(r.useContext)(j).state,t=e.selected,n=e.plainText;return a.a.createElement(L,{flexGrow:"1",flexDirection:"column",p:"60px",position:"relative"},a.a.createElement(ct,null),a.a.createElement(qe,null),t&&Be(n)&&a.a.createElement(Ie,null))},ut=n(40),st=n.n(ut),ft=n(41),dt=n(42),pt=n(14),mt=n(43),vt=function(){function e(){Object(ft.a)(this,e),Object.defineProperty(this,ht,{writable:!0,value:void 0})}return Object(dt.a)(e,[{key:"getPromise",value:function(e){return Object(pt.a)(this,ht)[ht]=e,Object(pt.a)(this,ht)[ht].then(this._preventRaceCondition())}},{key:"_preventRaceCondition",value:function(){var e=this,t=Object(pt.a)(this,ht)[ht];return function(n){return Object(pt.a)(e,ht)[ht]===t?n:new Promise((function(){return null}))}}}]),e}(),ht=Object(mt.a)("lastPromise");function bt(){var e=Object(i.a)(["\n  padding: 15px 16px;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n  background-color: ",";\n  border-radius: 24px;\n\n  svg {\n    fill: ",";\n  }\n\n  &:hover {\n    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);\n  }\n\n  &:disabled {\n    color: ",";\n    background-color: ",";\n    box-shadow: none;\n\n    svg {\n      fill: ",";\n    }\n  }\n\n  ","\n"]);return bt=function(){return e},e}var gt=u.default.button(bt(),s,"#429cfc",s,"#cccccc",s,k.h);gt.displayName="RoundedButton";var yt=gt;function Ot(){var e=Object(i.a)(["\n  position: relative;\n  cursor: pointer;\n  align-items: center;\n  height: 20px;\n  padding-left: 20px;\n  margin: 12px 0;\n  user-select: none;\n\n  &.selected {\n    &::before {\n      content: '';\n      position: absolute;\n      left: 0;\n\n      ",";\n    }\n  }\n"]);return Ot=function(){return e},e}var xt=Object(u.default)(L)(Ot(),Ue),Et=new vt;var jt=function(){var e=Object(r.useContext)(j),t=e.state,n=e.dispatch,l=t.notes,o=t.selected,c=t.editMode,i=function(){var e=Object(Xe.a)(Qe.a.mark((function e(t){var r;return Qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Et.getPromise(nt(t));case 2:r=e.sent,n({type:"decrypt",payload:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(L,{backgroundColor:"#f5f6fa",pt:"60px",pl:"60px",flexDirection:"column"},a.a.createElement(yt,{onClick:function(){n({type:"newNote"})},disabled:c,mr:"60px",mb:"50px"},a.a.createElement(ce,null),"New note"),a.a.createElement(L,{flexDirection:"column",overflowY:"auto",pb:"60px"},null===l||void 0===l?void 0:l.map((function(e){return a.a.createElement(xt,{className:st()({selected:(null===o||void 0===o?void 0:o.id)===e.id}),key:e.id,onClick:function(){return function(e){(null===o||void 0===o?void 0:o.id)===e.id?n({type:"selectNote",payload:null}):c||(n({type:"selectNote",payload:e}),i(e.content))}(e)}},e.title)}))))};function wt(){var e=Object(i.a)(["\n  position: absolute;\n  cursor: pointer;\n  top: 24px;\n  right: 24px;\n"]);return wt=function(){return e},e}var kt=u.default.div(wt());var Rt=function(){var e=Object(r.useContext)(j),t=e.state.modal,n=e.dispatch;return a.a.createElement(a.a.Fragment,null,t&&a.a.createElement(L,{flexGrow:"1",justifyContent:"center",alignItems:"center",bg:"rgba(0, 0, 0, 0.3)",position:"absolute",height:"100%",width:"100%",overflow:"hidden"},a.a.createElement(L,{width:"400px",height:"210px",borderRadius:"16px",boxShadow:"0 3px 6px 0 rgba(0, 0, 0, 0.16)",backgroundColor:s,justifyContent:"space-between",position:"relative",p:"24px 32px",flexDirection:"column"},a.a.createElement(kt,{position:"absolute",right:"24px"},a.a.createElement(z,null)),a.a.createElement(N,{fontSize:"24px"},"Delete forever?"),a.a.createElement(N,null,"1 note is about to be permanently deleted."),a.a.createElement(L,{justifyContent:"flex-end"},a.a.createElement(Ge,{className:"delete",onClick:function(){n({type:"deleteNote"})}},a.a.createElement($,null),"Delete"),a.a.createElement(Ge,{className:"cancel",ml:"24px",onClick:function(){n({type:"switchModal",payload:!1})}},a.a.createElement(H,null),"Cancel")))))};var Ct=function(){var e=Object(r.useContext)(j).state.spinning;return a.a.createElement(L,{height:"100%",width:"100%"},a.a.createElement(jt,null),a.a.createElement(it,null),e&&a.a.createElement(Ie,{overlay:!0,absolute:!0}),a.a.createElement(Rt,null))};var Pt=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.Normalize,null),a.a.createElement(h,null),a.a.createElement(w,null,a.a.createElement(Ct,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Pt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},45:function(e,t,n){e.exports=n(134)}},[[45,1,2]]]);
//# sourceMappingURL=main.d0ec6537.chunk.js.map