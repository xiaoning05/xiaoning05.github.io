import{_ as ct,__tla as mt}from"./ComponentContainerProperty-176e798c.js";import{ey as ft,ez as ht,eA as dt,d as N,aW as yt,eB as vt,r as T,o as H,c as z,f as r,w as y,h as D,g as Q,F as C,q as S,a as m,av as tt,t as gt,l as wt,_ as xt,C as at,A as Vt,D as kt,__tla as Tt}from"./index-d5b00dc9.js";import{_ as Ht,__tla as zt}from"./UploadImg-b64c8ba7.js";import{E as bt,__tla as Et}from"./el-text-3f839333.js";import{u as Ut,__tla as Dt}from"./util-51a1c02c.js";import{_ as Ct,__tla as It}from"./AppLinkSelectDialog.vue_vue_type_script_setup_true_lang-8a51b9ea.js";import{_ as Pt,__tla as Lt}from"./Dialog.vue_vue_type_style_index_0_lang-03cf6454.js";import{E as Wt,__tla as Xt}from"./el-image-5f4cbc55.js";import{__tla as Ft}from"./el-image-viewer-96313bcd.js";import{_ as et}from"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as Mt}from"./index-1a3d747c.js";import"./color-f5b6e279.js";import{__tla as At}from"./index-bd0d9e6c.js";import{__tla as Ot}from"./index-2383b77d.js";import{__tla as $t}from"./useUpload-1b812415.js";import{__tla as Gt}from"./index-91a13e3d.js";import{__tla as qt}from"./useMessage-2288a5f2.js";import{__tla as jt}from"./Qrcode-40322773.js";import{__tla as Rt}from"./Qrcode.vue_vue_type_style_index_0_scoped_8fc6cf2d_lang-cc9cfa74.js";import{__tla as Yt}from"./IFrame.vue_vue_type_script_setup_true_lang-b745399c.js";import{__tla as Zt}from"./vuedraggable.umd-08ee5cad.js";import{__tla as Bt}from"./el-collapse-item-b89b6104.js";import{__tla as Jt}from"./ProductCategorySelect.vue_vue_type_script_setup_true_lang-770c7f50.js";import{__tla as Kt}from"./el-tree-select-8e562b9e.js";import"./tree-82bb3b99.js";import{__tla as Nt}from"./category-bb2b63fb.js";let lt,Qt=Promise.all([(()=>{try{return mt}catch{}})(),(()=>{try{return Tt}catch{}})(),(()=>{try{return zt}catch{}})(),(()=>{try{return Et}catch{}})(),(()=>{try{return Dt}catch{}})(),(()=>{try{return It}catch{}})(),(()=>{try{return Lt}catch{}})(),(()=>{try{return Xt}catch{}})(),(()=>{try{return Ft}catch{}})(),(()=>{try{return Mt}catch{}})(),(()=>{try{return At}catch{}})(),(()=>{try{return Ot}catch{}})(),(()=>{try{return $t}catch{}})(),(()=>{try{return Gt}catch{}})(),(()=>{try{return qt}catch{}})(),(()=>{try{return jt}catch{}})(),(()=>{try{return Rt}catch{}})(),(()=>{try{return Yt}catch{}})(),(()=>{try{return Zt}catch{}})(),(()=>{try{return Bt}catch{}})(),(()=>{try{return Jt}catch{}})(),(()=>{try{return Kt}catch{}})(),(()=>{try{return Nt}catch{}})()]).then(async()=>{var rt=Array.prototype.splice;function ot(a,f){var v=[];if(!a||!a.length)return v;var h=-1,l=[],s=a.length;for(f=dt(f);++h<s;){var n=a[h];f(n,h,a)&&(v.push(n),l.push(h))}return function(i,o){for(var p=i?o.length:0,g=p-1;p--;){var u=o[p];if(p==g||u!==b){var b=u;ft(u)?rt.call(i,u,1):ht(i,u)}}}(a,l),v}const U=100;var w=(a=>(a[a.LEFT=0]="LEFT",a[a.TOP=1]="TOP",a[a.WIDTH=2]="WIDTH",a[a.HEIGHT=3]="HEIGHT",a))(w||{});let O,I,$,G,q,j;O=[{position:"\u5DE6\u4E0A\u89D2",types:[0,1,2,3],style:{left:"-5px",top:"-5px",cursor:"nwse-resize"}},{position:"\u4E0A\u65B9\u4E2D\u95F4",types:[1,3],style:{left:"50%",top:"-5px",cursor:"n-resize",transform:"translateX(-50%)"}},{position:"\u53F3\u4E0A\u89D2",types:[1,2,3],style:{right:"-5px",top:"-5px",cursor:"nesw-resize"}},{position:"\u53F3\u4FA7\u4E2D\u95F4",types:[2],style:{right:"-5px",top:"50%",cursor:"e-resize",transform:"translateX(-50%)"}},{position:"\u53F3\u4E0B\u89D2",types:[2,3],style:{right:"-5px",bottom:"-5px",cursor:"nwse-resize"}},{position:"\u4E0B\u65B9\u4E2D\u95F4",types:[3],style:{left:"50%",bottom:"-5px",cursor:"s-resize",transform:"translateX(-50%)"}},{position:"\u5DE6\u4E0B\u89D2",types:[0,2,3],style:{left:"-5px",bottom:"-5px",cursor:"nesw-resize"}},{position:"\u5DE6\u4FA7\u4E2D\u95F4",types:[0,2],style:{left:"-5px",top:"50%",cursor:"w-resize",transform:"translateX(-50%)"}}],I=(a,f,v)=>{f.stopPropagation();const{clientX:h,clientY:l}=f,{left:s,top:n,width:i,height:o}=a;document.onmousemove=p=>{const g=p.clientX-h,u=p.clientY-l;v(s,n,i,o,g,u)},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}},$=["onMousedown","onDblclick"],G={class:"pointer-events-none select-none"},q=["onMousedown"],j=et(N({name:"HotZoneEditDialog",__name:"index",props:{modelValue:yt(),imgUrl:vt().def("")},emits:["update:modelValue"],setup(a,{expose:f,emit:v}){const h=a,l=v,s=T([]),n=T(!1);f({open:()=>{var e;s.value=(e=h.modelValue,(e==null?void 0:e.map(t=>({...t,left:t.left*=2,top:t.top*=2,width:t.width*=2,height:t.height*=2})))||[]),n.value=!0}});const i=T(),o=()=>{s.value.push({width:U,height:U,top:0,left:0})},p=(e,t)=>{t>=0&&t<=i.value.offsetWidth-e.width&&(e.left=t)},g=(e,t)=>{t>=0&&t<=i.value.offsetHeight-e.height&&(e.top=t)},u=(e,t)=>{t>=U&&e.left+t<=i.value.offsetWidth&&(e.width=t)},b=(e,t)=>{t>=U&&e.top+t<=i.value.offsetHeight&&(e.height=t)},P=()=>{n.value=!1},L=()=>{const e=(t=>(t==null?void 0:t.map(x=>({...x,left:x.left/=2,top:x.top/=2,width:x.width/=2,height:x.height/=2})))||[])(s.value);l("update:modelValue",e)},d=T(),R=T(),st=e=>{e&&d.value&&(d.value.name=e.name,d.value.url=e.path)};return(e,t)=>{const x=Wt,W=xt,Y=at,nt=Pt,it=Ct;return H(),z(C,null,[r(nt,{modelValue:m(n),"onUpdate:modelValue":t[0]||(t[0]=c=>wt(n)?n.value=c:null),title:"\u8BBE\u7F6E\u70ED\u533A",width:"780",onClose:L},{footer:y(()=>[r(Y,{onClick:o,type:"primary",plain:""},{default:y(()=>[r(W,{icon:"ep:plus",class:"mr-5px"}),D(" \u6DFB\u52A0\u70ED\u533A ")]),_:1}),r(Y,{onClick:P,type:"primary",plain:""},{default:y(()=>[r(W,{icon:"ep:check",class:"mr-5px"}),D(" \u786E\u5B9A ")]),_:1})]),default:y(()=>[Q("div",{ref_key:"container",ref:i,class:"relative h-full w-750px"},[r(x,{src:a.imgUrl,class:"pointer-events-none h-full w-750px select-none"},null,8,["src"]),(H(!0),z(C,null,S(m(s),(c,pt)=>(H(),z("div",{key:pt,class:"hot-zone",style:tt({width:`${c.width}px`,height:`${c.height}px`,top:`${c.top}px`,left:`${c.left}px`}),onMousedown:k=>((_,X)=>{I(_,X,(V,E,Z,B,F,M)=>{p(_,V+F),g(_,E+M)})})(c,k),onDblclick:k=>{return _=c,d.value=_,void R.value.open(_.url);var _}},[Q("span",G,gt(c.name||"\u53CC\u51FB\u9009\u62E9\u94FE\u63A5"),1),r(W,{icon:"ep:close",class:"delete",size:14,onClick:k=>{return _=c,void ot(s.value,_);var _}},null,8,["onClick"]),(H(!0),z(C,null,S(m(O),(k,_)=>(H(),z("span",{class:"ctrl-dot",key:_,style:tt(k.style),onMousedown:X=>((V,E,Z)=>{I(V,Z,(B,F,M,_t,J,K)=>{E.types.forEach(ut=>{switch(ut){case w.LEFT:p(V,B+J);break;case w.TOP:g(V,F+K);break;case w.WIDTH:{const A=E.types.includes(w.LEFT)?-1:1;u(V,M+J*A)}break;case w.HEIGHT:{const A=E.types.includes(w.TOP)?-1:1;b(V,_t+K*A)}}})})})(c,k,X)},null,44,q))),128))],44,$))),128))],512)]),_:1},8,["modelValue"]),r(it,{ref_key:"appLinkDialogRef",ref:R,onAppLinkChange:st},null,512)],64)}}}),[["__scopeId","data-v-87299d43"]]),lt=et(N({name:"HotZoneProperty",__name:"property",props:{modelValue:{}},emits:["update:modelValue"],setup(a,{emit:f}){const v=a,h=f,{formData:l}=Ut(v.modelValue,h),s=T(),n=()=>{s.value.open()};return(i,o)=>{const p=bt,g=Ht,u=Vt,b=kt,P=at,L=ct;return H(),z(C,null,[r(L,{modelValue:m(l).style,"onUpdate:modelValue":o[1]||(o[1]=d=>m(l).style=d)},{default:y(()=>[r(b,{"label-width":"80px",model:m(l),class:"m-t-8px"},{default:y(()=>[r(u,{label:"\u4E0A\u4F20\u56FE\u7247",prop:"imgUrl"},{default:y(()=>[r(g,{modelValue:m(l).imgUrl,"onUpdate:modelValue":o[0]||(o[0]=d=>m(l).imgUrl=d),height:"50px",width:"auto",class:"min-w-80px"},{tip:y(()=>[r(p,{type:"info",size:"small"},{default:y(()=>[D(" \u63A8\u8350\u5BBD\u5EA6 750")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"]),r(P,{type:"primary",plain:"",class:"w-full",onClick:n},{default:y(()=>[D(" \u8BBE\u7F6E\u70ED\u533A ")]),_:1})]),_:1},8,["modelValue"]),r(j,{ref_key:"editDialogRef",ref:s,modelValue:m(l).list,"onUpdate:modelValue":o[2]||(o[2]=d=>m(l).list=d),"img-url":m(l).imgUrl},null,8,["modelValue","img-url"])],64)}}}),[["__scopeId","data-v-601dfee5"]])});export{Qt as __tla,lt as default};
