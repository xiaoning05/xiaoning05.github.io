import{d as C,r as u,n as L,aQ as U,o as p,q as c,e as s,b as n,h as y,a as l,w as B,j as K,k as Q,K as R,y as S,B as z,A as D,v as E,__tla as G}from"./index-34f06ebd.js";import{_ as H,__tla as I}from"./Dialog.vue_vue_type_style_index_0_lang-08560286.js";import{b as J,__tla as M}from"./property-3518a151.js";import{u as N,__tla as O}from"./useMessage-7a5ab7ef.js";let f,T=Promise.all([(()=>{try{return G}catch{}})(),(()=>{try{return I}catch{}})(),(()=>{try{return M}catch{}})(),(()=>{try{return O}catch{}})()]).then(async()=>{f=C({name:"ProductPropertyForm",__name:"ProductPropertyAddForm",props:{propertyList:{type:Array,default:()=>{}}},setup(v,{expose:h}){const{t:b}=Q(),V=N(),t=u(!1),o=u(!1),r=u({name:""}),P=L({name:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),m=u(),_=u([]),g=v;U(()=>g.propertyList,e=>{e&&(_.value=e)},{deep:!0,immediate:!0}),h({open:async()=>{t.value=!0,w()}});const k=async()=>{if(m&&await m.value.validate()){o.value=!0;try{const e=r.value,a=await J(e);_.value.push({id:a,...r.value,values:[]}),V.success(b("common.createSuccess")),t.value=!1}finally{o.value=!1}}},w=()=>{var e;r.value={name:""},(e=m.value)==null||e.resetFields()};return(e,a)=>{const x=R,A=S,F=z,i=D,j=H,q=E;return p(),c(j,{modelValue:l(t),"onUpdate:modelValue":a[2]||(a[2]=d=>K(t)?t.value=d:null),title:"\u6DFB\u52A0\u5546\u54C1\u5C5E\u6027"},{footer:s(()=>[n(i,{disabled:l(o),type:"primary",onClick:k},{default:s(()=>[y("\u786E \u5B9A")]),_:1},8,["disabled"]),n(i,{onClick:a[1]||(a[1]=d=>t.value=!1)},{default:s(()=>[y("\u53D6 \u6D88")]),_:1})]),default:s(()=>[B((p(),c(F,{ref_key:"formRef",ref:m,model:l(r),rules:l(P),"label-width":"80px"},{default:s(()=>[n(A,{label:"\u5C5E\u6027\u540D\u79F0",prop:"name"},{default:s(()=>[n(x,{modelValue:l(r).name,"onUpdate:modelValue":a[0]||(a[0]=d=>l(r).name=d),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[q,l(o)]])]),_:1},8,["modelValue"])}}})});export{f as _,T as __tla};