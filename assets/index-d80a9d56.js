import{d as B,i as J,r as s,e as M,p as T,K as Y,o as p,c as g,f as a,w as t,a as l,F as v,q as U,v as c,h as d,x as w,e2 as $,y as O,z as Q,A as X,_ as Z,C as aa,D as ea,G as la,H as ta,I as ra,__tla as oa}from"./index-d2088aec.js";import{_ as sa,__tla as pa}from"./index.vue_vue_type_script_setup_true_lang-6baf9e60.js";import{_ as na,__tla as ua}from"./ContentWrap.vue_vue_type_script_setup_true_lang-3fd6aef1.js";import{d as ca}from"./download-20922b56.js";import{S as q,__tla as ia}from"./index-43a89d89.js";import{P as _a,__tla as da}from"./index-19a1d262.js";import{W as ma,__tla as fa}from"./index-b5811f46.js";import{u as ya,__tla as ha}from"./useMessage-c5990e2c.js";import{__tla as ga}from"./index-9309eb20.js";import{__tla as va}from"./index-82efac34.js";let L,wa=Promise.all([(()=>{try{return oa}catch{}})(),(()=>{try{return pa}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return ia}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return fa}catch{}})(),(()=>{try{return ha}catch{}})(),(()=>{try{return ga}catch{}})(),(()=>{try{return va}catch{}})()]).then(async()=>{L=B({name:"ErpStock",__name:"index",setup(ba){const W=ya();J();const m=s(!0),b=s([]),x=s(0),r=M({pageNo:1,pageSize:10,productId:void 0,warehouseId:void 0}),k=s(),f=s(!1),S=s([]),I=s([]),y=async()=>{m.value=!0;try{const n=await q.getStockPage(r);b.value=n.list,x.value=n.total}finally{m.value=!1}},N=()=>{r.pageNo=1,y()},A=()=>{k.value.resetFields(),N()},D=s(),E=async()=>{try{await W.exportConfirm(),f.value=!0;const n=await q.exportStock(r);ca.excel(n,"\u4EA7\u54C1\u5E93\u5B58.xls")}catch{}finally{f.value=!1}};return T(async()=>{await y(),S.value=await _a.getProductSimpleList(),I.value=await ma.getWarehouseSimpleList()}),(n,o)=>{const C=O,V=Q,h=X,i=Z,_=aa,G=ea,P=na,u=la,H=ta,K=sa,z=Y("hasPermi"),R=ra;return p(),g(v,null,[a(P,null,{default:t(()=>[a(G,{class:"-mb-15px",model:l(r),ref_key:"queryFormRef",ref:k,inline:!0,"label-width":"68px"},{default:t(()=>[a(h,{label:"\u4EA7\u54C1",prop:"productId"},{default:t(()=>[a(V,{modelValue:l(r).productId,"onUpdate:modelValue":o[0]||(o[0]=e=>l(r).productId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4EA7\u54C1",class:"!w-240px"},{default:t(()=>[(p(!0),g(v,null,U(l(S),e=>(p(),c(C,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(h,{label:"\u4ED3\u5E93",prop:"warehouseId"},{default:t(()=>[a(V,{modelValue:l(r).warehouseId,"onUpdate:modelValue":o[1]||(o[1]=e=>l(r).warehouseId=e),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93",class:"!w-240px"},{default:t(()=>[(p(!0),g(v,null,U(l(I),e=>(p(),c(C,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(h,null,{default:t(()=>[a(_,{onClick:N},{default:t(()=>[a(i,{icon:"ep:search",class:"mr-5px"}),d(" \u641C\u7D22")]),_:1}),a(_,{onClick:A},{default:t(()=>[a(i,{icon:"ep:refresh",class:"mr-5px"}),d(" \u91CD\u7F6E")]),_:1}),w((p(),c(_,{type:"primary",plain:"",onClick:o[2]||(o[2]=e=>{return F="create",void D.value.open(F,j);var F,j})},{default:t(()=>[a(i,{icon:"ep:plus",class:"mr-5px"}),d(" \u65B0\u589E ")]),_:1})),[[z,["erp:stock:create"]]]),w((p(),c(_,{type:"success",plain:"",onClick:E,loading:l(f)},{default:t(()=>[a(i,{icon:"ep:download",class:"mr-5px"}),d(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[z,["erp:stock:export"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(P,null,{default:t(()=>[w((p(),c(H,{data:l(b),stripe:!0,"show-overflow-tooltip":!0},{default:t(()=>[a(u,{label:"\u4EA7\u54C1\u540D\u79F0",align:"center",prop:"productName"}),a(u,{label:"\u4EA7\u54C1\u5355\u4F4D",align:"center",prop:"unitName"}),a(u,{label:"\u4EA7\u54C1\u5206\u7C7B",align:"center",prop:"categoryName"}),a(u,{label:"\u5E93\u5B58\u91CF",align:"center",prop:"count",formatter:l($)},null,8,["formatter"]),a(u,{label:"\u4ED3\u5E93",align:"center",prop:"warehouseName"})]),_:1},8,["data"])),[[R,l(m)]]),a(K,{total:l(x),page:l(r).pageNo,"onUpdate:page":o[3]||(o[3]=e=>l(r).pageNo=e),limit:l(r).pageSize,"onUpdate:limit":o[4]||(o[4]=e=>l(r).pageSize=e),onPagination:y},null,8,["total","page","limit"])]),_:1})],64)}}})});export{wa as __tla,L as default};
