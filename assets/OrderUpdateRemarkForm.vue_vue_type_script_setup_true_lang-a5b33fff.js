import{d as j,r as m,o as n,q as i,e as s,b as d,h as p,a as t,w as O,j as g,k as q,K as A,y as B,B as K,A as P,v as S,__tla as z}from"./index-34f06ebd.js";import{_ as D,__tla as E}from"./Dialog.vue_vue_type_style_index_0_lang-08560286.js";import{u as G,__tla as H}from"./index-a29094c6.js";import{u as I,__tla as J}from"./useMessage-7a5ab7ef.js";let f,L=Promise.all([(()=>{try{return z}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return H}catch{}})(),(()=>{try{return J}catch{}})()]).then(async()=>{f=j({name:"OrderUpdateRemarkForm",__name:"OrderUpdateRemarkForm",emits:["success"],setup(M,{expose:y,emit:k}){const{t:v}=q(),h=I(),l=m(!1),o=m(!1),a=m({id:0,remark:""}),_=m();y({open:async e=>{w(),a.value.id=e.id,a.value.remark=e.remark,l.value=!0}});const b=k,V=async()=>{o.value=!0;try{const e=t(a);await G(e),h.success(v("common.updateSuccess")),l.value=!1,b("success",!0)}finally{o.value=!1}},w=()=>{var e;a.value={id:0,remark:""},(e=_.value)==null||e.resetFields()};return(e,r)=>{const x=A,U=B,F=K,c=P,R=D,C=S;return n(),i(R,{modelValue:t(l),"onUpdate:modelValue":r[2]||(r[2]=u=>g(l)?l.value=u:null),title:"\u5546\u5BB6\u5907\u6CE8",width:"45%"},{footer:s(()=>[d(c,{disabled:t(o),type:"primary",onClick:V},{default:s(()=>[p("\u786E \u5B9A")]),_:1},8,["disabled"]),d(c,{onClick:r[1]||(r[1]=u=>l.value=!1)},{default:s(()=>[p("\u53D6 \u6D88")]),_:1})]),default:s(()=>[O((n(),i(F,{ref_key:"formRef",ref:_,model:t(a),"label-width":"80px"},{default:s(()=>[d(U,{label:"\u5907\u6CE8"},{default:s(()=>[d(x,{modelValue:t(a).remark,"onUpdate:modelValue":r[0]||(r[0]=u=>t(a).remark=u),rows:3,placeholder:"\u8BF7\u8F93\u5165\u8BA2\u5355\u5907\u6CE8",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[C,t(o)]])]),_:1},8,["modelValue"])}}})});export{f as _,L as __tla};
