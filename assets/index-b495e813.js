import{ap as e,__tla as n}from"./index-d2088aec.js";let r,l,t,c,s,p,i,m=Promise.all([(()=>{try{return n}catch{}})()]).then(async()=>{p=async a=>await e.get({url:"/crm/receivable-plan/page",params:a}),r=async a=>await e.get({url:"/crm/receivable-plan/page-by-customer",params:a}),l=async a=>await e.get({url:"/crm/receivable-plan/get?id="+a}),t=async a=>await e.post({url:"/crm/receivable-plan/create",data:a}),i=async a=>await e.put({url:"/crm/receivable-plan/update",data:a}),c=async a=>await e.delete({url:"/crm/receivable-plan/delete?id="+a}),s=async a=>await e.download({url:"/crm/receivable-plan/export-excel",params:a})});export{m as __tla,r as a,l as b,t as c,c as d,s as e,p as g,i as u};
