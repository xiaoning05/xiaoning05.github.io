import{d as ae,i as le,r as n,e as te,p as re,L as oe,o as s,c as b,f as a,w as r,a as l,M as F,F as g,q as S,v as i,h as d,x as _,e4 as se,e1 as ue,Q as ie,A as ce,y as ne,z as de,B as pe,C as _e,D as me,G as fe,H as ye,I as ve,J as he,_ as ke,__tla as we}from"./index-f0743f71.js";import{_ as be,__tla as ge}from"./index-cf7b3541.js";import{_ as xe,__tla as Ce}from"./DictTag-4f08045a.js";import{_ as Ve,__tla as Se}from"./ContentWrap-5acc4fb9.js";import{a as Ue,D as H,__tla as Ie}from"./dict-4a9940b3.js";import{b as Te,__tla as De}from"./formatTime-e6df2ea5.js";import{d as Me}from"./download-20922b56.js";import{S as Pe,a as U,__tla as Ne}from"./StockMoveForm-df60f3f7.js";import{P as Ae,__tla as We}from"./index-45617213.js";import{W as Ye,__tla as Ee}from"./index-c5ebd655.js";import{g as Le,__tla as Re}from"./index-5f468446.js";import{u as qe,__tla as ze}from"./useMessage-75a00a06.js";import{__tla as Fe}from"./index-8beae3df.js";import"./color-f5b6e279.js";import{__tla as He}from"./index-a48a5540.js";import{__tla as Ge}from"./Dialog-8f786edd.js";import{__tla as Ke}from"./UploadFile-8fbb57ef.js";import{__tla as Be}from"./UploadFile.vue_vue_type_style_index_0_scoped_436eca1b_lang-cd3de5a5.js";import{__tla as Je}from"./useUpload-27a6f734.js";import{__tla as Qe}from"./index-21698e53.js";import{__tla as Xe}from"./StockMoveItemForm-76046014.js";import{__tla as Ze}from"./index-cf2468e1.js";let G,$e=Promise.all([(()=>{try{return we}catch{}})(),(()=>{try{return ge}catch{}})(),(()=>{try{return Ce}catch{}})(),(()=>{try{return Se}catch{}})(),(()=>{try{return Ie}catch{}})(),(()=>{try{return De}catch{}})(),(()=>{try{return Ne}catch{}})(),(()=>{try{return We}catch{}})(),(()=>{try{return Ee}catch{}})(),(()=>{try{return Re}catch{}})(),(()=>{try{return ze}catch{}})(),(()=>{try{return Fe}catch{}})(),(()=>{try{return He}catch{}})(),(()=>{try{return Ge}catch{}})(),(()=>{try{return Ke}catch{}})(),(()=>{try{return Be}catch{}})(),(()=>{try{return Je}catch{}})(),(()=>{try{return Qe}catch{}})(),(()=>{try{return Xe}catch{}})(),(()=>{try{return Ze}catch{}})()]).then(async()=>{G=ke(ae({name:"ErpStockMove",__name:"index",setup(je){const h=qe(),{t:K}=le(),I=n(!0),M=n([]),P=n(0),o=te({pageNo:1,pageSize:10,no:void 0,productId:void 0,fromWarehouseId:void 0,moveTime:[],status:void 0,remark:void 0,creator:void 0}),N=n(),T=n(!1),A=n([]),W=n([]),Y=n([]),y=async()=>{I.value=!0;try{const u=await U.getStockMovePage(o);M.value=u.list,P.value=u.total}finally{I.value=!1}},x=()=>{o.pageNo=1,y()},B=()=>{N.value.resetFields(),x()},E=n(),D=(u,t)=>{E.value.open(u,t)},L=async u=>{try{await h.delConfirm(),await U.deleteStockMove(u),h.success(K("common.delSuccess")),await y(),k.value=k.value.filter(t=>!u.includes(t.id))}catch{}},R=async(u,t)=>{try{await h.confirm(`\u786E\u5B9A${t===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279"}\u8BE5\u8C03\u5EA6\u5355\u5417\uFF1F`),await U.updateStockMoveStatus(u,t),h.success((t===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279")+"\u6210\u529F"),await y()}catch{}},J=async()=>{try{await h.exportConfirm(),T.value=!0;const u=await U.exportStockMove(o);Me.excel(u,"\u5E93\u5B58\u8C03\u5EA6\u5355.xls")}catch{}finally{T.value=!1}},k=n([]),Q=u=>{k.value=u};return re(async()=>{await y(),A.value=await Ae.getProductSimpleList(),W.value=await Ye.getWarehouseSimpleList(),Y.value=await Le()}),(u,t)=>{const q=ie,m=ce,C=ne,V=de,X=pe,w=_e,c=me,Z=fe,z=Ve,p=ye,$=xe,j=ve,O=be,f=oe("hasPermi"),ee=he;return s(),b(g,null,[a(z,null,{default:r(()=>[a(Z,{class:"-mb-15px",model:l(o),ref_key:"queryFormRef",ref:N,inline:!0,"label-width":"68px"},{default:r(()=>[a(m,{label:"\u8C03\u5EA6\u5355\u53F7",prop:"no"},{default:r(()=>[a(q,{modelValue:l(o).no,"onUpdate:modelValue":t[0]||(t[0]=e=>l(o).no=e),placeholder:"\u8BF7\u8F93\u5165\u8C03\u5EA6\u5355\u53F7",clearable:"",onKeyup:F(x,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(m,{label:"\u4EA7\u54C1",prop:"productId"},{default:r(()=>[a(V,{modelValue:l(o).productId,"onUpdate:modelValue":t[1]||(t[1]=e=>l(o).productId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4EA7\u54C1",class:"!w-240px"},{default:r(()=>[(s(!0),b(g,null,S(l(A),e=>(s(),i(C,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"\u8C03\u5EA6\u65F6\u95F4",prop:"moveTime"},{default:r(()=>[a(X,{modelValue:l(o).moveTime,"onUpdate:modelValue":t[2]||(t[2]=e=>l(o).moveTime=e),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-240px"},null,8,["modelValue","default-time"])]),_:1}),a(m,{label:"\u4ED3\u5E93",prop:"fromWarehouseId"},{default:r(()=>[a(V,{modelValue:l(o).fromWarehouseId,"onUpdate:modelValue":t[3]||(t[3]=e=>l(o).fromWarehouseId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93",class:"!w-240px"},{default:r(()=>[(s(!0),b(g,null,S(l(W),e=>(s(),i(C,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"\u521B\u5EFA\u4EBA",prop:"creator"},{default:r(()=>[a(V,{modelValue:l(o).creator,"onUpdate:modelValue":t[4]||(t[4]=e=>l(o).creator=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u521B\u5EFA\u4EBA",class:"!w-240px"},{default:r(()=>[(s(!0),b(g,null,S(l(Y),e=>(s(),i(C,{key:e.id,label:e.nickname,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"\u72B6\u6001",prop:"status"},{default:r(()=>[a(V,{modelValue:l(o).status,"onUpdate:modelValue":t[5]||(t[5]=e=>l(o).status=e),placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",clearable:"",class:"!w-240px"},{default:r(()=>[(s(!0),b(g,null,S(l(Ue)(l(H).ERP_AUDIT_STATUS),e=>(s(),i(C,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"\u5907\u6CE8",prop:"remark"},{default:r(()=>[a(q,{modelValue:l(o).remark,"onUpdate:modelValue":t[6]||(t[6]=e=>l(o).remark=e),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",clearable:"",onKeyup:F(x,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(m,null,{default:r(()=>[a(c,{onClick:x},{default:r(()=>[a(w,{icon:"ep:search",class:"mr-5px"}),d(" \u641C\u7D22")]),_:1}),a(c,{onClick:B},{default:r(()=>[a(w,{icon:"ep:refresh",class:"mr-5px"}),d(" \u91CD\u7F6E")]),_:1}),_((s(),i(c,{type:"primary",plain:"",onClick:t[7]||(t[7]=e=>D("create"))},{default:r(()=>[a(w,{icon:"ep:plus",class:"mr-5px"}),d(" \u65B0\u589E ")]),_:1})),[[f,["erp:stock-move:create"]]]),_((s(),i(c,{type:"success",plain:"",onClick:J,loading:l(T)},{default:r(()=>[a(w,{icon:"ep:download",class:"mr-5px"}),d(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[f,["erp:stock-move:export"]]]),_((s(),i(c,{type:"danger",plain:"",onClick:t[8]||(t[8]=e=>L(l(k).map(v=>v.id))),disabled:l(k).length===0},{default:r(()=>[a(w,{icon:"ep:delete",class:"mr-5px"}),d(" \u5220\u9664 ")]),_:1},8,["disabled"])),[[f,["erp:stock-move:delete"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(z,null,{default:r(()=>[_((s(),i(j,{data:l(M),stripe:!0,"show-overflow-tooltip":!0,onSelectionChange:Q},{default:r(()=>[a(p,{width:"30",label:"\u9009\u62E9",type:"selection"}),a(p,{"min-width":"180",label:"\u8C03\u5EA6\u5355\u53F7",align:"center",prop:"no"}),a(p,{label:"\u4EA7\u54C1\u4FE1\u606F",align:"center",prop:"productNames","min-width":"200"}),a(p,{label:"\u8C03\u5EA6\u65F6\u95F4",align:"center",prop:"moveTime",formatter:l(Te),width:"120px"},null,8,["formatter"]),a(p,{label:"\u521B\u5EFA\u4EBA",align:"center",prop:"creatorName"}),a(p,{label:"\u6570\u91CF",align:"center",prop:"totalCount",formatter:l(se)},null,8,["formatter"]),a(p,{label:"\u91D1\u989D",align:"center",prop:"totalPrice",formatter:l(ue)},null,8,["formatter"]),a(p,{label:"\u72B6\u6001",align:"center",fixed:"right",width:"90",prop:"status"},{default:r(e=>[a($,{type:l(H).ERP_AUDIT_STATUS,value:e.row.status},null,8,["type","value"])]),_:1}),a(p,{label:"\u64CD\u4F5C",align:"center",fixed:"right",width:"220"},{default:r(e=>[_((s(),i(c,{link:"",onClick:v=>D("detail",e.row.id)},{default:r(()=>[d(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])),[[f,["erp:stock-move:query"]]]),_((s(),i(c,{link:"",type:"primary",onClick:v=>D("update",e.row.id),disabled:e.row.status===20},{default:r(()=>[d(" \u7F16\u8F91 ")]),_:2},1032,["onClick","disabled"])),[[f,["erp:stock-move:update"]]]),e.row.status===10?_((s(),i(c,{key:0,link:"",type:"primary",onClick:v=>R(e.row.id,20)},{default:r(()=>[d(" \u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[f,["erp:stock-move:update-status"]]]):_((s(),i(c,{key:1,link:"",type:"danger",onClick:v=>R(e.row.id,10)},{default:r(()=>[d(" \u53CD\u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[f,["erp:stock-move:update-status"]]]),_((s(),i(c,{link:"",type:"danger",onClick:v=>L([e.row.id])},{default:r(()=>[d(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[f,["erp:stock-move:delete"]]])]),_:1})]),_:1},8,["data"])),[[ee,l(I)]]),a(O,{total:l(P),page:l(o).pageNo,"onUpdate:page":t[9]||(t[9]=e=>l(o).pageNo=e),limit:l(o).pageSize,"onUpdate:limit":t[10]||(t[10]=e=>l(o).pageSize=e),onPagination:y},null,8,["total","page","limit"])]),_:1}),a(Pe,{ref_key:"formRef",ref:E,onSuccess:y},null,512)],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/erp/stock/move/index.vue"]])});export{$e as __tla,G as default};