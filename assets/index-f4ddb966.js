import{ap as a,__tla as y}from"./index-d2088aec.js";let r,t,s,l,d,i,p,c=Promise.all([(()=>{try{return y}catch{}})()]).then(async()=>{t=async e=>await a.get({url:"/trade/delivery/express/page",params:e}),r=async e=>await a.get({url:"/trade/delivery/express/get?id="+e}),i=()=>a.get({url:"/trade/delivery/express/list-all-simple"}),s=async e=>await a.post({url:"/trade/delivery/express/create",data:e}),p=async e=>await a.put({url:"/trade/delivery/express/update",data:e}),l=async e=>await a.delete({url:"/trade/delivery/express/delete?id="+e}),d=async e=>await a.download({url:"/trade/delivery/express/export-excel",params:e})});export{c as __tla,r as a,t as b,s as c,l as d,d as e,i as g,p as u};
