import{d as k,r,aT as w,p as x,o as g,c as D,g as i,f as n,w as T,a as l,l as V,dV as C,F as U,C as b,Q as I,_ as N,__tla as j}from"./index-f0743f71.js";import{g as A,__tla as E}from"./index-cb25e840.js";import{d as F,h as G}from"./tree-02f455f9.js";let u,M=Promise.all([(()=>{try{return j}catch{}})(),(()=>{try{return E}catch{}})()]).then(async()=>{let o,c;o={class:"head-container"},c={class:"head-container"},u=N(k({name:"SystemUserDeptTree",__name:"DeptTree",emits:["node-click"],setup(P,{emit:p}){const a=r(""),t=r([]),d=r(),m=(e,s)=>!e||s.name.includes(e),_=async e=>{f("node-click",e)},f=p;return w(a,e=>{d.value.filter(e)}),x(async()=>{await(async()=>{const e=await A();t.value=[],t.value.push(...G(e))})()}),(e,s)=>{const h=b,y=I;return g(),D(U,null,[i("div",o,[n(y,{modelValue:l(a),"onUpdate:modelValue":s[0]||(s[0]=v=>V(a)?a.value=v:null),class:"mb-20px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0"},{prefix:T(()=>[n(h,{icon:"ep:search"})]),_:1},8,["modelValue"])]),i("div",c,[n(l(C),{ref_key:"treeRef",ref:d,data:l(t),"expand-on-click-node":!1,"filter-node-method":m,props:l(F),"default-expand-all":"","highlight-current":"","node-key":"id",onNodeClick:_},null,8,["data","props"])])],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/system/user/DeptTree.vue"]])});export{M as __tla,u as default};