import{D as v}from"./DemoList.d4bdeefd.js";import{d as l,r as i,o as u,g as s,u as f,O as d}from"./index.9d04985f.js";var c=e=>{e.__sourceCode=`<template>
  <co-switch v-model:value="defaultValue" @update:value="handleChange" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CoSwitch } from 'coast-ui-vue3';
const defaultValue = ref(false);
const handleChange = (value: boolean) => {
  console.log('value change', value);
};
<\/script>`,e.__sourceCodeTitle="\u5E38\u89C4\u7528\u6CD5",e.__sourceDescription=""};const p=l({__name:"Switch.default.demo",setup(e){const t=i(!1),o=a=>{console.log("value change",a)};return(a,n)=>(u(),s(f(d),{value:t.value,"onUpdate:value":[n[0]||(n[0]=m=>t.value=m),o]},null,8,["value"]))}});typeof c=="function"&&c(p);var r=e=>{e.__sourceCode=`<template>
  <co-switch v-model:value="defaultValue" disabled />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CoSwitch } from 'coast-ui-vue3';
const defaultValue = ref(false);
<\/script>`,e.__sourceCodeTitle="\u652F\u6301 disabled",e.__sourceDescription=""};const _=l({__name:"Switch.disabled.demo",setup(e){const t=i(!1);return(o,a)=>(u(),s(f(d),{value:t.value,"onUpdate:value":a[0]||(a[0]=n=>t.value=n),disabled:""},null,8,["value"]))}});typeof r=="function"&&r(_);const w=l({__name:"index",setup(e){const t=[p,_];return(o,a)=>(u(),s(v,{components:t,title:"Switch \u6587\u6863"}))}});export{w as default};
