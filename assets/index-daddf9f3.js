import{d as le,k as te,r as _,n as re,p as oe,G as ie,o as i,c as h,b as a,e as r,a as l,H as A,F as w,g as C,q as c,h as d,w as m,e1 as F,L as ne,y as ce,z as pe,s as ue,x as se,A as _e,B as de,C as me,E as fe,i as ye,v as be,_ as he,__tla as we}from"./index-aaa5adb3.js";import{_ as ve,__tla as ge}from"./index-b47c179c.js";import{_ as ke,__tla as xe}from"./DictTag-1c1088ae.js";import{_ as Ve,__tla as Ue}from"./ContentWrap-04d7f6d1.js";import{a as Ce,D as G,__tla as Se}from"./dict-f2796e71.js";import{b as Ie,__tla as Ne}from"./formatTime-9c0e8879.js";import{d as Te}from"./download-20922b56.js";import{F as Pe,a as S,__tla as ze}from"./FinanceReceiptForm-fb075735.js";import{g as Ae,__tla as Fe}from"./index-c1a6a53a.js";import{S as Re,__tla as De}from"./index-d0a71f4f.js";import{A as Ye,__tla as Ee}from"./index-65b8ad69.js";import{u as He,__tla as qe}from"./useMessage-873da1e2.js";import{__tla as Le}from"./index-c602062a.js";import"./color-f5b6e279.js";import{__tla as Me}from"./index-5b7dcbf1.js";import{__tla as Ke}from"./Dialog-9a73a39c.js";import{__tla as Ge}from"./UploadFile-31413487.js";import{__tla as Be}from"./UploadFile.vue_vue_type_style_index_0_scoped_436eca1b_lang-d92f2323.js";import{__tla as Oe}from"./useUpload-c52dec87.js";import{__tla as Xe}from"./index-fb6b5360.js";import{__tla as Ze}from"./FinanceReceiptItemForm-7bb818dc.js";import{__tla as $e}from"./SaleOutReceiptEnableList-7bb3ff85.js";import{__tla as je}from"./index-24f49689.js";import{__tla as Je}from"./index-9d3f2f92.js";import{__tla as Qe}from"./SaleReturnRefundEnableList-f2aeadde.js";import{__tla as We}from"./index-07cbc903.js";import"./constants-99751ef9.js";import{__tla as ea}from"./index-b5d33a28.js";let B,aa=Promise.all([(()=>{try{return we}catch{}})(),(()=>{try{return ge}catch{}})(),(()=>{try{return xe}catch{}})(),(()=>{try{return Ue}catch{}})(),(()=>{try{return Se}catch{}})(),(()=>{try{return Ne}catch{}})(),(()=>{try{return ze}catch{}})(),(()=>{try{return Fe}catch{}})(),(()=>{try{return De}catch{}})(),(()=>{try{return Ee}catch{}})(),(()=>{try{return qe}catch{}})(),(()=>{try{return Le}catch{}})(),(()=>{try{return Me}catch{}})(),(()=>{try{return Ke}catch{}})(),(()=>{try{return Ge}catch{}})(),(()=>{try{return Be}catch{}})(),(()=>{try{return Oe}catch{}})(),(()=>{try{return Xe}catch{}})(),(()=>{try{return Ze}catch{}})(),(()=>{try{return $e}catch{}})(),(()=>{try{return je}catch{}})(),(()=>{try{return Je}catch{}})(),(()=>{try{return Qe}catch{}})(),(()=>{try{return We}catch{}})(),(()=>{try{return ea}catch{}})()]).then(async()=>{B=he(le({name:"ErpPurchaseOrder",__name:"index",setup(la){const v=He(),{t:O}=te(),I=_(!0),R=_([]),D=_(0),o=re({pageNo:1,pageSize:10,no:void 0,receiptTime:[],supplierId:void 0,creator:void 0,financeUserId:void 0,accountId:void 0,status:void 0,remark:void 0,bizNo:void 0}),Y=_(),N=_(!1),E=_([]),T=_([]),H=_([]),y=async()=>{I.value=!0;try{const n=await S.getFinanceReceiptPage(o);R.value=n.list,D.value=n.total}finally{I.value=!1}},g=()=>{o.pageNo=1,y()},X=()=>{Y.value.resetFields(),g()},q=_(),P=(n,t)=>{q.value.open(n,t)},L=async n=>{try{await v.delConfirm(),await S.deleteFinanceReceipt(n),v.success(O("common.delSuccess")),await y(),k.value=k.value.filter(t=>!n.includes(t.id))}catch{}},M=async(n,t)=>{try{await v.confirm(`\u786E\u5B9A${t===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279"}\u8BE5\u6536\u6B3E\u5355\u5417\uFF1F`),await S.updateFinanceReceiptStatus(n,t),v.success((t===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279")+"\u6210\u529F"),await y()}catch{}},Z=async()=>{try{await v.exportConfirm(),N.value=!0;const n=await S.exportFinanceReceipt(o);Te.excel(n,"\u6536\u6B3E\u5355.xls")}catch{}finally{N.value=!1}},k=_([]),$=n=>{k.value=n};return oe(async()=>{await y(),E.value=await Re.getSupplierSimpleList(),T.value=await Ae(),H.value=await Ye.getAccountSimpleList()}),(n,t)=>{const z=ne,u=ce,j=pe,x=ue,V=se,U=_e,s=de,J=me,K=Ve,p=fe,Q=ke,W=ye,ee=ve,f=ie("hasPermi"),ae=be;return i(),h(w,null,[a(K,null,{default:r(()=>[a(J,{class:"-mb-15px",model:l(o),ref_key:"queryFormRef",ref:Y,inline:!0,"label-width":"68px"},{default:r(()=>[a(u,{label:"\u6536\u6B3E\u5355\u53F7",prop:"no"},{default:r(()=>[a(z,{modelValue:l(o).no,"onUpdate:modelValue":t[0]||(t[0]=e=>l(o).no=e),placeholder:"\u8BF7\u8F93\u5165\u6536\u6B3E\u5355\u53F7",clearable:"",onKeyup:A(g,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(u,{label:"\u6536\u6B3E\u65F6\u95F4",prop:"receiptTime"},{default:r(()=>[a(j,{modelValue:l(o).receiptTime,"onUpdate:modelValue":t[1]||(t[1]=e=>l(o).receiptTime=e),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-220px"},null,8,["modelValue","default-time"])]),_:1}),a(u,{label:"\u4F9B\u5E94\u5546",prop:"supplierId"},{default:r(()=>[a(V,{modelValue:l(o).supplierId,"onUpdate:modelValue":t[2]||(t[2]=e=>l(o).supplierId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4F9B\u4F9B\u5E94\u5546",class:"!w-240px"},{default:r(()=>[(i(!0),h(w,null,C(l(E),e=>(i(),c(x,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(u,{label:"\u521B\u5EFA\u4EBA",prop:"creator"},{default:r(()=>[a(V,{modelValue:l(o).creator,"onUpdate:modelValue":t[3]||(t[3]=e=>l(o).creator=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u521B\u5EFA\u4EBA",class:"!w-240px"},{default:r(()=>[(i(!0),h(w,null,C(l(T),e=>(i(),c(x,{key:e.id,label:e.nickname,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(u,{label:"\u8D22\u52A1\u4EBA\u5458",prop:"financeUserId"},{default:r(()=>[a(V,{modelValue:l(o).financeUserId,"onUpdate:modelValue":t[4]||(t[4]=e=>l(o).financeUserId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u8D22\u52A1\u4EBA\u5458",class:"!w-240px"},{default:r(()=>[(i(!0),h(w,null,C(l(T),e=>(i(),c(x,{key:e.id,label:e.nickname,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(u,{label:"\u6536\u6B3E\u8D26\u6237",prop:"accountId"},{default:r(()=>[a(V,{modelValue:l(o).accountId,"onUpdate:modelValue":t[5]||(t[5]=e=>l(o).accountId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u6536\u6B3E\u8D26\u6237",class:"!w-240px"},{default:r(()=>[(i(!0),h(w,null,C(l(H),e=>(i(),c(x,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(u,{label:"\u72B6\u6001",prop:"status"},{default:r(()=>[a(V,{modelValue:l(o).status,"onUpdate:modelValue":t[6]||(t[6]=e=>l(o).status=e),placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",clearable:"",class:"!w-240px"},{default:r(()=>[(i(!0),h(w,null,C(l(Ce)(l(G).ERP_AUDIT_STATUS),e=>(i(),c(x,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(u,{label:"\u5907\u6CE8",prop:"remark"},{default:r(()=>[a(z,{modelValue:l(o).remark,"onUpdate:modelValue":t[7]||(t[7]=e=>l(o).remark=e),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",clearable:"",onKeyup:A(g,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(u,{label:"\u91C7\u8D2D\u5355\u53F7",prop:"bizNo"},{default:r(()=>[a(z,{modelValue:l(o).bizNo,"onUpdate:modelValue":t[8]||(t[8]=e=>l(o).bizNo=e),placeholder:"\u8BF7\u8F93\u5165\u91C7\u8D2D\u5355\u53F7",clearable:"",onKeyup:A(g,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(u,null,{default:r(()=>[a(s,{onClick:g},{default:r(()=>[a(U,{icon:"ep:search",class:"mr-5px"}),d(" \u641C\u7D22")]),_:1}),a(s,{onClick:X},{default:r(()=>[a(U,{icon:"ep:refresh",class:"mr-5px"}),d(" \u91CD\u7F6E")]),_:1}),m((i(),c(s,{type:"primary",plain:"",onClick:t[9]||(t[9]=e=>P("create"))},{default:r(()=>[a(U,{icon:"ep:plus",class:"mr-5px"}),d(" \u65B0\u589E ")]),_:1})),[[f,["erp:finance-receipt:create"]]]),m((i(),c(s,{type:"success",plain:"",onClick:Z,loading:l(N)},{default:r(()=>[a(U,{icon:"ep:download",class:"mr-5px"}),d(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[f,["erp:finance-receipt:export"]]]),m((i(),c(s,{type:"danger",plain:"",onClick:t[10]||(t[10]=e=>L(l(k).map(b=>b.id))),disabled:l(k).length===0},{default:r(()=>[a(U,{icon:"ep:delete",class:"mr-5px"}),d(" \u5220\u9664 ")]),_:1},8,["disabled"])),[[f,["erp:finance-receipt:delete"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(K,null,{default:r(()=>[m((i(),c(W,{data:l(R),stripe:!0,"show-overflow-tooltip":!0,onSelectionChange:$},{default:r(()=>[a(p,{width:"30",label:"\u9009\u62E9",type:"selection"}),a(p,{"min-width":"180",label:"\u6536\u6B3E\u5355\u53F7",align:"center",prop:"no"}),a(p,{label:"\u4F9B\u5E94\u5546",align:"center",prop:"supplierName"}),a(p,{label:"\u6536\u6B3E\u65F6\u95F4",align:"center",prop:"receiptTime",formatter:l(Ie),width:"120px"},null,8,["formatter"]),a(p,{label:"\u521B\u5EFA\u4EBA",align:"center",prop:"creatorName"}),a(p,{label:"\u8D22\u52A1\u4EBA\u5458",align:"center",prop:"financeUserName"}),a(p,{label:"\u6536\u6B3E\u8D26\u6237",align:"center",prop:"accountName"}),a(p,{label:"\u5408\u8BA1\u6536\u6B3E",align:"center",prop:"totalPrice",formatter:l(F)},null,8,["formatter"]),a(p,{label:"\u4F18\u60E0\u91D1\u989D",align:"center",prop:"discountPrice",formatter:l(F)},null,8,["formatter"]),a(p,{label:"\u5B9E\u9645\u6536\u6B3E",align:"center",prop:"receiptPrice",formatter:l(F)},null,8,["formatter"]),a(p,{label:"\u72B6\u6001",align:"center",fixed:"right",width:"90",prop:"status"},{default:r(e=>[a(Q,{type:l(G).ERP_AUDIT_STATUS,value:e.row.status},null,8,["type","value"])]),_:1}),a(p,{label:"\u64CD\u4F5C",align:"center",fixed:"right",width:"220"},{default:r(e=>[m((i(),c(s,{link:"",onClick:b=>P("detail",e.row.id)},{default:r(()=>[d(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])),[[f,["erp:finance-receipt:query"]]]),m((i(),c(s,{link:"",type:"primary",onClick:b=>P("update",e.row.id),disabled:e.row.status===20},{default:r(()=>[d(" \u7F16\u8F91 ")]),_:2},1032,["onClick","disabled"])),[[f,["erp:finance-receipt:update"]]]),e.row.status===10?m((i(),c(s,{key:0,link:"",type:"primary",onClick:b=>M(e.row.id,20)},{default:r(()=>[d(" \u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[f,["erp:finance-receipt:update-status"]]]):m((i(),c(s,{key:1,link:"",type:"danger",onClick:b=>M(e.row.id,10)},{default:r(()=>[d(" \u53CD\u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[f,["erp:finance-receipt:update-status"]]]),m((i(),c(s,{link:"",type:"danger",onClick:b=>L([e.row.id])},{default:r(()=>[d(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[f,["erp:finance-receipt:delete"]]])]),_:1})]),_:1},8,["data"])),[[ae,l(I)]]),a(ee,{total:l(D),page:l(o).pageNo,"onUpdate:page":t[11]||(t[11]=e=>l(o).pageNo=e),limit:l(o).pageSize,"onUpdate:limit":t[12]||(t[12]=e=>l(o).pageSize=e),onPagination:y},null,8,["total","page","limit"])]),_:1}),a(Pe,{ref_key:"formRef",ref:q,onSuccess:y},null,512)],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/erp/finance/receipt/index.vue"]])});export{aa as __tla,B as default};
