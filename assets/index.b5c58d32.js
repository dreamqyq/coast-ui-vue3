import{d as e,c as t,o,a as n,b as a,r as l,e as s,f as c,g as i,w as r,F as d,h as u,i as p,t as m,j as v,k as f,T as h,l as b,m as g,n as y,p as C,q as _,s as w,u as x,v as k,x as E,y as L,z as B,A as T,B as q,C as M,D as A}from"./vendor.b132ace2.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,l)=>{const s=new URL(e,n);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const c=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){l(new Error(`Failed to import: ${e}`)),a(i)},onload(){o(self[t].moduleMap[s]),a(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("assets/");var N=e({name:"CoastSwitch",props:{value:{type:Boolean,required:!0}},emits:["update:value"],setup:(e,{emit:t})=>({toggle:()=>{t("update:value",!e.value)}})});const V=n("span",null,null,-1);N.render=function(e,n,a,l,s,c){return o(),t("button",{class:[{"coast-checked":e.value},"coast-switch"],onClick:n[1]||(n[1]=(...t)=>e.toggle&&e.toggle(...t))},[V],2)},function(e){var t,o,n,a,l,s,c='<svg><symbol id="coast-icon-loading" viewBox="0 0 1024 1024"><path d="M1023.849566 529.032144C1022.533495 457.744999 1007.544916 386.64064 979.907438 321.641387 952.343075 256.605575 912.349158 197.674868 863.252422 148.980264 814.192243 100.249102 755.992686 61.717486 693.004095 36.310016 630.052062 10.792874 562.347552-1.380777 495.483865 0.081523 428.620178 1.470709 362.012394 16.495846 301.144139 44.206439 240.202769 71.807359 185.000928 111.874391 139.377154 161.044242 93.753381 210.177537 57.707676 268.450209 33.945294 331.475357 10.073239 394.463948-1.296147 462.1319 0.166154 529.032144 1.482224 595.968946 15.593423 662.503615 41.549256 723.371871 67.468531 784.240126 105.013094 839.405409 151.075558 884.956067 197.101464 930.579841 251.645269 966.552431 310.612534 990.241698 369.543241 1014.040637 432.860849 1025.336908 495.483865 1023.874608 558.143438 1022.485422 620.291206 1008.337666 677.174693 982.381833 734.094737 956.462558 785.677384 918.954552 828.230327 872.892089 870.819826 826.902741 904.416179 772.395492 926.533473 713.5379 939.986637 677.85777 949.089457 640.605667 953.915048 602.841758 955.194561 602.951431 956.510631 602.987988 957.790144 602.987988 994.27454 602.987988 1023.849566 572.425909 1023.849566 534.735116 1023.849566 532.834125 1023.739893 530.933135 1023.593663 529.032144L1023.849566 529.032144 1023.849566 529.032144ZM918.892953 710.284282C894.691881 767.021538 859.596671 818.421398 816.568481 860.82811 773.540291 903.307938 722.652236 936.75806 667.706298 958.729124 612.760359 980.773303 553.902767 991.192193 495.483865 989.729893 437.064963 988.377265 379.304096 975.106889 326.441936 950.832702 273.543218 926.668187 225.616322 891.682649 186.097653 848.764132 146.542426 805.91873 115.35887 755.176905 94.959779 700.486869 74.451015 645.796833 64.799833 587.195144 66.189018 529.032144 67.541646 470.869145 79.934642 413.437296 102.563741 360.867595 125.119725 308.297895 157.765582 260.663459 197.759499 221.364135 237.716858 182.064811 284.985719 151.137157 335.910331 130.884296 386.834944 110.55832 441.305634 101.01681 495.483865 102.47911 549.662096 103.868296 603.036061 116.261292 651.876895 138.780718 700.754287 161.22703 745.025432 193.690099 781.509828 233.428113 818.067339 273.166127 846.764984 320.142529 865.518987 370.665008 884.346105 421.224045 893.156465 475.256046 891.76728 529.032144L891.986625 529.032144C891.840395 530.933135 891.76728 532.797568 891.76728 534.735116 891.76728 569.939999 917.540325 598.893547 950.66143 602.585856 944.227308 639.728286 933.589072 675.956779 918.892953 710.284282Z"  ></path></symbol><symbol id="coast-icon-left" viewBox="0 0 1024 1024"><path d="M670.977781 808.954249c-5.300726 0-10.596336-2.045589-14.603603-6.126534L368.69006 509.86743c-7.818059-7.961322-7.818059-20.717857 0-28.67918l287.684118-292.960285c7.92039-8.065699 20.877493-8.182356 28.942169-0.26299 8.065699 7.919367 8.182356 20.877493 0.264013 28.942169L411.976936 495.526817l273.603425 278.620695c7.918343 8.064676 7.801686 21.022803-0.264013 28.942169C681.331593 807.002804 676.153664 808.954249 670.977781 808.954249z"  ></path></symbol><symbol id="coast-icon-remove" viewBox="0 0 1024 1024"><path d="M786.138125 147.719375h-147.0965625c-7.3378125-63.6290625-61.47375-113.2190625-127.040625-113.2190625-65.5640625 0-119.6925 49.5871875-127.0303125 113.2190625h-147.1040625c-59.529375 0-107.953125 48.4378125-107.953125 107.9653125v5.5396875c0 45.4903125 28.3246875 84.4265625 68.2265625 100.2909375v510.020625c0 59.529375 48.4303125 107.9653125 107.955 107.9653125h411.8175c59.5265625 0 107.953125-48.440625 107.953125-107.9653125v-510.01875c39.8990625-15.86625 68.2265625-54.8025 68.2265625-100.2909375v-5.5396875c0-59.529375-48.4284375-107.9671875-107.953125-107.9671875zM512 85.701875c37.2909375 0 68.416875 26.728125 75.30375 62.0165625h-150.5934375c6.885-35.2903125 38.0128125-62.0165625 75.2896875-62.0165625zM774.663125 871.535c0 31.2984375-25.4653125 56.765625-56.7534375 56.765625h-411.8175c-31.288125 0-56.7534375-25.4690625-56.7534375-56.765625v-502.34625h525.3253125v502.34625zM842.88875 261.2234375c0 31.2984375-25.4653125 56.765625-56.7534375 56.765625h-548.270625c-31.288125 0-56.7534375-25.4671875-56.7534375-56.765625v-5.5396875c0-31.2984375 25.4653125-56.765625 56.7534375-56.765625h548.2725c31.288125 0 56.7534375 25.4671875 56.7534375 56.765625v5.5396875zM374.744375 862.8209375c14.139375 0 25.6003125-11.465625 25.6003125-25.5984375v-288.25125c0-14.135625-11.4628125-25.6021875-25.6003125-25.6021875s-25.6003125 11.4675-25.6003125 25.6021875v288.25125c-0.001875 14.1375 11.4609375 25.5984375 25.6003125 25.5984375zM512 862.8209375c14.139375 0 25.6021875-11.465625 25.6021875-25.5984375v-288.25125c0-14.135625-11.4675-25.6021875-25.6021875-25.6021875-14.1375 0-25.6003125 11.4675-25.6003125 25.6021875v288.25125c0 14.1375 11.4609375 25.5984375 25.6003125 25.5984375zM649.255625 862.8209375c14.1375 0 25.5984375-11.465625 25.5984375-25.5984375v-288.25125c0-14.135625-11.4628125-25.6021875-25.5984375-25.6021875-14.14125 0-25.6021875 11.4675-25.6021875 25.6021875v288.25125c-0.001875 14.1375 11.465625 25.5984375 25.6021875 25.5984375z"  ></path></symbol><symbol id="coast-icon-right" viewBox="0 0 1024 1024"><path d="M353.022219 215.045751c5.300726 0 10.596336 2.045589 14.603603 6.126534L655.30994 514.13257c7.818059 7.961322 7.818059 20.717857 0 28.67918l-287.684118 292.960285c-7.92039 8.065699-20.877493 8.182356-28.94216899 0.26299-8.065699-7.919367-8.182356-20.877493-0.26401301-28.942169L612.023064 528.473183l-273.603425-278.620695c-7.918343-8.064676-7.801686-21.02280301 0.264013-28.942169C342.668407 216.997196 347.846336 215.045751 353.022219 215.045751z"  ></path></symbol><symbol id="coast-icon-settings" viewBox="0 0 1024 1024"><path d="M512 608c-52.928 0-96-43.072-96-96s43.072-96 96-96 96 43.072 96 96S564.928 608 512 608zM512 480c-17.632 0-32 14.368-32 32s14.368 32 32 32 32-14.368 32-32S529.632 480 512 480z"  ></path><path d="M631.04 960c-10.016 0-19.712-4.736-25.856-13.12l-73.408-100.48c-13.664 0.832-25.92 0.864-39.584 0l-73.376 100.48c-7.904 10.816-21.728 15.616-34.656 11.872-34.592-9.888-67.488-23.456-97.76-40.32-11.712-6.528-18.112-19.648-16.032-32.896l19.2-123.264c-9.824-8.704-19.136-18.016-27.84-27.808l-123.264 19.2c-13.056 1.984-26.336-4.352-32.896-16.064-16.896-30.368-30.464-63.296-40.32-97.824-3.68-12.864 1.056-26.72 11.904-34.624l100.448-73.376C177.152 524.96 176.928 518.4 176.928 512s0.224-12.96 0.672-19.776L77.12 418.816c-10.816-7.936-15.584-21.728-11.904-34.656 9.856-34.496 23.424-67.392 40.32-97.792 6.56-11.712 19.712-18.048 32.896-16.064l123.264 19.2c8.736-9.824 18.016-19.104 27.84-27.84l-19.2-123.264C268.288 125.184 274.72 112.064 286.432 105.536c30.4-16.896 63.296-30.464 97.76-40.32 12.928-3.648 26.72 1.056 34.656 11.904l73.376 100.448c13.568-0.896 25.824-0.896 39.584 0l73.408-100.48c7.904-10.848 21.664-15.52 34.656-11.904 34.464 9.856 67.328 23.424 97.76 40.32 11.712 6.528 18.112 19.648 16.064 32.896L734.432 261.76c9.824 8.736 19.104 18.016 27.808 27.776l123.328-19.2c13.152-2.016 26.336 4.384 32.864 16.032 16.896 30.4 30.496 63.296 40.352 97.824 3.648 12.896-1.088 26.688-11.904 34.624l-100.48 73.408c0.448 6.816 0.672 13.376 0.672 19.776s-0.224 12.96-0.672 19.776l100.48 73.376c10.816 7.904 15.552 21.728 11.904 34.624-9.856 34.496-23.424 67.424-40.352 97.824-6.528 11.712-19.488 18.048-32.896 16.064l-123.296-19.2c-8.672 9.76-17.984 19.072-27.808 27.776l19.232 123.296c2.048 13.248-4.352 26.368-16.064 32.896-30.24 16.832-63.136 30.4-97.76 40.32C636.928 959.584 633.984 960 631.04 960zM337.152 872.672c13.984 6.752 28.544 12.704 43.552 17.92l70.528-96.576c6.784-9.28 17.984-14.272 29.472-12.896 20.576 2.336 42.08 2.336 62.624 0 11.84-1.376 22.72 3.616 29.472 12.896l70.528 96.576c15.04-5.184 29.6-11.168 43.552-17.92l-18.432-118.368c-1.76-11.36 2.72-22.848 11.712-30.016 16.384-12.992 31.264-27.872 44.16-44.128 7.168-8.992 18.4-13.504 30.016-11.744l118.368 18.432c6.752-14.016 12.736-28.576 17.92-43.552l-96.576-70.528c-9.28-6.784-14.208-18.016-12.896-29.472 1.152-10.272 1.952-20.704 1.952-31.296s-0.768-21.024-1.952-31.296c-1.312-11.424 3.616-22.688 12.896-29.472l96.576-70.56c-5.152-15.008-11.168-29.568-17.92-43.552l-118.4 18.432c-11.328 1.696-22.816-2.688-29.984-11.744-12.896-16.256-27.776-31.104-44.16-44.128-8.992-7.168-13.472-18.592-11.712-29.984l18.432-118.4c-14.016-6.752-28.576-12.736-43.52-17.92l-70.56 96.576c-6.784 9.28-17.696 14.368-29.472 12.928-20.544-2.368-42.016-2.4-62.56 0-11.52 1.344-22.752-3.616-29.536-12.896l-70.528-96.576c-14.976 5.152-29.536 11.136-43.552 17.92l18.432 118.368c1.76 11.392-2.72 22.848-11.744 30.016-16.32 12.928-31.2 27.808-44.128 44.128-7.168 9.024-18.56 13.472-30.016 11.744l-118.368-18.432c-6.752 14.016-12.736 28.576-17.92 43.552l96.576 70.56c9.312 6.784 14.24 18.08 12.896 29.536C241.696 491.008 240.928 501.408 240.928 512s0.768 20.992 1.952 31.264c1.344 11.456-3.616 22.688-12.896 29.504l-96.576 70.528c5.184 15.008 11.168 29.568 17.92 43.552l118.368-18.432c11.392-1.76 22.848 2.752 30.016 11.744 12.896 16.32 27.744 31.168 44.128 44.128 9.024 7.168 13.504 18.624 11.744 30.016L337.152 872.672z"  ></path></symbol><symbol id="coast-icon-download" viewBox="0 0 1024 1024"><path d="M469.333333 170.666667v341.333333H341.333333l170.666667 170.666667 170.666667-170.666667h-128V170.666667z"  ></path><path d="M853.333333 768H170.666667v-341.333333H85.333333v384a42.666667 42.666667 0 0 0 42.666667 42.666666h768a42.666667 42.666667 0 0 0 42.666667-42.666666v-384h-85.333334v341.333333z"  ></path></symbol><symbol id="coast-icon-off" viewBox="0 0 1024 1024"><path d="M757.376 213.76a42.666667 42.666667 0 0 1 56.32-2.901333l4.010667 3.584 4.138666 4.266666A425.258667 425.258667 0 0 1 938.666667 512c0 235.648-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512a425.386667 425.386667 0 0 1 107.690667-283.306667l9.6-10.496 3.669333-3.754666a42.666667 42.666667 0 0 1 64.512 55.552l-3.498666 4.096-3.2 3.242666A341.333333 341.333333 0 1 0 853.333333 512a339.626667 339.626667 0 0 0-83.84-224.128l-9.130666-10.026667-3.669334-3.754666a42.666667 42.666667 0 0 1 0.682667-60.373334zM512 85.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v341.333333a42.666667 42.666667 0 0 1-85.333334 0V128a42.666667 42.666667 0 0 1 42.666667-42.666667z"  ></path></symbol></svg>',i=(i=document.getElementsByTagName("script"))[i.length-1].getAttribute("data-injectcss");if(i&&!e.__iconfont__svg__cssinject__){e.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(d){console&&console.log(d)}}function r(){l||(l=!0,n())}t=function(){var e,t,o;(o=document.createElement("div")).innerHTML=c,c=null,(t=o.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",e=t,(o=document.body).firstChild?(t=o.firstChild).parentNode.insertBefore(e,t):o.appendChild(e))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(t,0):(o=function(){document.removeEventListener("DOMContentLoaded",o,!1),t()},document.addEventListener("DOMContentLoaded",o,!1)):document.attachEvent&&(n=t,a=e.document,l=!1,(s=function(){try{a.documentElement.doScroll("left")}catch(d){return void setTimeout(s,50)}r()})(),a.onreadystatechange=function(){"complete"==a.readyState&&(a.onreadystatechange=null,r())})}(window);var S=e({name:"CoastIcon",props:{name:{type:String,required:!0},prefix:{type:String,required:!1,default:"coast-icon-"}},setup(){}});const I={class:"coast-icon","aria-hidden":"true"};S.render=function(e,a,l,s,c,i){return o(),t("svg",I,[n("use",{"xlink:href":`#${e.prefix}${e.name}`},null,8,["xlink:href"])])};var $=e({name:"CoastButton",components:{Icon:S},props:{theme:{type:String,default:"button",validator:e=>["button","link","text"].includes(e)},size:{type:String,default:"normal",validator:e=>["normal","big","small"].includes(e)},level:{type:String,default:"normal",validator:e=>["normal","main","danger","warning"].includes(e)},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},setup(e){const{theme:t,size:o,level:n}=e;return{classes:a((()=>({[`coast-button-theme-${t}`]:t,[`coast-button-size-${o}`]:o,[`coast-button-level-${n}`]:n,"coast-button-loading":e.loading})))}}});const z={key:1};$.render=function(e,n,a,i,r,d){const u=l("Icon");return o(),t("button",{class:[e.classes,"coast-button"],disabled:e.disabled||e.loading},[e.loading?(o(),t(u,{key:0,class:"coast-button-loadingIndicator",name:"loading"})):s("",!0),e.$slots.default?(o(),t("span",z,[c(e.$slots,"default")])):s("",!0)],10,["disabled"])};var j=e({name:"CoastButtonGroup",setup(e,t){t.slots.default().forEach((e=>{if(e.type!==$)throw new Error("CoButtonGroup 的子标签必须为 CoButton")}))}});const D={class:"coast-button-group"};j.render=function(e,n,a,l,s,i){return o(),t("div",D,[c(e.$slots,"default")])};var R=e({name:"CoastTabPanel",props:{title:{type:String,required:!0},disabled:{type:Boolean,required:!1}}});R.render=function(e,t,o,n,a,l){return c(e.$slots,"default")};var P=e({name:"CoastTabs",props:{selected:{type:String,required:!0}},emits:["update:selected"],setup(e,t){const o=i(null),n=i(null),l=i(null);r((()=>{const{width:e,left:t}=o.value.getBoundingClientRect(),{left:a}=l.value.getBoundingClientRect();n.value.style.width=e+"px",n.value.style.left=t-a+"px"}),{flush:"post"});const s=t.slots.default();s.forEach((e=>{if(e.type!==R)throw new Error("CoTabs 的子标签必须为 CoTabPanel")}));const c=s.map((e=>({title:e.props.title,disabled:!0===e.props.disabled||""===e.props.disabled}))),d=a((()=>s.filter((t=>t.props.title===e.selected))[0]));return{defaults:s,subElements:c,selectHandle:({title:o,disabled:n})=>{void 0!==n&&!0!==n&&o!==e.selected&&t.emit("update:selected",o)},current:d,selectedItem:o,indicator:n,container:l}}});const H={class:"coast-tabs"},O={ref:"container",class:"coast-tabs-nav"},U={ref:"indicator",class:"coast-tabs-nav-indicator"},F={class:"coast-tabs-content"};P.render=function(e,a,l,s,c,i){return o(),t("div",H,[n("div",O,[(o(!0),t(d,null,u(e.subElements,((n,a)=>(o(),t("div",{key:a,ref:t=>{n.title===e.selected&&(e.selectedItem=t)},class:[{selected:n.title===e.selected,disabled:n.disabled},"coast-tabs-nav-item"],onClick:t=>e.selectHandle(n)},m(n.title),11,["onClick"])))),128)),n("div",U,null,512)],512),n("div",F,[(o(),t(p(e.current),{key:e.current.props.title}))])])};var G=e({name:"CoastDialog",components:{Button:$},props:{title:{type:String,default:"提示"},visible:{required:!0,type:Boolean},overlayClosable:{type:Boolean,default:!0,required:!1},confirm:{type:Function,required:!1},cancel:{type:Function,required:!1}},emits:["update:visible"],setup(e,{emit:t}){const o=()=>{t("update:visible",!1)};return{onClose:o,overlayClick:()=>{e.overlayClosable&&o()},onConfirm:()=>{var t;!1!==(null==(t=e.confirm)?void 0:t.call(e))&&o()},onCancel:()=>{var t;!1!==(null==(t=e.cancel)?void 0:t.call(e))&&o()}}}});const W={class:"coast-dialog-wrapper"},Z={class:"coast-dialog"},Y=v("确定"),J=v("取消");G.render=function(e,a,i,r,d,u){const p=l("Button");return e.visible?(o(),t(h,{key:0,to:"body"},[n("div",{class:"coast-dialog-overlay",onClick:a[1]||(a[1]=(...t)=>e.overlayClick&&e.overlayClick(...t))}),n("div",W,[n("div",Z,[n("header",null,[v(m(e.title)+" ",1),n("span",{class:"coast-dialog-close",onClick:a[2]||(a[2]=(...t)=>e.onClose&&e.onClose(...t))})]),n("main",null,[c(e.$slots,"default")]),n("footer",null,[n(p,{level:"main",onClick:e.onConfirm},{default:f((()=>[Y])),_:1},8,["onClick"]),n(p,{onClick:e.onCancel},{default:f((()=>[J])),_:1},8,["onClick"])])])])])):s("",!0)};var K=e({name:"CoastCard",props:{title:{type:String,required:!1},hoverable:{type:Boolean,required:!1},shadow:{type:Boolean,required:!1},type:{type:String,required:!1,validator:e=>["secondary","alert","success","purple","warning","violet","error","cyan","dark","lite"].includes(e)}},setup(e){const{hoverable:t,shadow:o,type:n}=e;return{classes:a((()=>({"coast-card-hoverable":t,"coast-card-shadow":o,[`coast-card-${n}`]:n})))}}});const Q={key:0,class:"coast-card-title"},X={class:"coast-card-content"},ee={key:1,class:"coast-card-footer"};K.render=function(e,a,l,i,r,d){return o(),t("div",{class:["coast-card",e.classes]},[e.title?(o(),t("h2",Q,m(e.title),1)):s("",!0),n("main",X,[c(e.$slots,"default")]),e.$slots.footer?(o(),t("footer",ee,[c(e.$slots,"footer")])):s("",!0)],2)};const te=(e,t)=>{let o=(new Date).getTime(),n=t||160;return function(){const t=arguments,a=(new Date).getTime();a-o>=n?(e.apply(this,t),o=a):setTimeout((()=>{e.apply(this,t)}),n)}};var oe={name:"TopNav",props:{isHome:{type:Boolean,default:!1}},components:{CoIcon:S},inject:["asideVisible"],setup(e){const t=y("asideVisible"),o=i(!0);if(!e.isHome){b((()=>{e(),window.addEventListener("scroll",e)})),g((()=>{window.removeEventListener("scroll",e)}));const e=te((()=>{o.value=0===window.scrollY}))}return{toggleAside:()=>{t.value=!t.value},isTop:o}}};const ne=w();C("data-v-00fe7fb0");const ae={class:"logo"},le={class:"menu"},se=v("文档");_();const ce=ne(((e,a,c,i,r,d)=>{const u=l("co-icon"),p=l("router-link");return o(),t("nav",{class:["topNav",{shadow:!i.isTop,fixed:!c.isHome}]},[c.isHome?s("",!0):(o(),t(u,{key:0,name:"menu",prefix:"icon-",class:"icon toggleAsideBtn",onClick:i.toggleAside},null,8,["onClick"])),n("div",ae,[n(p,{to:"/"},{default:ne((()=>[n(u,{name:"wheel",prefix:"icon-",class:"icon"})])),_:1})]),n("ul",le,[n("li",null,[n(p,{to:"/doc/introduce"},{default:ne((()=>[se])),_:1})])])],2)}));oe.render=ce,oe.__scopeId="data-v-00fe7fb0";var ie={components:{TopNav:oe,CoButton:$,CoIcon:S}};const re=w();C("data-v-04e8dd36");const de={class:"topNav-wrapper"},ue={class:"banner"},pe=n("h1",null,"Coast UI for Vue3",-1),me=n("h2",null,"一款面向未来的 UI 框架",-1),ve={class:"actions"},fe=v(" 开始 "),he={href:"https://github.com/dreamqyq/coast-ui-vue3",target:"_blank"},be=v(" Github "),ge={class:"content"},ye=n("h3",null,"Vue 3",-1),Ce=n("p",null,"使用了最新的 Vue3 Composition API",-1),_e=n("h3",null,"TypeScript",-1),we=n("p",null,"源代码采用了 TypeScript 编写",-1),xe=n("h3",null,"Vite",-1),ke=n("p",null,"官网基于 Vite2.x 构建",-1),Ee=n("h3",null,"文档完整",-1),Le=n("p",null,"所有组件拥有完整的使用文档及示例",-1);_();const Be=re(((e,a,s,c,i,r)=>{const u=l("TopNav"),p=l("co-icon"),m=l("co-button"),v=l("router-link");return o(),t(d,null,[n("div",de,[n(u,{isHome:""}),n("div",ue,[pe,me,n("p",ve,[n(v,{to:"/doc/introduce"},{default:re((()=>[n(m,null,{default:re((()=>[fe,n(p,{name:"start",prefix:"icon-",class:"icon"})])),_:1})])),_:1}),n("a",he,[n(m,null,{default:re((()=>[be,n(p,{name:"github",prefix:"icon-",class:"icon"})])),_:1})])])])]),n("div",ge,[n("ul",null,[n("li",null,[n(p,{name:"vue",prefix:"icon-",class:"icon"}),ye,Ce]),n("li",null,[n(p,{name:"ts",prefix:"icon-",class:"icon"}),_e,we]),n("li",null,[n(p,{name:"lightning",prefix:"icon-",class:"icon"}),xe,ke]),n("li",null,[n(p,{name:"light",prefix:"icon-",class:"icon"}),Ee,Le])])])],64)}));let Te;ie.render=Be,ie.__scopeId="data-v-04e8dd36";const qe={},Me=function(e,t){if(!t)return e();if(void 0===Te){const e=document.createElement("link").relList;Te=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in qe)return;qe[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":Te,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))},Ae={"../examples/Button/index.vue":()=>Me((()=>__import__("./index.47a67f68.js")),["./assets/index.47a67f68.js","./assets/index.ed8c8fe6.css","./assets/Demo.ae60fb81.js","./assets/Demo.4387f3e1.css","./assets/vendor.b132ace2.js"]),"../examples/Card/index.vue":()=>Me((()=>__import__("./index.c5f0713f.js")),["./assets/index.c5f0713f.js","./assets/index.72859b76.css","./assets/Demo.ae60fb81.js","./assets/Demo.4387f3e1.css","./assets/vendor.b132ace2.js"]),"../examples/Dialog/index.vue":()=>Me((()=>__import__("./index.364130cc.js")),["./assets/index.364130cc.js","./assets/Demo.ae60fb81.js","./assets/Demo.4387f3e1.css","./assets/vendor.b132ace2.js"]),"../examples/Switch/index.vue":()=>Me((()=>__import__("./index.f9f95fe0.js")),["./assets/index.f9f95fe0.js","./assets/vendor.b132ace2.js","./assets/Demo.ae60fb81.js","./assets/Demo.4387f3e1.css"]),"../examples/Tabs/index.vue":()=>Me((()=>__import__("./index.3e2a46f4.js")),["./assets/index.3e2a46f4.js","./assets/Demo.ae60fb81.js","./assets/Demo.4387f3e1.css","./assets/vendor.b132ace2.js"])},Ne=[];Object.keys(Ae).forEach(((e,t)=>{Ne.push({name:`${e.split("/")[2]} 组件`,path:e.split("/")[2].toLocaleLowerCase(),component:Ae[e],meta:{prev:"",next:""}}),0===t?Ne[t].meta.prev="开始":(Ne[t-1].meta.next=Ne[t].name,Ne[t].meta.prev=Ne[t-1].name)}));var Ve=e({props:{visible:{type:Boolean,required:!0}},emits:["change"],setup(e,t){const o=()=>{t.emit("change",!1)};return{demoViewList:Ne,clickAsideNav:e=>{"A"===e.target.tagName&&o()},closeAsideNav:o}}});const Se=w();C("data-v-3cf9f52c");const Ie=n("h2",null,"文档",-1),$e=v("介绍"),ze=v("安装"),je=v("开始"),De=n("h2",null,"组件列表",-1);_();const Re=Se(((e,a)=>{const s=l("router-link");return o(),t(h,{to:"body"},[x(n("div",{class:"aside-overlay",onClick:a[1]||(a[1]=(...t)=>e.closeAsideNav&&e.closeAsideNav(...t))},null,512),[[k,e.visible]]),n("aside",{class:{visible:e.visible},onClick:a[2]||(a[2]=(...t)=>e.clickAsideNav&&e.clickAsideNav(...t))},[Ie,n("ol",null,[n("li",null,[n(s,{to:"/doc/introduce"},{default:Se((()=>[$e])),_:1})]),n("li",null,[n(s,{to:"/doc/install"},{default:Se((()=>[ze])),_:1})]),n("li",null,[n(s,{to:"/doc/get-start"},{default:Se((()=>[je])),_:1})])]),De,n("ol",null,[(o(!0),t(d,null,u(e.demoViewList,(e=>(o(),t("li",{key:e.name},[n(s,{to:`/doc/${e.path}`},{default:Se((()=>[v(m(e.name),1)])),_:2},1032,["to"])])))),128))])],2)])}));Ve.render=Re,Ve.__scopeId="data-v-3cf9f52c";const Pe=e({setup(){const e=L(),t=i(e.currentRoute.value.meta.prev),o=i(e.currentRoute.value.meta.next);E((e=>{t.value=e.meta.prev,o.value=e.meta.next}));return{prevName:t,nextName:o,toAdjacentPage:n=>{const a="prev"===n?t.value:o.value;e.push({name:a}),window.scrollTo({top:0,left:0})}}}}),He=w();C("data-v-1c118477");const Oe=v(" ← "),Ue=v(" → ");_();const Fe=He(((e,a,l,c,i,r)=>(o(),t("footer",null,[n("div",{class:"prev",onClick:a[1]||(a[1]=t=>e.toAdjacentPage("prev"))},[e.prevName?(o(),t(d,{key:0},[Oe,n("span",null,m(e.prevName),1)],64)):s("",!0)]),n("div",{class:"next",onClick:a[2]||(a[2]=t=>e.toAdjacentPage("next"))},[e.nextName?(o(),t(d,{key:0},[n("span",null,m(e.nextName),1),Ue],64)):s("",!0)])]))));Pe.render=Fe,Pe.__scopeId="data-v-1c118477";var Ge={components:{AsideNav:Ve,TopNav:oe,FooterNav:Pe},inject:["asideVisible"],setup(){const e=y("asideVisible");return{asideVisible:e,asideVisibleChange:t=>{e.value=t}}}};const We=w();C("data-v-2eb9f865");const Ze={class:"layout"},Ye={class:"content"};_();const Je=We(((e,a,s,c,i,r)=>{const d=l("TopNav"),u=l("AsideNav"),p=l("router-view"),m=l("FooterNav");return o(),t("div",Ze,[n(d,{class:"nav"}),n("div",Ye,[n(u,{visible:c.asideVisible,onChange:c.asideVisibleChange},null,8,["visible","onChange"]),n("main",null,[n(p),n(m)])])])}));Ge.render=Je,Ge.__scopeId="data-v-2eb9f865";var Ke={props:{content:{type:String,required:!0}}};Ke.render=function(e,n,a,l,s,c){return o(),t("article",{class:"markdown-body",innerHTML:a.content},null,8,["innerHTML"])};const Qe=e=>q(Ke,{content:e,key:e}),Xe=T({history:B(),routes:[{path:"/",component:ie},{path:"/doc",name:"doc",component:Ge,children:[{path:"",redirect:"/doc/introduce"},{path:"introduce",name:"介绍",component:Qe('<h1 id="介绍">介绍</h1>\n<p>Coast UI for Vue3 是一款基于 <code>Vue3</code> 和 <code>TypeScript</code> 的 UI 组件库，因此拥有良好的代码提示，使用非常方便。组件样式采用了简洁的设计风格。</p>\n<p>这款组件库使用了最新的技术栈，全程手写，组件库源码不采用任何第三方库。源码拥有良好的编码风格，每个组件的代码都足够简洁，十分易读。</p>\n<p>文档完整，拥有完整的组件使用示例代码。</p>\n<p>官网基于 <code>vite2.x</code> 搭建。官方展示使用了 github 的 gh-pages 功能，并实现了自动化部署脚本。</p>\n<p>源代码放在了 <a href="https://github.com/dreamqyq/coast-ui-vue3">https://github.com/dreamqyq/coast-ui-vue3</a> 你也可以直接查看每个组件的源代码和示例，运行方法见 <a href="https://github.com/dreamqyq/coast-ui-vue3/blob/master/README.md">README.md</a>。</p>\n'),meta:{prev:"",next:"安装"}},{path:"install",name:"安装",component:Qe('<h1 id="安装">安装</h1>\n<p>打开终端运行下列命令：</p>\n<pre><code>npm install coast-ui-vue3\n</code></pre>\n<p>或</p>\n<pre><code>yarn add coast-ui-vue3\n</code></pre>\n'),meta:{prev:"介绍",next:"开始"}},{path:"get-start",name:"开始",component:Qe('<h1 id="开始使用">开始使用</h1>\n<p>请先<a href="#/doc/install">安装</a>本组件库。</p>\n<p>然后在你的代码中写入下面的代码</p>\n<pre><code>import { CoButton, CoTabs, CoSwitch, CoDialog, openDialog } from &quot;coast-ui-vue3&quot;\nimport &quot;coast-ui-vue3/dist/lib/coast-ui.css&quot;\n</code></pre>\n<p>就可以使用我提供的组件了。</p>\n<h2 id="vue-单文件组件">Vue 单文件组件</h2>\n<p>代码示例：</p>\n<pre><code>&lt;template&gt;\n  &lt;div&gt;\n    &lt;co-button&gt;按钮&lt;/co-button&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n&lt;script&gt;\nimport {CoButton, CoTabs, CoSwitch, CoDialog} from &quot;coast-ui-vue3&quot;\nexport default {\n  components: { CoButton }\n}\n&lt;/script&gt;\n</code></pre>\n'),meta:{prev:"介绍",next:`${Ne[0].name}`}},...Ne]}]});var et={name:"App",setup(){const e=document.documentElement.clientWidth,t=i(e>500);M("asideVisible",t),Xe.beforeEach((()=>{e<=500&&(t.value=!1)}))}};et.render=function(e,n,a,s,c,i){const r=l("router-view");return o(),t(r)};const tt=A(et);tt.use(Xe),tt.mount("#app");export{$ as _,j as a,K as b,G as c,N as d,P as e,R as f};
