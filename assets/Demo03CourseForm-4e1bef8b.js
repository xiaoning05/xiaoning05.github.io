import{d as q,r as m,n as U,aR as $,o as h,c as D,w as F,a as d,q as j,e as a,b as e,h as g,F as E,E as R,L as A,y as B,B as G,i as L,C as M,ab as N,v as P,_ as X,__tla as Y}from"./index-b079f499.js";import{a as Z,__tla as z}from"./index-c9461f96.js";let b,H=Promise.all([(()=>{try{return Y}catch{}})(),(()=>{try{return z}catch{}})()]).then(async()=>{b=X(q({__name:"Demo03CourseForm",props:{studentId:{type:null,required:!0}},setup(y,{expose:w}){const c=y,n=m(!1),l=m([]),i=U({studentId:[{required:!0,message:"\u5B66\u751F\u7F16\u53F7\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],name:[{required:!0,message:"\u540D\u5B57\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],score:[{required:!0,message:"\u5206\u6570\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),p=m();$(()=>c.studentId,async t=>{if(l.value=[],t)try{n.value=!0,l.value=await Z(t)}finally{n.value=!1}},{immediate:!0});const x=()=>{const t={id:void 0,studentId:void 0,name:void 0,score:void 0};t.studentId=c.studentId,l.value.push(t)};return w({validate:()=>p.value.validate(),getData:()=>l.value}),(t,J)=>{const o=R,_=A,f=B,v=G,I=L,V=M,C=N,k=P;return h(),D(E,null,[F((h(),j(V,{ref_key:"formRef",ref:p,model:d(l),rules:d(i),"label-width":"0px","inline-message":!0},{default:a(()=>[e(I,{data:d(l),class:"-mt-10px"},{default:a(()=>[e(o,{label:"\u5E8F\u53F7",type:"index",width:"100"}),e(o,{label:"\u540D\u5B57","min-width":"150"},{default:a(({row:s,$index:u})=>[e(f,{prop:`${u}.name`,rules:d(i).name,class:"mb-0px!"},{default:a(()=>[e(_,{modelValue:s.name,"onUpdate:modelValue":r=>s.name=r,placeholder:"\u8BF7\u8F93\u5165\u540D\u5B57"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])]),_:1}),e(o,{label:"\u5206\u6570","min-width":"150"},{default:a(({row:s,$index:u})=>[e(f,{prop:`${u}.score`,rules:d(i).score,class:"mb-0px!"},{default:a(()=>[e(_,{modelValue:s.score,"onUpdate:modelValue":r=>s.score=r,placeholder:"\u8BF7\u8F93\u5165\u5206\u6570"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])]),_:1}),e(o,{align:"center",fixed:"right",label:"\u64CD\u4F5C",width:"60"},{default:a(({$index:s})=>[e(v,{onClick:u=>{return r=s,void l.value.splice(r,1);var r},link:""},{default:a(()=>[g("\u2014")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1},8,["model","rules"])),[[k,d(n)]]),e(C,{justify:"center",class:"mt-3"},{default:a(()=>[e(v,{onClick:x,round:""},{default:a(()=>[g("+ \u6DFB\u52A0\u5B66\u751F\u8BFE\u7A0B")]),_:1})]),_:1})],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/infra/demo/demo03/normal/components/Demo03CourseForm.vue"]])});export{H as __tla,b as default};
