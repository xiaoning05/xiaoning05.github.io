import{_ as k,__tla as A}from"./ComponentContainerProperty-176e798c.js";import{d as D,r as $,p as q,o as _,v as m,w as r,f as e,a,c as F,F as L,q as N,g as w,h as j,a4 as G,y as H,z as M,A as Q,_ as Y,az as J,aA as K,ai as O,ad as S,$ as W,b$ as X,D as Z,__tla as ee}from"./index-d5b00dc9.js";import{_ as le,__tla as ae}from"./UploadImg-b64c8ba7.js";import{_ as te,__tla as oe}from"./index-1a3d747c.js";import{u as re,__tla as se}from"./util-51a1c02c.js";import{a as de,__tla as _e}from"./combinationActivity-ce4f69de.js";import{C as ue}from"./constants-99751ef9.js";import{E as me,__tla as pe}from"./index-bd0d9e6c.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as ne}from"./index-2383b77d.js";import{__tla as ie}from"./el-image-viewer-96313bcd.js";import{__tla as ce}from"./useUpload-1b812415.js";import{__tla as fe}from"./index-91a13e3d.js";import{__tla as he}from"./useMessage-2288a5f2.js";import"./color-f5b6e279.js";import{__tla as ye}from"./Dialog.vue_vue_type_style_index_0_lang-03cf6454.js";import{__tla as Ve}from"./Qrcode-40322773.js";import{__tla as be}from"./Qrcode.vue_vue_type_style_index_0_scoped_8fc6cf2d_lang-cc9cfa74.js";import{__tla as we}from"./el-text-3f839333.js";import{__tla as ge}from"./IFrame.vue_vue_type_script_setup_true_lang-b745399c.js";import{__tla as Ue}from"./vuedraggable.umd-08ee5cad.js";import{__tla as ve}from"./el-collapse-item-b89b6104.js";let g,xe=Promise.all([(()=>{try{return A}catch{}})(),(()=>{try{return ee}catch{}})(),(()=>{try{return ae}catch{}})(),(()=>{try{return oe}catch{}})(),(()=>{try{return se}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return pe}catch{}})(),(()=>{try{return ne}catch{}})(),(()=>{try{return ie}catch{}})(),(()=>{try{return ce}catch{}})(),(()=>{try{return fe}catch{}})(),(()=>{try{return he}catch{}})(),(()=>{try{return ye}catch{}})(),(()=>{try{return Ve}catch{}})(),(()=>{try{return be}catch{}})(),(()=>{try{return we}catch{}})(),(()=>{try{return ge}catch{}})(),(()=>{try{return Ue}catch{}})(),(()=>{try{return ve}catch{}})()]).then(async()=>{let p,n;p={class:"flex gap-8px"},n={class:"flex gap-8px"},g=D({name:"PromotionCombinationProperty",__name:"property",props:{modelValue:{}},emits:["update:modelValue"],setup(U,{emit:v}){const x=U,z=v,{formData:t}=re(x.modelValue,z),i=$([]);return q(async()=>{const{list:c}=await de({status:ue.ENABLE});i.value=c}),(c,o)=>{const R=H,B=M,s=Q,d=me,f=Y,h=J,y=K,T=O,V=te,b=S,C=W,E=le,u=X,I=Z,P=k;return _(),m(P,{modelValue:a(t).style,"onUpdate:modelValue":o[11]||(o[11]=l=>a(t).style=l)},{default:r(()=>[e(I,{"label-width":"80px",model:a(t)},{default:r(()=>[e(d,{header:"\u62FC\u56E2\u6D3B\u52A8",class:"property-group",shadow:"never"},{default:r(()=>[e(s,{label:"\u62FC\u56E2\u6D3B\u52A8",prop:"activityId"},{default:r(()=>[e(B,{modelValue:a(t).activityId,"onUpdate:modelValue":o[0]||(o[0]=l=>a(t).activityId=l)},{default:r(()=>[(_(!0),F(L,null,N(a(i),l=>(_(),m(R,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(d,{header:"\u5546\u54C1\u6837\u5F0F",class:"property-group",shadow:"never"},{default:r(()=>[e(s,{label:"\u5E03\u5C40",prop:"type"},{default:r(()=>[e(T,{modelValue:a(t).layoutType,"onUpdate:modelValue":o[1]||(o[1]=l=>a(t).layoutType=l)},{default:r(()=>[e(y,{class:"item",content:"\u5355\u5217",placement:"bottom"},{default:r(()=>[e(h,{label:"oneCol"},{default:r(()=>[e(f,{icon:"fluent:text-column-one-24-filled"})]),_:1})]),_:1}),e(y,{class:"item",content:"\u4E09\u5217",placement:"bottom"},{default:r(()=>[e(h,{label:"threeCol"},{default:r(()=>[e(f,{icon:"fluent:text-column-three-24-filled"})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"\u5546\u54C1\u540D\u79F0",prop:"fields.name.show"},{default:r(()=>[w("div",p,[e(V,{modelValue:a(t).fields.name.color,"onUpdate:modelValue":o[2]||(o[2]=l=>a(t).fields.name.color=l)},null,8,["modelValue"]),e(b,{modelValue:a(t).fields.name.show,"onUpdate:modelValue":o[3]||(o[3]=l=>a(t).fields.name.show=l)},null,8,["modelValue"])])]),_:1}),e(s,{label:"\u5546\u54C1\u4EF7\u683C",prop:"fields.price.show"},{default:r(()=>[w("div",n,[e(V,{modelValue:a(t).fields.price.color,"onUpdate:modelValue":o[4]||(o[4]=l=>a(t).fields.price.color=l)},null,8,["modelValue"]),e(b,{modelValue:a(t).fields.price.show,"onUpdate:modelValue":o[5]||(o[5]=l=>a(t).fields.price.show=l)},null,8,["modelValue"])])]),_:1})]),_:1}),e(d,{header:"\u89D2\u6807",class:"property-group",shadow:"never"},{default:r(()=>[e(s,{label:"\u89D2\u6807",prop:"badge.show"},{default:r(()=>[e(C,{modelValue:a(t).badge.show,"onUpdate:modelValue":o[6]||(o[6]=l=>a(t).badge.show=l)},null,8,["modelValue"])]),_:1}),a(t).badge.show?(_(),m(s,{key:0,label:"\u89D2\u6807",prop:"badge.imgUrl"},{default:r(()=>[e(E,{modelValue:a(t).badge.imgUrl,"onUpdate:modelValue":o[7]||(o[7]=l=>a(t).badge.imgUrl=l),height:"44px",width:"72px"},{tip:r(()=>[j(" \u5EFA\u8BAE\u5C3A\u5BF8\uFF1A36 * 22 ")]),_:1},8,["modelValue"])]),_:1})):G("",!0)]),_:1}),e(d,{header:"\u5546\u54C1\u6837\u5F0F",class:"property-group",shadow:"never"},{default:r(()=>[e(s,{label:"\u4E0A\u5706\u89D2",prop:"borderRadiusTop"},{default:r(()=>[e(u,{modelValue:a(t).borderRadiusTop,"onUpdate:modelValue":o[8]||(o[8]=l=>a(t).borderRadiusTop=l),max:100,min:0,"show-input":"","input-size":"small","show-input-controls":!1},null,8,["modelValue"])]),_:1}),e(s,{label:"\u4E0B\u5706\u89D2",prop:"borderRadiusBottom"},{default:r(()=>[e(u,{modelValue:a(t).borderRadiusBottom,"onUpdate:modelValue":o[9]||(o[9]=l=>a(t).borderRadiusBottom=l),max:100,min:0,"show-input":"","input-size":"small","show-input-controls":!1},null,8,["modelValue"])]),_:1}),e(s,{label:"\u95F4\u9694",prop:"space"},{default:r(()=>[e(u,{modelValue:a(t).space,"onUpdate:modelValue":o[10]||(o[10]=l=>a(t).space=l),max:100,min:0,"show-input":"","input-size":"small","show-input-controls":!1},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])}}})});export{xe as __tla,g as default};
