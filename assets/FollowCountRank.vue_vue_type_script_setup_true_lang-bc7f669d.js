import{d as x,r as c,e as b,p as v,o as m,c as k,f as a,w as r,a as n,x as R,v as A,F,dR as P,G as C,H as I,I as q,__tla as E}from"./index-d2088aec.js";import{E as j,__tla as D}from"./el-skeleton-item-6864cdd4.js";import{_ as G,__tla as H}from"./Echart.vue_vue_type_script_setup_true_lang-092c17c1.js";import{R as L,__tla as N}from"./rank-0e416138.js";import{E as X,__tla as Z}from"./index-82efac34.js";let u,z=Promise.all([(()=>{try{return E}catch{}})(),(()=>{try{return D}catch{}})(),(()=>{try{return H}catch{}})(),(()=>{try{return N}catch{}})(),(()=>{try{return Z}catch{}})()]).then(async()=>{u=x({name:"FollowCountRank",__name:"FollowCountRank",props:{queryParams:{}},setup(d,{expose:p}){const h=d,t=c(!1),l=c([]),e=b({dataset:{dimensions:["nickname","count"],source:[]},grid:{left:20,right:20,bottom:20,containLabel:!0},legend:{top:50},series:[{name:"\u8DDF\u8FDB\u6B21\u6570\u6392\u884C",type:"bar"}],toolbox:{feature:{dataZoom:{yAxisIndex:!1},brush:{type:["lineX","clear"]},saveAsImage:{show:!0,name:"\u8DDF\u8FDB\u6B21\u6570\u6392\u884C"}}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"value",name:"\u8DDF\u8FDB\u6B21\u6570\uFF08\u6B21\uFF09"},yAxis:{type:"category",name:"\u5458\u5DE5"}}),i=async()=>{t.value=!0;const o=await L.getFollowCountRank(h.queryParams);e.dataset&&e.dataset.source&&(e.dataset.source=P(o).reverse()),l.value=o,t.value=!1};return p({loadData:i}),v(()=>{i()}),(o,B)=>{const y=G,g=j,_=X,s=C,w=I,f=q;return m(),k(F,null,[a(_,{shadow:"never"},{default:r(()=>[a(g,{loading:n(t),animated:""},{default:r(()=>[a(y,{height:500,options:n(e)},null,8,["options"])]),_:1},8,["loading"])]),_:1}),a(_,{shadow:"never",class:"mt-16px"},{default:r(()=>[R((m(),A(w,{data:n(l)},{default:r(()=>[a(s,{label:"\u516C\u53F8\u6392\u540D",align:"center",type:"index",width:"80"}),a(s,{label:"\u5458\u5DE5",align:"center",prop:"nickname","min-width":"200"}),a(s,{label:"\u90E8\u95E8",align:"center",prop:"deptName","min-width":"200"}),a(s,{label:"\u8DDF\u8FDB\u6B21\u6570\uFF08\u6B21\uFF09",align:"center",prop:"count","min-width":"200"})]),_:1},8,["data"])),[[f,n(t)]])]),_:1})],64)}}})});export{u as _,z as __tla};