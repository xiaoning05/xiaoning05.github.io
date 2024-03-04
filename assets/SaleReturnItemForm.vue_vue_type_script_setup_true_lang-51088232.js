import{d as z,r as b,e as A,aS as $,e0 as v,p as D,x as G,a as n,o as V,v as _,w as l,f as e,c as H,F as L,q as J,e1 as h,a4 as k,dZ as x,h as K,d_ as M,G as O,y as Q,z as T,A as X,P as Y,bZ as ee,C as ae,H as le,D as te,I as oe,__tla as de}from"./index-d2088aec.js";import{S as re,__tla as ue}from"./index-43a89d89.js";import{W as ie,__tla as ne}from"./index-b5811f46.js";let I,se=Promise.all([(()=>{try{return de}catch{}})(),(()=>{try{return ue}catch{}})(),(()=>{try{return ne}catch{}})()]).then(async()=>{I=z({__name:"SaleReturnItemForm",props:{items:{},disabled:{type:Boolean}},setup(N,{expose:S}){const q=N,B=b(!1),m=b([]),w=A({warehouseId:[{required:!0,message:"\u4ED3\u5E93\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],productId:[{required:!0,message:"\u4EA7\u54C1\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],count:[{required:!0,message:"\u4EA7\u54C1\u6570\u91CF\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),g=b([]),P=b([]),U=b(void 0);$(()=>q.items,async i=>{i.forEach(d=>{var r;d.warehouseId==null&&(d.warehouseId=(r=U.value)==null?void 0:r.id),d.stockCount===null&&d.warehouseId!=null&&W(d)}),m.value=i},{immediate:!0}),$(()=>m.value,i=>{i&&i.length!==0&&i.forEach(d=>{d.totalProductPrice=v(d.productPrice,d.count),d.taxPrice=v(d.totalProductPrice,d.taxPercent/100),d.totalProductPrice!=null?d.totalPrice=d.totalProductPrice+(d.taxPrice||0):d.totalPrice=void 0})},{deep:!0});const E=i=>{const{columns:d,data:r}=i,p=[];return d.forEach((c,u)=>{if(u!==0)if(["count","totalProductPrice","taxPrice","totalPrice"].includes(c.property)){const s=M(r.map(f=>Number(f[c.property])));p[u]=c.property==="count"?h(s):x(s)}else p[u]="";else p[u]="\u5408\u8BA1"}),p},W=async i=>{if(!i.productId)return;const d=await re.getStockCount(i.productId);i.stockCount=d||0};return S({validate:()=>g.value.validate()}),D(async()=>{P.value=await ie.getWarehouseSimpleList(),U.value=P.value.find(i=>i.defaultStatus)}),(i,d)=>{const r=O,p=Q,c=T,u=X,s=Y,f=ee,Z=ae,F=le,R=te,j=oe;return G((V(),_(R,{ref_key:"formRef",ref:g,model:n(m),rules:n(w),"label-width":"0px","inline-message":!0,disabled:i.disabled},{default:l(()=>[e(F,{data:n(m),"show-summary":"","summary-method":E,class:"-mt-10px"},{default:l(()=>{var y,C;return[e(r,{label:"\u5E8F\u53F7",type:"index",align:"center",width:"60"}),e(r,{label:"\u4ED3\u5E93\u540D\u79F0","min-width":"125"},{default:l(({row:a,$index:t})=>[e(u,{prop:`${t}.warehouseId`,rules:n(w).warehouseId,class:"mb-0px!"},{default:l(()=>[e(c,{modelValue:a.warehouseId,"onUpdate:modelValue":o=>a.warehouseId=o,clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93",onChange:o=>i.onChangeWarehouse(o,a)},{default:l(()=>[(V(!0),H(L,null,J(n(P),o=>(V(),_(p,{key:o.id,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1032,["prop","rules"])]),_:1}),e(r,{label:"\u4EA7\u54C1\u540D\u79F0","min-width":"180"},{default:l(({row:a})=>[e(u,{class:"mb-0px!"},{default:l(()=>[e(s,{disabled:"",modelValue:a.productName,"onUpdate:modelValue":t=>a.productName=t},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1}),e(r,{label:"\u5E93\u5B58","min-width":"100"},{default:l(({row:a})=>[e(u,{class:"mb-0px!"},{default:l(()=>[e(s,{disabled:"",modelValue:a.stockCount,"onUpdate:modelValue":t=>a.stockCount=t,formatter:n(h)},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1024)]),_:1}),e(r,{label:"\u6761\u7801","min-width":"150"},{default:l(({row:a})=>[e(u,{class:"mb-0px!"},{default:l(()=>[e(s,{disabled:"",modelValue:a.productBarCode,"onUpdate:modelValue":t=>a.productBarCode=t},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1}),e(r,{label:"\u5355\u4F4D","min-width":"80"},{default:l(({row:a})=>[e(u,{class:"mb-0px!"},{default:l(()=>[e(s,{disabled:"",modelValue:a.productUnitName,"onUpdate:modelValue":t=>a.productUnitName=t},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1}),((y=n(m)[0])==null?void 0:y.outCount)!=null?(V(),_(r,{key:0,label:"\u5DF2\u51FA\u5E93",fixed:"right","min-width":"80"},{default:l(({row:a})=>[e(u,{class:"mb-0px!"},{default:l(()=>[e(s,{disabled:"",modelValue:a.outCount,"onUpdate:modelValue":t=>a.outCount=t,formatter:n(h)},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1024)]),_:1})):k("",!0),((C=n(m)[0])==null?void 0:C.returnCount)!=null?(V(),_(r,{key:1,label:"\u5DF2\u9000\u8D27",fixed:"right","min-width":"80"},{default:l(({row:a})=>[e(u,{class:"mb-0px!"},{default:l(()=>[e(s,{disabled:"",modelValue:a.returnCount,"onUpdate:modelValue":t=>a.returnCount=t,formatter:n(h)},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1024)]),_:1})):k("",!0),e(r,{label:"\u6570\u91CF",prop:"count",fixed:"right","min-width":"140"},{default:l(({row:a,$index:t})=>[e(u,{prop:`${t}.count`,rules:n(w).count,class:"mb-0px!"},{default:l(()=>[e(f,{modelValue:a.count,"onUpdate:modelValue":o=>a.count=o,"controls-position":"right",min:.001,precision:3,class:"!w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])]),_:1}),e(r,{label:"\u4EA7\u54C1\u5355\u4EF7",fixed:"right","min-width":"120"},{default:l(({row:a,$index:t})=>[e(u,{prop:`${t}.productPrice`,class:"mb-0px!"},{default:l(()=>[e(f,{modelValue:a.productPrice,"onUpdate:modelValue":o=>a.productPrice=o,"controls-position":"right",min:.01,precision:2,class:"!w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:1}),e(r,{label:"\u91D1\u989D",prop:"totalProductPrice",fixed:"right","min-width":"100"},{default:l(({row:a,$index:t})=>[e(u,{prop:`${t}.totalProductPrice`,class:"mb-0px!"},{default:l(()=>[e(s,{disabled:"",modelValue:a.totalProductPrice,"onUpdate:modelValue":o=>a.totalProductPrice=o,formatter:n(x)},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1032,["prop"])]),_:1}),e(r,{label:"\u7A0E\u7387\uFF08%\uFF09",fixed:"right","min-width":"115"},{default:l(({row:a,$index:t})=>[e(u,{prop:`${t}.taxPercent`,class:"mb-0px!"},{default:l(()=>[e(f,{modelValue:a.taxPercent,"onUpdate:modelValue":o=>a.taxPercent=o,"controls-position":"right",min:0,precision:2,class:"!w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:1}),e(r,{label:"\u7A0E\u989D",prop:"taxPrice",fixed:"right","min-width":"120"},{default:l(({row:a,$index:t})=>[e(u,{prop:`${t}.taxPrice`,class:"mb-0px!"},{default:l(()=>[e(u,{prop:`${t}.taxPrice`,class:"mb-0px!"},{default:l(()=>[e(s,{disabled:"",modelValue:a.taxPrice,"onUpdate:modelValue":o=>a.taxPrice=o,formatter:n(x)},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1032,["prop"])]),_:2},1032,["prop"])]),_:1}),e(r,{label:"\u7A0E\u989D\u5408\u8BA1",prop:"totalPrice",fixed:"right","min-width":"100"},{default:l(({row:a,$index:t})=>[e(u,{prop:`${t}.totalPrice`,class:"mb-0px!"},{default:l(()=>[e(s,{disabled:"",modelValue:a.totalPrice,"onUpdate:modelValue":o=>a.totalPrice=o,formatter:n(x)},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1032,["prop"])]),_:1}),e(r,{label:"\u5907\u6CE8","min-width":"150"},{default:l(({row:a,$index:t})=>[e(u,{prop:`${t}.remark`,class:"mb-0px!"},{default:l(()=>[e(s,{modelValue:a.remark,"onUpdate:modelValue":o=>a.remark=o,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:1}),e(r,{align:"center",fixed:"right",label:"\u64CD\u4F5C",width:"60"},{default:l(({$index:a})=>[e(Z,{disabled:n(m).length===1,onClick:t=>{return o=a,void m.value.splice(o,1);var o},link:""},{default:l(()=>[K(" \u2014 ")]),_:2},1032,["disabled","onClick"])]),_:1})]}),_:1},8,["data"])]),_:1},8,["model","rules","disabled"])),[[j,n(B)]])}}})});export{I as _,se as __tla};
