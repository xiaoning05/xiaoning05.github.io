import{ap as t,__tla as u}from"./index-d5b00dc9.js";let o,i,l,s,e,c,n,g=Promise.all([(()=>{try{return u}catch{}})()]).then(async()=>{i=async a=>await t.get({url:"/promotion/seckill-config/page",params:a}),o=async a=>await t.get({url:"/promotion/seckill-config/get?id="+a}),c=async()=>await t.get({url:"/promotion/seckill-config/list-all-simple"}),l=async a=>await t.post({url:"/promotion/seckill-config/create",data:a}),n=async a=>await t.put({url:"/promotion/seckill-config/update",data:a}),e=(a,r)=>{const p={id:a,status:r};return t.put({url:"/promotion/seckill-config/update-status",data:p})},s=async a=>await t.delete({url:"/promotion/seckill-config/delete?id="+a})});export{g as __tla,o as a,i as b,l as c,s as d,e,c as g,n as u};
