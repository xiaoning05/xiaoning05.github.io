import{ao as t,__tla as r}from"./index-aaa5adb3.js";let i,l,e,o,s,c,n=Promise.all([(()=>{try{return r}catch{}})()]).then(async()=>{i=async a=>await t.get({url:"/promotion/seckill-activity/page",params:a}),s=async a=>await t.get({url:"/promotion/seckill-activity/get?id="+a}),e=async a=>await t.post({url:"/promotion/seckill-activity/create",data:a}),c=async a=>await t.put({url:"/promotion/seckill-activity/update",data:a}),l=async a=>await t.put({url:"/promotion/seckill-activity/close?id="+a}),o=async a=>await t.delete({url:"/promotion/seckill-activity/delete?id="+a})});export{n as __tla,i as a,l as b,e as c,o as d,s as g,c as u};
