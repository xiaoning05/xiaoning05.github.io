import{_ as E,__tla as U}from"./Dialog-8f786edd.js";import{d as D,r as a,o as I,v as b,w as l,f as s,a as u,l as f,h as v,c6 as A,D as G,j as M,k as N,_ as P,__tla as X}from"./index-f0743f71.js";import{g as Y,__tla as Z}from"./index-5f468446.js";let h,q=Promise.all([(()=>{try{return U}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return Z}catch{}})()]).then(async()=>{h=P(D({__name:"OwerSelect",emits:["confirmOwerSelect"],setup(z,{expose:y,emit:w}){const r=a(!1),k=a("\u9009\u62E9"),i=a(!1),V=a(""),O=a(["\u5F85\u9009\u62E9","\u5DF2\u9009\u62E9"]),x=a({key:"id",label:"nickname"}),S=w,n=a([]),t=a([]),C=a([]);y({open:async(o,e)=>{if(r.value=!0,V.value=o,e){i.value=!0;try{e.forEach(c=>{t.value.push(c.id)})}finally{i.value=!1}}C.value=[],n.value=await Y()}});const d=()=>{const o=a([]);n.value.forEach(e=>{t.value.indexOf(e.id)>-1&&o.value.push(e)}),S("confirmOwerSelect",o),r.value=!1,t.value=[]};return(o,e)=>{const c=A,m=G,p=M,g=N,j=E;return I(),b(j,{title:u(k),modelValue:u(r),"onUpdate:modelValue":e[1]||(e[1]=_=>f(r)?r.value=_:null),width:"600px"},{default:l(()=>[s(c,{modelValue:u(t),"onUpdate:modelValue":e[0]||(e[0]=_=>f(t)?t.value=_:null),data:u(n),titles:u(O),props:u(x),"right-default-checked":[1]},null,8,["modelValue","data","titles","props"]),s(g,{justify:"end"},{default:l(()=>[s(p,{span:4},{default:l(()=>[s(m,{type:"primary",onClick:d},{default:l(()=>[v("\u786E\u8BA4")]),_:1})]),_:1}),s(p,{span:4},{default:l(()=>[s(m,{type:"primary",onClick:d},{default:l(()=>[v("\u53D6\u6D88")]),_:1})]),_:1})]),_:1})]),_:1},8,["title","modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/crm/contact/OwerSelect.vue"]])});export{q as __tla,h as default};