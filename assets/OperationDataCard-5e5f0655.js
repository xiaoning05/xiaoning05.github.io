import{ao as y,d as w,u as g,n as x,p as A,o as t,q as S,e as c,b as n,a as i,f as d,c as m,F as N,g as k,t as P,_ as C,__tla as W}from"./index-b079f499.js";import{_ as U,__tla as O}from"./CountTo-993564ef.js";import{a as D,__tla as I}from"./spu-b2e776cb.js";import{g as T,__tla as j}from"./trade-0cf3c1b4.js";import{C as F,__tla as E}from"./CardTitle-55c77ba2.js";import{E as b,__tla as q}from"./index-3be78f60.js";import{__tla as B}from"./formatTime-0805635f.js";let p,G=Promise.all([(()=>{try{return W}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return I}catch{}})(),(()=>{try{return j}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return q}catch{}})(),(()=>{try{return B}catch{}})()]).then(async()=>{let l,o,s;l={class:"flex flex-row flex-wrap items-center gap-8 p-4"},o=["onClick"],s={class:"text-center"},p=C(w({name:"OperationDataCard",__name:"OperationDataCard",setup(M){const _=g(),e=x({orderUndelivered:{name:"\u5F85\u53D1\u8D27\u8BA2\u5355",value:9,routerName:"TradeOrder"},orderAfterSaleApply:{name:"\u9000\u6B3E\u4E2D\u8BA2\u5355",value:4,routerName:"TradeAfterSale"},orderWaitePickUp:{name:"\u5F85\u6838\u9500\u8BA2\u5355",value:0,routerName:"TradeOrder"},productAlertStock:{name:"\u5E93\u5B58\u9884\u8B66",value:0,routerName:"ProductSpu"},productForSale:{name:"\u4E0A\u67B6\u5546\u54C1",value:0,routerName:"ProductSpu"},productInWarehouse:{name:"\u4ED3\u5E93\u5546\u54C1",value:0,routerName:"ProductSpu"},withdrawAuditing:{name:"\u63D0\u73B0\u5F85\u5BA1\u6838",value:0,routerName:"TradeBrokerageWithdraw"},rechargePrice:{name:"\u8D26\u6237\u5145\u503C",value:0,prefix:"\uFFE5",decimals:2,routerName:"PayWalletRecharge"}}),v=async()=>{const a=await(async()=>await y.get({url:"/statistics/pay/summary"}))();e.rechargePrice.value=a.rechargePrice};return A(()=>{(async()=>{const a=await T();e.orderUndelivered.value=a.undelivered,e.orderAfterSaleApply.value=a.afterSaleApply,e.orderWaitePickUp.value=a.pickUp,e.withdrawAuditing.value=a.auditingWithdraw})(),(async()=>{const a=await D();e.productForSale.value=a[0],e.productInWarehouse.value=a[1],e.productAlertStock.value=a[3]})(),v()}),(a,R)=>{const f=U,h=b;return t(),S(h,{shadow:"never"},{header:c(()=>[n(i(F),{title:"\u8FD0\u8425\u6570\u636E"})]),default:c(()=>[d("div",l,[(t(!0),m(N,null,k(i(e),r=>(t(),m("div",{key:r.name,class:"h-20 w-20% flex flex-col cursor-pointer items-center justify-center gap-2",onClick:X=>{return u=r.routerName,void _.push({name:u});var u}},[n(f,{prefix:r.prefix,"end-val":r.value,decimals:r.decimals,class:"text-3xl"},null,8,["prefix","end-val","decimals"]),d("span",s,P(r.name),1)],8,o))),128))])]),_:1})}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mall/home/components/OperationDataCard.vue"]])});export{G as __tla,p as default};
