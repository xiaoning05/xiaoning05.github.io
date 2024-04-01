import{d as te,k as re,r as _,n as oe,p as ue,D as se,o as u,c as x,b as e,e as r,a as l,G as H,F as S,g as C,q as n,h as m,w as f,e2 as D,d$ as N,K as de,y as ne,s as ie,x as pe,z as ce,_ as _e,A as me,B as fe,E as ye,i as be,v as he,__tla as ve}from"./index-34f06ebd.js";import{_ as we,__tla as ge}from"./index.vue_vue_type_script_setup_true_lang-68fe248c.js";import{_ as ke,__tla as xe}from"./DictTag.vue_vue_type_script_lang-942df0b2.js";import{_ as Se,__tla as Ve}from"./ContentWrap.vue_vue_type_script_setup_true_lang-80915c85.js";import{a as Ce,D as L,__tla as Ue}from"./dict-e142e39a.js";import{b as Pe,__tla as Te}from"./formatTime-ed0a77fd.js";import{d as Ie}from"./download-20922b56.js";import{S as U,__tla as De}from"./index-f5f72dff.js";import{_ as Ne,__tla as Ae}from"./SaleOrderForm.vue_vue_type_script_setup_true_lang-ff9cf6b5.js";import{P as Ee,__tla as Oe}from"./index-84d2161b.js";import{g as Re,__tla as Ye}from"./index-cd2bb9f6.js";import{C as qe,__tla as ze}from"./index-f0279aca.js";import{u as Ke,__tla as Me}from"./useMessage-7a5ab7ef.js";import{__tla as Fe}from"./index-f8693880.js";import"./color-f5b6e279.js";import{__tla as $e}from"./index-460c50ff.js";import{__tla as He}from"./Dialog.vue_vue_type_style_index_0_lang-08560286.js";import{__tla as Le}from"./UploadFile-ebcd7c2f.js";import{__tla as Be}from"./UploadFile.vue_vue_type_style_index_0_scoped_3311e906_lang-748505e2.js";import{__tla as Ge}from"./useUpload-76a6f89f.js";import{__tla as je}from"./index-176464f7.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as Je}from"./SaleOrderItemForm.vue_vue_type_script_setup_true_lang-95acd577.js";import{__tla as Qe}from"./index-58b239a1.js";import{__tla as We}from"./index-e0b5c053.js";let B,Xe=Promise.all([(()=>{try{return ve}catch{}})(),(()=>{try{return ge}catch{}})(),(()=>{try{return xe}catch{}})(),(()=>{try{return Ve}catch{}})(),(()=>{try{return Ue}catch{}})(),(()=>{try{return Te}catch{}})(),(()=>{try{return De}catch{}})(),(()=>{try{return Ae}catch{}})(),(()=>{try{return Oe}catch{}})(),(()=>{try{return Ye}catch{}})(),(()=>{try{return ze}catch{}})(),(()=>{try{return Me}catch{}})(),(()=>{try{return Fe}catch{}})(),(()=>{try{return $e}catch{}})(),(()=>{try{return He}catch{}})(),(()=>{try{return Le}catch{}})(),(()=>{try{return Be}catch{}})(),(()=>{try{return Ge}catch{}})(),(()=>{try{return je}catch{}})(),(()=>{try{return Je}catch{}})(),(()=>{try{return Qe}catch{}})(),(()=>{try{return We}catch{}})()]).then(async()=>{B=te({name:"ErpSaleOrder",__name:"index",setup(Ze){const w=Ke(),{t:G}=re(),P=_(!0),A=_([]),E=_(0),o=oe({pageNo:1,pageSize:10,no:void 0,customerId:void 0,productId:void 0,orderTime:[],status:void 0,remark:void 0,creator:void 0,outStatus:void 0,returnStatus:void 0}),O=_(),T=_(!1),R=_([]),Y=_([]),q=_([]),b=async()=>{P.value=!0;try{const s=await U.getSaleOrderPage(o);A.value=s.list,E.value=s.total}finally{P.value=!1}},V=()=>{o.pageNo=1,b()},j=()=>{O.value.resetFields(),V()},z=_(),I=(s,t)=>{z.value.open(s,t)},K=async s=>{try{await w.delConfirm(),await U.deleteSaleOrder(s),w.success(G("common.delSuccess")),await b(),g.value=g.value.filter(t=>!s.includes(t.id))}catch{}},M=async(s,t)=>{try{await w.confirm(`\u786E\u5B9A${t===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279"}\u8BE5\u8BA2\u5355\u5417\uFF1F`),await U.updateSaleOrderStatus(s,t),w.success((t===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279")+"\u6210\u529F"),await b()}catch{}},J=async()=>{try{await w.exportConfirm(),T.value=!0;const s=await U.exportSaleOrder(o);Ie.excel(s,"\u9500\u552E\u8BA2\u5355.xls")}catch{}finally{T.value=!1}},g=_([]),Q=s=>{g.value=s};return ue(async()=>{await b(),R.value=await Ee.getProductSimpleList(),Y.value=await qe.getCustomerSimpleList(),q.value=await Re()}),(s,t)=>{const F=de,i=ne,p=ie,h=pe,W=ce,k=_e,c=me,X=fe,$=Se,d=ye,Z=ke,ee=be,ae=we,y=se("hasPermi"),le=he;return u(),x(S,null,[e($,null,{default:r(()=>[e(X,{class:"-mb-15px",model:l(o),ref_key:"queryFormRef",ref:O,inline:!0,"label-width":"68px"},{default:r(()=>[e(i,{label:"\u8BA2\u5355\u5355\u53F7",prop:"no"},{default:r(()=>[e(F,{modelValue:l(o).no,"onUpdate:modelValue":t[0]||(t[0]=a=>l(o).no=a),placeholder:"\u8BF7\u8F93\u5165\u8BA2\u5355\u5355\u53F7",clearable:"",onKeyup:H(V,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(i,{label:"\u4EA7\u54C1",prop:"productId"},{default:r(()=>[e(h,{modelValue:l(o).productId,"onUpdate:modelValue":t[1]||(t[1]=a=>l(o).productId=a),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4EA7\u54C1",class:"!w-240px"},{default:r(()=>[(u(!0),x(S,null,C(l(R),a=>(u(),n(p,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"\u8BA2\u5355\u65F6\u95F4",prop:"orderTime"},{default:r(()=>[e(W,{modelValue:l(o).orderTime,"onUpdate:modelValue":t[2]||(t[2]=a=>l(o).orderTime=a),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-220px"},null,8,["modelValue","default-time"])]),_:1}),e(i,{label:"\u5BA2\u6237",prop:"customerId"},{default:r(()=>[e(h,{modelValue:l(o).customerId,"onUpdate:modelValue":t[3]||(t[3]=a=>l(o).customerId=a),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4F9B\u5BA2\u6237",class:"!w-240px"},{default:r(()=>[(u(!0),x(S,null,C(l(Y),a=>(u(),n(p,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"\u521B\u5EFA\u4EBA",prop:"creator"},{default:r(()=>[e(h,{modelValue:l(o).creator,"onUpdate:modelValue":t[4]||(t[4]=a=>l(o).creator=a),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u521B\u5EFA\u4EBA",class:"!w-240px"},{default:r(()=>[(u(!0),x(S,null,C(l(q),a=>(u(),n(p,{key:a.id,label:a.nickname,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"\u72B6\u6001",prop:"status"},{default:r(()=>[e(h,{modelValue:l(o).status,"onUpdate:modelValue":t[5]||(t[5]=a=>l(o).status=a),placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",clearable:"",class:"!w-240px"},{default:r(()=>[(u(!0),x(S,null,C(l(Ce)(l(L).ERP_AUDIT_STATUS),a=>(u(),n(p,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"\u5907\u6CE8",prop:"remark"},{default:r(()=>[e(F,{modelValue:l(o).remark,"onUpdate:modelValue":t[6]||(t[6]=a=>l(o).remark=a),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",clearable:"",onKeyup:H(V,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(i,{label:"\u51FA\u5E93\u6570\u91CF",prop:"outStatus"},{default:r(()=>[e(h,{modelValue:l(o).outStatus,"onUpdate:modelValue":t[7]||(t[7]=a=>l(o).outStatus=a),placeholder:"\u8BF7\u9009\u62E9\u51FA\u5E93\u6570\u91CF",clearable:"",class:"!w-240px"},{default:r(()=>[e(p,{label:"\u672A\u51FA\u5E93",value:"0"}),e(p,{label:"\u90E8\u5206\u51FA\u5E93",value:"1"}),e(p,{label:"\u5168\u90E8\u51FA\u5E93",value:"2"})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"\u9000\u8D27\u6570\u91CF",prop:"returnStatus"},{default:r(()=>[e(h,{modelValue:l(o).returnStatus,"onUpdate:modelValue":t[8]||(t[8]=a=>l(o).returnStatus=a),placeholder:"\u8BF7\u9009\u62E9\u9000\u8D27\u6570\u91CF",clearable:"",class:"!w-240px"},{default:r(()=>[e(p,{label:"\u672A\u9000\u8D27",value:"0"}),e(p,{label:"\u90E8\u5206\u9000\u8D27",value:"1"}),e(p,{label:"\u5168\u90E8\u9000\u8D27",value:"2"})]),_:1},8,["modelValue"])]),_:1}),e(i,null,{default:r(()=>[e(c,{onClick:V},{default:r(()=>[e(k,{icon:"ep:search",class:"mr-5px"}),m(" \u641C\u7D22")]),_:1}),e(c,{onClick:j},{default:r(()=>[e(k,{icon:"ep:refresh",class:"mr-5px"}),m(" \u91CD\u7F6E")]),_:1}),f((u(),n(c,{type:"primary",plain:"",onClick:t[9]||(t[9]=a=>I("create"))},{default:r(()=>[e(k,{icon:"ep:plus",class:"mr-5px"}),m(" \u65B0\u589E ")]),_:1})),[[y,["erp:sale-order:create"]]]),f((u(),n(c,{type:"success",plain:"",onClick:J,loading:l(T)},{default:r(()=>[e(k,{icon:"ep:download",class:"mr-5px"}),m(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[y,["erp:sale-order:export"]]]),f((u(),n(c,{type:"danger",plain:"",onClick:t[10]||(t[10]=a=>K(l(g).map(v=>v.id))),disabled:l(g).length===0},{default:r(()=>[e(k,{icon:"ep:delete",class:"mr-5px"}),m(" \u5220\u9664 ")]),_:1},8,["disabled"])),[[y,["erp:sale-order:delete"]]])]),_:1})]),_:1},8,["model"])]),_:1}),e($,null,{default:r(()=>[f((u(),n(ee,{data:l(A),stripe:!0,"show-overflow-tooltip":!0,onSelectionChange:Q},{default:r(()=>[e(d,{width:"30",label:"\u9009\u62E9",type:"selection"}),e(d,{"min-width":"180",label:"\u8BA2\u5355\u5355\u53F7",align:"center",prop:"no"}),e(d,{label:"\u4EA7\u54C1\u4FE1\u606F",align:"center",prop:"productNames","min-width":"200"}),e(d,{label:"\u5BA2\u6237",align:"center",prop:"customerName"}),e(d,{label:"\u8BA2\u5355\u65F6\u95F4",align:"center",prop:"orderTime",formatter:l(Pe),width:"120px"},null,8,["formatter"]),e(d,{label:"\u521B\u5EFA\u4EBA",align:"center",prop:"creatorName"}),e(d,{label:"\u603B\u6570\u91CF",align:"center",prop:"totalCount",formatter:l(D)},null,8,["formatter"]),e(d,{label:"\u51FA\u5E93\u6570\u91CF",align:"center",prop:"outCount",formatter:l(D)},null,8,["formatter"]),e(d,{label:"\u9000\u8D27\u6570\u91CF",align:"center",prop:"returnCount",formatter:l(D)},null,8,["formatter"]),e(d,{label:"\u91D1\u989D\u5408\u8BA1",align:"center",prop:"totalProductPrice",formatter:l(N)},null,8,["formatter"]),e(d,{label:"\u542B\u7A0E\u91D1\u989D",align:"center",prop:"totalPrice",formatter:l(N)},null,8,["formatter"]),e(d,{label:"\u6536\u53D6\u8BA2\u91D1",align:"center",prop:"depositPrice",formatter:l(N)},null,8,["formatter"]),e(d,{label:"\u72B6\u6001",align:"center",fixed:"right",width:"90",prop:"status"},{default:r(a=>[e(Z,{type:l(L).ERP_AUDIT_STATUS,value:a.row.status},null,8,["type","value"])]),_:1}),e(d,{label:"\u64CD\u4F5C",align:"center",fixed:"right",width:"220"},{default:r(a=>[f((u(),n(c,{link:"",onClick:v=>I("detail",a.row.id)},{default:r(()=>[m(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])),[[y,["erp:sale-order:query"]]]),f((u(),n(c,{link:"",type:"primary",onClick:v=>I("update",a.row.id),disabled:a.row.status===20},{default:r(()=>[m(" \u7F16\u8F91 ")]),_:2},1032,["onClick","disabled"])),[[y,["erp:sale-order:update"]]]),a.row.status===10?f((u(),n(c,{key:0,link:"",type:"primary",onClick:v=>M(a.row.id,20)},{default:r(()=>[m(" \u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[y,["erp:sale-order:update-status"]]]):f((u(),n(c,{key:1,link:"",type:"danger",onClick:v=>M(a.row.id,10)},{default:r(()=>[m(" \u53CD\u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[y,["erp:sale-order:update-status"]]]),f((u(),n(c,{link:"",type:"danger",onClick:v=>K([a.row.id])},{default:r(()=>[m(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[y,["erp:sale-order:delete"]]])]),_:1})]),_:1},8,["data"])),[[le,l(P)]]),e(ae,{total:l(E),page:l(o).pageNo,"onUpdate:page":t[11]||(t[11]=a=>l(o).pageNo=a),limit:l(o).pageSize,"onUpdate:limit":t[12]||(t[12]=a=>l(o).pageSize=a),onPagination:b},null,8,["total","page","limit"])]),_:1}),e(Ne,{ref_key:"formRef",ref:z,onSuccess:b},null,512)],64)}}})});export{Xe as __tla,B as default};
