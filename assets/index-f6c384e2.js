import{_ as A,__tla as K}from"./Dialog-9a73a39c.js";import{d as Y,k as $,r as c,p as F,G as H,o as S,c as M,b as a,e,f,h as d,a as r,t as P,w as Q,a0 as X,j as Z,F as q,du as W,e5 as aa,aY as ea,B as ta,a9 as la,ab as ra,aS as sa,_ as oa,__tla as na}from"./index-aaa5adb3.js";import{_ as ua,__tla as ia}from"./ContentWrap-04d7f6d1.js";import{E as ca,__tla as _a}from"./index.es-c925060b.js";import{H as g,j as ma,__tla as pa}from"./java-ae1da330.js";import{u as fa,__tla as da}from"./useMessage-873da1e2.js";import{__tla as ya}from"./index-5b7dcbf1.js";let b,ga=Promise.all([(()=>{try{return K}catch{}})(),(()=>{try{return na}catch{}})(),(()=>{try{return ia}catch{}})(),(()=>{try{return _a}catch{}})(),(()=>{try{return pa}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return ya}catch{}})()]).then(async()=>{function k(o){const s=["true","false","null"],_={scope:"literal",beginKeywords:s.join(" ")};return{name:"JSON",keywords:{literal:s},contains:[{className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{match:/[{}[\],:]/,className:"punctuation",relevance:0},o.QUOTE_STRING_MODE,_,o.C_NUMBER_MODE,o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}let v,h,O;v={class:"float-right mb-2"},h={key:0,ref:"editor"},O={class:"hljs"},b=oa(Y({name:"InfraBuild",__name:"index",setup(o){const{t:s}=$(),_=fa(),n=c(),u=c(!1),C=c(""),m=c(-1),i=c(""),y=t=>{u.value=!0,C.value=t},J=()=>{y("\u751F\u6210 JSON"),m.value=0,i.value=n.value.getRule()},x=()=>{y("\u751F\u6210 Options"),m.value=1,i.value=n.value.getOption()},j=()=>{y("\u751F\u6210\u7EC4\u4EF6"),m.value=2,i.value=w()},w=()=>{const t=n.value.getRule(),l=n.value.getOption();return`<template>
    <form-create
      v-model="fapi"
      :rule="rule"
      :option="option"
      @submit="onSubmit"
    ></form-create>
  </template>
  <script setup lang=ts>
    import formCreate from "@form-create/element-ui";
    const faps = ref(null)
    const rule = ref('')
    const option = ref('')
    const init = () => {
      rule.value = formCreate.parseJson('${W.toJson(t).replaceAll("\\","\\\\")}')
      option.value = formCreate.parseJson('${JSON.stringify(l)}')
    }
    const onSubmit = (formData) => {
      //todo \u63D0\u4EA4\u8868\u5355
    }
    init()
  <\/script>`},D=t=>{let l="json";return m.value===2&&(l="xml"),ea(t)||(t=JSON.stringify(t)),g.highlight(l,t,!0).value||"&nbsp;"};return F(async()=>{g.registerLanguage("xml",ma),g.registerLanguage("json",k)}),(t,l)=>{const p=ta,N=la,B=ra,I=ua,L=sa,R=A,T=H("dompurify-html");return S(),M(q,null,[a(I,null,{default:e(()=>[a(B,null,{default:e(()=>[a(N,null,{default:e(()=>[f("div",v,[a(p,{size:"small",type:"primary",onClick:J},{default:e(()=>[d("\u751F\u6210 JSON")]),_:1}),a(p,{size:"small",type:"success",onClick:x},{default:e(()=>[d("\u751F\u6210 Options")]),_:1}),a(p,{size:"small",type:"danger",onClick:j},{default:e(()=>[d("\u751F\u6210\u7EC4\u4EF6")]),_:1})])]),_:1}),a(N,null,{default:e(()=>[a(r(ca),{ref_key:"designer",ref:n,height:"780px"},null,512)]),_:1})]),_:1})]),_:1}),a(R,{modelValue:r(u),"onUpdate:modelValue":l[1]||(l[1]=E=>Z(u)?u.value=E:null),title:r(C),"max-height":"600"},{default:e(()=>[r(u)?(S(),M("div",h,[a(p,{style:{float:"right"},onClick:l[0]||(l[0]=E=>(async U=>{const{copy:z,copied:G,isSupported:V}=aa({source:U});V?(await z(),r(G)&&_.success(s("common.copySuccess"))):_.error(s("common.copyError"))})(r(i)))},{default:e(()=>[d(P(r(s)("common.copy")),1)]),_:1}),a(L,{height:"580"},{default:e(()=>[f("div",null,[f("pre",null,[Q(f("code",O,null,512),[[T,D(r(i))]])])])]),_:1})],512)):X("",!0)]),_:1},8,["modelValue","title"])],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/infra/build/index.vue"]])});export{ga as __tla,b as default};
