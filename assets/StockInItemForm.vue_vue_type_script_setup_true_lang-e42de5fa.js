import{d as H,r as h,n as J,aQ as S,e0 as M,p as O,o as m,c as U,w as T,a as i,q as g,e as l,b as e,F as y,g as q,e1 as B,dZ as E,h as j,$ as X,d_ as Y,E as ee,s as ae,x as le,y as te,K as oe,bU as de,A as re,i as ue,B as se,aa as ie,v as ne,__tla as pe}from"./index-34f06ebd.js";import{P as ce,__tla as me}from"./index-84d2161b.js";import{W as fe,__tla as _e}from"./index-384def1a.js";import{S as he,__tla as be}from"./index-58b239a1.js";let F,we=Promise.all([(()=>{try{return pe}catch{}})(),(()=>{try{return me}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return be}catch{}})()]).then(async()=>{F=H({__name:"StockInItemForm",props:{items:{},disabled:{type:Boolean}},setup(L,{expose:R}){const W=L,A=h(!1),p=h([]),b=J({inId:[{required:!0,message:"\u5165\u5E93\u7F16\u53F7\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],warehouseId:[{required:!0,message:"\u4ED3\u5E93\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],productId:[{required:!0,message:"\u4EA7\u54C1\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],count:[{required:!0,message:"\u4EA7\u54C1\u6570\u91CF\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),I=h([]),v=h([]),x=h([]),k=h(void 0);S(()=>W.items,async o=>{p.value=o},{immediate:!0}),S(()=>p.value,o=>{o&&o.length!==0&&o.forEach(s=>{s.totalPrice=M(s.productPrice,s.count)})},{deep:!0});const K=o=>{const{columns:s,data:u}=o,c=[];return s.forEach((f,r)=>{if(r!==0)if(["count","totalPrice"].includes(f.property)){const n=Y(u.map(w=>Number(w[f.property])));c[r]=f.property==="count"?B(n):E(n)}else c[r]="";else c[r]="\u5408\u8BA1"}),c},P=()=>{var s;const o={id:void 0,warehouseId:(s=k.value)==null?void 0:s.id,productId:void 0,productUnitName:void 0,productBarCode:void 0,productPrice:void 0,stockCount:void 0,count:1,totalPrice:void 0,remark:void 0};p.value.push(o)},C=async o=>{if(!o.productId||!o.warehouseId)return;const s=await he.getStock2(o.productId,o.warehouseId);o.stockCount=s?s.count:0};return R({validate:()=>I.value.validate()}),O(async()=>{v.value=await ce.getProductSimpleList(),x.value=await fe.getWarehouseSimpleList(),k.value=x.value.find(o=>o.defaultStatus),p.value.length===0&&P()}),(o,s)=>{const u=ee,c=ae,f=le,r=te,n=oe,w=de,$=re,Q=ue,Z=se,z=ie,D=ne;return m(),U(y,null,[T((m(),g(Z,{ref_key:"formRef",ref:I,model:i(p),rules:i(b),"label-width":"0px","inline-message":!0,disabled:o.disabled},{default:l(()=>[e(Q,{data:i(p),"show-summary":"","summary-method":K,class:"-mt-10px"},{default:l(()=>[e(u,{label:"\u5E8F\u53F7",type:"index",align:"center",width:"60"}),e(u,{label:"\u4ED3\u5E93\u540D\u79F0","min-width":"125"},{default:l(({row:a,$index:d})=>[e(r,{prop:`${d}.warehouseId`,rules:i(b).warehouseId,class:"mb-0px!"},{default:l(()=>[e(f,{modelValue:a.warehouseId,"onUpdate:modelValue":t=>a.warehouseId=t,clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93",onChange:t=>((N,_)=>{C(_)})(0,a)},{default:l(()=>[(m(!0),U(y,null,q(i(x),t=>(m(),g(c,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1032,["prop","rules"])]),_:1}),e(u,{label:"\u4EA7\u54C1\u540D\u79F0","min-width":"180"},{default:l(({row:a,$index:d})=>[e(r,{prop:`${d}.productId`,rules:i(b).productId,class:"mb-0px!"},{default:l(()=>[e(f,{modelValue:a.productId,"onUpdate:modelValue":t=>a.productId=t,clearable:"",filterable:"",onChange:t=>((N,_)=>{const V=v.value.find(G=>G.id===N);V&&(_.productUnitName=V.unitName,_.productBarCode=V.barCode,_.productPrice=V.minPrice),C(_)})(t,a),placeholder:"\u8BF7\u9009\u62E9\u4EA7\u54C1"},{default:l(()=>[(m(!0),U(y,null,q(i(v),t=>(m(),g(c,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1032,["prop","rules"])]),_:1}),e(u,{label:"\u5E93\u5B58","min-width":"100"},{default:l(({row:a})=>[e(r,{class:"mb-0px!"},{default:l(()=>[e(n,{disabled:"",modelValue:a.stockCount,"onUpdate:modelValue":d=>a.stockCount=d,formatter:i(B)},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1024)]),_:1}),e(u,{label:"\u6761\u7801","min-width":"150"},{default:l(({row:a})=>[e(r,{class:"mb-0px!"},{default:l(()=>[e(n,{disabled:"",modelValue:a.productBarCode,"onUpdate:modelValue":d=>a.productBarCode=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1}),e(u,{label:"\u5355\u4F4D","min-width":"80"},{default:l(({row:a})=>[e(r,{class:"mb-0px!"},{default:l(()=>[e(n,{disabled:"",modelValue:a.productUnitName,"onUpdate:modelValue":d=>a.productUnitName=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1}),e(u,{label:"\u6570\u91CF",prop:"count",fixed:"right","min-width":"140"},{default:l(({row:a,$index:d})=>[e(r,{prop:`${d}.count`,rules:i(b).count,class:"mb-0px!"},{default:l(()=>[e(w,{modelValue:a.count,"onUpdate:modelValue":t=>a.count=t,"controls-position":"right",min:.001,precision:3,class:"!w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])]),_:1}),e(u,{label:"\u4EA7\u54C1\u5355\u4EF7",fixed:"right","min-width":"120"},{default:l(({row:a,$index:d})=>[e(r,{prop:`${d}.productPrice`,class:"mb-0px!"},{default:l(()=>[e(w,{modelValue:a.productPrice,"onUpdate:modelValue":t=>a.productPrice=t,"controls-position":"right",min:.01,precision:2,class:"!w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:1}),e(u,{label:"\u5408\u8BA1\u91D1\u989D",prop:"totalPrice",fixed:"right","min-width":"100"},{default:l(({row:a,$index:d})=>[e(r,{prop:`${d}.totalPrice`,class:"mb-0px!"},{default:l(()=>[e(n,{disabled:"",modelValue:a.totalPrice,"onUpdate:modelValue":t=>a.totalPrice=t,formatter:i(E)},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1032,["prop"])]),_:1}),e(u,{label:"\u5907\u6CE8","min-width":"150"},{default:l(({row:a,$index:d})=>[e(r,{prop:`${d}.remark`,class:"mb-0px!"},{default:l(()=>[e(n,{modelValue:a.remark,"onUpdate:modelValue":t=>a.remark=t,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:1}),e(u,{align:"center",fixed:"right",label:"\u64CD\u4F5C",width:"60"},{default:l(({$index:a})=>[e($,{onClick:d=>{return t=a,void p.value.splice(t,1);var t},link:""},{default:l(()=>[j("\u2014")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1},8,["model","rules","disabled"])),[[D,i(A)]]),o.disabled?X("",!0):(m(),g(z,{key:0,justify:"center",class:"mt-3"},{default:l(()=>[e($,{onClick:P,round:""},{default:l(()=>[j("+ \u6DFB\u52A0\u5165\u5E93\u4EA7\u54C1")]),_:1})]),_:1}))],64)}}})});export{F as _,we as __tla};
