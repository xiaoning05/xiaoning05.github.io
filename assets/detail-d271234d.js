import{_ as b,__tla as D}from"./ContentWrap-5acc4fb9.js";import{d as M,ah as E,K as w,r as m,p as A,o as x,v as P,w as t,f as e,a,h as l,t as s,_ as T,__tla as B}from"./index-f0743f71.js";import{E as I,a as L,__tla as O}from"./el-descriptions-item-73ac4081.js";import{_ as g,__tla as j}from"./DictTag-4f08045a.js";import{D as q,__tla as C}from"./dict-4a9940b3.js";import{f as n,__tla as G}from"./formatTime-e6df2ea5.js";import{g as K,__tla as N}from"./index-fcd21a2a.js";import{__tla as U}from"./index-a48a5540.js";import"./color-f5b6e279.js";let i,V=Promise.all([(()=>{try{return D}catch{}})(),(()=>{try{return B}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return j}catch{}})(),(()=>{try{return C}catch{}})(),(()=>{try{return G}catch{}})(),(()=>{try{return N}catch{}})(),(()=>{try{return U}catch{}})()]).then(async()=>{i=T(M({name:"BpmOALeaveDetail",__name:"detail",props:{id:E.number.def(void 0)},setup(c,{expose:f}){const{query:p}=w(),d=c,o=m(!1),_=m({}),y=p.id,u=async()=>{o.value=!0;try{_.value=await K(d.id||y)}finally{o.value=!1}};return f({open:u}),A(()=>{u()}),(X,Z)=>{const v=g,r=I,h=L,Y=b;return x(),P(Y,null,{default:t(()=>[e(h,{column:1,border:""},{default:t(()=>[e(r,{label:"\u8BF7\u5047\u7C7B\u578B"},{default:t(()=>[e(v,{type:a(q).BPM_OA_LEAVE_TYPE,value:a(_).type},null,8,["type","value"])]),_:1}),e(r,{label:"\u5F00\u59CB\u65F6\u95F4"},{default:t(()=>[l(s(a(n)(a(_).startTime,"YYYY-MM-DD")),1)]),_:1}),e(r,{label:"\u7ED3\u675F\u65F6\u95F4"},{default:t(()=>[l(s(a(n)(a(_).endTime,"YYYY-MM-DD")),1)]),_:1}),e(r,{label:"\u539F\u56E0"},{default:t(()=>[l(s(a(_).reason),1)]),_:1})]),_:1})]),_:1})}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/bpm/oa/leave/detail.vue"]])});export{V as __tla,i as default};
