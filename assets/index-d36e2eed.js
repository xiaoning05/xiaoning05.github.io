import{d as ae,i as le,r as n,e as te,p as re,K as oe,o as s,c as w,f as a,w as r,a as l,L,F as g,q as S,v as i,h as d,x as _,e2 as se,d$ as ue,P as ie,A as ce,y as ne,z as de,B as pe,_ as _e,C as me,D as fe,G as ye,H as he,I as ve,__tla as ke}from"./index-d2088aec.js";import{_ as be,__tla as we}from"./index.vue_vue_type_script_setup_true_lang-6baf9e60.js";import{_ as ge,__tla as xe}from"./DictTag.vue_vue_type_script_lang-754cee6f.js";import{_ as Ve,__tla as Ce}from"./ContentWrap.vue_vue_type_script_setup_true_lang-3fd6aef1.js";import{a as Se,D as F,__tla as Ue}from"./dict-999fbee6.js";import{b as Ie,__tla as Te}from"./formatTime-c7e0c543.js";import{d as Pe}from"./download-20922b56.js";import{_ as De,S as U,__tla as Me}from"./StockMoveForm.vue_vue_type_script_setup_true_lang-d77dd5b5.js";import{P as We,__tla as Ne}from"./index-19a1d262.js";import{W as ze,__tla as Ae}from"./index-b5811f46.js";import{g as He,__tla as Re}from"./index-456c5cde.js";import{u as Ye,__tla as qe}from"./useMessage-c5990e2c.js";import{__tla as Ee}from"./index-9309eb20.js";import"./color-f5b6e279.js";import{__tla as Le}from"./index-82efac34.js";import{__tla as Fe}from"./Dialog.vue_vue_type_style_index_0_lang-4d2024bd.js";import{__tla as Ke}from"./UploadFile-07ceee60.js";import{__tla as $e}from"./UploadFile.vue_vue_type_style_index_0_scoped_3311e906_lang-1f0a110b.js";import{__tla as Be}from"./useUpload-53891715.js";import{__tla as Ge}from"./index-a70e1e2c.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as je}from"./StockMoveItemForm.vue_vue_type_script_setup_true_lang-97024d7f.js";import{__tla as Je}from"./index-43a89d89.js";let K,Oe=Promise.all([(()=>{try{return ke}catch{}})(),(()=>{try{return we}catch{}})(),(()=>{try{return xe}catch{}})(),(()=>{try{return Ce}catch{}})(),(()=>{try{return Ue}catch{}})(),(()=>{try{return Te}catch{}})(),(()=>{try{return Me}catch{}})(),(()=>{try{return Ne}catch{}})(),(()=>{try{return Ae}catch{}})(),(()=>{try{return Re}catch{}})(),(()=>{try{return qe}catch{}})(),(()=>{try{return Ee}catch{}})(),(()=>{try{return Le}catch{}})(),(()=>{try{return Fe}catch{}})(),(()=>{try{return Ke}catch{}})(),(()=>{try{return $e}catch{}})(),(()=>{try{return Be}catch{}})(),(()=>{try{return Ge}catch{}})(),(()=>{try{return je}catch{}})(),(()=>{try{return Je}catch{}})()]).then(async()=>{K=ae({name:"ErpStockMove",__name:"index",setup(Qe){const v=Ye(),{t:$}=le(),I=n(!0),D=n([]),M=n(0),o=te({pageNo:1,pageSize:10,no:void 0,productId:void 0,fromWarehouseId:void 0,moveTime:[],status:void 0,remark:void 0,creator:void 0}),W=n(),T=n(!1),N=n([]),z=n([]),A=n([]),y=async()=>{I.value=!0;try{const u=await U.getStockMovePage(o);D.value=u.list,M.value=u.total}finally{I.value=!1}},x=()=>{o.pageNo=1,y()},B=()=>{W.value.resetFields(),x()},H=n(),P=(u,t)=>{H.value.open(u,t)},R=async u=>{try{await v.delConfirm(),await U.deleteStockMove(u),v.success($("common.delSuccess")),await y(),k.value=k.value.filter(t=>!u.includes(t.id))}catch{}},Y=async(u,t)=>{try{await v.confirm(`\u786E\u5B9A${t===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279"}\u8BE5\u8C03\u5EA6\u5355\u5417\uFF1F`),await U.updateStockMoveStatus(u,t),v.success((t===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279")+"\u6210\u529F"),await y()}catch{}},G=async()=>{try{await v.exportConfirm(),T.value=!0;const u=await U.exportStockMove(o);Pe.excel(u,"\u5E93\u5B58\u8C03\u5EA6\u5355.xls")}catch{}finally{T.value=!1}},k=n([]),j=u=>{k.value=u};return re(async()=>{await y(),N.value=await We.getProductSimpleList(),z.value=await ze.getWarehouseSimpleList(),A.value=await He()}),(u,t)=>{const q=ie,m=ce,V=ne,C=de,J=pe,b=_e,c=me,O=fe,E=Ve,p=ye,Q=ge,X=he,Z=be,f=oe("hasPermi"),ee=ve;return s(),w(g,null,[a(E,null,{default:r(()=>[a(O,{class:"-mb-15px",model:l(o),ref_key:"queryFormRef",ref:W,inline:!0,"label-width":"68px"},{default:r(()=>[a(m,{label:"\u8C03\u5EA6\u5355\u53F7",prop:"no"},{default:r(()=>[a(q,{modelValue:l(o).no,"onUpdate:modelValue":t[0]||(t[0]=e=>l(o).no=e),placeholder:"\u8BF7\u8F93\u5165\u8C03\u5EA6\u5355\u53F7",clearable:"",onKeyup:L(x,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(m,{label:"\u4EA7\u54C1",prop:"productId"},{default:r(()=>[a(C,{modelValue:l(o).productId,"onUpdate:modelValue":t[1]||(t[1]=e=>l(o).productId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4EA7\u54C1",class:"!w-240px"},{default:r(()=>[(s(!0),w(g,null,S(l(N),e=>(s(),i(V,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"\u8C03\u5EA6\u65F6\u95F4",prop:"moveTime"},{default:r(()=>[a(J,{modelValue:l(o).moveTime,"onUpdate:modelValue":t[2]||(t[2]=e=>l(o).moveTime=e),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-240px"},null,8,["modelValue","default-time"])]),_:1}),a(m,{label:"\u4ED3\u5E93",prop:"fromWarehouseId"},{default:r(()=>[a(C,{modelValue:l(o).fromWarehouseId,"onUpdate:modelValue":t[3]||(t[3]=e=>l(o).fromWarehouseId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93",class:"!w-240px"},{default:r(()=>[(s(!0),w(g,null,S(l(z),e=>(s(),i(V,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"\u521B\u5EFA\u4EBA",prop:"creator"},{default:r(()=>[a(C,{modelValue:l(o).creator,"onUpdate:modelValue":t[4]||(t[4]=e=>l(o).creator=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u521B\u5EFA\u4EBA",class:"!w-240px"},{default:r(()=>[(s(!0),w(g,null,S(l(A),e=>(s(),i(V,{key:e.id,label:e.nickname,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"\u72B6\u6001",prop:"status"},{default:r(()=>[a(C,{modelValue:l(o).status,"onUpdate:modelValue":t[5]||(t[5]=e=>l(o).status=e),placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",clearable:"",class:"!w-240px"},{default:r(()=>[(s(!0),w(g,null,S(l(Se)(l(F).ERP_AUDIT_STATUS),e=>(s(),i(V,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"\u5907\u6CE8",prop:"remark"},{default:r(()=>[a(q,{modelValue:l(o).remark,"onUpdate:modelValue":t[6]||(t[6]=e=>l(o).remark=e),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",clearable:"",onKeyup:L(x,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(m,null,{default:r(()=>[a(c,{onClick:x},{default:r(()=>[a(b,{icon:"ep:search",class:"mr-5px"}),d(" \u641C\u7D22")]),_:1}),a(c,{onClick:B},{default:r(()=>[a(b,{icon:"ep:refresh",class:"mr-5px"}),d(" \u91CD\u7F6E")]),_:1}),_((s(),i(c,{type:"primary",plain:"",onClick:t[7]||(t[7]=e=>P("create"))},{default:r(()=>[a(b,{icon:"ep:plus",class:"mr-5px"}),d(" \u65B0\u589E ")]),_:1})),[[f,["erp:stock-move:create"]]]),_((s(),i(c,{type:"success",plain:"",onClick:G,loading:l(T)},{default:r(()=>[a(b,{icon:"ep:download",class:"mr-5px"}),d(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[f,["erp:stock-move:export"]]]),_((s(),i(c,{type:"danger",plain:"",onClick:t[8]||(t[8]=e=>R(l(k).map(h=>h.id))),disabled:l(k).length===0},{default:r(()=>[a(b,{icon:"ep:delete",class:"mr-5px"}),d(" \u5220\u9664 ")]),_:1},8,["disabled"])),[[f,["erp:stock-move:delete"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(E,null,{default:r(()=>[_((s(),i(X,{data:l(D),stripe:!0,"show-overflow-tooltip":!0,onSelectionChange:j},{default:r(()=>[a(p,{width:"30",label:"\u9009\u62E9",type:"selection"}),a(p,{"min-width":"180",label:"\u8C03\u5EA6\u5355\u53F7",align:"center",prop:"no"}),a(p,{label:"\u4EA7\u54C1\u4FE1\u606F",align:"center",prop:"productNames","min-width":"200"}),a(p,{label:"\u8C03\u5EA6\u65F6\u95F4",align:"center",prop:"moveTime",formatter:l(Ie),width:"120px"},null,8,["formatter"]),a(p,{label:"\u521B\u5EFA\u4EBA",align:"center",prop:"creatorName"}),a(p,{label:"\u6570\u91CF",align:"center",prop:"totalCount",formatter:l(se)},null,8,["formatter"]),a(p,{label:"\u91D1\u989D",align:"center",prop:"totalPrice",formatter:l(ue)},null,8,["formatter"]),a(p,{label:"\u72B6\u6001",align:"center",fixed:"right",width:"90",prop:"status"},{default:r(e=>[a(Q,{type:l(F).ERP_AUDIT_STATUS,value:e.row.status},null,8,["type","value"])]),_:1}),a(p,{label:"\u64CD\u4F5C",align:"center",fixed:"right",width:"220"},{default:r(e=>[_((s(),i(c,{link:"",onClick:h=>P("detail",e.row.id)},{default:r(()=>[d(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])),[[f,["erp:stock-move:query"]]]),_((s(),i(c,{link:"",type:"primary",onClick:h=>P("update",e.row.id),disabled:e.row.status===20},{default:r(()=>[d(" \u7F16\u8F91 ")]),_:2},1032,["onClick","disabled"])),[[f,["erp:stock-move:update"]]]),e.row.status===10?_((s(),i(c,{key:0,link:"",type:"primary",onClick:h=>Y(e.row.id,20)},{default:r(()=>[d(" \u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[f,["erp:stock-move:update-status"]]]):_((s(),i(c,{key:1,link:"",type:"danger",onClick:h=>Y(e.row.id,10)},{default:r(()=>[d(" \u53CD\u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[f,["erp:stock-move:update-status"]]]),_((s(),i(c,{link:"",type:"danger",onClick:h=>R([e.row.id])},{default:r(()=>[d(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[f,["erp:stock-move:delete"]]])]),_:1})]),_:1},8,["data"])),[[ee,l(I)]]),a(Z,{total:l(M),page:l(o).pageNo,"onUpdate:page":t[9]||(t[9]=e=>l(o).pageNo=e),limit:l(o).pageSize,"onUpdate:limit":t[10]||(t[10]=e=>l(o).pageSize=e),onPagination:y},null,8,["total","page","limit"])]),_:1}),a(De,{ref_key:"formRef",ref:H,onSuccess:y},null,512)],64)}}})});export{Oe as __tla,K as default};
