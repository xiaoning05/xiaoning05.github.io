import{d as x,r as m,n as b,p as v,o as u,c as C,b as a,e as r,a as o,w as k,q as A,F,dQ as P,E as R,i as q,v as E,__tla as I}from"./index-34f06ebd.js";import{E as j,__tla as D}from"./el-skeleton-item-b50e3883.js";import{_ as L,__tla as N}from"./Echart.vue_vue_type_script_setup_true_lang-70105d03.js";import{R as Q,__tla as X}from"./rank-bf9af374.js";import{E as Z,__tla as z}from"./index-460c50ff.js";let c,B=Promise.all([(()=>{try{return I}catch{}})(),(()=>{try{return D}catch{}})(),(()=>{try{return N}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return z}catch{}})()]).then(async()=>{c=x({name:"FollowCustomerCountRank",__name:"FollowCustomerCountRank",props:{queryParams:{}},setup(d,{expose:p}){const h=d,t=m(!1),l=m([]),e=b({dataset:{dimensions:["nickname","count"],source:[]},grid:{left:20,right:20,bottom:20,containLabel:!0},legend:{top:50},series:[{name:"\u8DDF\u8FDB\u5BA2\u6237\u6570\u6392\u884C",type:"bar"}],toolbox:{feature:{dataZoom:{yAxisIndex:!1},brush:{type:["lineX","clear"]},saveAsImage:{show:!0,name:"\u8DDF\u8FDB\u5BA2\u6237\u6570\u6392\u884C"}}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"value",name:"\u8DDF\u8FDB\u5BA2\u6237\u6570\uFF08\u4E2A\uFF09"},yAxis:{type:"category",name:"\u5458\u5DE5"}}),i=async()=>{t.value=!0;const n=await Q.getFollowCustomerCountRank(h.queryParams);e.dataset&&e.dataset.source&&(e.dataset.source=P(n).reverse()),l.value=n,t.value=!1};return p({loadData:i}),v(()=>{i()}),(n,G)=>{const y=L,g=j,_=Z,s=R,w=q,f=E;return u(),C(F,null,[a(_,{shadow:"never"},{default:r(()=>[a(g,{loading:o(t),animated:""},{default:r(()=>[a(y,{height:500,options:o(e)},null,8,["options"])]),_:1},8,["loading"])]),_:1}),a(_,{shadow:"never",class:"mt-16px"},{default:r(()=>[k((u(),A(w,{data:o(l)},{default:r(()=>[a(s,{label:"\u516C\u53F8\u6392\u540D",align:"center",type:"index",width:"80"}),a(s,{label:"\u5458\u5DE5",align:"center",prop:"nickname","min-width":"200"}),a(s,{label:"\u90E8\u95E8",align:"center",prop:"deptName","min-width":"200"}),a(s,{label:"\u8DDF\u8FDB\u5BA2\u6237\u6570\uFF08\u4E2A\uFF09",align:"center",prop:"count","min-width":"200"})]),_:1},8,["data"])),[[f,o(t)]])]),_:1})],64)}}})});export{c as _,B as __tla};
