import{aq as e,__tla as s}from"./index-f0743f71.js";let t,u=Promise.all([(()=>{try{return s}catch{}})()]).then(async()=>{t={getPurchaseInPage:async a=>await e.get({url:"/erp/purchase-in/page",params:a}),getPurchaseIn:async a=>await e.get({url:"/erp/purchase-in/get?id="+a}),createPurchaseIn:async a=>await e.post({url:"/erp/purchase-in/create",data:a}),updatePurchaseIn:async a=>await e.put({url:"/erp/purchase-in/update",data:a}),updatePurchaseInStatus:async(a,r)=>await e.put({url:"/erp/purchase-in/update-status",params:{id:a,status:r}}),deletePurchaseIn:async a=>await e.delete({url:"/erp/purchase-in/delete",params:{ids:a.join(",")}}),exportPurchaseIn:async a=>await e.download({url:"/erp/purchase-in/export-excel",params:a})}});export{t as P,u as __tla};
