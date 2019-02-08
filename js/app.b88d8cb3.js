(function(e){function t(t){for(var r,o,i=t[0],l=t[1],c=t[2],h=0,v=[];h<i.length;h++)o=i[h],n[o]&&v.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(v.length)v.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},s=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/earthquake-simulation/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("64a9"),n=a.n(r);n.a},"0aab":function(e,t,a){"use strict";var r=a("1a6e"),n=a.n(r);n.a},"1a6e":function(e,t,a){},"2c3e":function(e,t,a){"use strict";var r=a("a102"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var r=a("2b0e"),n=a("8c4f"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navigation"),a("router-view")],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("div",{staticClass:"container nav nav-tabs",attrs:{id:"mainTabs",role:"tablist"}},[a("router-link",{staticClass:"nav-item nav-link active",attrs:{id:"home-tab",to:"/"}},[e._v("\n      Home\n    ")])],1)])},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-dark bg-dark"},[a("span",{staticClass:"navbar-brand"},[e._v("Earthquake Simulation")])])}],c={name:"Navigation"},u=c,h=(a("ab31"),a("2877")),v=Object(h["a"])(u,i,l,!1,null,"46e19db8",null);v.options.__file="Navigation.vue";var f=v.exports,d={name:"app",components:{Navigation:f}},p=d,m=(a("034f"),Object(h["a"])(p,s,o,!1,null,null,null));m.options.__file="App.vue";var g=m.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContainerView",[a("h1",{attrs:{slot:"title"},slot:"title"},[e._v("Home")]),a("section",{staticClass:"content",attrs:{slot:"content"},slot:"content"},[a("h3",[e._v("What is an Earthquake?")]),a("p",[e._v("\n      Earthquakes occur because of a sudden release of stored energy. This\n      energy has built up over long periods of time as a result of tectonic\n      forces within the earth. Most earthquakes take place along faults in the\n      upper 25 miles of the earth's surface when one side rapidly moves\n      relative to the other side of the fault. This sudden motion causes chock\n      waves (seismic waves) to radiate from their point of origin called the\n      "),a("b",[e._v("focus")]),e._v(" and travel through the earthquake. Each year there are\n      thousands of earthquakes that can be felt by people and over one million\n      that are strong to be recorded by instruments. Strong seismic waves can\n      cause great local damage and they can travel large distances. But even\n      weaker seismic waves can travel far and can be detected by sensitive\n      instruments called "),a("b",[e._v("seismographs")]),e._v(".\n    ")]),a("h3",[e._v("What are earthquake (Seismic ) Waves?")]),a("p",[e._v("\n      A seismic wave is simply a means of transferring energy from one spot to\n      another within the earth. Although seismologists recognize different\n      types of waves, we are interested in only two types: P (primary) waves,\n      which are similar to sound waves, and S (secondary) waves, which are a\n      kind of shear wave. Within the earth, P waves can travel through solids\n      and liquids, whereas S waves can only travel through solids.\n    ")]),a("h3",[e._v("What's a Seismogram?")]),a("p",[e._v("\n      A highly simplified simulated recording of earthquake waves (a\n      seismogram) can be seen to the left. Study this sample seismogram and be\n      sure you can identify these parts:\n    ")]),a("ul",[a("li",[e._v("P-waves and the P-wave arrival time")]),a("li",[e._v("S-waves and the S-wave arrival time")]),a("li",[e._v("S-P interval (expressed in seconds)")]),a("li",[e._v("S-wave maximum amplitude (measured in mm)")])]),a("p",[a("b",[e._v("Note well:")]),e._v(" This seismogram is a simulation. The actual records of\n      earthquake waves are far more complicated than what is presented here.\n      As P and S waves travel through the earth, they are reflected by various\n      layers of the earth (such as the core-mantle boundary). This interaction\n      produces additional seismic waves (phases) which will be detected by\n      seismographs. Once you successfully complete this tutorial, you will be\n      given links to some seismology labs, where you can see real seismograms.\n    ")])]),a("button",{staticClass:"btn btn-primary text-light",attrs:{slot:"actions",onclick:"$('#page-1-tab').click()"},slot:"actions"},[e._v("\n    Next\n  ")])])},w=[],_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container container-view-root"},[a("div",[e._t("title")],2),a("progress",{attrs:{max:e.progressMax},domProps:{value:e.progressValue}}),a("VuePerfectScrollbar",{staticClass:"container-view-scroll-area",attrs:{id:"scrollarea"}},[e._t("content")],2),a("div",[e._t("actions")],2)],1)},y=[],k=a("9d63"),S=a.n(k),x=a("109c"),A={name:"ContainerView",components:{VuePerfectScrollbar:S.a},data:function(){return{canScroll:!0,progressMax:100,progressValue:1,scrollArea:null,scrollContentHeight:0}},mounted:function(){this.scrollArea=document.getElementById("scrollarea"),this.scrollArea.addEventListener("scroll",this.handleScroll),this.scrollContentHeight=this.scrollArea.offsetHeight,this.progressMax=this.scrollArea.scrollHeight-this.scrollArea.offsetHeight},watch:{"scrollArea.offsetHeight":function(e){this.scrollContentHeight=e,this.progressMax=this.scrollArea.scrollHeight-this.scrollArea.offsetHeight},progressValue:function(e){0===e&&(this.progressValue=1)}},methods:{handleScroll:function(){x["a"].to(this.$data,.5,{progressValue:this.scrollArea.scrollTop}),0===this.progressValue&&(this.progressValue=1),this.canScroll=!(this.scrollArea.scrollTop>=this.scrollArea.scrollHeight-this.scrollArea.offsetHeight)}}},C=A,H=(a("0aab"),Object(h["a"])(C,_,y,!1,null,"494347b3",null));H.options.__file="ContainerView.vue";var P=H.exports,O={name:"Home",components:{ContainerView:P}},V=O,j=(a("2c3e"),Object(h["a"])(V,b,w,!1,null,"6d12bc1b",null));j.options.__file="Home.vue";var q=j.exports;r["a"].use(n["a"]),r["a"].config.productionTip=!1;var E=[{path:"/",redirect:"/home"},{path:"/home",component:q}],T=new n["a"]({routes:E});new r["a"]({render:function(e){return e(g)},router:T}).$mount("#app")},"64a9":function(e,t,a){},"979b":function(e,t,a){},a102:function(e,t,a){},ab31:function(e,t,a){"use strict";var r=a("979b"),n=a.n(r);n.a}});
//# sourceMappingURL=app.b88d8cb3.js.map