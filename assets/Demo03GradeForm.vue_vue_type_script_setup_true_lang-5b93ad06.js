import{d as b,r as u,e as y,aS as V,x,a as l,o as I,v as q,w as o,f as r,P as w,A as D,D as P,I as U,__tla as k}from"./index-d5b00dc9.js";import{b as A,__tla as F}from"./index-8ac2c505.js";let _,G=Promise.all([(()=>{try{return k}catch{}})(),(()=>{try{return F}catch{}})()]).then(async()=>{_=b({__name:"Demo03GradeForm",props:{studentId:{}},setup(c,{expose:p}){const v=c,t=u(!1),e=u([]),f=y({studentId:[{required:!0,message:"\u5B66\u751F\u7F16\u53F7\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],name:[{required:!0,message:"\u540D\u5B57\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],teacher:[{required:!0,message:"\u73ED\u4E3B\u4EFB\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),m=u();return V(()=>v.studentId,async s=>{if(e.value={id:void 0,studentId:void 0,name:void 0,teacher:void 0},s)try{t.value=!0;const a=await A(s);if(!a)return;e.value=a}finally{t.value=!1}},{immediate:!0}),p({validate:()=>m.value.validate(),getData:()=>e.value}),(s,a)=>{const n=w,i=D,h=P,g=U;return x((I(),q(h,{ref_key:"formRef",ref:m,model:l(e),rules:l(f),"label-width":"100px"},{default:o(()=>[r(i,{label:"\u540D\u5B57",prop:"name"},{default:o(()=>[r(n,{modelValue:l(e).name,"onUpdate:modelValue":a[0]||(a[0]=d=>l(e).name=d),placeholder:"\u8BF7\u8F93\u5165\u540D\u5B57"},null,8,["modelValue"])]),_:1}),r(i,{label:"\u73ED\u4E3B\u4EFB",prop:"teacher"},{default:o(()=>[r(n,{modelValue:l(e).teacher,"onUpdate:modelValue":a[1]||(a[1]=d=>l(e).teacher=d),placeholder:"\u8BF7\u8F93\u5165\u73ED\u4E3B\u4EFB"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[g,l(t)]])}}})});export{_,G as __tla};
