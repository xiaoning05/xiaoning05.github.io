import{d as te,k as re,r as _,n as oe,p as ue,G as se,o as u,c as x,b as e,e as r,a as l,H as G,F as V,g as C,q as d,h as m,w as f,e4 as D,e1 as N,L as pe,y as de,s as ne,x as ie,z as ce,A as _e,B as me,C as fe,E as he,i as ye,v as be,_ as ve,__tla as we}from"./index-aaa5adb3.js";import{_ as ge,__tla as ke}from"./index-b47c179c.js";import{_ as xe,__tla as Ve}from"./DictTag-1c1088ae.js";import{_ as Se,__tla as Ce}from"./ContentWrap-04d7f6d1.js";import{a as Pe,D as K,__tla as Ue}from"./dict-f2796e71.js";import{b as Te,__tla as Ie}from"./formatTime-9c0e8879.js";import{d as De}from"./download-20922b56.js";import{P,__tla as Ne}from"./index-6f17cbde.js";import Ae,{__tla as Ye}from"./PurchaseOrderForm-b983226f.js";import{P as qe,__tla as ze}from"./index-24f49689.js";import{g as Ee,__tla as Oe}from"./index-c1a6a53a.js";import{S as Re,__tla as He}from"./index-d0a71f4f.js";import{u as Le,__tla as Me}from"./useMessage-873da1e2.js";import{__tla as Fe}from"./index-c602062a.js";import"./color-f5b6e279.js";import{__tla as Ge}from"./index-5b7dcbf1.js";import{__tla as Ke}from"./Dialog-9a73a39c.js";import{__tla as Be}from"./UploadFile-31413487.js";import{__tla as Xe}from"./UploadFile.vue_vue_type_style_index_0_scoped_436eca1b_lang-d92f2323.js";import{__tla as Ze}from"./useUpload-c52dec87.js";import{__tla as $e}from"./index-fb6b5360.js";import{__tla as je}from"./PurchaseOrderItemForm-fd546e2a.js";import{__tla as Je}from"./index-d9ace307.js";import{__tla as Qe}from"./index-65b8ad69.js";let B,We=Promise.all([(()=>{try{return we}catch{}})(),(()=>{try{return ke}catch{}})(),(()=>{try{return Ve}catch{}})(),(()=>{try{return Ce}catch{}})(),(()=>{try{return Ue}catch{}})(),(()=>{try{return Ie}catch{}})(),(()=>{try{return Ne}catch{}})(),(()=>{try{return Ye}catch{}})(),(()=>{try{return ze}catch{}})(),(()=>{try{return Oe}catch{}})(),(()=>{try{return He}catch{}})(),(()=>{try{return Me}catch{}})(),(()=>{try{return Fe}catch{}})(),(()=>{try{return Ge}catch{}})(),(()=>{try{return Ke}catch{}})(),(()=>{try{return Be}catch{}})(),(()=>{try{return Xe}catch{}})(),(()=>{try{return Ze}catch{}})(),(()=>{try{return $e}catch{}})(),(()=>{try{return je}catch{}})(),(()=>{try{return Je}catch{}})(),(()=>{try{return Qe}catch{}})()]).then(async()=>{B=ve(te({name:"ErpPurchaseOrder",__name:"index",setup(ea){const w=Le(),{t:X}=re(),U=_(!0),A=_([]),Y=_(0),o=oe({pageNo:1,pageSize:10,no:void 0,supplierId:void 0,productId:void 0,orderTime:[],status:void 0,remark:void 0,creator:void 0,inStatus:void 0,returnStatus:void 0}),q=_(),T=_(!1),z=_([]),E=_([]),O=_([]),y=async()=>{U.value=!0;try{const s=await P.getPurchaseOrderPage(o);A.value=s.list,Y.value=s.total}finally{U.value=!1}},S=()=>{o.pageNo=1,y()},Z=()=>{q.value.resetFields(),S()},R=_(),I=(s,t)=>{R.value.open(s,t)},H=async s=>{try{await w.delConfirm(),await P.deletePurchaseOrder(s),w.success(X("common.delSuccess")),await y(),g.value=g.value.filter(t=>!s.includes(t.id))}catch{}},L=async(s,t)=>{try{await w.confirm(`\u786E\u5B9A${t===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279"}\u8BE5\u8BA2\u5355\u5417\uFF1F`),await P.updatePurchaseOrderStatus(s,t),w.success((t===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279")+"\u6210\u529F"),await y()}catch{}},$=async()=>{try{await w.exportConfirm(),T.value=!0;const s=await P.exportPurchaseOrder(o);De.excel(s,"\u9500\u552E\u8BA2\u5355.xls")}catch{}finally{T.value=!1}},g=_([]),j=s=>{g.value=s};return ue(async()=>{await y(),z.value=await qe.getProductSimpleList(),E.value=await Re.getSupplierSimpleList(),O.value=await Ee()}),(s,t)=>{const M=pe,n=de,i=ne,b=ie,J=ce,k=_e,c=me,Q=fe,F=Se,p=he,W=xe,ee=ye,ae=ge,h=se("hasPermi"),le=be;return u(),x(V,null,[e(F,null,{default:r(()=>[e(Q,{class:"-mb-15px",model:l(o),ref_key:"queryFormRef",ref:q,inline:!0,"label-width":"68px"},{default:r(()=>[e(n,{label:"\u8BA2\u5355\u5355\u53F7",prop:"no"},{default:r(()=>[e(M,{modelValue:l(o).no,"onUpdate:modelValue":t[0]||(t[0]=a=>l(o).no=a),placeholder:"\u8BF7\u8F93\u5165\u8BA2\u5355\u5355\u53F7",clearable:"",onKeyup:G(S,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(n,{label:"\u4EA7\u54C1",prop:"productId"},{default:r(()=>[e(b,{modelValue:l(o).productId,"onUpdate:modelValue":t[1]||(t[1]=a=>l(o).productId=a),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4EA7\u54C1",class:"!w-240px"},{default:r(()=>[(u(!0),x(V,null,C(l(z),a=>(u(),d(i,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u8BA2\u5355\u65F6\u95F4",prop:"orderTime"},{default:r(()=>[e(J,{modelValue:l(o).orderTime,"onUpdate:modelValue":t[2]||(t[2]=a=>l(o).orderTime=a),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-220px"},null,8,["modelValue","default-time"])]),_:1}),e(n,{label:"\u4F9B\u5E94\u5546",prop:"supplierId"},{default:r(()=>[e(b,{modelValue:l(o).supplierId,"onUpdate:modelValue":t[3]||(t[3]=a=>l(o).supplierId=a),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4F9B\u4F9B\u5E94\u5546",class:"!w-240px"},{default:r(()=>[(u(!0),x(V,null,C(l(E),a=>(u(),d(i,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u521B\u5EFA\u4EBA",prop:"creator"},{default:r(()=>[e(b,{modelValue:l(o).creator,"onUpdate:modelValue":t[4]||(t[4]=a=>l(o).creator=a),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u521B\u5EFA\u4EBA",class:"!w-240px"},{default:r(()=>[(u(!0),x(V,null,C(l(O),a=>(u(),d(i,{key:a.id,label:a.nickname,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u72B6\u6001",prop:"status"},{default:r(()=>[e(b,{modelValue:l(o).status,"onUpdate:modelValue":t[5]||(t[5]=a=>l(o).status=a),placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",clearable:"",class:"!w-240px"},{default:r(()=>[(u(!0),x(V,null,C(l(Pe)(l(K).ERP_AUDIT_STATUS),a=>(u(),d(i,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u5907\u6CE8",prop:"remark"},{default:r(()=>[e(M,{modelValue:l(o).remark,"onUpdate:modelValue":t[6]||(t[6]=a=>l(o).remark=a),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",clearable:"",onKeyup:G(S,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(n,{label:"\u5165\u5E93\u6570\u91CF",prop:"inStatus"},{default:r(()=>[e(b,{modelValue:l(o).inStatus,"onUpdate:modelValue":t[7]||(t[7]=a=>l(o).inStatus=a),placeholder:"\u8BF7\u9009\u62E9\u5165\u5E93\u6570\u91CF",clearable:"",class:"!w-240px"},{default:r(()=>[e(i,{label:"\u672A\u5165\u5E93",value:"0"}),e(i,{label:"\u90E8\u5206\u5165\u5E93",value:"1"}),e(i,{label:"\u5168\u90E8\u5165\u5E93",value:"2"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u9000\u8D27\u6570\u91CF",prop:"returnStatus"},{default:r(()=>[e(b,{modelValue:l(o).returnStatus,"onUpdate:modelValue":t[8]||(t[8]=a=>l(o).returnStatus=a),placeholder:"\u8BF7\u9009\u62E9\u9000\u8D27\u6570\u91CF",clearable:"",class:"!w-240px"},{default:r(()=>[e(i,{label:"\u672A\u9000\u8D27",value:"0"}),e(i,{label:"\u90E8\u5206\u9000\u8D27",value:"1"}),e(i,{label:"\u5168\u90E8\u9000\u8D27",value:"2"})]),_:1},8,["modelValue"])]),_:1}),e(n,null,{default:r(()=>[e(c,{onClick:S},{default:r(()=>[e(k,{icon:"ep:search",class:"mr-5px"}),m(" \u641C\u7D22")]),_:1}),e(c,{onClick:Z},{default:r(()=>[e(k,{icon:"ep:refresh",class:"mr-5px"}),m(" \u91CD\u7F6E")]),_:1}),f((u(),d(c,{type:"primary",plain:"",onClick:t[9]||(t[9]=a=>I("create"))},{default:r(()=>[e(k,{icon:"ep:plus",class:"mr-5px"}),m(" \u65B0\u589E ")]),_:1})),[[h,["erp:purchase-order:create"]]]),f((u(),d(c,{type:"success",plain:"",onClick:$,loading:l(T)},{default:r(()=>[e(k,{icon:"ep:download",class:"mr-5px"}),m(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[h,["erp:purchase-order:export"]]]),f((u(),d(c,{type:"danger",plain:"",onClick:t[10]||(t[10]=a=>H(l(g).map(v=>v.id))),disabled:l(g).length===0},{default:r(()=>[e(k,{icon:"ep:delete",class:"mr-5px"}),m(" \u5220\u9664 ")]),_:1},8,["disabled"])),[[h,["erp:purchase-order:delete"]]])]),_:1})]),_:1},8,["model"])]),_:1}),e(F,null,{default:r(()=>[f((u(),d(ee,{data:l(A),stripe:!0,"show-overflow-tooltip":!0,onSelectionChange:j},{default:r(()=>[e(p,{width:"30",label:"\u9009\u62E9",type:"selection"}),e(p,{"min-width":"180",label:"\u8BA2\u5355\u5355\u53F7",align:"center",prop:"no"}),e(p,{label:"\u4EA7\u54C1\u4FE1\u606F",align:"center",prop:"productNames","min-width":"200"}),e(p,{label:"\u4F9B\u5E94\u5546",align:"center",prop:"supplierName"}),e(p,{label:"\u8BA2\u5355\u65F6\u95F4",align:"center",prop:"orderTime",formatter:l(Te),width:"120px"},null,8,["formatter"]),e(p,{label:"\u521B\u5EFA\u4EBA",align:"center",prop:"creatorName"}),e(p,{label:"\u603B\u6570\u91CF",align:"center",prop:"totalCount",formatter:l(D)},null,8,["formatter"]),e(p,{label:"\u5165\u5E93\u6570\u91CF",align:"center",prop:"inCount",formatter:l(D)},null,8,["formatter"]),e(p,{label:"\u9000\u8D27\u6570\u91CF",align:"center",prop:"returnCount",formatter:l(D)},null,8,["formatter"]),e(p,{label:"\u91D1\u989D\u5408\u8BA1",align:"center",prop:"totalProductPrice",formatter:l(N)},null,8,["formatter"]),e(p,{label:"\u542B\u7A0E\u91D1\u989D",align:"center",prop:"totalPrice",formatter:l(N)},null,8,["formatter"]),e(p,{label:"\u652F\u4ED8\u8BA2\u91D1",align:"center",prop:"depositPrice",formatter:l(N)},null,8,["formatter"]),e(p,{label:"\u72B6\u6001",align:"center",fixed:"right",width:"90",prop:"status"},{default:r(a=>[e(W,{type:l(K).ERP_AUDIT_STATUS,value:a.row.status},null,8,["type","value"])]),_:1}),e(p,{label:"\u64CD\u4F5C",align:"center",fixed:"right",width:"220"},{default:r(a=>[f((u(),d(c,{link:"",onClick:v=>I("detail",a.row.id)},{default:r(()=>[m(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])),[[h,["erp:purchase-order:query"]]]),f((u(),d(c,{link:"",type:"primary",onClick:v=>I("update",a.row.id),disabled:a.row.status===20},{default:r(()=>[m(" \u7F16\u8F91 ")]),_:2},1032,["onClick","disabled"])),[[h,["erp:purchase-order:update"]]]),a.row.status===10?f((u(),d(c,{key:0,link:"",type:"primary",onClick:v=>L(a.row.id,20)},{default:r(()=>[m(" \u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[h,["erp:purchase-order:update-status"]]]):f((u(),d(c,{key:1,link:"",type:"danger",onClick:v=>L(a.row.id,10)},{default:r(()=>[m(" \u53CD\u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[h,["erp:purchase-order:update-status"]]]),f((u(),d(c,{link:"",type:"danger",onClick:v=>H([a.row.id])},{default:r(()=>[m(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[h,["erp:purchase-order:delete"]]])]),_:1})]),_:1},8,["data"])),[[le,l(U)]]),e(ae,{total:l(Y),page:l(o).pageNo,"onUpdate:page":t[11]||(t[11]=a=>l(o).pageNo=a),limit:l(o).pageSize,"onUpdate:limit":t[12]||(t[12]=a=>l(o).pageSize=a),onPagination:y},null,8,["total","page","limit"])]),_:1}),e(Ae,{ref_key:"formRef",ref:R,onSuccess:y},null,512)],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/erp/purchase/order/index.vue"]])});export{We as __tla,B as default};