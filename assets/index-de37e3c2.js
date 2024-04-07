import{ao as C,d as k,r as z,n as w,p as E,o as I,c as L,b as t,e as o,h as i,t as n,a as r,F as R,a9 as B,ab as N,aS as O,_ as P,__tla as T}from"./index-aaa5adb3.js";import{_ as U,__tla as X}from"./Echart-48366070.js";import{E as j,a as G,__tla as K}from"./el-descriptions-item-815d7c36.js";import{_ as M,__tla as W}from"./index-6683a38c.js";import{E as Y,__tla as Z}from"./index-5b7dcbf1.js";let v,q=Promise.all([(()=>{try{return T}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return K}catch{}})(),(()=>{try{return W}catch{}})(),(()=>{try{return Z}catch{}})()]).then(async()=>{let f;f=()=>C.get({url:"/infra/redis/get-monitor-info"}),v=P(k({__name:"index",setup(H){const l=z(),_=w({title:{text:"\u5185\u5B58\u4F7F\u7528\u60C5\u51B5",left:"center",show:!0,offsetCenter:[0,"20%"],color:"yellow",fontSize:20},toolbox:{show:!1,feature:{restore:{show:!0},saveAsImage:{show:!0}}},series:[{name:"\u5CF0\u503C",type:"gauge",min:0,max:50,splitNumber:10,color:"#F5C74E",radius:"85%",center:["50%","50%"],startAngle:225,endAngle:-45,axisLine:{lineStyle:{color:[[.2,"#7FFF00"],[.8,"#00FFFF"],[1,"#FF0000"]],width:10}},axisTick:{length:5,lineStyle:{color:"#76D9D7"}},splitLine:{length:20,lineStyle:{color:"#76D9D7"}},axisLabel:{color:"#76D9D7",distance:15,fontSize:15},pointer:{width:7,show:!0},detail:{textStyle:{fontWeight:"normal",fontSize:15,color:"#FFFFFF"},valueAnimation:!0},progress:{show:!0}}]}),m=w({title:{text:"\u547D\u4EE4\u7EDF\u8BA1",left:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{type:"scroll",orient:"vertical",right:30,top:10,bottom:20,data:[],textStyle:{color:"#a1a1a1"}},series:[{name:"\u547D\u4EE4",type:"pie",radius:[20,120],center:["40%","60%"],data:[],roseType:"radius",label:{show:!0},emphasis:{label:{show:!0},itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}),F=async()=>{_.series[0].data=[];try{const u=await f();l.value=u;const h=[],d=[];u.commandStats.forEach(s=>{h.push({name:s.command,value:s.calls}),d.push(s.command)}),m.legend.data=d,m.series[0].data=h}catch{}},x=async()=>{try{const u=await f();l.value=u,_.series[0].detail={show:!0,offsetCenter:[0,"50%"],color:"auto",fontSize:30,formatter:l.value.info.used_memory_human},_.series[0].data[0]={value:l.value.info.used_memory_human,name:"\u5185\u5B58\u6D88\u8017"},console.log(l.value.info),_.tooltip={formatter:"{b} <br/>{a} : "+l.value.info.used_memory_human}}catch{}};return E(()=>{(async()=>{const u=await f();l.value=u})(),F(),x()}),(u,h)=>{const d=M,s=j,S=G,p=Y,b=B,y=U,D=N,A=O;return I(),L(R,null,[t(d,{title:"Redis \u7F13\u5B58",url:"https://doc.iocoder.cn/redis-cache/"}),t(d,{title:"\u672C\u5730\u7F13\u5B58",url:"https://doc.iocoder.cn/local-cache/"}),t(A,{height:"calc(100vh - 88px - 40px - 50px)"},{default:o(()=>[t(D,null,{default:o(()=>[t(b,{span:24,class:"card-box",shadow:"hover"},{default:o(()=>[t(p,null,{default:o(()=>[t(S,{title:"\u57FA\u672C\u4FE1\u606F",column:6,border:""},{default:o(()=>[t(s,{label:"Redis\u7248\u672C :"},{default:o(()=>{var e,a;return[i(n((a=(e=r(l))==null?void 0:e.info)==null?void 0:a.redis_version),1)]}),_:1}),t(s,{label:"\u8FD0\u884C\u6A21\u5F0F :"},{default:o(()=>{var e,a;return[i(n(((a=(e=r(l))==null?void 0:e.info)==null?void 0:a.redis_mode)=="standalone"?"\u5355\u673A":"\u96C6\u7FA4"),1)]}),_:1}),t(s,{label:"\u7AEF\u53E3 :"},{default:o(()=>{var e,a;return[i(n((a=(e=r(l))==null?void 0:e.info)==null?void 0:a.tcp_port),1)]}),_:1}),t(s,{label:"\u5BA2\u6237\u7AEF\u6570 :"},{default:o(()=>{var e,a;return[i(n((a=(e=r(l))==null?void 0:e.info)==null?void 0:a.connected_clients),1)]}),_:1}),t(s,{label:"\u8FD0\u884C\u65F6\u95F4(\u5929) :"},{default:o(()=>{var e,a;return[i(n((a=(e=r(l))==null?void 0:e.info)==null?void 0:a.uptime_in_days),1)]}),_:1}),t(s,{label:"\u4F7F\u7528\u5185\u5B58 :"},{default:o(()=>{var e,a;return[i(n((a=(e=r(l))==null?void 0:e.info)==null?void 0:a.used_memory_human),1)]}),_:1}),t(s,{label:"\u4F7F\u7528CPU :"},{default:o(()=>{var e,a,c;return[i(n((e=r(l))!=null&&e.info?parseFloat((c=(a=r(l))==null?void 0:a.info)==null?void 0:c.used_cpu_user_children).toFixed(2):""),1)]}),_:1}),t(s,{label:"\u5185\u5B58\u914D\u7F6E :"},{default:o(()=>{var e,a;return[i(n((a=(e=r(l))==null?void 0:e.info)==null?void 0:a.maxmemory_human),1)]}),_:1}),t(s,{label:"AOF\u662F\u5426\u5F00\u542F :"},{default:o(()=>{var e,a;return[i(n(((a=(e=r(l))==null?void 0:e.info)==null?void 0:a.aof_enabled)=="0"?"\u5426":"\u662F"),1)]}),_:1}),t(s,{label:"RDB\u662F\u5426\u6210\u529F :"},{default:o(()=>{var e,a;return[i(n((a=(e=r(l))==null?void 0:e.info)==null?void 0:a.rdb_last_bgsave_status),1)]}),_:1}),t(s,{label:"Key\u6570\u91CF :"},{default:o(()=>{var e;return[i(n((e=r(l))==null?void 0:e.dbSize),1)]}),_:1}),t(s,{label:"\u7F51\u7EDC\u5165\u53E3/\u51FA\u53E3 :"},{default:o(()=>{var e,a,c,g;return[i(n((a=(e=r(l))==null?void 0:e.info)==null?void 0:a.instantaneous_input_kbps)+"kps/ "+n((g=(c=r(l))==null?void 0:c.info)==null?void 0:g.instantaneous_output_kbps)+"kps ",1)]}),_:1})]),_:1})]),_:1})]),_:1}),t(b,{span:12,class:"mt-3"},{default:o(()=>[t(p,{gutter:12,shadow:"hover"},{default:o(()=>[t(y,{options:r(m),height:420},null,8,["options"])]),_:1})]),_:1}),t(b,{span:12,class:"mt-3"},{default:o(()=>[t(p,{class:"ml-3",gutter:12,shadow:"hover"},{default:o(()=>[t(y,{options:r(_),height:420},null,8,["options"])]),_:1})]),_:1})]),_:1})]),_:1})],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/infra/redis/index.vue"]])});export{q as __tla,v as default};