import{d as J,r as h,e as K,aS as q,e0 as O,p as Q,o as n,c as x,x as T,a as s,v as V,w as o,f as e,F as I,q as y,e1 as N,dZ as B,h as j,a4 as X,d_ as Y,G as ee,y as ae,z as le,A as oe,P as te,bZ as de,C as re,H as ue,D as se,k as ie,I as ne,__tla as me}from"./index-d2088aec.js";import{P as pe,__tla as ce}from"./index-19a1d262.js";import{W as fe,__tla as _e}from"./index-b5811f46.js";import{S as he,__tla as be}from"./index-43a89d89.js";let D,Ve=Promise.all([(()=>{try{return me}catch{}})(),(()=>{try{return ce}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return be}catch{}})()]).then(async()=>{D=J({__name:"StockMoveItemForm",props:{items:{},disabled:{type:Boolean}},setup(E,{expose:F}){const L=E,Z=h(!1),c=h([]),b=K({inId:[{required:!0,message:"\u8C03\u5EA6\u7F16\u53F7\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],fromWarehouseId:[{required:!0,message:"\u8C03\u51FA\u4ED3\u5E93\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],toWarehouseId:[{required:!0,message:"\u8C03\u5165\u4ED3\u5E93\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],productId:[{required:!0,message:"\u4EA7\u54C1\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],count:[{required:!0,message:"\u4EA7\u54C1\u6570\u91CF\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),k=h([]),U=h([]),v=h([]),P=h(void 0);q(()=>L.items,async t=>{c.value=t},{immediate:!0}),q(()=>c.value,t=>{t&&t.length!==0&&t.forEach(i=>{i.totalPrice=O(i.productPrice,i.count)})},{deep:!0});const z=t=>{const{columns:i,data:u}=t,m=[];return i.forEach((f,r)=>{if(r!==0)if(["count","totalPrice"].includes(f.property)){const p=Y(u.map(g=>Number(g[f.property])));m[r]=f.property==="count"?N(p):B(p)}else m[r]="";else m[r]="\u5408\u8BA1"}),m},C=()=>{var i;const t={id:void 0,fromWarehouseId:(i=P.value)==null?void 0:i.id,toWarehouseId:void 0,productId:void 0,productUnitName:void 0,productBarCode:void 0,productPrice:void 0,stockCount:void 0,count:1,totalPrice:void 0,remark:void 0};c.value.push(t)},W=async t=>{if(!t.productId||!t.fromWarehouseId)return;const i=await he.getStock2(t.productId,t.fromWarehouseId);t.stockCount=i?i.count:0};return F({validate:()=>k.value.validate()}),Q(async()=>{U.value=await pe.getProductSimpleList(),v.value=await fe.getWarehouseSimpleList(),P.value=v.value.find(t=>t.defaultStatus),c.value.length===0&&C()}),(t,i)=>{const u=ee,m=ae,f=le,r=oe,p=te,g=de,$=re,A=ue,G=se,H=ie,M=ne;return n(),x(I,null,[T((n(),V(G,{ref_key:"formRef",ref:k,model:s(c),rules:s(b),"label-width":"0px","inline-message":!0,disabled:t.disabled},{default:o(()=>[e(A,{data:s(c),"show-summary":"","summary-method":z,class:"-mt-10px"},{default:o(()=>[e(u,{label:"\u5E8F\u53F7",type:"index",align:"center",width:"60"}),e(u,{label:"\u8C03\u51FA\u4ED3\u5E93","min-width":"125"},{default:o(({row:a,$index:d})=>[e(r,{prop:`${d}.fromWarehouseId`,rules:s(b).fromWarehouseId,class:"mb-0px!"},{default:o(()=>[e(f,{modelValue:a.fromWarehouseId,"onUpdate:modelValue":l=>a.fromWarehouseId=l,clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u8C03\u51FA\u4ED3\u5E93",onChange:l=>((S,_)=>{W(_)})(0,a)},{default:o(()=>[(n(!0),x(I,null,y(s(v),l=>(n(),V(m,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1032,["prop","rules"])]),_:1}),e(u,{label:"\u8C03\u5165\u4ED3\u5E93","min-width":"125"},{default:o(({row:a,$index:d})=>[e(r,{prop:`${d}.toWarehouseId`,rules:s(b).toWarehouseId,class:"mb-0px!"},{default:o(()=>[e(f,{modelValue:a.toWarehouseId,"onUpdate:modelValue":l=>a.toWarehouseId=l,clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u8C03\u5165\u4ED3\u5E93"},{default:o(()=>[(n(!0),x(I,null,y(s(v),l=>(n(),V(m,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])]),_:1}),e(u,{label:"\u4EA7\u54C1\u540D\u79F0","min-width":"180"},{default:o(({row:a,$index:d})=>[e(r,{prop:`${d}.productId`,rules:s(b).productId,class:"mb-0px!"},{default:o(()=>[e(f,{modelValue:a.productId,"onUpdate:modelValue":l=>a.productId=l,clearable:"",filterable:"",onChange:l=>((S,_)=>{const w=U.value.find(R=>R.id===S);w&&(_.productUnitName=w.unitName,_.productBarCode=w.barCode,_.productPrice=w.minPrice),W(_)})(l,a),placeholder:"\u8BF7\u9009\u62E9\u4EA7\u54C1"},{default:o(()=>[(n(!0),x(I,null,y(s(U),l=>(n(),V(m,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1032,["prop","rules"])]),_:1}),e(u,{label:"\u5E93\u5B58","min-width":"100"},{default:o(({row:a})=>[e(r,{class:"mb-0px!"},{default:o(()=>[e(p,{disabled:"",modelValue:a.stockCount,"onUpdate:modelValue":d=>a.stockCount=d,formatter:s(N)},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1024)]),_:1}),e(u,{label:"\u6761\u7801","min-width":"150"},{default:o(({row:a})=>[e(r,{class:"mb-0px!"},{default:o(()=>[e(p,{disabled:"",modelValue:a.productBarCode,"onUpdate:modelValue":d=>a.productBarCode=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1}),e(u,{label:"\u5355\u4F4D","min-width":"80"},{default:o(({row:a})=>[e(r,{class:"mb-0px!"},{default:o(()=>[e(p,{disabled:"",modelValue:a.productUnitName,"onUpdate:modelValue":d=>a.productUnitName=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1}),e(u,{label:"\u6570\u91CF",prop:"count",fixed:"right","min-width":"140"},{default:o(({row:a,$index:d})=>[e(r,{prop:`${d}.count`,rules:s(b).count,class:"mb-0px!"},{default:o(()=>[e(g,{modelValue:a.count,"onUpdate:modelValue":l=>a.count=l,"controls-position":"right",min:.001,precision:3,class:"!w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])]),_:1}),e(u,{label:"\u4EA7\u54C1\u5355\u4EF7",fixed:"right","min-width":"120"},{default:o(({row:a,$index:d})=>[e(r,{prop:`${d}.productPrice`,class:"mb-0px!"},{default:o(()=>[e(g,{modelValue:a.productPrice,"onUpdate:modelValue":l=>a.productPrice=l,"controls-position":"right",min:.01,precision:2,class:"!w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:1}),e(u,{label:"\u5408\u8BA1\u91D1\u989D",prop:"totalPrice",fixed:"right","min-width":"100"},{default:o(({row:a,$index:d})=>[e(r,{prop:`${d}.totalPrice`,class:"mb-0px!"},{default:o(()=>[e(p,{disabled:"",modelValue:a.totalPrice,"onUpdate:modelValue":l=>a.totalPrice=l,formatter:s(B)},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1032,["prop"])]),_:1}),e(u,{label:"\u5907\u6CE8","min-width":"150"},{default:o(({row:a,$index:d})=>[e(r,{prop:`${d}.remark`,class:"mb-0px!"},{default:o(()=>[e(p,{modelValue:a.remark,"onUpdate:modelValue":l=>a.remark=l,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:1}),e(u,{align:"center",fixed:"right",label:"\u64CD\u4F5C",width:"60"},{default:o(({$index:a})=>[e($,{onClick:d=>{return l=a,void c.value.splice(l,1);var l},link:""},{default:o(()=>[j("\u2014")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1},8,["model","rules","disabled"])),[[M,s(Z)]]),t.disabled?X("",!0):(n(),V(H,{key:0,justify:"center",class:"mt-3"},{default:o(()=>[e($,{onClick:C,round:""},{default:o(()=>[j("+ \u6DFB\u52A0\u8C03\u5EA6\u4EA7\u54C1")]),_:1})]),_:1}))],64)}}})});export{D as _,Ve as __tla};
