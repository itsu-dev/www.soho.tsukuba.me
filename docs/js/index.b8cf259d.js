(function(t){function a(a){for(var s,i,c=a[0],r=a[1],l=a[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);p&&p(a);while(d.length)d.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,c=1;c<e.length;c++){var r=e[c];0!==o[r]&&(s=!1)}s&&(n.splice(a--,1),t=i(i.s=e[0]))}return t}var s={},o={index:0},n=[];function i(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=s,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)i.d(e,s,function(a){return t[a]}.bind(null,s));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=a,c=c.slice();for(var l=0;l<c.length;l++)a(c[l]);var p=r;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";e("85ec")},"12cc":function(t,a,e){},"35a4":function(t,a,e){},"366f":function(t,a,e){t.exports=e.p+"img/googleplay.9fe963d8.png"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("header-menu"),e("header-content"),e("router-view"),e("footer-content")],1)},n=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-navbar-brand",{staticClass:"mx-4",attrs:{href:"#"}},[e("span",{staticClass:"title-text"},[t._v("マイクラ"),e("span",{staticClass:"sohosai"},[t._v("雙峰祭")]),t._v("プロジェクト"),e("span",{staticClass:"year"},[t._v("2021")])])]),e("b-collapse",{staticClass:"navbar-collapse justify-content-end",attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{right:"",to:"/#about"}},[t._v("About")]),e("b-nav-item",{attrs:{right:"",to:"/#platforms"}},[t._v("プラットフォーム")]),e("b-nav-item",{attrs:{right:"",to:"/#join"}},[t._v("参加する")]),e("b-nav-item",{attrs:{roght:"",to:"/how_to_play#top"}},[t._v("遊び方")]),e("b-nav-item",{attrs:{right:"",href:"https://twitter.com/micra_sohopjt"}},[t._v("Twitter")])],1)],1)],1)],1)},c=[],r=(e("ac1f"),e("466d"),e("5319"),{name:"HeaderMenu",watch:{$route:function(t,a){t.hash.match(/^#/)&&document.getElementById(t.hash.replace(/^#/,"")).scrollIntoView(),console.log("new, old",[t.hash,a.hash])}},mounted:function(){this.$route.hash.match(/^#/)&&document.getElementById(this.$route.hash.replace(/^#/,"")).scrollIntoView()}}),l=r,p=(e("a1ad"),e("2877")),u=Object(p["a"])(l,i,c,!1,null,"07e4a26c",null),d=u.exports,f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-jumbotron",{staticClass:"jumbotron-bg",style:{"background-image":"url("+t.headerImage+")"},attrs:{fluid:"","text-variant":"white"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",{staticClass:"title-text"},[t._v("マイクラ"),e("span",{staticClass:"sohosai"},[t._v("雙峰祭")]),t._v("プロジェクト")]),e("br"),e("span",{staticClass:"year"},[t._v("2021")])]},proxy:!0},{key:"lead",fn:function(){return[e("span",{staticClass:"description"},[t._v(" 筑波大学雙峰祭 オンライン企画"),e("br"),t._v(" 2021年11月6～7日 ")])]},proxy:!0}])},[e("hr",{staticClass:"my-4"}),e("p",{staticClass:"description"},[t._v(" マイクラ内で筑波大学キャンパスを再現して、雙峰祭気分を楽しもう！ ")])])],1)},v=[],b=e("6d32"),m=e.n(b),g={name:"Header",data:function(){return{headerImage:m.a}}},h=g,C=(e("6bbb"),Object(p["a"])(h,f,v,!1,null,"7268c789",null)),w=C.exports,_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",[e("b-nav",{staticClass:"bg-dark",attrs:{variant:"dark",align:"center"}},[e("p",{staticClass:"mt-3 text-white"},[t._v(" © 2021 マイクラ雙峰祭プロジェクト, "),e("a",{staticClass:"text-white",attrs:{href:"http://github.com/itsu-dev"}},[t._v("Itsu")]),e("br"),e("span",{staticClass:"caption"},[t._v("マイクラ雙峰祭プロジェクトはMojangから承認されておらず、Mojangとは関係ありません。")]),e("br"),e("br"),e("b-icon",{staticClass:"twitter-icon",attrs:{icon:"twitter","font-scale":"2",onclick:"window.location='https://twitter.com/micra_sohopjt'"}}),e("b-icon",{staticClass:"github-icon",attrs:{icon:"github","font-scale":"2",onclick:"window.location='https://github.com/soho-tsukuba/www.soho.tsukuba.me'"}})],1)])],1)},x=[],y={name:"FooterContent"},A=y,j=(e("c177"),Object(p["a"])(A,_,x,!1,null,"64152bc6",null)),k=j.exports,M={name:"App",components:{HeaderMenu:d,HeaderContent:w,FooterContent:k}},O=M,I=(e("034f"),Object(p["a"])(O,o,n,!1,null,null,null)),P=I.exports,E=e("8c4f"),S=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"root"},[e("b-container",{attrs:{fluid:""}},[e("b-row",[e("div",{staticClass:"col",attrs:{id:"about"}},[e("b-row",{staticClass:"mb-4 px-2 about",style:{"background-image":"url("+t.oakTexture+")"}},[e("div",{staticClass:"col-lg-1"}),e("div",{staticClass:"col-lg-10"},[e("h1",{staticClass:"catch-copy mt-5 mb-4"},[t._v(" All of ITF. Minecrafters,"),e("br"),e("span",{staticClass:"tsukuba-color"},[t._v("Are you ready?")])]),e("p",{staticClass:"mt-4 mb-5"},[t._v(" このプロジェクトは、今年度オンラインで開催される雙峰祭での企画です。"),e("br"),t._v(" 筑波大学キャンパスをMinecraft内で再現して、雙峰祭当日にみんなでわいわいすることを目的としています。"),e("br"),e("br"),t._v(' "オンラインのキャンパス"にも足を運んでみませんか？'),e("br"),e("br"),t._v(" Minecraftをお持ちの筑波大生のみなさん、たくさんのご参加お待ちしております！ ")])]),e("div",{staticClass:"col-lg-1"})])],1)])],1),e("b-container",[e("b-row",[e("div",{staticClass:"col-lg-1"}),e("div",{staticClass:"col-lg-10"},[e("b-row",{staticClass:"mt-3 mx-1",attrs:{id:"platforms"}},[e("div",{staticClass:"col-lg"},[e("h3",{staticClass:"title title-platforms"},[t._v("Platforms")]),e("p",[t._v("クロスプラットフォームでプレイすることができるため、以下のデバイスから参加することができます。")])])]),e("b-row",{staticClass:"mb-4 mx-1"},[e("div",{staticClass:"col-lg-6 mt-4"},[e("h5",{staticClass:"title-text"},[t._v("Minecraft Java Edition")]),e("p",[t._v(" PC"),e("br"),e("br"),t._v(" ※MojangまたはMicrosoftアカウントでログインしている必要があります。"),e("br"),t._v(" ※Java EditionはMinecraft公式サイトからインストールしたものです。 ")]),e("b-row",[e("div",{staticClass:"col text-center"},[e("img",{staticClass:"platform-icon",attrs:{src:t.desktopIcon,alt:"desktop"}})])]),e("b-row",[e("div",{staticClass:"col text-center"},[e("img",{staticClass:"minecraft-logo",attrs:{src:t.minecraftLogo,alt:"minecraft",onclick:"window.location='https://www.minecraft.net/ja-jp/store/minecraft-java-edition'"}})])])],1),e("div",{staticClass:"col-lg-6 mt-4"},[e("h5",{staticClass:"title-text"},[t._v("Minecraft 統合版")]),e("p",[t._v(" Windows 10 / iOS / Android / Nintendo Switch"),e("br"),e("br"),t._v(" ※Microsoft XBoxアカウントでログインしている必要があります。"),e("br"),t._v(" ※Java版に準拠しているため、一部のブロックが使えないなどの問題が起こる場合があります。 ")]),e("b-row",[e("div",{staticClass:"col text-center"},[e("img",{staticClass:"platform-icon",attrs:{src:t.desktopIcon,alt:"desktop"}}),e("img",{staticClass:"platform-icon mx-4",attrs:{src:t.smartphoneIcon,alt:"smartphone"}}),e("img",{staticClass:"platform-icon",attrs:{src:t.switchIcon,alt:"switch"}})])]),e("b-row",[e("div",{staticClass:"col text-center mt-4"},[e("img",{staticClass:"app-store",attrs:{src:t.appStore,alt:"desktop",onclick:"window.location='https://apps.apple.com/jp/app/minecraft/id479516143'"}}),e("img",{staticClass:"google-play",attrs:{src:t.googlePlay,alt:"desktop",onclick:"window.location='https://play.google.com/store/apps/details?id=com.mojang.minecraftpe&hl=ja&gl=US'"}})])])],1)])],1),e("div",{staticClass:"col-lg-1"})]),e("hr"),e("b-row",{staticClass:"how-to-join",attrs:{id:"join"}},[e("div",{staticClass:"col-lg-1"}),e("div",{staticClass:"col-lg-10"},[e("b-row",{staticClass:"mt-4 mx-1"},[e("div",{staticClass:"col"},[e("h3",{staticClass:"title title-join"},[t._v("How to Join")]),e("p",[t._v("以下の情報を入力してください。")])])]),e("b-row",{staticClass:"mb-4 mx-1"},[e("div",{staticClass:"col-sm-6 mt-4"},[e("h5",{staticClass:"title-text"},[t._v("Minecraft Java Edition")]),e("p",[t._v(" IPアドレス：現在非公開"),e("br"),t._v(" ポート：現在非公開 ")])]),e("div",{staticClass:"col-sm-6 mt-4"},[e("h5",{staticClass:"title-text"},[t._v("Minecraft 統合版")]),e("p",[t._v(" IPアドレス：現在非公開"),e("br"),t._v(" ポート：現在非公開 ")])])])],1),e("div",{staticClass:"col-lg-1"})])],1)],1)},B=[],T=e("5c7c"),J=e.n(T),Q=e("fb01"),V=e.n(Q),U=e("a67d"),H=e.n(U),$=e("fea6"),K=e.n($),z=e("366f"),F=e.n(z),L=e("8897"),N=e.n(L),Y=e("f341"),G=e.n(Y),W={name:"MainPage",data:function(){return{desktopIcon:J.a,smartphoneIcon:V.a,switchIcon:H.a,appStore:K.a,googlePlay:F.a,minecraftLogo:N.a,oakTexture:G.a}}},X=W,D=(e("cf3b"),Object(p["a"])(X,S,B,!1,null,"ed132eae",null)),R=D.exports,Z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{staticClass:"root"},[e("b-row",[e("div",{staticClass:"col-lg-1"}),e("div",{staticClass:"col-lg-10 my-4",attrs:{id:"top"}},[e("h5",{staticClass:"title title-play"},[t._v("How To Play")]),e("p",[t._v("執筆中！")])]),e("div",{staticClass:"col-lg-1"})])],1)},q=[],tt={name:"HowToPlayPage"},at=tt,et=(e("cbea"),Object(p["a"])(at,Z,q,!1,null,"4af1235a",null)),st=et.exports;s["default"].use(E["a"]);var ot=new E["a"]({mode:"history",routes:[{path:"/",name:"mainPage",component:R},{path:"/how_to_play",name:"howToPlayPage",component:st}]}),nt=e("5f5b"),it=e("b1e0");e("f9e3"),e("2dd8");s["default"].config.productionTip=!1,s["default"].use(nt["a"]),s["default"].use(it["a"]),new s["default"]({router:ot,render:function(t){return t(P)}}).$mount("#app")},"5c7c":function(t,a,e){t.exports=e.p+"img/desktop-icon.905861d9.svg"},6200:function(t,a,e){},"6bbb":function(t,a,e){"use strict";e("6f10")},"6d32":function(t,a,e){t.exports=e.p+"img/header-image.4f93d55c.png"},"6f10":function(t,a,e){},7515:function(t,a,e){},"85ec":function(t,a,e){},8897:function(t,a,e){t.exports=e.p+"img/minecraft-logo.c9dfeb0a.png"},a1ad:function(t,a,e){"use strict";e("12cc")},a67d:function(t,a,e){t.exports=e.p+"img/switch-icon.db804ea4.svg"},c177:function(t,a,e){"use strict";e("7515")},cbea:function(t,a,e){"use strict";e("6200")},cf3b:function(t,a,e){"use strict";e("35a4")},f341:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAFVBMVEW8mGKfhE20kFpzXjlpVDN8Yj5MPSafUFAXAAAA6UlEQVR4Xu3YwQ3DIBQEUbdAC7RAC24hLaT/EiJ8YOUvVk6um5lTHJnnE+KL46ptOlZ9pv92SQkGAQG1bsz6qrn6TL/+BwQEtOu0ZPd1AcEgIOB5bzx3zuyySBAQ8JtxTo9tpcNMHSoJBAR8fkdM39Q2ZYKAgCUxdmPqLDIFgoCAdkxTP41zmSAgoO0C6gW0cls0EwQEbK4i2JNKQC4ICOi3lL+KdgWDgICa0OzANjbZ9zJBQMCSvWy2m7AwmSAgoI4X+6nddGf9TBAQ0I5uFVyVxaVMEBBw3HvNzpUed5Pce1bGuUgQEPADvWY6YkiZ0gMAAAAASUVORK5CYII="},fb01:function(t,a,e){t.exports=e.p+"img/smartphone-icon.70b4e693.svg"},fea6:function(t,a,e){t.exports=e.p+"img/appstore.57272347.svg"}});
//# sourceMappingURL=index.b8cf259d.js.map