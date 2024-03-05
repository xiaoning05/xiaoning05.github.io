import{e as M,d as J,i as X,r as i,o as N,c as Z,f as s,w as c,a as l,h as S,x as j,v as q,l as K,F as W,as as Q,an as $,at as R,au as tt,D as at,c0 as rt,H as et,J as ot,_ as lt,__tla as _t}from"./index-f0743f71.js";import{_ as it,__tla as st}from"./Dialog-8f786edd.js";import{_ as ct,__tla as mt}from"./Form-3e953638.js";import{g as nt,c as ut,u as pt,__tla as ft}from"./combinationActivity-f4ed3ec8.js";import{b as x,__tla as dt}from"./formatTime-e6df2ea5.js";import{r as m,__tla as ht}from"./formRules-5c05c0bb.js";import{D as yt,__tla as vt}from"./dict-4a9940b3.js";import{u as bt,__tla as gt}from"./useCrudSchemas-7a260292.js";import Pt,{__tla as St}from"./SpuSelect-7fa36f5f.js";import kt,{__tla as Ct}from"./SpuAndSkuList-41be7fa0.js";import{g as wt,__tla as It}from"./index-6c38c988.js";import{b as Dt,__tla as Ft}from"./spu-5cbf535f.js";import{u as Tt,__tla as Vt}from"./useMessage-75a00a06.js";import{__tla as Yt}from"./Form.vue_vue_type_style_index_0_scoped_b283cb39_lang-d8ef16a2.js";import{__tla as Mt}from"./el-virtual-list-f8460722.js";import{__tla as Nt}from"./el-tree-select-d7a8a522.js";import{__tla as Rt}from"./el-time-select-fda81daa.js";import{__tla as xt}from"./InputPassword-70012cf4.js";import{__tla as At}from"./Editor-9944a8eb.js";import{__tla as Et}from"./UploadImg-aab03145.js";import{__tla as Lt}from"./index-4baae72c.js";import{__tla as Gt}from"./el-image-viewer-d97aa530.js";import{__tla as Ut}from"./useUpload-27a6f734.js";import{__tla as zt}from"./index-21698e53.js";import{__tla as Ot}from"./UploadImgs-e8dcbd85.js";import{__tla as Bt}from"./UploadImgs.vue_vue_type_style_index_0_scoped_9d666400_lang-24fc736b.js";import{__tla as Ht}from"./UploadFile-8fbb57ef.js";import{__tla as Jt}from"./UploadFile.vue_vue_type_style_index_0_scoped_436eca1b_lang-cd3de5a5.js";import{__tla as Xt}from"./tsxHelper-0d496dea.js";import"./tree-02f455f9.js";import{__tla as Zt}from"./DictTag-4f08045a.js";import"./color-f5b6e279.js";import{__tla as jt}from"./ContentWrap-5acc4fb9.js";import{__tla as qt}from"./index-a48a5540.js";import{__tla as Kt}from"./index-cf7b3541.js";import{__tla as Wt}from"./index-8beae3df.js";import{__tla as Qt}from"./el-image-015376ce.js";import{__tla as $t}from"./category-7944548c.js";import{__tla as ta}from"./SkuList-64f06f71.js";let A,aa=Promise.all([(()=>{try{return _t}catch{}})(),(()=>{try{return st}catch{}})(),(()=>{try{return mt}catch{}})(),(()=>{try{return ft}catch{}})(),(()=>{try{return dt}catch{}})(),(()=>{try{return ht}catch{}})(),(()=>{try{return vt}catch{}})(),(()=>{try{return gt}catch{}})(),(()=>{try{return St}catch{}})(),(()=>{try{return Ct}catch{}})(),(()=>{try{return It}catch{}})(),(()=>{try{return Ft}catch{}})(),(()=>{try{return Vt}catch{}})(),(()=>{try{return Yt}catch{}})(),(()=>{try{return Mt}catch{}})(),(()=>{try{return Nt}catch{}})(),(()=>{try{return Rt}catch{}})(),(()=>{try{return xt}catch{}})(),(()=>{try{return At}catch{}})(),(()=>{try{return Et}catch{}})(),(()=>{try{return Lt}catch{}})(),(()=>{try{return Gt}catch{}})(),(()=>{try{return Ut}catch{}})(),(()=>{try{return zt}catch{}})(),(()=>{try{return Ot}catch{}})(),(()=>{try{return Bt}catch{}})(),(()=>{try{return Ht}catch{}})(),(()=>{try{return Jt}catch{}})(),(()=>{try{return Xt}catch{}})(),(()=>{try{return Zt}catch{}})(),(()=>{try{return jt}catch{}})(),(()=>{try{return qt}catch{}})(),(()=>{try{return Kt}catch{}})(),(()=>{try{return Wt}catch{}})(),(()=>{try{return Qt}catch{}})(),(()=>{try{return $t}catch{}})(),(()=>{try{return ta}catch{}})()]).then(async()=>{let k,C,w;k=M({name:[m],totalLimitCount:[m],singleLimitCount:[m],startTime:[m],endTime:[m],userSize:[m],limitDuration:[m],virtualGroup:[m]}),C=M([{label:"\u62FC\u56E2\u540D\u79F0",field:"name",isSearch:!0,isTable:!1,form:{colProps:{span:24}}},{label:"\u6D3B\u52A8\u5F00\u59CB\u65F6\u95F4",field:"startTime",formatter:x,isSearch:!0,search:{component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD",type:"daterange"}},form:{component:"DatePicker",componentProps:{type:"date",valueFormat:"x"}},table:{width:120}},{label:"\u6D3B\u52A8\u7ED3\u675F\u65F6\u95F4",field:"endTime",formatter:x,isSearch:!0,search:{component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD",type:"daterange"}},form:{component:"DatePicker",componentProps:{type:"date",valueFormat:"x"}},table:{width:120}},{label:"\u53C2\u4E0E\u4EBA\u6570",field:"userSize",isSearch:!1,form:{component:"InputNumber",labelMessage:"\u53C2\u4E0E\u4EBA\u6570\u4E0D\u80FD\u5C11\u4E8E\u4E24\u4EBA",value:2}},{label:"\u9650\u5236\u65F6\u957F",field:"limitDuration",isSearch:!1,isTable:!1,form:{component:"InputNumber",labelMessage:"\u9650\u5236\u65F6\u957F(\u5C0F\u65F6)",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u9650\u5236\u65F6\u957F(\u5C0F\u65F6)"}}},{label:"\u603B\u9650\u8D2D\u6570\u91CF",field:"totalLimitCount",isSearch:!1,isTable:!1,form:{component:"InputNumber",value:0}},{label:"\u5355\u6B21\u9650\u8D2D\u6570\u91CF",field:"singleLimitCount",isSearch:!1,isTable:!1,form:{component:"InputNumber",value:0}},{label:"\u865A\u62DF\u6210\u56E2",field:"virtualGroup",dictType:yt.INFRA_BOOLEAN_STRING,dictClass:"boolean",isSearch:!0,form:{component:"Radio",value:!1}},{label:"\u62FC\u56E2\u5546\u54C1",field:"spuId",isSearch:!1,form:{colProps:{span:24}}}]),{allSchemas:w}=bt(C),A=lt(J({name:"PromotionCombinationActivityForm",__name:"CombinationActivityForm",emits:["success"],setup(ra,{expose:E,emit:L}){const{t:g}=X(),I=Tt(),u=i(!1),D=i(""),p=i(!1),F=i(""),n=i(),T=i(),V=i(),y=i([]),P=i([]),G=[{name:"productConfig.combinationPrice",rule:r=>r>=.01,message:"\u5546\u54C1\u62FC\u56E2\u4EF7\u683C\u4E0D\u80FD\u5C0F\u4E8E0.01 \uFF01\uFF01\uFF01"}],U=(r,t)=>{n.value.setValues({spuId:r}),Y(r,t)},Y=async(r,t,e)=>{var v;const _=[],f=await Dt([r]);if(f.length==0)return;y.value=[];const a=f[0],d=t===void 0?a==null?void 0:a.skus:(v=a==null?void 0:a.skus)==null?void 0:v.filter(o=>t.includes(o.id));d==null||d.forEach(o=>{let h={spuId:a.id,skuId:o.id,combinationPrice:0};if(e!==void 0){const b=e.find(H=>H.skuId===o.id);b&&(b.combinationPrice=Q(b.combinationPrice)),h=b||h}o.productConfig=h}),a.skus=d,_.push({spuId:a.id,spuDetail:a,propertyList:wt(a)}),y.value.push(a),P.value=_};E({open:async(r,t)=>{var e;if(u.value=!0,D.value=g("action."+r),F.value=r,await z(),t){p.value=!0;try{const _=await nt(t);await Y(_.spuId,(e=_.products)==null?void 0:e.map(f=>f.skuId),_.products),n.value.setValues(_)}finally{p.value=!1}}}});const z=async()=>{y.value=[],P.value=[],await $(),n.value.getElFormRef().resetFields()},O=L,B=async()=>{if(n&&await n.value.getElFormRef().validate()){p.value=!0;try{const r=R(V.value.getSkuConfigs("productConfig"));r.forEach(e=>{e.combinationPrice=tt(e.combinationPrice)});const t=R(n.value.formModel);t.products=r,F.value==="create"?(await ut(t),I.success(g("common.createSuccess"))):(await pt(t),I.success(g("common.updateSuccess"))),u.value=!1,O("success")}finally{p.value=!1}}};return(r,t)=>{const e=at,_=rt,f=et,a=ct,d=it,v=ot;return N(),Z(W,null,[s(d,{modelValue:l(u),"onUpdate:modelValue":t[2]||(t[2]=o=>K(u)?u.value=o:null),title:l(D),width:"65%"},{footer:c(()=>[s(e,{disabled:l(p),type:"primary",onClick:B},{default:c(()=>[S("\u786E \u5B9A")]),_:1},8,["disabled"]),s(e,{onClick:t[1]||(t[1]=o=>u.value=!1)},{default:c(()=>[S("\u53D6 \u6D88")]),_:1})]),default:c(()=>[j((N(),q(a,{ref_key:"formRef",ref:n,"is-col":!0,rules:l(k),schema:l(w).formSchema,class:"mt-10px"},{spuId:c(()=>[s(e,{onClick:t[0]||(t[0]=o=>l(T).open())},{default:c(()=>[S("\u9009\u62E9\u5546\u54C1")]),_:1}),s(l(kt),{ref_key:"spuAndSkuListRef",ref:V,"rule-config":G,"spu-list":l(y),"spu-property-list-p":l(P)},{default:c(()=>[s(f,{align:"center",label:"\u62FC\u56E2\u4EF7\u683C(\u5143)","min-width":"168"},{default:c(({row:o})=>[s(_,{modelValue:o.productConfig.combinationPrice,"onUpdate:modelValue":h=>o.productConfig.combinationPrice=h,min:0,precision:2,step:.1,class:"w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["spu-list","spu-property-list-p"])]),_:1},8,["rules","schema"])),[[v,l(p)]])]),_:1},8,["modelValue","title"]),s(l(Pt),{ref_key:"spuSelectRef",ref:T,isSelectSku:!0,onConfirm:U},null,512)],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mall/promotion/combination/activity/CombinationActivityForm.vue"]])});export{aa as __tla,A as default};
