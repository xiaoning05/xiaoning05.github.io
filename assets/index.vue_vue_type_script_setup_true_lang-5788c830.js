import{d as C,aW as w,es as V,ag as D,o as p,c as j,f as e,w as a,h as I,g as n,a as s,v as $,a4 as q,aJ as z,F as A,as as E,_ as F,aA as J,C as P,__tla as R}from"./index-d2088aec.js";import{E as W,__tla as B}from"./el-text-6fbecde4.js";import{V as G,__tla as H}from"./vuedraggable.umd-722d2117.js";import{u as K,__tla as L}from"./util-7d23a6c6.js";let _,M=Promise.all([(()=>{try{return R}catch{}})(),(()=>{try{return B}catch{}})(),(()=>{try{return H}catch{}})(),(()=>{try{return L}catch{}})()]).then(async()=>{let o,d,m;o={class:"mb-4px flex flex-col gap-4px border border-gray-2 border-rounded rounded border-solid p-8px"},d={class:"m--8px m-b-4px flex flex-row items-center justify-between bg-gray-1 p-8px"},m=n("span",null,"\u6DFB\u52A0",-1),_=C({name:"Draggable",__name:"index",props:{modelValue:w().isRequired,emptyItem:V().def({}),limit:D.number.def(0)},emits:["update:modelValue"],setup(t,{emit:f}){const c=t,x=f,{formData:l}=K(c.modelValue,x),b=()=>l.value.push(E(c.emptyItem||{}));return(y,N)=>{const g=W,r=F,i=J,h=P;return p(),j(A,null,[e(g,{type:"info",size:"small"},{default:a(()=>[I(" \u62D6\u52A8\u5DE6\u4E0A\u89D2\u7684\u5C0F\u5706\u70B9\u53EF\u5BF9\u5176\u6392\u5E8F ")]),_:1}),e(s(G),{list:s(l),"force-fallback":!0,animation:200,handle:".drag-icon",class:"m-t-8px","item-key":"index"},{item:a(({element:k,index:u})=>[n("div",o,[n("div",d,[e(i,{content:"\u62D6\u52A8\u6392\u5E8F"},{default:a(()=>[e(r,{icon:"ic:round-drag-indicator",class:"drag-icon cursor-move"})]),_:1}),e(i,{content:"\u5220\u9664"},{default:a(()=>[s(l).length>1?(p(),$(r,{key:0,icon:"ep:delete",class:"cursor-pointer text-red-5",onClick:O=>(v=>l.value.splice(v,1))(u)},null,8,["onClick"])):q("",!0)]),_:2},1024)]),z(y.$slots,"default",{element:k,index:u})])]),_:3},8,["list"]),e(i,{disabled:t.limit<1,content:`\u6700\u591A\u6DFB\u52A0${t.limit}\u4E2A`},{default:a(()=>[e(h,{type:"primary",plain:"",class:"m-t-4px w-full",disabled:t.limit>0&&s(l).length>=t.limit,onClick:b},{default:a(()=>[e(r,{icon:"ep:plus"}),m]),_:1},8,["disabled"])]),_:1},8,["disabled","content"])],64)}}})});export{_,M as __tla};