import{an as y,d as w,u as x,n as g,p as A,o as t,q as S,e as o,b as n,a as i,f as d,c as m,F as k,g as N,t as P,__tla as W}from"./index-34f06ebd.js";import{_ as C,__tla as U}from"./CountTo.vue_vue_type_script_setup_true_lang-fa13acf4.js";import{a as O,__tla as T}from"./spu-7528f5a7.js";import{g as F,__tla as D}from"./trade-402c6e06.js";import{C as I,__tla as b}from"./CardTitle-b727423c.js";import{E as j,__tla as q}from"./index-460c50ff.js";let p,B=Promise.all([(()=>{try{return W}catch{}})(),(()=>{try{return U}catch{}})(),(()=>{try{return T}catch{}})(),(()=>{try{return D}catch{}})(),(()=>{try{return b}catch{}})(),(()=>{try{return q}catch{}})()]).then(async()=>{let l,u,s;l={class:"flex flex-row flex-wrap items-center gap-8 p-4"},u=["onClick"],s={class:"text-center"},p=w({name:"OperationDataCard",__name:"OperationDataCard",setup(E){const _=x(),e=g({orderUndelivered:{name:"\u5F85\u53D1\u8D27\u8BA2\u5355",value:9,routerName:"TradeOrder"},orderAfterSaleApply:{name:"\u9000\u6B3E\u4E2D\u8BA2\u5355",value:4,routerName:"TradeAfterSale"},orderWaitePickUp:{name:"\u5F85\u6838\u9500\u8BA2\u5355",value:0,routerName:"TradeOrder"},productAlertStock:{name:"\u5E93\u5B58\u9884\u8B66",value:0,routerName:"ProductSpu"},productForSale:{name:"\u4E0A\u67B6\u5546\u54C1",value:0,routerName:"ProductSpu"},productInWarehouse:{name:"\u4ED3\u5E93\u5546\u54C1",value:0,routerName:"ProductSpu"},withdrawAuditing:{name:"\u63D0\u73B0\u5F85\u5BA1\u6838",value:0,routerName:"TradeBrokerageWithdraw"},rechargePrice:{name:"\u8D26\u6237\u5145\u503C",value:0,prefix:"\uFFE5",decimals:2,routerName:"PayWalletRecharge"}}),v=async()=>{const a=await(async()=>await y.get({url:"/statistics/pay/summary"}))();e.rechargePrice.value=a.rechargePrice};return A(()=>{(async()=>{const a=await F();e.orderUndelivered.value=a.undelivered,e.orderAfterSaleApply.value=a.afterSaleApply,e.orderWaitePickUp.value=a.pickUp,e.withdrawAuditing.value=a.auditingWithdraw})(),(async()=>{const a=await O();e.productForSale.value=a[0],e.productInWarehouse.value=a[1],e.productAlertStock.value=a[3]})(),v()}),(a,R)=>{const f=C,h=j;return t(),S(h,{shadow:"never"},{header:o(()=>[n(i(I),{title:"\u8FD0\u8425\u6570\u636E"})]),default:o(()=>[d("div",l,[(t(!0),m(k,null,N(i(e),r=>(t(),m("div",{key:r.name,class:"h-20 w-20% flex flex-col cursor-pointer items-center justify-center gap-2",onClick:z=>{return c=r.routerName,void _.push({name:c});var c}},[n(f,{prefix:r.prefix,"end-val":r.value,decimals:r.decimals,class:"text-3xl"},null,8,["prefix","end-val","decimals"]),d("span",s,P(r.name),1)],8,u))),128))])]),_:1})}}})});export{p as _,B as __tla};