import{d as A,k as R,r as d,o as m,c as k,b as u,e as o,a as t,h as _,w as j,q as b,F as q,g as B,t as E,j as J,ae as T,af as D,y as K,K as L,B as P,A as z,v as G,__tla as H}from"./index-34f06ebd.js";import{_ as Q,__tla as W}from"./Dialog.vue_vue_type_style_index_0_lang-08560286.js";import{C as X}from"./constants-99751ef9.js";import{d as Y,D as Z,__tla as $}from"./dict-e142e39a.js";import{g as aa,c as ea,u as la,__tla as ta}from"./index-63d7fdab.js";import{u as sa,__tla as ra}from"./useMessage-7a5ab7ef.js";let g,oa=Promise.all([(()=>{try{return H}catch{}})(),(()=>{try{return W}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return ta}catch{}})(),(()=>{try{return ra}catch{}})()]).then(async()=>{g=A({name:"MockChannelForm",__name:"MockChannelForm",emits:["success"],setup(ua,{expose:w,emit:V}){const{t:f}=R(),p=sa(),c=d(!1),v=d(""),n=d(!1),e=d({appId:"",code:"",status:void 0,feeRate:0,remark:"",config:{name:"mock-conf"}}),C={status:[{required:!0,message:"\u6E20\u9053\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]},i=d();w({open:async(l,a)=>{c.value=!0,n.value=!0,F(l,a);try{const r=await aa(l,a);r&&r.id&&(e.value=r,e.value.config=JSON.parse(r.config)),v.value=e.value.id?"\u7F16\u8F91\u652F\u4ED8\u6E20\u9053":"\u521B\u5EFA\u652F\u4ED8\u6E20\u9053"}finally{n.value=!1}}});const x=V,S=async()=>{if(i&&await i.value.validate()){n.value=!0;try{const l={...e.value};l.config=JSON.stringify(e.value.config),l.id?(await la(l),p.success(f("common.updateSuccess"))):(await ea(l),p.success(f("common.createSuccess"))),c.value=!1,x("success")}finally{n.value=!1}}},F=(l,a)=>{var r;e.value={appId:l,code:a,status:X.ENABLE,remark:"",feeRate:0,config:{name:"mock-conf"}},(r=i.value)==null||r.resetFields()};return(l,a)=>{const r=T,I=D,y=K,M=L,N=P,h=z,O=Q,U=G;return m(),k("div",null,[u(O,{modelValue:t(c),"onUpdate:modelValue":a[3]||(a[3]=s=>J(c)?c.value=s:null),title:t(v),onClosed:l.close,width:"800px"},{footer:o(()=>[u(h,{disabled:t(n),type:"primary",onClick:S},{default:o(()=>[_("\u786E \u5B9A")]),_:1},8,["disabled"]),u(h,{onClick:a[2]||(a[2]=s=>c.value=!1)},{default:o(()=>[_("\u53D6 \u6D88")]),_:1})]),default:o(()=>[j((m(),b(N,{ref_key:"formRef",ref:i,model:t(e),rules:C,"label-width":"100px"},{default:o(()=>[u(y,{"label-width":"180px",label:"\u6E20\u9053\u72B6\u6001",prop:"status"},{default:o(()=>[u(I,{modelValue:t(e).status,"onUpdate:modelValue":a[0]||(a[0]=s=>t(e).status=s)},{default:o(()=>[(m(!0),k(q,null,B(t(Y)(t(Z).COMMON_STATUS),s=>(m(),b(r,{key:parseInt(s.value),label:parseInt(s.value)},{default:o(()=>[_(E(s.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(y,{"label-width":"180px",label:"\u5907\u6CE8",prop:"remark"},{default:o(()=>[u(M,{modelValue:t(e).remark,"onUpdate:modelValue":a[1]||(a[1]=s=>t(e).remark=s),style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[U,t(n)]])]),_:1},8,["modelValue","title","onClosed"])])}}})});export{g as _,oa as __tla};
