import{d as z,ah as m,r as F,x as G,o as l,v as u,w as s,J,f as r,g as c,c as e,q as X,h as _,t as o,a as i,ap as Y,a5 as n,F as Z,C as H,D as K,al as Q,j as V,_ as W,__tla as $}from"./index-f0743f71.js";import{E as tt,a as at,__tla as lt}from"./el-timeline-item-74421bbe.js";import{_ as st,__tla as rt}from"./DictTag-4f08045a.js";import{f as L,a as et,__tla as nt}from"./formatTime-e6df2ea5.js";import{D as ot,__tla as _t}from"./dict-4a9940b3.js";import it,{__tla as ct}from"./ProcessInstanceChildrenTaskList-a70de5f0.js";import{E as mt,__tla as ut}from"./index-a48a5540.js";import"./color-f5b6e279.js";import{__tla as pt}from"./el-drawer-850009b4.js";import{__tla as ft}from"./TaskSubSignDialogForm-07105f12.js";import{__tla as yt}from"./Dialog-8f786edd.js";import{__tla as dt}from"./index-4fe9b481.js";import{__tla as ht}from"./useMessage-75a00a06.js";let M,gt=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return lt}catch{}})(),(()=>{try{return rt}catch{}})(),(()=>{try{return nt}catch{}})(),(()=>{try{return _t}catch{}})(),(()=>{try{return ct}catch{}})(),(()=>{try{return ut}catch{}})(),(()=>{try{return pt}catch{}})(),(()=>{try{return ft}catch{}})(),(()=>{try{return yt}catch{}})(),(()=>{try{return dt}catch{}})(),(()=>{try{return ht}catch{}})()]).then(async()=>{let p,f,y,d,h,g,k,b,w,T,I;p=c("span",{class:"el-icon-picture-outline"},"\u5BA1\u6279\u8BB0\u5F55",-1),f={class:"block"},y={style:{"font-weight":"700"}},d={key:0,style:{"margin-right":"30px","font-weight":"normal"}},h={key:1,style:{"font-weight":"normal"}},g={style:{"font-weight":"normal",color:"#8a909c"}},k={key:2,style:{"margin-left":"30px","font-weight":"normal"}},b={key:3,style:{"font-weight":"normal",color:"#8a909c"}},w={key:4,style:{"margin-left":"30px","font-weight":"normal"}},T={key:5,style:{"font-weight":"normal",color:"#8a909c"}},I={key:6},M=W(z({name:"BpmProcessInstanceTaskList",__name:"ProcessInstanceTaskList",props:{loading:m.bool,tasks:m.arrayOf(m.object)},setup(v){const U=a=>a.result===1?"el-icon-time":a.result===2?"el-icon-check":a.result===3?"el-icon-close":a.result===4?"el-icon-remove-outline":a.result===5?"el-icon-back":"",x=a=>a.result===1?"primary":a.result===2?"success":a.result===3?"danger":a.result===4?"info":a.result===5?"warning":a.result===6?"default":a.result===7||a.result===8?"warning":"",C=F();return(a,kt)=>{const N=st,S=H,j=K,E=Q,P=mt,q=tt,A=at,B=V,D=J;return G((l(),u(P,{class:"box-card"},{header:s(()=>[p]),default:s(()=>[r(B,{offset:4,span:16},{default:s(()=>[c("div",f,[r(A,null,{default:s(()=>[(l(!0),e(Z,null,X(v.tasks,(t,O)=>(l(),u(q,{key:O,icon:U(t),type:x(t)},{default:s(()=>[c("p",y,[_(" \u4EFB\u52A1\uFF1A"+o(t.name)+" ",1),r(N,{type:i(ot).BPM_PROCESS_INSTANCE_RESULT,value:t.result},null,8,["type","value"]),i(Y)(t.children)?n("",!0):(l(),u(j,{key:0,style:{"margin-left":"5px"},onClick:bt=>(R=>{C.value.open(R)})(t)},{default:s(()=>[r(S,{icon:"ep:memo"}),_(" \u5B50\u4EFB\u52A1 ")]),_:2},1032,["onClick"]))]),r(P,{"body-style":{padding:"10px"}},{default:s(()=>[t.assigneeUser?(l(),e("label",d,[_(" \u5BA1\u6279\u4EBA\uFF1A"+o(t.assigneeUser.nickname)+" ",1),r(E,{size:"small",type:"info"},{default:s(()=>[_(o(t.assigneeUser.deptName),1)]),_:2},1024)])):n("",!0),t.createTime?(l(),e("label",h,"\u521B\u5EFA\u65F6\u95F4\uFF1A")):n("",!0),c("label",g,o(i(L)(t==null?void 0:t.createTime)),1),t.endTime?(l(),e("label",k," \u5BA1\u6279\u65F6\u95F4\uFF1A ")):n("",!0),t.endTime?(l(),e("label",b,o(i(L)(t==null?void 0:t.endTime)),1)):n("",!0),t.durationInMillis?(l(),e("label",w," \u8017\u65F6\uFF1A ")):n("",!0),t.durationInMillis?(l(),e("label",T,o(i(et)(t==null?void 0:t.durationInMillis)),1)):n("",!0),t.reason?(l(),e("p",I,[r(E,{type:x(t)},{default:s(()=>[_(o(t.reason),1)]),_:2},1032,["type"])])):n("",!0)]),_:2},1024)]),_:2},1032,["icon","type"]))),128))]),_:1})])]),_:1}),r(it,{ref_key:"processInstanceChildrenTaskList",ref:C},null,512)]),_:1})),[[D,v.loading]])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/bpm/processInstance/detail/ProcessInstanceTaskList.vue"]])});export{gt as __tla,M as default};