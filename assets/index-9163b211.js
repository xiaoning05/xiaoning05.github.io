import{ap as t,__tla as s}from"./index-d2088aec.js";let e,r,o,i,l,c=Promise.all([(()=>{try{return s}catch{}})()]).then(async()=>{e=async a=>await t.get({url:"/promotion/article/page",params:a}),i=async a=>await t.get({url:"/promotion/article/get?id="+a}),r=async a=>await t.post({url:"/promotion/article/create",data:a}),l=async a=>await t.put({url:"/promotion/article/update",data:a}),o=async a=>await t.delete({url:"/promotion/article/delete?id="+a})});export{c as __tla,e as a,r as c,o as d,i as g,l as u};
