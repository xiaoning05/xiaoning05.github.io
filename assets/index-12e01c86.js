import{ap as e,__tla as s}from"./index-d5b00dc9.js";let a,p=Promise.all([(()=>{try{return s}catch{}})()]).then(async()=>{a={getPurchaseOrderPage:async r=>await e.get({url:"/erp/purchase-order/page",params:r}),getPurchaseOrder:async r=>await e.get({url:"/erp/purchase-order/get?id="+r}),createPurchaseOrder:async r=>await e.post({url:"/erp/purchase-order/create",data:r}),updatePurchaseOrder:async r=>await e.put({url:"/erp/purchase-order/update",data:r}),updatePurchaseOrderStatus:async(r,t)=>await e.put({url:"/erp/purchase-order/update-status",params:{id:r,status:t}}),deletePurchaseOrder:async r=>await e.delete({url:"/erp/purchase-order/delete",params:{ids:r.join(",")}}),exportPurchaseOrder:async r=>await e.download({url:"/erp/purchase-order/export-excel",params:r})}});export{a as P,p as __tla};
