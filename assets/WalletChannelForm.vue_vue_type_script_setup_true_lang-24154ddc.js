import{d as R,i as q,r as d,o as m,c as b,f as u,w as o,a as t,h as _,x as D,v as g,F as E,q as J,t as M,l as T,ah as W,ai as j,A as B,P,D as L,C as z,I as G,__tla as H}from"./index-d2088aec.js";import{_ as K,__tla as Q}from"./Dialog.vue_vue_type_style_index_0_lang-4d2024bd.js";import{C as X}from"./constants-99751ef9.js";import{d as Y,D as Z,__tla as $}from"./dict-999fbee6.js";import{g as aa,c as ea,u as la,__tla as ta}from"./index-9aabe97d.js";import{u as sa,__tla as ra}from"./useMessage-c5990e2c.js";let k,oa=Promise.all([(()=>{try{return H}catch{}})(),(()=>{try{return Q}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return ta}catch{}})(),(()=>{try{return ra}catch{}})()]).then(async()=>{k=R({name:"WalletChannelForm",__name:"WalletChannelForm",emits:["success"],setup(ua,{expose:w,emit:V}){const{t:f}=q(),p=sa(),n=d(!1),v=d(""),c=d(!1),e=d({appId:"",code:"",status:void 0,feeRate:0,remark:"",config:{name:"mock-conf"}}),C={status:[{required:!0,message:"\u6E20\u9053\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]},i=d();w({open:async(l,a)=>{n.value=!0,c.value=!0,I(l,a);try{const r=await aa(l,a);r&&r.id&&(e.value=r,e.value.config=JSON.parse(r.config)),v.value=e.value.id?"\u7F16\u8F91\u652F\u4ED8\u6E20\u9053":"\u521B\u5EFA\u652F\u4ED8\u6E20\u9053"}finally{c.value=!1}}});const x=V,S=async()=>{if(i&&await i.value.validate()){c.value=!0;try{const l={...e.value};l.config=JSON.stringify(e.value.config),l.id?(await la(l),p.success(f("common.updateSuccess"))):(await ea(l),p.success(f("common.createSuccess"))),n.value=!1,x("success")}finally{c.value=!1}}},I=(l,a)=>{var r;e.value={appId:l,code:a,status:X.ENABLE,remark:"",feeRate:0,config:{name:"mock-conf"}},(r=i.value)==null||r.resetFields()};return(l,a)=>{const r=W,F=j,y=B,N=P,O=L,h=z,U=K,A=G;return m(),b("div",null,[u(U,{modelValue:t(n),"onUpdate:modelValue":a[3]||(a[3]=s=>T(n)?n.value=s:null),title:t(v),onClosed:l.close,width:"800px"},{footer:o(()=>[u(h,{disabled:t(c),type:"primary",onClick:S},{default:o(()=>[_("\u786E \u5B9A")]),_:1},8,["disabled"]),u(h,{onClick:a[2]||(a[2]=s=>n.value=!1)},{default:o(()=>[_("\u53D6 \u6D88")]),_:1})]),default:o(()=>[D((m(),g(O,{ref_key:"formRef",ref:i,model:t(e),rules:C,"label-width":"100px"},{default:o(()=>[u(y,{"label-width":"180px",label:"\u6E20\u9053\u72B6\u6001",prop:"status"},{default:o(()=>[u(F,{modelValue:t(e).status,"onUpdate:modelValue":a[0]||(a[0]=s=>t(e).status=s)},{default:o(()=>[(m(!0),b(E,null,J(t(Y)(t(Z).COMMON_STATUS),s=>(m(),g(r,{key:parseInt(s.value),label:parseInt(s.value)},{default:o(()=>[_(M(s.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(y,{"label-width":"180px",label:"\u5907\u6CE8",prop:"remark"},{default:o(()=>[u(N,{modelValue:t(e).remark,"onUpdate:modelValue":a[1]||(a[1]=s=>t(e).remark=s),style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[A,t(c)]])]),_:1},8,["modelValue","title","onClosed"])])}}})});export{k as _,oa as __tla};
