import{d as S,r as c,e as A,o as V,v as b,w as u,f as o,h,a,x as D,l as j,i as E,P as R,A as z,D as B,C as G,I as H,__tla as J}from"./index-d2088aec.js";import{_ as K,__tla as L}from"./Dialog.vue_vue_type_style_index_0_lang-4d2024bd.js";import{e as M,c as N,u as O,__tla as Q}from"./property-ff4fbfd2.js";import{u as T,__tla as W}from"./useMessage-c5990e2c.js";let k,X=Promise.all([(()=>{try{return J}catch{}})(),(()=>{try{return L}catch{}})(),(()=>{try{return Q}catch{}})(),(()=>{try{return W}catch{}})()]).then(async()=>{k=S({name:"ProductPropertyValueForm",__name:"ValueForm",emits:["success"],setup(Y,{expose:g,emit:w}){const{t:n}=E(),_=T(),s=c(!1),v=c(""),d=c(!1),y=c(""),l=c({id:void 0,propertyId:void 0,name:"",remark:""}),I=A({propertyId:[{required:!0,message:"\u5C5E\u6027\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],name:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),i=c();g({open:async(r,e,m)=>{if(s.value=!0,v.value=n("action."+r),y.value=r,U(),l.value.propertyId=e,m){d.value=!0;try{l.value=await M(m)}finally{d.value=!1}}}});const x=w,P=async()=>{if(i&&await i.value.validate()){d.value=!0;try{const r=l.value;y.value==="create"?(await N(r),_.success(n("common.createSuccess"))):(await O(r),_.success(n("common.updateSuccess"))),s.value=!1,x("success")}finally{d.value=!1}}},U=()=>{var r;l.value={id:void 0,propertyId:void 0,name:"",remark:""},(r=i.value)==null||r.resetFields()};return(r,e)=>{const m=R,p=z,C=B,f=G,F=K,q=H;return V(),b(F,{modelValue:a(s),"onUpdate:modelValue":e[4]||(e[4]=t=>j(s)?s.value=t:null),title:a(v)},{footer:u(()=>[o(f,{disabled:a(d),type:"primary",onClick:P},{default:u(()=>[h("\u786E \u5B9A")]),_:1},8,["disabled"]),o(f,{onClick:e[3]||(e[3]=t=>s.value=!1)},{default:u(()=>[h("\u53D6 \u6D88")]),_:1})]),default:u(()=>[D((V(),b(C,{ref_key:"formRef",ref:i,model:a(l),rules:a(I),"label-width":"80px"},{default:u(()=>[o(p,{label:"\u5C5E\u6027\u7F16\u53F7",prop:"category"},{default:u(()=>[o(m,{modelValue:a(l).propertyId,"onUpdate:modelValue":e[0]||(e[0]=t=>a(l).propertyId=t),disabled:""},null,8,["modelValue"])]),_:1}),o(p,{label:"\u540D\u79F0",prop:"name"},{default:u(()=>[o(m,{modelValue:a(l).name,"onUpdate:modelValue":e[1]||(e[1]=t=>a(l).name=t),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),o(p,{label:"\u5907\u6CE8",prop:"remark"},{default:u(()=>[o(m,{modelValue:a(l).remark,"onUpdate:modelValue":e[2]||(e[2]=t=>a(l).remark=t),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[q,a(d)]])]),_:1},8,["modelValue","title"])}}})});export{k as _,X as __tla};