import{d as O,k as j,r as m,o as n,q as i,e as s,b as u,a as r,h as p,w as I,j as q,L as A,y as B,C as D,B as E,v as G,_ as L,__tla as M}from"./index-b079f499.js";import{_ as N,__tla as P}from"./Dialog-07bcd661.js";import{u as S,__tla as X}from"./index-e1f381f8.js";import{u as Y,__tla as Z}from"./useMessage-66b9cf03.js";let f,g=Promise.all([(()=>{try{return M}catch{}})(),(()=>{try{return P}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return Z}catch{}})()]).then(async()=>{f=L(O({name:"OrderUpdateRemarkForm",__name:"OrderUpdateRemarkForm",emits:["success"],setup(z,{expose:y,emit:v}){const{t:k}=j(),h=Y(),l=m(!1),o=m(!1),a=m({id:0,remark:""}),_=m();y({open:async e=>{V(),a.value.id=e.id,a.value.remark=e.remark,l.value=!0}});const w=v,U=async()=>{o.value=!0;try{const e=r(a);await S(e),h.success(k("common.updateSuccess")),l.value=!1,w("success",!0)}finally{o.value=!1}},V=()=>{var e;a.value={id:0,remark:""},(e=_.value)==null||e.resetFields()};return(e,t)=>{const b=A,x=B,C=D,c=E,F=N,R=G;return n(),i(F,{modelValue:r(l),"onUpdate:modelValue":t[2]||(t[2]=d=>q(l)?l.value=d:null),title:"\u5546\u5BB6\u5907\u6CE8",width:"45%"},{footer:s(()=>[u(c,{disabled:r(o),type:"primary",onClick:U},{default:s(()=>[p("\u786E \u5B9A")]),_:1},8,["disabled"]),u(c,{onClick:t[1]||(t[1]=d=>l.value=!1)},{default:s(()=>[p("\u53D6 \u6D88")]),_:1})]),default:s(()=>[I((n(),i(C,{ref_key:"formRef",ref:_,model:r(a),"label-width":"80px"},{default:s(()=>[u(x,{label:"\u5907\u6CE8"},{default:s(()=>[u(b,{modelValue:r(a).remark,"onUpdate:modelValue":t[0]||(t[0]=d=>r(a).remark=d),rows:3,placeholder:"\u8BF7\u8F93\u5165\u8BA2\u5355\u5907\u6CE8",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[R,r(o)]])]),_:1},8,["modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mall/trade/order/form/OrderUpdateRemarkForm.vue"]])});export{g as __tla,f as default};
