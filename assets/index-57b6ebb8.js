import{an as e,__tla as c}from"./index-34f06ebd.js";let t,a,l,n,m,r,u=Promise.all([(()=>{try{return c}catch{}})()]).then(async()=>{t=s=>e.get({url:"/system/sms-channel/page",params:s}),a=function(){return e.get({url:"/system/sms-channel/simple-list"})},m=s=>e.get({url:"/system/sms-channel/get?id="+s}),l=s=>e.post({url:"/system/sms-channel/create",data:s}),r=s=>e.put({url:"/system/sms-channel/update",data:s}),n=s=>e.delete({url:"/system/sms-channel/delete?id="+s})});export{u as __tla,t as a,a as b,l as c,n as d,m as g,r as u};
