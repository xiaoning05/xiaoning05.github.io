import{d as ue,k as ne,r as c,n as de,p as se,G as ie,o as u,c as b,b as a,e as r,a as l,H as T,F as w,g as k,q as n,h as p,w as f,e4 as ce,e1 as $,t as pe,d$ as _e,L as me,y as fe,s as ye,x as be,z as he,A as we,B as ve,C as ge,E as ke,ai as Ve,i as xe,v as Se,_ as Ce,__tla as Ie}from"./index-b079f499.js";import{_ as Ue,__tla as Pe}from"./index-749396de.js";import{_ as Ne,__tla as Re}from"./DictTag-6d4c3489.js";import{_ as Te,__tla as Ae}from"./ContentWrap-0fab5b86.js";import{a as De,D as J,__tla as ze}from"./dict-2c56908b.js";import{b as Ee,__tla as Le}from"./formatTime-0805635f.js";import{d as Ye}from"./download-20922b56.js";import{S as I,__tla as qe}from"./index-760c490c.js";import He,{__tla as Ke}from"./SaleReturnForm-ed13de8d.js";import{P as Fe,__tla as Ge}from"./index-f079e40c.js";import{g as Me,__tla as We}from"./index-41e17afa.js";import{C as $e,__tla as Je}from"./index-39e4ddc0.js";import{W as Xe,__tla as Be}from"./index-4ebe7e87.js";import{A as Ze,__tla as je}from"./index-eb441745.js";import{u as Oe,__tla as Qe}from"./useMessage-66b9cf03.js";import{__tla as ea}from"./index-c1a7e444.js";import"./color-f5b6e279.js";import{__tla as aa}from"./index-3be78f60.js";import{__tla as la}from"./Dialog-07bcd661.js";import{__tla as ta}from"./UploadFile-8c3c7f37.js";import{__tla as ra}from"./UploadFile.vue_vue_type_style_index_0_scoped_436eca1b_lang-ccf69cde.js";import{__tla as oa}from"./useUpload-ca092158.js";import{__tla as ua}from"./index-4c44a910.js";import{__tla as na}from"./SaleReturnItemForm-b56f0eb1.js";import{__tla as da}from"./index-d513e025.js";import{__tla as sa}from"./SaleOrderReturnEnableList-72a45281.js";import{__tla as ia}from"./index-6edc95e7.js";let X,ca=Promise.all([(()=>{try{return Ie}catch{}})(),(()=>{try{return Pe}catch{}})(),(()=>{try{return Re}catch{}})(),(()=>{try{return Ae}catch{}})(),(()=>{try{return ze}catch{}})(),(()=>{try{return Le}catch{}})(),(()=>{try{return qe}catch{}})(),(()=>{try{return Ke}catch{}})(),(()=>{try{return Ge}catch{}})(),(()=>{try{return We}catch{}})(),(()=>{try{return Je}catch{}})(),(()=>{try{return Be}catch{}})(),(()=>{try{return je}catch{}})(),(()=>{try{return Qe}catch{}})(),(()=>{try{return ea}catch{}})(),(()=>{try{return aa}catch{}})(),(()=>{try{return la}catch{}})(),(()=>{try{return ta}catch{}})(),(()=>{try{return ra}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return na}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return sa}catch{}})(),(()=>{try{return ia}catch{}})()]).then(async()=>{let A;A={key:0},X=Ce(ue({name:"ErpSaleReturn",__name:"index",setup(pa){const V=Oe(),{t:B}=ne(),U=c(!0),D=c([]),z=c(0),o=de({pageNo:1,pageSize:10,no:void 0,customerId:void 0,productId:void 0,warehouseId:void 0,returnTime:[],orderNo:void 0,accountId:void 0,status:void 0,remark:void 0,creator:void 0,refundStatus:void 0}),E=c(),P=c(!1),L=c([]),Y=c([]),q=c([]),H=c([]),K=c([]),v=async()=>{U.value=!0;try{const d=await I.getSaleReturnPage(o);D.value=d.list,z.value=d.total}finally{U.value=!1}},x=()=>{o.pageNo=1,v()},Z=()=>{E.value.resetFields(),x()},F=c(),N=(d,t)=>{F.value.open(d,t)},G=async d=>{try{await V.delConfirm(),await I.deleteSaleReturn(d),V.success(B("common.delSuccess")),await v(),S.value=S.value.filter(t=>!d.includes(t.id))}catch{}},M=async(d,t)=>{try{await V.confirm(`\u786E\u5B9A${t===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279"}\u8BE5\u9000\u8D27\u5417\uFF1F`),await I.updateSaleReturnStatus(d,t),V.success((t===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279")+"\u6210\u529F"),await v()}catch{}},j=async()=>{try{await V.exportConfirm(),P.value=!0;const d=await I.exportSaleReturn(o);Ye.excel(d,"\u9500\u552E\u9000\u8D27.xls")}catch{}finally{P.value=!1}},S=c([]),O=d=>{S.value=d};return se(async()=>{await v(),L.value=await Fe.getProductSimpleList(),Y.value=await $e.getCustomerSimpleList(),q.value=await Me(),H.value=await Xe.getWarehouseSimpleList(),K.value=await Ze.getAccountSimpleList()}),(d,t)=>{const R=me,s=fe,m=ye,h=be,Q=he,C=we,_=ve,ee=ge,W=Te,i=ke,ae=Ve,le=Ne,te=xe,re=Ue,y=ie("hasPermi"),oe=Se;return u(),b(w,null,[a(W,null,{default:r(()=>[a(ee,{class:"-mb-15px",model:l(o),ref_key:"queryFormRef",ref:E,inline:!0,"label-width":"68px"},{default:r(()=>[a(s,{label:"\u9000\u8D27\u5355\u53F7",prop:"no"},{default:r(()=>[a(R,{modelValue:l(o).no,"onUpdate:modelValue":t[0]||(t[0]=e=>l(o).no=e),placeholder:"\u8BF7\u8F93\u5165\u9000\u8D27\u5355\u53F7",clearable:"",onKeyup:T(x,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(s,{label:"\u4EA7\u54C1",prop:"productId"},{default:r(()=>[a(h,{modelValue:l(o).productId,"onUpdate:modelValue":t[1]||(t[1]=e=>l(o).productId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4EA7\u54C1",class:"!w-240px"},{default:r(()=>[(u(!0),b(w,null,k(l(L),e=>(u(),n(m,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(s,{label:"\u9000\u8D27\u65F6\u95F4",prop:"outTime"},{default:r(()=>[a(Q,{modelValue:l(o).outTime,"onUpdate:modelValue":t[2]||(t[2]=e=>l(o).outTime=e),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-220px"},null,8,["modelValue","default-time"])]),_:1}),a(s,{label:"\u5BA2\u6237",prop:"customerId"},{default:r(()=>[a(h,{modelValue:l(o).customerId,"onUpdate:modelValue":t[3]||(t[3]=e=>l(o).customerId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4F9B\u5BA2\u6237",class:"!w-240px"},{default:r(()=>[(u(!0),b(w,null,k(l(Y),e=>(u(),n(m,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(s,{label:"\u4ED3\u5E93",prop:"warehouseId"},{default:r(()=>[a(h,{modelValue:l(o).warehouseId,"onUpdate:modelValue":t[4]||(t[4]=e=>l(o).warehouseId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93",class:"!w-240px"},{default:r(()=>[(u(!0),b(w,null,k(l(H),e=>(u(),n(m,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(s,{label:"\u521B\u5EFA\u4EBA",prop:"creator"},{default:r(()=>[a(h,{modelValue:l(o).creator,"onUpdate:modelValue":t[5]||(t[5]=e=>l(o).creator=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u521B\u5EFA\u4EBA",class:"!w-240px"},{default:r(()=>[(u(!0),b(w,null,k(l(q),e=>(u(),n(m,{key:e.id,label:e.nickname,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(s,{label:"\u5173\u8054\u8BA2\u5355",prop:"orderNo"},{default:r(()=>[a(R,{modelValue:l(o).orderNo,"onUpdate:modelValue":t[6]||(t[6]=e=>l(o).orderNo=e),placeholder:"\u8BF7\u8F93\u5165\u5173\u8054\u8BA2\u5355",clearable:"",onKeyup:T(x,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(s,{label:"\u7ED3\u7B97\u8D26\u6237",prop:"accountId"},{default:r(()=>[a(h,{modelValue:l(o).accountId,"onUpdate:modelValue":t[7]||(t[7]=e=>l(o).accountId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u7ED3\u7B97\u8D26\u6237",class:"!w-240px"},{default:r(()=>[(u(!0),b(w,null,k(l(K),e=>(u(),n(m,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(s,{label:"\u9000\u6B3E\u72B6\u6001",prop:"refundStatus"},{default:r(()=>[a(h,{modelValue:l(o).refundStatus,"onUpdate:modelValue":t[8]||(t[8]=e=>l(o).refundStatus=e),placeholder:"\u8BF7\u9009\u62E9\u9000\u6B3E\u72B6\u6001",clearable:"",class:"!w-240px"},{default:r(()=>[a(m,{label:"\u672A\u9000\u6B3E",value:"0"}),a(m,{label:"\u90E8\u5206\u9000\u6B3E",value:"1"}),a(m,{label:"\u5168\u90E8\u9000\u6B3E",value:"2"})]),_:1},8,["modelValue"])]),_:1}),a(s,{label:"\u5BA1\u6838\u72B6\u6001",prop:"status"},{default:r(()=>[a(h,{modelValue:l(o).status,"onUpdate:modelValue":t[9]||(t[9]=e=>l(o).status=e),placeholder:"\u8BF7\u9009\u62E9\u5BA1\u6838\u72B6\u6001",clearable:"",class:"!w-240px"},{default:r(()=>[(u(!0),b(w,null,k(l(De)(l(J).ERP_AUDIT_STATUS),e=>(u(),n(m,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(s,{label:"\u5907\u6CE8",prop:"remark"},{default:r(()=>[a(R,{modelValue:l(o).remark,"onUpdate:modelValue":t[10]||(t[10]=e=>l(o).remark=e),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",clearable:"",onKeyup:T(x,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(s,null,{default:r(()=>[a(_,{onClick:x},{default:r(()=>[a(C,{icon:"ep:search",class:"mr-5px"}),p(" \u641C\u7D22")]),_:1}),a(_,{onClick:Z},{default:r(()=>[a(C,{icon:"ep:refresh",class:"mr-5px"}),p(" \u91CD\u7F6E")]),_:1}),f((u(),n(_,{type:"primary",plain:"",onClick:t[11]||(t[11]=e=>N("create"))},{default:r(()=>[a(C,{icon:"ep:plus",class:"mr-5px"}),p(" \u65B0\u589E ")]),_:1})),[[y,["erp:sale-return:create"]]]),f((u(),n(_,{type:"success",plain:"",onClick:j,loading:l(P)},{default:r(()=>[a(C,{icon:"ep:download",class:"mr-5px"}),p(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[y,["erp:sale-return:export"]]]),f((u(),n(_,{type:"danger",plain:"",onClick:t[12]||(t[12]=e=>G(l(S).map(g=>g.id))),disabled:l(S).length===0},{default:r(()=>[a(C,{icon:"ep:delete",class:"mr-5px"}),p(" \u5220\u9664 ")]),_:1},8,["disabled"])),[[y,["erp:sale-return:delete"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(W,null,{default:r(()=>[f((u(),n(te,{data:l(D),stripe:!0,"show-overflow-tooltip":!0,onSelectionChange:O},{default:r(()=>[a(i,{width:"30",label:"\u9009\u62E9",type:"selection"}),a(i,{"min-width":"180",label:"\u9000\u8D27\u5355\u53F7",align:"center",prop:"no"}),a(i,{label:"\u4EA7\u54C1\u4FE1\u606F",align:"center",prop:"productNames","min-width":"200"}),a(i,{label:"\u5BA2\u6237",align:"center",prop:"customerName"}),a(i,{label:"\u9000\u8D27\u65F6\u95F4",align:"center",prop:"returnTime",formatter:l(Ee),width:"120px"},null,8,["formatter"]),a(i,{label:"\u521B\u5EFA\u4EBA",align:"center",prop:"creatorName"}),a(i,{label:"\u603B\u6570\u91CF",align:"center",prop:"totalCount",formatter:l(ce)},null,8,["formatter"]),a(i,{label:"\u5E94\u9000\u91D1\u989D",align:"center",prop:"totalPrice",formatter:l($)},null,8,["formatter"]),a(i,{label:"\u5DF2\u9000\u91D1\u989D",align:"center",prop:"refundPrice",formatter:l($)},null,8,["formatter"]),a(i,{label:"\u672A\u9000\u91D1\u989D",align:"center"},{default:r(e=>[e.row.refundPrice===e.row.totalPrice?(u(),b("span",A,"0")):(u(),n(ae,{key:1,type:"danger"},{default:r(()=>[p(pe(l(_e)(e.row.totalPrice-e.row.refundPrice)),1)]),_:2},1024))]),_:1}),a(i,{label:"\u5BA1\u6838\u72B6\u6001",align:"center",fixed:"right",width:"90",prop:"status"},{default:r(e=>[a(le,{type:l(J).ERP_AUDIT_STATUS,value:e.row.status},null,8,["type","value"])]),_:1}),a(i,{label:"\u64CD\u4F5C",align:"center",fixed:"right",width:"220"},{default:r(e=>[f((u(),n(_,{link:"",onClick:g=>N("detail",e.row.id)},{default:r(()=>[p(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])),[[y,["erp:sale-return:query"]]]),f((u(),n(_,{link:"",type:"primary",onClick:g=>N("update",e.row.id),disabled:e.row.status===20},{default:r(()=>[p(" \u7F16\u8F91 ")]),_:2},1032,["onClick","disabled"])),[[y,["erp:sale-return:update"]]]),e.row.status===10?f((u(),n(_,{key:0,link:"",type:"primary",onClick:g=>M(e.row.id,20)},{default:r(()=>[p(" \u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[y,["erp:sale-return:update-status"]]]):f((u(),n(_,{key:1,link:"",type:"danger",onClick:g=>M(e.row.id,10)},{default:r(()=>[p(" \u53CD\u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[y,["erp:sale-return:update-status"]]]),f((u(),n(_,{link:"",type:"danger",onClick:g=>G([e.row.id])},{default:r(()=>[p(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[y,["erp:sale-return:delete"]]])]),_:1})]),_:1},8,["data"])),[[oe,l(U)]]),a(re,{total:l(z),page:l(o).pageNo,"onUpdate:page":t[13]||(t[13]=e=>l(o).pageNo=e),limit:l(o).pageSize,"onUpdate:limit":t[14]||(t[14]=e=>l(o).pageSize=e),onPagination:v},null,8,["total","page","limit"])]),_:1}),a(He,{ref_key:"formRef",ref:F,onSuccess:v},null,512)],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/erp/sale/return/index.vue"]])});export{ca as __tla,X as default};
