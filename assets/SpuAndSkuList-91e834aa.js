import{d as x,r as _,aR as h,o as L,q as S,e as l,b as a,a as s,aI as b,h as A,t as C,aq as I,E as P,i as q,_ as E,__tla as D}from"./index-b079f499.js";import{E as U,__tla as R}from"./el-image-8a70494f.js";import{__tla as z}from"./el-image-viewer-3e8b0085.js";import{c as G,__tla as M}from"./index-1bcef585.js";import N,{__tla as T}from"./SkuList-e3781fdf.js";import{__tla as X}from"./UploadImg-0fb33d7e.js";import{__tla as Y}from"./useUpload-ca092158.js";import{__tla as Z}from"./index-4c44a910.js";import{__tla as $}from"./useMessage-66b9cf03.js";import{__tla as j}from"./UploadImgs.vue_vue_type_style_index_0_scoped_9d666400_lang-62ab8f5e.js";import{__tla as B}from"./UploadFile.vue_vue_type_style_index_0_scoped_436eca1b_lang-ccf69cde.js";let w,F=Promise.all([(()=>{try{return D}catch{}})(),(()=>{try{return R}catch{}})(),(()=>{try{return z}catch{}})(),(()=>{try{return M}catch{}})(),(()=>{try{return T}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return Y}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return j}catch{}})(),(()=>{try{return B}catch{}})()]).then(async()=>{w=E(x({name:"PromotionSpuAndSkuList",__name:"SpuAndSkuList",props:{spuList:{type:Array,required:!0},ruleConfig:{type:Array,required:!0},spuPropertyListP:{type:Array,required:!0}},setup(k,{expose:g}){const d=k,m=_([]),f=_(),p=_([]),y=_();return g({getSkuConfigs:t=>{f.value.validateSku();const i=[];return p.value.forEach(r=>{r.spuDetail.skus.forEach(n=>{i.push(n[t])})}),i}}),h(()=>d.spuList,t=>{t&&(m.value=t)},{deep:!0,immediate:!0}),h(()=>d.spuPropertyListP,t=>{t&&(p.value=t,setTimeout(()=>{y.value=t.map(i=>i.spuId)},200))},{deep:!0,immediate:!0}),(t,i)=>{const r=P,n=U,v=q;return L(),S(v,{data:s(m),"expand-row-keys":s(y),"row-key":"id"},{default:l(()=>[a(r,{type:"expand",width:"30"},{default:l(({row:e})=>{var u,o;return[a(s(N),{ref_key:"skuListRef",ref:f,"is-activity-component":!0,"prop-form-data":(u=s(p).find(c=>c.spuId===e.id))==null?void 0:u.spuDetail,"property-list":(o=s(p).find(c=>c.spuId===e.id))==null?void 0:o.propertyList,"rule-config":t.ruleConfig},{extension:l(()=>[b(t.$slots,"default")]),_:2},1032,["prop-form-data","property-list","rule-config"])]}),_:3}),a(r,{key:"id",align:"center",label:"\u5546\u54C1\u7F16\u53F7",prop:"id"}),a(r,{label:"\u5546\u54C1\u56FE","min-width":"80"},{default:l(({row:e})=>[a(n,{src:e.picUrl,class:"h-30px w-30px",onClick:u=>{return o=e.picUrl,void G({zIndex:99999999,urlList:[o]});var o}},null,8,["src","onClick"])]),_:1}),a(r,{"show-overflow-tooltip":!0,label:"\u5546\u54C1\u540D\u79F0","min-width":"300",prop:"name"}),a(r,{align:"center",label:"\u5546\u54C1\u552E\u4EF7","min-width":"90",prop:"price"},{default:l(({row:e})=>[A(C(s(I)(e.price)),1)]),_:1}),a(r,{align:"center",label:"\u9500\u91CF","min-width":"90",prop:"salesCount"}),a(r,{align:"center",label:"\u5E93\u5B58","min-width":"90",prop:"stock"})]),_:3},8,["data","expand-row-keys"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mall/promotion/components/SpuAndSkuList.vue"]])});export{F as __tla,w as default};
