import{_ as ct,__tla as mt}from"./ComponentContainerProperty-89afecd8.js";import{eA as ft,eB as ht,eC as dt,d as K,aU as yt,eD as vt,r as T,o as H,c as z,b as r,e as y,h as D,f as N,F as C,g as Q,a as m,at as tt,t as gt,j as wt,_ as xt,A as at,y as Vt,B as kt,__tla as Tt}from"./index-34f06ebd.js";import{_ as Ht,__tla as zt}from"./UploadImg-5952b4f4.js";import{E as Ut,__tla as bt}from"./el-text-b3569e32.js";import{u as Et,__tla as Dt}from"./util-db872c68.js";import{_ as Ct,__tla as It}from"./AppLinkSelectDialog.vue_vue_type_script_setup_true_lang-c589898d.js";import{_ as Pt,__tla as Lt}from"./Dialog.vue_vue_type_style_index_0_lang-08560286.js";import{E as Xt,__tla as Ft}from"./el-image-a5cf0b35.js";import{__tla as Mt}from"./el-image-viewer-331eba6f.js";import{_ as et}from"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as Ot}from"./index-a0209353.js";import"./color-f5b6e279.js";import{__tla as Wt}from"./index-460c50ff.js";import{__tla as At}from"./index-9ab6e3b3.js";import{__tla as $t}from"./useUpload-76a6f89f.js";import{__tla as Gt}from"./index-176464f7.js";import{__tla as jt}from"./useMessage-7a5ab7ef.js";import{__tla as Bt}from"./Qrcode-3eed5dff.js";import{__tla as Rt}from"./Qrcode.vue_vue_type_style_index_0_scoped_8fc6cf2d_lang-d1da625a.js";import{__tla as Yt}from"./IFrame.vue_vue_type_script_setup_true_lang-abbc4198.js";import{__tla as Zt}from"./vuedraggable.umd-ced8efbb.js";import{__tla as St}from"./el-collapse-item-c051ca56.js";import{__tla as qt}from"./ProductCategorySelect.vue_vue_type_script_setup_true_lang-8a64f16a.js";import{__tla as Jt}from"./el-tree-select-45b5cb50.js";import"./tree-82bb3b99.js";import{__tla as Kt}from"./category-d1626b05.js";let lt,Nt=Promise.all([(()=>{try{return mt}catch{}})(),(()=>{try{return Tt}catch{}})(),(()=>{try{return zt}catch{}})(),(()=>{try{return bt}catch{}})(),(()=>{try{return Dt}catch{}})(),(()=>{try{return It}catch{}})(),(()=>{try{return Lt}catch{}})(),(()=>{try{return Ft}catch{}})(),(()=>{try{return Mt}catch{}})(),(()=>{try{return Ot}catch{}})(),(()=>{try{return Wt}catch{}})(),(()=>{try{return At}catch{}})(),(()=>{try{return $t}catch{}})(),(()=>{try{return Gt}catch{}})(),(()=>{try{return jt}catch{}})(),(()=>{try{return Bt}catch{}})(),(()=>{try{return Rt}catch{}})(),(()=>{try{return Yt}catch{}})(),(()=>{try{return Zt}catch{}})(),(()=>{try{return St}catch{}})(),(()=>{try{return qt}catch{}})(),(()=>{try{return Jt}catch{}})(),(()=>{try{return Kt}catch{}})()]).then(async()=>{var rt=Array.prototype.splice;function ot(a,f){var v=[];if(!a||!a.length)return v;var h=-1,l=[],s=a.length;for(f=dt(f);++h<s;){var n=a[h];f(n,h,a)&&(v.push(n),l.push(h))}return function(i,o){for(var p=i?o.length:0,g=p-1;p--;){var u=o[p];if(p==g||u!==U){var U=u;ft(u)?rt.call(i,u,1):ht(i,u)}}}(a,l),v}const E=100;var w=(a=>(a[a.LEFT=0]="LEFT",a[a.TOP=1]="TOP",a[a.WIDTH=2]="WIDTH",a[a.HEIGHT=3]="HEIGHT",a))(w||{});let A,I,$,G,j,B;A=[{position:"\u5DE6\u4E0A\u89D2",types:[0,1,2,3],style:{left:"-5px",top:"-5px",cursor:"nwse-resize"}},{position:"\u4E0A\u65B9\u4E2D\u95F4",types:[1,3],style:{left:"50%",top:"-5px",cursor:"n-resize",transform:"translateX(-50%)"}},{position:"\u53F3\u4E0A\u89D2",types:[1,2,3],style:{right:"-5px",top:"-5px",cursor:"nesw-resize"}},{position:"\u53F3\u4FA7\u4E2D\u95F4",types:[2],style:{right:"-5px",top:"50%",cursor:"e-resize",transform:"translateX(-50%)"}},{position:"\u53F3\u4E0B\u89D2",types:[2,3],style:{right:"-5px",bottom:"-5px",cursor:"nwse-resize"}},{position:"\u4E0B\u65B9\u4E2D\u95F4",types:[3],style:{left:"50%",bottom:"-5px",cursor:"s-resize",transform:"translateX(-50%)"}},{position:"\u5DE6\u4E0B\u89D2",types:[0,2,3],style:{left:"-5px",bottom:"-5px",cursor:"nesw-resize"}},{position:"\u5DE6\u4FA7\u4E2D\u95F4",types:[0,2],style:{left:"-5px",top:"50%",cursor:"w-resize",transform:"translateX(-50%)"}}],I=(a,f,v)=>{f.stopPropagation();const{clientX:h,clientY:l}=f,{left:s,top:n,width:i,height:o}=a;document.onmousemove=p=>{const g=p.clientX-h,u=p.clientY-l;v(s,n,i,o,g,u)},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}},$=["onMousedown","onDblclick"],G={class:"pointer-events-none select-none"},j=["onMousedown"],B=et(K({name:"HotZoneEditDialog",__name:"index",props:{modelValue:yt(),imgUrl:vt().def("")},emits:["update:modelValue"],setup(a,{expose:f,emit:v}){const h=a,l=v,s=T([]),n=T(!1);f({open:()=>{var e;s.value=(e=h.modelValue,(e==null?void 0:e.map(t=>({...t,left:t.left*=2,top:t.top*=2,width:t.width*=2,height:t.height*=2})))||[]),n.value=!0}});const i=T(),o=()=>{s.value.push({width:E,height:E,top:0,left:0})},p=(e,t)=>{t>=0&&t<=i.value.offsetWidth-e.width&&(e.left=t)},g=(e,t)=>{t>=0&&t<=i.value.offsetHeight-e.height&&(e.top=t)},u=(e,t)=>{t>=E&&e.left+t<=i.value.offsetWidth&&(e.width=t)},U=(e,t)=>{t>=E&&e.top+t<=i.value.offsetHeight&&(e.height=t)},P=()=>{n.value=!1},L=()=>{const e=(t=>(t==null?void 0:t.map(x=>({...x,left:x.left/=2,top:x.top/=2,width:x.width/=2,height:x.height/=2})))||[])(s.value);l("update:modelValue",e)},d=T(),R=T(),st=e=>{e&&d.value&&(d.value.name=e.name,d.value.url=e.path)};return(e,t)=>{const x=Xt,X=xt,Y=at,nt=Pt,it=Ct;return H(),z(C,null,[r(nt,{modelValue:m(n),"onUpdate:modelValue":t[0]||(t[0]=c=>wt(n)?n.value=c:null),title:"\u8BBE\u7F6E\u70ED\u533A",width:"780",onClose:L},{footer:y(()=>[r(Y,{onClick:o,type:"primary",plain:""},{default:y(()=>[r(X,{icon:"ep:plus",class:"mr-5px"}),D(" \u6DFB\u52A0\u70ED\u533A ")]),_:1}),r(Y,{onClick:P,type:"primary",plain:""},{default:y(()=>[r(X,{icon:"ep:check",class:"mr-5px"}),D(" \u786E\u5B9A ")]),_:1})]),default:y(()=>[N("div",{ref_key:"container",ref:i,class:"relative h-full w-750px"},[r(x,{src:a.imgUrl,class:"pointer-events-none h-full w-750px select-none"},null,8,["src"]),(H(!0),z(C,null,Q(m(s),(c,pt)=>(H(),z("div",{key:pt,class:"hot-zone",style:tt({width:`${c.width}px`,height:`${c.height}px`,top:`${c.top}px`,left:`${c.left}px`}),onMousedown:k=>((_,F)=>{I(_,F,(V,b,Z,S,M,O)=>{p(_,V+M),g(_,b+O)})})(c,k),onDblclick:k=>{return _=c,d.value=_,void R.value.open(_.url);var _}},[N("span",G,gt(c.name||"\u53CC\u51FB\u9009\u62E9\u94FE\u63A5"),1),r(X,{icon:"ep:close",class:"delete",size:14,onClick:k=>{return _=c,void ot(s.value,_);var _}},null,8,["onClick"]),(H(!0),z(C,null,Q(m(A),(k,_)=>(H(),z("span",{class:"ctrl-dot",key:_,style:tt(k.style),onMousedown:F=>((V,b,Z)=>{I(V,Z,(S,M,O,_t,q,J)=>{b.types.forEach(ut=>{switch(ut){case w.LEFT:p(V,S+q);break;case w.TOP:g(V,M+J);break;case w.WIDTH:{const W=b.types.includes(w.LEFT)?-1:1;u(V,O+q*W)}break;case w.HEIGHT:{const W=b.types.includes(w.TOP)?-1:1;U(V,_t+J*W)}}})})})(c,k,F)},null,44,j))),128))],44,$))),128))],512)]),_:1},8,["modelValue"]),r(it,{ref_key:"appLinkDialogRef",ref:R,onAppLinkChange:st},null,512)],64)}}}),[["__scopeId","data-v-87299d43"]]),lt=et(K({name:"HotZoneProperty",__name:"property",props:{modelValue:{}},emits:["update:modelValue"],setup(a,{emit:f}){const v=a,h=f,{formData:l}=Et(v.modelValue,h),s=T(),n=()=>{s.value.open()};return(i,o)=>{const p=Ut,g=Ht,u=Vt,U=kt,P=at,L=ct;return H(),z(C,null,[r(L,{modelValue:m(l).style,"onUpdate:modelValue":o[1]||(o[1]=d=>m(l).style=d)},{default:y(()=>[r(U,{"label-width":"80px",model:m(l),class:"m-t-8px"},{default:y(()=>[r(u,{label:"\u4E0A\u4F20\u56FE\u7247",prop:"imgUrl"},{default:y(()=>[r(g,{modelValue:m(l).imgUrl,"onUpdate:modelValue":o[0]||(o[0]=d=>m(l).imgUrl=d),height:"50px",width:"auto",class:"min-w-80px"},{tip:y(()=>[r(p,{type:"info",size:"small"},{default:y(()=>[D(" \u63A8\u8350\u5BBD\u5EA6 750")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"]),r(P,{type:"primary",plain:"",class:"w-full",onClick:n},{default:y(()=>[D(" \u8BBE\u7F6E\u70ED\u533A ")]),_:1})]),_:1},8,["modelValue"]),r(B,{ref_key:"editDialogRef",ref:s,modelValue:m(l).list,"onUpdate:modelValue":o[2]||(o[2]=d=>m(l).list=d),"img-url":m(l).imgUrl},null,8,["modelValue","img-url"])],64)}}}),[["__scopeId","data-v-601dfee5"]])});export{Nt as __tla,lt as default};
