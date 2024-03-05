import{d as M,r as b,e as Q,aT as $,e2 as k,p as R,o as _,c as C,x as T,a as c,v,w as l,f as e,F as I,q as X,e3 as N,d$ as V,h as q,a5 as Y,e0 as Z,H as K,y as W,z as ee,A as ae,Q as le,c0 as te,D as oe,I as de,G as re,k as ue,J as ie,_ as ce,__tla as ne}from"./index-f0743f71.js";import{P as se,__tla as pe}from"./index-45617213.js";import{S as me,__tla as fe}from"./index-cf2468e1.js";let B,_e=Promise.all([(()=>{try{return ne}catch{}})(),(()=>{try{return pe}catch{}})(),(()=>{try{return fe}catch{}})()]).then(async()=>{B=ce(M({__name:"SaleOrderItemForm",props:{items:{type:null,required:!0},disabled:{type:Boolean,required:!0}},setup(S,{expose:j}){const E=S,F=b(!1),s=b([]),h=Q({productId:[{required:!0,message:"\u4EA7\u54C1\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],count:[{required:!0,message:"\u4EA7\u54C1\u6570\u91CF\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),U=b([]),w=b([]);$(()=>E.items,async i=>{s.value=i},{immediate:!0}),$(()=>s.value,i=>{i&&i.length!==0&&i.forEach(r=>{r.totalProductPrice=k(r.productPrice,r.count),r.taxPrice=k(r.totalProductPrice,r.taxPercent/100),r.totalProductPrice!=null?r.totalPrice=r.totalProductPrice+(r.taxPrice||0):r.totalPrice=void 0})},{deep:!0});const A=i=>{const{columns:r,data:u}=i,p=[];return r.forEach((m,d)=>{if(d!==0)if(["count","totalProductPrice","taxPrice","totalPrice"].includes(m.property)){const n=Z(u.map(f=>Number(f[m.property])));p[d]=m.property==="count"?N(n):V(n)}else p[d]="";else p[d]="\u5408\u8BA1"}),p},g=()=>{s.value.push({id:void 0,productId:void 0,productUnitName:void 0,productBarCode:void 0,productPrice:void 0,stockCount:void 0,count:1,totalProductPrice:void 0,taxPercent:void 0,taxPrice:void 0,totalPrice:void 0,remark:void 0})},D=async i=>{if(!i.productId)return;const r=await me.getStockCount(i.productId);i.stockCount=r||0};return j({validate:()=>U.value.validate()}),R(async()=>{w.value=await se.getProductSimpleList(),s.value.length===0&&g()}),(i,r)=>{const u=K,p=W,m=ee,d=ae,n=le,f=te,y=oe,G=de,O=re,z=ue,H=ie;return _(),C(I,null,[T((_(),v(O,{ref_key:"formRef",ref:U,model:c(s),rules:c(h),"label-width":"0px","inline-message":!0,disabled:i.disabled},{default:l(()=>[e(G,{data:c(s),"show-summary":"","summary-method":A,class:"-mt-10px"},{default:l(()=>[e(u,{label:"\u5E8F\u53F7",type:"index",align:"center",width:"60"}),e(u,{label:"\u4EA7\u54C1\u540D\u79F0","min-width":"180"},{default:l(({row:a,$index:o})=>[e(d,{prop:`${o}.productId`,rules:c(h).productId,class:"mb-0px!"},{default:l(()=>[e(m,{modelValue:a.productId,"onUpdate:modelValue":t=>a.productId=t,clearable:"",filterable:"",onChange:t=>((J,P)=>{const x=w.value.find(L=>L.id===J);x&&(P.productUnitName=x.unitName,P.productBarCode=x.barCode,P.productPrice=x.salePrice),D(P)})(t,a),placeholder:"\u8BF7\u9009\u62E9\u4EA7\u54C1"},{default:l(()=>[(_(!0),C(I,null,X(c(w),t=>(_(),v(p,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1032,["prop","rules"])]),_:1}),e(u,{label:"\u5E93\u5B58","min-width":"100"},{default:l(({row:a})=>[e(d,{class:"mb-0px!"},{default:l(()=>[e(n,{disabled:"",modelValue:a.stockCount,"onUpdate:modelValue":o=>a.stockCount=o,formatter:c(N)},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1024)]),_:1}),e(u,{label:"\u6761\u7801","min-width":"150"},{default:l(({row:a})=>[e(d,{class:"mb-0px!"},{default:l(()=>[e(n,{disabled:"",modelValue:a.productBarCode,"onUpdate:modelValue":o=>a.productBarCode=o},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1}),e(u,{label:"\u5355\u4F4D","min-width":"80"},{default:l(({row:a})=>[e(d,{class:"mb-0px!"},{default:l(()=>[e(n,{disabled:"",modelValue:a.productUnitName,"onUpdate:modelValue":o=>a.productUnitName=o},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1}),e(u,{label:"\u6570\u91CF",prop:"count",fixed:"right","min-width":"140"},{default:l(({row:a,$index:o})=>[e(d,{prop:`${o}.count`,rules:c(h).count,class:"mb-0px!"},{default:l(()=>[e(f,{modelValue:a.count,"onUpdate:modelValue":t=>a.count=t,"controls-position":"right",min:.001,precision:3,class:"!w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])]),_:1}),e(u,{label:"\u4EA7\u54C1\u5355\u4EF7",fixed:"right","min-width":"120"},{default:l(({row:a,$index:o})=>[e(d,{prop:`${o}.productPrice`,class:"mb-0px!"},{default:l(()=>[e(f,{modelValue:a.productPrice,"onUpdate:modelValue":t=>a.productPrice=t,"controls-position":"right",min:.01,precision:2,class:"!w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:1}),e(u,{label:"\u91D1\u989D",prop:"totalProductPrice",fixed:"right","min-width":"100"},{default:l(({row:a,$index:o})=>[e(d,{prop:`${o}.totalProductPrice`,class:"mb-0px!"},{default:l(()=>[e(n,{disabled:"",modelValue:a.totalProductPrice,"onUpdate:modelValue":t=>a.totalProductPrice=t,formatter:c(V)},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1032,["prop"])]),_:1}),e(u,{label:"\u7A0E\u7387\uFF08%\uFF09",fixed:"right","min-width":"115"},{default:l(({row:a,$index:o})=>[e(d,{prop:`${o}.taxPercent`,class:"mb-0px!"},{default:l(()=>[e(f,{modelValue:a.taxPercent,"onUpdate:modelValue":t=>a.taxPercent=t,"controls-position":"right",min:0,precision:2,class:"!w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:1}),e(u,{label:"\u7A0E\u989D",prop:"taxPrice",fixed:"right","min-width":"120"},{default:l(({row:a,$index:o})=>[e(d,{prop:`${o}.taxPrice`,class:"mb-0px!"},{default:l(()=>[e(d,{prop:`${o}.taxPrice`,class:"mb-0px!"},{default:l(()=>[e(n,{disabled:"",modelValue:a.taxPrice,"onUpdate:modelValue":t=>a.taxPrice=t,formatter:c(V)},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1032,["prop"])]),_:2},1032,["prop"])]),_:1}),e(u,{label:"\u7A0E\u989D\u5408\u8BA1",prop:"totalPrice",fixed:"right","min-width":"100"},{default:l(({row:a,$index:o})=>[e(d,{prop:`${o}.totalPrice`,class:"mb-0px!"},{default:l(()=>[e(n,{disabled:"",modelValue:a.totalPrice,"onUpdate:modelValue":t=>a.totalPrice=t,formatter:c(V)},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1032,["prop"])]),_:1}),e(u,{label:"\u5907\u6CE8","min-width":"150"},{default:l(({row:a,$index:o})=>[e(d,{prop:`${o}.remark`,class:"mb-0px!"},{default:l(()=>[e(n,{modelValue:a.remark,"onUpdate:modelValue":t=>a.remark=t,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:1}),e(u,{align:"center",fixed:"right",label:"\u64CD\u4F5C",width:"60"},{default:l(({$index:a})=>[e(y,{onClick:o=>{return t=a,void s.value.splice(t,1);var t},link:""},{default:l(()=>[q("\u2014")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1},8,["model","rules","disabled"])),[[H,c(F)]]),i.disabled?Y("",!0):(_(),v(z,{key:0,justify:"center",class:"mt-3"},{default:l(()=>[e(y,{onClick:g,round:""},{default:l(()=>[q("+ \u6DFB\u52A0\u91C7\u8D2D\u4EA7\u54C1")]),_:1})]),_:1}))],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/erp/sale/order/components/SaleOrderItemForm.vue"]])});export{_e as __tla,B as default};