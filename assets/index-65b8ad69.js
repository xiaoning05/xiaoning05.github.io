import{ao as a,__tla as u}from"./index-aaa5adb3.js";let e,r=Promise.all([(()=>{try{return u}catch{}})()]).then(async()=>{e={getAccountPage:async t=>await a.get({url:"/erp/account/page",params:t}),getAccountSimpleList:async()=>await a.get({url:"/erp/account/simple-list"}),getAccount:async t=>await a.get({url:"/erp/account/get?id="+t}),createAccount:async t=>await a.post({url:"/erp/account/create",data:t}),updateAccount:async t=>await a.put({url:"/erp/account/update",data:t}),updateAccountDefaultStatus:async(t,c)=>await a.put({url:"/erp/account/update-default-status",params:{id:t,defaultStatus:c}}),deleteAccount:async t=>await a.delete({url:"/erp/account/delete?id="+t}),exportAccount:async t=>await a.download({url:"/erp/account/export-excel",params:t})}});export{e as A,r as __tla};
