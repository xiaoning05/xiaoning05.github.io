import{r as l,al as i,a as d,__tla as h}from"./index-b079f499.js";let m,u=Promise.all([(()=>{try{return h}catch{}})()]).then(async()=>{m=r=>{const o=l(),c=l(),t=async()=>{await i();const a=d(o);return a||console.error("The form is not registered. Please use the register method to register"),a},n={setProps:async(a={})=>{const e=await t();e==null||e.setProps(a),a.model&&(e==null||e.setValues(a.model))},setValues:async a=>{const e=await t();e==null||e.setValues(a)},setSchema:async a=>{const e=await t();e==null||e.setSchema(a)},addSchema:async(a,e)=>{const s=await t();s==null||s.addSchema(a,e)},delSchema:async a=>{const e=await t();e==null||e.delSchema(a)},getFormData:async()=>{const a=await t();return a==null?void 0:a.formModel}};return r&&n.setProps(r),{register:(a,e)=>{o.value=a,c.value=e},elFormRef:c,methods:n}}});export{u as __tla,m as u};