import{aq as A,d as L,u as q,r as u,p as F,o as p,c as y,f as e,w as r,a as l,F as g,q as R,v as w,x as G,h as P,t as Y,g as B,y as H,z as J,A as j,G as X,H as Z,I as K,J as Q,_ as W,__tla as $}from"./index-f0743f71.js";import{_ as ee,__tla as ae}from"./index-cf7b3541.js";import{_ as le,__tla as te}from"./DictTag-4f08045a.js";import{E as re,__tla as oe}from"./el-link-17c2244d.js";import{_ as ne,__tla as pe}from"./ContentWrap-5acc4fb9.js";import{D as _,__tla as ue}from"./dict-4a9940b3.js";import{d as c,__tla as se}from"./formatTime-e6df2ea5.js";import{a as ie,S as _e}from"./common-7bc9becf.js";import{__tla as ce}from"./index-8beae3df.js";import"./color-f5b6e279.js";import{__tla as de}from"./index-a48a5540.js";let E,me=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return ae}catch{}})(),(()=>{try{return te}catch{}})(),(()=>{try{return oe}catch{}})(),(()=>{try{return pe}catch{}})(),(()=>{try{return ue}catch{}})(),(()=>{try{return se}catch{}})(),(()=>{try{return ce}catch{}})(),(()=>{try{return de}catch{}})()]).then(async()=>{let h;h=B("div",{class:"pb-5 text-xl"}," \u4ECA\u65E5\u9700\u8054\u7CFB\u5BA2\u6237 ",-1),E=W(L({__name:"TodayCustomer",setup(fe){const{push:k}=q(),d=u(!0),b=u(0),v=u([]),o=u({pageNo:1,pageSize:10,contactStatus:1,sceneType:1}),I=u(),m=async()=>{d.value=!0;try{const f=await(async n=>await A.get({url:"/crm/backlog/today-customer-page",params:n}))(o.value);v.value=f.list,b.value=f.total}finally{d.value=!1}},x=()=>{o.value.pageNo=1,m()};return F(()=>{m()}),(f,n)=>{const C=H,S=J,T=j,M=X,N=ne,t=Z,V=re,s=le,D=K,O=ee,z=Q;return p(),y(g,null,[e(N,null,{default:r(()=>[h,e(M,{ref_key:"queryFormRef",ref:I,inline:!0,model:l(o),class:"-mb-15px","label-width":"68px"},{default:r(()=>[e(T,{label:"\u72B6\u6001",prop:"contactStatus"},{default:r(()=>[e(S,{modelValue:l(o).contactStatus,"onUpdate:modelValue":n[0]||(n[0]=a=>l(o).contactStatus=a),class:"!w-240px",placeholder:"\u72B6\u6001",onChange:x},{default:r(()=>[(p(!0),y(g,null,R(l(ie),(a,i)=>(p(),w(C,{label:a.label,value:a.value,key:i},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(T,{label:"\u5F52\u5C5E",prop:"sceneType"},{default:r(()=>[e(S,{modelValue:l(o).sceneType,"onUpdate:modelValue":n[1]||(n[1]=a=>l(o).sceneType=a),class:"!w-240px",placeholder:"\u5F52\u5C5E",onChange:x},{default:r(()=>[(p(!0),y(g,null,R(l(_e),(a,i)=>(p(),w(C,{label:a.label,value:a.value,key:i},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1}),e(N,null,{default:r(()=>[G((p(),w(D,{data:l(v),"show-overflow-tooltip":!0,stripe:!0},{default:r(()=>[e(t,{align:"center",label:"\u7F16\u53F7",fixed:"left",prop:"id"}),e(t,{align:"center",label:"\u5BA2\u6237\u540D\u79F0",fixed:"left",prop:"name",width:"160"},{default:r(a=>[e(V,{underline:!1,type:"primary",onClick:i=>{return U=a.row.id,void k({name:"CrmCustomerDetail",params:{id:U}});var U}},{default:r(()=>[P(Y(a.row.name),1)]),_:2},1032,["onClick"])]),_:1}),e(t,{align:"center",label:"\u624B\u673A",prop:"mobile",width:"120"}),e(t,{align:"center",label:"\u7535\u8BDD",prop:"telephone",width:"120"}),e(t,{align:"center",label:"\u5BA2\u6237\u6765\u6E90",prop:"source",width:"100"},{default:r(a=>[e(s,{type:l(_).CRM_CUSTOMER_SOURCE,value:a.row.source},null,8,["type","value"])]),_:1}),e(t,{align:"center",label:"\u6240\u5C5E\u884C\u4E1A",prop:"industryId",width:"120"},{default:r(a=>[e(s,{type:l(_).CRM_CUSTOMER_INDUSTRY,value:a.row.industryId},null,8,["type","value"])]),_:1}),e(t,{align:"center",label:"\u5BA2\u6237\u7B49\u7EA7",prop:"level",width:"120"},{default:r(a=>[e(s,{type:l(_).CRM_CUSTOMER_LEVEL,value:a.row.level},null,8,["type","value"])]),_:1}),e(t,{align:"center",label:"\u7F51\u5740",prop:"website",width:"200"}),e(t,{formatter:l(c),align:"center",label:"\u4E0B\u6B21\u8054\u7CFB\u65F6\u95F4",prop:"contactNextTime",width:"180px"},null,8,["formatter"]),e(t,{align:"center",label:"\u5907\u6CE8",prop:"remark",width:"200"}),e(t,{align:"center",label:"\u6210\u4EA4\u72B6\u6001",prop:"dealStatus"},{default:r(a=>[e(s,{type:l(_).INFRA_BOOLEAN_STRING,value:a.row.dealStatus},null,8,["type","value"])]),_:1}),e(t,{align:"center",label:"\u8DDD\u8FDB\u5165\u516C\u6D77\u5929\u6570",prop:"poolDay",width:"130"}),e(t,{formatter:l(c),align:"center",label:"\u6700\u540E\u8DDF\u8FDB\u65F6\u95F4",prop:"contactLastTime",width:"180px"},null,8,["formatter"]),e(t,{formatter:l(c),align:"center",label:"\u521B\u5EFA\u65F6\u95F4",prop:"updateTime",width:"180px"},null,8,["formatter"]),e(t,{formatter:l(c),align:"center",label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",width:"180px"},null,8,["formatter"]),e(t,{align:"center",label:"\u8D1F\u8D23\u4EBA",prop:"ownerUserName",width:"100px"}),e(t,{align:"center",label:"\u6240\u5C5E\u90E8\u95E8",prop:"ownerUserDeptName",width:"100px"}),e(t,{align:"center",label:"\u521B\u5EFA\u4EBA",prop:"creatorName",width:"100px"})]),_:1},8,["data"])),[[z,l(d)]]),e(O,{limit:l(o).pageSize,"onUpdate:limit":n[2]||(n[2]=a=>l(o).pageSize=a),page:l(o).pageNo,"onUpdate:page":n[3]||(n[3]=a=>l(o).pageNo=a),total:l(b),onPagination:m},null,8,["limit","page","total"])]),_:1})],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/crm/backlog/tables/TodayCustomer.vue"]])});export{me as __tla,E as default};