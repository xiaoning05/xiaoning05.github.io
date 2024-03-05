import{d as le,i as te,r as c,e as re,p as oe,L as ue,o as u,c as w,f as a,w as r,a as l,M as F,F as k,q as C,v as i,h as p,x as m,e4 as se,e1 as ie,Q as ce,A as de,y as ne,z as pe,B as _e,C as me,D as fe,G as ye,H as he,I as we,J as ke,_ as be,__tla as ve}from"./index-f0743f71.js";import{_ as ge,__tla as xe}from"./index-cf7b3541.js";import{_ as Ve,__tla as Ce}from"./DictTag-4f08045a.js";import{_ as Se,__tla as Ie}from"./ContentWrap-5acc4fb9.js";import{a as Ue,D as W,__tla as Te}from"./dict-4a9940b3.js";import{b as De,__tla as Pe}from"./formatTime-e6df2ea5.js";import{d as Ne}from"./download-20922b56.js";import{S as Ae,a as I,__tla as Ye}from"./StockOutForm-f9ab3dfb.js";import{P as qe,__tla as ze}from"./index-45617213.js";import{W as Le,__tla as Me}from"./index-c5ebd655.js";import{g as Oe,__tla as Re}from"./index-5f468446.js";import{C as Ee,__tla as He}from"./index-0fb739e0.js";import{u as Fe,__tla as We}from"./useMessage-75a00a06.js";import{__tla as Ge}from"./index-8beae3df.js";import"./color-f5b6e279.js";import{__tla as Ke}from"./index-a48a5540.js";import{__tla as Be}from"./Dialog-8f786edd.js";import{__tla as Je}from"./UploadFile-8fbb57ef.js";import{__tla as Qe}from"./UploadFile.vue_vue_type_style_index_0_scoped_436eca1b_lang-cd3de5a5.js";import{__tla as Xe}from"./useUpload-27a6f734.js";import{__tla as Ze}from"./index-21698e53.js";import{__tla as $e}from"./StockOutItemForm-994fe1a1.js";import{__tla as je}from"./index-cf2468e1.js";let G,ea=Promise.all([(()=>{try{return ve}catch{}})(),(()=>{try{return xe}catch{}})(),(()=>{try{return Ce}catch{}})(),(()=>{try{return Ie}catch{}})(),(()=>{try{return Te}catch{}})(),(()=>{try{return Pe}catch{}})(),(()=>{try{return Ye}catch{}})(),(()=>{try{return ze}catch{}})(),(()=>{try{return Me}catch{}})(),(()=>{try{return Re}catch{}})(),(()=>{try{return He}catch{}})(),(()=>{try{return We}catch{}})(),(()=>{try{return Ge}catch{}})(),(()=>{try{return Ke}catch{}})(),(()=>{try{return Be}catch{}})(),(()=>{try{return Je}catch{}})(),(()=>{try{return Qe}catch{}})(),(()=>{try{return Xe}catch{}})(),(()=>{try{return Ze}catch{}})(),(()=>{try{return $e}catch{}})(),(()=>{try{return je}catch{}})()]).then(async()=>{G=be(le({name:"ErpStockOut",__name:"index",setup(aa){const b=Fe(),{t:K}=te(),U=c(!0),P=c([]),N=c(0),o=re({pageNo:1,pageSize:10,no:void 0,productId:void 0,customerId:void 0,warehouseId:void 0,outTime:[],status:void 0,remark:void 0,creator:void 0}),A=c(),T=c(!1),Y=c([]),q=c([]),z=c([]),L=c([]),y=async()=>{U.value=!0;try{const s=await I.getStockOutPage(o);P.value=s.list,N.value=s.total}finally{U.value=!1}},S=()=>{o.pageNo=1,y()},B=()=>{A.value.resetFields(),S()},M=c(),D=(s,t)=>{M.value.open(s,t)},O=async s=>{try{await b.delConfirm(),await I.deleteStockOut(s),b.success(K("common.delSuccess")),await y(),v.value=v.value.filter(t=>!s.includes(t.id))}catch{}},R=async(s,t)=>{try{await b.confirm(`\u786E\u5B9A${t===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279"}\u8BE5\u51FA\u5E93\u5355\u5417\uFF1F`),await I.updateStockOutStatus(s,t),b.success((t===20?"\u5BA1\u6279":"\u53CD\u5BA1\u6279")+"\u6210\u529F"),await y()}catch{}},J=async()=>{try{await b.exportConfirm(),T.value=!0;const s=await I.exportStockOut(o);Ne.excel(s,"\u5176\u5B83\u51FA\u5E93\u5355.xls")}catch{}finally{T.value=!1}},v=c([]),Q=s=>{v.value=s};return oe(async()=>{await y(),Y.value=await qe.getProductSimpleList(),q.value=await Le.getWarehouseSimpleList(),z.value=await Ee.getCustomerSimpleList(),L.value=await Oe()}),(s,t)=>{const E=ce,_=de,g=ne,x=pe,X=_e,V=me,d=fe,Z=ye,H=Se,n=he,$=Ve,j=we,ee=ge,f=ue("hasPermi"),ae=ke;return u(),w(k,null,[a(H,null,{default:r(()=>[a(Z,{class:"-mb-15px",model:l(o),ref_key:"queryFormRef",ref:A,inline:!0,"label-width":"68px"},{default:r(()=>[a(_,{label:"\u51FA\u5E93\u5355\u53F7",prop:"no"},{default:r(()=>[a(E,{modelValue:l(o).no,"onUpdate:modelValue":t[0]||(t[0]=e=>l(o).no=e),placeholder:"\u8BF7\u8F93\u5165\u51FA\u5E93\u5355\u53F7",clearable:"",onKeyup:F(S,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(_,{label:"\u4EA7\u54C1",prop:"productId"},{default:r(()=>[a(x,{modelValue:l(o).productId,"onUpdate:modelValue":t[1]||(t[1]=e=>l(o).productId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4EA7\u54C1",class:"!w-240px"},{default:r(()=>[(u(!0),w(k,null,C(l(Y),e=>(u(),i(g,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(_,{label:"\u51FA\u5E93\u65F6\u95F4",prop:"outTime"},{default:r(()=>[a(X,{modelValue:l(o).outTime,"onUpdate:modelValue":t[2]||(t[2]=e=>l(o).outTime=e),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-240px"},null,8,["modelValue","default-time"])]),_:1}),a(_,{label:"\u5BA2\u6237",prop:"customerId"},{default:r(()=>[a(x,{modelValue:l(o).customerId,"onUpdate:modelValue":t[3]||(t[3]=e=>l(o).customerId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4F9B\u5BA2\u6237",class:"!w-240px"},{default:r(()=>[(u(!0),w(k,null,C(l(z),e=>(u(),i(g,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(_,{label:"\u4ED3\u5E93",prop:"warehouseId"},{default:r(()=>[a(x,{modelValue:l(o).warehouseId,"onUpdate:modelValue":t[4]||(t[4]=e=>l(o).warehouseId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93",class:"!w-240px"},{default:r(()=>[(u(!0),w(k,null,C(l(q),e=>(u(),i(g,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(_,{label:"\u521B\u5EFA\u4EBA",prop:"creator"},{default:r(()=>[a(x,{modelValue:l(o).creator,"onUpdate:modelValue":t[5]||(t[5]=e=>l(o).creator=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u521B\u5EFA\u4EBA",class:"!w-240px"},{default:r(()=>[(u(!0),w(k,null,C(l(L),e=>(u(),i(g,{key:e.id,label:e.nickname,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(_,{label:"\u72B6\u6001",prop:"status"},{default:r(()=>[a(x,{modelValue:l(o).status,"onUpdate:modelValue":t[6]||(t[6]=e=>l(o).status=e),placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",clearable:"",class:"!w-240px"},{default:r(()=>[(u(!0),w(k,null,C(l(Ue)(l(W).ERP_AUDIT_STATUS),e=>(u(),i(g,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(_,{label:"\u5907\u6CE8",prop:"remark"},{default:r(()=>[a(E,{modelValue:l(o).remark,"onUpdate:modelValue":t[7]||(t[7]=e=>l(o).remark=e),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",clearable:"",onKeyup:F(S,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(_,null,{default:r(()=>[a(d,{onClick:S},{default:r(()=>[a(V,{icon:"ep:search",class:"mr-5px"}),p(" \u641C\u7D22")]),_:1}),a(d,{onClick:B},{default:r(()=>[a(V,{icon:"ep:refresh",class:"mr-5px"}),p(" \u91CD\u7F6E")]),_:1}),m((u(),i(d,{type:"primary",plain:"",onClick:t[8]||(t[8]=e=>D("create"))},{default:r(()=>[a(V,{icon:"ep:plus",class:"mr-5px"}),p(" \u65B0\u589E ")]),_:1})),[[f,["erp:stock-out:create"]]]),m((u(),i(d,{type:"success",plain:"",onClick:J,loading:l(T)},{default:r(()=>[a(V,{icon:"ep:download",class:"mr-5px"}),p(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[f,["erp:stock-out:export"]]]),m((u(),i(d,{type:"danger",plain:"",onClick:t[9]||(t[9]=e=>O(l(v).map(h=>h.id))),disabled:l(v).length===0},{default:r(()=>[a(V,{icon:"ep:delete",class:"mr-5px"}),p(" \u5220\u9664 ")]),_:1},8,["disabled"])),[[f,["erp:stock-out:delete"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(H,null,{default:r(()=>[m((u(),i(j,{data:l(P),stripe:!0,"show-overflow-tooltip":!0,onSelectionChange:Q},{default:r(()=>[a(n,{width:"30",label:"\u9009\u62E9",type:"selection"}),a(n,{"min-width":"180",label:"\u51FA\u5E93\u5355\u53F7",align:"center",prop:"no"}),a(n,{label:"\u4EA7\u54C1\u4FE1\u606F",align:"center",prop:"productNames","min-width":"200"}),a(n,{label:"\u5BA2\u6237",align:"center",prop:"customerName"}),a(n,{label:"\u51FA\u5E93\u65F6\u95F4",align:"center",prop:"outTime",formatter:l(De),width:"120px"},null,8,["formatter"]),a(n,{label:"\u521B\u5EFA\u4EBA",align:"center",prop:"creatorName"}),a(n,{label:"\u6570\u91CF",align:"center",prop:"totalCount",formatter:l(se)},null,8,["formatter"]),a(n,{label:"\u91D1\u989D",align:"center",prop:"totalPrice",formatter:l(ie)},null,8,["formatter"]),a(n,{label:"\u72B6\u6001",align:"center",fixed:"right",width:"90",prop:"status"},{default:r(e=>[a($,{type:l(W).ERP_AUDIT_STATUS,value:e.row.status},null,8,["type","value"])]),_:1}),a(n,{label:"\u64CD\u4F5C",align:"center",fixed:"right",width:"220"},{default:r(e=>[m((u(),i(d,{link:"",onClick:h=>D("detail",e.row.id)},{default:r(()=>[p(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])),[[f,["erp:stock-out:query"]]]),m((u(),i(d,{link:"",type:"primary",onClick:h=>D("update",e.row.id),disabled:e.row.status===20},{default:r(()=>[p(" \u7F16\u8F91 ")]),_:2},1032,["onClick","disabled"])),[[f,["erp:stock-out:update"]]]),e.row.status===10?m((u(),i(d,{key:0,link:"",type:"primary",onClick:h=>R(e.row.id,20)},{default:r(()=>[p(" \u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[f,["erp:stock-out:update-status"]]]):m((u(),i(d,{key:1,link:"",type:"danger",onClick:h=>R(e.row.id,10)},{default:r(()=>[p(" \u53CD\u5BA1\u6279 ")]),_:2},1032,["onClick"])),[[f,["erp:stock-out:update-status"]]]),m((u(),i(d,{link:"",type:"danger",onClick:h=>O([e.row.id])},{default:r(()=>[p(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[f,["erp:stock-out:delete"]]])]),_:1})]),_:1},8,["data"])),[[ae,l(U)]]),a(ee,{total:l(N),page:l(o).pageNo,"onUpdate:page":t[10]||(t[10]=e=>l(o).pageNo=e),limit:l(o).pageSize,"onUpdate:limit":t[11]||(t[11]=e=>l(o).pageSize=e),onPagination:y},null,8,["total","page","limit"])]),_:1}),a(Ae,{ref_key:"formRef",ref:M,onSuccess:y},null,512)],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/erp/stock/out/index.vue"]])});export{ea as __tla,G as default};