import{ap as L,d as A,u as F,r as u,p as q,o as p,c as y,f as e,w as r,a as l,F as g,q as U,v as h,x as G,h as P,t as B,g as H,y as Y,z as j,A as W,D as J,G as K,H as Q,I as X,__tla as Z}from"./index-d2088aec.js";import{_ as $,__tla as ee}from"./index.vue_vue_type_script_setup_true_lang-6baf9e60.js";import{_ as ae,__tla as le}from"./DictTag.vue_vue_type_script_lang-754cee6f.js";import{E as te,__tla as re}from"./el-link-3f427b16.js";import{_ as oe,__tla as ne}from"./ContentWrap.vue_vue_type_script_setup_true_lang-3fd6aef1.js";import{D as c,__tla as pe}from"./dict-999fbee6.js";import{d,__tla as ue}from"./formatTime-c7e0c543.js";import{a as ie,S as se}from"./common-7bc9becf.js";let E,ce=Promise.all([(()=>{try{return Z}catch{}})(),(()=>{try{return ee}catch{}})(),(()=>{try{return le}catch{}})(),(()=>{try{return re}catch{}})(),(()=>{try{return ne}catch{}})(),(()=>{try{return pe}catch{}})(),(()=>{try{return ue}catch{}})()]).then(async()=>{let w;w=H("div",{class:"pb-5 text-xl"}," \u4ECA\u65E5\u9700\u8054\u7CFB\u5BA2\u6237 ",-1),E=A({__name:"TodayCustomer",setup(de){const{push:k}=F(),_=u(!0),b=u(0),v=u([]),o=u({pageNo:1,pageSize:10,contactStatus:1,sceneType:1}),D=u(),m=async()=>{_.value=!0;try{const f=await(async n=>await L.get({url:"/crm/backlog/today-customer-page",params:n}))(o.value);v.value=f.list,b.value=f.total}finally{_.value=!1}},x=()=>{o.value.pageNo=1,m()};return q(()=>{m()}),(f,n)=>{const S=Y,C=j,T=W,V=J,N=oe,t=K,I=te,i=ae,M=Q,O=$,z=X;return p(),y(g,null,[e(N,null,{default:r(()=>[w,e(V,{ref_key:"queryFormRef",ref:D,inline:!0,model:l(o),class:"-mb-15px","label-width":"68px"},{default:r(()=>[e(T,{label:"\u72B6\u6001",prop:"contactStatus"},{default:r(()=>[e(C,{modelValue:l(o).contactStatus,"onUpdate:modelValue":n[0]||(n[0]=a=>l(o).contactStatus=a),class:"!w-240px",placeholder:"\u72B6\u6001",onChange:x},{default:r(()=>[(p(!0),y(g,null,U(l(ie),(a,s)=>(p(),h(S,{label:a.label,value:a.value,key:s},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(T,{label:"\u5F52\u5C5E",prop:"sceneType"},{default:r(()=>[e(C,{modelValue:l(o).sceneType,"onUpdate:modelValue":n[1]||(n[1]=a=>l(o).sceneType=a),class:"!w-240px",placeholder:"\u5F52\u5C5E",onChange:x},{default:r(()=>[(p(!0),y(g,null,U(l(se),(a,s)=>(p(),h(S,{label:a.label,value:a.value,key:s},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1}),e(N,null,{default:r(()=>[G((p(),h(M,{data:l(v),"show-overflow-tooltip":!0,stripe:!0},{default:r(()=>[e(t,{align:"center",label:"\u7F16\u53F7",fixed:"left",prop:"id"}),e(t,{align:"center",label:"\u5BA2\u6237\u540D\u79F0",fixed:"left",prop:"name",width:"160"},{default:r(a=>[e(I,{underline:!1,type:"primary",onClick:s=>{return R=a.row.id,void k({name:"CrmCustomerDetail",params:{id:R}});var R}},{default:r(()=>[P(B(a.row.name),1)]),_:2},1032,["onClick"])]),_:1}),e(t,{align:"center",label:"\u624B\u673A",prop:"mobile",width:"120"}),e(t,{align:"center",label:"\u7535\u8BDD",prop:"telephone",width:"120"}),e(t,{align:"center",label:"\u5BA2\u6237\u6765\u6E90",prop:"source",width:"100"},{default:r(a=>[e(i,{type:l(c).CRM_CUSTOMER_SOURCE,value:a.row.source},null,8,["type","value"])]),_:1}),e(t,{align:"center",label:"\u6240\u5C5E\u884C\u4E1A",prop:"industryId",width:"120"},{default:r(a=>[e(i,{type:l(c).CRM_CUSTOMER_INDUSTRY,value:a.row.industryId},null,8,["type","value"])]),_:1}),e(t,{align:"center",label:"\u5BA2\u6237\u7B49\u7EA7",prop:"level",width:"120"},{default:r(a=>[e(i,{type:l(c).CRM_CUSTOMER_LEVEL,value:a.row.level},null,8,["type","value"])]),_:1}),e(t,{align:"center",label:"\u7F51\u5740",prop:"website",width:"200"}),e(t,{formatter:l(d),align:"center",label:"\u4E0B\u6B21\u8054\u7CFB\u65F6\u95F4",prop:"contactNextTime",width:"180px"},null,8,["formatter"]),e(t,{align:"center",label:"\u5907\u6CE8",prop:"remark",width:"200"}),e(t,{align:"center",label:"\u6210\u4EA4\u72B6\u6001",prop:"dealStatus"},{default:r(a=>[e(i,{type:l(c).INFRA_BOOLEAN_STRING,value:a.row.dealStatus},null,8,["type","value"])]),_:1}),e(t,{align:"center",label:"\u8DDD\u8FDB\u5165\u516C\u6D77\u5929\u6570",prop:"poolDay",width:"130"}),e(t,{formatter:l(d),align:"center",label:"\u6700\u540E\u8DDF\u8FDB\u65F6\u95F4",prop:"contactLastTime",width:"180px"},null,8,["formatter"]),e(t,{formatter:l(d),align:"center",label:"\u521B\u5EFA\u65F6\u95F4",prop:"updateTime",width:"180px"},null,8,["formatter"]),e(t,{formatter:l(d),align:"center",label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",width:"180px"},null,8,["formatter"]),e(t,{align:"center",label:"\u8D1F\u8D23\u4EBA",prop:"ownerUserName",width:"100px"}),e(t,{align:"center",label:"\u6240\u5C5E\u90E8\u95E8",prop:"ownerUserDeptName",width:"100px"}),e(t,{align:"center",label:"\u521B\u5EFA\u4EBA",prop:"creatorName",width:"100px"})]),_:1},8,["data"])),[[z,l(_)]]),e(O,{limit:l(o).pageSize,"onUpdate:limit":n[2]||(n[2]=a=>l(o).pageSize=a),page:l(o).pageNo,"onUpdate:page":n[3]||(n[3]=a=>l(o).pageNo=a),total:l(b),onPagination:m},null,8,["limit","page","total"])]),_:1})],64)}}})});export{E as _,ce as __tla};
