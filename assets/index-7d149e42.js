import{aq as t,__tla as s}from"./index-f0743f71.js";let e,r,o,i,l,c,n=Promise.all([(()=>{try{return s}catch{}})()]).then(async()=>{r=async a=>await t.get({url:"/promotion/article-category/page",params:a}),l=async()=>await t.get({url:"/promotion/article-category/list-all-simple"}),e=async a=>await t.get({url:"/promotion/article-category/get?id="+a}),o=async a=>await t.post({url:"/promotion/article-category/create",data:a}),c=async a=>await t.put({url:"/promotion/article-category/update",data:a}),i=async a=>await t.delete({url:"/promotion/article-category/delete?id="+a})});export{n as __tla,e as a,r as b,o as c,i as d,l as g,c as u};
