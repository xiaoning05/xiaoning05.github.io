import{d,Y as m,o as _,q as i,a as c,j as V,L as x,_ as y,__tla as w}from"./index-b079f499.js";let o,T=Promise.all([(()=>{try{return w}catch{}})()]).then(async()=>{o=y(d({__name:"TabText",props:{modelValue:{type:[String,null],required:!1}},emits:["update:modelValue","input"],setup(s,{emit:u}){const n=s,a=u,e=m({get:()=>n.modelValue,set:t=>{a("update:modelValue",t),a("input",t)}});return(t,l)=>{const r=x;return _(),i(r,{type:"textarea",rows:5,placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:c(e),"onUpdate:modelValue":l[0]||(l[0]=p=>V(e)?e.value=p:null)},null,8,["modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mp/components/wx-reply/components/TabText.vue"]])});export{T as __tla,o as default};
