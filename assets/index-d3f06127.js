import{d as ue,i as ne,r as i,e as de,p as se,L as pe,o as u,c as y,f as a,w as r,a as l,M as T,F as w,q as k,v as n,h as c,x as f,e4 as ie,e1 as W,t as ce,d$ as _e,Q as me,A as fe,y as he,z as ye,B as be,C as we,D as ve,G as ge,H as ke,al as Ve,I as xe,J as Ce,_ as Ie,__tla as Se}from"./index-f0743f71.js";import{_ as Pe,__tla as Ue}from"./index-cf7b3541.js";import{_ as Ne,__tla as Re}from"./DictTag-4f08045a.js";import{_ as Te,__tla as De}from"./ContentWrap-5acc4fb9.js";import{a as Ae,D as B,__tla as Ye}from"./dict-4a9940b3.js";import{b as Le,__tla as Me}from"./formatTime-e6df2ea5.js";import{d as qe}from"./download-20922b56.js";import{P as S,__tla as ze}from"./index-27df153b.js";import Ee,{__tla as Ke}from"./PurchaseReturnForm-36d1f80f.js";import{P as $e,__tla as Fe}from"./index-45617213.js";import{g as Ge,__tla as He}from"./index-5f468446.js";import{S as We,__tla as Be}from"./index-8447da2a.js";import{W as Je,__tla as Qe}from"./index-c5ebd655.js";import{A as Xe,__tla as Ze}from"./index-d5e40f66.js";import{u as je,__tla as Oe}from"./useMessage-75a00a06.js";import{__tla as ea}from"./index-8beae3df.js";import"./color-f5b6e279.js";import{__tla as aa}from"./index-a48a5540.js";import{__tla as la}from"./Dialog-8f786edd.js";import{__tla as ta}from"./UploadFile-8fbb57ef.js";import{__tla as ra}from"./UploadFile.vue_vue_type_style_index_0_scoped_436eca1b_lang-cd3de5a5.js";import{__tla as oa}from"./useUpload-27a6f734.js";import{__tla as ua}from"./index-21698e53.js";import{__tla as na}from"./PurchaseReturnItemForm-1255c8c5.js";import{__tla as da}from"./index-cf2468e1.js";import{__tla as sa}from"./PurchaseOrderReturnEnableList-5d4827fd.js";import{__tla as pa}from"./index-a1e48d8b.js";let J,ia=Promise.all([(()=>{try{return Se}catch{}})(),(()=>{try{return Ue}catch{}})(),(()=>{try{return Re}catch{}})(),(()=>{try{return De}catch{}})(),(()=>{try{return Ye}catch{}})(),(()=>{try{return Me}catch{}})(),(()=>{try{return ze}catch{}})(),(()=>{try{return Ke}catch{}})(),(()=>{try{return Fe}catch{}})(),(()=>{try{return He}catch{}})(),(()=>{try{return Be}catch{}})(),(()=>{try{return Qe}catch{}})(),(()=>{try{return Ze}catch{}})(),(()=>{try{return Oe}catch{}})(),(()=>{try{return ea}catch{}})(),(()=>{try{return aa}catch{}})(),(()=>{try{return la}catch{}})(),(()=>{try{return ta}catch{}})(),(()=>{try{return ra}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return na}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return sa}catch{}})(),(()=>{try{return pa}catch{}})()]).then(async()=>{let D;D={key:0},J=Ie(ue({name:"ErpPurchaseReturn",__name:"index",setup(ca){const V=je(),{t:Q}=ne(),P=i(!0),A=i([]),Y=i(0),o=de({pageNo:1,pageSize:10,no:void 0,supplierId:void 0,productId:void 0,warehouseId:void 0,returnTime:[],orderNo:void 0,accountId:void 0,status:void 0,refundStatus:void 0,remark:void 0,creator:void 0}),L=i(),U=i(!1),M=i([]),q=i([]),z=i([]),E=i([]),K=i([]),v=async()=>{P.value=!0;try{const d=await S.getPurchaseReturnPage(o);A.value=d.list,Y.value=d.total}finally{P.value=!1}},x=()=>{o.pageNo=1,v()},X=()=>{L.value.resetFields(),x()},$=i(),N=(d,t)=>{$.value.open(d,t)},F=async d=>{try{await V.delConfirm(),await S.deletePurchaseReturn(d),V.success(Q("common.delSuccess")),await v(),C.value=C.value.filter(t=>!d.includes(t.id))}catch{}},G=async(d,t)=>{try{await V.confirm(`\u786E\u5B9A${t===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279"}\u8BE5\u9000\u8D27\u5417\uFF1F`),await S.updatePurchaseReturnStatus(d,t),V.success((t===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279")+"\u6210\u529F"),await v()}catch{}},Z=async()=>{try{await V.exportConfirm(),U.value=!0;const d=await S.exportPurchaseReturn(o);qe.excel(d,"\u91C7\u8D2D\u9000\u8D27.xls")}catch{}finally{U.value=!1}},C=i([]),j=d=>{C.value=d};return se(async()=>{await v(),M.value=await $e.getProductSimpleList(),q.value=await We.getSupplierSimpleList(),z.value=await Ge(),E.value=await Je.getWarehouseSimpleList(),K.value=await Xe.getAccountSimpleList()}),(d,t)=>{const R=me,s=fe,m=he,b=ye,O=be,I=we,_=ve,ee=ge,H=Te,p=ke,ae=Ve,le=Ne,te=xe,re=Pe,h=pe("hasPermi"),oe=Ce;return u(),y(w,null,[a(H,null,{default:r(()=>[a(ee,{class:"-mb-15px",model:l(o),ref_key:"queryFormRef",ref:L,inline:!0,"label-width":"68px"},{default:r(()=>[a(s,{label:"\u9000\u8D27\u5355\u53F7",prop:"no"},{default:r(()=>[a(R,{modelValue:l(o).no,"onUpdate:modelValue":t[0]||(t[0]=e=>l(o).no=e),placeholder:"\u8BF7\u8F93\u5165\u9000\u8D27\u5355\u53F7",clearable:"",onKeyup:T(x,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(s,{label:"\u4EA7\u54C1",prop:"productId"},{default:r(()=>[a(b,{modelValue:l(o).productId,"onUpdate:modelValue":t[1]||(t[1]=e=>l(o).productId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4EA7\u54C1",class:"!w-240px"},{default:r(()=>[(u(!0),y(w,null,k(l(M),e=>(u(),n(m,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(s,{label:"\u9000\u8D27\u65F6\u95F4",prop:"inTime"},{default:r(()=>[a(O,{modelValue:l(o).inTime,"onUpdate:modelValue":t[2]||(t[2]=e=>l(o).inTime=e),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-220px"},null,8,["modelValue","default-time"])]),_:1}),a(s,{label:"\u4F9B\u5E94\u5546",prop:"supplierId"},{default:r(()=>[a(b,{modelValue:l(o).supplierId,"onUpdate:modelValue":t[3]||(t[3]=e=>l(o).supplierId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4F9B\u4F9B\u5E94\u5546",class:"!w-240px"},{default:r(()=>[(u(!0),y(w,null,k(l(q),e=>(u(),n(m,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(s,{label:"\u4ED3\u5E93",prop:"warehouseId"},{default:r(()=>[a(b,{modelValue:l(o).warehouseId,"onUpdate:modelValue":t[4]||(t[4]=e=>l(o).warehouseId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93",class:"!w-240px"},{default:r(()=>[(u(!0),y(w,null,k(l(E),e=>(u(),n(m,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(s,{label:"\u521B\u5EFA\u4EBA",prop:"creator"},{default:r(()=>[a(b,{modelValue:l(o).creator,"onUpdate:modelValue":t[5]||(t[5]=e=>l(o).creator=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u521B\u5EFA\u4EBA",class:"!w-240px"},{default:r(()=>[(u(!0),y(w,null,k(l(z),e=>(u(),n(m,{key:e.id,label:e.nickname,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(s,{label:"\u5173\u8054\u8BA2\u5355",prop:"orderNo"},{default:r(()=>[a(R,{modelValue:l(o).orderNo,"onUpdate:modelValue":t[6]||(t[6]=e=>l(o).orderNo=e),placeholder:"\u8BF7\u8F93\u5165\u5173\u8054\u8BA2\u5355",clearable:"",onKeyup:T(x,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(s,{label:"\u7ED3\u7B97\u8D26\u6237",prop:"accountId"},{default:r(()=>[a(b,{modelValue:l(o).accountId,"onUpdate:modelValue":t[7]||(t[7]=e=>l(o).accountId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u7ED3\u7B97\u8D26\u6237",class:"!w-240px"},{default:r(()=>[(u(!0),y(w,null,k(l(K),e=>(u(),n(m,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(s,{label:"\u9000\u6B3E\u72B6\u6001",prop:"refundStatus"},{default:r(()=>[a(b,{modelValue:l(o).refundStatus,"onUpdate:modelValue":t[8]||(t[8]=e=>l(o).refundStatus=e),placeholder:"\u8BF7\u9009\u62E9\u9000\u6B3E\u72B6\u6001",clearable:"",class:"!w-240px"},{default:r(()=>[a(m,{label:"\u672A\u9000\u6B3E",value:"0"}),a(m,{label:"\u90E8\u5206\u9000\u6B3E",value:"1"}),a(m,{label:"\u5168\u90E8\u9000\u6B3E",value:"2"})]),_:1},8,["modelValue"])]),_:1}),a(s,{label:"\u5BA1\u6838\u72B6\u6001",prop:"status"},{default:r(()=>[a(b,{modelValue:l(o).status,"onUpdate:modelValue":t[9]||(t[9]=e=>l(o).status=e),placeholder:"\u8BF7\u9009\u62E9\u5BA1\u6838\u72B6\u6001",clearable:"",class:"!w-240px"},{default:r(()=>[(u(!0),y(w,null,k(l(Ae)(l(B).ERP_AUDIT_STATUS),e=>(u(),n(m,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(s,{label:"\u5907\u6CE8",prop:"remark"},{default:r(()=>[a(R,{modelValue:l(o).remark,"onUpdate:modelValue":t[10]||(t[10]=e=>l(o).remark=e),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",clearable:"",onKeyup:T(x,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(s,null,{default:r(()=>[a(_,{onClick:x},{default:r(()=>[a(I,{icon:"ep:search",class:"mr-5px"}),c(" \u641C\u7D22")]),_:1}),a(_,{onClick:X},{default:r(()=>[a(I,{icon:"ep:refresh",class:"mr-5px"}),c(" \u91CD\u7F6E")]),_:1}),f((u(),n(_,{type:"primary",plain:"",onClick:t[11]||(t[11]=e=>N("create"))},{default:r(()=>[a(I,{icon:"ep:plus",class:"mr-5px"}),c(" \u65B0\u589E ")]),_:1})),[[h,["erp:purchase-return:create"]]]),f((u(),n(_,{type:"success",plain:"",onClick:Z,loading:l(U)},{default:r(()=>[a(I,{icon:"ep:download",class:"mr-5px"}),c(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[h,["erp:purchase-return:export"]]]),f((u(),n(_,{type:"danger",plain:"",onClick:t[12]||(t[12]=e=>F(l(C).map(g=>g.id))),disabled:l(C).length===0},{default:r(()=>[a(I,{icon:"ep:delete",class:"mr-5px"}),c(" \u5220\u9664 ")]),_:1},8,["disabled"])),[[h,["erp:purchase-return:delete"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(H,null,{default:r(()=>[f((u(),n(te,{data:l(A),stripe:!0,"show-overflow-tooltip":!0,onSelectionChange:j},{default:r(()=>[a(p,{width:"30",label:"\u9009\u62E9",type:"selection"}),a(p,{"min-width":"180",label:"\u9000\u8D27\u5355\u53F7",align:"center",prop:"no"}),a(p,{label:"\u4EA7\u54C1\u4FE1\u606F",align:"center",prop:"productNames","min-width":"200"}),a(p,{label:"\u4F9B\u5E94\u5546",align:"center",prop:"supplierName"}),a(p,{label:"\u9000\u8D27\u65F6\u95F4",align:"center",prop:"returnTime",formatter:l(Le),width:"120px"},null,8,["formatter"]),a(p,{label:"\u521B\u5EFA\u4EBA",align:"center",prop:"creatorName"}),a(p,{label:"\u603B\u6570\u91CF",align:"center",prop:"totalCount",formatter:l(ie)},null,8,["formatter"]),a(p,{label:"\u5E94\u9000\u91D1\u989D",align:"center",prop:"totalPrice",formatter:l(W)},null,8,["formatter"]),a(p,{label:"\u5DF2\u9000\u91D1\u989D",align:"center",prop:"refundPrice",formatter:l(W)},null,8,["formatter"]),a(p,{label:"\u672A\u9000\u91D1\u989D",align:"center"},{default:r(e=>[e.row.refundPrice===e.row.totalPrice?(u(),y("span",D,"0")):(u(),n(ae,{key:1,type:"danger"},{default:r(()=>[c(ce(l(_e)(e.row.totalPrice-e.row.refundPrice)),1)]),_:2},1024))]),_:1}),a(p,{label:"\u5BA1\u6838\u72B6\u6001",align:"center",fixed:"right",width:"90",prop:"status"},{default:r(e=>[a(le,{type:l(B).ERP_AUDIT_STATUS,value:e.row.status},null,8,["type","value"])]),_:1}),a(p,{label:"\u64CD\u4F5C",align:"center",fixed:"right",width:"220"},{default:r(e=>[f((u(),n(_,{link:"",onClick:g=>N("detail",e.row.id)},{default:r(()=>[c(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])),[[h,["erp:purchase-return:query"]]]),f((u(),n(_,{link:"",type:"primary",onClick:g=>N("update",e.row.id),disabled:e.row.status===20},{default:r(()=>[c(" \u7F16\u8F91 ")]),_:2},1032,["onClick","disabled"])),[[h,["erp:purchase-return:update"]]]),e.row.status===10?f((u(),n(_,{key:0,link:"",type:"primary",onClick:g=>G(e.row.id,20)},{default:r(()=>[c(" \u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[h,["erp:purchase-return:update-status"]]]):f((u(),n(_,{key:1,link:"",type:"danger",onClick:g=>G(e.row.id,10)},{default:r(()=>[c(" \u53CD\u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[h,["erp:purchase-return:update-status"]]]),f((u(),n(_,{link:"",type:"danger",onClick:g=>F([e.row.id])},{default:r(()=>[c(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[h,["erp:purchase-return:delete"]]])]),_:1})]),_:1},8,["data"])),[[oe,l(P)]]),a(re,{total:l(Y),page:l(o).pageNo,"onUpdate:page":t[13]||(t[13]=e=>l(o).pageNo=e),limit:l(o).pageSize,"onUpdate:limit":t[14]||(t[14]=e=>l(o).pageSize=e),onPagination:v},null,8,["total","page","limit"])]),_:1}),a(Ee,{ref_key:"formRef",ref:$,onSuccess:v},null,512)],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/erp/purchase/return/index.vue"]])});export{ia as __tla,J as default};
