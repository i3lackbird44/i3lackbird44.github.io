(function(t){function e(e){for(var o,i,l=e[0],u=e[1],c=e[2],b=0,f=[];b<l.length;b++)i=l[b],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);s&&s(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],o=!0,i=1;i<r.length;i++){var u=r[i];0!==n[u]&&(o=!1)}o&&(a.splice(e--,1),t=l(l.s=r[0]))}return t}var o={},n={app:0},a=[];function i(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d693efb8"}[t]+".js"}function l(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,o){r=n[t]=[e,o]}));e.push(r[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(t);var c=new Error;a=function(e){u.onerror=u.onload=null,clearTimeout(b);var r=n[t];if(0!==r){if(r){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,r[1](c)}n[t]=void 0}};var b=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=o,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(r,o,function(e){return t[e]}.bind(null,o));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var b=0;b<u.length;b++)e(u[b]);var s=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},4502:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("NavBar"),r("router-view")],1)},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{type:"dark",variant:"info"}},[r("b-navbar-nav",[r("router-link",{attrs:{to:"/",tag:"b-navbar-brand"}},[t._v("ออกรายการใหม่")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-nav-item",{attrs:{href:"#"}},[t._v("ดูสถานะรายการ")]),r("router-link",{attrs:{to:"/about",tag:"b-nav-item"}},[t._v("รายงาน")])],1)],1)],1)],1)},l=[],u={name:"NavBar"},c=u,b=r("2877"),s=Object(b["a"])(c,i,l,!1,null,"4f6a3131",null),f=s.exports,p={name:"App",components:{NavBar:f}},v=p,d=Object(b["a"])(v,n,a,!1,null,"50e5817c",null),m=d.exports,h=r("5f5b"),_=r("b1e0"),g=(r("f9e3"),r("2dd8"),r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",[t._v(" Slidebar ")]),r("b-col",{staticStyle:{"margin-top":"1%"},attrs:{cols:"10"}},[r("b-row",[r("b-col",[r("CustomerForm")],1)],1)],1)],1)],1)],1)},y=[],j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"text"},[r("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"3",label:"ฟอร์มออกใบเสร็จใหม่","label-size":"lg","label-class":"font-weight-bold pt-0"}}),r("b-row",[r("b-col",{staticClass:"border",staticStyle:{padding:"1%"},attrs:{cols:"10"}},[r("b-row",[r("b-col",[r("div",[t._v("เลขผู้เสียภาษี")]),r("b-form-input")],1),r("b-col")],1),r("br"),r("b-row",[r("b-col",[r("div",[t._v("ชื่อ")]),r("b-form-input")],1),r("b-col",[r("div",[t._v("นามสกุล")]),r("b-form-input")],1)],1),r("br"),r("b-row",[r("b-col",[r("div",[t._v("บ้านเลขที่")]),r("b-form-input")],1),r("b-col",[r("div",[t._v("หมู่บ้าน")]),r("b-form-input")],1),r("b-col",[r("div",[t._v("ซอย")]),r("b-form-input")],1)],1),r("br"),r("b-row",[r("b-col",[r("div",[t._v("ถนน")]),r("b-form-input")],1),r("b-col",[r("div",[t._v("แขวง/ตำบล")]),r("b-form-input")],1),r("b-col",[r("div",[t._v("เขต/อำเภอ")]),r("b-form-input")],1)],1),r("br"),r("b-row",[r("b-col",[r("div",[t._v("จังหวัด")]),r("b-form-input")],1),r("b-col",[r("div",[t._v("รหัสไปรษณีย์")]),r("b-form-input")],1)],1),r("br"),r("b-row",[r("b-col",[r("div",[t._v("โทรศัพท์")]),r("b-form-input")],1),r("b-col",[r("div",[t._v("โทรศัพท์มือถือ")]),r("b-form-input")],1)],1),r("br"),r("b-row",[r("b-col",[r("div",[t._v("E-mail")]),r("b-form-input")],1),r("b-col")],1)],1),r("b-col",[r("div",[t._v("เลขที่ใบเสร็จ")]),r("b-form-input"),r("br"),r("b-row",[r("b-col",{attrs:{cols:"8"}},[r("div",[t._v("บันทึกภาษี")])]),r("b-col",[r("b-form-checkbox",{attrs:{name:"",value:"","unchecked-value":""}},[t._v(" บันทึก ")])],1)],1)],1)],1)],1)},O=[],x={name:"CustomerForm"},k=x,P=(r("ef48"),Object(b["a"])(k,j,O,!1,null,"579a740e",null)),C=P.exports,E={name:"App",components:{CustomerForm:C}},S=E,T=Object(b["a"])(S,w,y,!1,null,"09153466",null),$=T.exports;o["default"].use(g["a"]);var A=[{path:"/",name:"Home",component:$},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],M=new g["a"]({mode:"history",base:"/",routes:A}),B=M;o["default"].use(h["a"]),o["default"].use(_["a"]),o["default"].config.productionTip=!1,new o["default"]({router:B,render:function(t){return t(m)}}).$mount("#app")},ef48:function(t,e,r){"use strict";r("4502")}});
//# sourceMappingURL=app.6a2fa7e9.js.map