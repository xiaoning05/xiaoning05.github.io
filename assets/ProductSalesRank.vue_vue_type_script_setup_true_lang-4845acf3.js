import{d as b,r as c,n as v,p as w,o as d,c as P,b as a,e as r,a as n,w as k,q as A,F as R,dQ as q,E,i as S,v as I,__tla as j}from"./index-34f06ebd.js";import{E as D,__tla as F}from"./el-skeleton-item-b50e3883.js";import{_ as L,__tla as N}from"./Echart.vue_vue_type_script_setup_true_lang-70105d03.js";import{R as Q,__tla as X}from"./rank-bf9af374.js";import{E as Z,__tla as z}from"./index-460c50ff.js";let m,B=Promise.all([(()=>{try{return j}catch{}})(),(()=>{try{return F}catch{}})(),(()=>{try{return N}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return z}catch{}})()]).then(async()=>{m=b({name:"ProductSalesRank",__name:"ProductSalesRank",props:{queryParams:{}},setup(u,{expose:p}){const y=u,t=c(!1),l=c([]),e=v({dataset:{dimensions:["nickname","count"],source:[]},grid:{left:20,right:20,bottom:20,containLabel:!0},legend:{top:50},series:[{name:"\u4EA7\u54C1\u9500\u91CF\u6392\u884C",type:"bar"}],toolbox:{feature:{dataZoom:{yAxisIndex:!1},brush:{type:["lineX","clear"]},saveAsImage:{show:!0,name:"\u4EA7\u54C1\u9500\u91CF\u6392\u884C"}}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"value",name:"\u4EA7\u54C1\u9500\u91CF"},yAxis:{type:"category",name:"\u5458\u5DE5"}}),i=async()=>{t.value=!0;const o=await Q.getProductSalesRank(y.queryParams);e.dataset&&e.dataset.source&&(e.dataset.source=q(o).reverse()),l.value=o,t.value=!1};return p({loadData:i}),w(()=>{i()}),(o,C)=>{const h=L,g=D,_=Z,s=E,f=S,x=I;return d(),P(R,null,[a(_,{shadow:"never"},{default:r(()=>[a(g,{loading:n(t),animated:""},{default:r(()=>[a(h,{height:500,options:n(e)},null,8,["options"])]),_:1},8,["loading"])]),_:1}),a(_,{shadow:"never",class:"mt-16px"},{default:r(()=>[k((d(),A(f,{data:n(l)},{default:r(()=>[a(s,{label:"\u516C\u53F8\u6392\u540D",align:"center",type:"index",width:"80"}),a(s,{label:"\u5458\u5DE5",align:"center",prop:"nickname","min-width":"200"}),a(s,{label:"\u90E8\u95E8",align:"center",prop:"deptName","min-width":"200"}),a(s,{label:"\u4EA7\u54C1\u9500\u91CF",align:"center",prop:"count","min-width":"200"})]),_:1},8,["data"])),[[x,n(t)]])]),_:1})],64)}}})});export{m as _,B as __tla};
