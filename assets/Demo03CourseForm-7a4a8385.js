import{d as D,r as m,e as U,aT as $,o as h,c as q,x as F,a as d,v as j,w as a,f as e,h as g,F as A,H as G,Q as E,A as H,D as J,I as M,G as N,k as P,J as Q,_ as R,__tla as T}from"./index-f0743f71.js";import{a as X,__tla as Y}from"./index-e7f382c2.js";let x,Z=Promise.all([(()=>{try{return T}catch{}})(),(()=>{try{return Y}catch{}})()]).then(async()=>{x=R(D({__name:"Demo03CourseForm",props:{studentId:{type:null,required:!0}},setup(w,{expose:b}){const c=w,n=m(!1),l=m([]),i=U({studentId:[{required:!0,message:"\u5B66\u751F\u7F16\u53F7\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],name:[{required:!0,message:"\u540D\u5B57\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],score:[{required:!0,message:"\u5206\u6570\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),p=m();$(()=>c.studentId,async t=>{if(l.value=[],t)try{n.value=!0,l.value=await X(t)}finally{n.value=!1}},{immediate:!0});const y=()=>{const t={id:void 0,studentId:void 0,name:void 0,score:void 0};t.studentId=c.studentId,l.value.push(t)};return b({validate:()=>p.value.validate(),getData:()=>l.value}),(t,z)=>{const o=G,_=E,f=H,v=J,I=M,V=N,k=P,C=Q;return h(),q(A,null,[F((h(),j(V,{ref_key:"formRef",ref:p,model:d(l),rules:d(i),"label-width":"0px","inline-message":!0},{default:a(()=>[e(I,{data:d(l),class:"-mt-10px"},{default:a(()=>[e(o,{label:"\u5E8F\u53F7",type:"index",width:"100"}),e(o,{label:"\u540D\u5B57","min-width":"150"},{default:a(({row:s,$index:u})=>[e(f,{prop:`${u}.name`,rules:d(i).name,class:"mb-0px!"},{default:a(()=>[e(_,{modelValue:s.name,"onUpdate:modelValue":r=>s.name=r,placeholder:"\u8BF7\u8F93\u5165\u540D\u5B57"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])]),_:1}),e(o,{label:"\u5206\u6570","min-width":"150"},{default:a(({row:s,$index:u})=>[e(f,{prop:`${u}.score`,rules:d(i).score,class:"mb-0px!"},{default:a(()=>[e(_,{modelValue:s.score,"onUpdate:modelValue":r=>s.score=r,placeholder:"\u8BF7\u8F93\u5165\u5206\u6570"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])]),_:1}),e(o,{align:"center",fixed:"right",label:"\u64CD\u4F5C",width:"60"},{default:a(({$index:s})=>[e(v,{onClick:u=>{return r=s,void l.value.splice(r,1);var r},link:""},{default:a(()=>[g("\u2014")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1},8,["model","rules"])),[[C,d(n)]]),e(k,{justify:"center",class:"mt-3"},{default:a(()=>[e(v,{onClick:y,round:""},{default:a(()=>[g("+ \u6DFB\u52A0\u5B66\u751F\u8BFE\u7A0B")]),_:1})]),_:1})],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/infra/demo/demo03/inner/components/Demo03CourseForm.vue"]])});export{Z as __tla,x as default};
