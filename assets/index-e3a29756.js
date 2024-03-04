import{_ as $,__tla as A}from"./Dialog.vue_vue_type_style_index_0_lang-4d2024bd.js";import{d as F,i as G,r as c,p as q,K as H,o as S,c as M,f as a,w as e,g as f,h as d,a as r,t as P,x as Q,a4 as Z,l as W,F as X,du as Y,e3 as aa,aZ as ea,C as ta,j as la,k as ra,aT as sa,__tla as oa}from"./index-d2088aec.js";import{_ as na,__tla as ua}from"./ContentWrap.vue_vue_type_script_setup_true_lang-3fd6aef1.js";import{E as ia,__tla as ca}from"./index.es-3bcee1fd.js";import{H as g,j as _a,__tla as ma}from"./java-b8e10076.js";import{u as pa,__tla as fa}from"./useMessage-c5990e2c.js";import{__tla as da}from"./index-82efac34.js";let k,ya=Promise.all([(()=>{try{return A}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return ca}catch{}})(),(()=>{try{return ma}catch{}})(),(()=>{try{return fa}catch{}})(),(()=>{try{return da}catch{}})()]).then(async()=>{function J(o){const s=["true","false","null"],_={scope:"literal",beginKeywords:s.join(" ")};return{name:"JSON",keywords:{literal:s},contains:[{className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{match:/[{}[\],:]/,className:"punctuation",relevance:0},o.QUOTE_STRING_MODE,_,o.C_NUMBER_MODE,o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}let h,v,O;h={class:"float-right mb-2"},v={key:0,ref:"editor"},O={class:"hljs"},k=F({name:"InfraBuild",__name:"index",setup(o){const{t:s}=G(),_=pa(),n=c(),u=c(!1),C=c(""),m=c(-1),i=c(""),y=t=>{u.value=!0,C.value=t},b=()=>{y("\u751F\u6210 JSON"),m.value=0,i.value=n.value.getRule()},j=()=>{y("\u751F\u6210 Options"),m.value=1,i.value=n.value.getOption()},x=()=>{y("\u751F\u6210\u7EC4\u4EF6"),m.value=2,i.value=D()},D=()=>{const t=n.value.getRule(),l=n.value.getOption();return`<template>
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
      rule.value = formCreate.parseJson('${Y.toJson(t).replaceAll("\\","\\\\")}')
      option.value = formCreate.parseJson('${JSON.stringify(l)}')
    }
    const onSubmit = (formData) => {
      //todo \u63D0\u4EA4\u8868\u5355
    }
    init()
  <\/script>`},T=t=>{let l="json";return m.value===2&&(l="xml"),ea(t)||(t=JSON.stringify(t)),g.highlight(l,t,!0).value||"&nbsp;"};return q(async()=>{g.registerLanguage("xml",_a),g.registerLanguage("json",J)}),(t,l)=>{const p=ta,N=la,w=ra,I=na,L=sa,R=$,z=H("dompurify-html");return S(),M(X,null,[a(I,null,{default:e(()=>[a(w,null,{default:e(()=>[a(N,null,{default:e(()=>[f("div",h,[a(p,{size:"small",type:"primary",onClick:b},{default:e(()=>[d("\u751F\u6210 JSON")]),_:1}),a(p,{size:"small",type:"success",onClick:j},{default:e(()=>[d("\u751F\u6210 Options")]),_:1}),a(p,{size:"small",type:"danger",onClick:x},{default:e(()=>[d("\u751F\u6210\u7EC4\u4EF6")]),_:1})])]),_:1}),a(N,null,{default:e(()=>[a(r(ia),{ref_key:"designer",ref:n,height:"780px"},null,512)]),_:1})]),_:1})]),_:1}),a(R,{modelValue:r(u),"onUpdate:modelValue":l[1]||(l[1]=E=>W(u)?u.value=E:null),title:r(C),"max-height":"600"},{default:e(()=>[r(u)?(S(),M("div",v,[a(p,{style:{float:"right"},onClick:l[0]||(l[0]=E=>(async B=>{const{copy:K,copied:U,isSupported:V}=aa({source:B});V?(await K(),r(U)&&_.success(s("common.copySuccess"))):_.error(s("common.copyError"))})(r(i)))},{default:e(()=>[d(P(r(s)("common.copy")),1)]),_:1}),a(L,{height:"580"},{default:e(()=>[f("div",null,[f("pre",null,[Q(f("code",O,null,512),[[z,T(r(i))]])])])]),_:1})],512)):Z("",!0)]),_:1},8,["modelValue","title"])],64)}}})});export{ya as __tla,k as default};
