(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{197:function(t,n,e){var content=e(255);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("7388ab72",content,!0,{sourceMap:!1})},217:function(t,n,e){"use strict";var r={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Averx"}}},o=e(85),c=e(127),l=e.n(c),v=e(321),d=e(327),f=e(322),m=e(218),_=e(328),h=e(323),w=e(158),V=e(159),x=e(106),k=e(160),D=e(79),A=e(324),I=e(326),N=e(325),P=e(215),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{attrs:{dark:""}},[e("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}},[e("v-list",t._l(t.items,(function(n,i){return e("v-list-item",{key:i,attrs:{to:n.to,router:"",exact:""}},[e("v-list-item-action",[e("v-icon",[t._v(t._s(n.icon))])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(n.title)}})],1)],1)})),1)],1),t._v(" "),e("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[e("v-app-bar-nav-icon",{on:{click:function(n){n.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.miniVariant=!t.miniVariant}}},[e("v-icon",[t._v("mdi-"+t._s("chevron-"+(t.miniVariant?"right":"left")))])],1),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.clipped=!t.clipped}}},[e("v-icon",[t._v("mdi-application")])],1),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.fixed=!t.fixed}}},[e("v-icon",[t._v("mdi-minus")])],1),t._v(" "),e("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[e("v-icon",[t._v("mdi-menu")])],1)],1),t._v(" "),e("v-main",[e("v-container",[e("nuxt")],1)],1),t._v(" "),e("v-navigation-drawer",{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(n){t.rightDrawer=n},expression:"rightDrawer"}},[e("v-list",[e("v-list-item",{nativeOn:{click:function(n){t.right=!t.right}}},[e("v-list-item-action",[e("v-icon",{attrs:{light:""}},[t._v("\n                        mdi-repeat\n                    ")])],1),t._v(" "),e("v-list-item-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),e("v-footer",{attrs:{absolute:!t.fixed,app:""}},[e("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);n.a=component.exports;l()(component,{VApp:v.a,VAppBar:d.a,VAppBarNavIcon:f.a,VBtn:m.a,VContainer:_.a,VFooter:h.a,VIcon:w.a,VList:V.a,VListItem:x.a,VListItemAction:k.a,VListItemContent:D.a,VListItemTitle:D.b,VMain:A.a,VNavigationDrawer:I.a,VSpacer:N.a,VToolbarTitle:P.a})},227:function(t,n,e){e(228),t.exports=e(229)},254:function(t,n,e){"use strict";e(197)},255:function(t,n,e){(n=e(15)(!1)).push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=n},72:function(t,n,e){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(e(254),e(85)),c=e(127),l=e.n(c),v=e(321),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);n.a=component.exports;l()(component,{VApp:v.a})}},[[227,4,1,5]]]);