import{an as t,__tla as g}from"./index-34f06ebd.js";let e,s,l,n,p,r,c=Promise.all([(()=>{try{return g}catch{}})()]).then(async()=>{s=a=>t.get({url:"/system/tenant-package/page",params:a}),e=a=>t.get({url:"/system/tenant-package/get?id="+a}),l=a=>t.post({url:"/system/tenant-package/create",data:a}),r=a=>t.put({url:"/system/tenant-package/update",data:a}),n=a=>t.delete({url:"/system/tenant-package/delete?id="+a}),p=()=>t.get({url:"/system/tenant-package/simple-list"})});export{c as __tla,e as a,s as b,l as c,n as d,p as g,r as u};
