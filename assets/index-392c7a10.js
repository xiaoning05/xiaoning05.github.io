import{d as G,u as M,D as X,r as s,p as Y,w as Z,a,o as R,q as S,e as i,b as l,j as d,h as E,a0 as z,k as H,ap as h,aq as k,ar as J,as as P,l as K,m as L,B as O,y as Q,C as W,v as $,_ as aa,__tla as ta}from"./index-b079f499.js";import{_ as ra,__tla as ea}from"./ContentWrap-0fab5b86.js";import{u as _a,__tla as la}from"./tagsView-9d72ce86.js";import{g as oa,c as ca,u as ia,__tla as sa}from"./spu-b2e776cb.js";import ma,{__tla as ua}from"./InfoForm-70252e60.js";import na,{__tla as pa}from"./DescriptionForm-e30be5d6.js";import fa,{__tla as da}from"./OtherForm-21a4e378.js";import ya,{__tla as va}from"./SkuForm-36c603de.js";import ha,{__tla as ka}from"./DeliveryForm-054c3d2d.js";import{u as Pa,__tla as ga}from"./useMessage-66b9cf03.js";import{__tla as Ba}from"./index-3be78f60.js";import{__tla as Na}from"./UploadImgs-2af287de.js";import{__tla as wa}from"./UploadImgs.vue_vue_type_style_index_0_scoped_9d666400_lang-62ab8f5e.js";import{__tla as Da}from"./el-image-viewer-3e8b0085.js";import{__tla as Ua}from"./useUpload-ca092158.js";import{__tla as Fa}from"./index-4c44a910.js";import{__tla as ba}from"./UploadImg-0fb33d7e.js";import{__tla as Ca}from"./index-1bcef585.js";import"./tree-02f455f9.js";import{__tla as Ia}from"./category-ffa87404.js";import{__tla as Ra}from"./brand-748bcd81.js";import{__tla as Sa}from"./formRules-ddc6648c.js";import{__tla as Ea}from"./Editor-519724cd.js";import{__tla as Ta}from"./index-b89d4365.js";import{__tla as Va}from"./SkuList-e3781fdf.js";import{__tla as xa}from"./el-image-8a70494f.js";import{__tla as ja}from"./UploadFile.vue_vue_type_style_index_0_scoped_436eca1b_lang-ccf69cde.js";import{__tla as qa}from"./ProductAttributes-46361923.js";import{__tla as Aa}from"./el-text-e19e4a45.js";import{__tla as Ga}from"./property-2c6d78a0.js";import{__tla as Ma}from"./ProductPropertyAddForm-fe7fdd48.js";import{__tla as Xa}from"./Dialog-07bcd661.js";import{__tla as Ya}from"./index-230575dc.js";import{__tla as Za}from"./dict-2c56908b.js";import"./constants-99751ef9.js";let T,za=Promise.all([(()=>{try{return ta}catch{}})(),(()=>{try{return ea}catch{}})(),(()=>{try{return la}catch{}})(),(()=>{try{return sa}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return pa}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return va}catch{}})(),(()=>{try{return ka}catch{}})(),(()=>{try{return ga}catch{}})(),(()=>{try{return Ba}catch{}})(),(()=>{try{return Na}catch{}})(),(()=>{try{return wa}catch{}})(),(()=>{try{return Da}catch{}})(),(()=>{try{return Ua}catch{}})(),(()=>{try{return Fa}catch{}})(),(()=>{try{return ba}catch{}})(),(()=>{try{return Ca}catch{}})(),(()=>{try{return Ia}catch{}})(),(()=>{try{return Ra}catch{}})(),(()=>{try{return Sa}catch{}})(),(()=>{try{return Ea}catch{}})(),(()=>{try{return Ta}catch{}})(),(()=>{try{return Va}catch{}})(),(()=>{try{return xa}catch{}})(),(()=>{try{return ja}catch{}})(),(()=>{try{return qa}catch{}})(),(()=>{try{return Aa}catch{}})(),(()=>{try{return Ga}catch{}})(),(()=>{try{return Ma}catch{}})(),(()=>{try{return Xa}catch{}})(),(()=>{try{return Ya}catch{}})(),(()=>{try{return Za}catch{}})()]).then(async()=>{T=aa(G({name:"ProductSpuForm",__name:"index",setup(Ha){const{t:B}=H(),N=Pa(),{push:V,currentRoute:x}=M(),{params:w,name:j}=X(),{delView:q}=_a(),p=s(!1),r=s("info"),m=s(!1),D=s(),U=s(),F=s(),b=s(),C=s(),u=s({name:"",categoryId:void 0,keyword:"",picUrl:"",sliderPicUrls:[],introduction:"",deliveryTypes:[],deliveryTemplateId:void 0,brandId:void 0,specType:!1,subCommissionType:!1,skus:[{price:0,marketPrice:0,costPrice:0,barCode:"",picUrl:"",stock:0,weight:0,volume:0,firstBrokeragePrice:0,secondBrokeragePrice:0}],description:"",sort:0,giveIntegral:0,virtualSalesCount:0}),A=async()=>{var f,e,o,t,y;p.value=!0;try{await((f=a(D))==null?void 0:f.validate()),await((e=a(U))==null?void 0:e.validate()),await((o=a(F))==null?void 0:o.validate()),await((t=a(b))==null?void 0:t.validate()),await((y=a(C))==null?void 0:y.validate());const n=J(a(u.value));n.skus.forEach(_=>{_.name=n.name,_.price=P(_.price),_.marketPrice=P(_.marketPrice),_.costPrice=P(_.costPrice),_.firstBrokeragePrice=P(_.firstBrokeragePrice),_.secondBrokeragePrice=P(_.secondBrokeragePrice)});const v=[];n.sliderPicUrls.forEach(_=>{typeof _=="object"?v.push(_.url):v.push(_)}),n.sliderPicUrls=v;const g=n;w.id?(await ia(g),N.success(B("common.updateSuccess"))):(await ca(g),N.success(B("common.createSuccess"))),I()}finally{p.value=!1}},I=()=>{q(a(x)),V({name:"ProductSpu"})};return Y(async()=>{await(async()=>{var e;j==="ProductSpuDetail"&&(m.value=!0);const f=w.id;if(f){p.value=!0;try{const o=await oa(f);(e=o.skus)==null||e.forEach(t=>{m.value?(t.price=h(t.price),t.marketPrice=h(t.marketPrice),t.costPrice=h(t.costPrice),t.firstBrokeragePrice=h(t.firstBrokeragePrice),t.secondBrokeragePrice=h(t.secondBrokeragePrice)):(t.price=k(t.price),t.marketPrice=k(t.marketPrice),t.costPrice=k(t.costPrice),t.firstBrokeragePrice=k(t.firstBrokeragePrice),t.secondBrokeragePrice=k(t.secondBrokeragePrice))}),u.value=o}finally{p.value=!1}}})()}),(f,e)=>{const o=K,t=L,y=O,n=Q,v=W,g=ra,_=$;return Z((R(),S(g,null,{default:i(()=>[l(t,{modelValue:a(r),"onUpdate:modelValue":e[5]||(e[5]=c=>d(r)?r.value=c:null)},{default:i(()=>[l(o,{label:"\u57FA\u7840\u8BBE\u7F6E",name:"info"},{default:i(()=>[l(ma,{ref_key:"infoRef",ref:D,activeName:a(r),"onUpdate:activeName":e[0]||(e[0]=c=>d(r)?r.value=c:null),"is-detail":a(m),propFormData:a(u)},null,8,["activeName","is-detail","propFormData"])]),_:1}),l(o,{label:"\u4EF7\u683C\u5E93\u5B58",name:"sku"},{default:i(()=>[l(ya,{ref_key:"skuRef",ref:U,activeName:a(r),"onUpdate:activeName":e[1]||(e[1]=c=>d(r)?r.value=c:null),"is-detail":a(m),propFormData:a(u)},null,8,["activeName","is-detail","propFormData"])]),_:1}),l(o,{label:"\u7269\u6D41\u8BBE\u7F6E",name:"delivery"},{default:i(()=>[l(ha,{ref_key:"deliveryRef",ref:F,activeName:a(r),"onUpdate:activeName":e[2]||(e[2]=c=>d(r)?r.value=c:null),"is-detail":a(m),propFormData:a(u)},null,8,["activeName","is-detail","propFormData"])]),_:1}),l(o,{label:"\u5546\u54C1\u8BE6\u60C5",name:"description"},{default:i(()=>[l(na,{ref_key:"descriptionRef",ref:b,activeName:a(r),"onUpdate:activeName":e[3]||(e[3]=c=>d(r)?r.value=c:null),"is-detail":a(m),propFormData:a(u)},null,8,["activeName","is-detail","propFormData"])]),_:1}),l(o,{label:"\u5176\u5B83\u8BBE\u7F6E",name:"other"},{default:i(()=>[l(fa,{ref_key:"otherRef",ref:C,activeName:a(r),"onUpdate:activeName":e[4]||(e[4]=c=>d(r)?r.value=c:null),"is-detail":a(m),propFormData:a(u)},null,8,["activeName","is-detail","propFormData"])]),_:1})]),_:1},8,["modelValue"]),l(v,null,{default:i(()=>[l(n,{style:{float:"right"}},{default:i(()=>[a(m)?z("",!0):(R(),S(y,{key:0,loading:a(p),type:"primary",onClick:A},{default:i(()=>[E(" \u4FDD\u5B58 ")]),_:1},8,["loading"])),l(y,{onClick:I},{default:i(()=>[E("\u8FD4\u56DE")]),_:1})]),_:1})]),_:1})]),_:1})),[[_,a(p)]])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mall/product/spu/form/index.vue"]])});export{za as __tla,T as default};
