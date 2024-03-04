import{d as R,i as T,r as m,e as B,o as i,v as _,w as u,f as r,a,h as b,x as j,c as h,F as S,q as U,t as z,l as H,P as Y,A as Q,y as G,z as J,ah as W,ai as X,D as Z,C as $,I as ee,__tla as ae}from"./index-d2088aec.js";import{_ as le,__tla as te}from"./Dialog.vue_vue_type_style_index_0_lang-4d2024bd.js";import{e as re,D as k,a as ue,__tla as se}from"./dict-999fbee6.js";import{g as oe,c as de,u as ce,__tla as me}from"./index-440430ea.js";import{C as A}from"./constants-99751ef9.js";import{u as ie,__tla as ne}from"./useMessage-c5990e2c.js";let C,pe=Promise.all([(()=>{try{return ae}catch{}})(),(()=>{try{return te}catch{}})(),(()=>{try{return se}catch{}})(),(()=>{try{return me}catch{}})(),(()=>{try{return ne}catch{}})()]).then(async()=>{C=R({name:"SystemSmsChannelForm",__name:"SmsChannelForm",emits:["success"],setup(_e,{expose:P,emit:w}){const{t:f}=T(),v=ie(),d=m(!1),y=m(""),c=m(!1),V=m(""),t=m({id:void 0,signature:"",code:"",status:A.ENABLE,remark:"",apiKey:"",apiSecret:"",callbackUrl:""}),E=B({signature:[{required:!0,message:"\u77ED\u4FE1\u7B7E\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],code:[{required:!0,message:"\u6E20\u9053\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],status:[{required:!0,message:"\u542F\u7528\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],apiKey:[{required:!0,message:"\u77ED\u4FE1 API \u7684\u8D26\u53F7\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),p=m();P({open:async(s,l)=>{if(d.value=!0,y.value=f("action."+s),V.value=s,L(),l){c.value=!0;try{t.value=await oe(l)}finally{c.value=!1}}}});const I=w,K=async()=>{if(p&&await p.value.validate()){c.value=!0;try{const s=t.value;V.value==="create"?(await de(s),v.success(f("common.createSuccess"))):(await ce(s),v.success(f("common.updateSuccess"))),d.value=!1,I("success")}finally{c.value=!1}}},L=()=>{var s;t.value={id:void 0,signature:"",code:"",status:A.ENABLE,remark:"",apiKey:"",apiSecret:"",callbackUrl:""},(s=p.value)==null||s.resetFields()};return(s,l)=>{const n=Y,o=Q,N=G,q=J,x=W,F=X,M=Z,g=$,D=le,O=ee;return i(),_(D,{modelValue:a(d),"onUpdate:modelValue":l[8]||(l[8]=e=>H(d)?d.value=e:null),title:a(y)},{footer:u(()=>[r(g,{disabled:a(c),type:"primary",onClick:K},{default:u(()=>[b("\u786E \u5B9A")]),_:1},8,["disabled"]),r(g,{onClick:l[7]||(l[7]=e=>d.value=!1)},{default:u(()=>[b("\u53D6 \u6D88")]),_:1})]),default:u(()=>[j((i(),_(M,{ref_key:"formRef",ref:p,model:a(t),rules:a(E),"label-width":"130px"},{default:u(()=>[r(o,{label:"\u77ED\u4FE1\u7B7E\u540D",prop:"signature"},{default:u(()=>[r(n,{modelValue:a(t).signature,"onUpdate:modelValue":l[0]||(l[0]=e=>a(t).signature=e),placeholder:"\u8BF7\u8F93\u5165\u77ED\u4FE1\u7B7E\u540D"},null,8,["modelValue"])]),_:1}),r(o,{label:"\u6E20\u9053\u7F16\u7801",prop:"code"},{default:u(()=>[r(q,{modelValue:a(t).code,"onUpdate:modelValue":l[1]||(l[1]=e=>a(t).code=e),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u6E20\u9053\u7F16\u7801"},{default:u(()=>[(i(!0),h(S,null,U(a(re)(a(k).SYSTEM_SMS_CHANNEL_CODE),e=>(i(),_(N,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(o,{label:"\u542F\u7528\u72B6\u6001"},{default:u(()=>[r(F,{modelValue:a(t).status,"onUpdate:modelValue":l[2]||(l[2]=e=>a(t).status=e)},{default:u(()=>[(i(!0),h(S,null,U(a(ue)(a(k).COMMON_STATUS),e=>(i(),_(x,{key:e.value,label:e.value},{default:u(()=>[b(z(e.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(o,{label:"\u5907\u6CE8",prop:"remark"},{default:u(()=>[r(n,{modelValue:a(t).remark,"onUpdate:modelValue":l[3]||(l[3]=e=>a(t).remark=e),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1}),r(o,{label:"\u77ED\u4FE1 API \u7684\u8D26\u53F7",prop:"apiKey"},{default:u(()=>[r(n,{modelValue:a(t).apiKey,"onUpdate:modelValue":l[4]||(l[4]=e=>a(t).apiKey=e),placeholder:"\u8BF7\u8F93\u5165\u77ED\u4FE1 API \u7684\u8D26\u53F7"},null,8,["modelValue"])]),_:1}),r(o,{label:"\u77ED\u4FE1 API \u7684\u5BC6\u94A5",prop:"apiSecret"},{default:u(()=>[r(n,{modelValue:a(t).apiSecret,"onUpdate:modelValue":l[5]||(l[5]=e=>a(t).apiSecret=e),placeholder:"\u8BF7\u8F93\u5165\u77ED\u4FE1 API \u7684\u5BC6\u94A5"},null,8,["modelValue"])]),_:1}),r(o,{label:"\u77ED\u4FE1\u53D1\u9001\u56DE\u8C03 URL",prop:"callbackUrl"},{default:u(()=>[r(n,{modelValue:a(t).callbackUrl,"onUpdate:modelValue":l[6]||(l[6]=e=>a(t).callbackUrl=e),placeholder:"\u8BF7\u8F93\u5165\u77ED\u4FE1\u53D1\u9001\u56DE\u8C03 URL"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[O,a(c)]])]),_:1},8,["modelValue","title"])}}})});export{C as _,pe as __tla};