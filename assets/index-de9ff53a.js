import{ao as t,__tla as c}from"./index-b079f499.js";let e,r,o,i,s,l=Promise.all([(()=>{try{return c}catch{}})()]).then(async()=>{r=a=>t.post({url:"/infra/data-source-config/create",data:a}),s=a=>t.put({url:"/infra/data-source-config/update",data:a}),o=a=>t.delete({url:"/infra/data-source-config/delete?id="+a}),e=a=>t.get({url:"/infra/data-source-config/get?id="+a}),i=()=>t.get({url:"/infra/data-source-config/list"})});export{l as __tla,e as a,r as c,o as d,i as g,s as u};
