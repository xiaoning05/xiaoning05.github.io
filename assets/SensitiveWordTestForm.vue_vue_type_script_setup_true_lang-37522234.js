import{d as U,r as d,n as A,o as _,q as m,e as t,b as u,a as l,h as y,w as C,c as T,F as W,g as B,j as R,K,y as P,s as z,x as D,B as E,A as G,v as H,__tla as I}from"./index-34f06ebd.js";import{_ as J,__tla as L}from"./Dialog.vue_vue_type_style_index_0_lang-08560286.js";import{a as M,v as N,__tla as O}from"./index-eb08fca5.js";import{u as Q,__tla as X}from"./useMessage-7a5ab7ef.js";let g,Y=Promise.all([(()=>{try{return I}catch{}})(),(()=>{try{return L}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return X}catch{}})()]).then(async()=>{g=U({name:"SystemSensitiveWordTestForm",__name:"SensitiveWordTestForm",setup(Z,{expose:h}){const c=Q(),r=d(!1),n=d(!1),s=d({text:"",tags:[]}),x=A({text:[{required:!0,message:"\u6D4B\u8BD5\u6587\u672C\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],tags:[{required:!0,message:"\u6807\u7B7E\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),i=d(),p=d([]);h({open:async()=>{r.value=!0,w(),p.value=await M()}});const b=async()=>{if(i&&await i.value.validate()){n.value=!0;try{const o=s.value,e=await N(o);if(e.length===0)return void c.success("\u4E0D\u5305\u542B\u654F\u611F\u8BCD\uFF01");c.warning("\u5305\u542B\u654F\u611F\u8BCD\uFF1A"+e.join(", ")),r.value=!1}finally{n.value=!1}}},w=()=>{var o;s.value={text:"",tags:[]},(o=i.value)==null||o.resetFields()};return(o,e)=>{const V=K,f=P,k=z,F=D,j=E,v=G,q=J,S=H;return _(),m(q,{modelValue:l(r),"onUpdate:modelValue":e[3]||(e[3]=a=>R(r)?r.value=a:null),title:"\u68C0\u6D4B\u654F\u611F\u8BCD"},{footer:t(()=>[u(v,{disabled:l(n),type:"primary",onClick:b},{default:t(()=>[y("\u68C0 \u6D4B")]),_:1},8,["disabled"]),u(v,{onClick:e[2]||(e[2]=a=>r.value=!1)},{default:t(()=>[y("\u53D6 \u6D88")]),_:1})]),default:t(()=>[C((_(),m(j,{ref_key:"formRef",ref:i,model:l(s),rules:l(x),"label-width":"80px"},{default:t(()=>[u(f,{label:"\u6587\u672C",prop:"text"},{default:t(()=>[u(V,{modelValue:l(s).text,"onUpdate:modelValue":e[0]||(e[0]=a=>l(s).text=a),placeholder:"\u8BF7\u8F93\u5165\u6D4B\u8BD5\u6587\u672C",type:"textarea"},null,8,["modelValue"])]),_:1}),u(f,{label:"\u6807\u7B7E",prop:"tags"},{default:t(()=>[u(F,{modelValue:l(s).tags,"onUpdate:modelValue":e[1]||(e[1]=a=>l(s).tags=a),"allow-create":"",filterable:"",multiple:"",placeholder:"\u8BF7\u9009\u62E9\u6807\u7B7E",style:{width:"380px"}},{default:t(()=>[(_(!0),T(W,null,B(l(p),a=>(_(),m(k,{key:a,label:a,value:a},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[S,l(n)]])]),_:1},8,["modelValue"])}}})});export{g as _,Y as __tla};
