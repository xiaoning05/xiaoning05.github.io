import{d as J,i as K,r as p,e as Q,p as X,L as Y,o as i,c as Z,f as a,w as t,a as e,M as j,h as _,x as d,v as m,e1 as v,F as B,Q as W,A as $,C as aa,D as ea,G as ta,H as ra,I as la,J as oa,_ as ca,__tla as na}from"./index-f0743f71.js";import{_ as pa,__tla as sa}from"./index-cf7b3541.js";import{_ as ia,__tla as _a}from"./DictTag-4f08045a.js";import{_ as ua,__tla as da}from"./ContentWrap-5acc4fb9.js";import{E as ma,__tla as fa}from"./el-tree-select-d7a8a522.js";import{d as ya,__tla as ga}from"./formatTime-e6df2ea5.js";import{d as ha}from"./download-20922b56.js";import{P as C,__tla as wa}from"./index-45617213.js";import{P as xa,__tla as ba}from"./index-40f55eac.js";import va,{__tla as Ca}from"./ProductForm-6ef9da6f.js";import{D as Pa,__tla as ka}from"./dict-4a9940b3.js";import{h as Ia,d as Na}from"./tree-02f455f9.js";import{u as Sa,__tla as Va}from"./useMessage-75a00a06.js";import{__tla as Ua}from"./index-8beae3df.js";import"./color-f5b6e279.js";import{__tla as Ma}from"./index-a48a5540.js";import{__tla as Ea}from"./Dialog-8f786edd.js";import{__tla as Fa}from"./index-47521906.js";import"./constants-99751ef9.js";let M,za=Promise.all([(()=>{try{return na}catch{}})(),(()=>{try{return sa}catch{}})(),(()=>{try{return _a}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return fa}catch{}})(),(()=>{try{return ga}catch{}})(),(()=>{try{return wa}catch{}})(),(()=>{try{return ba}catch{}})(),(()=>{try{return Ca}catch{}})(),(()=>{try{return ka}catch{}})(),(()=>{try{return Va}catch{}})(),(()=>{try{return Ua}catch{}})(),(()=>{try{return Ma}catch{}})(),(()=>{try{return Ea}catch{}})(),(()=>{try{return Fa}catch{}})()]).then(async()=>{M=ca(J({name:"ErpProduct",__name:"index",setup(Aa){const g=Sa(),{t:E}=K(),h=p(!0),P=p([]),k=p(0),l=Q({pageNo:1,pageSize:10,name:void 0,categoryId:void 0}),I=p(),w=p(!1),N=p([]),u=async()=>{h.value=!0;try{const n=await C.getProductPage(l);P.value=n.list,k.value=n.total}finally{h.value=!1}},x=()=>{l.pageNo=1,u()},F=()=>{I.value.resetFields(),x()},S=p(),V=(n,o)=>{S.value.open(n,o)},z=async()=>{try{await g.exportConfirm(),w.value=!0;const n=await C.exportProduct(l);ha.excel(n,"\u4EA7\u54C1.xls")}catch{}finally{w.value=!1}};return X(async()=>{await u();const n=await xa.getProductCategorySimpleList();N.value=Ia(n,"id","parentId")}),(n,o)=>{const A=W,b=$,D=ma,f=aa,s=ea,O=ta,U=ua,c=ra,T=ia,G=la,L=pa,y=Y("hasPermi"),R=oa;return i(),Z(B,null,[a(U,null,{default:t(()=>[a(O,{class:"-mb-15px",model:e(l),ref_key:"queryFormRef",ref:I,inline:!0,"label-width":"68px"},{default:t(()=>[a(b,{label:"\u540D\u79F0",prop:"name"},{default:t(()=>[a(A,{modelValue:e(l).name,"onUpdate:modelValue":o[0]||(o[0]=r=>e(l).name=r),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",clearable:"",onKeyup:j(x,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(b,{label:"\u5206\u7C7B",prop:"categoryId"},{default:t(()=>[a(D,{modelValue:e(l).categoryId,"onUpdate:modelValue":o[1]||(o[1]=r=>e(l).categoryId=r),data:e(N),props:e(Na),"check-strictly":"","default-expand-all":"",placeholder:"\u8BF7\u8F93\u5165\u5206\u7C7B",class:"!w-240px"},null,8,["modelValue","data","props"])]),_:1}),a(b,null,{default:t(()=>[a(s,{onClick:x},{default:t(()=>[a(f,{icon:"ep:search",class:"mr-5px"}),_(" \u641C\u7D22")]),_:1}),a(s,{onClick:F},{default:t(()=>[a(f,{icon:"ep:refresh",class:"mr-5px"}),_(" \u91CD\u7F6E")]),_:1}),d((i(),m(s,{type:"primary",plain:"",onClick:o[2]||(o[2]=r=>V("create"))},{default:t(()=>[a(f,{icon:"ep:plus",class:"mr-5px"}),_(" \u65B0\u589E ")]),_:1})),[[y,["erp:product:create"]]]),d((i(),m(s,{type:"success",plain:"",onClick:z,loading:e(w)},{default:t(()=>[a(f,{icon:"ep:download",class:"mr-5px"}),_(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[y,["erp:product:export"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(U,null,{default:t(()=>[d((i(),m(G,{data:e(P),stripe:!0,"show-overflow-tooltip":!0},{default:t(()=>[a(c,{label:"\u6761\u7801",align:"center",prop:"barCode"}),a(c,{label:"\u540D\u79F0",align:"center",prop:"name"}),a(c,{label:"\u89C4\u683C",align:"center",prop:"standard"}),a(c,{label:"\u5206\u7C7B",align:"center",prop:"categoryName"}),a(c,{label:"\u5355\u4F4D",align:"center",prop:"unitName"}),a(c,{label:"\u91C7\u8D2D\u4EF7\u683C",align:"center",prop:"purchasePrice",formatter:e(v)},null,8,["formatter"]),a(c,{label:"\u9500\u552E\u4EF7\u683C",align:"center",prop:"salePrice",formatter:e(v)},null,8,["formatter"]),a(c,{label:"\u6700\u4F4E\u4EF7\u683C",align:"center",prop:"minPrice",formatter:e(v)},null,8,["formatter"]),a(c,{label:"\u72B6\u6001",align:"center",prop:"status"},{default:t(r=>[a(T,{type:e(Pa).COMMON_STATUS,value:r.row.status},null,8,["type","value"])]),_:1}),a(c,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",formatter:e(ya),width:"180px"},null,8,["formatter"]),a(c,{label:"\u64CD\u4F5C",align:"center",width:"110"},{default:t(r=>[d((i(),m(s,{link:"",type:"primary",onClick:q=>V("update",r.row.id)},{default:t(()=>[_(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[y,["erp:product:update"]]]),d((i(),m(s,{link:"",type:"danger",onClick:q=>(async H=>{try{await g.delConfirm(),await C.deleteProduct(H),g.success(E("common.delSuccess")),await u()}catch{}})(r.row.id)},{default:t(()=>[_(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[y,["erp:product:delete"]]])]),_:1})]),_:1},8,["data"])),[[R,e(h)]]),a(L,{total:e(k),page:e(l).pageNo,"onUpdate:page":o[3]||(o[3]=r=>e(l).pageNo=r),limit:e(l).pageSize,"onUpdate:limit":o[4]||(o[4]=r=>e(l).pageSize=r),onPagination:u},null,8,["total","page","limit"])]),_:1}),a(va,{ref_key:"formRef",ref:S,onSuccess:u},null,512)],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/erp/product/product/index.vue"]])});export{za as __tla,M as default};