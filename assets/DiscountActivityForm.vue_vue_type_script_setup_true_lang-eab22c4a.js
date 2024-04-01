import{n as E,an as v,d as J,k as K,r as c,o as M,c as W,b as i,e as u,a as r,h as b,w as X,q as Z,j as $,F as tt,aq as at,ak as et,A as ot,bU as st,E as rt,v as lt,__tla as it}from"./index-34f06ebd.js";import{_ as ct,__tla as ut}from"./Dialog.vue_vue_type_style_index_0_lang-08560286.js";import{_ as nt,__tla as dt}from"./Form-980450b6.js";import{_ as pt,__tla as mt}from"./SpuSelect.vue_vue_type_script_setup_true_lang-940096c8.js";import{_ as _t,__tla as ft}from"./SpuAndSkuList.vue_vue_type_script_setup_true_lang-b594eae0.js";import{b as R,__tla as yt}from"./formatTime-ed0a77fd.js";import{r as h,__tla as vt}from"./formRules-ecd4de8b.js";import{D as ht,__tla as wt}from"./dict-e142e39a.js";import{u as gt,__tla as kt}from"./useCrudSchemas-8bd8b360.js";import{b as Pt,__tla as bt}from"./spu-7528f5a7.js";import{g as St,__tla as Ct}from"./index-04c10e0e.js";import{u as Tt,__tla as Dt}from"./useMessage-7a5ab7ef.js";let x,A,O,j,It=Promise.all([(()=>{try{return it}catch{}})(),(()=>{try{return ut}catch{}})(),(()=>{try{return dt}catch{}})(),(()=>{try{return mt}catch{}})(),(()=>{try{return ft}catch{}})(),(()=>{try{return yt}catch{}})(),(()=>{try{return vt}catch{}})(),(()=>{try{return wt}catch{}})(),(()=>{try{return kt}catch{}})(),(()=>{try{return bt}catch{}})(),(()=>{try{return Ct}catch{}})(),(()=>{try{return Dt}catch{}})()]).then(async()=>{let S,C,T;S=E({spuId:[h],name:[h],startTime:[h],endTime:[h],discountType:[h]}),C=E([{label:"\u6D3B\u52A8\u540D\u79F0",field:"name",isSearch:!0,form:{colProps:{span:24}},table:{width:120}},{label:"\u6D3B\u52A8\u5F00\u59CB\u65F6\u95F4",field:"startTime",formatter:R,isSearch:!0,search:{component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD",type:"daterange"}},form:{component:"DatePicker",componentProps:{type:"date",valueFormat:"x"}},table:{width:120}},{label:"\u6D3B\u52A8\u7ED3\u675F\u65F6\u95F4",field:"endTime",formatter:R,isSearch:!0,search:{component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD",type:"daterange"}},form:{component:"DatePicker",componentProps:{type:"date",valueFormat:"x"}},table:{width:120}},{label:"\u4F18\u60E0\u7C7B\u578B",field:"discountType",dictType:ht.PROMOTION_DISCOUNT_TYPE,dictClass:"number",isSearch:!0,form:{component:"Radio",value:1}},{label:"\u6D3B\u52A8\u5546\u54C1",field:"spuId",isTable:!0,isSearch:!1,form:{colProps:{span:24}},table:{width:300}},{label:"\u5907\u6CE8",field:"remark",isSearch:!1,form:{component:"Input",componentProps:{type:"textarea",rows:4},colProps:{span:24}},table:{width:300}}]),{allSchemas:T}=gt(C),j=async m=>await v.get({url:"/promotion/discount-activity/page",params:m}),A=async m=>await v.put({url:"/promotion/discount-activity/close?id="+m}),O=async m=>await v.delete({url:"/promotion/discount-activity/delete?id="+m}),x=J({name:"PromotionDiscountActivityForm",__name:"DiscountActivityForm",emits:["success"],setup(m,{expose:q,emit:L}){const{t:k}=K(),D=Tt(),_=c(!1),I=c(""),f=c(!1),V=c(""),n=c(),F=c(),Y=c(),N=[],w=c([]),P=c([]),z=(s,a)=>{n.value.setValues({spuId:s}),U(s,a)},U=async(s,a,e)=>{var g;const l=[],d=await Pt([s]);if(d.length==0)return;w.value=[];const t=d[0],y=a===void 0?t==null?void 0:t.skus:(g=t==null?void 0:t.skus)==null?void 0:g.filter(o=>a.includes(o.id));y==null||y.forEach(o=>{let p={skuId:o.id,spuId:t.id,discountType:1,discountPercent:0,discountPrice:0};e!==void 0&&(p=e.find(Q=>Q.skuId===o.id)||p),o.productConfig=p}),t.skus=y,l.push({spuId:t.id,spuDetail:t,propertyList:St(t)}),w.value.push(t),P.value=l};q({open:async(s,a)=>{var e;if(_.value=!0,I.value=k("action."+s),V.value=s,await H(),a){f.value=!0;try{const l=await(async t=>await v.get({url:"/promotion/discount-activity/get?id="+t}))(a),d=l.products[0].spuId;await U(d,(e=l.products)==null?void 0:e.map(t=>t.skuId),l.products),n.value.setValues(l)}finally{f.value=!1}}}});const B=L,G=async()=>{if(n&&await n.value.getElFormRef().validate()){f.value=!0;try{const s=n.value.formModel,a=at(Y.value.getSkuConfigs("productConfig"));a.forEach(e=>{e.discountType=s.discountType}),s.products=a,V.value==="create"?(await(async e=>await v.post({url:"/promotion/discount-activity/create",data:e}))(s),D.success(k("common.createSuccess"))):(await(async e=>await v.put({url:"/promotion/discount-activity/update",data:e}))(s),D.success(k("common.updateSuccess"))),_.value=!1,B("success")}finally{f.value=!1}}},H=async()=>{w.value=[],P.value=[],await et(),n.value.getElFormRef().resetFields()};return(s,a)=>{const e=ot,l=st,d=rt,t=nt,y=ct,g=lt;return M(),W(tt,null,[i(y,{modelValue:r(_),"onUpdate:modelValue":a[2]||(a[2]=o=>$(_)?_.value=o:null),title:r(I),width:"65%"},{footer:u(()=>[i(e,{disabled:r(f),type:"primary",onClick:G},{default:u(()=>[b("\u786E \u5B9A")]),_:1},8,["disabled"]),i(e,{onClick:a[1]||(a[1]=o=>_.value=!1)},{default:u(()=>[b("\u53D6 \u6D88")]),_:1})]),default:u(()=>[X((M(),Z(t,{ref_key:"formRef",ref:n,isCol:!0,rules:r(S),schema:r(T).formSchema},{spuId:u(()=>[i(e,{onClick:a[0]||(a[0]=o=>r(F).open())},{default:u(()=>[b("\u9009\u62E9\u5546\u54C1")]),_:1}),i(r(_t),{ref_key:"spuAndSkuListRef",ref:Y,"rule-config":N,"spu-list":r(w),"spu-property-list-p":r(P)},{default:u(()=>[i(d,{align:"center",label:"\u4F18\u60E0\u91D1\u989D","min-width":"168"},{default:u(({row:o})=>[i(l,{modelValue:o.productConfig.discountPrice,"onUpdate:modelValue":p=>o.productConfig.discountPrice=p,min:0,class:"w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),i(d,{align:"center",label:"\u6298\u6263\u767E\u5206\u6BD4(%)","min-width":"168"},{default:u(({row:o})=>[i(l,{modelValue:o.productConfig.discountPercent,"onUpdate:modelValue":p=>o.productConfig.discountPercent=p,class:"w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["spu-list","spu-property-list-p"])]),_:1},8,["rules","schema"])),[[g,r(f)]])]),_:1},8,["modelValue","title"]),i(r(pt),{ref_key:"spuSelectRef",ref:F,isSelectSku:!0,onConfirm:z},null,512)],64)}}})});export{x as _,It as __tla,A as c,O as d,j as g};