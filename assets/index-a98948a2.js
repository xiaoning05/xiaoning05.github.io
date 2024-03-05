import{d as Y,i as Z,r as _,e as j,p as B,L as $,o as u,c as O,f as a,w as l,a as t,M as aa,F as T,q as ea,v as d,h as m,x as f,e1 as z,Q as ta,A as la,y as ra,z as oa,C as sa,D as na,G as ua,H as pa,a0 as ia,I as ca,J as _a,_ as da,__tla as ma}from"./index-f0743f71.js";import{_ as fa,__tla as ha}from"./index-cf7b3541.js";import{_ as ya,__tla as wa}from"./DictTag-4f08045a.js";import{_ as ga,__tla as va}from"./ContentWrap-5acc4fb9.js";import{a as ba,D as A,__tla as xa}from"./dict-4a9940b3.js";import{d as Sa,__tla as ka}from"./formatTime-e6df2ea5.js";import{d as Ca}from"./download-20922b56.js";import{W as v,__tla as Va}from"./index-c5ebd655.js";import Ua,{__tla as Na}from"./WarehouseForm-9acb02bf.js";import{u as Wa,__tla as Ma}from"./useMessage-75a00a06.js";import{__tla as Pa}from"./index-8beae3df.js";import"./color-f5b6e279.js";import{__tla as Oa}from"./index-a48a5540.js";import{__tla as Ta}from"./Dialog-8f786edd.js";import"./constants-99751ef9.js";let D,za=Promise.all([(()=>{try{return ma}catch{}})(),(()=>{try{return ha}catch{}})(),(()=>{try{return wa}catch{}})(),(()=>{try{return va}catch{}})(),(()=>{try{return xa}catch{}})(),(()=>{try{return ka}catch{}})(),(()=>{try{return Va}catch{}})(),(()=>{try{return Na}catch{}})(),(()=>{try{return Ma}catch{}})(),(()=>{try{return Pa}catch{}})(),(()=>{try{return Oa}catch{}})(),(()=>{try{return Ta}catch{}})()]).then(async()=>{D=da(Y({name:"ErpWarehouse",__name:"index",setup(Aa){const h=Wa(),{t:I}=Z(),b=_(!0),C=_([]),V=_(0),r=j({pageNo:1,pageSize:10,name:void 0,status:void 0}),U=_(),x=_(!1),i=async()=>{b.value=!0;try{const p=await v.getWarehousePage(r);C.value=p.list,V.value=p.total}finally{b.value=!1}},S=()=>{r.pageNo=1,i()},F=()=>{U.value.resetFields(),S()},N=_(),W=(p,o)=>{N.value.open(p,o)},R=async()=>{try{await h.exportConfirm(),x.value=!0;const p=await v.exportWarehouse(r);Ca.excel(p,"\u4ED3\u5E93.xls")}catch{}finally{x.value=!1}};return B(()=>{i()}),(p,o)=>{const q=ta,k=la,E=ra,G=oa,y=sa,c=na,H=ua,M=ga,s=pa,J=ya,K=ia,L=ca,Q=fa,w=$("hasPermi"),X=_a;return u(),O(T,null,[a(M,null,{default:l(()=>[a(H,{class:"-mb-15px",model:t(r),ref_key:"queryFormRef",ref:U,inline:!0,"label-width":"68px"},{default:l(()=>[a(k,{label:"\u4ED3\u5E93\u540D\u79F0",prop:"name"},{default:l(()=>[a(q,{modelValue:t(r).name,"onUpdate:modelValue":o[0]||(o[0]=e=>t(r).name=e),placeholder:"\u8BF7\u8F93\u5165\u4ED3\u5E93\u540D\u79F0",clearable:"",onKeyup:aa(S,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(k,{label:"\u4ED3\u5E93\u72B6\u6001",prop:"status"},{default:l(()=>[a(G,{modelValue:t(r).status,"onUpdate:modelValue":o[1]||(o[1]=e=>t(r).status=e),placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93\u72B6\u6001",clearable:"",class:"!w-240px"},{default:l(()=>[(u(!0),O(T,null,ea(t(ba)(t(A).COMMON_STATUS),e=>(u(),d(E,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(k,null,{default:l(()=>[a(c,{onClick:S},{default:l(()=>[a(y,{icon:"ep:search",class:"mr-5px"}),m(" \u641C\u7D22")]),_:1}),a(c,{onClick:F},{default:l(()=>[a(y,{icon:"ep:refresh",class:"mr-5px"}),m(" \u91CD\u7F6E")]),_:1}),f((u(),d(c,{type:"primary",plain:"",onClick:o[2]||(o[2]=e=>W("create"))},{default:l(()=>[a(y,{icon:"ep:plus",class:"mr-5px"}),m(" \u65B0\u589E ")]),_:1})),[[w,["erp:warehouse:create"]]]),f((u(),d(c,{type:"success",plain:"",onClick:R,loading:t(x)},{default:l(()=>[a(y,{icon:"ep:download",class:"mr-5px"}),m(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[w,["erp:warehouse:export"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(M,null,{default:l(()=>[f((u(),d(L,{data:t(C),stripe:!0,"show-overflow-tooltip":!0},{default:l(()=>[a(s,{label:"\u4ED3\u5E93\u540D\u79F0",align:"center",prop:"name"}),a(s,{label:"\u4ED3\u5E93\u5730\u5740",align:"center",prop:"address"}),a(s,{label:"\u4ED3\u50A8\u8D39",align:"center",prop:"warehousePrice",formatter:t(z)},null,8,["formatter"]),a(s,{label:"\u642C\u8FD0\u8D39",align:"center",prop:"truckagePrice",formatter:t(z)},null,8,["formatter"]),a(s,{label:"\u8D1F\u8D23\u4EBA",align:"center",prop:"principal"}),a(s,{label:"\u5907\u6CE8",align:"center",prop:"remark"}),a(s,{label:"\u6392\u5E8F",align:"center",prop:"sort"}),a(s,{label:"\u72B6\u6001",align:"center",prop:"status"},{default:l(e=>[a(J,{type:t(A).COMMON_STATUS,value:e.row.status},null,8,["type","value"])]),_:1}),a(s,{label:"\u662F\u5426\u9ED8\u8BA4",align:"center",prop:"defaultStatus"},{default:l(e=>[a(K,{modelValue:e.row.defaultStatus,"onUpdate:modelValue":g=>e.row.defaultStatus=g,"active-value":!0,"inactive-value":!1,onChange:g=>(async n=>{try{const P=n.defaultStatus?"\u8BBE\u7F6E":"\u53D6\u6D88";await h.confirm("\u786E\u8BA4\u8981"+P+'"'+n.name+'"\u9ED8\u8BA4\u5417?'),await v.updateWarehouseDefaultStatus(n.id,n.defaultStatus),await i()}catch{n.defaultStatus=!n.defaultStatus}})(e.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),a(s,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",formatter:t(Sa),width:"180px"},null,8,["formatter"]),a(s,{label:"\u64CD\u4F5C",align:"center"},{default:l(e=>[f((u(),d(c,{link:"",type:"primary",onClick:g=>W("update",e.row.id)},{default:l(()=>[m(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[w,["erp:warehouse:update"]]]),f((u(),d(c,{link:"",type:"danger",onClick:g=>(async n=>{try{await h.delConfirm(),await v.deleteWarehouse(n),h.success(I("common.delSuccess")),await i()}catch{}})(e.row.id)},{default:l(()=>[m(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[w,["erp:warehouse:delete"]]])]),_:1})]),_:1},8,["data"])),[[X,t(b)]]),a(Q,{total:t(V),page:t(r).pageNo,"onUpdate:page":o[3]||(o[3]=e=>t(r).pageNo=e),limit:t(r).pageSize,"onUpdate:limit":o[4]||(o[4]=e=>t(r).pageSize=e),onPagination:i},null,8,["total","page","limit"])]),_:1}),a(Ua,{ref_key:"formRef",ref:N,onSuccess:i},null,512)],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/erp/stock/warehouse/index.vue"]])});export{za as __tla,D as default};