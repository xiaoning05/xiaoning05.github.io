import{u as M,_ as R,a as w,__tla as U}from"./useTable-2da76545.js";import{_ as j,__tla as A}from"./ContentWrap.vue_vue_type_script_setup_true_lang-3fd6aef1.js";import{d as T,r as P,p as I,K,o as c,c as O,f as _,w as e,a as t,x as n,v as i,h as p,F as q,_ as B,C as D,__tla as E}from"./index-d2088aec.js";import{_ as G,__tla as H}from"./index-bf121364.js";import{a as v,_ as J,__tla as N}from"./MailTemplateForm.vue_vue_type_script_setup_true_lang-fdc1e0b6.js";import{a as Q,d as V,__tla as W}from"./index-7a4ab001.js";import{_ as X,__tla as Y}from"./MailTemplateSendForm.vue_vue_type_script_setup_true_lang-f463f2df.js";import{__tla as Z}from"./Table.vue_vue_type_style_index_0_scoped_1ee0f9ba_lang-2efd46fd.js";import{__tla as $}from"./tsxHelper-9f8b23eb.js";import{__tla as tt}from"./index-9309eb20.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as at}from"./Form-e9fe9dea.js";import{__tla as rt}from"./Form.vue_vue_type_style_index_0_scoped_09f6ff61_lang-2ae7715e.js";import{__tla as _t}from"./el-virtual-list-643f947c.js";import{__tla as et}from"./el-tree-select-284f702e.js";import{__tla as lt}from"./el-time-select-1c10be50.js";import{__tla as ot}from"./InputPassword-04ac0e2e.js";import{__tla as ct}from"./style.css_vue_type_style_index_0_src_true_lang-40e2d3d3.js";import{__tla as mt}from"./UploadImg-c6bc4a21.js";import{__tla as st}from"./index-b484ae95.js";import{__tla as nt}from"./el-image-viewer-6188d22b.js";import{__tla as it}from"./useUpload-53891715.js";import{__tla as pt}from"./index-a70e1e2c.js";import{__tla as ut}from"./useMessage-c5990e2c.js";import{__tla as ft}from"./UploadImgs-2e1224f9.js";import{__tla as yt}from"./UploadImgs.vue_vue_type_style_index_0_scoped_78c552d7_lang-c3ac64a1.js";import{__tla as ht}from"./UploadFile-07ceee60.js";import{__tla as dt}from"./UploadFile.vue_vue_type_style_index_0_scoped_3311e906_lang-1f0a110b.js";import{__tla as gt}from"./useForm-0d24fddf.js";import"./download-20922b56.js";import{__tla as kt}from"./index-82efac34.js";import{__tla as St}from"./Dialog.vue_vue_type_style_index_0_lang-4d2024bd.js";import{__tla as Ct}from"./formatTime-c7e0c543.js";import{__tla as Pt}from"./index-90bccf46.js";import{__tla as vt}from"./formRules-fb12266a.js";import{__tla as bt}from"./dict-999fbee6.js";import{__tla as zt}from"./useCrudSchemas-705f912c.js";import"./tree-82bb3b99.js";import{__tla as Lt}from"./DictTag.vue_vue_type_script_lang-754cee6f.js";import"./color-f5b6e279.js";let b,xt=Promise.all([(()=>{try{return U}catch{}})(),(()=>{try{return A}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return H}catch{}})(),(()=>{try{return N}catch{}})(),(()=>{try{return W}catch{}})(),(()=>{try{return Y}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return tt}catch{}})(),(()=>{try{return at}catch{}})(),(()=>{try{return rt}catch{}})(),(()=>{try{return _t}catch{}})(),(()=>{try{return et}catch{}})(),(()=>{try{return lt}catch{}})(),(()=>{try{return ot}catch{}})(),(()=>{try{return ct}catch{}})(),(()=>{try{return mt}catch{}})(),(()=>{try{return st}catch{}})(),(()=>{try{return nt}catch{}})(),(()=>{try{return it}catch{}})(),(()=>{try{return pt}catch{}})(),(()=>{try{return ut}catch{}})(),(()=>{try{return ft}catch{}})(),(()=>{try{return yt}catch{}})(),(()=>{try{return ht}catch{}})(),(()=>{try{return dt}catch{}})(),(()=>{try{return gt}catch{}})(),(()=>{try{return kt}catch{}})(),(()=>{try{return St}catch{}})(),(()=>{try{return Ct}catch{}})(),(()=>{try{return Pt}catch{}})(),(()=>{try{return vt}catch{}})(),(()=>{try{return bt}catch{}})(),(()=>{try{return zt}catch{}})(),(()=>{try{return Lt}catch{}})()]).then(async()=>{b=T({name:"SystemMailTemplate",__name:"index",setup(Ft){const{tableObject:l,tableMethods:u}=M({getListApi:Q,delListApi:V}),{getList:f,setSearchParams:y}=u,h=P(),d=(k,a)=>{h.value.open(k,a)},g=P();return I(()=>{f()}),(k,a)=>{const z=G,L=B,m=D,x=R,S=j,F=w,s=K("hasPermi");return c(),O(q,null,[_(z,{title:"\u90AE\u4EF6\u914D\u7F6E",url:"https://doc.iocoder.cn/mail"}),_(S,null,{default:e(()=>[_(x,{schema:t(v).searchSchema,onSearch:t(y),onReset:t(y)},{actionMore:e(()=>[n((c(),i(m,{type:"primary",plain:"",onClick:a[0]||(a[0]=r=>d("create"))},{default:e(()=>[_(L,{icon:"ep:plus",class:"mr-5px"}),p(" \u65B0\u589E ")]),_:1})),[[s,["system:mail-account:create"]]])]),_:1},8,["schema","onSearch","onReset"])]),_:1}),_(S,null,{default:e(()=>[_(F,{columns:t(v).tableColumns,data:t(l).tableList,loading:t(l).loading,pagination:{total:t(l).total},pageSize:t(l).pageSize,"onUpdate:pageSize":a[1]||(a[1]=r=>t(l).pageSize=r),currentPage:t(l).currentPage,"onUpdate:currentPage":a[2]||(a[2]=r=>t(l).currentPage=r)},{action:e(({row:r})=>[n((c(),i(m,{link:"",type:"primary",onClick:C=>{return o=r.id,void g.value.open(o);var o}},{default:e(()=>[p(" \u6D4B\u8BD5 ")]),_:2},1032,["onClick"])),[[s,["system:mail-template:send-mail"]]]),n((c(),i(m,{link:"",type:"primary",onClick:C=>d("update",r.id)},{default:e(()=>[p(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[s,["system:mail-template:update"]]]),n((c(),i(m,{link:"",type:"danger",onClick:C=>{return o=r.id,void u.delList(o,!1);var o}},{default:e(()=>[p(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[s,["system:mail-template:delete"]]])]),_:1},8,["columns","data","loading","pagination","pageSize","currentPage"])]),_:1}),_(J,{ref_key:"formRef",ref:h,onSuccess:t(f)},null,8,["onSuccess"]),_(X,{ref_key:"sendFormRef",ref:g},null,512)],64)}}})});export{xt as __tla,b as default};