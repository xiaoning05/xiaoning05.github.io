import{d as x,r as _,n as C,o as c,q as f,e as t,b as s,a as e,h as v,w as F,j as U,L as k,y as j,C as q,B,v as D,_ as E,__tla as G}from"./index-aaa5adb3.js";import{_ as L,__tla as M}from"./Dialog-9a73a39c.js";import{a as N,__tla as R}from"./index-380f2c90.js";import{u as S,__tla as X}from"./useMessage-873da1e2.js";let y,Y=Promise.all([(()=>{try{return G}catch{}})(),(()=>{try{return M}catch{}})(),(()=>{try{return R}catch{}})(),(()=>{try{return X}catch{}})()]).then(async()=>{y=E(x({name:"SystemAreaForm",__name:"AreaForm",setup(Z,{expose:V}){const h=S(),u=_(!1),o=_(!1),a=_({ip:"",result:void 0}),I=C({ip:[{required:!0,message:"IP \u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),d=_();V({open:async()=>{u.value=!0,w()}});const b=async()=>{if(d&&await d.value.validate()){o.value=!0;try{a.value.result=await N(a.value.ip.trim()),h.success("\u67E5\u8BE2\u6210\u529F")}finally{o.value=!1}}},w=()=>{var i;a.value={ip:"",result:void 0},(i=d.value)==null||i.resetFields()};return(i,l)=>{const m=k,n=j,P=q,p=B,A=L,g=D;return c(),f(A,{modelValue:e(u),"onUpdate:modelValue":l[3]||(l[3]=r=>U(u)?u.value=r:null),title:"IP \u67E5\u8BE2"},{footer:t(()=>[s(p,{disabled:e(o),type:"primary",onClick:b},{default:t(()=>[v("\u786E \u5B9A")]),_:1},8,["disabled"]),s(p,{onClick:l[2]||(l[2]=r=>u.value=!1)},{default:t(()=>[v("\u53D6 \u6D88")]),_:1})]),default:t(()=>[F((c(),f(P,{ref_key:"formRef",ref:d,model:e(a),rules:e(I),"label-width":"80px"},{default:t(()=>[s(n,{label:"IP",prop:"ip"},{default:t(()=>[s(m,{modelValue:e(a).ip,"onUpdate:modelValue":l[0]||(l[0]=r=>e(a).ip=r),placeholder:"\u8BF7\u8F93\u5165 IP \u5730\u5740"},null,8,["modelValue"])]),_:1}),s(n,{label:"\u5730\u5740",prop:"result"},{default:t(()=>[s(m,{modelValue:e(a).result,"onUpdate:modelValue":l[1]||(l[1]=r=>e(a).result=r),placeholder:"\u5C55\u793A\u67E5\u8BE2 IP \u7ED3\u679C",readonly:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[g,e(o)]])]),_:1},8,["modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/system/area/AreaForm.vue"]])});export{Y as __tla,y as default};
