import{d as B,J as D,r as c,u as J,p as L,o as m,c as Q,x as U,a as t,v as f,w as l,h as k,a4 as R,f as a,F as V,C as W,m as q,n as E,j as H,I as G,__tla as K}from"./index-d2088aec.js";import{g as X,_ as Y,__tla as Z}from"./index-f50a4e7c.js";import{u as $,__tla as tt}from"./tagsView-b65f82a8.js";import{a as at,t as rt,__tla as _t}from"./index-3b1c9cde.js";import{_ as lt,__tla as et}from"./ContactDetailsHeader.vue_vue_type_script_setup_true_lang-4bcf424f.js";import{_ as ot,__tla as ct}from"./ContactDetailsInfo.vue_vue_type_script_setup_true_lang-47197840.js";import{_ as st,__tla as it}from"./BusinessList.vue_vue_type_script_setup_true_lang-c1d6c727.js";import{_ as mt,__tla as nt}from"./PermissionList.vue_vue_type_script_setup_true_lang-1575a58f.js";import{B as y,__tla as ut}from"./index-05c907cf.js";import{_ as ft,__tla as yt}from"./ContactForm.vue_vue_type_script_setup_true_lang-f40a203b.js";import{_ as pt,__tla as ht}from"./TransferForm.vue_vue_type_script_setup_true_lang-96669f93.js";import{u as dt,__tla as bt}from"./useMessage-c5990e2c.js";import{__tla as Ct}from"./el-timeline-item-bf602b47.js";import{__tla as vt}from"./formatTime-c7e0c543.js";import{__tla as zt}from"./dict-999fbee6.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as wt}from"./ContentWrap.vue_vue_type_script_setup_true_lang-3fd6aef1.js";import{__tla as Tt}from"./index-82efac34.js";import{__tla as kt}from"./el-descriptions-item-6a175b15.js";import{__tla as Rt}from"./el-collapse-item-df5fb7ce.js";import{__tla as gt}from"./DictTag.vue_vue_type_script_lang-754cee6f.js";import"./color-f5b6e279.js";import{__tla as xt}from"./index.vue_vue_type_script_setup_true_lang-6baf9e60.js";import{__tla as Mt}from"./index-9309eb20.js";import{__tla as Nt}from"./el-link-3f427b16.js";import{__tla as Ot}from"./index-63130e49.js";import{__tla as At}from"./BusinessForm.vue_vue_type_script_setup_true_lang-b403798a.js";import{__tla as It}from"./Dialog.vue_vue_type_style_index_0_lang-4d2024bd.js";import{__tla as Ft}from"./index-2e545b10.js";import{__tla as Pt}from"./index-8fa07f93.js";import{__tla as St}from"./formatter-38679f6e.js";import{__tla as jt}from"./BusinessListModal.vue_vue_type_script_setup_true_lang-0f9a8b07.js";import{__tla as Bt}from"./PermissionForm.vue_vue_type_script_setup_true_lang-2f5a6ef5.js";import{__tla as Dt}from"./index-456c5cde.js";import{__tla as Jt}from"./el-tree-select-284f702e.js";import{__tla as Lt}from"./index-397dc4f9.js";import"./tree-82bb3b99.js";let g,Qt=Promise.all([(()=>{try{return K}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return tt}catch{}})(),(()=>{try{return _t}catch{}})(),(()=>{try{return et}catch{}})(),(()=>{try{return ct}catch{}})(),(()=>{try{return it}catch{}})(),(()=>{try{return nt}catch{}})(),(()=>{try{return ut}catch{}})(),(()=>{try{return yt}catch{}})(),(()=>{try{return ht}catch{}})(),(()=>{try{return bt}catch{}})(),(()=>{try{return Ct}catch{}})(),(()=>{try{return vt}catch{}})(),(()=>{try{return zt}catch{}})(),(()=>{try{return wt}catch{}})(),(()=>{try{return Tt}catch{}})(),(()=>{try{return kt}catch{}})(),(()=>{try{return Rt}catch{}})(),(()=>{try{return gt}catch{}})(),(()=>{try{return xt}catch{}})(),(()=>{try{return Mt}catch{}})(),(()=>{try{return Nt}catch{}})(),(()=>{try{return Ot}catch{}})(),(()=>{try{return At}catch{}})(),(()=>{try{return It}catch{}})(),(()=>{try{return Ft}catch{}})(),(()=>{try{return Pt}catch{}})(),(()=>{try{return St}catch{}})(),(()=>{try{return jt}catch{}})(),(()=>{try{return Bt}catch{}})(),(()=>{try{return Dt}catch{}})(),(()=>{try{return Jt}catch{}})(),(()=>{try{return Lt}catch{}})()]).then(async()=>{g=B({name:"CrmContactDetail",__name:"index",setup(Ut){const x=D(),M=dt(),p=Number(x.params.id),n=c(!0),r=c({}),s=c(),h=async _=>{n.value=!0;try{r.value=await at(_),await O(_)}finally{n.value=!1}},d=c(),b=c(),N=()=>{var _;(_=b.value)==null||_.open("\u8054\u7CFB\u4EBA\u8F6C\u79FB",r.value.id,rt)},C=c([]),O=async _=>{if(!_)return;const e=await X({bizType:y.CRM_CONTACT,bizId:_});C.value=e.list},u=()=>{A(t(I))},{delView:A}=$(),{currentRoute:I}=J();return L(async()=>{if(!p)return M.warning("\u53C2\u6570\u9519\u8BEF\uFF0C\u8054\u7CFB\u4EBA\u4E0D\u80FD\u4E3A\u7A7A\uFF01"),void u();await h(p)}),(_,e)=>{const v=W,i=q,F=Y,P=E,S=H,j=G;return m(),Q(V,null,[U((m(),f(lt,{contact:t(r)},{default:l(()=>{var o,z;return[(o=t(s))!=null&&o.validateWrite?(m(),f(v,{key:0,onClick:e[0]||(e[0]=Vt=>{return w="update",T=t(r).id,void d.value.open(w,T);var w,T})},{default:l(()=>[k(" \u7F16\u8F91 ")]),_:1})):R("",!0),(z=t(s))!=null&&z.validateOwnerUser?(m(),f(v,{key:1,type:"primary",onClick:N},{default:l(()=>[k(" \u8F6C\u79FB ")]),_:1})):R("",!0)]}),_:1},8,["contact"])),[[j,t(n)]]),a(S,null,{default:l(()=>[a(P,null,{default:l(()=>[a(i,{label:"\u8BE6\u7EC6\u8D44\u6599"},{default:l(()=>[a(ot,{contact:t(r)},null,8,["contact"])]),_:1}),a(i,{label:"\u64CD\u4F5C\u65E5\u5FD7"},{default:l(()=>[a(F,{"log-list":t(C)},null,8,["log-list"])]),_:1}),a(i,{label:"\u56E2\u961F\u6210\u5458"},{default:l(()=>{var o;return[a(mt,{ref_key:"permissionListRef",ref:s,"biz-id":t(r).id,"biz-type":t(y).CRM_CONTACT,"show-action":!((o=t(s))!=null&&o.isPool)||!1,onQuitTeam:u},null,8,["biz-id","biz-type","show-action"])]}),_:1}),a(i,{label:"\u5546\u673A",lazy:""},{default:l(()=>[a(st,{"biz-id":t(r).id,"biz-type":t(y).CRM_CONTACT,"customer-id":t(r).customerId},null,8,["biz-id","biz-type","customer-id"])]),_:1})]),_:1})]),_:1}),a(ft,{ref_key:"formRef",ref:d,onSuccess:e[1]||(e[1]=o=>h(t(r).id))},null,512),a(pt,{ref_key:"crmTransferFormRef",ref:b,onSuccess:u},null,512)],64)}}})});export{Qt as __tla,g as default};