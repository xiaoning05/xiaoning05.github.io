import{d as ae,i as le,r as n,e as te,p as re,K as oe,o as c,c as v,f as a,w as r,a as l,L as F,F as g,q as S,v as u,h as d,x as _,dW as ce,dT as se,P as ue,A as ie,y as ne,z as de,B as pe,_ as _e,C as me,D as fe,G as he,H as ke,I as ye,__tla as we}from"./index-d5b00dc9.js";import{_ as be,__tla as ve}from"./index.vue_vue_type_script_setup_true_lang-8478be74.js";import{_ as ge,__tla as xe}from"./DictTag.vue_vue_type_script_lang-2a9ae33e.js";import{_ as Ce,__tla as Ve}from"./ContentWrap.vue_vue_type_script_setup_true_lang-29ba9b6b.js";import{a as Se,D as L,__tla as Ue}from"./dict-29b94c3f.js";import{b as Te,__tla as Ie}from"./formatTime-9063410f.js";import{d as Pe}from"./download-20922b56.js";import{_ as De,S as U,__tla as Ae}from"./StockCheckForm.vue_vue_type_script_setup_true_lang-c8f1d607.js";import{P as Ne,__tla as Ee}from"./index-27ee1ea8.js";import{W as Re,__tla as qe}from"./index-6a2513d2.js";import{g as ze,__tla as He}from"./index-d569b7ba.js";import{u as Ke,__tla as We}from"./useMessage-2288a5f2.js";import{__tla as Ye}from"./index-9ed43bfb.js";import"./color-f5b6e279.js";import{__tla as Fe}from"./index-bd0d9e6c.js";import{__tla as Le}from"./Dialog.vue_vue_type_style_index_0_lang-03cf6454.js";import{__tla as Me}from"./UploadFile-2e6f3e58.js";import{__tla as Be}from"./UploadFile.vue_vue_type_style_index_0_scoped_3311e906_lang-064855f0.js";import{__tla as Ge}from"./useUpload-1b812415.js";import{__tla as $e}from"./index-91a13e3d.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as je}from"./StockCheckItemForm.vue_vue_type_script_setup_true_lang-56da6bc1.js";import{__tla as Je}from"./index-6eb64f8e.js";let M,Oe=Promise.all([(()=>{try{return we}catch{}})(),(()=>{try{return ve}catch{}})(),(()=>{try{return xe}catch{}})(),(()=>{try{return Ve}catch{}})(),(()=>{try{return Ue}catch{}})(),(()=>{try{return Ie}catch{}})(),(()=>{try{return Ae}catch{}})(),(()=>{try{return Ee}catch{}})(),(()=>{try{return qe}catch{}})(),(()=>{try{return He}catch{}})(),(()=>{try{return We}catch{}})(),(()=>{try{return Ye}catch{}})(),(()=>{try{return Fe}catch{}})(),(()=>{try{return Le}catch{}})(),(()=>{try{return Me}catch{}})(),(()=>{try{return Be}catch{}})(),(()=>{try{return Ge}catch{}})(),(()=>{try{return $e}catch{}})(),(()=>{try{return je}catch{}})(),(()=>{try{return Je}catch{}})()]).then(async()=>{M=ae({name:"ErpStockCheck",__name:"index",setup(Qe){const y=Ke(),{t:B}=le(),T=n(!0),D=n([]),A=n(0),o=te({pageNo:1,pageSize:10,no:void 0,productId:void 0,warehouseId:void 0,checkTime:[],status:void 0,remark:void 0,creator:void 0}),N=n(),I=n(!1),E=n([]),R=n([]),q=n([]),h=async()=>{T.value=!0;try{const s=await U.getStockCheckPage(o);D.value=s.list,A.value=s.total}finally{T.value=!1}},x=()=>{o.pageNo=1,h()},G=()=>{N.value.resetFields(),x()},z=n(),P=(s,t)=>{z.value.open(s,t)},H=async s=>{try{await y.delConfirm(),await U.deleteStockCheck(s),y.success(B("common.delSuccess")),await h(),w.value=w.value.filter(t=>!s.includes(t.id))}catch{}},K=async(s,t)=>{try{await y.confirm(`\u786E\u5B9A${t===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279"}\u8BE5\u76D8\u70B9\u5355\u5417\uFF1F`),await U.updateStockCheckStatus(s,t),y.success((t===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279")+"\u6210\u529F"),await h()}catch{}},$=async()=>{try{await y.exportConfirm(),I.value=!0;const s=await U.exportStockCheck(o);Pe.excel(s,"\u5176\u5B83\u76D8\u70B9\u5355.xls")}catch{}finally{I.value=!1}},w=n([]),j=s=>{w.value=s};return re(async()=>{await h(),E.value=await Ne.getProductSimpleList(),R.value=await Re.getWarehouseSimpleList(),q.value=await ze()}),(s,t)=>{const W=ue,m=ie,C=ne,V=de,J=pe,b=_e,i=me,O=fe,Y=Ce,p=he,Q=ge,X=ke,Z=be,f=oe("hasPermi"),ee=ye;return c(),v(g,null,[a(Y,null,{default:r(()=>[a(O,{class:"-mb-15px",model:l(o),ref_key:"queryFormRef",ref:N,inline:!0,"label-width":"68px"},{default:r(()=>[a(m,{label:"\u76D8\u70B9\u5355\u53F7",prop:"no"},{default:r(()=>[a(W,{modelValue:l(o).no,"onUpdate:modelValue":t[0]||(t[0]=e=>l(o).no=e),placeholder:"\u8BF7\u8F93\u5165\u76D8\u70B9\u5355\u53F7",clearable:"",onKeyup:F(x,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(m,{label:"\u4EA7\u54C1",prop:"productId"},{default:r(()=>[a(V,{modelValue:l(o).productId,"onUpdate:modelValue":t[1]||(t[1]=e=>l(o).productId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4EA7\u54C1",class:"!w-240px"},{default:r(()=>[(c(!0),v(g,null,S(l(E),e=>(c(),u(C,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"\u76D8\u70B9\u65F6\u95F4",prop:"checkTime"},{default:r(()=>[a(J,{modelValue:l(o).checkTime,"onUpdate:modelValue":t[2]||(t[2]=e=>l(o).checkTime=e),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-240px"},null,8,["modelValue","default-time"])]),_:1}),a(m,{label:"\u4ED3\u5E93",prop:"warehouseId"},{default:r(()=>[a(V,{modelValue:l(o).warehouseId,"onUpdate:modelValue":t[3]||(t[3]=e=>l(o).warehouseId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93",class:"!w-240px"},{default:r(()=>[(c(!0),v(g,null,S(l(R),e=>(c(),u(C,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"\u521B\u5EFA\u4EBA",prop:"creator"},{default:r(()=>[a(V,{modelValue:l(o).creator,"onUpdate:modelValue":t[4]||(t[4]=e=>l(o).creator=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u521B\u5EFA\u4EBA",class:"!w-240px"},{default:r(()=>[(c(!0),v(g,null,S(l(q),e=>(c(),u(C,{key:e.id,label:e.nickname,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"\u72B6\u6001",prop:"status"},{default:r(()=>[a(V,{modelValue:l(o).status,"onUpdate:modelValue":t[5]||(t[5]=e=>l(o).status=e),placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",clearable:"",class:"!w-240px"},{default:r(()=>[(c(!0),v(g,null,S(l(Se)(l(L).ERP_AUDIT_STATUS),e=>(c(),u(C,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"\u5907\u6CE8",prop:"remark"},{default:r(()=>[a(W,{modelValue:l(o).remark,"onUpdate:modelValue":t[6]||(t[6]=e=>l(o).remark=e),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",clearable:"",onKeyup:F(x,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(m,null,{default:r(()=>[a(i,{onClick:x},{default:r(()=>[a(b,{icon:"ep:search",class:"mr-5px"}),d(" \u641C\u7D22")]),_:1}),a(i,{onClick:G},{default:r(()=>[a(b,{icon:"ep:refresh",class:"mr-5px"}),d(" \u91CD\u7F6E")]),_:1}),_((c(),u(i,{type:"primary",plain:"",onClick:t[7]||(t[7]=e=>P("create"))},{default:r(()=>[a(b,{icon:"ep:plus",class:"mr-5px"}),d(" \u65B0\u589E ")]),_:1})),[[f,["erp:stock-check:create"]]]),_((c(),u(i,{type:"success",plain:"",onClick:$,loading:l(I)},{default:r(()=>[a(b,{icon:"ep:download",class:"mr-5px"}),d(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[f,["erp:stock-check:export"]]]),_((c(),u(i,{type:"danger",plain:"",onClick:t[8]||(t[8]=e=>H(l(w).map(k=>k.id))),disabled:l(w).length===0},{default:r(()=>[a(b,{icon:"ep:delete",class:"mr-5px"}),d(" \u5220\u9664 ")]),_:1},8,["disabled"])),[[f,["erp:stock-check:delete"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(Y,null,{default:r(()=>[_((c(),u(X,{data:l(D),stripe:!0,"show-overflow-tooltip":!0,onSelectionChange:j},{default:r(()=>[a(p,{width:"30",label:"\u9009\u62E9",type:"selection"}),a(p,{"min-width":"180",label:"\u76D8\u70B9\u5355\u53F7",align:"center",prop:"no"}),a(p,{label:"\u4EA7\u54C1\u4FE1\u606F",align:"center",prop:"productNames","min-width":"200"}),a(p,{label:"\u76D8\u70B9\u65F6\u95F4",align:"center",prop:"checkTime",formatter:l(Te),width:"120px"},null,8,["formatter"]),a(p,{label:"\u521B\u5EFA\u4EBA",align:"center",prop:"creatorName"}),a(p,{label:"\u6570\u91CF",align:"center",prop:"totalCount",formatter:l(ce)},null,8,["formatter"]),a(p,{label:"\u91D1\u989D",align:"center",prop:"totalPrice",formatter:l(se)},null,8,["formatter"]),a(p,{label:"\u72B6\u6001",align:"center",fixed:"right",width:"90",prop:"status"},{default:r(e=>[a(Q,{type:l(L).ERP_AUDIT_STATUS,value:e.row.status},null,8,["type","value"])]),_:1}),a(p,{label:"\u64CD\u4F5C",align:"center",fixed:"right",width:"220"},{default:r(e=>[_((c(),u(i,{link:"",onClick:k=>P("detail",e.row.id)},{default:r(()=>[d(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])),[[f,["erp:stock-check:query"]]]),_((c(),u(i,{link:"",type:"primary",onClick:k=>P("update",e.row.id),disabled:e.row.status===20},{default:r(()=>[d(" \u7F16\u8F91 ")]),_:2},1032,["onClick","disabled"])),[[f,["erp:stock-check:update"]]]),e.row.status===10?_((c(),u(i,{key:0,link:"",type:"primary",onClick:k=>K(e.row.id,20)},{default:r(()=>[d(" \u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[f,["erp:stock-check:update-status"]]]):_((c(),u(i,{key:1,link:"",type:"danger",onClick:k=>K(e.row.id,10)},{default:r(()=>[d(" \u53CD\u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[f,["erp:stock-check:update-status"]]]),_((c(),u(i,{link:"",type:"danger",onClick:k=>H([e.row.id])},{default:r(()=>[d(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[f,["erp:stock-check:delete"]]])]),_:1})]),_:1},8,["data"])),[[ee,l(T)]]),a(Z,{total:l(A),page:l(o).pageNo,"onUpdate:page":t[9]||(t[9]=e=>l(o).pageNo=e),limit:l(o).pageSize,"onUpdate:limit":t[10]||(t[10]=e=>l(o).pageSize=e),onPagination:h},null,8,["total","page","limit"])]),_:1}),a(De,{ref_key:"formRef",ref:z,onSuccess:h},null,512)],64)}}})});export{Oe as __tla,M as default};
