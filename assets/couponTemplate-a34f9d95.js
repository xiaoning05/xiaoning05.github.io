import{ap as o,__tla as s}from"./index-d2088aec.js";let e,n,a,r,u,p,l,m=Promise.all([(()=>{try{return s}catch{}})()]).then(async()=>{a=function(t){return o.post({url:"/promotion/coupon-template/create",data:t})},l=function(t){return o.put({url:"/promotion/coupon-template/update",data:t})},n=function(t,i){const c={id:t,status:i};return o.put({url:"/promotion/coupon-template/update-status",data:c})},r=function(t){return o.delete({url:"/promotion/coupon-template/delete?id="+t})},e=function(t){return o.get({url:"/promotion/coupon-template/get?id="+t})},p=function(t){return o.get({url:"/promotion/coupon-template/page",params:t})},u=function(t){return o.get({url:`/promotion/coupon-template/list?ids=${t}`})}});export{m as __tla,e as a,n as b,a as c,r as d,u as e,p as g,l as u};
