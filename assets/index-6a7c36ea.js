import{u as P,_ as b,a as v,__tla as w}from"./useTable-f0eb1a89.js";import{d as z,r as M,p as U,G as k,o as n,c as x,b as r,e as l,a as t,w as C,q as L,h as R,F as j,B as q,_ as A,__tla as G}from"./index-b079f499.js";import{_ as I,__tla as B}from"./ContentWrap-0fab5b86.js";import{_ as D,__tla as E}from"./index-1e0a496d.js";import{a as i,M as F,g as N,__tla as O}from"./MailLogDetail-a62b8f5f.js";import{__tla as X}from"./Table.vue_vue_type_style_index_0_scoped_b4105caf_lang-16b2ef26.js";import{__tla as Y}from"./tsxHelper-b83ae8eb.js";import{__tla as Z}from"./index-c1a7e444.js";import{__tla as H}from"./Form-ee45a7be.js";import{__tla as J}from"./Form.vue_vue_type_style_index_0_scoped_b283cb39_lang-128eda63.js";import{__tla as K}from"./el-virtual-list-82e25059.js";import{__tla as Q}from"./el-tree-select-6f7a72c0.js";import{__tla as T}from"./el-time-select-8cc845e9.js";import{__tla as V}from"./InputPassword-4d2cd0ef.js";import{__tla as W}from"./Editor-519724cd.js";import{__tla as $}from"./UploadImg-0fb33d7e.js";import{__tla as tt}from"./index-1bcef585.js";import{__tla as at}from"./el-image-viewer-3e8b0085.js";import{__tla as rt}from"./useUpload-ca092158.js";import{__tla as _t}from"./index-4c44a910.js";import{__tla as et}from"./useMessage-66b9cf03.js";import{__tla as lt}from"./UploadImgs-2af287de.js";import{__tla as ot}from"./UploadImgs.vue_vue_type_style_index_0_scoped_9d666400_lang-62ab8f5e.js";import{__tla as ct}from"./UploadFile-8c3c7f37.js";import{__tla as mt}from"./UploadFile.vue_vue_type_style_index_0_scoped_436eca1b_lang-ccf69cde.js";import{__tla as st}from"./useForm-c1601035.js";import"./download-20922b56.js";import{__tla as nt}from"./index-3be78f60.js";import{__tla as it}from"./Dialog-07bcd661.js";import{__tla as ut}from"./Descriptions-27a6255a.js";import{__tla as pt}from"./Descriptions.vue_vue_type_style_index_0_scoped_aee191e8_lang-97b00c3b.js";import{__tla as ht}from"./el-descriptions-item-e73526e0.js";import{__tla as ft}from"./DictTag-6d4c3489.js";import"./color-f5b6e279.js";import{__tla as yt}from"./dict-2c56908b.js";import{__tla as dt}from"./formatTime-0805635f.js";import{__tla as gt}from"./index-f2fb61a7.js";import{__tla as St}from"./useCrudSchemas-0ded0703.js";import"./tree-02f455f9.js";let u,Pt=Promise.all([(()=>{try{return w}catch{}})(),(()=>{try{return G}catch{}})(),(()=>{try{return B}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return Y}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return H}catch{}})(),(()=>{try{return J}catch{}})(),(()=>{try{return K}catch{}})(),(()=>{try{return Q}catch{}})(),(()=>{try{return T}catch{}})(),(()=>{try{return V}catch{}})(),(()=>{try{return W}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return tt}catch{}})(),(()=>{try{return at}catch{}})(),(()=>{try{return rt}catch{}})(),(()=>{try{return _t}catch{}})(),(()=>{try{return et}catch{}})(),(()=>{try{return lt}catch{}})(),(()=>{try{return ot}catch{}})(),(()=>{try{return ct}catch{}})(),(()=>{try{return mt}catch{}})(),(()=>{try{return st}catch{}})(),(()=>{try{return nt}catch{}})(),(()=>{try{return it}catch{}})(),(()=>{try{return ut}catch{}})(),(()=>{try{return pt}catch{}})(),(()=>{try{return ht}catch{}})(),(()=>{try{return ft}catch{}})(),(()=>{try{return yt}catch{}})(),(()=>{try{return dt}catch{}})(),(()=>{try{return gt}catch{}})(),(()=>{try{return St}catch{}})()]).then(async()=>{u=A(z({name:"SystemMailLog",__name:"index",setup(bt){const{tableObject:a,tableMethods:p}=P({getListApi:N}),{getList:h,setSearchParams:o}=p,c=M();return U(()=>{h()}),(vt,e)=>{const f=D,y=b,m=I,d=q,g=v,S=k("hasPermi");return n(),x(j,null,[r(f,{title:"\u90AE\u4EF6\u914D\u7F6E",url:"https://doc.iocoder.cn/mail"}),r(m,null,{default:l(()=>[r(y,{schema:t(i).searchSchema,onSearch:t(o),onReset:t(o)},null,8,["schema","onSearch","onReset"])]),_:1}),r(m,null,{default:l(()=>[r(g,{columns:t(i).tableColumns,data:t(a).tableList,loading:t(a).loading,pagination:{total:t(a).total},pageSize:t(a).pageSize,"onUpdate:pageSize":e[0]||(e[0]=_=>t(a).pageSize=_),currentPage:t(a).currentPage,"onUpdate:currentPage":e[1]||(e[1]=_=>t(a).currentPage=_)},{action:l(({row:_})=>[C((n(),L(d,{link:"",type:"primary",onClick:wt=>{return s=_.id,void c.value.open(s);var s}},{default:l(()=>[R(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])),[[S,["system:mail-log:query"]]])]),_:1},8,["columns","data","loading","pagination","pageSize","currentPage"])]),_:1}),r(F,{ref_key:"detailRef",ref:c},null,512)],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/system/mail/log/index.vue"]])});export{Pt as __tla,u as default};