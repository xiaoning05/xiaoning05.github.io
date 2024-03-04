import{_ as $,__tla as A}from"./Dialog.vue_vue_type_style_index_0_lang-03cf6454.js";import{d as F,i as H,r as c,p as q,K as G,o as S,c as M,f as a,w as t,g as f,h as d,a as r,t as P,x as Q,a4 as X,l as Z,F as W,du as Y,dX as aa,aZ as ta,C as ea,j as la,k as ra,aT as sa,__tla as oa}from"./index-d5b00dc9.js";import{_ as na,__tla as ua}from"./ContentWrap.vue_vue_type_script_setup_true_lang-29ba9b6b.js";import{E as ia,__tla as ca}from"./index.es-784e1e6f.js";import{H as g,j as _a,__tla as ma}from"./java-aa8cb2a3.js";import{u as pa,__tla as fa}from"./useMessage-2288a5f2.js";import{__tla as da}from"./index-bd0d9e6c.js";let k,ya=Promise.all([(()=>{try{return A}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return ca}catch{}})(),(()=>{try{return ma}catch{}})(),(()=>{try{return fa}catch{}})(),(()=>{try{return da}catch{}})()]).then(async()=>{function b(o){const s=["true","false","null"],_={scope:"literal",beginKeywords:s.join(" ")};return{name:"JSON",keywords:{literal:s},contains:[{className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{match:/[{}[\],:]/,className:"punctuation",relevance:0},o.QUOTE_STRING_MODE,_,o.C_NUMBER_MODE,o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}let h,v,O;h={class:"float-right mb-2"},v={key:0,ref:"editor"},O={class:"hljs"},k=F({name:"InfraBuild",__name:"index",setup(o){const{t:s}=H(),_=pa(),n=c(),u=c(!1),C=c(""),m=c(-1),i=c(""),y=e=>{u.value=!0,C.value=e},J=()=>{y("\u751F\u6210 JSON"),m.value=0,i.value=n.value.getRule()},x=()=>{y("\u751F\u6210 Options"),m.value=1,i.value=n.value.getOption()},j=()=>{y("\u751F\u6210\u7EC4\u4EF6"),m.value=2,i.value=D()},D=()=>{const e=n.value.getRule(),l=n.value.getOption();return`<template>
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
      rule.value = formCreate.parseJson('${Y.toJson(e).replaceAll("\\","\\\\")}')
      option.value = formCreate.parseJson('${JSON.stringify(l)}')
    }
    const onSubmit = (formData) => {
      //todo \u63D0\u4EA4\u8868\u5355
    }
    init()
  <\/script>`},T=e=>{let l="json";return m.value===2&&(l="xml"),ta(e)||(e=JSON.stringify(e)),g.highlight(l,e,!0).value||"&nbsp;"};return q(async()=>{g.registerLanguage("xml",_a),g.registerLanguage("json",b)}),(e,l)=>{const p=ea,N=la,w=ra,B=na,L=sa,R=$,z=G("dompurify-html");return S(),M(W,null,[a(B,null,{default:t(()=>[a(w,null,{default:t(()=>[a(N,null,{default:t(()=>[f("div",h,[a(p,{size:"small",type:"primary",onClick:J},{default:t(()=>[d("\u751F\u6210 JSON")]),_:1}),a(p,{size:"small",type:"success",onClick:x},{default:t(()=>[d("\u751F\u6210 Options")]),_:1}),a(p,{size:"small",type:"danger",onClick:j},{default:t(()=>[d("\u751F\u6210\u7EC4\u4EF6")]),_:1})])]),_:1}),a(N,null,{default:t(()=>[a(r(ia),{ref_key:"designer",ref:n,height:"780px"},null,512)]),_:1})]),_:1})]),_:1}),a(R,{modelValue:r(u),"onUpdate:modelValue":l[1]||(l[1]=E=>Z(u)?u.value=E:null),title:r(C),"max-height":"600"},{default:t(()=>[r(u)?(S(),M("div",v,[a(p,{style:{float:"right"},onClick:l[0]||(l[0]=E=>(async I=>{const{copy:K,copied:U,isSupported:V}=aa({source:I});V?(await K(),r(U)&&_.success(s("common.copySuccess"))):_.error(s("common.copyError"))})(r(i)))},{default:t(()=>[d(P(r(s)("common.copy")),1)]),_:1}),a(L,{height:"580"},{default:t(()=>[f("div",null,[f("pre",null,[Q(f("code",O,null,512),[[z,T(r(i))]])])])]),_:1})],512)):X("",!0)]),_:1},8,["modelValue","title"])],64)}}})});export{ya as __tla,k as default};
