import{_ as L,__tla as H}from"./Echart-48366070.js";import{k as P,d as N,r as Q,n as g,o as F,c as W,b as e,e as t,a as s,f as i,N as l,t as v,F as X,P as Y,A as Z,a9 as B,ab as J,c6 as p,_ as K,__tla as R}from"./index-aaa5adb3.js";import{E as V,__tla as aa}from"./el-skeleton-item-22d4a927.js";import{_ as ea,__tla as sa}from"./CountTo-577d8c95.js";import{E as ta,__tla as ia}from"./index-5b7dcbf1.js";let S,na=Promise.all([(()=>{try{return H}catch{}})(),(()=>{try{return R}catch{}})(),(()=>{try{return aa}catch{}})(),(()=>{try{return sa}catch{}})(),(()=>{try{return ia}catch{}})()]).then(async()=>{const{t:a}=P(),D={title:{text:a("analysis.monthlySales"),left:"center"},xAxis:{data:[a("analysis.january"),a("analysis.february"),a("analysis.march"),a("analysis.april"),a("analysis.may"),a("analysis.june"),a("analysis.july"),a("analysis.august"),a("analysis.september"),a("analysis.october"),a("analysis.november"),a("analysis.december")],boundaryGap:!1,axisTick:{show:!1}},grid:{left:20,right:20,bottom:20,top:80,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1}},legend:{data:[a("analysis.estimate"),a("analysis.actual")],top:50},series:[{name:a("analysis.estimate"),smooth:!0,type:"line",data:[100,120,161,134,105,160,165,114,163,185,118,123],animationDuration:2800,animationEasing:"cubicInOut"},{name:a("analysis.actual"),smooth:!0,type:"line",itemStyle:{},data:[120,82,91,154,162,140,145,250,134,56,99,123],animationDuration:2800,animationEasing:"quadraticOut"}]},M={title:{text:a("analysis.userAccessSource"),left:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:[a("analysis.directAccess"),a("analysis.mailMarketing"),a("analysis.allianceAdvertising"),a("analysis.videoAdvertising"),a("analysis.searchEngines")]},series:[{name:a("analysis.userAccessSource"),type:"pie",radius:"55%",center:["50%","60%"],data:[{value:335,name:a("analysis.directAccess")},{value:310,name:a("analysis.mailMarketing")},{value:234,name:a("analysis.allianceAdvertising")},{value:135,name:a("analysis.videoAdvertising")},{value:1548,name:a("analysis.searchEngines")}]}]},z={title:{text:a("analysis.weeklyUserActivity"),left:"center"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:50,right:20,bottom:20},xAxis:{type:"category",data:[a("analysis.monday"),a("analysis.tuesday"),a("analysis.wednesday"),a("analysis.thursday"),a("analysis.friday"),a("analysis.saturday"),a("analysis.sunday")],axisTick:{alignWithLabel:!0}},yAxis:{type:"value"},series:[{name:a("analysis.activeQuantity"),data:[13253,34235,26321,12340,24643,1322,1324],type:"bar"}]};a("workplace.personal"),a("workplace.team"),a("workplace.quote"),a("workplace.contribution"),a("workplace.hot"),a("workplace.yield"),a("workplace.follow"),a("workplace.index"),a("workplace.personal"),a("workplace.team");let k,A,j,$,E;k={class:"flex flex-col justify-between"},A={class:"flex flex-col justify-between"},j={class:"flex flex-col justify-between"},$={class:"flex flex-col justify-between"},E=N({name:"Home2",__name:"Index2",setup(la){const{t:r}=P(),d=Q(!0),{getPrefixCls:q}=Y(),n=q("panel"),f=g(M);let I=g({users:0,messages:0,moneys:0,shoppings:0});const T=async()=>{I=Object.assign(I,{users:102400,messages:81212,moneys:9280,shoppings:13600})},U=async()=>{const m=[{value:335,name:"analysis.directAccess"},{value:310,name:"analysis.mailMarketing"},{value:234,name:"analysis.allianceAdvertising"},{value:135,name:"analysis.videoAdvertising"},{value:1548,name:"analysis.searchEngines"}];p(f,"legend.data",m.map(o=>r(o.name))),p(f,"series.data",m)},h=g(z),C=async()=>{const m=[{value:13253,name:"analysis.monday"},{value:34235,name:"analysis.tuesday"},{value:26321,name:"analysis.wednesday"},{value:12340,name:"analysis.thursday"},{value:24643,name:"analysis.friday"},{value:1322,name:"analysis.saturday"},{value:1324,name:"analysis.sunday"}];p(h,"xAxis.data",m.map(o=>r(o.name))),p(h,"series",[{name:r("analysis.activeQuantity"),data:m.map(o=>o.value),type:"bar"}])},b=g(D),G=async()=>{const m=[{estimate:100,actual:120,name:"analysis.january"},{estimate:120,actual:82,name:"analysis.february"},{estimate:161,actual:91,name:"analysis.march"},{estimate:134,actual:154,name:"analysis.april"},{estimate:105,actual:162,name:"analysis.may"},{estimate:160,actual:140,name:"analysis.june"},{estimate:165,actual:145,name:"analysis.july"},{estimate:114,actual:250,name:"analysis.august"},{estimate:163,actual:134,name:"analysis.september"},{estimate:185,actual:56,name:"analysis.october"},{estimate:118,actual:99,name:"analysis.november"},{estimate:123,actual:123,name:"analysis.december"}];p(b,"xAxis.data",m.map(o=>r(o.name))),p(b,"series",[{name:r("analysis.estimate"),smooth:!0,type:"line",data:m.map(o=>o.estimate),animationDuration:2800,animationEasing:"cubicInOut"},{name:r("analysis.actual"),smooth:!0,type:"line",itemStyle:{},data:m.map(o=>o.actual),animationDuration:2800,animationEasing:"quadraticOut"}])};return(async()=>(await Promise.all([T(),U(),C(),G()]),d.value=!1))(),(m,o)=>{const x=Z,_=ea,c=V,u=ta,y=B,O=J,w=L;return F(),W(X,null,[e(O,{class:l(s(n)),gutter:20,justify:"space-between"},{default:t(()=>[e(y,{lg:6,md:12,sm:12,xl:6,xs:24},{default:t(()=>[e(u,{class:"mb-20px",shadow:"hover"},{default:t(()=>[e(c,{loading:s(d),rows:2,animated:""},{default:t(()=>[i("div",{class:l(`${s(n)}__item flex justify-between`)},[i("div",null,[i("div",{class:l(`${s(n)}__item--icon ${s(n)}__item--peoples p-16px inline-block rounded-6px`)},[e(x,{size:40,icon:"svg-icon:peoples"})],2)]),i("div",k,[i("div",{class:l(`${s(n)}__item--text text-16px text-gray-500 text-right`)},v(s(r)("analysis.newUser")),3),e(_,{duration:2600,"end-val":102400,"start-val":0,class:"text-right text-20px font-700"})])],2)]),_:1},8,["loading"])]),_:1})]),_:1}),e(y,{lg:6,md:12,sm:12,xl:6,xs:24},{default:t(()=>[e(u,{class:"mb-20px",shadow:"hover"},{default:t(()=>[e(c,{loading:s(d),rows:2,animated:""},{default:t(()=>[i("div",{class:l(`${s(n)}__item flex justify-between`)},[i("div",null,[i("div",{class:l(`${s(n)}__item--icon ${s(n)}__item--message p-16px inline-block rounded-6px`)},[e(x,{size:40,icon:"svg-icon:message"})],2)]),i("div",A,[i("div",{class:l(`${s(n)}__item--text text-16px text-gray-500 text-right`)},v(s(r)("analysis.unreadInformation")),3),e(_,{duration:2600,"end-val":81212,"start-val":0,class:"text-right text-20px font-700"})])],2)]),_:1},8,["loading"])]),_:1})]),_:1}),e(y,{lg:6,md:12,sm:12,xl:6,xs:24},{default:t(()=>[e(u,{class:"mb-20px",shadow:"hover"},{default:t(()=>[e(c,{loading:s(d),rows:2,animated:""},{default:t(()=>[i("div",{class:l(`${s(n)}__item flex justify-between`)},[i("div",null,[i("div",{class:l(`${s(n)}__item--icon ${s(n)}__item--money p-16px inline-block rounded-6px`)},[e(x,{size:40,icon:"svg-icon:money"})],2)]),i("div",j,[i("div",{class:l(`${s(n)}__item--text text-16px text-gray-500 text-right`)},v(s(r)("analysis.transactionAmount")),3),e(_,{duration:2600,"end-val":9280,"start-val":0,class:"text-right text-20px font-700"})])],2)]),_:1},8,["loading"])]),_:1})]),_:1}),e(y,{lg:6,md:12,sm:12,xl:6,xs:24},{default:t(()=>[e(u,{class:"mb-20px",shadow:"hover"},{default:t(()=>[e(c,{loading:s(d),rows:2,animated:""},{default:t(()=>[i("div",{class:l(`${s(n)}__item flex justify-between`)},[i("div",null,[i("div",{class:l(`${s(n)}__item--icon ${s(n)}__item--shopping p-16px inline-block rounded-6px`)},[e(x,{size:40,icon:"svg-icon:shopping"})],2)]),i("div",$,[i("div",{class:l(`${s(n)}__item--text text-16px text-gray-500 text-right`)},v(s(r)("analysis.totalShopping")),3),e(_,{duration:2600,"end-val":13600,"start-val":0,class:"text-right text-20px font-700"})])],2)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["class"]),e(O,{gutter:20,justify:"space-between"},{default:t(()=>[e(y,{lg:10,md:24,sm:24,xl:10,xs:24},{default:t(()=>[e(u,{class:"mb-20px",shadow:"hover"},{default:t(()=>[e(c,{loading:s(d),animated:""},{default:t(()=>[e(w,{height:300,options:s(f)},null,8,["options"])]),_:1},8,["loading"])]),_:1})]),_:1}),e(y,{lg:14,md:24,sm:24,xl:14,xs:24},{default:t(()=>[e(u,{class:"mb-20px",shadow:"hover"},{default:t(()=>[e(c,{loading:s(d),animated:""},{default:t(()=>[e(w,{height:300,options:s(h)},null,8,["options"])]),_:1},8,["loading"])]),_:1})]),_:1}),e(y,{span:24},{default:t(()=>[e(u,{class:"mb-20px",shadow:"hover"},{default:t(()=>[e(c,{loading:s(d),rows:4,animated:""},{default:t(()=>[e(w,{height:350,options:s(b)},null,8,["options"])]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})],64)}}}),S=K(E,[["__scopeId","data-v-3c1fb52a"],["__file","E:/newCode/GYZX-UI-ADMIN/src/views/Home/Index2.vue"]])});export{na as __tla,S as default};
