import{aq as a,__tla as r}from"./index-f0743f71.js";let e,o=Promise.all([(()=>{try{return r}catch{}})()]).then(async()=>{e={getProductCategoryList:async t=>await a.get({url:"/erp/product-category/list",params:t}),getProductCategorySimpleList:async()=>await a.get({url:"/erp/product-category/simple-list"}),getProductCategory:async t=>await a.get({url:"/erp/product-category/get?id="+t}),createProductCategory:async t=>await a.post({url:"/erp/product-category/create",data:t}),updateProductCategory:async t=>await a.put({url:"/erp/product-category/update",data:t}),deleteProductCategory:async t=>await a.delete({url:"/erp/product-category/delete?id="+t}),exportProductCategory:async t=>await a.download({url:"/erp/product-category/export-excel",params:t})}});export{e as P,o as __tla};