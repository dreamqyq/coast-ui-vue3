import{D as w}from"./DemoList.d4bdeefd.js";import{d as _,o as g,g as E,e as u,b as v,t as q,j as N,a,w as r,_ as f,T as U,i as V,q as D,r as p,c as m,u as d}from"./index.9d04985f.js";const S={class:"coast-dialog-wrapper"},j={class:"coast-dialog"},L=v("\u786E\u5B9A"),z=v("\u53D6\u6D88"),G={name:"CoastDialog"},b=_({...G,props:{title:{type:String,default:"\u63D0\u793A"},visible:{required:!0,type:Boolean},overlayClosable:{type:Boolean,default:!0,required:!1},confirm:{type:Function,required:!1},cancel:{type:Function,required:!1}},emits:["update:visible"],setup(e,{emit:o}){const n=e,l=()=>{o("update:visible",!1)},i=()=>{n.overlayClosable&&l()},c=()=>{var t;((t=n.confirm)==null?void 0:t.call(n))!==!1&&l()},s=()=>{var t;((t=n.cancel)==null?void 0:t.call(n))!==!1&&l()};return(t,C)=>e.visible?(g(),E(U,{key:0,to:"body"},[u("div",{class:"coast-dialog-overlay",onClick:i}),u("div",S,[u("div",j,[u("header",null,[v(q(e.title)+" ",1),u("span",{class:"coast-dialog-close",onClick:l})]),u("main",null,[N(t.$slots,"default")]),u("footer",null,[a(f,{level:"main",onClick:c},{default:r(()=>[L]),_:1}),a(f,{onClick:s},{default:r(()=>[z]),_:1})])])])])):V("",!0)}}),H=e=>{const{title:o,content:n,overlayClosable:l,confirm:i,cancel:c}=e,s=document.createElement("div");document.body.appendChild(s);const t=()=>{D(null,s),s.remove()},C=a(b,{visible:!0,title:o,overlayClosable:l,confirm:i,cancel:c,"onUpdate:visible":T=>{T===!1&&t()}},{default:()=>n});return D(C,s),{close:t}};var B=e=>{e.__sourceCode=`<template>
  <div>
    <co-button @click="toggle">\u6253\u5F00\u5BF9\u8BDD\u6846</co-button>
    <co-dialog v-model:visible="visible" @update:visible="handleChange">
      <strong>\u6587\u672C\u6846\u7B2C\u4E00\u884C</strong>
      <div>\u6587\u672C\u6846\u7B2C\u4E8C\u884C</div>
    </co-dialog>
  </div>
</template>

<script lang="ts" setup>
import { CoButton, CoDialog } from 'coast-ui-vue3';
import { ref } from 'vue';
const visible = ref(false);
const toggle = () => {
  visible.value = !visible.value;
};
const handleChange = (visible: boolean) => {
  console.log('dialog visible change', visible);
};
<\/script>`,e.__sourceCodeTitle="\u5E38\u89C4\u4F7F\u7528",e.__sourceDescription=""};const I=v("\u6253\u5F00\u5BF9\u8BDD\u6846"),J=u("strong",null,"\u6587\u672C\u6846\u7B2C\u4E00\u884C",-1),K=u("div",null,"\u6587\u672C\u6846\u7B2C\u4E8C\u884C",-1),k=_({__name:"Dialog.default.demo",setup(e){const o=p(!1),n=()=>{o.value=!o.value},l=i=>{console.log("dialog visible change",i)};return(i,c)=>(g(),m("div",null,[a(d(f),{onClick:n},{default:r(()=>[I]),_:1}),a(d(b),{visible:o.value,"onUpdate:visible":[c[0]||(c[0]=s=>o.value=s),l]},{default:r(()=>[J,K]),_:1},8,["visible"])]))}});typeof B=="function"&&B(k);var F=e=>{e.__sourceCode=`<template>
  <div>
    <co-button @click="toggle">\u6253\u5F00\u5BF9\u8BDD\u6846</co-button>
    <co-dialog v-model:visible="visible" :overlayClosable="false">
      <div>\u9ED8\u8BA4 overlayClosable \u662F\u5F00\u542F\u7684\uFF0C\u53EF\u4EE5\u624B\u52A8\u5173\u95ED\uFF0C\u70B9\u51FB\u906E\u7F69\u5C42\u4E0D\u4F1A\u5173\u95ED\u5BF9\u8BDD\u6846\u3002</div>
    </co-dialog>
  </div>
</template>

<script lang="ts" setup>
import { CoButton, CoDialog } from 'coast-ui-vue3';
import { ref } from 'vue';
const visible = ref(false);
const toggle = () => {
  visible.value = !visible.value;
};
<\/script>`,e.__sourceCodeTitle="\u652F\u6301 overlayClosable",e.__sourceDescription=""};const M=v("\u6253\u5F00\u5BF9\u8BDD\u6846"),O=u("div",null,"\u9ED8\u8BA4 overlayClosable \u662F\u5F00\u542F\u7684\uFF0C\u53EF\u4EE5\u624B\u52A8\u5173\u95ED\uFF0C\u70B9\u51FB\u906E\u7F69\u5C42\u4E0D\u4F1A\u5173\u95ED\u5BF9\u8BDD\u6846\u3002",-1),$=_({__name:"Dialog.overlayClosable.demo",setup(e){const o=p(!1),n=()=>{o.value=!o.value};return(l,i)=>(g(),m("div",null,[a(d(f),{onClick:n},{default:r(()=>[M]),_:1}),a(d(b),{visible:o.value,"onUpdate:visible":i[0]||(i[0]=c=>o.value=c),overlayClosable:!1},{default:r(()=>[O]),_:1},8,["visible"])]))}});typeof F=="function"&&F($);var h=e=>{e.__sourceCode=`<template>
  <div>
    <co-button @click="toggle">\u6253\u5F00\u5BF9\u8BDD\u6846</co-button>
    <co-dialog v-model:visible="visible" :confirm="onConfirm" :cancel="onCancel">
      confirm, cancel \u4E8B\u4EF6\u5982\u679C return false, \u70B9\u51FB\u6309\u94AE\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED\u5BF9\u8BDD\u6846\u3002\u70B9\u51FB\u786E\u8BA4\uFF0C\u4E0D\u4F1A\u5173\u95ED
    </co-dialog>
  </div>
</template>

<script lang="ts" setup>
import { CoButton, CoDialog } from 'coast-ui-vue3';
import { ref } from 'vue';
const visible = ref(false);
const toggle = () => {
  visible.value = !visible.value;
};
const onConfirm = () => {
  console.log('confirm event');
  return false;
};
const onCancel = () => {
  console.log('cancel event');
};
<\/script>`,e.__sourceCodeTitle="confirm\uFF0Ccancel \u4E8B\u4EF6",e.__sourceDescription=""};const P=v("\u6253\u5F00\u5BF9\u8BDD\u6846"),Q=v(" confirm, cancel \u4E8B\u4EF6\u5982\u679C return false, \u70B9\u51FB\u6309\u94AE\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED\u5BF9\u8BDD\u6846\u3002\u70B9\u51FB\u786E\u8BA4\uFF0C\u4E0D\u4F1A\u5173\u95ED "),A=_({__name:"Dialog.confirm-cancel.demo",setup(e){const o=p(!1),n=()=>{o.value=!o.value},l=()=>(console.log("confirm event"),!1),i=()=>{console.log("cancel event")};return(c,s)=>(g(),m("div",null,[a(d(f),{onClick:n},{default:r(()=>[P]),_:1}),a(d(b),{visible:o.value,"onUpdate:visible":s[0]||(s[0]=t=>o.value=t),confirm:l,cancel:i},{default:r(()=>[Q]),_:1},8,["visible"])]))}});typeof h=="function"&&h(A);var y=e=>{e.__sourceCode=`<template>
  <div>
    <co-button @click="showDialog">\u6253\u5F00\u5BF9\u8BDD\u6846</co-button>
  </div>
</template>

<script lang="ts" setup>
import { CoButton, openDialog } from 'coast-ui-vue3';

const showDialog = () => {
  openDialog({
    content: '\u6587\u6863\u5185\u5BB9',
    title: '\u6807\u9898',
    overlayClosable: false,
    confirm() {
      console.log('confirm');
      return false;
    },
    cancel() {
      console.log('cancel');
    },
  });
};
<\/script>`,e.__sourceCodeTitle="\u4E00\u952E\u6253\u5F00 Dialog",e.__sourceDescription=""};const R=v("\u6253\u5F00\u5BF9\u8BDD\u6846"),x=_({__name:"Dialog.openDialog.demo",setup(e){const o=()=>{H({content:"\u6587\u6863\u5185\u5BB9",title:"\u6807\u9898",overlayClosable:!1,confirm(){return console.log("confirm"),!1},cancel(){console.log("cancel")}})};return(n,l)=>(g(),m("div",null,[a(d(f),{onClick:o},{default:r(()=>[R]),_:1})]))}});typeof y=="function"&&y(x);const Y=_({__name:"index",setup(e){const o=[k,$,A,x];return(n,l)=>(g(),E(w,{components:o,title:"Dialog \u6587\u6863"}))}});export{Y as default};
