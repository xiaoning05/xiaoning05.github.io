import{ap as a,__tla as n}from"./index-d2088aec.js";let e,s,l,y,i,m,p=Promise.all([(()=>{try{return n}catch{}})()]).then(async()=>{e=async t=>await a.get({url:"/system/notify-template/page",params:t}),y=async t=>await a.get({url:"/system/notify-template/get?id="+t}),s=async t=>await a.post({url:"/system/notify-template/create",data:t}),m=async t=>await a.put({url:"/system/notify-template/update",data:t}),l=async t=>await a.delete({url:"/system/notify-template/delete?id="+t}),i=t=>a.post({url:"/system/notify-template/send-notify",data:t})});export{p as __tla,e as a,s as c,l as d,y as g,i as s,m as u};
