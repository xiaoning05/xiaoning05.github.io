import{ao as s,__tla as o}from"./index-b079f499.js";let t,e,r,l,p=Promise.all([(()=>{try{return o}catch{}})()]).then(async()=>{r=()=>s.get({url:"/system/user/profile/get"}),l=a=>s.put({url:"/system/user/profile/update",data:a}),t=(a,u)=>s.put({url:"/system/user/profile/update-password",data:{oldPassword:a,newPassword:u}}),e=a=>s.upload({url:"/system/user/profile/update-avatar",data:a})});export{p as __tla,t as a,e as b,r as g,l as u};
