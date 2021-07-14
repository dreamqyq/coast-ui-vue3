import{f as o,g as e,h as n,i as t,j as a}from"./index.bdcd6db1.js";import{y as l,z as c,r as d,o as u,c as r,a as s,F as i,A as f,j as _}from"./vendor.7835d90a.js";import{_ as h}from"./Demo.f4482173.js";var p={components:{CoAside:o,CoFooter:e,CoHeader:n,CoContent:t,CoLayout:a}},y=o=>{o.__sourceCode='<template>\n  <co-layout>\n    <co-header>Header</co-header>\n    <co-content>Content</co-content>\n  </co-layout>\n\n  <co-layout>\n    <co-header>Header</co-header>\n    <co-content>Content</co-content>\n    <co-footer>Footer</co-footer>\n  </co-layout>\n\n  <co-layout>\n    <co-aside width="200px">Aside</co-aside>\n    <co-content>Content</co-content>\n  </co-layout>\n\n  <co-layout>\n    <co-header>Header</co-header>\n    <co-layout>\n      <co-aside width="200px">Aside</co-aside>\n      <co-content>Content</co-content>\n    </co-layout>\n  </co-layout>\n\n  <co-layout>\n    <co-header>Header</co-header>\n    <co-layout>\n      <co-aside width="200px">Aside</co-aside>\n      <co-layout>\n        <co-content>Content</co-content>\n        <co-footer>Footer</co-footer>\n      </co-layout>\n    </co-layout>\n  </co-layout>\n\n  <co-layout>\n    <co-aside width="200px">Aside</co-aside>\n    <co-layout>\n      <co-header>Header</co-header>\n      <co-content>Content</co-content>\n    </co-layout>\n  </co-layout>\n\n  <co-layout>\n    <co-aside width="100px">Aside</co-aside>\n    <co-layout>\n      <co-header height="70px">Header</co-header>\n      <co-content>Content</co-content>\n      <co-footer height="50px">Footer</co-footer>\n    </co-layout>\n  </co-layout>\n</template>\n\n<script lang="ts">\nimport { CoAside, CoFooter, CoHeader, CoContent, CoLayout } from \'coast-ui-vue3\';\n\nexport default {\n  components: { CoAside, CoFooter, CoHeader, CoContent, CoLayout },\n};\n<\/script>\n\n<style lang="scss" scoped>\n.demo-component > .coast-layout {\n  margin-bottom: 40px;\n  color: #fff;\n  text-align: center;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  .coast-header,\n  .coast-footer {\n    background: #7dbcea;\n    line-height: 60px;\n  }\n  .coast-content {\n    background: #108ee9;\n    line-height: 120px;\n  }\n  .coast-aside {\n    background: #3ba0e9;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n}\n</style>',o.__sourceCodeTitle="常见页面布局",o.__sourceDescription="Layout：外层容器。当子元素中包含 Aside 时，全部子元素会水平左右排列，否则会垂直上下排列。Header：顶栏容器。Aside：侧边栏容器。Content：主要区域容器。Footer：底栏容器。"};const C=f();l("data-v-76ac5100");const m=_("Header"),x=_("Content"),g=_("Header"),A=_("Content"),H=_("Footer"),F=_("Aside"),w=_("Content"),b=_("Header"),D=_("Aside"),v=_("Content"),L=_("Header"),j=_("Aside"),k=_("Content"),z=_("Footer"),I=_("Aside"),T=_("Header"),q=_("Content"),B=_("Aside"),E=_("Header"),G=_("Content"),J=_("Footer");c();const K=C(((o,e,n,t,a,l)=>{const c=d("co-header"),f=d("co-content"),_=d("co-layout"),h=d("co-footer"),p=d("co-aside");return u(),r(i,null,[s(_,null,{default:C((()=>[s(c,null,{default:C((()=>[m])),_:1}),s(f,null,{default:C((()=>[x])),_:1})])),_:1}),s(_,null,{default:C((()=>[s(c,null,{default:C((()=>[g])),_:1}),s(f,null,{default:C((()=>[A])),_:1}),s(h,null,{default:C((()=>[H])),_:1})])),_:1}),s(_,null,{default:C((()=>[s(p,{width:"200px"},{default:C((()=>[F])),_:1}),s(f,null,{default:C((()=>[w])),_:1})])),_:1}),s(_,null,{default:C((()=>[s(c,null,{default:C((()=>[b])),_:1}),s(_,null,{default:C((()=>[s(p,{width:"200px"},{default:C((()=>[D])),_:1}),s(f,null,{default:C((()=>[v])),_:1})])),_:1})])),_:1}),s(_,null,{default:C((()=>[s(c,null,{default:C((()=>[L])),_:1}),s(_,null,{default:C((()=>[s(p,{width:"200px"},{default:C((()=>[j])),_:1}),s(_,null,{default:C((()=>[s(f,null,{default:C((()=>[k])),_:1}),s(h,null,{default:C((()=>[z])),_:1})])),_:1})])),_:1})])),_:1}),s(_,null,{default:C((()=>[s(p,{width:"200px"},{default:C((()=>[I])),_:1}),s(_,null,{default:C((()=>[s(c,null,{default:C((()=>[T])),_:1}),s(f,null,{default:C((()=>[q])),_:1})])),_:1})])),_:1}),s(_,null,{default:C((()=>[s(p,{width:"100px"},{default:C((()=>[B])),_:1}),s(_,null,{default:C((()=>[s(c,{height:"70px"},{default:C((()=>[E])),_:1}),s(f,null,{default:C((()=>[G])),_:1}),s(h,{height:"50px"},{default:C((()=>[J])),_:1})])),_:1})])),_:1})],64)}));y(p),p.render=K,p.__scopeId="data-v-76ac5100";var M={components:{Demo:h},setup:()=>({LayoutDefaultDemo:p})};const N=s("h1",null,"Layout 文档",-1);M.render=function(o,e,n,t,a,l){const c=d("Demo");return u(),r("div",null,[N,s(c,{component:t.LayoutDefaultDemo},null,8,["component"])])};export default M;
