import{r as l,am as d,a as i,__tla as u}from"./index-d5b00dc9.js";let m,h=Promise.all([(()=>{try{return u}catch{}})()]).then(async()=>{m=c=>{const o=l(),r=l(),e=async()=>(await d(),i(o)),n={setProps:async(t={})=>{const a=await e();a==null||a.setProps(t),t.model&&(a==null||a.setValues(t.model))},setValues:async t=>{const a=await e();a==null||a.setValues(t)},setSchema:async t=>{const a=await e();a==null||a.setSchema(t)},addSchema:async(t,a)=>{const s=await e();s==null||s.addSchema(t,a)},delSchema:async t=>{const a=await e();a==null||a.delSchema(t)},getFormData:async()=>{const t=await e();return t==null?void 0:t.formModel}};return c&&n.setProps(c),{register:(t,a)=>{o.value=t,r.value=a},elFormRef:r,methods:n}}});export{h as __tla,m as u};
