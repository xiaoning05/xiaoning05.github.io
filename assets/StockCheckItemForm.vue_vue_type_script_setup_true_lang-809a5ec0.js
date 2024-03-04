import{d as K,r as h,e as M,aS as q,e0 as O,p as Q,o as m,c as C,x as T,a as i,v,w as l,f as e,F as U,q as B,e1 as k,dZ as E,h as j,a4 as X,d_ as Y,G as ee,y as ae,z as le,A as te,P as oe,bZ as de,C as ue,H as re,D as se,k as ie,I as ne,__tla as ce}from"./index-d2088aec.js";import{P as pe,__tla as me}from"./index-19a1d262.js";import{W as fe,__tla as _e}from"./index-b5811f46.js";import{S as he,__tla as be}from"./index-43a89d89.js";let D,Ve=Promise.all([(()=>{try{return ce}catch{}})(),(()=>{try{return me}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return be}catch{}})()]).then(async()=>{D=K({__name:"StockCheckItemForm",props:{items:{},disabled:{type:Boolean}},setup(F,{expose:L}){const W=F,Z=h(!1),c=h([]),b=M({inId:[{required:!0,message:"\u76D8\u70B9\u7F16\u53F7\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],warehouseId:[{required:!0,message:"\u4ED3\u5E93\u540D\u5B57\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],productId:[{required:!0,message:"\u4EA7\u54C1\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],count:[{required:!0,message:"\u4EA7\u54C1\u6570\u91CF\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),y=h([]),g=h([]),x=h([]),I=h(void 0);q(()=>W.items,async o=>{c.value=o},{immediate:!0}),q(()=>c.value,o=>{o&&o.length!==0&&o.forEach(u=>{u.stockCount!=null&&u.actualCount!=null?u.count=u.actualCount-u.stockCount:u.count=void 0,u.totalPrice=O(u.productPrice,u.count)})},{deep:!0});const z=o=>{const{columns:u,data:s}=o,p=[];return u.forEach((f,r)=>{if(r!==0)if(["count","totalPrice"].includes(f.property)){const n=Y(s.map(V=>Number(V[f.property])));p[r]=f.property==="count"?k(n):E(n)}else p[r]="";else p[r]="\u5408\u8BA1"}),p},P=()=>{var u;const o={id:void 0,warehouseId:(u=I.value)==null?void 0:u.id,productId:void 0,productUnitName:void 0,productBarCode:void 0,productPrice:void 0,stockCount:void 0,actualCount:void 0,count:void 0,totalPrice:void 0,remark:void 0};c.value.push(o)},$=async o=>{if(!o.productId||!o.warehouseId)return;const u=await he.getStock2(o.productId,o.warehouseId);o.stockCount=u?u.count:0,o.actualCount=o.stockCount};return L({validate:()=>y.value.validate()}),Q(async()=>{g.value=await pe.getProductSimpleList(),x.value=await fe.getWarehouseSimpleList(),I.value=x.value.find(o=>o.defaultStatus),c.value.length===0&&P()}),(o,u)=>{const s=ee,p=ae,f=le,r=te,n=oe,V=de,N=ue,A=re,G=se,H=ie,R=ne;return m(),C(U,null,[T((m(),v(G,{ref_key:"formRef",ref:y,model:i(c),rules:i(b),"label-width":"0px","inline-message":!0,disabled:o.disabled},{default:l(()=>[e(A,{data:i(c),"show-summary":"","summary-method":z,class:"-mt-10px"},{default:l(()=>[e(s,{label:"\u5E8F\u53F7",type:"index",align:"center",width:"60"}),e(s,{label:"\u4ED3\u5E93\u540D\u5B57","min-width":"125"},{default:l(({row:a,$index:d})=>[e(r,{prop:`${d}.warehouseId`,rules:i(b).warehouseId,class:"mb-0px!"},{default:l(()=>[e(f,{modelValue:a.warehouseId,"onUpdate:modelValue":t=>a.warehouseId=t,clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93\u540D\u5B57",onChange:t=>((S,_)=>{$(_)})(0,a)},{default:l(()=>[(m(!0),C(U,null,B(i(x),t=>(m(),v(p,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1032,["prop","rules"])]),_:1}),e(s,{label:"\u4EA7\u54C1\u540D\u79F0","min-width":"180"},{default:l(({row:a,$index:d})=>[e(r,{prop:`${d}.productId`,rules:i(b).productId,class:"mb-0px!"},{default:l(()=>[e(f,{modelValue:a.productId,"onUpdate:modelValue":t=>a.productId=t,clearable:"",filterable:"",onChange:t=>((S,_)=>{const w=g.value.find(J=>J.id===S);w&&(_.productUnitName=w.unitName,_.productBarCode=w.barCode,_.productPrice=w.minPrice),$(_)})(t,a),placeholder:"\u8BF7\u9009\u62E9\u4EA7\u54C1"},{default:l(()=>[(m(!0),C(U,null,B(i(g),t=>(m(),v(p,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1032,["prop","rules"])]),_:1}),e(s,{label:"\u8D26\u9762\u5E93\u5B58","min-width":"100"},{default:l(({row:a})=>[e(r,{class:"mb-0px!"},{default:l(()=>[e(n,{disabled:"",modelValue:a.stockCount,"onUpdate:modelValue":d=>a.stockCount=d,formatter:i(k)},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1024)]),_:1}),e(s,{label:"\u6761\u7801","min-width":"150"},{default:l(({row:a})=>[e(r,{class:"mb-0px!"},{default:l(()=>[e(n,{disabled:"",modelValue:a.productBarCode,"onUpdate:modelValue":d=>a.productBarCode=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1}),e(s,{label:"\u5355\u4F4D","min-width":"80"},{default:l(({row:a})=>[e(r,{class:"mb-0px!"},{default:l(()=>[e(n,{disabled:"",modelValue:a.productUnitName,"onUpdate:modelValue":d=>a.productUnitName=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1}),e(s,{label:"\u5B9E\u9645\u5E93\u5B58",fixed:"right","min-width":"140"},{default:l(({row:a,$index:d})=>[e(r,{prop:`${d}.actualCount`,rules:i(b).actualCount,class:"mb-0px!"},{default:l(()=>[e(V,{modelValue:a.actualCount,"onUpdate:modelValue":t=>a.actualCount=t,"controls-position":"right",precision:3,class:"!w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])]),_:1}),e(s,{label:"\u76C8\u4E8F\u6570\u91CF",prop:"count",fixed:"right","min-width":"110"},{default:l(({row:a,$index:d})=>[e(r,{prop:`${d}.count`,rules:i(b).count,class:"mb-0px!"},{default:l(()=>[e(n,{disabled:"",modelValue:a.count,"onUpdate:modelValue":t=>a.count=t,formatter:i(k),class:"!w-100%"},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1032,["prop","rules"])]),_:1}),e(s,{label:"\u4EA7\u54C1\u5355\u4EF7",fixed:"right","min-width":"120"},{default:l(({row:a,$index:d})=>[e(r,{prop:`${d}.productPrice`,class:"mb-0px!"},{default:l(()=>[e(V,{modelValue:a.productPrice,"onUpdate:modelValue":t=>a.productPrice=t,"controls-position":"right",min:.01,precision:2,class:"!w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:1}),e(s,{label:"\u5408\u8BA1\u91D1\u989D",prop:"totalPrice",fixed:"right","min-width":"100"},{default:l(({row:a,$index:d})=>[e(r,{prop:`${d}.totalPrice`,class:"mb-0px!"},{default:l(()=>[e(n,{disabled:"",modelValue:a.totalPrice,"onUpdate:modelValue":t=>a.totalPrice=t,formatter:i(E)},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1032,["prop"])]),_:1}),e(s,{label:"\u5907\u6CE8","min-width":"150"},{default:l(({row:a,$index:d})=>[e(r,{prop:`${d}.remark`,class:"mb-0px!"},{default:l(()=>[e(n,{modelValue:a.remark,"onUpdate:modelValue":t=>a.remark=t,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:1}),e(s,{align:"center",fixed:"right",label:"\u64CD\u4F5C",width:"60"},{default:l(({$index:a})=>[e(N,{onClick:d=>{return t=a,void c.value.splice(t,1);var t},link:""},{default:l(()=>[j("\u2014")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1},8,["model","rules","disabled"])),[[R,i(Z)]]),o.disabled?X("",!0):(m(),v(H,{key:0,justify:"center",class:"mt-3"},{default:l(()=>[e(N,{onClick:P,round:""},{default:l(()=>[j("+ \u6DFB\u52A0\u76D8\u70B9\u4EA7\u54C1")]),_:1})]),_:1}))],64)}}})});export{D as _,Ve as __tla};