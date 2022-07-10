import{D as E}from"./DemoList.d4bdeefd.js";import{d as f,P as h,r as d,M as D,Q as L,E as I,o as u,c as C,B as V,R as A,F as q,p as N,n as R,u as l,t as M,a as p,L as U,S,h as j,e as z,g as B,m as H,j as Q,w as i,b as v}from"./index.9d04985f.js";const X={name:"CoastTabIndicator"},G=f({...X,setup(e){const s=h("currentSelected"),o=A(),t=d(null),n=d(0),r=d({}),_=()=>{const c=Array.from(t.value.children).filter(a=>Array.from(a.classList).find(g=>g==="selected"))[0],m=c.getBoundingClientRect().left,T=c.getBoundingClientRect().width;r.value.width=T+"px",r.value.transform=`translateX(${m-n.value}px)`};return D(()=>{t.value=o.parent.refs.container,n.value=t.value.getBoundingClientRect().left,_()}),L(s,()=>{I(_)}),(c,m)=>(u(),C("div",{class:"coast-tabs-nav-indicator",style:V(r.value)},null,4))}}),J=["onClick"],K={name:"CoastTabNav"},O=f({...K,props:{subElements:{type:Array,required:!0}},setup(e){const s=h("currentSelected"),o=h("updateCurrentSelected"),t=d(null),n=r=>{const{disabled:_,title:c}=r;_||c===s.value||o(r.title)};return(r,_)=>(u(),C("div",{ref_key:"container",ref:t,class:"coast-tabs-nav"},[(u(!0),C(q,null,N(e.subElements,c=>(u(),C("div",{class:R(["coast-tabs-nav-item",{selected:c.title===l(s),disabled:c.disabled}]),key:c.title,onClick:m=>n(c)},M(c.title),11,J))),128)),p(G)],512))}}),W={class:"coast-tabs"},Y={class:"coast-tabs-content"},Z={name:"CoastTabs"},$=f({...Z,props:{selected:{type:String,required:!0}},emits:["update:selected"],setup(e,{emit:s}){const o=e,t=U(),n=d(o.selected),r=d({});S("currentSelected",n),S("updateTabPanelState",a=>{r.value[a.uid]=a}),S("updateCurrentSelected",a=>{T(a)});const _=t.default(),c=_.map(a=>({title:a.props.title,disabled:a.props.disabled===!0||a.props.disabled===""})),m=j(()=>_.filter(a=>a.props.title===o.selected)[0]),T=a=>{n.value=a,s("update:selected",a)};return(a,g)=>(u(),C("div",W,[p(O,{subElements:l(c)},null,8,["subElements"]),z("div",Y,[(u(),B(H(l(m)),{key:l(m).props.title}))])]))}}),ee={name:"CoastTabPanel"},b=f({...ee,props:{title:{type:String,required:!0},disabled:{type:Boolean,required:!1}},setup(e){const s=e,o=A(),t=h("updateTabPanelState");if(!t)throw new Error("CoTabPanel must use width CoTabs");return t({...s,uid:o.uid}),(n,r)=>Q(n.$slots,"default")}});var y=e=>{e.__sourceCode=`<template>
  <co-tabs v-model:selected="selected">
    <co-tab-panel title="\u5BFC\u822A1">\u5185\u5BB91</co-tab-panel>
    <co-tab-panel title="\u5BFC\u822A2">\u5185\u5BB92</co-tab-panel>
  </co-tabs>
</template>

<script lang="ts" setup>
import { CoTabPanel, CoTabs } from 'coast-ui-vue3';
import { ref } from 'vue';
const selected = ref('\u5BFC\u822A2');
<\/script>`,e.__sourceCodeTitle="\u5E38\u89C4\u4F7F\u7528",e.__sourceDescription=""};const te=v("\u5185\u5BB91"),se=v("\u5185\u5BB92"),F=f({__name:"Tabs.default.demo",setup(e){const s=d("\u5BFC\u822A2");return(o,t)=>(u(),B(l($),{selected:s.value,"onUpdate:selected":t[0]||(t[0]=n=>s.value=n)},{default:i(()=>[p(l(b),{title:"\u5BFC\u822A1"},{default:i(()=>[te]),_:1}),p(l(b),{title:"\u5BFC\u822A2"},{default:i(()=>[se]),_:1})]),_:1},8,["selected"]))}});typeof y=="function"&&y(F);var x=e=>{e.__sourceCode=`<template>
  <co-tabs v-model:selected="selected">
    <co-tab-panel title="\u5BFC\u822A1">\u5185\u5BB91</co-tab-panel>
    <co-tab-panel title="\u5BFC\u822A2 disabled" disabled>\u5185\u5BB92</co-tab-panel>
  </co-tabs>
</template>

<script lang="ts" setup>
import { CoTabPanel, CoTabs } from 'coast-ui-vue3';
import { ref } from 'vue';
const selected = ref('\u5BFC\u822A1');
<\/script>`,e.__sourceCodeTitle="TabPanel \u652F\u6301 disabled",e.__sourceDescription=""};const ne=v("\u5185\u5BB91"),ae=v("\u5185\u5BB92"),P=f({__name:"Tabs.disabled.demo",setup(e){const s=d("\u5BFC\u822A1");return(o,t)=>(u(),B(l($),{selected:s.value,"onUpdate:selected":t[0]||(t[0]=n=>s.value=n)},{default:i(()=>[p(l(b),{title:"\u5BFC\u822A1"},{default:i(()=>[ne]),_:1}),p(l(b),{title:"\u5BFC\u822A2 disabled",disabled:""},{default:i(()=>[ae]),_:1})]),_:1},8,["selected"]))}});typeof x=="function"&&x(P);var k=e=>{e.__sourceCode=`<template>
  <co-tabs v-model:selected="selected" @update:selected="handleChange">
    <co-tab-panel title="\u5BFC\u822A1">\u5185\u5BB91</co-tab-panel>
    <co-tab-panel title="\u5BFC\u822A2">\u5185\u5BB92</co-tab-panel>
  </co-tabs>
</template>

<script lang="ts" setup>
import { CoTabPanel, CoTabs } from 'coast-ui-vue3';
import { ref } from 'vue';
const selected = ref('\u5BFC\u822A2');
const handleChange = (currentValue: string) => {
  console.log('tabs value change', currentValue);
};
<\/script>`,e.__sourceCodeTitle="\u4E8B\u4EF6\u76D1\u542C",e.__sourceDescription=""};const oe=v("\u5185\u5BB91"),ce=v("\u5185\u5BB92"),w=f({__name:"Tabs.event.demo",setup(e){const s=d("\u5BFC\u822A2"),o=t=>{console.log("tabs value change",t)};return(t,n)=>(u(),B(l($),{selected:s.value,"onUpdate:selected":[n[0]||(n[0]=r=>s.value=r),o]},{default:i(()=>[p(l(b),{title:"\u5BFC\u822A1"},{default:i(()=>[oe]),_:1}),p(l(b),{title:"\u5BFC\u822A2"},{default:i(()=>[ce]),_:1})]),_:1},8,["selected"]))}});typeof k=="function"&&k(w);const ue=f({__name:"index",setup(e){const s=[F,P,w];return(o,t)=>(u(),B(E,{components:s,title:"Tabs \u6587\u6863"}))}});export{ue as default};
