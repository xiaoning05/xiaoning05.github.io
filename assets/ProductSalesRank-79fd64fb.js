import{d as x,r as d,n as w,p as b,o as _,c as P,b as a,e as r,a as n,w as k,q as A,F as R,dS as S,E as q,i as E,v as I,_ as D,__tla as N}from"./index-b079f499.js";import{E as X,__tla as Z}from"./el-skeleton-item-110d127b.js";import{_ as j,__tla as C}from"./Echart-9111e6ab.js";import{R as F,__tla as G}from"./rank-da083eb7.js";import{E as L,__tla as M}from"./index-3be78f60.js";let u,U=Promise.all([(()=>{try{return N}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return C}catch{}})(),(()=>{try{return G}catch{}})(),(()=>{try{return M}catch{}})()]).then(async()=>{u=D(x({name:"ProductSalesRank",__name:"ProductSalesRank",props:{queryParams:{type:null,required:!0}},setup(m,{expose:p}){const y=m,e=d(!1),o=d([]),t=w({dataset:{dimensions:["nickname","count"],source:[]},grid:{left:20,right:20,bottom:20,containLabel:!0},legend:{top:50},series:[{name:"\u4EA7\u54C1\u9500\u91CF\u6392\u884C",type:"bar"}],toolbox:{feature:{dataZoom:{yAxisIndex:!1},brush:{type:["lineX","clear"]},saveAsImage:{show:!0,name:"\u4EA7\u54C1\u9500\u91CF\u6392\u884C"}}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"value",name:"\u4EA7\u54C1\u9500\u91CF"},yAxis:{type:"category",name:"\u5458\u5DE5"}}),i=async()=>{e.value=!0;const l=await F.getProductSalesRank(y.queryParams);t.dataset&&t.dataset.source&&(t.dataset.source=S(l).reverse()),o.value=l,e.value=!1};return p({loadData:i}),b(()=>{i()}),(l,Y)=>{const h=j,g=X,c=L,s=q,f=E,v=I;return _(),P(R,null,[a(c,{shadow:"never"},{default:r(()=>[a(g,{loading:n(e),animated:""},{default:r(()=>[a(h,{height:500,options:n(t)},null,8,["options"])]),_:1},8,["loading"])]),_:1}),a(c,{shadow:"never",class:"mt-16px"},{default:r(()=>[k((_(),A(f,{data:n(o)},{default:r(()=>[a(s,{label:"\u516C\u53F8\u6392\u540D",align:"center",type:"index",width:"80"}),a(s,{label:"\u5458\u5DE5",align:"center",prop:"nickname","min-width":"200"}),a(s,{label:"\u90E8\u95E8",align:"center",prop:"deptName","min-width":"200"}),a(s,{label:"\u4EA7\u54C1\u9500\u91CF",align:"center",prop:"count","min-width":"200"})]),_:1},8,["data"])),[[v,n(e)]])]),_:1})],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/crm/bi/rank/ProductSalesRank.vue"]])});export{U as __tla,u as default};
