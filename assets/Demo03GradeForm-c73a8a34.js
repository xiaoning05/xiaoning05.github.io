import{d as y,r as o,n as b,aR as I,w as V,a as l,o as q,q as w,e as u,b as r,L as D,y as x,C as G,v as U,_ as C,__tla as F}from"./index-aaa5adb3.js";import{b as R,__tla as k}from"./index-ad8e67ba.js";let _,A=Promise.all([(()=>{try{return F}catch{}})(),(()=>{try{return k}catch{}})()]).then(async()=>{_=C(y({__name:"Demo03GradeForm",props:{studentId:{type:null,required:!0}},setup(c,{expose:p}){const v=c,t=o(!1),e=o([]),f=b({studentId:[{required:!0,message:"\u5B66\u751F\u7F16\u53F7\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],name:[{required:!0,message:"\u540D\u5B57\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],teacher:[{required:!0,message:"\u73ED\u4E3B\u4EFB\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),n=o();return I(()=>v.studentId,async d=>{if(e.value={id:void 0,studentId:void 0,name:void 0,teacher:void 0},d)try{t.value=!0;const a=await R(d);if(!a)return;e.value=a}finally{t.value=!1}},{immediate:!0}),p({validate:()=>n.value.validate(),getData:()=>e.value}),(d,a)=>{const m=D,i=x,g=G,h=U;return V((q(),w(g,{ref_key:"formRef",ref:n,model:l(e),rules:l(f),"label-width":"100px"},{default:u(()=>[r(i,{label:"\u540D\u5B57",prop:"name"},{default:u(()=>[r(m,{modelValue:l(e).name,"onUpdate:modelValue":a[0]||(a[0]=s=>l(e).name=s),placeholder:"\u8BF7\u8F93\u5165\u540D\u5B57"},null,8,["modelValue"])]),_:1}),r(i,{label:"\u73ED\u4E3B\u4EFB",prop:"teacher"},{default:u(()=>[r(m,{modelValue:l(e).teacher,"onUpdate:modelValue":a[1]||(a[1]=s=>l(e).teacher=s),placeholder:"\u8BF7\u8F93\u5165\u73ED\u4E3B\u4EFB"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[h,l(t)]])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/infra/demo/demo03/inner/components/Demo03GradeForm.vue"]])});export{A as __tla,_ as default};
