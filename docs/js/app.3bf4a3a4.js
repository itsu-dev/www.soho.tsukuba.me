(function(t){function a(a){for(var n,o,i=a[0],c=a[1],l=a[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(a);while(d.length)d.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],n=!0,i=1;i<e.length;i++){var c=e[i];0!==s[c]&&(n=!1)}n&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var n={},s={app:0},r=[];function o(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=n,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)o.d(e,n,function(a){return t[a]}.bind(null,n));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var u=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";e("85ec")},"0b05":function(t,a,e){},4234:function(t,a,e){"use strict";e("0b05")},4480:function(t,a,e){"use strict";e("50d4")},"50d4":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("header-menu"),e("header-content"),e("about")],1)},r=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-navbar-brand",{staticClass:"mx-4",attrs:{href:"#"}},[e("span",{staticClass:"title-text"},[t._v("マイクラ"),e("span",{staticClass:"sohosai"},[t._v("雙峰祭")]),t._v("プロジェクト"),e("span",{staticClass:"year"},[t._v("2021")])])]),e("b-collapse",{staticClass:"navbar-collapse justify-content-end",attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{right:"",href:"#about"}},[t._v("About")]),e("b-nav-item",{attrs:{right:"",href:"#join"}},[t._v("参加する")])],1)],1)],1)],1)},i=[],c={name:"HeaderMenu"},l=c,u=(e("4480"),e("2877")),p=Object(u["a"])(l,o,i,!1,null,"8a477d42",null),d=p.exports,f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-jumbotron",{staticClass:"jumbotron-bg",style:{"background-image":"url("+t.headerImage+")"},attrs:{fluid:"","text-variant":"white"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",{staticClass:"title-text"},[t._v("マイクラ"),e("span",{staticClass:"sohosai"},[t._v("雙峰祭")]),t._v("プロジェクト")]),e("br"),e("span",{staticClass:"year"},[t._v("2021")])]},proxy:!0},{key:"lead",fn:function(){return[e("span",{staticClass:"description"},[t._v("筑波大学雙峰祭 オンライン企画")])]},proxy:!0}])},[e("hr",{staticClass:"my-4"}),e("p",{staticClass:"description"},[t._v(" マイクラ内で筑波大学キャンパスを再現し、雙峰祭気分を楽しもう！ ")])])],1)},b=[],v=e("6d32"),m=e.n(v),g={name:"Header",data:function(){return{headerImage:m.a}}},h=g,A=(e("4234"),Object(u["a"])(h,f,b,!1,null,"6c271209",null)),C=A.exports,_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"root"},[e("b-container",[e("b-row",[e("div",{staticClass:"col-lg-1"}),e("div",{staticClass:"col-lg-10"},[e("b-row",{staticClass:"my-4 mx-1 px-2 about",style:{"background-image":"url("+t.oakTexture+")"}},[e("div",{staticClass:"col-lg",attrs:{id:"about"}},[e("h1",{staticClass:"catch-copy mt-4 mb-4"},[t._v(" For all ITF. Minecrafters,"),e("br"),e("span",{staticClass:"tsukuba-color"},[t._v("Are you ready?")])]),e("p",{staticClass:"mt-4"},[t._v(" このプロジェクトは、今年度オンラインで開催される雙峰祭での企画です。"),e("br"),t._v(" 筑波大学キャンパスをMinecraft内で再現し、雙峰祭当日にみんなでわいわいすることを目的としています。"),e("br"),e("br"),t._v(' "オンラインのキャンパス"にも足を運んでみませんか？'),e("br"),e("br"),t._v(" Minecraftをお持ちの筑波大生のみなさん、たくさんのご参加お待ちしております！ ")])])]),e("hr"),e("b-row",{staticClass:"mt-4 mx-1"},[e("div",{staticClass:"col-lg"},[e("h3",{staticClass:"title"},[t._v("Platforms")]),e("p",[t._v("クロスプラットフォームでプレイすることができるため、以下のデバイスから参加することができます。")])])]),e("b-row",{staticClass:"mb-4 mx-1"},[e("div",{staticClass:"col-lg-6 mt-4"},[e("h5",{staticClass:"title-text"},[t._v("Minecraft Java Edition")]),e("p",[t._v(" PC"),e("br"),e("br"),t._v(" ※MojangまたはMicrosoftアカウントでログインしている必要があります。 ")]),e("img",{staticClass:"platform-icon",attrs:{src:t.desktopIcon,alt:"desktop"}})]),e("div",{staticClass:"col-lg-6 mt-4"},[e("h5",{staticClass:"title-text"},[t._v("Minecraft 統合版")]),e("p",[t._v(" Windows 10 / iOS / Android / Nintendo Switch"),e("br"),e("br"),t._v(" ※Microsoft XBoxアカウントでログインしている必要があります。 ")]),e("img",{staticClass:"platform-icon",attrs:{src:t.smartphoneIcon,alt:"smartphone"}})])]),e("hr"),e("b-row",{staticClass:"mt-4 mx-1"},[e("div",{staticClass:"col-lg"},[e("h3",{staticClass:"title",attrs:{id:"join"}},[t._v("How to Join")]),e("p",[t._v("以下の情報を入力してください。")]),e("p",{staticClass:"my-4 addresses"},[t._v(" IPアドレス：soho.tsukuba.me"),e("br"),t._v(" ポート：25565 ")])])])],1),e("div",{staticClass:"col-lg-1"})])],1)],1)},y=[],x=e("5c7c"),w=e.n(x),O=e("fb01"),k=e.n(O),j=e("f341"),M=e.n(j),E={name:"About",data:function(){return{desktopIcon:w.a,smartphoneIcon:k.a,oakTexture:M.a}}},I=E,S=(e("dca1"),Object(u["a"])(I,_,y,!1,null,"95569976",null)),P=S.exports,B={name:"App",components:{About:P,HeaderContent:C,HeaderMenu:d}},Q=B,T=(e("034f"),Object(u["a"])(Q,s,r,!1,null,null,null)),J=T.exports,U=e("5f5b"),V=e("b1e0");e("f9e3"),e("2dd8");n["default"].config.productionTip=!1,n["default"].use(U["a"]),n["default"].use(V["a"]),new n["default"]({render:function(t){return t(J)}}).$mount("#app")},"5c7c":function(t,a,e){t.exports=e.p+"img/desktop-icon.905861d9.svg"},"6d32":function(t,a,e){t.exports=e.p+"img/header-image.4f93d55c.png"},"85ec":function(t,a,e){},dca1:function(t,a,e){"use strict";e("eb65")},eb65:function(t,a,e){},f341:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAFVBMVEW8mGKfhE20kFpzXjlpVDN8Yj5MPSafUFAXAAAA6UlEQVR4Xu3YwQ3DIBQEUbdAC7RAC24hLaT/EiJ8YOUvVk6um5lTHJnnE+KL46ptOlZ9pv92SQkGAQG1bsz6qrn6TL/+BwQEtOu0ZPd1AcEgIOB5bzx3zuyySBAQ8JtxTo9tpcNMHSoJBAR8fkdM39Q2ZYKAgCUxdmPqLDIFgoCAdkxTP41zmSAgoO0C6gW0cls0EwQEbK4i2JNKQC4ICOi3lL+KdgWDgICa0OzANjbZ9zJBQMCSvWy2m7AwmSAgoI4X+6nddGf9TBAQ0I5uFVyVxaVMEBBw3HvNzpUed5Pce1bGuUgQEPADvWY6YkiZ0gMAAAAASUVORK5CYII="},fb01:function(t,a,e){t.exports=e.p+"img/smartphone-icon.70b4e693.svg"}});
//# sourceMappingURL=app.3bf4a3a4.js.map