import{ao as a,__tla as o}from"./index-aaa5adb3.js";let t,e,r,i,l,n=Promise.all([(()=>{try{return o}catch{}})()]).then(async()=>{l=async s=>await a.get({url:"/system/permission/list-role-menus?roleId="+s}),t=async s=>await a.post({url:"/system/permission/assign-role-menu",data:s}),e=async s=>await a.post({url:"/system/permission/assign-role-data-scope",data:s}),r=async s=>await a.get({url:"/system/permission/list-user-roles?userId="+s}),i=async s=>await a.post({url:"/system/permission/assign-user-role",data:s})});export{n as __tla,t as a,e as b,r as c,i as d,l as g};
