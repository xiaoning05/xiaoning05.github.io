import{d as H,i as $,r as p,e as j,p as B,K as J,o as _,c as Q,f as a,w as t,a as e,L as W,h as i,x as m,v as d,d$ as v,F as X,P as Y,A as Z,_ as aa,C as ea,D as ta,G as ra,H as la,I as oa,__tla as na}from"./index-d2088aec.js";import{_ as ca,__tla as pa}from"./index.vue_vue_type_script_setup_true_lang-6baf9e60.js";import{_ as sa,__tla as _a}from"./DictTag.vue_vue_type_script_lang-754cee6f.js";import{_ as ia,__tla as ua}from"./ContentWrap.vue_vue_type_script_setup_true_lang-3fd6aef1.js";import{E as ma,__tla as da}from"./el-tree-select-284f702e.js";import{d as fa,__tla as ya}from"./formatTime-c7e0c543.js";import{d as ga}from"./download-20922b56.js";import{P,__tla as ha}from"./index-19a1d262.js";import{P as wa,__tla as xa}from"./index-9e7879a8.js";import{_ as ba,__tla as va}from"./ProductForm.vue_vue_type_script_setup_true_lang-21df9c66.js";import{D as Pa,__tla as Ca}from"./dict-999fbee6.js";import{h as ka,d as Sa}from"./tree-82bb3b99.js";import{u as Ia,__tla as Na}from"./useMessage-c5990e2c.js";import{__tla as Ua}from"./index-9309eb20.js";import"./color-f5b6e279.js";import{__tla as Va}from"./index-82efac34.js";import{__tla as za}from"./Dialog.vue_vue_type_style_index_0_lang-4d2024bd.js";import{__tla as Fa}from"./index-3908e8f3.js";import"./constants-99751ef9.js";let z,La=Promise.all([(()=>{try{return na}catch{}})(),(()=>{try{return pa}catch{}})(),(()=>{try{return _a}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return ya}catch{}})(),(()=>{try{return ha}catch{}})(),(()=>{try{return xa}catch{}})(),(()=>{try{return va}catch{}})(),(()=>{try{return Ca}catch{}})(),(()=>{try{return Na}catch{}})(),(()=>{try{return Ua}catch{}})(),(()=>{try{return Va}catch{}})(),(()=>{try{return za}catch{}})(),(()=>{try{return Fa}catch{}})()]).then(async()=>{z=H({name:"ErpProduct",__name:"index",setup(Ma){const g=Ia(),{t:F}=$(),h=p(!0),C=p([]),k=p(0),l=j({pageNo:1,pageSize:10,name:void 0,categoryId:void 0}),S=p(),w=p(!1),I=p([]),u=async()=>{h.value=!0;try{const c=await P.getProductPage(l);C.value=c.list,k.value=c.total}finally{h.value=!1}},x=()=>{l.pageNo=1,u()},L=()=>{S.value.resetFields(),x()},N=p(),U=(c,o)=>{N.value.open(c,o)},M=async()=>{try{await g.exportConfirm(),w.value=!0;const c=await P.exportProduct(l);ga.excel(c,"\u4EA7\u54C1.xls")}catch{}finally{w.value=!1}};return B(async()=>{await u();const c=await wa.getProductCategorySimpleList();I.value=ka(c,"id","parentId")}),(c,o)=>{const T=Y,b=Z,A=ma,f=aa,s=ea,D=ta,V=ia,n=ra,E=sa,K=la,O=ca,y=J("hasPermi"),R=oa;return _(),Q(X,null,[a(V,null,{default:t(()=>[a(D,{class:"-mb-15px",model:e(l),ref_key:"queryFormRef",ref:S,inline:!0,"label-width":"68px"},{default:t(()=>[a(b,{label:"\u540D\u79F0",prop:"name"},{default:t(()=>[a(T,{modelValue:e(l).name,"onUpdate:modelValue":o[0]||(o[0]=r=>e(l).name=r),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",clearable:"",onKeyup:W(x,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(b,{label:"\u5206\u7C7B",prop:"categoryId"},{default:t(()=>[a(A,{modelValue:e(l).categoryId,"onUpdate:modelValue":o[1]||(o[1]=r=>e(l).categoryId=r),data:e(I),props:e(Sa),"check-strictly":"","default-expand-all":"",placeholder:"\u8BF7\u8F93\u5165\u5206\u7C7B",class:"!w-240px"},null,8,["modelValue","data","props"])]),_:1}),a(b,null,{default:t(()=>[a(s,{onClick:x},{default:t(()=>[a(f,{icon:"ep:search",class:"mr-5px"}),i(" \u641C\u7D22")]),_:1}),a(s,{onClick:L},{default:t(()=>[a(f,{icon:"ep:refresh",class:"mr-5px"}),i(" \u91CD\u7F6E")]),_:1}),m((_(),d(s,{type:"primary",plain:"",onClick:o[2]||(o[2]=r=>U("create"))},{default:t(()=>[a(f,{icon:"ep:plus",class:"mr-5px"}),i(" \u65B0\u589E ")]),_:1})),[[y,["erp:product:create"]]]),m((_(),d(s,{type:"success",plain:"",onClick:M,loading:e(w)},{default:t(()=>[a(f,{icon:"ep:download",class:"mr-5px"}),i(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[y,["erp:product:export"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(V,null,{default:t(()=>[m((_(),d(K,{data:e(C),stripe:!0,"show-overflow-tooltip":!0},{default:t(()=>[a(n,{label:"\u6761\u7801",align:"center",prop:"barCode"}),a(n,{label:"\u540D\u79F0",align:"center",prop:"name"}),a(n,{label:"\u89C4\u683C",align:"center",prop:"standard"}),a(n,{label:"\u5206\u7C7B",align:"center",prop:"categoryName"}),a(n,{label:"\u5355\u4F4D",align:"center",prop:"unitName"}),a(n,{label:"\u91C7\u8D2D\u4EF7\u683C",align:"center",prop:"purchasePrice",formatter:e(v)},null,8,["formatter"]),a(n,{label:"\u9500\u552E\u4EF7\u683C",align:"center",prop:"salePrice",formatter:e(v)},null,8,["formatter"]),a(n,{label:"\u6700\u4F4E\u4EF7\u683C",align:"center",prop:"minPrice",formatter:e(v)},null,8,["formatter"]),a(n,{label:"\u72B6\u6001",align:"center",prop:"status"},{default:t(r=>[a(E,{type:e(Pa).COMMON_STATUS,value:r.row.status},null,8,["type","value"])]),_:1}),a(n,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",formatter:e(fa),width:"180px"},null,8,["formatter"]),a(n,{label:"\u64CD\u4F5C",align:"center",width:"110"},{default:t(r=>[m((_(),d(s,{link:"",type:"primary",onClick:q=>U("update",r.row.id)},{default:t(()=>[i(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[y,["erp:product:update"]]]),m((_(),d(s,{link:"",type:"danger",onClick:q=>(async G=>{try{await g.delConfirm(),await P.deleteProduct(G),g.success(F("common.delSuccess")),await u()}catch{}})(r.row.id)},{default:t(()=>[i(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[y,["erp:product:delete"]]])]),_:1})]),_:1},8,["data"])),[[R,e(h)]]),a(O,{total:e(k),page:e(l).pageNo,"onUpdate:page":o[3]||(o[3]=r=>e(l).pageNo=r),limit:e(l).pageSize,"onUpdate:limit":o[4]||(o[4]=r=>e(l).pageSize=r),onPagination:u},null,8,["total","page","limit"])]),_:1}),a(ba,{ref_key:"formRef",ref:N,onSuccess:u},null,512)],64)}}})});export{La as __tla,z as default};