import{d as B,C as D,r as c,u as L,p as V,o as m,c as W,w as j,a as t,q as f,e as l,h as k,$ as R,b as a,F as E,A as G,l as H,m as J,a8 as K,v as Q,__tla as U}from"./index-34f06ebd.js";import{g as $,_ as X,__tla as Y}from"./index-cb9c746b.js";import{u as Z,__tla as tt}from"./tagsView-0be307a7.js";import{a as at,t as rt,__tla as _t}from"./index-f9574535.js";import{_ as lt,__tla as et}from"./ContactDetailsHeader.vue_vue_type_script_setup_true_lang-65e63813.js";import{_ as ot,__tla as ct}from"./ContactDetailsInfo.vue_vue_type_script_setup_true_lang-358ed4f6.js";import{_ as st,__tla as it}from"./BusinessList.vue_vue_type_script_setup_true_lang-2f8af0a5.js";import{_ as mt,__tla as nt}from"./PermissionList.vue_vue_type_script_setup_true_lang-200f292a.js";import{B as y,__tla as ut}from"./index-ad2ad2c3.js";import{_ as ft,__tla as yt}from"./ContactForm.vue_vue_type_script_setup_true_lang-d3cc1164.js";import{_ as pt,__tla as ht}from"./TransferForm.vue_vue_type_script_setup_true_lang-d26834ea.js";import{u as dt,__tla as bt}from"./useMessage-7a5ab7ef.js";import{__tla as Ct}from"./el-timeline-item-d0b9b464.js";import{__tla as vt}from"./formatTime-ed0a77fd.js";import{__tla as zt}from"./dict-e142e39a.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as wt}from"./ContentWrap.vue_vue_type_script_setup_true_lang-80915c85.js";import{__tla as Tt}from"./index-460c50ff.js";import{__tla as kt}from"./el-descriptions-item-a4aeefac.js";import{__tla as Rt}from"./el-collapse-item-c051ca56.js";import{__tla as Ot}from"./DictTag.vue_vue_type_script_lang-942df0b2.js";import"./color-f5b6e279.js";import{__tla as gt}from"./index.vue_vue_type_script_setup_true_lang-68fe248c.js";import{__tla as At}from"./index-f8693880.js";import{__tla as Nt}from"./el-link-6a9ddb0c.js";import{__tla as xt}from"./index-afd15d48.js";import{__tla as Mt}from"./BusinessForm.vue_vue_type_script_setup_true_lang-b82751f9.js";import{__tla as Ft}from"./Dialog.vue_vue_type_style_index_0_lang-08560286.js";import{__tla as It}from"./index-a1941d5a.js";import{__tla as Pt}from"./index-93aed665.js";import{__tla as St}from"./formatter-20c10600.js";import{__tla as qt}from"./BusinessListModal.vue_vue_type_script_setup_true_lang-020a14c9.js";import{__tla as Bt}from"./PermissionForm.vue_vue_type_script_setup_true_lang-56c4e6d5.js";import{__tla as Dt}from"./index-cd2bb9f6.js";import{__tla as Lt}from"./el-tree-select-45b5cb50.js";import{__tla as Vt}from"./index-e7762555.js";import"./tree-82bb3b99.js";let O,Wt=Promise.all([(()=>{try{return U}catch{}})(),(()=>{try{return Y}catch{}})(),(()=>{try{return tt}catch{}})(),(()=>{try{return _t}catch{}})(),(()=>{try{return et}catch{}})(),(()=>{try{return ct}catch{}})(),(()=>{try{return it}catch{}})(),(()=>{try{return nt}catch{}})(),(()=>{try{return ut}catch{}})(),(()=>{try{return yt}catch{}})(),(()=>{try{return ht}catch{}})(),(()=>{try{return bt}catch{}})(),(()=>{try{return Ct}catch{}})(),(()=>{try{return vt}catch{}})(),(()=>{try{return zt}catch{}})(),(()=>{try{return wt}catch{}})(),(()=>{try{return Tt}catch{}})(),(()=>{try{return kt}catch{}})(),(()=>{try{return Rt}catch{}})(),(()=>{try{return Ot}catch{}})(),(()=>{try{return gt}catch{}})(),(()=>{try{return At}catch{}})(),(()=>{try{return Nt}catch{}})(),(()=>{try{return xt}catch{}})(),(()=>{try{return Mt}catch{}})(),(()=>{try{return Ft}catch{}})(),(()=>{try{return It}catch{}})(),(()=>{try{return Pt}catch{}})(),(()=>{try{return St}catch{}})(),(()=>{try{return qt}catch{}})(),(()=>{try{return Bt}catch{}})(),(()=>{try{return Dt}catch{}})(),(()=>{try{return Lt}catch{}})(),(()=>{try{return Vt}catch{}})()]).then(async()=>{O=B({name:"CrmContactDetail",__name:"index",setup(jt){const g=D(),A=dt(),p=Number(g.params.id),n=c(!0),r=c({}),s=c(),h=async _=>{n.value=!0;try{r.value=await at(_),await x(_)}finally{n.value=!1}},d=c(),b=c(),N=()=>{var _;(_=b.value)==null||_.open("\u8054\u7CFB\u4EBA\u8F6C\u79FB",r.value.id,rt)},C=c([]),x=async _=>{if(!_)return;const e=await $({bizType:y.CRM_CONTACT,bizId:_});C.value=e.list},u=()=>{M(t(F))},{delView:M}=Z(),{currentRoute:F}=L();return V(async()=>{if(!p)return A.warning("\u53C2\u6570\u9519\u8BEF\uFF0C\u8054\u7CFB\u4EBA\u4E0D\u80FD\u4E3A\u7A7A\uFF01"),void u();await h(p)}),(_,e)=>{const v=G,i=H,I=X,P=J,S=K,q=Q;return m(),W(E,null,[j((m(),f(lt,{contact:t(r)},{default:l(()=>{var o,z;return[(o=t(s))!=null&&o.validateWrite?(m(),f(v,{key:0,onClick:e[0]||(e[0]=Et=>{return w="update",T=t(r).id,void d.value.open(w,T);var w,T})},{default:l(()=>[k(" \u7F16\u8F91 ")]),_:1})):R("",!0),(z=t(s))!=null&&z.validateOwnerUser?(m(),f(v,{key:1,type:"primary",onClick:N},{default:l(()=>[k(" \u8F6C\u79FB ")]),_:1})):R("",!0)]}),_:1},8,["contact"])),[[q,t(n)]]),a(S,null,{default:l(()=>[a(P,null,{default:l(()=>[a(i,{label:"\u8BE6\u7EC6\u8D44\u6599"},{default:l(()=>[a(ot,{contact:t(r)},null,8,["contact"])]),_:1}),a(i,{label:"\u64CD\u4F5C\u65E5\u5FD7"},{default:l(()=>[a(I,{"log-list":t(C)},null,8,["log-list"])]),_:1}),a(i,{label:"\u56E2\u961F\u6210\u5458"},{default:l(()=>{var o;return[a(mt,{ref_key:"permissionListRef",ref:s,"biz-id":t(r).id,"biz-type":t(y).CRM_CONTACT,"show-action":!((o=t(s))!=null&&o.isPool)||!1,onQuitTeam:u},null,8,["biz-id","biz-type","show-action"])]}),_:1}),a(i,{label:"\u5546\u673A",lazy:""},{default:l(()=>[a(st,{"biz-id":t(r).id,"biz-type":t(y).CRM_CONTACT,"customer-id":t(r).customerId},null,8,["biz-id","biz-type","customer-id"])]),_:1})]),_:1})]),_:1}),a(ft,{ref_key:"formRef",ref:d,onSuccess:e[1]||(e[1]=o=>h(t(r).id))},null,512),a(pt,{ref_key:"crmTransferFormRef",ref:b,onSuccess:u},null,512)],64)}}})});export{Wt as __tla,O as default};
