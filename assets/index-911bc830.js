import{aq as t,__tla as p}from"./index-f0743f71.js";let r,e,s,l,o,y=Promise.all([(()=>{try{return p}catch{}})()]).then(async()=>{e=async a=>await t.get({url:"/pay/order/page",params:a}),l=async a=>await t.get({url:"/pay/order/get?id="+a}),r=async a=>await t.get({url:"/pay/order/get-detail?id="+a}),o=async a=>await t.post({url:"/pay/order/submit",data:a}),s=async a=>await t.download({url:"/pay/order/export-excel",params:a})});export{y as __tla,r as a,e as b,s as e,l as g,o as s};
