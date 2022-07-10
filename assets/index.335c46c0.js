import{D as y}from"./DemoList.d4bdeefd.js";import{d as r,o as f,c as m,a as t,w as o,u as e,G as d,H as c,I as a,J as u,K as s,F as x,b as n,f as C,g}from"./index.9d04985f.js";var i=l=>{l.__sourceCode=`<template>
  <co-layout>
    <co-header>Header</co-header>
    <co-content>Content</co-content>
  </co-layout>

  <co-layout>
    <co-header>Header</co-header>
    <co-content>Content</co-content>
    <co-footer>Footer</co-footer>
  </co-layout>

  <co-layout>
    <co-aside width="200px">Aside</co-aside>
    <co-content>Content</co-content>
  </co-layout>

  <co-layout>
    <co-header>Header</co-header>
    <co-layout>
      <co-aside width="200px">Aside</co-aside>
      <co-content>Content</co-content>
    </co-layout>
  </co-layout>

  <co-layout>
    <co-header>Header</co-header>
    <co-layout>
      <co-aside width="200px">Aside</co-aside>
      <co-layout>
        <co-content>Content</co-content>
        <co-footer>Footer</co-footer>
      </co-layout>
    </co-layout>
  </co-layout>

  <co-layout>
    <co-aside width="200px">Aside</co-aside>
    <co-layout>
      <co-header>Header</co-header>
      <co-content>Content</co-content>
    </co-layout>
  </co-layout>

  <co-layout>
    <co-aside width="100px">Aside</co-aside>
    <co-layout>
      <co-header height="70px">Header</co-header>
      <co-content>Content</co-content>
      <co-footer height="50px">Footer</co-footer>
    </co-layout>
  </co-layout>
</template>

<script lang="ts" setup>
import { CoAside, CoFooter, CoHeader, CoContent, CoLayout } from 'coast-ui-vue3';
<\/script>

<style lang="scss" scoped>
.demo-component > .coast-layout {
  margin-bottom: 40px;
  color: #fff;

  * {
    text-align: center;
  }

  &:last-child {
    margin-bottom: 0;
  }

  .coast-header,
  .coast-footer {
    background: #7dbcea;
    line-height: 60px;
  }
  .coast-content {
    background: #108ee9;
    line-height: 120px;
  }
  .coast-aside {
    background: #3ba0e9;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>`,l.__sourceCodeTitle="\u5E38\u89C1\u9875\u9762\u5E03\u5C40",l.__sourceDescription="Layout\uFF1A\u5916\u5C42\u5BB9\u5668\u3002\u5F53\u5B50\u5143\u7D20\u4E2D\u5305\u542B Aside \u65F6\uFF0C\u5168\u90E8\u5B50\u5143\u7D20\u4F1A\u6C34\u5E73\u5DE6\u53F3\u6392\u5217\uFF0C\u5426\u5219\u4F1A\u5782\u76F4\u4E0A\u4E0B\u6392\u5217\u3002Header\uFF1A\u9876\u680F\u5BB9\u5668\u3002Aside\uFF1A\u4FA7\u8FB9\u680F\u5BB9\u5668\u3002Content\uFF1A\u4E3B\u8981\u533A\u57DF\u5BB9\u5668\u3002Footer\uFF1A\u5E95\u680F\u5BB9\u5668\u3002"};const b=n("Header"),H=n("Content"),v=n("Header"),A=n("Content"),w=n("Footer"),F=n("Aside"),k=n("Content"),L=n("Header"),D=n("Aside"),B=n("Content"),j=n("Header"),I=n("Aside"),N=n("Content"),T=n("Footer"),V=n("Aside"),E=n("Header"),G=n("Content"),J=n("Aside"),K=n("Header"),$=n("Content"),q=n("Footer"),h=r({__name:"Layout.default.demo",setup(l){return(_,p)=>(f(),m(x,null,[t(e(a),null,{default:o(()=>[t(e(d),null,{default:o(()=>[b]),_:1}),t(e(c),null,{default:o(()=>[H]),_:1})]),_:1}),t(e(a),null,{default:o(()=>[t(e(d),null,{default:o(()=>[v]),_:1}),t(e(c),null,{default:o(()=>[A]),_:1}),t(e(u),null,{default:o(()=>[w]),_:1})]),_:1}),t(e(a),null,{default:o(()=>[t(e(s),{width:"200px"},{default:o(()=>[F]),_:1}),t(e(c),null,{default:o(()=>[k]),_:1})]),_:1}),t(e(a),null,{default:o(()=>[t(e(d),null,{default:o(()=>[L]),_:1}),t(e(a),null,{default:o(()=>[t(e(s),{width:"200px"},{default:o(()=>[D]),_:1}),t(e(c),null,{default:o(()=>[B]),_:1})]),_:1})]),_:1}),t(e(a),null,{default:o(()=>[t(e(d),null,{default:o(()=>[j]),_:1}),t(e(a),null,{default:o(()=>[t(e(s),{width:"200px"},{default:o(()=>[I]),_:1}),t(e(a),null,{default:o(()=>[t(e(c),null,{default:o(()=>[N]),_:1}),t(e(u),null,{default:o(()=>[T]),_:1})]),_:1})]),_:1})]),_:1}),t(e(a),null,{default:o(()=>[t(e(s),{width:"200px"},{default:o(()=>[V]),_:1}),t(e(a),null,{default:o(()=>[t(e(d),null,{default:o(()=>[E]),_:1}),t(e(c),null,{default:o(()=>[G]),_:1})]),_:1})]),_:1}),t(e(a),null,{default:o(()=>[t(e(s),{width:"100px"},{default:o(()=>[J]),_:1}),t(e(a),null,{default:o(()=>[t(e(d),{height:"70px"},{default:o(()=>[K]),_:1}),t(e(c),null,{default:o(()=>[$]),_:1}),t(e(u),{height:"50px"},{default:o(()=>[q]),_:1})]),_:1})]),_:1})],64))}});typeof i=="function"&&i(h);var z=C(h,[["__scopeId","data-v-5c570eac"]]);const Q=r({__name:"index",setup(l){const _=[z];return(p,M)=>(f(),g(y,{components:_,title:"Layout \u6587\u6863"}))}});export{Q as default};
