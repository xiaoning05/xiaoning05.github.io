import{ao as t,__tla as i}from"./index-b079f499.js";let c,r,s,e,n,l,o,m,u,p=Promise.all([(()=>{try{return i}catch{}})()]).then(async()=>{l=async a=>await t.get({url:"/crm/contract/page",params:a}),r=async a=>await t.get({url:"/crm/contract/page-by-customer",params:a}),c=async a=>await t.get({url:"/crm/contract/get?id="+a}),s=async a=>await t.post({url:"/crm/contract/create",data:a}),u=async a=>await t.put({url:"/crm/contract/update",data:a}),e=async a=>await t.delete({url:"/crm/contract/delete?id="+a}),n=async a=>await t.download({url:"/crm/contract/export-excel",params:a}),o=async a=>await t.put({url:`/crm/contract/submit?id=${a}`}),m=async a=>await t.put({url:"/crm/contract/transfer",data:a})});export{p as __tla,c as a,r as b,s as c,e as d,n as e,l as g,o as s,m as t,u};
