import{ao as t,__tla as r}from"./index-aaa5adb3.js";let a,s=Promise.all([(()=>{try{return r}catch{}})()]).then(async()=>{a={getCustomerPage:async e=>await t.get({url:"/erp/customer/page",params:e}),getCustomerSimpleList:async()=>await t.get({url:"/erp/customer/simple-list"}),getCustomer:async e=>await t.get({url:"/erp/customer/get?id="+e}),createCustomer:async e=>await t.post({url:"/erp/customer/create",data:e}),updateCustomer:async e=>await t.put({url:"/erp/customer/update",data:e}),deleteCustomer:async e=>await t.delete({url:"/erp/customer/delete?id="+e}),exportCustomer:async e=>await t.download({url:"/erp/customer/export-excel",params:e})}});export{a as C,s as __tla};