import{D as A}from"./DemoList.d4bdeefd.js";import{d as p,r as D,h as q,M as N,l as S,v as I,o as d,c as k,e as M,t as V,g as C,D as z,i as H,n as L,u,B as Q,a as _,q as v,w as a,_ as l,b as i,F as b,f as j}from"./index.9d04985f.js";const G={name:"CoastToast"},J=p({...G,props:{text:{type:String,required:!1,default:""},type:{type:String,required:!1,default:"normal",validator:t=>["normal","secondary","success","warning","error"].includes(t)},delay:{type:Number,required:!1,default:3},center:{type:Boolean,required:!1,default:!1},showClose:{type:Boolean,required:!1,default:!1},id:{type:String,required:!1,default:""},top:{type:Number,default:10,required:!1}},emits:["destroy"],setup(t,{emit:o}){const e=t,s=D(!1),n=D(null),f=q(()=>["coast-toast",{"coast-toast-center":e.center,[`coast-toast-${e.type}`]:e.type}]);N(()=>{s.value=!0,y()});const m=()=>{s.value=!1,o("destroy")},y=()=>{e.delay>0&&(n.value=setTimeout(()=>{m()},e.delay*1e3))},w=()=>{clearTimeout(n.value),n.value=null};return(st,ut)=>S((d(),k("div",{class:L(u(f)),style:Q({top:`${t.top}px`}),onMouseenter:w,onMouseleave:y},[M("span",null,V(t.text),1),t.showClose?(d(),C(z,{key:0,class:"coast-toast-close",name:"clear",onClick:m})):H("",!0)],38)),[[I,s.value]])}}),c=[];let K=1;const r=t=>{const o={...t,id:`coast-toast-${K++}`};O(o)},O=t=>{const o=document.createElement("div");document.body.appendChild(o);const e=_(J,{...t,top:10+c.length*60,onDestroy:()=>{P(t.id,o)}});c.push(e),v(e,o)},P=(t,o)=>{v(null,o),o.remove();const e=c.findIndex(n=>n.component.props.id===t);if(e===-1)return;const s=c[e].el.offsetHeight;if(c.splice(e,1),!(c.length<1))for(let n=e;n<c.length;n++)c[n].component.props.top=parseInt(c[n].el.style.top)-s-60};var F=t=>{t.__sourceCode=`<template>
  <co-button @click="onClick">\u6253\u5F00 toast</co-button>
</template>

<script lang="ts" setup>
import { CoToast, CoButton } from 'coast-ui-vue3';
let index = 1;
const onClick = () => {
  CoToast({ text: \`\u8FD9\u662F\u7B2C \${index++} \u6761\u6D88\u606F\u63D0\u793A~\` });
};
<\/script>

<style lang="scss" scoped></style>`,t.__sourceCodeTitle="\u5E38\u89C4\u4F7F\u7528",t.__sourceDescription="\u4ECE\u9876\u90E8\u51FA\u73B0\uFF0C3\u79D2\u540E\u6D88\u5931"};const R=i("\u6253\u5F00 toast"),E=p({__name:"Toast.default.demo",setup(t){let o=1;const e=()=>{r({text:`\u8FD9\u662F\u7B2C ${o++} \u6761\u6D88\u606F\u63D0\u793A~`})};return(s,n)=>(d(),C(u(l),{onClick:e},{default:a(()=>[R]),_:1}))}});typeof F=="function"&&F(E);var x=t=>{t.__sourceCode=`<template>
  <co-button @click="onClick1">\u666E\u901A normal</co-button>
  <co-button @click="onClick2">\u6B21\u7EA7 secondary</co-button>
  <co-button @click="onClick3">\u6210\u529F success</co-button>
  <co-button @click="onClick4">\u8B66\u544A warning</co-button>
  <co-button @click="onClick5">\u9519\u8BEF error</co-button>
</template>

<script lang="ts" setup>
import { CoToast, CoButton } from 'coast-ui-vue3';
const onClick1 = () => {
  CoToast({ text: '\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A~', type: 'normal' });
};
const onClick2 = () => {
  CoToast({ text: '\u8FD9\u662F\u4E00\u6761\u6B21\u8981\u7684\u6D88\u606F\u63D0\u793A~', type: 'secondary' });
};
const onClick3 = () => {
  CoToast({ text: '\u8FD9\u662F\u4E00\u6761\u6210\u529F\u7684\u6D88\u606F\u63D0\u793A~', type: 'success' });
};
const onClick4 = () => {
  CoToast({ text: '\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u63D0\u793A~', type: 'warning' });
};
const onClick5 = () => {
  CoToast({ text: '\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u63D0\u793A~', type: 'error' });
};
<\/script>

<style lang="scss" scoped>
.coast-button {
  margin-top: 14px;
}
</style>`,t.__sourceCodeTitle="\u4E0D\u540C\u72B6\u6001",t.__sourceDescription="\u5305\u542B\u7684\u72B6\u6001\u6709 [ normal, secondary, success, warning, error ]"};const U=i("\u666E\u901A normal"),W=i("\u6B21\u7EA7 secondary"),X=i("\u6210\u529F success"),Y=i("\u8B66\u544A warning"),Z=i("\u9519\u8BEF error"),g=p({__name:"Toast.type.demo",setup(t){const o=()=>{r({text:"\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A~",type:"normal"})},e=()=>{r({text:"\u8FD9\u662F\u4E00\u6761\u6B21\u8981\u7684\u6D88\u606F\u63D0\u793A~",type:"secondary"})},s=()=>{r({text:"\u8FD9\u662F\u4E00\u6761\u6210\u529F\u7684\u6D88\u606F\u63D0\u793A~",type:"success"})},n=()=>{r({text:"\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u63D0\u793A~",type:"warning"})},f=()=>{r({text:"\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u63D0\u793A~",type:"error"})};return(m,y)=>(d(),k(b,null,[_(u(l),{onClick:o},{default:a(()=>[U]),_:1}),_(u(l),{onClick:e},{default:a(()=>[W]),_:1}),_(u(l),{onClick:s},{default:a(()=>[X]),_:1}),_(u(l),{onClick:n},{default:a(()=>[Y]),_:1}),_(u(l),{onClick:f},{default:a(()=>[Z]),_:1})],64))}});typeof x=="function"&&x(g);var tt=j(g,[["__scopeId","data-v-1c6f7edd"]]),h=t=>{t.__sourceCode=`<template>
  <co-button @click="onClick">\u6253\u5F00 toast</co-button>
</template>

<script lang="ts" setup>
import { CoToast, CoButton } from 'coast-ui-vue3';
const onClick = () => {
  CoToast({
    text: '\u8FD9\u662F\u4E00\u6761\u5C45\u4E2D\u7684\u6D88\u606F\u63D0\u793A~',
    center: true,
  });
};
<\/script>

<style lang="scss" scoped></style>`,t.__sourceCodeTitle="\u6587\u5B57\u5C45\u4E2D",t.__sourceDescription="\u4F7F\u7528 center \u5C5E\u6027\u8BA9\u6587\u5B57\u6C34\u5E73\u5C45\u4E2D"};const et=i("\u6253\u5F00 toast"),$=p({__name:"Toast.center.demo",setup(t){const o=()=>{r({text:"\u8FD9\u662F\u4E00\u6761\u5C45\u4E2D\u7684\u6D88\u606F\u63D0\u793A~",center:!0})};return(e,s)=>(d(),C(u(l),{onClick:o},{default:a(()=>[et]),_:1}))}});typeof h=="function"&&h($);var T=t=>{t.__sourceCode=`<template>
  <co-button @click="onClick1">\u53EF\u5173\u95ED\uFF0Cdelay: 5</co-button>
  <co-button @click="onClick2">\u53EF\u5173\u95ED\uFF0Cdelay: 0</co-button>
</template>

<script lang="ts" setup>
import { CoToast, CoButton } from 'coast-ui-vue3';
const onClick1 = () => {
  CoToast({
    text: '\u8FD9\u662F\u4E00\u6761\u53EF\u4EE5\u5173\u95ED\u7684\u6D88\u606F\u63D0\u793A~',
    showClose: true,
    delay: 5,
  });
};
const onClick2 = () => {
  CoToast({
    text: '\u8FD9\u662F\u4E00\u6761\u53EF\u4EE5\u5173\u95ED\u7684\u6D88\u606F\u63D0\u793A~',
    showClose: true,
    delay: 0,
  });
};
<\/script>

<style lang="scss" scoped></style>`,t.__sourceCodeTitle="\u53EF\u5173\u95ED",t.__sourceDescription="\u53EF\u4EE5\u4F7F\u7528 showClose \u5C5E\u6027\u6DFB\u52A0\u5173\u95ED\u6309\u94AE\uFF0C\u9ED8\u8BA43\u79D2\u540E\u6D88\u5931\u3002\u624B\u52A8\u4F20\u5165 delay \u5C5E\u6027\u63A7\u5236\u5EF6\u65F6\u5173\u95ED\u7684\u65F6\u95F4\uFF0C\u5355\u4F4D\uFF1A\u79D2\u3002delay \u8BBE\u7F6E 0 \u4E0D\u4F1A\u88AB\u81EA\u52A8\u5173\u95ED\u3002"};const ot=i("\u53EF\u5173\u95ED\uFF0Cdelay: 5"),nt=i("\u53EF\u5173\u95ED\uFF0Cdelay: 0"),B=p({__name:"Toast.close.demo",setup(t){const o=()=>{r({text:"\u8FD9\u662F\u4E00\u6761\u53EF\u4EE5\u5173\u95ED\u7684\u6D88\u606F\u63D0\u793A~",showClose:!0,delay:5})},e=()=>{r({text:"\u8FD9\u662F\u4E00\u6761\u53EF\u4EE5\u5173\u95ED\u7684\u6D88\u606F\u63D0\u793A~",showClose:!0,delay:0})};return(s,n)=>(d(),k(b,null,[_(u(l),{onClick:o},{default:a(()=>[ot]),_:1}),_(u(l),{onClick:e},{default:a(()=>[nt]),_:1})],64))}});typeof T=="function"&&T(B);const lt=p({__name:"index",setup(t){const o=[E,tt,$,B];return(e,s)=>(d(),C(A,{components:o,title:"Toast \u6587\u6863"}))}});export{lt as default};
