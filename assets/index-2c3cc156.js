import{an as e,__tla as u}from"./index-34f06ebd.js";let r,s=Promise.all([(()=>{try{return u}catch{}})()]).then(async()=>{r={getPurchaseReturnPage:async a=>await e.get({url:"/erp/purchase-return/page",params:a}),getPurchaseReturn:async a=>await e.get({url:"/erp/purchase-return/get?id="+a}),createPurchaseReturn:async a=>await e.post({url:"/erp/purchase-return/create",data:a}),updatePurchaseReturn:async a=>await e.put({url:"/erp/purchase-return/update",data:a}),updatePurchaseReturnStatus:async(a,t)=>await e.put({url:"/erp/purchase-return/update-status",params:{id:a,status:t}}),deletePurchaseReturn:async a=>await e.delete({url:"/erp/purchase-return/delete",params:{ids:a.join(",")}}),exportPurchaseReturn:async a=>await e.download({url:"/erp/purchase-return/export-excel",params:a})}});export{r as P,s as __tla};