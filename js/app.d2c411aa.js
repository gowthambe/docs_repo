(function(e){function t(t){for(var n,i,s=t[0],c=t[1],l=t[2],u=0,v=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(v.length)v.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{"clipped-left":e.$vuetify.breakpoint.lgAndUp,app:"",color:"amber accent-2"}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"300px"}},[a("span",{staticClass:"hidden-sm-and-down"},[e._v("Hose Vision System")])]),a("v-spacer"),a("span",{staticStyle:{"font-weight":"bold"}},[e._v("Pending Classification : "+e._s(e.imagesToClassify))]),a("v-spacer"),a("span",{staticClass:"hidden-sm-and-down"},[e._v("Current Hose Series: "+e._s(e.current_hose_series))]),a("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!e.dialog}}},[a("v-icon",[e._v("mdi-pencil")])],1)],1),a("v-navigation-drawer",{attrs:{clipped:e.$vuetify.breakpoint.lgAndUp,app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[e._l(e.items,(function(t){return[t.heading?a("v-row",{key:t.heading,attrs:{align:"center"}},[a("v-col",{attrs:{cols:"6"}},[t.heading?a("v-subheader",[e._v(e._s(t.heading))]):e._e()],1)],1):a("v-list-item",{key:t.text,attrs:{to:t.link}},[a("v-list-item-action",[a("v-icon",[e._v(e._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.text))])],1)],1)]}))],2)],1),a("v-dialog",{attrs:{width:"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"grey darken-2"},[e._v("Set Hose Series")]),a("v-container",[a("v-row",{staticClass:"mx-2",attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"6"}},[a("span",[e._v("Choose the Hose Series:")])]),a("v-col",{attrs:{cols:"6"}},[a("v-overflow-btn",{attrs:{items:e.dropdown_font,target:"#dropdown-example"},model:{value:e.selected_current_hose_series,callback:function(t){e.selected_current_hose_series=t},expression:"selected_current_hose_series"}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.dialog=!1}}},[e._v("Cancel")]),a("v-btn",{attrs:{text:""},on:{click:function(t){return e.save()}}},[e._v("Save")])],1)],1)],1),a("v-content",[a("router-view")],1)],1)},o=[],i=(a("96cf"),a("1da1")),s=localStorage.getItem("hose_series")||"836-8",c={name:"App",data:function(){return{dialog:!1,drawer:null,imagesToClassify:3,dropdown_font:["436-12","471-16","487-6","487-8","SS23CG-8","482-4","836-8"],current_hose_series:localStorage.getItem("hose_series")||"836-8",selected_current_hose_series:localStorage.getItem("hose_series")||"836-8",items:[{icon:"mdi-contacts",link:"/classifier/"+(s?"836-8":s),text:"Image Classifier"},{icon:"mdi-cog",link:"/script",text:"Script"},{icon:"mdi-cog",link:"/settings",text:"Settings"}]}},methods:{beforeCreate:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.current_hose_series="836-8";case 1:case"end":return t.stop()}}),t)})))()},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.current_hose_series="836-8";case 1:case"end":return t.stop()}}),t)})))()},save:function(){this.current_hose_series=this.selected_current_hose_series,localStorage.setItem("hose_series",this.current_hose_series),this.dialog=!1}}},l=c,d=a("2877"),u=a("6544"),v=a.n(u),p=a("7496"),f=a("40dc"),h=a("5bc1"),g=a("8336"),m=a("b0af"),_=a("99d9"),b=a("62ad"),C=a("a523"),k=a("a75b"),S=a("169a"),y=a("132d"),x=a("8860"),w=a("da13"),I=a("1800"),V=a("5d23"),T=a("f774"),D=a("de8e"),O=a("0fd9"),L=a("2fa4"),E=a("e0c7"),M=a("2a7f"),A=Object(d["a"])(l,r,o,!1,null,null,null),P=A.exports;v()(A,{VApp:p["a"],VAppBar:f["a"],VAppBarNavIcon:h["a"],VBtn:g["a"],VCard:m["a"],VCardActions:_["a"],VCardTitle:_["c"],VCol:b["a"],VContainer:C["a"],VContent:k["a"],VDialog:S["a"],VIcon:y["a"],VList:x["a"],VListItem:w["a"],VListItemAction:I["a"],VListItemContent:V["a"],VListItemTitle:V["b"],VNavigationDrawer:T["a"],VOverflowBtn:D["a"],VRow:O["a"],VSpacer:L["a"],VSubheader:E["a"],VToolbarTitle:M["a"]});var R=a("8c4f"),B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.settings,"sort-by":"name"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[e._v("My Settings")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[a("v-text-field",{attrs:{label:"Settings name",readonly:""},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),a("v-col",{attrs:{cols:"12",sm:"8",md:"8"}},[a("v-text-field",{attrs:{label:"Value"},model:{value:e.editedItem.value,callback:function(t){e.$set(e.editedItem,"value",t)},expression:"editedItem.value"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var n=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v("mdi-pencil")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Reset")])]},proxy:!0}])})],1)],1)],1)},j=[],H=(a("4160"),a("c975"),a("a434"),a("b0c0"),a("159b"),a("bc3a")),G=a("dd37"),N={data:function(){return{dialog:!1,headers:[{text:"Settings Name",value:"name"},{text:"Value",value:"value"},{text:"Actions",value:"actions",sortable:!1}],settings:[],editedIndex:-1,editedItem:{name:"",value:0},defaultItem:{name:"",value:0}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog:function(e){e||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){for(var e in G)this.settings.push({name:e,value:G[e]})},editItem:function(e){this.editedIndex=this.settings.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this.settings.indexOf(e);confirm("Are you sure you want to delete this item?")&&this.settings.splice(t,1)},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.settings[this.editedIndex],this.editedItem):this.settings.push(this.editedItem);var e={};this.settings.forEach((function(t){e[t.name]=t.value})),H.post("http://localhost:5000/_save_settings_file",e).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),console.log("STOP"),this.close()}}},W=N,F=a("8fea"),J=a("ce7e"),$=a("8654"),Y=a("71d9"),K=Object(d["a"])(W,B,j,!1,null,null,null),U=K.exports;v()(K,{VBtn:g["a"],VCard:m["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VCol:b["a"],VContainer:C["a"],VDataTable:F["a"],VDialog:S["a"],VDivider:J["a"],VIcon:y["a"],VRow:O["a"],VSpacer:L["a"],VTextField:$["a"],VToolbar:Y["a"],VToolbarTitle:M["a"]});var Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12",sm:"9"}},[a("div",{staticClass:"text-center"},[a("div",{staticClass:"my-2"},[a("v-img",{attrs:{src:e.image_path,"aspect-ratio":"1.7"}})],1)])]),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-row",{staticStyle:{height:"150px"},attrs:{justify:"center"}},[a("div",{staticClass:"my-2"},[a("v-btn",{attrs:{"min-width":"200","x-large":"",color:"error",dark:""},on:{click:function(t){return e.defect()}}},[e._v("Defect")])],1)]),a("v-row",{staticStyle:{height:"150px"},attrs:{justify:"center"}},[a("div",{staticClass:"my-2"},[a("v-btn",{attrs:{"min-width":"200","x-large":"",color:"primary",dark:""},on:{click:function(t){return e.saveGood()}}},[e._v("No Defect")])],1)]),a("v-row",{staticStyle:{height:"150px"},attrs:{justify:"center"}},[a("div",{staticClass:"my-2"},[a("v-btn",{attrs:{"min-width":"200","x-large":"",color:"normal",dark:""},on:{click:function(t){return e.saveDoubt()}}},[e._v("Not Sure")])],1)])],1)],1),a("v-dialog",{attrs:{width:"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"grey darken-2"},[e._v("Defect Codes")]),a("v-container",[a("v-row",{staticClass:"mx-1",attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"5"}},[a("span",[e._v("Choose the Error Code:")])]),a("v-col",{attrs:{cols:"7"}},[a("v-overflow-btn",{attrs:{items:e.dropdown_font,target:"#dropdown-example"},model:{value:e.defect_code,callback:function(t){e.defect_code=t},expression:"defect_code"}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.dialog=!1}}},[e._v("Cancel")]),a("v-btn",{attrs:{text:""},on:{click:function(t){return e.saveDefect()}}},[e._v("Save")])],1)],1)],1)],1)},z=[],X=a("ab7a"),q=a.n(X),Z=a("bc3a"),ee={data:function(){return{dropdown_font:q.a,dialog:!1,defect_code:"1A-Cover Splice",image_path:a("f99f")}},props:{series:{type:String,default:"836-8"}},methods:{defect:function(){this.dialog=!this.dialog},saveDefect:function(){alert(this.defect_code+","+this.series),Z.post("http://localhost:5000/_bad_button_click",this.defect_code+","+this.series).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),this.dialog=!1},saveGood:function(){Z.post("http://localhost:5000/_good_button_click").then((function(e){console.log(e)})).catch((function(e){console.log(e)})),this.dialog=!1},saveDoubt:function(){Z.post("http://localhost:5000/_unsure_button_click").then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}}},te=ee,ae=a("adda"),ne=Object(d["a"])(te,Q,z,!1,null,null,null),re=ne.exports;v()(ne,{VBtn:g["a"],VCard:m["a"],VCardActions:_["a"],VCardTitle:_["c"],VCol:b["a"],VContainer:C["a"],VDialog:S["a"],VImg:ae["a"],VOverflowBtn:D["a"],VRow:O["a"],VSpacer:L["a"]});var oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center"}},[a("v-btn",{attrs:{block:"","x-large":"",color:"green",dark:""},on:{click:function(t){return e.start()}}},[e._v("Start Script")])],1),a("v-spacer"),a("v-row",[a("v-btn",{attrs:{block:"","x-large":"",color:"red",dark:""},on:{click:function(t){return e.stop()}}},[e._v("Stop Script")])],1),a("v-spacer")],1)},ie=[],se=a("bc3a"),ce={data:function(){return{info:""}},methods:{start:function(){var e=this;se.post("http://localhost:5000/_start_script").then((function(t){return e.info=t})),console.log("START")},stop:function(){var e=this;se.post("http://localhost:5000/_stop_script").then((function(t){return e.info=t})),console.log("STOP")}}},le=ce,de=Object(d["a"])(le,oe,ie,!1,null,null,null),ue=de.exports;v()(de,{VBtn:g["a"],VContainer:C["a"],VRow:O["a"],VSpacer:L["a"]}),n["a"].use(R["a"]);var ve=new R["a"]({mode:"history",routes:[{path:"/classifier/:series",name:"Classifier",component:re,props:!0},{path:"/settings",name:"Settings",component:U},{path:"/script",alias:"/",name:"Script",component:ue}]}),pe=a("f309");n["a"].use(pe["a"]);var fe=new pe["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:fe,router:ve,render:function(e){return e(P)}}).$mount("#app")},ab7a:function(e,t){e.exports=["0-No Hose","1A-Cover Splice","1B-High ID","1C-High OD","1D-Tube TIR","1E-Cover TIR","1F-Pitch","1G-Hose TIR (Tube & Cover)","1H-Cover Thickness","1I-Tube Adhesion","1J-Loose Cover / Adhesion","1K-Proof Failures (hose burst)","1L-Leaks","1M-Wavy Hose","1N-Movement/Deflection","1O-Over or Under Cure","1P-Low ID","1Q-Low OD","1R-Tube Thickness","2A-Incorrect Cover Material","2B-Incorrect Layer Material","2C-Incorrect Mandrel Lube","2D-Incorrect Mandrel","2E-Incorrect Tube Material","2F-Incorrect Wire","2G-Incorrect Yarn","2H-Yarn Knots","2I-Incorrect Dye","2J-BrokenWire","2K-Broken Yarn","2L-Loose / Tight Wire","2M-Loose / Tight Yarn","2N-Missing Wire","2O-Missing Yarn","2P-Missing Layer / Gapped","2Q-WSW Roping","3A-Gapping ST Film","3B-Cover Pits /Rough Cover","3C-Bunched Marker Yarn","3D-Cover Damage","3E-Cover Blisters","3F-Cured Lumps","3G-Excess Cement/Dye","3H-Dye Coverage Insufficient","3I-Lead Blisters","3J-Lead Wrinkles","3K-Lead chips/shavings","3L-Stuck Lead","3M-Strike-thru","3N-Neckdown","3O-Stuck Mandrel","3P-Wrap Marks/Wrinkle/Fold","3Q-Spiral Ends","3R-Layer or Jacket Change/Ballup","3S-Deck Change","3T-Cover Surge/Horse Collar","3U-Improper Braid Pattern","3V-Concentricity test/short","3W-Cement/Dye IN ID","3X-Mandrel Shavings","3Y-Jacket Defect / Stuck Poly","4A-Crossovers","4B-Discolored Yarn","4C-Thermal Barrier Issue / Residue","4D-Flat","4E-Foam Marks","4F-Dents/ Gouges / Torn Cover/ Dragmark","4G-Stripper Cuts","4H-Baked on Mica Dust","4I-Torn or cut Tube","4J-Kinked","4K-Dirty","4L-Mildew","4M-Chalky (Engine Hose)","4N-Tarnished (Engine Hose)","4O-Faded Marker Wire (Engine Hose)","5A-Layline Missing","5B-Layline Inverted","5C-Layline Doubled","5D-Layline Smeared / Bad","5E-Layline Wrong","5F-Layline Twisted","6A-Mandrel Welds","6B-Twists","6C-Connectors","6D-End of Reels","6E-Poor Dispersion / Grainy","6G-Off Control","6H-Handling","6K-Incorrect Documentation","6J-Uncured Scrap","6M-Mixed Stock","6N-Improper Cure","8A-Cut Length Shorts","8B-Jaw/Clamp Ends","8C-QA Samples","8D-Roping Check","8E-Extruder Samples","8F-Not Entered","9A-Scrap Compound","9B-Scrap Wire","9C-Scrap Yarn"]},dd37:function(e){e.exports=JSON.parse('{"PLC_IP":"169.254.0.1","PLC_SERVER_PORT":"502","PLC_ADDRESS":"0","GOOD_MESSAGE":"2","BLANK_MESSAGE":"3","WEIGHT_PATH":"TESTRT.pth","API_URL":"http://0.0.0.0:5000/","PRED_THRESHOLD":"0.80","IG_MAX_FPS":"30"}')},f99f:function(e,t,a){e.exports=a.p+"img/no-image-found.d7f71ea1.png"}});
//# sourceMappingURL=app.d2c411aa.js.map