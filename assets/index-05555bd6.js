import{d as ae,k as le,r as n,n as te,p as re,G as oe,o as c,c as v,b as a,e as r,a as l,H as W,F as g,g as S,q as u,h as d,w as _,e4 as ce,e1 as se,L as ue,y as ie,s as ne,x as de,z as pe,A as _e,B as me,C as fe,E as he,i as ke,v as ye,_ as we,__tla as be}from"./index-aaa5adb3.js";import{_ as ve,__tla as ge}from"./index-b47c179c.js";import{_ as xe,__tla as Ce}from"./DictTag-1c1088ae.js";import{_ as Ve,__tla as Se}from"./ContentWrap-04d7f6d1.js";import{a as Ue,D as F,__tla as Te}from"./dict-f2796e71.js";import{b as Ie,__tla as Pe}from"./formatTime-9c0e8879.js";import{d as De}from"./download-20922b56.js";import{S as Ne,a as U,__tla as Ae}from"./StockCheckForm-b88be5b4.js";import{P as ze,__tla as Ee}from"./index-24f49689.js";import{W as Re,__tla as Ye}from"./index-8af83b34.js";import{g as qe,__tla as He}from"./index-c1a6a53a.js";import{u as Le,__tla as Me}from"./useMessage-873da1e2.js";import{__tla as We}from"./index-c602062a.js";import"./color-f5b6e279.js";import{__tla as Fe}from"./index-5b7dcbf1.js";import{__tla as Ge}from"./Dialog-9a73a39c.js";import{__tla as Ke}from"./UploadFile-31413487.js";import{__tla as Be}from"./UploadFile.vue_vue_type_style_index_0_scoped_436eca1b_lang-d92f2323.js";import{__tla as Xe}from"./useUpload-c52dec87.js";import{__tla as Ze}from"./index-fb6b5360.js";import{__tla as $e}from"./StockCheckItemForm-00aef0d0.js";import{__tla as je}from"./index-d9ace307.js";let G,Je=Promise.all([(()=>{try{return be}catch{}})(),(()=>{try{return ge}catch{}})(),(()=>{try{return Ce}catch{}})(),(()=>{try{return Se}catch{}})(),(()=>{try{return Te}catch{}})(),(()=>{try{return Pe}catch{}})(),(()=>{try{return Ae}catch{}})(),(()=>{try{return Ee}catch{}})(),(()=>{try{return Ye}catch{}})(),(()=>{try{return He}catch{}})(),(()=>{try{return Me}catch{}})(),(()=>{try{return We}catch{}})(),(()=>{try{return Fe}catch{}})(),(()=>{try{return Ge}catch{}})(),(()=>{try{return Ke}catch{}})(),(()=>{try{return Be}catch{}})(),(()=>{try{return Xe}catch{}})(),(()=>{try{return Ze}catch{}})(),(()=>{try{return $e}catch{}})(),(()=>{try{return je}catch{}})()]).then(async()=>{G=we(ae({name:"ErpStockCheck",__name:"index",setup(Oe){const y=Le(),{t:K}=le(),T=n(!0),D=n([]),N=n(0),o=te({pageNo:1,pageSize:10,no:void 0,productId:void 0,warehouseId:void 0,checkTime:[],status:void 0,remark:void 0,creator:void 0}),A=n(),I=n(!1),z=n([]),E=n([]),R=n([]),h=async()=>{T.value=!0;try{const s=await U.getStockCheckPage(o);D.value=s.list,N.value=s.total}finally{T.value=!1}},x=()=>{o.pageNo=1,h()},B=()=>{A.value.resetFields(),x()},Y=n(),P=(s,t)=>{Y.value.open(s,t)},q=async s=>{try{await y.delConfirm(),await U.deleteStockCheck(s),y.success(K("common.delSuccess")),await h(),w.value=w.value.filter(t=>!s.includes(t.id))}catch{}},H=async(s,t)=>{try{await y.confirm(`\u786E\u5B9A${t===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279"}\u8BE5\u76D8\u70B9\u5355\u5417\uFF1F`),await U.updateStockCheckStatus(s,t),y.success((t===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279")+"\u6210\u529F"),await h()}catch{}},X=async()=>{try{await y.exportConfirm(),I.value=!0;const s=await U.exportStockCheck(o);De.excel(s,"\u5176\u5B83\u76D8\u70B9\u5355.xls")}catch{}finally{I.value=!1}},w=n([]),Z=s=>{w.value=s};return re(async()=>{await h(),z.value=await ze.getProductSimpleList(),E.value=await Re.getWarehouseSimpleList(),R.value=await qe()}),(s,t)=>{const L=ue,m=ie,C=ne,V=de,$=pe,b=_e,i=me,j=fe,M=Ve,p=he,J=xe,O=ke,Q=ve,f=oe("hasPermi"),ee=ye;return c(),v(g,null,[a(M,null,{default:r(()=>[a(j,{class:"-mb-15px",model:l(o),ref_key:"queryFormRef",ref:A,inline:!0,"label-width":"68px"},{default:r(()=>[a(m,{label:"\u76D8\u70B9\u5355\u53F7",prop:"no"},{default:r(()=>[a(L,{modelValue:l(o).no,"onUpdate:modelValue":t[0]||(t[0]=e=>l(o).no=e),placeholder:"\u8BF7\u8F93\u5165\u76D8\u70B9\u5355\u53F7",clearable:"",onKeyup:W(x,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(m,{label:"\u4EA7\u54C1",prop:"productId"},{default:r(()=>[a(V,{modelValue:l(o).productId,"onUpdate:modelValue":t[1]||(t[1]=e=>l(o).productId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4EA7\u54C1",class:"!w-240px"},{default:r(()=>[(c(!0),v(g,null,S(l(z),e=>(c(),u(C,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"\u76D8\u70B9\u65F6\u95F4",prop:"checkTime"},{default:r(()=>[a($,{modelValue:l(o).checkTime,"onUpdate:modelValue":t[2]||(t[2]=e=>l(o).checkTime=e),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-240px"},null,8,["modelValue","default-time"])]),_:1}),a(m,{label:"\u4ED3\u5E93",prop:"warehouseId"},{default:r(()=>[a(V,{modelValue:l(o).warehouseId,"onUpdate:modelValue":t[3]||(t[3]=e=>l(o).warehouseId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93",class:"!w-240px"},{default:r(()=>[(c(!0),v(g,null,S(l(E),e=>(c(),u(C,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"\u521B\u5EFA\u4EBA",prop:"creator"},{default:r(()=>[a(V,{modelValue:l(o).creator,"onUpdate:modelValue":t[4]||(t[4]=e=>l(o).creator=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u521B\u5EFA\u4EBA",class:"!w-240px"},{default:r(()=>[(c(!0),v(g,null,S(l(R),e=>(c(),u(C,{key:e.id,label:e.nickname,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"\u72B6\u6001",prop:"status"},{default:r(()=>[a(V,{modelValue:l(o).status,"onUpdate:modelValue":t[5]||(t[5]=e=>l(o).status=e),placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",clearable:"",class:"!w-240px"},{default:r(()=>[(c(!0),v(g,null,S(l(Ue)(l(F).ERP_AUDIT_STATUS),e=>(c(),u(C,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"\u5907\u6CE8",prop:"remark"},{default:r(()=>[a(L,{modelValue:l(o).remark,"onUpdate:modelValue":t[6]||(t[6]=e=>l(o).remark=e),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",clearable:"",onKeyup:W(x,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(m,null,{default:r(()=>[a(i,{onClick:x},{default:r(()=>[a(b,{icon:"ep:search",class:"mr-5px"}),d(" \u641C\u7D22")]),_:1}),a(i,{onClick:B},{default:r(()=>[a(b,{icon:"ep:refresh",class:"mr-5px"}),d(" \u91CD\u7F6E")]),_:1}),_((c(),u(i,{type:"primary",plain:"",onClick:t[7]||(t[7]=e=>P("create"))},{default:r(()=>[a(b,{icon:"ep:plus",class:"mr-5px"}),d(" \u65B0\u589E ")]),_:1})),[[f,["erp:stock-check:create"]]]),_((c(),u(i,{type:"success",plain:"",onClick:X,loading:l(I)},{default:r(()=>[a(b,{icon:"ep:download",class:"mr-5px"}),d(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[f,["erp:stock-check:export"]]]),_((c(),u(i,{type:"danger",plain:"",onClick:t[8]||(t[8]=e=>q(l(w).map(k=>k.id))),disabled:l(w).length===0},{default:r(()=>[a(b,{icon:"ep:delete",class:"mr-5px"}),d(" \u5220\u9664 ")]),_:1},8,["disabled"])),[[f,["erp:stock-check:delete"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(M,null,{default:r(()=>[_((c(),u(O,{data:l(D),stripe:!0,"show-overflow-tooltip":!0,onSelectionChange:Z},{default:r(()=>[a(p,{width:"30",label:"\u9009\u62E9",type:"selection"}),a(p,{"min-width":"180",label:"\u76D8\u70B9\u5355\u53F7",align:"center",prop:"no"}),a(p,{label:"\u4EA7\u54C1\u4FE1\u606F",align:"center",prop:"productNames","min-width":"200"}),a(p,{label:"\u76D8\u70B9\u65F6\u95F4",align:"center",prop:"checkTime",formatter:l(Ie),width:"120px"},null,8,["formatter"]),a(p,{label:"\u521B\u5EFA\u4EBA",align:"center",prop:"creatorName"}),a(p,{label:"\u6570\u91CF",align:"center",prop:"totalCount",formatter:l(ce)},null,8,["formatter"]),a(p,{label:"\u91D1\u989D",align:"center",prop:"totalPrice",formatter:l(se)},null,8,["formatter"]),a(p,{label:"\u72B6\u6001",align:"center",fixed:"right",width:"90",prop:"status"},{default:r(e=>[a(J,{type:l(F).ERP_AUDIT_STATUS,value:e.row.status},null,8,["type","value"])]),_:1}),a(p,{label:"\u64CD\u4F5C",align:"center",fixed:"right",width:"220"},{default:r(e=>[_((c(),u(i,{link:"",onClick:k=>P("detail",e.row.id)},{default:r(()=>[d(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])),[[f,["erp:stock-check:query"]]]),_((c(),u(i,{link:"",type:"primary",onClick:k=>P("update",e.row.id),disabled:e.row.status===20},{default:r(()=>[d(" \u7F16\u8F91 ")]),_:2},1032,["onClick","disabled"])),[[f,["erp:stock-check:update"]]]),e.row.status===10?_((c(),u(i,{key:0,link:"",type:"primary",onClick:k=>H(e.row.id,20)},{default:r(()=>[d(" \u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[f,["erp:stock-check:update-status"]]]):_((c(),u(i,{key:1,link:"",type:"danger",onClick:k=>H(e.row.id,10)},{default:r(()=>[d(" \u53CD\u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[f,["erp:stock-check:update-status"]]]),_((c(),u(i,{link:"",type:"danger",onClick:k=>q([e.row.id])},{default:r(()=>[d(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[f,["erp:stock-check:delete"]]])]),_:1})]),_:1},8,["data"])),[[ee,l(T)]]),a(Q,{total:l(N),page:l(o).pageNo,"onUpdate:page":t[9]||(t[9]=e=>l(o).pageNo=e),limit:l(o).pageSize,"onUpdate:limit":t[10]||(t[10]=e=>l(o).pageSize=e),onPagination:h},null,8,["total","page","limit"])]),_:1}),a(Ne,{ref_key:"formRef",ref:Y,onSuccess:h},null,512)],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/erp/stock/check/index.vue"]])});export{Je as __tla,G as default};