import{e as M,d as X,i as Z,r as c,o as A,c as q,f as _,w as i,a as o,h as g,x as z,v as B,l as K,F as O,as as W,at as Q,au as $,an as tt,D as at,c0 as et,H as rt,J as lt,_ as ot,__tla as st}from"./index-f0743f71.js";import{_ as _t,__tla as ct}from"./Dialog-8f786edd.js";import{_ as it,__tla as mt}from"./Form-3e953638.js";import ut,{__tla as nt}from"./SpuSelect-7fa36f5f.js";import pt,{__tla as ft}from"./SpuAndSkuList-41be7fa0.js";import{b as L,__tla as dt}from"./formatTime-e6df2ea5.js";import{g as ht,__tla as yt}from"./seckillConfig-b823611e.js";import{r as m,__tla as vt}from"./formRules-5c05c0bb.js";import{u as kt,__tla as bt}from"./useCrudSchemas-7a260292.js";import{g as wt,c as gt,u as Pt,__tla as Ct}from"./seckillActivity-f4285444.js";import{b as St,__tla as It}from"./spu-5cbf535f.js";import{g as Ft,__tla as Vt}from"./index-6c38c988.js";import{u as Dt,__tla as Yt}from"./useMessage-75a00a06.js";import{__tla as xt}from"./Form.vue_vue_type_style_index_0_scoped_b283cb39_lang-d8ef16a2.js";import{__tla as Mt}from"./el-virtual-list-f8460722.js";import{__tla as At}from"./el-tree-select-d7a8a522.js";import{__tla as Lt}from"./el-time-select-fda81daa.js";import{__tla as Ut}from"./InputPassword-70012cf4.js";import{__tla as Et}from"./Editor-9944a8eb.js";import{__tla as Nt}from"./UploadImg-aab03145.js";import{__tla as Rt}from"./index-4baae72c.js";import{__tla as Tt}from"./el-image-viewer-d97aa530.js";import{__tla as jt}from"./useUpload-27a6f734.js";import{__tla as Gt}from"./index-21698e53.js";import{__tla as Ht}from"./UploadImgs-e8dcbd85.js";import{__tla as Jt}from"./UploadImgs.vue_vue_type_style_index_0_scoped_9d666400_lang-24fc736b.js";import{__tla as Xt}from"./UploadFile-8fbb57ef.js";import{__tla as Zt}from"./UploadFile.vue_vue_type_style_index_0_scoped_436eca1b_lang-cd3de5a5.js";import{__tla as qt}from"./tsxHelper-0d496dea.js";import{__tla as zt}from"./ContentWrap-5acc4fb9.js";import{__tla as Bt}from"./index-a48a5540.js";import{__tla as Kt}from"./index-cf7b3541.js";import{__tla as Ot}from"./index-8beae3df.js";import{__tla as Wt}from"./el-image-015376ce.js";import"./tree-02f455f9.js";import{__tla as Qt}from"./category-7944548c.js";import{__tla as $t}from"./SkuList-64f06f71.js";import{__tla as ta}from"./dict-4a9940b3.js";import{__tla as aa}from"./DictTag-4f08045a.js";import"./color-f5b6e279.js";let U,ea=Promise.all([(()=>{try{return st}catch{}})(),(()=>{try{return ct}catch{}})(),(()=>{try{return mt}catch{}})(),(()=>{try{return nt}catch{}})(),(()=>{try{return ft}catch{}})(),(()=>{try{return dt}catch{}})(),(()=>{try{return yt}catch{}})(),(()=>{try{return vt}catch{}})(),(()=>{try{return bt}catch{}})(),(()=>{try{return Ct}catch{}})(),(()=>{try{return It}catch{}})(),(()=>{try{return Vt}catch{}})(),(()=>{try{return Yt}catch{}})(),(()=>{try{return xt}catch{}})(),(()=>{try{return Mt}catch{}})(),(()=>{try{return At}catch{}})(),(()=>{try{return Lt}catch{}})(),(()=>{try{return Ut}catch{}})(),(()=>{try{return Et}catch{}})(),(()=>{try{return Nt}catch{}})(),(()=>{try{return Rt}catch{}})(),(()=>{try{return Tt}catch{}})(),(()=>{try{return jt}catch{}})(),(()=>{try{return Gt}catch{}})(),(()=>{try{return Ht}catch{}})(),(()=>{try{return Jt}catch{}})(),(()=>{try{return Xt}catch{}})(),(()=>{try{return Zt}catch{}})(),(()=>{try{return qt}catch{}})(),(()=>{try{return zt}catch{}})(),(()=>{try{return Bt}catch{}})(),(()=>{try{return Kt}catch{}})(),(()=>{try{return Ot}catch{}})(),(()=>{try{return Wt}catch{}})(),(()=>{try{return Qt}catch{}})(),(()=>{try{return $t}catch{}})(),(()=>{try{return ta}catch{}})(),(()=>{try{return aa}catch{}})()]).then(async()=>{let P,C,S;P=M({spuId:[m],name:[m],startTime:[m],endTime:[m],sort:[m],configIds:[m],totalLimitCount:[m],singleLimitCount:[m],totalStock:[m]}),C=M([{label:"\u79D2\u6740\u6D3B\u52A8\u540D\u79F0",field:"name",isSearch:!0,form:{colProps:{span:24}},table:{width:120}},{label:"\u6D3B\u52A8\u5F00\u59CB\u65F6\u95F4",field:"startTime",formatter:L,isSearch:!0,search:{component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD",type:"daterange"}},form:{component:"DatePicker",componentProps:{type:"date",valueFormat:"x"}},table:{width:120}},{label:"\u6D3B\u52A8\u7ED3\u675F\u65F6\u95F4",field:"endTime",formatter:L,isSearch:!0,search:{component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD",type:"daterange"}},form:{component:"DatePicker",componentProps:{type:"date",valueFormat:"x"}},table:{width:120}},{label:"\u79D2\u6740\u65F6\u6BB5",field:"configIds",form:{component:"Select",componentProps:{multiple:!0,optionsAlias:{labelField:"name",valueField:"id"}},api:ht},table:{width:300}},{label:"\u603B\u9650\u8D2D\u6570\u91CF",field:"totalLimitCount",form:{component:"InputNumber",value:0},table:{width:120}},{label:"\u5355\u6B21\u9650\u591F\u6570\u91CF",field:"singleLimitCount",form:{component:"InputNumber",value:0},table:{width:120}},{label:"\u6392\u5E8F",field:"sort",form:{component:"InputNumber",value:0},table:{width:80}},{label:"\u79D2\u6740\u6D3B\u52A8\u5546\u54C1",field:"spuId",isTable:!0,isSearch:!1,form:{colProps:{span:24}},table:{width:300}},{label:"\u5907\u6CE8",field:"remark",isSearch:!1,form:{component:"Input",componentProps:{type:"textarea",rows:4},colProps:{span:24}},table:{width:300}}]),{allSchemas:S}=kt(C),U=ot(X({name:"PromotionSeckillActivityForm",__name:"SeckillActivityForm",emits:["success"],setup(ra,{expose:E,emit:N}){const{t:b}=Z(),I=Dt(),f=c(!1),F=c(""),d=c(!1),V=c(""),u=c(),D=c(),Y=c(),R=[{name:"productConfig.stock",rule:a=>a>=1,message:"\u5546\u54C1\u79D2\u6740\u5E93\u5B58\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E 1 \uFF01\uFF01\uFF01"},{name:"productConfig.seckillPrice",rule:a=>a>=.01,message:"\u5546\u54C1\u79D2\u6740\u4EF7\u683C\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E 0.01 \uFF01\uFF01\uFF01"}],y=c([]),w=c([]),T=(a,t)=>{u.value.setValues({spuId:a}),x(a,t)},x=async(a,t,l)=>{var v;const s=[],n=await St([a]);if(n.length==0)return;y.value=[];const r=n[0],h=t===void 0?r==null?void 0:r.skus:(v=r==null?void 0:r.skus)==null?void 0:v.filter(e=>t.includes(e.id));h==null||h.forEach(e=>{let p={skuId:e.id,stock:0,seckillPrice:0};if(l!==void 0){const k=l.find(J=>J.skuId===e.id);k&&(k.seckillPrice=W(k.seckillPrice)),p=k||p}e.productConfig=p}),r.skus=h,s.push({spuId:r.id,spuDetail:r,propertyList:Ft(r)}),y.value.push(r),w.value=s};E({open:async(a,t)=>{var l;if(f.value=!0,F.value=b("action."+a),V.value=a,await H(),t){d.value=!0;try{const s=await wt(t);await x(s.spuId,(l=s.products)==null?void 0:l.map(n=>n.skuId),s.products),u.value.setValues(s)}finally{d.value=!1}}}});const j=N,G=async()=>{if(u&&await u.value.getElFormRef().validate()){d.value=!0;try{const a=Q(Y.value.getSkuConfigs("productConfig"));a.forEach(l=>{l.seckillPrice=$(l.seckillPrice)});const t=u.value.formModel;t.products=a,V.value==="create"?(await gt(t),I.success(b("common.createSuccess"))):(await Pt(t),I.success(b("common.updateSuccess"))),f.value=!1,j("success")}finally{d.value=!1}}},H=async()=>{y.value=[],w.value=[],await tt(),u.value.getElFormRef().resetFields()};return(a,t)=>{const l=at,s=et,n=rt,r=it,h=_t,v=lt;return A(),q(O,null,[_(h,{modelValue:o(f),"onUpdate:modelValue":t[2]||(t[2]=e=>K(f)?f.value=e:null),title:o(F),width:"65%"},{footer:i(()=>[_(l,{disabled:o(d),type:"primary",onClick:G},{default:i(()=>[g("\u786E \u5B9A")]),_:1},8,["disabled"]),_(l,{onClick:t[1]||(t[1]=e=>f.value=!1)},{default:i(()=>[g("\u53D6 \u6D88")]),_:1})]),default:i(()=>[z((A(),B(r,{ref_key:"formRef",ref:u,isCol:!0,rules:o(P),schema:o(S).formSchema},{spuId:i(()=>[_(l,{onClick:t[0]||(t[0]=e=>o(D).open())},{default:i(()=>[g("\u9009\u62E9\u5546\u54C1")]),_:1}),_(o(pt),{ref_key:"spuAndSkuListRef",ref:Y,"rule-config":R,"spu-list":o(y),"spu-property-list-p":o(w)},{default:i(()=>[_(n,{align:"center",label:"\u79D2\u6740\u5E93\u5B58","min-width":"168"},{default:i(({row:e})=>[_(s,{modelValue:e.productConfig.stock,"onUpdate:modelValue":p=>e.productConfig.stock=p,min:0,class:"w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),_(n,{align:"center",label:"\u79D2\u6740\u4EF7\u683C(\u5143)","min-width":"168"},{default:i(({row:e})=>[_(s,{modelValue:e.productConfig.seckillPrice,"onUpdate:modelValue":p=>e.productConfig.seckillPrice=p,min:0,precision:2,step:.1,class:"w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["spu-list","spu-property-list-p"])]),_:1},8,["rules","schema"])),[[v,o(d)]])]),_:1},8,["modelValue","title"]),_(o(ut),{ref_key:"spuSelectRef",ref:D,isSelectSku:!0,onConfirm:T},null,512)],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mall/promotion/seckill/activity/SeckillActivityForm.vue"]])});export{ea as __tla,U as default};
