import{ap as t,__tla as p}from"./index-d5b00dc9.js";let r,c,e,s,o,u=Promise.all([(()=>{try{return p}catch{}})()]).then(async()=>{r=async a=>await t.get({url:"/product/comment/page",params:a}),e=async a=>await t.get({url:"/product/comment/get?id="+a}),c=async a=>await t.post({url:"/product/comment/create",data:a}),o=async a=>await t.put({url:"/product/comment/update-visible",data:a}),s=async a=>await t.put({url:"/product/comment/reply",data:a})});export{u as __tla,r as a,c,e as g,s as r,o as u};
