import{d as ae,k as le,r as n,n as te,p as re,D as oe,o as s,c as w,b as a,e as r,a as l,G as F,F as g,g as S,q as i,h as d,w as _,e2 as se,d$ as ue,K as ie,y as ce,s as ne,x as de,z as pe,_ as _e,A as me,B as fe,E as ye,i as he,v as ve,__tla as ke}from"./index-34f06ebd.js";import{_ as be,__tla as we}from"./index.vue_vue_type_script_setup_true_lang-68fe248c.js";import{_ as ge,__tla as xe}from"./DictTag.vue_vue_type_script_lang-942df0b2.js";import{_ as Ve,__tla as Ce}from"./ContentWrap.vue_vue_type_script_setup_true_lang-80915c85.js";import{a as Se,D as L,__tla as Ue}from"./dict-e142e39a.js";import{b as Te,__tla as Ie}from"./formatTime-ed0a77fd.js";import{d as Pe}from"./download-20922b56.js";import{_ as De,S as U,__tla as Me}from"./StockMoveForm.vue_vue_type_script_setup_true_lang-357d23f8.js";import{P as Ne,__tla as We}from"./index-84d2161b.js";import{W as qe,__tla as ze}from"./index-384def1a.js";import{g as Ae,__tla as Ee}from"./index-cd2bb9f6.js";import{u as Re,__tla as Ye}from"./useMessage-7a5ab7ef.js";import{__tla as Ke}from"./index-f8693880.js";import"./color-f5b6e279.js";import{__tla as Fe}from"./index-460c50ff.js";import{__tla as Le}from"./Dialog.vue_vue_type_style_index_0_lang-08560286.js";import{__tla as He}from"./UploadFile-ebcd7c2f.js";import{__tla as $e}from"./UploadFile.vue_vue_type_style_index_0_scoped_3311e906_lang-748505e2.js";import{__tla as Be}from"./useUpload-76a6f89f.js";import{__tla as Ge}from"./index-176464f7.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as je}from"./StockMoveItemForm.vue_vue_type_script_setup_true_lang-b8622256.js";import{__tla as Je}from"./index-58b239a1.js";let H,Oe=Promise.all([(()=>{try{return ke}catch{}})(),(()=>{try{return we}catch{}})(),(()=>{try{return xe}catch{}})(),(()=>{try{return Ce}catch{}})(),(()=>{try{return Ue}catch{}})(),(()=>{try{return Ie}catch{}})(),(()=>{try{return Me}catch{}})(),(()=>{try{return We}catch{}})(),(()=>{try{return ze}catch{}})(),(()=>{try{return Ee}catch{}})(),(()=>{try{return Ye}catch{}})(),(()=>{try{return Ke}catch{}})(),(()=>{try{return Fe}catch{}})(),(()=>{try{return Le}catch{}})(),(()=>{try{return He}catch{}})(),(()=>{try{return $e}catch{}})(),(()=>{try{return Be}catch{}})(),(()=>{try{return Ge}catch{}})(),(()=>{try{return je}catch{}})(),(()=>{try{return Je}catch{}})()]).then(async()=>{H=ae({name:"ErpStockMove",__name:"index",setup(Qe){const v=Re(),{t:$}=le(),T=n(!0),D=n([]),M=n(0),o=te({pageNo:1,pageSize:10,no:void 0,productId:void 0,fromWarehouseId:void 0,moveTime:[],status:void 0,remark:void 0,creator:void 0}),N=n(),I=n(!1),W=n([]),q=n([]),z=n([]),y=async()=>{T.value=!0;try{const u=await U.getStockMovePage(o);D.value=u.list,M.value=u.total}finally{T.value=!1}},x=()=>{o.pageNo=1,y()},B=()=>{N.value.resetFields(),x()},A=n(),P=(u,t)=>{A.value.open(u,t)},E=async u=>{try{await v.delConfirm(),await U.deleteStockMove(u),v.success($("common.delSuccess")),await y(),k.value=k.value.filter(t=>!u.includes(t.id))}catch{}},R=async(u,t)=>{try{await v.confirm(`\u786E\u5B9A${t===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279"}\u8BE5\u8C03\u5EA6\u5355\u5417\uFF1F`),await U.updateStockMoveStatus(u,t),v.success((t===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279")+"\u6210\u529F"),await y()}catch{}},G=async()=>{try{await v.exportConfirm(),I.value=!0;const u=await U.exportStockMove(o);Pe.excel(u,"\u5E93\u5B58\u8C03\u5EA6\u5355.xls")}catch{}finally{I.value=!1}},k=n([]),j=u=>{k.value=u};return re(async()=>{await y(),W.value=await Ne.getProductSimpleList(),q.value=await qe.getWarehouseSimpleList(),z.value=await Ae()}),(u,t)=>{const Y=ie,m=ce,V=ne,C=de,J=pe,b=_e,c=me,O=fe,K=Ve,p=ye,Q=ge,X=he,Z=be,f=oe("hasPermi"),ee=ve;return s(),w(g,null,[a(K,null,{default:r(()=>[a(O,{class:"-mb-15px",model:l(o),ref_key:"queryFormRef",ref:N,inline:!0,"label-width":"68px"},{default:r(()=>[a(m,{label:"\u8C03\u5EA6\u5355\u53F7",prop:"no"},{default:r(()=>[a(Y,{modelValue:l(o).no,"onUpdate:modelValue":t[0]||(t[0]=e=>l(o).no=e),placeholder:"\u8BF7\u8F93\u5165\u8C03\u5EA6\u5355\u53F7",clearable:"",onKeyup:F(x,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(m,{label:"\u4EA7\u54C1",prop:"productId"},{default:r(()=>[a(C,{modelValue:l(o).productId,"onUpdate:modelValue":t[1]||(t[1]=e=>l(o).productId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4EA7\u54C1",class:"!w-240px"},{default:r(()=>[(s(!0),w(g,null,S(l(W),e=>(s(),i(V,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"\u8C03\u5EA6\u65F6\u95F4",prop:"moveTime"},{default:r(()=>[a(J,{modelValue:l(o).moveTime,"onUpdate:modelValue":t[2]||(t[2]=e=>l(o).moveTime=e),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-240px"},null,8,["modelValue","default-time"])]),_:1}),a(m,{label:"\u4ED3\u5E93",prop:"fromWarehouseId"},{default:r(()=>[a(C,{modelValue:l(o).fromWarehouseId,"onUpdate:modelValue":t[3]||(t[3]=e=>l(o).fromWarehouseId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93",class:"!w-240px"},{default:r(()=>[(s(!0),w(g,null,S(l(q),e=>(s(),i(V,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"\u521B\u5EFA\u4EBA",prop:"creator"},{default:r(()=>[a(C,{modelValue:l(o).creator,"onUpdate:modelValue":t[4]||(t[4]=e=>l(o).creator=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u521B\u5EFA\u4EBA",class:"!w-240px"},{default:r(()=>[(s(!0),w(g,null,S(l(z),e=>(s(),i(V,{key:e.id,label:e.nickname,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"\u72B6\u6001",prop:"status"},{default:r(()=>[a(C,{modelValue:l(o).status,"onUpdate:modelValue":t[5]||(t[5]=e=>l(o).status=e),placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",clearable:"",class:"!w-240px"},{default:r(()=>[(s(!0),w(g,null,S(l(Se)(l(L).ERP_AUDIT_STATUS),e=>(s(),i(V,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"\u5907\u6CE8",prop:"remark"},{default:r(()=>[a(Y,{modelValue:l(o).remark,"onUpdate:modelValue":t[6]||(t[6]=e=>l(o).remark=e),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",clearable:"",onKeyup:F(x,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(m,null,{default:r(()=>[a(c,{onClick:x},{default:r(()=>[a(b,{icon:"ep:search",class:"mr-5px"}),d(" \u641C\u7D22")]),_:1}),a(c,{onClick:B},{default:r(()=>[a(b,{icon:"ep:refresh",class:"mr-5px"}),d(" \u91CD\u7F6E")]),_:1}),_((s(),i(c,{type:"primary",plain:"",onClick:t[7]||(t[7]=e=>P("create"))},{default:r(()=>[a(b,{icon:"ep:plus",class:"mr-5px"}),d(" \u65B0\u589E ")]),_:1})),[[f,["erp:stock-move:create"]]]),_((s(),i(c,{type:"success",plain:"",onClick:G,loading:l(I)},{default:r(()=>[a(b,{icon:"ep:download",class:"mr-5px"}),d(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[f,["erp:stock-move:export"]]]),_((s(),i(c,{type:"danger",plain:"",onClick:t[8]||(t[8]=e=>E(l(k).map(h=>h.id))),disabled:l(k).length===0},{default:r(()=>[a(b,{icon:"ep:delete",class:"mr-5px"}),d(" \u5220\u9664 ")]),_:1},8,["disabled"])),[[f,["erp:stock-move:delete"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(K,null,{default:r(()=>[_((s(),i(X,{data:l(D),stripe:!0,"show-overflow-tooltip":!0,onSelectionChange:j},{default:r(()=>[a(p,{width:"30",label:"\u9009\u62E9",type:"selection"}),a(p,{"min-width":"180",label:"\u8C03\u5EA6\u5355\u53F7",align:"center",prop:"no"}),a(p,{label:"\u4EA7\u54C1\u4FE1\u606F",align:"center",prop:"productNames","min-width":"200"}),a(p,{label:"\u8C03\u5EA6\u65F6\u95F4",align:"center",prop:"moveTime",formatter:l(Te),width:"120px"},null,8,["formatter"]),a(p,{label:"\u521B\u5EFA\u4EBA",align:"center",prop:"creatorName"}),a(p,{label:"\u6570\u91CF",align:"center",prop:"totalCount",formatter:l(se)},null,8,["formatter"]),a(p,{label:"\u91D1\u989D",align:"center",prop:"totalPrice",formatter:l(ue)},null,8,["formatter"]),a(p,{label:"\u72B6\u6001",align:"center",fixed:"right",width:"90",prop:"status"},{default:r(e=>[a(Q,{type:l(L).ERP_AUDIT_STATUS,value:e.row.status},null,8,["type","value"])]),_:1}),a(p,{label:"\u64CD\u4F5C",align:"center",fixed:"right",width:"220"},{default:r(e=>[_((s(),i(c,{link:"",onClick:h=>P("detail",e.row.id)},{default:r(()=>[d(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])),[[f,["erp:stock-move:query"]]]),_((s(),i(c,{link:"",type:"primary",onClick:h=>P("update",e.row.id),disabled:e.row.status===20},{default:r(()=>[d(" \u7F16\u8F91 ")]),_:2},1032,["onClick","disabled"])),[[f,["erp:stock-move:update"]]]),e.row.status===10?_((s(),i(c,{key:0,link:"",type:"primary",onClick:h=>R(e.row.id,20)},{default:r(()=>[d(" \u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[f,["erp:stock-move:update-status"]]]):_((s(),i(c,{key:1,link:"",type:"danger",onClick:h=>R(e.row.id,10)},{default:r(()=>[d(" \u53CD\u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[f,["erp:stock-move:update-status"]]]),_((s(),i(c,{link:"",type:"danger",onClick:h=>E([e.row.id])},{default:r(()=>[d(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[f,["erp:stock-move:delete"]]])]),_:1})]),_:1},8,["data"])),[[ee,l(T)]]),a(Z,{total:l(M),page:l(o).pageNo,"onUpdate:page":t[9]||(t[9]=e=>l(o).pageNo=e),limit:l(o).pageSize,"onUpdate:limit":t[10]||(t[10]=e=>l(o).pageSize=e),onPagination:y},null,8,["total","page","limit"])]),_:1}),a(De,{ref_key:"formRef",ref:A,onSuccess:y},null,512)],64)}}})});export{Oe as __tla,H as default};
