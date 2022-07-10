import{D as le}from"./DemoList.d4bdeefd.js";import{d as f,r as c,h as k,o as i,c as g,t as $,i as y,e as m,A as ne,u as o,g as h,B as I,D as C,n as te,E as ae,a as v,F as b,b as ue}from"./index.9d04985f.js";const oe={key:0,class:"coast-label left"},se=["disabled","maxlength","placeholder","readonly","type","value"],re={name:"CoastInput"},s=f({...re,props:{value:{type:[String,Number],required:!0},type:{type:String,default:"text"},clearable:{type:Boolean,required:!1,default:!1},maxlength:{type:Number,required:!1},placeholder:{type:String,required:!1},disabled:{type:Boolean,required:!1},readonly:{type:Boolean,required:!1},width:{type:String,required:!1},label:{type:String,required:!1},labelRight:{type:String,required:!1},status:{type:String,required:!1,default:"normal",validator:e=>["normal","secondary","success","warning","error"].includes(e)},size:{type:String,required:!1,default:"medium",validator:e=>["mini","small","medium","large"].includes(e)}},emits:["update:value","input","change","blur","focus","keydown","clear"],setup(e,{emit:l}){const a=e,n=c(null),t=c(null),r=c(!1),_=k(()=>({"coast-input-label-left":a.label,"coast-input-label-right":a.labelRight,"coast-input-suffix-clear":a.clearable,"coast-input-suffix-password":a.type==="password",[`coast-input-status-${a.status}`]:a.status})),u=k(()=>{const d=n.value?n.value.offsetWidth:0,x=a.type==="password"?24:0;return-d-x}),p=()=>{ae(()=>{t.value.focus()})},w=()=>{l("update:value",""),l("change",""),l("clear"),p()},j=()=>{r.value=!r.value,p()},G=d=>{l("update:value",d.target.value),l("input",d.target.value)},J=d=>{l("change",d.target.value)},Y=d=>{l("blur",d)},Z=d=>{l("focus",d)},ee=d=>{l("keydown",d)};return(d,x)=>(i(),g("div",{class:te([{[`coast-input-wrapper-size-${e.size}`]:e.size},"coast-input-wrapper"]),style:I(`width:${e.width}`)},[e.label?(i(),g("span",oe,$(e.label),1)):y("",!0),m("input",ne({ref_key:"inputRef",ref:t},d.$attrs,{class:[o(_),"coast-input"],disabled:e.disabled,maxlength:e.maxlength,placeholder:e.placeholder,readonly:e.readonly,type:e.type==="password"?r.value?"text":"password":e.type,value:e.value,onBlur:Y,onChange:J,onFocus:Z,onInput:G,onKeydown:ee}),null,16,se),e.clearable?(i(),h(C,{key:1,style:I(`transform: translateX(${o(u)}px)`),class:"coast-input-action",name:"clear",onClick:w},null,8,["style"])):y("",!0),e.type==="password"?(i(),h(C,{key:2,name:r.value?"hide":"show",style:I(`transform: translateX(${o(u)+24}px)`),class:"coast-input-action",onClick:j},null,8,["name","style"])):y("",!0),e.labelRight?(i(),g("span",{key:3,ref_key:"labelRightRef",ref:n,class:"coast-label right"},$(e.labelRight),513)):y("",!0)],6))}});var U=e=>{e.__sourceCode=`<template>
  <co-input v-model:value="value" placeholder="clearable" clearable @clear="handleClear" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CoInput } from 'coast-ui-vue3';
const value = ref('');
const handleClear = () => {
  console.log('clear input value');
};
<\/script>`,e.__sourceCodeTitle="\u652F\u6301 clearable",e.__sourceDescription=""};const F=f({__name:"Input.clearable.demo",setup(e){const l=c(""),a=()=>{console.log("clear input value")};return(n,t)=>(i(),h(o(s),{value:l.value,"onUpdate:value":t[0]||(t[0]=r=>l.value=r),placeholder:"clearable",clearable:"",onClear:a},null,8,["value"]))}});typeof U=="function"&&U(F);var z=e=>{e.__sourceCode=`<template>
  <co-input v-model:value="value" placeholder="please input username" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CoInput } from 'coast-ui-vue3';
const value = ref('');
<\/script>`,e.__sourceCodeTitle="\u5E38\u89C4\u7528\u6CD5",e.__sourceDescription=""};const K=f({__name:"Input.default.demo",setup(e){const l=c("");return(a,n)=>(i(),h(o(s),{value:l.value,"onUpdate:value":n[0]||(n[0]=t=>l.value=t),placeholder:"please input username"},null,8,["value"]))}});typeof z=="function"&&z(K);var T=e=>{e.__sourceCode=`<template>
  <co-input
    v-model:value="value"
    placeholder="please input content"
    @input="handleInput"
    @change="handleChange"
    @focus="handleFocus"
    @blur="handleBlur"
    @keydown="handleKeydown"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CoInput } from 'coast-ui-vue3';
type InputElementEvent = Event & { target: HTMLInputElement };
const value = ref('');
const handleInput = (value: string) => {
  console.log('input event', value);
};
const handleChange = (value: string) => {
  console.log('change event', value);
};
const handleBlur = (event: InputElementEvent) => {
  console.log('blur event', event);
};
const handleFocus = (event: InputElementEvent) => {
  console.log('focus event', event);
};
const handleKeydown = (event: KeyboardEvent) => {
  console.log('keydown event', event);
};
<\/script>`,e.__sourceCodeTitle="Input events",e.__sourceDescription="\u4E8B\u4EF6\u5305\u542B: input, change, focus, blur, keydown"};const W=f({__name:"Input.events.demo",setup(e){const l=c(""),a=u=>{console.log("input event",u)},n=u=>{console.log("change event",u)},t=u=>{console.log("blur event",u)},r=u=>{console.log("focus event",u)},_=u=>{console.log("keydown event",u)};return(u,p)=>(i(),h(o(s),{value:l.value,"onUpdate:value":p[0]||(p[0]=w=>l.value=w),placeholder:"please input content",onInput:a,onChange:n,onFocus:r,onBlur:t,onKeydown:_},null,8,["value"]))}});typeof T=="function"&&T(W);var D=e=>{e.__sourceCode=`<template>
  <co-input v-model:value="userName" placeholder="EnochQin" label="userName" />
  <br />
  <co-input v-model:value="url1" placeholder="https://github" labelRight=".com" />
  <br />
  <co-input v-model:value="url2" placeholder="github" label="https://" labelRight=".com" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CoInput } from 'coast-ui-vue3';
const userName = ref('');
const url1 = ref('');
const url2 = ref('');
<\/script>`,e.__sourceCodeTitle="\u652F\u6301 label",e.__sourceDescription=""};const ce=m("br",null,null,-1),ie=m("br",null,null,-1),L=f({__name:"Input.label.demo",setup(e){const l=c(""),a=c(""),n=c("");return(t,r)=>(i(),g(b,null,[v(o(s),{value:l.value,"onUpdate:value":r[0]||(r[0]=_=>l.value=_),placeholder:"EnochQin",label:"userName"},null,8,["value"]),ce,v(o(s),{value:a.value,"onUpdate:value":r[1]||(r[1]=_=>a.value=_),placeholder:"https://github",labelRight:".com"},null,8,["value"]),ie,v(o(s),{value:n.value,"onUpdate:value":r[2]||(r[2]=_=>n.value=_),placeholder:"github",label:"https://",labelRight:".com"},null,8,["value"])],64))}});typeof D=="function"&&D(L);var R=e=>{e.__sourceCode=`<template>
  <co-input v-model:value="value" :maxlength="5" placeholder="limit 5 characters" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CoInput } from 'coast-ui-vue3';
const value = ref('');
<\/script>`,e.__sourceCodeTitle="\u652F\u6301 maxlength",e.__sourceDescription=""};const O=f({__name:"Input.maxlength.demo",setup(e){const l=c("");return(a,n)=>(i(),h(o(s),{value:l.value,"onUpdate:value":n[0]||(n[0]=t=>l.value=t),maxlength:5,placeholder:"limit 5 characters"},null,8,["value"]))}});typeof R=="function"&&R(O);var B=e=>{e.__sourceCode=`<template>
  <co-input v-model:value="value" placeholder="please input password" type="password" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CoInput } from 'coast-ui-vue3';
const value = ref('');
<\/script>`,e.__sourceCodeTitle="password \u5BC6\u7801\u6846",e.__sourceDescription=""};const P=f({__name:"Input.password.demo",setup(e){const l=c("");return(a,n)=>(i(),h(o(s),{value:l.value,"onUpdate:value":n[0]||(n[0]=t=>l.value=t),placeholder:"please input password",type:"password"},null,8,["value"]))}});typeof B=="function"&&B(P);var E=e=>{e.__sourceCode=`<template>
  <div><co-input v-model:value="value" placeholder="mini input" size="mini" /></div>
  <div><co-input v-model:value="value" placeholder="small input" size="small" /></div>
  <div><co-input v-model:value="value" placeholder="medium input" size="medium" /></div>
  <div><co-input v-model:value="value" placeholder="large input" size="large" /></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CoInput } from 'coast-ui-vue3';
const value = ref('');
<\/script>`,e.__sourceCodeTitle="\u652F\u6301 size",e.__sourceDescription="\u5171\u652F\u6301 mini\uFF0Csmall\uFF0Cmedium\uFF0Clarge \u56DB\u79CD size\uFF0C\u9ED8\u8BA4\u7684 size \u662F medium"};const Q=f({__name:"Input.size.demo",setup(e){const l=c("");return(a,n)=>(i(),g(b,null,[m("div",null,[v(o(s),{value:l.value,"onUpdate:value":n[0]||(n[0]=t=>l.value=t),placeholder:"mini input",size:"mini"},null,8,["value"])]),m("div",null,[v(o(s),{value:l.value,"onUpdate:value":n[1]||(n[1]=t=>l.value=t),placeholder:"small input",size:"small"},null,8,["value"])]),m("div",null,[v(o(s),{value:l.value,"onUpdate:value":n[2]||(n[2]=t=>l.value=t),placeholder:"medium input",size:"medium"},null,8,["value"])]),m("div",null,[v(o(s),{value:l.value,"onUpdate:value":n[3]||(n[3]=t=>l.value=t),placeholder:"large input",size:"large"},null,8,["value"])])],64))}});typeof E=="function"&&E(Q);var q=e=>{e.__sourceCode=`<template>
  <co-input v-model:value="value1" placeholder="normal" status="normal" />
  <br />
  <co-input v-model:value="value2" placeholder="secondary" status="secondary" />
  <br />
  <co-input v-model:value="value3" placeholder="success" status="success" />
  <br />
  <co-input v-model:value="value4" placeholder="warning" status="warning" />
  <br />
  <co-input v-model:value="value5" placeholder="error" status="error" />
  <br />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CoInput } from 'coast-ui-vue3';
const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
const value4 = ref('');
const value5 = ref('');
<\/script>`,e.__sourceCodeTitle="\u652F\u6301 status",e.__sourceDescription="\u5171\u652F\u6301 normal\uFF0Csecondary\uFF0Csuccess\uFF0Cwarning\uFF0Cerror \u4E94\u79CD status\uFF0C\u9ED8\u8BA4\u7684 status \u662F normal"};const pe=m("br",null,null,-1),ve=m("br",null,null,-1),de=m("br",null,null,-1),me=m("br",null,null,-1),fe=m("br",null,null,-1),X=f({__name:"Input.status.demo",setup(e){const l=c(""),a=c(""),n=c(""),t=c(""),r=c("");return(_,u)=>(i(),g(b,null,[v(o(s),{value:l.value,"onUpdate:value":u[0]||(u[0]=p=>l.value=p),placeholder:"normal",status:"normal"},null,8,["value"]),pe,v(o(s),{value:a.value,"onUpdate:value":u[1]||(u[1]=p=>a.value=p),placeholder:"secondary",status:"secondary"},null,8,["value"]),ve,v(o(s),{value:n.value,"onUpdate:value":u[2]||(u[2]=p=>n.value=p),placeholder:"success",status:"success"},null,8,["value"]),de,v(o(s),{value:t.value,"onUpdate:value":u[3]||(u[3]=p=>t.value=p),placeholder:"warning",status:"warning"},null,8,["value"]),me,v(o(s),{value:r.value,"onUpdate:value":u[4]||(u[4]=p=>r.value=p),placeholder:"error",status:"error"},null,8,["value"]),fe],64))}});typeof q=="function"&&q(X);var N=e=>{e.__sourceCode=`<template>
  <div><co-input value="disabled" disabled /></div>
  <div><co-input value="readonly" readonly /></div>
</template>

<script lang="ts" setup>
import { CoInput } from 'coast-ui-vue3';
<\/script>`,e.__sourceCodeTitle="\u7981\u6B62\u8F93\u5165",e.__sourceDescription="\u652F\u6301 disabled, readonly"};const A=f({__name:"Input.unwriteable.demo",setup(e){return(l,a)=>(i(),g(b,null,[m("div",null,[v(o(s),{value:"disabled",disabled:""})]),m("div",null,[v(o(s),{value:"readonly",readonly:""})])],64))}});typeof N=="function"&&N(A);var S=e=>{e.__sourceCode=`<template>
  <co-input v-model:value="value" placeholder="please input content" @update:value="handleUpdate" />
  input value: {{ value }}
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CoInput } from 'coast-ui-vue3';
const value = ref('');
const handleUpdate = (newValue: string) => {
  console.log('input get new value', newValue);
};
<\/script>`,e.__sourceCodeTitle="Input v-model",e.__sourceDescription=""};const H=f({__name:"Input.vmodel.demo",setup(e){const l=c(""),a=n=>{console.log("input get new value",n)};return(n,t)=>(i(),g(b,null,[v(o(s),{value:l.value,"onUpdate:value":[t[0]||(t[0]=r=>l.value=r),a],placeholder:"please input content"},null,8,["value"]),ue(" input value: "+$(l.value),1)],64))}});typeof S=="function"&&S(H);var V=e=>{e.__sourceCode=`<template>
  <co-input v-model:value="value" width="100%" placeholder="width: 100%" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CoInput } from 'coast-ui-vue3';
const value = ref('');
<\/script>`,e.__sourceCodeTitle="\u652F\u6301 width",e.__sourceDescription=""};const M=f({__name:"Input.width.demo",setup(e){const l=c("");return(a,n)=>(i(),h(o(s),{value:l.value,"onUpdate:value":n[0]||(n[0]=t=>l.value=t),width:"100%",placeholder:"width: 100%"},null,8,["value"]))}});typeof V=="function"&&V(M);const ge=f({__name:"index",setup(e){const l=[K,F,W,L,O,P,Q,X,A,H,M];return(a,n)=>(i(),h(le,{components:l,title:"Input \u6587\u6863"}))}});export{ge as default};
