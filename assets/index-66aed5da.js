import{d as H,k as K,r as p,n as X,p as Y,G as Z,o as i,c as j,b as a,e as t,a as e,H as J,h as _,w as d,q as m,e1 as v,F as Q,L as W,y as $,A as aa,B as ea,C as ta,E as ra,i as la,v as oa,_ as na,__tla as ca}from"./index-aaa5adb3.js";import{_ as pa,__tla as sa}from"./index-b47c179c.js";import{_ as ia,__tla as _a}from"./DictTag-1c1088ae.js";import{_ as ua,__tla as da}from"./ContentWrap-04d7f6d1.js";import{E as ma,__tla as fa}from"./el-tree-select-49584d8b.js";import{d as ya,__tla as ga}from"./formatTime-9c0e8879.js";import{d as ha}from"./download-20922b56.js";import{P as k,__tla as wa}from"./index-24f49689.js";import{P as ba,__tla as xa}from"./index-d0ec335c.js";import va,{__tla as ka}from"./ProductForm-6a8667a3.js";import{D as Ca,__tla as Pa}from"./dict-f2796e71.js";import{h as Na,d as Sa}from"./tree-02f455f9.js";import{u as Ia,__tla as Va}from"./useMessage-873da1e2.js";import{__tla as Ua}from"./index-c602062a.js";import"./color-f5b6e279.js";import{__tla as Aa}from"./index-5b7dcbf1.js";import{__tla as Ea}from"./Dialog-9a73a39c.js";import{__tla as Ma}from"./index-d96fef61.js";import"./constants-99751ef9.js";let A,za=Promise.all([(()=>{try{return ca}catch{}})(),(()=>{try{return sa}catch{}})(),(()=>{try{return _a}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return fa}catch{}})(),(()=>{try{return ga}catch{}})(),(()=>{try{return wa}catch{}})(),(()=>{try{return xa}catch{}})(),(()=>{try{return ka}catch{}})(),(()=>{try{return Pa}catch{}})(),(()=>{try{return Va}catch{}})(),(()=>{try{return Ua}catch{}})(),(()=>{try{return Aa}catch{}})(),(()=>{try{return Ea}catch{}})(),(()=>{try{return Ma}catch{}})()]).then(async()=>{A=na(H({name:"ErpProduct",__name:"index",setup(Da){const g=Ia(),{t:E}=K(),h=p(!0),C=p([]),P=p(0),l=X({pageNo:1,pageSize:10,name:void 0,categoryId:void 0}),N=p(),w=p(!1),S=p([]),u=async()=>{h.value=!0;try{const c=await k.getProductPage(l);C.value=c.list,P.value=c.total}finally{h.value=!1}},b=()=>{l.pageNo=1,u()},M=()=>{N.value.resetFields(),b()},I=p(),V=(c,o)=>{I.value.open(c,o)},z=async()=>{try{await g.exportConfirm(),w.value=!0;const c=await k.exportProduct(l);ha.excel(c,"\u4EA7\u54C1.xls")}catch{}finally{w.value=!1}};return Y(async()=>{await u();const c=await ba.getProductCategorySimpleList();S.value=Na(c,"id","parentId")}),(c,o)=>{const D=W,x=$,F=ma,f=aa,s=ea,L=ta,U=ua,n=ra,T=ia,q=la,G=pa,y=Z("hasPermi"),O=oa;return i(),j(Q,null,[a(U,null,{default:t(()=>[a(L,{class:"-mb-15px",model:e(l),ref_key:"queryFormRef",ref:N,inline:!0,"label-width":"68px"},{default:t(()=>[a(x,{label:"\u540D\u79F0",prop:"name"},{default:t(()=>[a(D,{modelValue:e(l).name,"onUpdate:modelValue":o[0]||(o[0]=r=>e(l).name=r),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",clearable:"",onKeyup:J(b,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(x,{label:"\u5206\u7C7B",prop:"categoryId"},{default:t(()=>[a(F,{modelValue:e(l).categoryId,"onUpdate:modelValue":o[1]||(o[1]=r=>e(l).categoryId=r),data:e(S),props:e(Sa),"check-strictly":"","default-expand-all":"",placeholder:"\u8BF7\u8F93\u5165\u5206\u7C7B",class:"!w-240px"},null,8,["modelValue","data","props"])]),_:1}),a(x,null,{default:t(()=>[a(s,{onClick:b},{default:t(()=>[a(f,{icon:"ep:search",class:"mr-5px"}),_(" \u641C\u7D22")]),_:1}),a(s,{onClick:M},{default:t(()=>[a(f,{icon:"ep:refresh",class:"mr-5px"}),_(" \u91CD\u7F6E")]),_:1}),d((i(),m(s,{type:"primary",plain:"",onClick:o[2]||(o[2]=r=>V("create"))},{default:t(()=>[a(f,{icon:"ep:plus",class:"mr-5px"}),_(" \u65B0\u589E ")]),_:1})),[[y,["erp:product:create"]]]),d((i(),m(s,{type:"success",plain:"",onClick:z,loading:e(w)},{default:t(()=>[a(f,{icon:"ep:download",class:"mr-5px"}),_(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[y,["erp:product:export"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(U,null,{default:t(()=>[d((i(),m(q,{data:e(C),stripe:!0,"show-overflow-tooltip":!0},{default:t(()=>[a(n,{label:"\u6761\u7801",align:"center",prop:"barCode"}),a(n,{label:"\u540D\u79F0",align:"center",prop:"name"}),a(n,{label:"\u89C4\u683C",align:"center",prop:"standard"}),a(n,{label:"\u5206\u7C7B",align:"center",prop:"categoryName"}),a(n,{label:"\u5355\u4F4D",align:"center",prop:"unitName"}),a(n,{label:"\u91C7\u8D2D\u4EF7\u683C",align:"center",prop:"purchasePrice",formatter:e(v)},null,8,["formatter"]),a(n,{label:"\u9500\u552E\u4EF7\u683C",align:"center",prop:"salePrice",formatter:e(v)},null,8,["formatter"]),a(n,{label:"\u6700\u4F4E\u4EF7\u683C",align:"center",prop:"minPrice",formatter:e(v)},null,8,["formatter"]),a(n,{label:"\u72B6\u6001",align:"center",prop:"status"},{default:t(r=>[a(T,{type:e(Ca).COMMON_STATUS,value:r.row.status},null,8,["type","value"])]),_:1}),a(n,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",formatter:e(ya),width:"180px"},null,8,["formatter"]),a(n,{label:"\u64CD\u4F5C",align:"center",width:"110"},{default:t(r=>[d((i(),m(s,{link:"",type:"primary",onClick:R=>V("update",r.row.id)},{default:t(()=>[_(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[y,["erp:product:update"]]]),d((i(),m(s,{link:"",type:"danger",onClick:R=>(async B=>{try{await g.delConfirm(),await k.deleteProduct(B),g.success(E("common.delSuccess")),await u()}catch{}})(r.row.id)},{default:t(()=>[_(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[y,["erp:product:delete"]]])]),_:1})]),_:1},8,["data"])),[[O,e(h)]]),a(G,{total:e(P),page:e(l).pageNo,"onUpdate:page":o[3]||(o[3]=r=>e(l).pageNo=r),limit:e(l).pageSize,"onUpdate:limit":o[4]||(o[4]=r=>e(l).pageSize=r),onPagination:u},null,8,["total","page","limit"])]),_:1}),a(va,{ref_key:"formRef",ref:I,onSuccess:u},null,512)],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/erp/product/product/index.vue"]])});export{za as __tla,A as default};
