import{d as $,u as j,k as J,r as h,n as Q,p as W,G as ee,o,c as _,b as a,e as t,a as l,H as R,F as d,g,q as u,h as m,w,f as ae,t as le,a0 as te,bi as re,L as se,y as oe,s as ne,x as ue,z as pe,A as ce,B as ie,C as _e,E as de,i as me,v as fe,_ as ye,__tla as be}from"./index-aaa5adb3.js";import{_ as ve,__tla as he}from"./index-b47c179c.js";import{_ as ge,__tla as we}from"./DictTag-1c1088ae.js";import{_ as Se,__tla as ke}from"./ContentWrap-04d7f6d1.js";import{a as P,D as i,__tla as Ce}from"./dict-f2796e71.js";import{d as O,__tla as Te}from"./formatTime-9c0e8879.js";import{d as xe,a as Ve,__tla as Ee}from"./index-dfe00c9c.js";import{u as Pe,__tla as Ie}from"./useMessage-873da1e2.js";import{__tla as Ne}from"./index-c602062a.js";import"./color-f5b6e279.js";import{__tla as De}from"./index-5b7dcbf1.js";let Y,Ue=Promise.all([(()=>{try{return be}catch{}})(),(()=>{try{return he}catch{}})(),(()=>{try{return we}catch{}})(),(()=>{try{return ke}catch{}})(),(()=>{try{return Ce}catch{}})(),(()=>{try{return Te}catch{}})(),(()=>{try{return Ee}catch{}})(),(()=>{try{return Ie}catch{}})(),(()=>{try{return Ne}catch{}})(),(()=>{try{return De}catch{}})()]).then(async()=>{Y=ye($({name:"BpmProcessInstance",__name:"index",setup(Be){const I=j(),q=Pe(),{t:N}=J(),S=h(!0),D=h(0),U=h([]),r=Q({pageNo:1,pageSize:10,name:"",processDefinitionId:void 0,category:void 0,status:void 0,result:void 0,createTime:[]}),B=h(),f=async()=>{S.value=!0;try{const k=await xe(r);U.value=k.list,D.value=k.total}finally{S.value=!1}},y=()=>{r.pageNo=1,f()},z=()=>{B.value.resetFields(),y()},L=()=>{I.push({name:"BpmProcessInstanceCreate"})};return W(()=>{f()}),(k,s)=>{const M=se,p=oe,C=ne,T=ue,G=pe,x=ce,c=ie,F=_e,A=Se,n=de,V=ge,H=me,K=ve,E=ee("hasPermi"),X=fe;return o(),_(d,null,[a(A,null,{default:t(()=>[a(F,{class:"-mb-15px",model:l(r),ref_key:"queryFormRef",ref:B,inline:!0,"label-width":"68px"},{default:t(()=>[a(p,{label:"\u6D41\u7A0B\u540D\u79F0",prop:"name"},{default:t(()=>[a(M,{modelValue:l(r).name,"onUpdate:modelValue":s[0]||(s[0]=e=>l(r).name=e),placeholder:"\u8BF7\u8F93\u5165\u6D41\u7A0B\u540D\u79F0",clearable:"",onKeyup:R(y,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(p,{label:"\u6240\u5C5E\u6D41\u7A0B",prop:"processDefinitionId"},{default:t(()=>[a(M,{modelValue:l(r).processDefinitionId,"onUpdate:modelValue":s[1]||(s[1]=e=>l(r).processDefinitionId=e),placeholder:"\u8BF7\u8F93\u5165\u6D41\u7A0B\u5B9A\u4E49\u7684\u7F16\u53F7",clearable:"",onKeyup:R(y,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(p,{label:"\u6D41\u7A0B\u5206\u7C7B",prop:"category"},{default:t(()=>[a(T,{modelValue:l(r).category,"onUpdate:modelValue":s[2]||(s[2]=e=>l(r).category=e),placeholder:"\u8BF7\u9009\u62E9\u6D41\u7A0B\u5206\u7C7B",clearable:"",class:"!w-240px"},{default:t(()=>[(o(!0),_(d,null,g(l(P)(l(i).BPM_MODEL_CATEGORY),e=>(o(),u(C,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(p,{label:"\u72B6\u6001",prop:"status"},{default:t(()=>[a(T,{modelValue:l(r).status,"onUpdate:modelValue":s[3]||(s[3]=e=>l(r).status=e),placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",clearable:"",class:"!w-240px"},{default:t(()=>[(o(!0),_(d,null,g(l(P)(l(i).BPM_PROCESS_INSTANCE_STATUS),e=>(o(),u(C,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(p,{label:"\u7ED3\u679C",prop:"result"},{default:t(()=>[a(T,{modelValue:l(r).result,"onUpdate:modelValue":s[4]||(s[4]=e=>l(r).result=e),placeholder:"\u8BF7\u9009\u62E9\u7ED3\u679C",clearable:"",class:"!w-240px"},{default:t(()=>[(o(!0),_(d,null,g(l(P)(l(i).BPM_PROCESS_INSTANCE_RESULT),e=>(o(),u(C,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(p,{label:"\u63D0\u4EA4\u65F6\u95F4",prop:"createTime"},{default:t(()=>[a(G,{modelValue:l(r).createTime,"onUpdate:modelValue":s[5]||(s[5]=e=>l(r).createTime=e),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-240px"},null,8,["modelValue","default-time"])]),_:1}),a(p,null,{default:t(()=>[a(c,{onClick:y},{default:t(()=>[a(x,{icon:"ep:search",class:"mr-5px"}),m(" \u641C\u7D22")]),_:1}),a(c,{onClick:z},{default:t(()=>[a(x,{icon:"ep:refresh",class:"mr-5px"}),m(" \u91CD\u7F6E")]),_:1}),w((o(),u(c,{type:"primary",plain:"",onClick:L},{default:t(()=>[a(x,{icon:"ep:plus",class:"mr-5px"}),m(" \u53D1\u8D77\u6D41\u7A0B ")]),_:1})),[[E,["bpm:process-instance:query"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(A,null,{default:t(()=>[w((o(),u(H,{data:l(U)},{default:t(()=>[a(n,{label:"\u6D41\u7A0B\u7F16\u53F7",align:"center",prop:"id",width:"300px"}),a(n,{label:"\u6D41\u7A0B\u540D\u79F0",align:"center",prop:"name"}),a(n,{label:"\u6D41\u7A0B\u5206\u7C7B",align:"center",prop:"category"},{default:t(e=>[a(V,{type:l(i).BPM_MODEL_CATEGORY,value:e.row.category},null,8,["type","value"])]),_:1}),a(n,{label:"\u5F53\u524D\u5BA1\u6279\u4EFB\u52A1",align:"center",prop:"tasks"},{default:t(e=>[(o(!0),_(d,null,g(e.row.tasks,b=>(o(),u(c,{type:"primary",key:b.id,link:""},{default:t(()=>[ae("span",null,le(b.name),1)]),_:2},1024))),128))]),_:1}),a(n,{label:"\u72B6\u6001",prop:"status"},{default:t(e=>[a(V,{type:l(i).BPM_PROCESS_INSTANCE_STATUS,value:e.row.status},null,8,["type","value"])]),_:1}),a(n,{label:"\u7ED3\u679C",prop:"result"},{default:t(e=>[a(V,{type:l(i).BPM_PROCESS_INSTANCE_RESULT,value:e.row.result},null,8,["type","value"])]),_:1}),a(n,{label:"\u63D0\u4EA4\u65F6\u95F4",align:"center",prop:"createTime",width:"180",formatter:l(O)},null,8,["formatter"]),a(n,{label:"\u7ED3\u675F\u65F6\u95F4",align:"center",prop:"endTime",width:"180",formatter:l(O)},null,8,["formatter"]),a(n,{label:"\u64CD\u4F5C",align:"center"},{default:t(e=>[w((o(),u(c,{link:"",type:"primary",onClick:b=>{return v=e.row,void I.push({name:"BpmProcessInstanceDetail",query:{id:v.id}});var v}},{default:t(()=>[m(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])),[[E,["bpm:process-instance:cancel"]]]),e.row.result===1?w((o(),u(c,{key:0,link:"",type:"primary",onClick:b=>(async v=>{const{value:Z}=await re.prompt("\u8BF7\u8F93\u5165\u53D6\u6D88\u539F\u56E0","\u53D6\u6D88\u6D41\u7A0B",{confirmButtonText:N("common.ok"),cancelButtonText:N("common.cancel"),inputPattern:/^[\s\S]*.*\S[\s\S]*$/,inputErrorMessage:"\u53D6\u6D88\u539F\u56E0\u4E0D\u80FD\u4E3A\u7A7A"});await Ve(v.id,Z),q.success("\u53D6\u6D88\u6210\u529F"),await f()})(e.row)},{default:t(()=>[m(" \u53D6\u6D88 ")]),_:2},1032,["onClick"])),[[E,["bpm:process-instance:query"]]]):te("",!0)]),_:1})]),_:1},8,["data"])),[[X,l(S)]]),a(K,{total:l(D),page:l(r).pageNo,"onUpdate:page":s[6]||(s[6]=e=>l(r).pageNo=e),limit:l(r).pageSize,"onUpdate:limit":s[7]||(s[7]=e=>l(r).pageSize=e),onPagination:f},null,8,["total","page","limit"])]),_:1})],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/bpm/processInstance/index.vue"]])});export{Ue as __tla,Y as default};
