import{d as p,n as h,r as v,p as f,o as s,q as d,e as g,c as x,F as w,g as y,a as m,s as V,x as b,_ as A,__tla as C}from"./index-b079f499.js";import{f as I,__tla as U}from"./index-8bf5f476.js";let u,k=Promise.all([(()=>{try{return C}catch{}})(),(()=>{try{return U}catch{}})()]).then(async()=>{u=A(p({name:"WxAccountSelect",__name:"main",emits:["change"],setup(q,{emit:o}){const a=h({id:-1,name:""}),e=v([]),c=o,r=i=>{const l=e.value.find(t=>t.id===i);a.id&&(a.name=l?l.name:"",c("change",a.id,a.name))};return f(()=>{(async()=>(e.value=await I(),e.value.length>0&&(a.id=e.value[0].id,a.id&&(a.name=e.value[0].name,c("change",a.id,a.name)))))()}),(i,l)=>{const t=V,_=b;return s(),d(_,{modelValue:m(a).id,"onUpdate:modelValue":l[0]||(l[0]=n=>m(a).id=n),placeholder:"\u8BF7\u9009\u62E9\u516C\u4F17\u53F7",class:"!w-240px",onChange:r},{default:g(()=>[(s(!0),x(w,null,y(m(e),n=>(s(),d(t,{key:n.id,label:n.name,value:n.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mp/components/wx-account-select/main.vue"]])});export{k as __tla,u as default};
