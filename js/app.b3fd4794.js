(function(t){function e(e){for(var a,s,r=e[0],c=e[1],l=e[2],u=0,f=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("8a23"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=n("2f62"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,app:"",color:"amber accent-2"}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"300px"}},[n("span",{staticClass:"hidden-sm-and-down"},[t._v("Hose Vision System")])]),n("v-spacer"),n("span",{staticStyle:{"font-weight":"bold"}},[t._v("Pending Classification : "+t._s(t.PendingImages))]),n("v-spacer"),n("span",{staticClass:"hidden-sm-and-down"},[t._v("Current Hose Series: "+t._s(t.HoseSeries))]),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!t.dialog}}},[n("v-icon",[t._v("mdi-pencil")])],1)],1),n("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[t._l(t.items,(function(e){return[e.heading?n("v-row",{key:e.heading,attrs:{align:"center"}},[n("v-col",{attrs:{cols:"6"}},[e.heading?n("v-subheader",[t._v(t._s(e.heading))]):t._e()],1)],1):n("v-list-item",{key:e.text,attrs:{to:e.link}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.text))])],1)],1)]}))],2)],1),n("v-dialog",{attrs:{width:"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"grey darken-2"},[t._v("Set Hose Series")]),n("v-container",[n("v-row",{staticClass:"mx-2",attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"6"}},[n("span",[t._v("Choose the Hose Series:")])]),n("v-col",{attrs:{cols:"6"}},[n("v-overflow-btn",{attrs:{items:t.dropdown_font,target:"#dropdown-example"},model:{value:t.selected_current_hose_series,callback:function(e){t.selected_current_hose_series=e},expression:"selected_current_hose_series"}})],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.save()}}},[t._v("Save")])],1)],1)],1),n("v-content",[n("router-view")],1)],1)},s=[],r=n("5530"),c=(n("96cf"),n("1da1")),l={name:"App",data:function(){return{dialog:!1,drawer:null,imagesToClassify:0,dropdown_font:["436-12","471-16","487-6","487-8","SS23CG-8","482-4","836-8"],current_hose_series:localStorage.getItem("hose_series")||"836-8",selected_current_hose_series:localStorage.getItem("hose_series")||"836-8",items:[{icon:"mdi-contacts",link:"/classifier/",text:"Image Classifier"},{icon:"mdi-cog",link:"/script",text:"Script"},{icon:"mdi-cog",link:"/settings",text:"Settings"}]}},beforeCreate:function(){return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.dispatch("getHoseSeries").then((function(t){console.log(t)})).catch((function(t){console.log(t)})),t.getNumber();case 2:case"end":return e.stop()}}),e)})))()},computed:Object(r["a"])(Object(r["a"])({},Object(o["b"])(["postHoseSeries","postStopScript"])),Object(o["c"])(["PendingImages","HoseSeries"])),methods:{save:function(){this.$store.dispatch("postHoseSeries",this.selected_current_hose_series).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),this.dialog=!1},getNumber:function(){this.$store.dispatch("getPendingImages").then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}}},d=l,u=(n("034f"),n("2877")),f=n("6544"),p=n.n(f),g=n("7496"),v=n("40dc"),m=n("5bc1"),h=n("8336"),b=n("b0af"),_=n("99d9"),S=n("62ad"),w=n("a523"),x=n("a75b"),I=n("169a"),k=n("132d"),C=n("8860"),y=n("da13"),V=n("1800"),j=n("5d23"),O=n("f774"),T=n("de8e"),P=n("0fd9"),D=n("2fa4"),H=n("e0c7"),$=n("2a7f"),B=Object(u["a"])(d,i,s,!1,null,null,null),N=B.exports;p()(B,{VApp:g["a"],VAppBar:v["a"],VAppBarNavIcon:m["a"],VBtn:h["a"],VCard:b["a"],VCardActions:_["a"],VCardTitle:_["c"],VCol:S["a"],VContainer:w["a"],VContent:x["a"],VDialog:I["a"],VIcon:k["a"],VList:C["a"],VListItem:y["a"],VListItemAction:V["a"],VListItemContent:j["a"],VListItemTitle:j["b"],VNavigationDrawer:O["a"],VOverflowBtn:T["a"],VRow:P["a"],VSpacer:D["a"],VSubheader:H["a"],VToolbarTitle:$["a"]});var R=n("8c4f"),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-tabs",{attrs:{"background-color":"primary",dark:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e){return n("v-tab",{key:e.tab},[t._v(t._s(e.tab))])})),1),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e){return n("v-tab-item",{key:e.tab},[n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:e.content,"sort-by":"name","items-per-page":15},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"white"}},[n("v-toolbar-title",[t._v("My "+t._s(e.tab)+" Settings")]),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),n("v-spacer"),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[n("v-text-field",{attrs:{label:"Settings name",readonly:""},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),n("v-col",{attrs:{cols:"12",sm:"8",md:"8"}},[n("v-text-field",{attrs:{label:"Value"},model:{value:t.editedItem.value,callback:function(e){t.$set(t.editedItem,"value",e)},expression:"editedItem.value"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Cancel")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var a=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(a)}}},[t._v("mdi-pencil")])]}},{key:"no-data",fn:function(){return[n("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("Reset")])]},proxy:!0}],null,!0)})],1)],1)],1)],1)})),1)],1)},L=[],E=(n("c740"),n("4160"),n("b0c0"),n("b64b"),n("07ac"),n("159b"),{data:function(){return{tab:null,items:[{tab:"Software",content:[],url:"/_software_settings_file",file:"application/VisionSystem/settings/software_settings.json"},{tab:"Dashboard",content:[],url:"/_dashboard_settings_file",file:"application/VisionSystem/settings/dashboard_settings.json"},{tab:"Camera",content:[],url:"/_camera_settings_file",file:"application/VisionSystem/settings/Default_Camera_Settings.json"}],dialog:!1,headers:[{text:"Settings Name",value:"name"},{text:"Value",value:"value"},{text:"Actions",value:"actions",sortable:!1}],settings:[],editedIndex:-1,editedItem:{name:"",value:0},defaultItem:{name:"",value:0}}},computed:Object(r["a"])(Object(r["a"])({},Object(o["b"])(["postSettings","getSettings"])),{},{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}}),watch:{dialog:function(t){t||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){for(var t=this,e=function(e){var n=t.items[e];t.$store.dispatch("getSettings",n.url).then((function(a){console.log(a);for(var o=[],i=0;i<Object.keys(a).length;i++){var s={};s.name=Object.keys(a)[i],s.value=Object.values(a)[i],o.push(s)}n.content=o,t.settings[e]=o})).catch((function(t){console.log(t)}))},n=0;n<this.items.length;n++)e(n)},editItem:function(t){this.editedIndex=this.settings[this.tab].findIndex((function(e){return e.name===t.name})),this.editedItem=Object.assign({},this.settings[this.tab][this.editedIndex]),this.dialog=!0},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.settings[this.tab][this.editedIndex],this.editedItem):this.settings[this.tab].push(this.editedItem);var t={};this.settings[this.tab].forEach((function(e){t[e.name]=e.value}));var e={};this.settings[this.tab].forEach((function(t){e[t.name]=t.value})),this.$store.dispatch("postSettings","?file="+this.items[this.tab].file).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),this.close()}}}),F=E,G=n("8fea"),M=n("ce7e"),J=n("71a3"),U=n("c671"),z=n("fe57"),W=n("aac8"),Y=n("8654"),K=n("71d9"),q=Object(u["a"])(F,A,L,!1,null,null,null),Q=q.exports;p()(q,{VBtn:h["a"],VCard:b["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VCol:S["a"],VContainer:w["a"],VDataTable:G["a"],VDialog:I["a"],VDivider:M["a"],VIcon:k["a"],VRow:P["a"],VSpacer:D["a"],VTab:J["a"],VTabItem:U["a"],VTabs:z["a"],VTabsItems:W["a"],VTextField:Y["a"],VToolbar:K["a"],VToolbarTitle:$["a"]});var X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"9"}},[n("div",{staticClass:"text-center"},[n("div",{staticClass:"my-2"},[n("v-img",{attrs:{src:t.Image,"aspect-ratio":"1.7"}})],1)])]),n("v-col",{attrs:{cols:"12",sm:"3"}},[n("v-row",{staticStyle:{height:"150px"},attrs:{justify:"center"}},[n("div",{staticClass:"my-2"},[n("v-btn",{attrs:{"min-width":"200","x-large":"",color:"error",dark:""},on:{click:function(e){return t.defect()}}},[t._v("Defect")])],1)]),n("v-row",{staticStyle:{height:"150px"},attrs:{justify:"center"}},[n("div",{staticClass:"my-2"},[n("v-btn",{attrs:{"min-width":"200","x-large":"",color:"primary",dark:""},on:{click:function(e){return t.saveGood()}}},[t._v("No Defect")])],1)]),n("v-row",{staticStyle:{height:"150px"},attrs:{justify:"center"}},[n("div",{staticClass:"my-2"},[n("v-btn",{attrs:{"min-width":"200","x-large":"",color:"normal",dark:""},on:{click:function(e){return t.saveDoubt()}}},[t._v("Not Sure")])],1)])],1)],1),n("v-dialog",{attrs:{width:"650px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"grey darken-2"},[t._v("Defect Codes")]),n("v-container",[n("v-row",{staticClass:"mx-1",attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"5"}},[n("span",[t._v("Choose the Error Code:")])]),n("v-col",{attrs:{cols:"7"}},[n("v-overflow-btn",{attrs:{items:t.dropdown_font,label:"Please select the defect",target:"#dropdown-example"},model:{value:t.defect_code,callback:function(e){t.defect_code=e},expression:"defect_code"}})],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{"x-large":"",color:"secondary"},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),n("v-btn",{attrs:{"x-large":"",color:"primary"},on:{click:function(e){return t.saveDefect()}}},[t._v("Save")])],1)],1)],1)],1)},Z=[],tt=n("ab7a"),et=n.n(tt),nt={data:function(){return{dropdown_font:et.a,dialog:!1,defect_code:"",image_path:n("f99f")}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loadImage();case 1:case"end":return e.stop()}}),e)})))()},computed:Object(r["a"])(Object(r["a"])({},Object(o["c"])(["PendingImages","HoseSeries","Image"])),Object(o["b"])(["postGoodItem","postBadItem","postNotSureItem","getImage"])),methods:{defect:function(){this.dialog=!this.dialog},saveDefect:function(){var t=this;this.defect_code?(this.$store.dispatch("postBadItem",this.defect_code+","+this.HoseSeries).then((function(e){console.log(e),t.loadImage()})).catch((function(t){console.log(t)})),this.dialog=!1):alert("Please select a defaect code!")},saveGood:function(){var t=this;this.$store.dispatch("postGoodItem").then((function(e){console.log(e),t.loadImage()})).catch((function(t){console.log(t)})),this.dialog=!1},saveDoubt:function(){var t=this;this.$store.dispatch("postNotSureItem").then((function(e){console.log(e),t.loadImage()})).catch((function(t){console.log(t)}))},loadImage:function(){var t=this;this.$store.dispatch("getImage").then((function(e){t.Image=e,t.image_path=e}))}}},at=nt,ot=n("adda"),it=Object(u["a"])(at,X,Z,!1,null,null,null),st=it.exports;p()(it,{VBtn:h["a"],VCard:b["a"],VCardActions:_["a"],VCardTitle:_["c"],VCol:S["a"],VContainer:w["a"],VDialog:I["a"],VImg:ot["a"],VOverflowBtn:T["a"],VRow:P["a"],VSpacer:D["a"]});var rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"mb-5",attrs:{cols:"3"}}),n("v-col",{staticClass:"mb-5",attrs:{cols:"5"}},[n("v-btn",{staticStyle:{height:"150px"},attrs:{block:"","x-large":"",color:"green",dark:""},on:{click:function(e){return t.start()}}},[t._v("Start Script")])],1)],1),n("v-spacer"),n("v-row",[n("v-col",{staticClass:"mb-5",attrs:{cols:"3"}}),n("v-col",{staticClass:"mb-5",attrs:{cols:"5"}},[n("v-btn",{staticStyle:{height:"150px"},attrs:{block:"","x-large":"",color:"red",dark:""},on:{click:function(e){return t.stop()}}},[t._v("Stop Script")])],1)],1),n("v-spacer")],1)},ct=[],lt={data:function(){return{info:""}},computed:Object(r["a"])({},Object(o["b"])(["postStartScript","postStopScript"])),methods:{start:function(){this.$store.dispatch("postStartScript").then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},stop:function(){this.$store.dispatch("postStopScript").then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}}},dt=lt,ut=Object(u["a"])(dt,rt,ct,!1,null,null,null),ft=ut.exports;p()(ut,{VBtn:h["a"],VCol:S["a"],VContainer:w["a"],VRow:P["a"],VSpacer:D["a"]}),a["a"].use(R["a"]);var pt=new R["a"]({routes:[{path:"/classifier",name:"Classifier",component:st,props:!0},{path:"/settings",name:"Settings",component:Q},{path:"/script",alias:"/",name:"Script",component:ft}]}),gt=n("f309");a["a"].use(gt["a"]);var vt=new gt["a"]({}),mt={setPendingImages:function(t,e){t.PendingImages=e},setHoseSeries:function(t,e){t.HoseSeries=e}},ht=(n("d3b7"),n("bc3a")),bt=n.n(ht),_t="http://localhost:5000",St=bt.a.create({baseURL:_t,headers:{}}),wt={getPendingImages:function(t){var e=t.commit;return new Promise((function(t,n){St.get("/_picture_number").then((function(n){e("setPendingImages",n.data),t(n.data)})).catch((function(t){console.log(t),n(t)}))}))},getImage:function(t){var e=t.commit;return new Promise((function(t,n){St.get("/_get_image").then((function(n){e("setImage","data:image/png;base64,"+n.data),t("data:image/png;base64,"+n.data)})).catch((function(t){console.log(t),n(t)}))}))},getHoseSeries:function(t){var e=t.commit;St.get("/_hose_series").then((function(t){return e("setHoseSeries",t.data),t.data})).catch((function(t){console.log(t)}))},postBadItem:function(t,e){t.commit;St.post("/_bad_button_click",e).then((function(t){return t.data})).catch((function(t){console.log(t)}))},postNotSureItem:function(){St.post("/_unsure_button_click").then((function(t){return t.data})).catch((function(t){console.log(t)}))},postGoodItem:function(){St.post("/_good_button_click").then((function(t){return t.data})).catch((function(t){console.log(t)}))},postHoseSeries:function(t,e){var n=t.commit;St.post("/_hose_series",e).then((function(t){return n("setHoseSeries",e),t.data})).catch((function(t){console.log(t)}))},postStartScript:function(){St.post("/_start_script").then((function(t){return t.data})).catch((function(t){console.log(t)}))},postStopScript:function(){St.post("/_stop_script").then((function(t){return t.data})).catch((function(t){console.log(t)}))},getSettings:function(t,e){t.commit;return new Promise((function(t,n){St.get(e).then((function(e){console.log(e),t(e.data)})).catch((function(t){console.log(t),n(t)}))}))},postSettings:function(t,e){t.commit;St.post("/_save_settings_file"+e).then((function(t){return t.data})).catch((function(t){console.log(t)}))}},xt={getPendingImages:function(t){return t.PendingImages}},It={PendingImages:0,Image:n("f99f"),HoseSeries:"836-8"};a["a"].use(o["a"]);var kt=new o["a"].Store({state:It,actions:wt,mutations:mt,getters:xt});a["a"].config.productionTip=!1,a["a"].use(o["a"]),new a["a"]({vuetify:vt,router:pt,store:kt,render:function(t){return t(N)}}).$mount("#app")},"8a23":function(t,e,n){},ab7a:function(t,e){t.exports=["2J-Broken Wire","2J-Broken Yarn","2L-Wireloops","2L-Yarn Loops","3F-Cured Lumps","3M-Strike-Thru","3N-Neck Down","3T-Cover Surge Horse Collar","4F-Cover Pits Rough Cover","4F-Dents Gouges Torn Cover Dragmark","4F-Jaw Clamp Ends","4F-Layline Smeared Wrong Flaking","4F-Stripper Cuts","4F-Cover Damaged","4K-Dirty","4U-Twin Hose Bridge Split","9A-Printer Marks","9B-No Hose","9C-Defect Tape Out","9D-Tape Splice","9E-Good Hose"]},f99f:function(t,e,n){t.exports=n.p+"img/no-image-found.d7f71ea1.png"}});
//# sourceMappingURL=app.b3fd4794.js.map