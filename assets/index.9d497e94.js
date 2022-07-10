import{_ as n,D as k}from"./DemoList.d4bdeefd.js";import{d as _,o,c,a as s,w as t,u as d,b as a,F as $,p as D,t as T,f as h,g as F}from"./index.9d04985f.js";var p=e=>{e.__sourceCode=`<template>
  <div>
    <co-card title="\u57FA\u672C\u7528\u6CD5">co-card \u5185\u5BB9</co-card>
  </div>
</template>

<script lang="ts" setup>
import { CoCard } from 'coast-ui-vue3';
<\/script>`,e.__sourceCodeTitle="\u5E38\u89C4\u4F7F\u7528",e.__sourceDescription=""};const B=a("co-card \u5185\u5BB9"),y=_({__name:"Card.default.demo",setup(e){return(r,i)=>(o(),c("div",null,[s(d(n),{title:"\u57FA\u672C\u7528\u6CD5"},{default:t(()=>[B]),_:1})]))}});typeof p=="function"&&p(y);var u=e=>{e.__sourceCode=`<template>
  <div>
    <co-card title="\u652F\u6301 hover \u6548\u679C" hoverable>hoverable card</co-card>
  </div>
</template>

<script lang="ts" setup>
import { CoCard } from 'coast-ui-vue3';
<\/script>`,e.__sourceCodeTitle="Hover \u6548\u679C",e.__sourceDescription=""};const S=a("hoverable card"),w=_({__name:"Card.hoverable.demo",setup(e){return(r,i)=>(o(),c("div",null,[s(d(n),{title:"\u652F\u6301 hover \u6548\u679C",hoverable:""},{default:t(()=>[S]),_:1})]))}});typeof u=="function"&&u(w);var f=e=>{e.__sourceCode=`<template>
  <div>
    <co-card title="\u652F\u6301 shadow \u6548\u679C" hoverable shadow>shadow card</co-card>
  </div>
</template>

<script lang="ts" setup>
import { CoCard } from 'coast-ui-vue3';
<\/script>`,e.__sourceCodeTitle="Shadow \u6548\u679C",e.__sourceDescription=""};const I=a("shadow card"),C=_({__name:"Card.shadow.demo",setup(e){return(r,i)=>(o(),c("div",null,[s(d(n),{title:"\u652F\u6301 shadow \u6548\u679C",hoverable:"",shadow:""},{default:t(()=>[I]),_:1})]))}});typeof f=="function"&&f(C);var v=e=>{e.__sourceCode=`<template>
  <div class="wrap">
    <template v-for="cardType in types" :key="cardType">
      <co-card :title="cardType" :type="cardType">{{ cardType }} card</co-card>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { CoCard } from 'coast-ui-vue3';
const types = [
  'secondary',
  'alert',
  'success',
  'purple',
  'warning',
  'violet',
  'error',
  'cyan',
  'dark',
  'lite',
];
<\/script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-wrap: wrap;
  .coast-card {
    width: 40%;
    margin-left: 5%;
    margin-top: 16px;
  }
}
</style>`,e.__sourceCodeTitle="\u652F\u6301\u4E0D\u540C\u7684 Type",e.__sourceDescription=""};const L={class:"wrap"},b=_({__name:"Card.type.demo",setup(e){const r=["secondary","alert","success","purple","warning","violet","error","cyan","dark","lite"];return(i,g)=>(o(),c("div",L,[(o(),c($,null,D(r,l=>s(d(n),{key:l,title:l,type:l},{default:t(()=>[a(T(l)+" card",1)]),_:2},1032,["title","type"])),64))]))}});typeof v=="function"&&v(b);var N=h(b,[["__scopeId","data-v-ba0fb204"]]);var m=e=>{e.__sourceCode=`<template>
  <div class="wrap">
    <co-card title="\u652F\u6301 footer" hoverable shadow>
      card content
      <template #footer>card footer</template>
    </co-card>
    <co-card title="\u652F\u6301 footer" type="dark">
      card content
      <template #footer>card footer</template>
    </co-card>
  </div>
</template>

<script lang="ts" setup>
import { CoCard } from 'coast-ui-vue3';
<\/script>

<style lang="scss" scoped>
.wrap {
  display: flex;

  .coast-card {
    width: 40%;
    margin-left: 5%;
  }
}
</style>`,e.__sourceCodeTitle="Footer slot",e.__sourceDescription=""};const V={class:"wrap"},A=a(" card content "),E=a("card footer"),H=a(" card content "),j=a("card footer"),x=_({__name:"Card.slot.demo",setup(e){return(r,i)=>(o(),c("div",V,[s(d(n),{title:"\u652F\u6301 footer",hoverable:"",shadow:""},{footer:t(()=>[E]),default:t(()=>[A]),_:1}),s(d(n),{title:"\u652F\u6301 footer",type:"dark"},{footer:t(()=>[j]),default:t(()=>[H]),_:1})]))}});typeof m=="function"&&m(x);var q=h(x,[["__scopeId","data-v-67915bf0"]]);const J=_({__name:"index",setup(e){const r=[y,w,C,N,q];return(i,g)=>(o(),F(k,{components:r,title:"Card \u6587\u6863"}))}});export{J as default};
