import{an as e,__tla as g}from"./index-34f06ebd.js";let r,t,n,i,l,f,o,s=Promise.all([(()=>{try{return g}catch{}})()]).then(async()=>{r=a=>e.get({url:"/infra/config/page",params:a}),f=a=>e.get({url:"/infra/config/get?id="+a}),t=a=>e.get({url:"/infra/config/get-value-by-key?key="+a}),n=a=>e.post({url:"/infra/config/create",data:a}),o=a=>e.put({url:"/infra/config/update",data:a}),i=a=>e.delete({url:"/infra/config/delete?id="+a}),l=a=>e.download({url:"/infra/config/export",params:a})});export{s as __tla,r as a,t as b,n as c,i as d,l as e,f as g,o as u};