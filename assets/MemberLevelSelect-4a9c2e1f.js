import{d as y,a2 as V,r as h,p as w,o as l,v as u,w as o,c as x,F as M,q as g,a as c,g as I,f as L,h as S,t as z,l as E,y as N,z as U,_ as j,__tla as k}from"./index-f0743f71.js";import{E as q,__tla as A}from"./el-avatar-74321f68.js";import{a as C,__tla as D}from"./index-d6aad378.js";let n,F=Promise.all([(()=>{try{return k}catch{}})(),(()=>{try{return A}catch{}})(),(()=>{try{return D}catch{}})()]).then(async()=>{let t;t={class:"flex items-center gap-x-8px"},n=j(y({name:"MemberLevelSelect",__name:"MemberLevelSelect",props:{modelValue:{type:Number,default:void 0}},emits:["update:modelValue"],setup(_,{emit:d}){const p=_,i=d,a=V({get:()=>p.modelValue,set(r){i("update:modelValue",r)}}),s=h([]);return w(()=>{(async()=>s.value=await C())()}),(r,m)=>{const v=q,f=N,b=U;return l(),u(b,{modelValue:c(a),"onUpdate:modelValue":m[0]||(m[0]=e=>E(a)?a.value=e:null),placeholder:"\u8BF7\u9009\u62E9\u7528\u6237\u7B49\u7EA7",clearable:"",class:"!w-240px"},{default:o(()=>[(l(!0),x(M,null,g(c(s),e=>(l(),u(f,{key:e.id,label:e.name,value:e.id},{default:o(()=>[I("span",t,[L(v,{src:e.icon,size:"small"},null,8,["src"]),S(" "+z(e.name),1)])]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/member/level/components/MemberLevelSelect.vue"]])});export{F as __tla,n as default};