import{d as M,i as N,r as d,e as O,o as c,v as _,w as s,f as i,a,h as v,x as T,c as j,F as B,q as I,t as L,l as Q,P as R,A as z,ah as G,ai as H,D as J,C as K,I as W,__tla as X}from"./index-d2088aec.js";import{_ as Y,__tla as Z}from"./Dialog.vue_vue_type_style_index_0_lang-4d2024bd.js";import{P as f,__tla as $}from"./index-3908e8f3.js";import{a as aa,D as ea,__tla as ta}from"./dict-999fbee6.js";import{C as la}from"./constants-99751ef9.js";import{u as sa,__tla as ua}from"./useMessage-c5990e2c.js";let V,ra=Promise.all([(()=>{try{return X}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return ta}catch{}})(),(()=>{try{return ua}catch{}})()]).then(async()=>{V=M({name:"ProductUnitForm",__name:"ProductUnitForm",emits:["success"],setup(oa,{expose:P,emit:g}){const{t:m}=N(),p=sa(),r=d(!1),y=d(""),o=d(!1),h=d(""),u=d({id:void 0,name:void 0,status:void 0}),w=O({name:[{required:!0,message:"\u5355\u4F4D\u540D\u5B57\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],status:[{required:!0,message:"\u5355\u4F4D\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),n=d();P({open:async(l,e)=>{if(r.value=!0,y.value=m("action."+l),h.value=l,F(),e){o.value=!0;try{u.value=await f.getProductUnit(e)}finally{o.value=!1}}}});const k=g,C=async()=>{await n.value.validate(),o.value=!0;try{const l=u.value;h.value==="create"?(await f.createProductUnit(l),p.success(m("common.createSuccess"))):(await f.updateProductUnit(l),p.success(m("common.updateSuccess"))),r.value=!1,k("success")}finally{o.value=!1}},F=()=>{var l;u.value={id:void 0,name:void 0,status:la.ENABLE},(l=n.value)==null||l.resetFields()};return(l,e)=>{const q=R,b=z,x=G,S=H,A=J,U=K,D=Y,E=W;return c(),_(D,{title:a(y),modelValue:a(r),"onUpdate:modelValue":e[3]||(e[3]=t=>Q(r)?r.value=t:null)},{footer:s(()=>[i(U,{onClick:C,type:"primary",disabled:a(o)},{default:s(()=>[v("\u786E \u5B9A")]),_:1},8,["disabled"]),i(U,{onClick:e[2]||(e[2]=t=>r.value=!1)},{default:s(()=>[v("\u53D6 \u6D88")]),_:1})]),default:s(()=>[T((c(),_(A,{ref_key:"formRef",ref:n,model:a(u),rules:a(w),"label-width":"100px"},{default:s(()=>[i(b,{label:"\u5355\u4F4D\u540D\u5B57",prop:"name"},{default:s(()=>[i(q,{modelValue:a(u).name,"onUpdate:modelValue":e[0]||(e[0]=t=>a(u).name=t),placeholder:"\u8BF7\u8F93\u5165\u5355\u4F4D\u540D\u5B57"},null,8,["modelValue"])]),_:1}),i(b,{label:"\u5355\u4F4D\u72B6\u6001",prop:"status"},{default:s(()=>[i(S,{modelValue:a(u).status,"onUpdate:modelValue":e[1]||(e[1]=t=>a(u).status=t)},{default:s(()=>[(c(!0),j(B,null,I(a(aa)(a(ea).COMMON_STATUS),t=>(c(),_(x,{key:t.value,label:t.value},{default:s(()=>[v(L(t.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[E,a(o)]])]),_:1},8,["title","modelValue"])}}})});export{V as _,ra as __tla};
