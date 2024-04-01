import{d as ue,k as se,r as n,n as de,p as ie,G as ce,o as u,c as b,b as a,e as r,a as l,H as D,F as w,g as k,q as s,h as p,w as f,e4 as ne,e1 as W,t as pe,d$ as _e,L as me,y as fe,s as ye,x as be,z as he,A as we,B as ve,C as ge,E as ke,ai as Ve,i as xe,v as Se,_ as Ce,__tla as Ie}from"./index-b079f499.js";import{_ as Ue,__tla as Pe}from"./index-749396de.js";import{_ as Ne,__tla as Te}from"./DictTag-6d4c3489.js";import{_ as De,__tla as Ae}from"./ContentWrap-0fab5b86.js";import{a as ze,D as X,__tla as Ee}from"./dict-2c56908b.js";import{b as Le,__tla as Oe}from"./formatTime-0805635f.js";import{d as Re}from"./download-20922b56.js";import{S as I,__tla as Ye}from"./index-ab890e90.js";import qe,{__tla as He}from"./SaleOutForm-07a97a5f.js";import{P as Ke,__tla as Fe}from"./index-f079e40c.js";import{g as Ge,__tla as Me}from"./index-41e17afa.js";import{C as We,__tla as Xe}from"./index-39e4ddc0.js";import{W as $e,__tla as Be}from"./index-4ebe7e87.js";import{A as Ze,__tla as je}from"./index-eb441745.js";import{u as Je,__tla as Qe}from"./useMessage-66b9cf03.js";import{__tla as ea}from"./index-c1a7e444.js";import"./color-f5b6e279.js";import{__tla as aa}from"./index-3be78f60.js";import{__tla as la}from"./Dialog-07bcd661.js";import{__tla as ta}from"./UploadFile-8c3c7f37.js";import{__tla as ra}from"./UploadFile.vue_vue_type_style_index_0_scoped_436eca1b_lang-ccf69cde.js";import{__tla as oa}from"./useUpload-ca092158.js";import{__tla as ua}from"./index-4c44a910.js";import{__tla as sa}from"./SaleOutItemForm-55c035d6.js";import{__tla as da}from"./index-d513e025.js";import{__tla as ia}from"./SaleOrderOutEnableList-fdf5cd13.js";import{__tla as ca}from"./index-6edc95e7.js";let $,na=Promise.all([(()=>{try{return Ie}catch{}})(),(()=>{try{return Pe}catch{}})(),(()=>{try{return Te}catch{}})(),(()=>{try{return Ae}catch{}})(),(()=>{try{return Ee}catch{}})(),(()=>{try{return Oe}catch{}})(),(()=>{try{return Ye}catch{}})(),(()=>{try{return He}catch{}})(),(()=>{try{return Fe}catch{}})(),(()=>{try{return Me}catch{}})(),(()=>{try{return Xe}catch{}})(),(()=>{try{return Be}catch{}})(),(()=>{try{return je}catch{}})(),(()=>{try{return Qe}catch{}})(),(()=>{try{return ea}catch{}})(),(()=>{try{return aa}catch{}})(),(()=>{try{return la}catch{}})(),(()=>{try{return ta}catch{}})(),(()=>{try{return ra}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return sa}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return ia}catch{}})(),(()=>{try{return ca}catch{}})()]).then(async()=>{let A;A={key:0},$=Ce(ue({name:"ErpSaleOut",__name:"index",setup(pa){const V=Je(),{t:B}=se(),U=n(!0),z=n([]),E=n(0),o=de({pageNo:1,pageSize:10,no:void 0,customerId:void 0,productId:void 0,warehouseId:void 0,outTime:[],orderNo:void 0,receiptStatus:void 0,accountId:void 0,status:void 0,remark:void 0,creator:void 0}),L=n(),P=n(!1),O=n([]),R=n([]),Y=n([]),q=n([]),H=n([]),v=async()=>{U.value=!0;try{const d=await I.getSaleOutPage(o);z.value=d.list,E.value=d.total}finally{U.value=!1}},x=()=>{o.pageNo=1,v()},Z=()=>{L.value.resetFields(),x()},K=n(),N=(d,t)=>{K.value.open(d,t)},F=async d=>{try{await V.delConfirm(),await I.deleteSaleOut(d),V.success(B("common.delSuccess")),await v(),S.value=S.value.filter(t=>!d.includes(t.id))}catch{}},G=async(d,t)=>{try{await V.confirm(`\u786E\u5B9A${t===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279"}\u8BE5\u51FA\u5E93\u5417\uFF1F`),await I.updateSaleOutStatus(d,t),V.success((t===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279")+"\u6210\u529F"),await v()}catch{}},j=async()=>{try{await V.exportConfirm(),P.value=!0;const d=await I.exportSaleOut(o);Re.excel(d,"\u9500\u552E\u51FA\u5E93.xls")}catch{}finally{P.value=!1}},S=n([]),J=d=>{S.value=d};return ie(async()=>{await v(),O.value=await Ke.getProductSimpleList(),R.value=await We.getCustomerSimpleList(),Y.value=await Ge(),q.value=await $e.getWarehouseSimpleList(),H.value=await Ze.getAccountSimpleList()}),(d,t)=>{const T=me,i=fe,m=ye,h=be,Q=he,C=we,_=ve,ee=ge,M=De,c=ke,ae=Ve,le=Ne,te=xe,re=Ue,y=ce("hasPermi"),oe=Se;return u(),b(w,null,[a(M,null,{default:r(()=>[a(ee,{class:"-mb-15px",model:l(o),ref_key:"queryFormRef",ref:L,inline:!0,"label-width":"68px"},{default:r(()=>[a(i,{label:"\u51FA\u5E93\u5355\u53F7",prop:"no"},{default:r(()=>[a(T,{modelValue:l(o).no,"onUpdate:modelValue":t[0]||(t[0]=e=>l(o).no=e),placeholder:"\u8BF7\u8F93\u5165\u51FA\u5E93\u5355\u53F7",clearable:"",onKeyup:D(x,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(i,{label:"\u4EA7\u54C1",prop:"productId"},{default:r(()=>[a(h,{modelValue:l(o).productId,"onUpdate:modelValue":t[1]||(t[1]=e=>l(o).productId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4EA7\u54C1",class:"!w-240px"},{default:r(()=>[(u(!0),b(w,null,k(l(O),e=>(u(),s(m,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(i,{label:"\u51FA\u5E93\u65F6\u95F4",prop:"outTime"},{default:r(()=>[a(Q,{modelValue:l(o).outTime,"onUpdate:modelValue":t[2]||(t[2]=e=>l(o).outTime=e),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-220px"},null,8,["modelValue","default-time"])]),_:1}),a(i,{label:"\u5BA2\u6237",prop:"customerId"},{default:r(()=>[a(h,{modelValue:l(o).customerId,"onUpdate:modelValue":t[3]||(t[3]=e=>l(o).customerId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4F9B\u5BA2\u6237",class:"!w-240px"},{default:r(()=>[(u(!0),b(w,null,k(l(R),e=>(u(),s(m,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(i,{label:"\u4ED3\u5E93",prop:"warehouseId"},{default:r(()=>[a(h,{modelValue:l(o).warehouseId,"onUpdate:modelValue":t[4]||(t[4]=e=>l(o).warehouseId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93",class:"!w-240px"},{default:r(()=>[(u(!0),b(w,null,k(l(q),e=>(u(),s(m,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(i,{label:"\u521B\u5EFA\u4EBA",prop:"creator"},{default:r(()=>[a(h,{modelValue:l(o).creator,"onUpdate:modelValue":t[5]||(t[5]=e=>l(o).creator=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u521B\u5EFA\u4EBA",class:"!w-240px"},{default:r(()=>[(u(!0),b(w,null,k(l(Y),e=>(u(),s(m,{key:e.id,label:e.nickname,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(i,{label:"\u5173\u8054\u8BA2\u5355",prop:"orderNo"},{default:r(()=>[a(T,{modelValue:l(o).orderNo,"onUpdate:modelValue":t[6]||(t[6]=e=>l(o).orderNo=e),placeholder:"\u8BF7\u8F93\u5165\u5173\u8054\u8BA2\u5355",clearable:"",onKeyup:D(x,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(i,{label:"\u7ED3\u7B97\u8D26\u6237",prop:"accountId"},{default:r(()=>[a(h,{modelValue:l(o).accountId,"onUpdate:modelValue":t[7]||(t[7]=e=>l(o).accountId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u7ED3\u7B97\u8D26\u6237",class:"!w-240px"},{default:r(()=>[(u(!0),b(w,null,k(l(H),e=>(u(),s(m,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(i,{label:"\u6536\u6B3E\u72B6\u6001",prop:"receiptStatus"},{default:r(()=>[a(h,{modelValue:l(o).receiptStatus,"onUpdate:modelValue":t[8]||(t[8]=e=>l(o).receiptStatus=e),placeholder:"\u8BF7\u9009\u62E9\u6709\u6B3E\u72B6\u6001",clearable:"",class:"!w-240px"},{default:r(()=>[a(m,{label:"\u672A\u6536\u6B3E",value:"0"}),a(m,{label:"\u90E8\u5206\u6536\u6B3E",value:"1"}),a(m,{label:"\u5168\u90E8\u6536\u6B3E",value:"2"})]),_:1},8,["modelValue"])]),_:1}),a(i,{label:"\u5BA1\u6838\u72B6\u6001",prop:"status"},{default:r(()=>[a(h,{modelValue:l(o).status,"onUpdate:modelValue":t[9]||(t[9]=e=>l(o).status=e),placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",clearable:"",class:"!w-240px"},{default:r(()=>[(u(!0),b(w,null,k(l(ze)(l(X).ERP_AUDIT_STATUS),e=>(u(),s(m,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(i,{label:"\u5907\u6CE8",prop:"remark"},{default:r(()=>[a(T,{modelValue:l(o).remark,"onUpdate:modelValue":t[10]||(t[10]=e=>l(o).remark=e),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",clearable:"",onKeyup:D(x,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(i,null,{default:r(()=>[a(_,{onClick:x},{default:r(()=>[a(C,{icon:"ep:search",class:"mr-5px"}),p(" \u641C\u7D22")]),_:1}),a(_,{onClick:Z},{default:r(()=>[a(C,{icon:"ep:refresh",class:"mr-5px"}),p(" \u91CD\u7F6E")]),_:1}),f((u(),s(_,{type:"primary",plain:"",onClick:t[11]||(t[11]=e=>N("create"))},{default:r(()=>[a(C,{icon:"ep:plus",class:"mr-5px"}),p(" \u65B0\u589E ")]),_:1})),[[y,["erp:sale-out:create"]]]),f((u(),s(_,{type:"success",plain:"",onClick:j,loading:l(P)},{default:r(()=>[a(C,{icon:"ep:download",class:"mr-5px"}),p(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[y,["erp:sale-out:export"]]]),f((u(),s(_,{type:"danger",plain:"",onClick:t[12]||(t[12]=e=>F(l(S).map(g=>g.id))),disabled:l(S).length===0},{default:r(()=>[a(C,{icon:"ep:delete",class:"mr-5px"}),p(" \u5220\u9664 ")]),_:1},8,["disabled"])),[[y,["erp:sale-out:delete"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(M,null,{default:r(()=>[f((u(),s(te,{data:l(z),stripe:!0,"show-overflow-tooltip":!0,onSelectionChange:J},{default:r(()=>[a(c,{width:"30",label:"\u9009\u62E9",type:"selection"}),a(c,{"min-width":"180",label:"\u51FA\u5E93\u5355\u53F7",align:"center",prop:"no"}),a(c,{label:"\u4EA7\u54C1\u4FE1\u606F",align:"center",prop:"productNames","min-width":"200"}),a(c,{label:"\u5BA2\u6237",align:"center",prop:"customerName"}),a(c,{label:"\u51FA\u5E93\u65F6\u95F4",align:"center",prop:"outTime",formatter:l(Le),width:"120px"},null,8,["formatter"]),a(c,{label:"\u521B\u5EFA\u4EBA",align:"center",prop:"creatorName"}),a(c,{label:"\u603B\u6570\u91CF",align:"center",prop:"totalCount",formatter:l(ne)},null,8,["formatter"]),a(c,{label:"\u5E94\u6536\u91D1\u989D",align:"center",prop:"totalPrice",formatter:l(W)},null,8,["formatter"]),a(c,{label:"\u5DF2\u6536\u91D1\u989D",align:"center",prop:"receiptPrice",formatter:l(W)},null,8,["formatter"]),a(c,{label:"\u672A\u6536\u91D1\u989D",align:"center"},{default:r(e=>[e.row.receiptPrice===e.row.totalPrice?(u(),b("span",A,"0")):(u(),s(ae,{key:1,type:"danger"},{default:r(()=>[p(pe(l(_e)(e.row.totalPrice-e.row.receiptPrice)),1)]),_:2},1024))]),_:1}),a(c,{label:"\u5BA1\u6838\u72B6\u6001",align:"center",fixed:"right",width:"90",prop:"status"},{default:r(e=>[a(le,{type:l(X).ERP_AUDIT_STATUS,value:e.row.status},null,8,["type","value"])]),_:1}),a(c,{label:"\u64CD\u4F5C",align:"center",fixed:"right",width:"220"},{default:r(e=>[f((u(),s(_,{link:"",onClick:g=>N("detail",e.row.id)},{default:r(()=>[p(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])),[[y,["erp:sale-out:query"]]]),f((u(),s(_,{link:"",type:"primary",onClick:g=>N("update",e.row.id),disabled:e.row.status===20},{default:r(()=>[p(" \u7F16\u8F91 ")]),_:2},1032,["onClick","disabled"])),[[y,["erp:sale-out:update"]]]),e.row.status===10?f((u(),s(_,{key:0,link:"",type:"primary",onClick:g=>G(e.row.id,20)},{default:r(()=>[p(" \u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[y,["erp:sale-out:update-status"]]]):f((u(),s(_,{key:1,link:"",type:"danger",onClick:g=>G(e.row.id,10)},{default:r(()=>[p(" \u53CD\u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[y,["erp:sale-out:update-status"]]]),f((u(),s(_,{link:"",type:"danger",onClick:g=>F([e.row.id])},{default:r(()=>[p(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[y,["erp:sale-out:delete"]]])]),_:1})]),_:1},8,["data"])),[[oe,l(U)]]),a(re,{total:l(E),page:l(o).pageNo,"onUpdate:page":t[13]||(t[13]=e=>l(o).pageNo=e),limit:l(o).pageSize,"onUpdate:limit":t[14]||(t[14]=e=>l(o).pageSize=e),onPagination:v},null,8,["total","page","limit"])]),_:1}),a(qe,{ref_key:"formRef",ref:K,onSuccess:v},null,512)],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/erp/sale/out/index.vue"]])});export{na as __tla,$ as default};
