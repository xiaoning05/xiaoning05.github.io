import{d as J,u as Q,i as W,r as h,e as X,p as Z,K as ee,o,c as _,f as a,w as t,a as l,L as O,F as m,q as g,v as u,h as d,x as w,g as ae,t as le,a4 as te,bm as re,P as se,A as oe,y as ne,z as ue,B as pe,_ as ce,C as ie,D as _e,G as me,H as de,I as fe,__tla as ye}from"./index-d5b00dc9.js";import{_ as be,__tla as ve}from"./index.vue_vue_type_script_setup_true_lang-8478be74.js";import{_ as he,__tla as ge}from"./DictTag.vue_vue_type_script_lang-2a9ae33e.js";import{_ as we,__tla as Se}from"./ContentWrap.vue_vue_type_script_setup_true_lang-29ba9b6b.js";import{a as E,D as i,__tla as Te}from"./dict-29b94c3f.js";import{d as R,__tla as ke}from"./formatTime-9063410f.js";import{d as Ce,a as Pe,__tla as Ve}from"./index-529489f0.js";import{u as xe,__tla as Ee}from"./useMessage-2288a5f2.js";import{__tla as De}from"./index-9ed43bfb.js";import"./color-f5b6e279.js";import{__tla as Be}from"./index-bd0d9e6c.js";let q,Ie=Promise.all([(()=>{try{return ye}catch{}})(),(()=>{try{return ve}catch{}})(),(()=>{try{return ge}catch{}})(),(()=>{try{return Se}catch{}})(),(()=>{try{return Te}catch{}})(),(()=>{try{return ke}catch{}})(),(()=>{try{return Ve}catch{}})(),(()=>{try{return Ee}catch{}})(),(()=>{try{return De}catch{}})(),(()=>{try{return Be}catch{}})()]).then(async()=>{q=J({name:"BpmProcessInstance",__name:"index",setup(Ne){const D=Q(),Y=xe(),{t:B}=W(),S=h(!0),I=h(0),N=h([]),r=X({pageNo:1,pageSize:10,name:"",processDefinitionId:void 0,category:void 0,status:void 0,result:void 0,createTime:[]}),U=h(),f=async()=>{S.value=!0;try{const T=await Ce(r);N.value=T.list,I.value=T.total}finally{S.value=!1}},y=()=>{r.pageNo=1,f()},z=()=>{U.value.resetFields(),y()},L=()=>{D.push({name:"BpmProcessInstanceCreate"})};return Z(()=>{f()}),(T,s)=>{const M=se,p=oe,k=ne,C=ue,F=pe,P=ce,c=ie,G=_e,A=we,n=me,V=he,H=de,K=be,x=ee("hasPermi"),$=fe;return o(),_(m,null,[a(A,null,{default:t(()=>[a(G,{class:"-mb-15px",model:l(r),ref_key:"queryFormRef",ref:U,inline:!0,"label-width":"68px"},{default:t(()=>[a(p,{label:"\u6D41\u7A0B\u540D\u79F0",prop:"name"},{default:t(()=>[a(M,{modelValue:l(r).name,"onUpdate:modelValue":s[0]||(s[0]=e=>l(r).name=e),placeholder:"\u8BF7\u8F93\u5165\u6D41\u7A0B\u540D\u79F0",clearable:"",onKeyup:O(y,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(p,{label:"\u6240\u5C5E\u6D41\u7A0B",prop:"processDefinitionId"},{default:t(()=>[a(M,{modelValue:l(r).processDefinitionId,"onUpdate:modelValue":s[1]||(s[1]=e=>l(r).processDefinitionId=e),placeholder:"\u8BF7\u8F93\u5165\u6D41\u7A0B\u5B9A\u4E49\u7684\u7F16\u53F7",clearable:"",onKeyup:O(y,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(p,{label:"\u6D41\u7A0B\u5206\u7C7B",prop:"category"},{default:t(()=>[a(C,{modelValue:l(r).category,"onUpdate:modelValue":s[2]||(s[2]=e=>l(r).category=e),placeholder:"\u8BF7\u9009\u62E9\u6D41\u7A0B\u5206\u7C7B",clearable:"",class:"!w-240px"},{default:t(()=>[(o(!0),_(m,null,g(l(E)(l(i).BPM_MODEL_CATEGORY),e=>(o(),u(k,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(p,{label:"\u72B6\u6001",prop:"status"},{default:t(()=>[a(C,{modelValue:l(r).status,"onUpdate:modelValue":s[3]||(s[3]=e=>l(r).status=e),placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",clearable:"",class:"!w-240px"},{default:t(()=>[(o(!0),_(m,null,g(l(E)(l(i).BPM_PROCESS_INSTANCE_STATUS),e=>(o(),u(k,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(p,{label:"\u7ED3\u679C",prop:"result"},{default:t(()=>[a(C,{modelValue:l(r).result,"onUpdate:modelValue":s[4]||(s[4]=e=>l(r).result=e),placeholder:"\u8BF7\u9009\u62E9\u7ED3\u679C",clearable:"",class:"!w-240px"},{default:t(()=>[(o(!0),_(m,null,g(l(E)(l(i).BPM_PROCESS_INSTANCE_RESULT),e=>(o(),u(k,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(p,{label:"\u63D0\u4EA4\u65F6\u95F4",prop:"createTime"},{default:t(()=>[a(F,{modelValue:l(r).createTime,"onUpdate:modelValue":s[5]||(s[5]=e=>l(r).createTime=e),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-240px"},null,8,["modelValue","default-time"])]),_:1}),a(p,null,{default:t(()=>[a(c,{onClick:y},{default:t(()=>[a(P,{icon:"ep:search",class:"mr-5px"}),d(" \u641C\u7D22")]),_:1}),a(c,{onClick:z},{default:t(()=>[a(P,{icon:"ep:refresh",class:"mr-5px"}),d(" \u91CD\u7F6E")]),_:1}),w((o(),u(c,{type:"primary",plain:"",onClick:L},{default:t(()=>[a(P,{icon:"ep:plus",class:"mr-5px"}),d(" \u53D1\u8D77\u6D41\u7A0B ")]),_:1})),[[x,["bpm:process-instance:query"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(A,null,{default:t(()=>[w((o(),u(H,{data:l(N)},{default:t(()=>[a(n,{label:"\u6D41\u7A0B\u7F16\u53F7",align:"center",prop:"id",width:"300px"}),a(n,{label:"\u6D41\u7A0B\u540D\u79F0",align:"center",prop:"name"}),a(n,{label:"\u6D41\u7A0B\u5206\u7C7B",align:"center",prop:"category"},{default:t(e=>[a(V,{type:l(i).BPM_MODEL_CATEGORY,value:e.row.category},null,8,["type","value"])]),_:1}),a(n,{label:"\u5F53\u524D\u5BA1\u6279\u4EFB\u52A1",align:"center",prop:"tasks"},{default:t(e=>[(o(!0),_(m,null,g(e.row.tasks,b=>(o(),u(c,{type:"primary",key:b.id,link:""},{default:t(()=>[ae("span",null,le(b.name),1)]),_:2},1024))),128))]),_:1}),a(n,{label:"\u72B6\u6001",prop:"status"},{default:t(e=>[a(V,{type:l(i).BPM_PROCESS_INSTANCE_STATUS,value:e.row.status},null,8,["type","value"])]),_:1}),a(n,{label:"\u7ED3\u679C",prop:"result"},{default:t(e=>[a(V,{type:l(i).BPM_PROCESS_INSTANCE_RESULT,value:e.row.result},null,8,["type","value"])]),_:1}),a(n,{label:"\u63D0\u4EA4\u65F6\u95F4",align:"center",prop:"createTime",width:"180",formatter:l(R)},null,8,["formatter"]),a(n,{label:"\u7ED3\u675F\u65F6\u95F4",align:"center",prop:"endTime",width:"180",formatter:l(R)},null,8,["formatter"]),a(n,{label:"\u64CD\u4F5C",align:"center"},{default:t(e=>[w((o(),u(c,{link:"",type:"primary",onClick:b=>{return v=e.row,void D.push({name:"BpmProcessInstanceDetail",query:{id:v.id}});var v}},{default:t(()=>[d(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])),[[x,["bpm:process-instance:cancel"]]]),e.row.result===1?w((o(),u(c,{key:0,link:"",type:"primary",onClick:b=>(async v=>{const{value:j}=await re.prompt("\u8BF7\u8F93\u5165\u53D6\u6D88\u539F\u56E0","\u53D6\u6D88\u6D41\u7A0B",{confirmButtonText:B("common.ok"),cancelButtonText:B("common.cancel"),inputPattern:/^[\s\S]*.*\S[\s\S]*$/,inputErrorMessage:"\u53D6\u6D88\u539F\u56E0\u4E0D\u80FD\u4E3A\u7A7A"});await Pe(v.id,j),Y.success("\u53D6\u6D88\u6210\u529F"),await f()})(e.row)},{default:t(()=>[d(" \u53D6\u6D88 ")]),_:2},1032,["onClick"])),[[x,["bpm:process-instance:query"]]]):te("",!0)]),_:1})]),_:1},8,["data"])),[[$,l(S)]]),a(K,{total:l(I),page:l(r).pageNo,"onUpdate:page":s[6]||(s[6]=e=>l(r).pageNo=e),limit:l(r).pageSize,"onUpdate:limit":s[7]||(s[7]=e=>l(r).pageSize=e),onPagination:f},null,8,["total","page","limit"])]),_:1})],64)}}})});export{Ie as __tla,q as default};
