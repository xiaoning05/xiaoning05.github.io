import{ao as t,__tla as p}from"./index-aaa5adb3.js";let e,s,l,m,i,r,y=Promise.all([(()=>{try{return p}catch{}})()]).then(async()=>{e=async a=>await t.get({url:"/system/mail-template/page",params:a}),m=async a=>await t.get({url:"/system/mail-template/get?id="+a}),s=async a=>await t.post({url:"/system/mail-template/create",data:a}),r=async a=>await t.put({url:"/system/mail-template/update",data:a}),l=async a=>await t.delete({url:"/system/mail-template/delete?id="+a}),i=a=>t.post({url:"/system/mail-template/send-mail",data:a})});export{y as __tla,e as a,s as c,l as d,m as g,i as s,r as u};
