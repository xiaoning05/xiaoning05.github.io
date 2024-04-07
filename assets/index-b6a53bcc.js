import{ao as Y,d as Q,k as $,r as u,n as ee,dN as ae,p as le,G as te,o as s,c as b,b as e,e as r,a as l,F as y,g as k,q as i,H as re,h,w as z,e4 as O,s as oe,x as pe,y as se,L as ue,z as ne,A as ie,B as ce,C as de,E as _e,i as me,v as fe,_ as be,__tla as ye}from"./index-b079f499.js";import{_ as he,__tla as ve}from"./index-749396de.js";import{_ as we,__tla as ge}from"./DictTag-6d4c3489.js";import{_ as xe,__tla as Ne}from"./ContentWrap-0fab5b86.js";import{a as ke,D as B,__tla as ze}from"./dict-2c56908b.js";import{d as Te,__tla as Ve}from"./formatTime-0805635f.js";import{d as Ce}from"./download-20922b56.js";import{P as Ie,__tla as De}from"./index-f079e40c.js";import{W as Ee,__tla as Pe}from"./index-4ebe7e87.js";import{u as Re,__tla as Se}from"./useMessage-66b9cf03.js";import{__tla as Ue}from"./index-c1a7e444.js";import"./color-f5b6e279.js";import{__tla as Ye}from"./index-3be78f60.js";let F,Oe=Promise.all([(()=>{try{return ye}catch{}})(),(()=>{try{return ve}catch{}})(),(()=>{try{return ge}catch{}})(),(()=>{try{return Ne}catch{}})(),(()=>{try{return ze}catch{}})(),(()=>{try{return Ve}catch{}})(),(()=>{try{return De}catch{}})(),(()=>{try{return Pe}catch{}})(),(()=>{try{return Se}catch{}})(),(()=>{try{return Ue}catch{}})(),(()=>{try{return Ye}catch{}})()]).then(async()=>{let T,V;T=async d=>await Y.get({url:"/erp/stock-record/page",params:d}),V=async d=>await Y.download({url:"/erp/stock-record/export-excel",params:d}),F=be(Q({name:"ErpStockRecord",__name:"index",setup(d){const H=Re();$();const v=u(!0),C=u([]),I=u(0),t=ee({pageNo:1,pageSize:10,productId:void 0,warehouseId:void 0,bizType:void 0,bizNo:void 0,createTime:[]}),D=u(),w=u(!1),E=u([]),P=u([]),_=async()=>{v.value=!0;try{const c=await T(t);C.value=c.list,I.value=c.total}finally{v.value=!1}},g=()=>{t.pageNo=1,_()},K=()=>{D.value.resetFields(),g()},M=u(),G=async()=>{try{await H.exportConfirm(),w.value=!0;const c=await V(t);Ce.excel(c,"\u4EA7\u54C1\u5E93\u5B58\u660E\u7EC6.xls")}catch{}finally{w.value=!1}};return ae(()=>{_()}),le(async()=>{await _(),E.value=await Ie.getProductSimpleList(),P.value=await Ee.getWarehouseSimpleList()}),(c,o)=>{const x=oe,N=pe,n=se,L=ue,Z=ne,m=ie,f=ce,q=de,R=xe,p=_e,A=we,W=me,X=he,S=te("hasPermi"),j=fe;return s(),b(y,null,[e(R,null,{default:r(()=>[e(q,{class:"-mb-15px",model:l(t),ref_key:"queryFormRef",ref:D,inline:!0,"label-width":"68px"},{default:r(()=>[e(n,{label:"\u4EA7\u54C1",prop:"productId"},{default:r(()=>[e(N,{modelValue:l(t).productId,"onUpdate:modelValue":o[0]||(o[0]=a=>l(t).productId=a),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4EA7\u54C1",class:"!w-240px"},{default:r(()=>[(s(!0),b(y,null,k(l(E),a=>(s(),i(x,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u4ED3\u5E93",prop:"warehouseId"},{default:r(()=>[e(N,{modelValue:l(t).warehouseId,"onUpdate:modelValue":o[1]||(o[1]=a=>l(t).warehouseId=a),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93",class:"!w-240px"},{default:r(()=>[(s(!0),b(y,null,k(l(P),a=>(s(),i(x,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u7C7B\u578B",prop:"bizType"},{default:r(()=>[e(N,{modelValue:l(t).bizType,"onUpdate:modelValue":o[2]||(o[2]=a=>l(t).bizType=a),placeholder:"\u8BF7\u9009\u62E9\u7C7B\u578B",clearable:"",class:"!w-240px"},{default:r(()=>[(s(!0),b(y,null,k(l(ke)(l(B).ERP_STOCK_RECORD_BIZ_TYPE),a=>(s(),i(x,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u4E1A\u52A1\u5355\u53F7",prop:"bizNo"},{default:r(()=>[e(L,{modelValue:l(t).bizNo,"onUpdate:modelValue":o[3]||(o[3]=a=>l(t).bizNo=a),placeholder:"\u8BF7\u8F93\u5165\u4E1A\u52A1\u5355\u53F7",clearable:"",onKeyup:re(g,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(n,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime"},{default:r(()=>[e(Z,{modelValue:l(t).createTime,"onUpdate:modelValue":o[4]||(o[4]=a=>l(t).createTime=a),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-220px"},null,8,["modelValue","default-time"])]),_:1}),e(n,null,{default:r(()=>[e(f,{onClick:g},{default:r(()=>[e(m,{icon:"ep:search",class:"mr-5px"}),h(" \u641C\u7D22")]),_:1}),e(f,{onClick:K},{default:r(()=>[e(m,{icon:"ep:refresh",class:"mr-5px"}),h(" \u91CD\u7F6E")]),_:1}),z((s(),i(f,{type:"primary",plain:"",onClick:o[5]||(o[5]=a=>{return U="create",void M.value.open(U,J);var U,J})},{default:r(()=>[e(m,{icon:"ep:plus",class:"mr-5px"}),h(" \u65B0\u589E ")]),_:1})),[[S,["erp:stock-record:create"]]]),z((s(),i(f,{type:"success",plain:"",onClick:G,loading:l(w)},{default:r(()=>[e(m,{icon:"ep:download",class:"mr-5px"}),h(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[S,["erp:stock-record:export"]]])]),_:1})]),_:1},8,["model"])]),_:1}),e(R,null,{default:r(()=>[z((s(),i(W,{data:l(C),stripe:!0,"show-overflow-tooltip":!0},{default:r(()=>[e(p,{label:"\u4EA7\u54C1\u540D\u79F0",align:"center",prop:"productName"}),e(p,{label:"\u4EA7\u54C1\u5206\u7C7B",align:"center",prop:"categoryName"}),e(p,{label:"\u4EA7\u54C1\u5355\u4F4D",align:"center",prop:"unitName"}),e(p,{label:"\u4ED3\u5E93\u7F16\u53F7",align:"center",prop:"warehouseName"}),e(p,{label:"\u7C7B\u578B",align:"center",prop:"bizType","min-width":"100"},{default:r(a=>[e(A,{type:l(B).ERP_STOCK_RECORD_BIZ_TYPE,value:a.row.bizType},null,8,["type","value"])]),_:1}),e(p,{label:"\u51FA\u5165\u5E93\u5355\u53F7",align:"center",prop:"bizNo",width:"200"}),e(p,{label:"\u51FA\u5165\u5E93\u65E5\u671F",align:"center",prop:"createTime",formatter:l(Te),width:"180px"},null,8,["formatter"]),e(p,{label:"\u51FA\u5165\u5E93\u6570\u91CF",align:"center",prop:"count",formatter:l(O)},null,8,["formatter"]),e(p,{label:"\u5E93\u5B58\u91CF",align:"center",prop:"totalCount",formatter:l(O)},null,8,["formatter"]),e(p,{label:"\u64CD\u4F5C\u4EBA",align:"center",prop:"creatorName"})]),_:1},8,["data"])),[[j,l(v)]]),e(X,{total:l(I),page:l(t).pageNo,"onUpdate:page":o[6]||(o[6]=a=>l(t).pageNo=a),limit:l(t).pageSize,"onUpdate:limit":o[7]||(o[7]=a=>l(t).pageSize=a),onPagination:_},null,8,["total","page","limit"])]),_:1})],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/erp/stock/record/index.vue"]])});export{Oe as __tla,F as default};