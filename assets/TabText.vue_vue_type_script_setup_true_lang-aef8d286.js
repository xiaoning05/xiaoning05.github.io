import{d as n,a1 as p,o as _,v as V,a as c,l as i,P as h,__tla as x}from"./index-d2088aec.js";let o,y=Promise.all([(()=>{try{return x}catch{}})()]).then(async()=>{o=n({__name:"TabText",props:{modelValue:{}},emits:["update:modelValue","input"],setup(s,{emit:u}){const r=s,l=u,e=p({get:()=>r.modelValue,set:a=>{l("update:modelValue",a),l("input",a)}});return(a,t)=>{const d=h;return _(),V(d,{type:"textarea",rows:5,placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:c(e),"onUpdate:modelValue":t[0]||(t[0]=m=>i(e)?e.value=m:null)},null,8,["modelValue"])}}})});export{o as _,y as __tla};