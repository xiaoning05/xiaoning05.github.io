import{d as O,i as D,r as d,o as m,c as k,f as u,w as r,a as t,h as _,x as E,v as w,F as J,q as R,t as j,l as q,ai as G,aj as T,A as B,Q as L,G as P,D as Q,J as X,_ as Y,__tla as Z}from"./index-f0743f71.js";import{_ as z,__tla as H}from"./Dialog-8f786edd.js";import{C as K}from"./constants-99751ef9.js";import{d as W,D as $,__tla as aa}from"./dict-4a9940b3.js";import{g as ea,c as la,u as ta,__tla as sa}from"./index-5579dabd.js";import{u as oa,__tla as ra}from"./useMessage-75a00a06.js";let b,ua=Promise.all([(()=>{try{return Z}catch{}})(),(()=>{try{return H}catch{}})(),(()=>{try{return aa}catch{}})(),(()=>{try{return sa}catch{}})(),(()=>{try{return ra}catch{}})()]).then(async()=>{b=Y(O({name:"MockChannelForm",__name:"MockChannelForm",emits:["success"],setup(na,{expose:g,emit:C}){const{t:f}=D(),p=oa(),n=d(!1),v=d(""),c=d(!1),e=d({appId:"",code:"",status:void 0,feeRate:0,remark:"",config:{name:"mock-conf"}}),V={status:[{required:!0,message:"\u6E20\u9053\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]},i=d();g({open:async(l,a)=>{n.value=!0,c.value=!0,S(l,a);try{const o=await ea(l,a);o&&o.id&&(e.value=o,e.value.config=JSON.parse(o.config)),v.value=e.value.id?"\u7F16\u8F91\u652F\u4ED8\u6E20\u9053":"\u521B\u5EFA\u652F\u4ED8\u6E20\u9053"}finally{c.value=!1}}});const x=C,I=async()=>{if(i&&await i.value.validate()){c.value=!0;try{const l={...e.value};l.config=JSON.stringify(e.value.config),l.id?(await ta(l),p.success(f("common.updateSuccess"))):(await la(l),p.success(f("common.createSuccess"))),n.value=!1,x("success")}finally{c.value=!1}}},S=(l,a)=>{var o;e.value={appId:l,code:a,status:K.ENABLE,remark:"",feeRate:0,config:{name:"mock-conf"}},(o=i.value)==null||o.resetFields()};return(l,a)=>{const o=G,M=T,y=B,U=L,A=P,h=Q,F=z,N=X;return m(),k("div",null,[u(F,{modelValue:t(n),"onUpdate:modelValue":a[3]||(a[3]=s=>q(n)?n.value=s:null),title:t(v),onClosed:l.close,width:"800px"},{footer:r(()=>[u(h,{disabled:t(c),type:"primary",onClick:I},{default:r(()=>[_("\u786E \u5B9A")]),_:1},8,["disabled"]),u(h,{onClick:a[2]||(a[2]=s=>n.value=!1)},{default:r(()=>[_("\u53D6 \u6D88")]),_:1})]),default:r(()=>[E((m(),w(A,{ref_key:"formRef",ref:i,model:t(e),rules:V,"label-width":"100px"},{default:r(()=>[u(y,{"label-width":"180px",label:"\u6E20\u9053\u72B6\u6001",prop:"status"},{default:r(()=>[u(M,{modelValue:t(e).status,"onUpdate:modelValue":a[0]||(a[0]=s=>t(e).status=s)},{default:r(()=>[(m(!0),k(J,null,R(t(W)(t($).COMMON_STATUS),s=>(m(),w(o,{key:parseInt(s.value),label:parseInt(s.value)},{default:r(()=>[_(j(s.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(y,{"label-width":"180px",label:"\u5907\u6CE8",prop:"remark"},{default:r(()=>[u(U,{modelValue:t(e).remark,"onUpdate:modelValue":a[1]||(a[1]=s=>t(e).remark=s),style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[N,t(c)]])]),_:1},8,["modelValue","title","onClosed"])])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/pay/app/components/channel/MockChannelForm.vue"]])});export{ua as __tla,b as default};