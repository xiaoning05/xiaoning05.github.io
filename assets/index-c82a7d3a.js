import{ao as t,__tla as l}from"./index-aaa5adb3.js";let r,s,e,u,p=Promise.all([(()=>{try{return l}catch{}})()]).then(async()=>{u=a=>t.put({url:"/mp/user/update",data:a}),s=a=>t.get({url:"/mp/user/get?id="+a}),r=a=>t.get({url:"/mp/user/page",params:a}),e=a=>t.post({url:"/mp/user/sync?accountId="+a})});export{p as __tla,r as a,s as g,e as s,u};