import{d as F,ag as l,r as p,e as g,aS as d,o as w,v as j,w as c,a as t,D as x,f as m,dF as N,A as V,__tla as O}from"./index-d2088aec.js";import{_ as P,__tla as k}from"./style.css_vue_type_style_index_0_src_true_lang-40e2d3d3.js";import{u as A,__tla as R}from"./useMessage-c5990e2c.js";import{r as S,__tla as U}from"./formRules-fb12266a.js";let _,q=Promise.all([(()=>{try{return O}catch{}})(),(()=>{try{return k}catch{}})(),(()=>{try{return R}catch{}})(),(()=>{try{return U}catch{}})()]).then(async()=>{_=F({name:"ProductDescriptionForm",__name:"DescriptionForm",props:{propFormData:{type:Object,default:()=>{}},activeName:l.string.def(""),isDetail:l.bool.def(!1)},emits:["update:activeName"],setup(i,{expose:n,emit:u}){const f=A(),o=i,s=p(),e=p({description:""}),v=g({description:[S]});d(()=>e.value.description,a=>{a==="<p><br></p>"&&(e.value.description="")},{deep:!0,immediate:!0}),d(()=>o.propFormData,a=>{a&&N(e.value,a)},{immediate:!0});const y=u;return n({validate:async()=>{var a;if(s)try{await((a=t(s))==null?void 0:a.validate()),Object.assign(o.propFormData,e.value)}catch(r){throw f.error("\u3010\u5546\u54C1\u8BE6\u60C5\u3011\u4E0D\u5B8C\u5584\uFF0C\u8BF7\u586B\u5199\u76F8\u5173\u4FE1\u606F"),y("update:activeName","description"),r}}}),(a,r)=>{const b=V,D=x;return w(),j(D,{ref_key:"formRef",ref:s,model:t(e),rules:t(v),"label-width":"120px",disabled:i.isDetail},{default:c(()=>[m(b,{label:"\u5546\u54C1\u8BE6\u60C5",prop:"description"},{default:c(()=>[m(t(P),{modelValue:t(e).description,"onUpdate:modelValue":r[0]||(r[0]=h=>t(e).description=h)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules","disabled"])}}})});export{_,q as __tla};
