import{an as a,__tla as r}from"./index-34f06ebd.js";let e,c=Promise.all([(()=>{try{return r}catch{}})()]).then(async()=>{e={getProductPage:async t=>await a.get({url:"/erp/product/page",params:t}),getProductSimpleList:async()=>await a.get({url:"/erp/product/simple-list"}),getProduct:async t=>await a.get({url:"/erp/product/get?id="+t}),createProduct:async t=>await a.post({url:"/erp/product/create",data:t}),updateProduct:async t=>await a.put({url:"/erp/product/update",data:t}),deleteProduct:async t=>await a.delete({url:"/erp/product/delete?id="+t}),exportProduct:async t=>await a.download({url:"/erp/product/export-excel",params:t})}});export{e as P,c as __tla};
