import{D as U}from"./DemoList.d4bdeefd.js";import{d as v,r as h,L as G,h as J,M as K,N as Q,o as _,c as m,g as w,n as Z,u as e,B as uu,j as P,i as T,T as tu,e as V,F as C,E as S,a as n,w as u,_ as c,b as s,f as E,y as eu,z as ou}from"./index.9d04985f.js";const nu={name:"CoastPopover"},i=v({...nu,props:{trigger:{type:String,required:!1,default:"click",validator:t=>["click","hover","focus"].includes(t)},position:{type:String,required:!1,default:"top",validator:t=>["top","left","right","bottom"].includes(t)},width:{type:[String,Number],required:!1,default:""}},setup(t){const r=t,a=h(!1),l=h(null),B=h(null),g=h({}),D=h(0),R=G(),W=J(()=>({"coast-popover":!0,[`coast-popover-${r.position}`]:r.position})),j=()=>{const{width:o}=r;g.value.width=typeof o=="number"?`${o}px`:o},H=()=>{const{left:o,top:p,height:F,width:f}=B.value.getBoundingClientRect(),{height:$}=l.value.getBoundingClientRect(),x={top:{left:o+window.scrollX,top:p+window.scrollY},bottom:{left:o+window.scrollX,top:p+F+window.scrollY},left:{left:o+window.scrollX,top:p+(F-$)/2+window.scrollY},right:{left:o+f+window.scrollX,top:p+(F-$)/2+window.scrollY}};g.value.left=`${x[r.position].left}px`,g.value.top=`${x[r.position].top}px`},O=()=>{r.width&&j(),S(()=>{H()})},k=o=>{var F,f;const p=o.target;p!==l.value&&!((F=l.value)!=null&&F.contains(p))&&!((f=B.value)!=null&&f.contains(p))&&d()},b=()=>{a.value=!0,r.trigger==="hover"&&clearTimeout(D.value),S(()=>{r.trigger==="hover"&&(l.value.addEventListener("mouseenter",()=>{clearTimeout(D.value)}),l.value.addEventListener("mouseleave",()=>{d()})),O(),document.addEventListener("click",k)})},y=()=>{a.value=!1,document.removeEventListener("click",k)},d=()=>{r.trigger==="hover"?D.value=window.setTimeout(()=>{y()},200):y()},A={click:[{name:"click",handle:()=>{R.content&&(a.value?d():b())}}],hover:[{name:"mouseenter",handle:b},{name:"mouseleave",handle:d}],focus:[{name:"focusin",handle:b},{name:"focusout",handle:d}]}[r.trigger];return K(()=>{A.forEach(o=>{B.value.addEventListener(o.name,o.handle)})}),Q(()=>{A.forEach(o=>{B.value.removeEventListener(o.name,o.handle)})}),(o,p)=>(_(),m(C,null,[a.value?(_(),w(tu,{key:0,to:"body"},[o.$slots.content?(_(),m("div",{key:0,class:Z(e(W)),style:uu(g.value),ref_key:"popoverElement",ref:l},[P(o.$slots,"content",{close:d})],6)):T("",!0)])):T("",!0),V("span",{ref_key:"popoverTrigger",ref:B,class:"coast-popover-slot"},[P(o.$slots,"default")],512)],64))}});var L=t=>{t.__sourceCode=`<template>
  <co-popover trigger="hover">
    <template #content>
      \u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002
    </template>
    <co-button>hover \u6FC0\u6D3B</co-button>
  </co-popover>
  <co-popover trigger="click">
    <co-button>click \u6FC0\u6D3B</co-button>
    <template #content>
      \u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002
    </template>
  </co-popover>
  <co-popover trigger="focus">
    <co-button>focus \u6FC0\u6D3B</co-button>
    <template #content>
      \u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002
    </template>
  </co-popover>
</template>

<script lang="ts" setup>
import { CoButton, CoPopover } from 'coast-ui-vue3';
<\/script>

<style lang="scss" scoped>
.coast-button {
  margin-right: 20px;
}
</style>`,t.__sourceCodeTitle="\u5E38\u89C4\u7528\u6CD5",t.__sourceDescription="\u652F\u6301\u4E0D\u540C\u7684\u6FC0\u6D3B\u65B9\u5F0F\uFF0C\u5305\u542B hover, click, focus"};const su=s(" \u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002 "),ru=s("hover \u6FC0\u6D3B"),cu=s("click \u6FC0\u6D3B"),iu=s(" \u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002 "),au=s("focus \u6FC0\u6D3B"),lu=s(" \u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002 "),X=v({__name:"Popover.default.demo",setup(t){return(r,a)=>(_(),m(C,null,[n(e(i),{trigger:"hover"},{content:u(()=>[su]),default:u(()=>[n(e(c),null,{default:u(()=>[ru]),_:1})]),_:1}),n(e(i),{trigger:"click"},{content:u(()=>[iu]),default:u(()=>[n(e(c),null,{default:u(()=>[cu]),_:1})]),_:1}),n(e(i),{trigger:"focus"},{content:u(()=>[lu]),default:u(()=>[n(e(c),null,{default:u(()=>[au]),_:1})]),_:1})],64))}});typeof L=="function"&&L(X);var pu=E(X,[["__scopeId","data-v-23ff8eaa"]]);var I=t=>{t.__sourceCode=`<template>
  <co-popover position="top" trigger="hover">
    <template #content>
      \u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002
    </template>
    <co-button>\u4E0A\u65B9\u5F39\u51FA</co-button>
  </co-popover>
  <co-popover position="bottom" trigger="hover">
    <template #content>
      \u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002
    </template>
    <co-button>\u4E0B\u65B9\u5F39\u51FA</co-button>
  </co-popover>
  <co-popover position="left" trigger="hover" :width="150">
    <template #content> \u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002 </template>
    <co-button>\u5DE6\u8FB9\u5F39\u51FA</co-button>
  </co-popover>
  <co-popover position="right" trigger="hover" :width="150">
    <template #content> \u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002 </template>
    <co-button>\u53F3\u8FB9\u5F39\u51FA</co-button>
  </co-popover>
</template>

<script lang="ts" setup>
import { CoButton, CoPopover } from 'coast-ui-vue3';
<\/script>

<style lang="scss" scoped>
.coast-button {
  margin-right: 20px;
}
</style>`,t.__sourceCodeTitle="\u652F\u6301 position",t.__sourceDescription="\u5305\u542B\u56DB\u79CD\u4E0D\u540C\u7684\u51FA\u73B0\u4F4D\u7F6E\uFF1Atop, left, right, bottom"};const _u=s(" \u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002 "),du=s("\u4E0A\u65B9\u5F39\u51FA"),Fu=s(" \u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002 "),vu=s("\u4E0B\u65B9\u5F39\u51FA"),Bu=s(" \u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002 "),hu=s("\u5DE6\u8FB9\u5F39\u51FA"),mu=s(" \u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002 "),gu=s("\u53F3\u8FB9\u5F39\u51FA"),Y=v({__name:"Popover.position.demo",setup(t){return(r,a)=>(_(),m(C,null,[n(e(i),{position:"top",trigger:"hover"},{content:u(()=>[_u]),default:u(()=>[n(e(c),null,{default:u(()=>[du]),_:1})]),_:1}),n(e(i),{position:"bottom",trigger:"hover"},{content:u(()=>[Fu]),default:u(()=>[n(e(c),null,{default:u(()=>[vu]),_:1})]),_:1}),n(e(i),{position:"left",trigger:"hover",width:150},{content:u(()=>[Bu]),default:u(()=>[n(e(c),null,{default:u(()=>[hu]),_:1})]),_:1}),n(e(i),{position:"right",trigger:"hover",width:150},{content:u(()=>[mu]),default:u(()=>[n(e(c),null,{default:u(()=>[gu]),_:1})]),_:1})],64))}});typeof I=="function"&&I(Y);var fu=E(Y,[["__scopeId","data-v-b9458368"]]);var N=t=>{t.__sourceCode=`<template>
  <co-popover position="top" trigger="hover" width="30%">
    <template #content> \u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002 </template>
    <co-button>width: 30%</co-button>
  </co-popover>
  <co-popover position="right" trigger="hover" :width="150">
    <template #content> \u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002 </template>
    <co-button>width: 150px</co-button>
  </co-popover>
</template>

<script lang="ts" setup>
import { CoButton, CoPopover } from 'coast-ui-vue3';
<\/script>

<style lang="scss" scoped>
.coast-button {
  margin-right: 20px;
}
</style>`,t.__sourceCodeTitle="\u652F\u6301 width",t.__sourceDescription="width \u7C7B\u578B\u53EF\u4E3A number \u6216 string\u3002\u4F20\u5165\u6570\u5B57\uFF0C\u5BBD\u5EA6\u5355\u4F4D\u4E3A px"};const Cu=s(" \u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002 "),Eu=s("width: 30%"),Du=s(" \u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002 "),bu=s("width: 150px"),q=v({__name:"Popover.width.demo",setup(t){return(r,a)=>(_(),m(C,null,[n(e(i),{position:"top",trigger:"hover",width:"30%"},{content:u(()=>[Cu]),default:u(()=>[n(e(c),null,{default:u(()=>[Eu]),_:1})]),_:1}),n(e(i),{position:"right",trigger:"hover",width:150},{content:u(()=>[Du]),default:u(()=>[n(e(c),null,{default:u(()=>[bu]),_:1})]),_:1})],64))}});typeof N=="function"&&N(q);var wu=E(q,[["__scopeId","data-v-470647f1"]]);var M=t=>{t.__sourceCode=`<template>
  <co-popover position="top" trigger="click">
    <template #content="{ close }">
      <p>\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002</p>
      <co-button theme="link" @click="close">\u5173\u95ED</co-button>
    </template>
    <co-button>\u6D6E\u5C42\u5185\u5173\u95ED</co-button>
  </co-popover>
</template>

<script lang="ts" setup>
import { CoButton, CoPopover } from 'coast-ui-vue3';
<\/script>

<style lang="scss" scoped>
.coast-button {
  margin-right: 20px;
  &-theme-link {
    float: right;
    margin-right: 0;
  }
}
</style>`,t.__sourceCodeTitle="\u6D6E\u5C42\u5185\u5173\u95ED",t.__sourceDescription="\u901A\u8FC7\u8C03\u7528 content \u63D2\u69FD\u4E2D\u7684 close \u65B9\u6CD5\uFF0C\u5173\u95ED popover"};const ku=t=>(eu("data-v-367d6a27"),t=t(),ou(),t),yu=ku(()=>V("p",null,"\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57\uFF0C\u5F88\u9AD8\u5174\u4F60\u770B\u89C1\u4E86\u5B83\u3002",-1)),Au=s("\u5173\u95ED"),$u=s("\u6D6E\u5C42\u5185\u5173\u95ED"),z=v({__name:"Popover.close.demo",setup(t){return(r,a)=>(_(),w(e(i),{position:"top",trigger:"click"},{content:u(({close:l})=>[yu,n(e(c),{theme:"link",onClick:l},{default:u(()=>[Au]),_:2},1032,["onClick"])]),default:u(()=>[n(e(c),null,{default:u(()=>[$u]),_:1})]),_:1}))}});typeof M=="function"&&M(z);var xu=E(z,[["__scopeId","data-v-367d6a27"]]);const Iu=v({__name:"index",setup(t){const r=[pu,fu,wu,xu];return(a,l)=>(_(),w(U,{components:r,title:"Popover \u6587\u6863"}))}});export{Iu as default};
