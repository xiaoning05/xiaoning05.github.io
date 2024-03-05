import{_ as G,__tla as K}from"./Dialog-8f786edd.js";import{d as $,i as F,r as c,p as H,L as P,o as S,c as M,f as a,w as e,g as f,h as d,a as r,t as Q,x as X,a5 as Y,l as Z,F as q,dw as W,e5 as aa,a_ as ea,D as ta,j as la,k as ra,aU as sa,_ as oa,__tla as na}from"./index-f0743f71.js";import{_ as ua,__tla as ia}from"./ContentWrap-5acc4fb9.js";import{E as ca,__tla as _a}from"./index.es-4e951dd6.js";import{H as g,j as ma,__tla as pa}from"./java-65ec3fb8.js";import{u as fa,__tla as da}from"./useMessage-75a00a06.js";import{__tla as ya}from"./index-a48a5540.js";let b,ga=Promise.all([(()=>{try{return K}catch{}})(),(()=>{try{return na}catch{}})(),(()=>{try{return ia}catch{}})(),(()=>{try{return _a}catch{}})(),(()=>{try{return pa}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return ya}catch{}})()]).then(async()=>{function k(o){const s=["true","false","null"],_={scope:"literal",beginKeywords:s.join(" ")};return{name:"JSON",keywords:{literal:s},contains:[{className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{match:/[{}[\],:]/,className:"punctuation",relevance:0},o.QUOTE_STRING_MODE,_,o.C_NUMBER_MODE,o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}let v,h,O;v={class:"float-right mb-2"},h={key:0,ref:"editor"},O={class:"hljs"},b=oa($({name:"InfraBuild",__name:"index",setup(o){const{t:s}=F(),_=fa(),n=c(),u=c(!1),C=c(""),m=c(-1),i=c(""),y=t=>{u.value=!0,C.value=t},x=()=>{y("\u751F\u6210 JSON"),m.value=0,i.value=n.value.getRule()},J=()=>{y("\u751F\u6210 Options"),m.value=1,i.value=n.value.getOption()},j=()=>{y("\u751F\u6210\u7EC4\u4EF6"),m.value=2,i.value=w()},w=()=>{const t=n.value.getRule(),l=n.value.getOption();return`<template>
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
  <\/script>`},D=t=>{let l="json";return m.value===2&&(l="xml"),ea(t)||(t=JSON.stringify(t)),g.highlight(l,t,!0).value||"&nbsp;"};return H(async()=>{g.registerLanguage("xml",ma),g.registerLanguage("json",k)}),(t,l)=>{const p=ta,N=la,U=ra,I=ua,L=sa,R=G,T=P("dompurify-html");return S(),M(q,null,[a(I,null,{default:e(()=>[a(U,null,{default:e(()=>[a(N,null,{default:e(()=>[f("div",v,[a(p,{size:"small",type:"primary",onClick:x},{default:e(()=>[d("\u751F\u6210 JSON")]),_:1}),a(p,{size:"small",type:"success",onClick:J},{default:e(()=>[d("\u751F\u6210 Options")]),_:1}),a(p,{size:"small",type:"danger",onClick:j},{default:e(()=>[d("\u751F\u6210\u7EC4\u4EF6")]),_:1})])]),_:1}),a(N,null,{default:e(()=>[a(r(ca),{ref_key:"designer",ref:n,height:"780px"},null,512)]),_:1})]),_:1})]),_:1}),a(R,{modelValue:r(u),"onUpdate:modelValue":l[1]||(l[1]=E=>Z(u)?u.value=E:null),title:r(C),"max-height":"600"},{default:e(()=>[r(u)?(S(),M("div",h,[a(p,{style:{float:"right"},onClick:l[0]||(l[0]=E=>(async z=>{const{copy:B,copied:V,isSupported:A}=aa({source:z});A?(await B(),r(V)&&_.success(s("common.copySuccess"))):_.error(s("common.copyError"))})(r(i)))},{default:e(()=>[d(Q(r(s)("common.copy")),1)]),_:1}),a(L,{height:"580"},{default:e(()=>[f("div",null,[f("pre",null,[X(f("code",O,null,512),[[T,D(r(i))]])])])]),_:1})],512)):Y("",!0)]),_:1},8,["modelValue","title"])],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/infra/build/index.vue"]])});export{ga as __tla,b as default};
