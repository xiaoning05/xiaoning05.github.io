import{an as t,__tla as c}from"./index-34f06ebd.js";let e,n,r,s=Promise.all([(()=>{try{return c}catch{}})()]).then(async()=>{n=(a,l)=>{const p={appId:a,code:l};return t.get({url:"/pay/channel/get",params:p})},e=a=>t.post({url:"/pay/channel/create",data:a}),r=a=>t.put({url:"/pay/channel/update",data:a})});export{s as __tla,e as c,n as g,r as u};