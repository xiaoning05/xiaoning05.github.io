import{ao as a,__tla as s}from"./index-aaa5adb3.js";let t,u=Promise.all([(()=>{try{return s}catch{}})()]).then(async()=>{t={getWarehousePage:async e=>await a.get({url:"/erp/warehouse/page",params:e}),getWarehouseSimpleList:async()=>await a.get({url:"/erp/warehouse/simple-list"}),getWarehouse:async e=>await a.get({url:"/erp/warehouse/get?id="+e}),createWarehouse:async e=>await a.post({url:"/erp/warehouse/create",data:e}),updateWarehouse:async e=>await a.put({url:"/erp/warehouse/update",data:e}),updateWarehouseDefaultStatus:async(e,r)=>await a.put({url:"/erp/warehouse/update-default-status",params:{id:e,defaultStatus:r}}),deleteWarehouse:async e=>await a.delete({url:"/erp/warehouse/delete?id="+e}),exportWarehouse:async e=>await a.download({url:"/erp/warehouse/export-excel",params:e})}});export{t as W,u as __tla};
