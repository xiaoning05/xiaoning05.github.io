import{__tla as _}from"./SkuList-8302ad2f.js";let d,h=Promise.all([(()=>{try{return _}catch{}})()]).then(async()=>{d=t=>{var s;const e=[];return t.specType&&((s=t.skus)==null||s.forEach(i=>{var l;(l=i.properties)==null||l.forEach(({propertyId:r,propertyName:m,valueId:o,valueName:c})=>{var n,u;e!=null&&e.some(a=>a.id===r)||e.push({id:r,name:m,values:[]});const p=e==null?void 0:e.findIndex(a=>a.id===r);(n=e[p].values)!=null&&n.some(a=>a.id===o)||((u=e[p].values)==null||u.push({id:o,name:c}))})})),e}});export{h as __tla,d as g};
