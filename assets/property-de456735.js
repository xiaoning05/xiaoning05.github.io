import{_ as Z,__tla as tt}from"./ComponentContainerProperty-b98a45ff.js";import{d as K,aW as et,ag as T,r as R,aS as L,o as c,c as d,g as N,F as U,q as A,R as at,av as O,f as l,a as o,a4 as Q,h as j,t as lt,_ as ot,v as rt,w as y,A as ut,b$ as st,D as _t,__tla as it}from"./index-d2088aec.js";import{_ as mt,__tla as ct}from"./index.vue_vue_type_script_setup_true_lang-b4e78940.js";import{_ as nt,__tla as pt}from"./UploadImg-c6bc4a21.js";import{_ as dt}from"./_plugin-vue_export-helper-1b428a4d.js";import{E as ht,__tla as ft}from"./el-text-6fbecde4.js";import{u as yt,__tla as vt}from"./util-7d23a6c6.js";import{__tla as bt}from"./index-b3b9087c.js";import"./color-f5b6e279.js";import{__tla as Vt}from"./index-82efac34.js";import{__tla as xt}from"./AppLinkSelectDialog.vue_vue_type_script_setup_true_lang-c267bb93.js";import{__tla as gt}from"./Dialog.vue_vue_type_style_index_0_lang-4d2024bd.js";import{__tla as wt}from"./ProductCategorySelect.vue_vue_type_script_setup_true_lang-23e40708.js";import{__tla as kt}from"./el-tree-select-284f702e.js";import"./tree-82bb3b99.js";import{__tla as Ut}from"./category-a03fb5e0.js";import{__tla as zt}from"./index-b484ae95.js";import{__tla as St}from"./el-image-viewer-6188d22b.js";import{__tla as Ct}from"./useUpload-53891715.js";import{__tla as Rt}from"./index-a70e1e2c.js";import{__tla as $t}from"./useMessage-c5990e2c.js";import{__tla as Mt}from"./Qrcode-56fe5f54.js";import{__tla as At}from"./Qrcode.vue_vue_type_style_index_0_scoped_8fc6cf2d_lang-7f5ce085.js";import{__tla as Bt}from"./IFrame.vue_vue_type_script_setup_true_lang-3aa821a7.js";import{__tla as Dt}from"./vuedraggable.umd-722d2117.js";import{__tla as Et}from"./el-collapse-item-df5fb7ce.js";let X,Tt=Promise.all([(()=>{try{return tt}catch{}})(),(()=>{try{return it}catch{}})(),(()=>{try{return ct}catch{}})(),(()=>{try{return pt}catch{}})(),(()=>{try{return ft}catch{}})(),(()=>{try{return vt}catch{}})(),(()=>{try{return bt}catch{}})(),(()=>{try{return Vt}catch{}})(),(()=>{try{return xt}catch{}})(),(()=>{try{return gt}catch{}})(),(()=>{try{return wt}catch{}})(),(()=>{try{return kt}catch{}})(),(()=>{try{return Ut}catch{}})(),(()=>{try{return zt}catch{}})(),(()=>{try{return St}catch{}})(),(()=>{try{return Ct}catch{}})(),(()=>{try{return Rt}catch{}})(),(()=>{try{return $t}catch{}})(),(()=>{try{return Mt}catch{}})(),(()=>{try{return At}catch{}})(),(()=>{try{return Bt}catch{}})(),(()=>{try{return Dt}catch{}})(),(()=>{try{return Et}catch{}})()]).then(async()=>{let B,q,P,F,H,I,W;B=(i,w)=>{const[u,s]=[i.x,w.x].sort(),[t,n]=[i.y,w.y].sort(),V=s+1,x=n+1;return{left:u,right:V,top:t,bottom:x,height:x-t,width:V-u}},q={class:"relative"},P={class:"cube-table"},F=["onClick","onMouseenter"],H=["onClick"],I=["onClick"],W=dt(K({name:"MagicCubeEditor",__name:"index",props:{modelValue:et().isRequired,rows:T.number.def(4),cols:T.number.def(4),cubeSize:T.number.def(75)},emits:["update:modelValue","hotAreaSelected"],setup(i,{emit:w}){const u=i,s=R([]);L(()=>[u.rows,u.cols],()=>{if(s.value=[],u.rows&&u.cols)for(let _=0;_<u.rows;_++){s.value[_]=[];for(let a=0;a<u.cols;a++)s.value[_].push({x:a,y:_,active:!1})}},{immediate:!0});const t=R([]);L(()=>u.modelValue,()=>t.value=u.modelValue||[],{immediate:!0});const n=R(),V=()=>!!n.value,x=w,r=()=>x("update:modelValue",t),z=R(-1),$=(_,a)=>{z.value=a,x("hotAreaSelected",_,a)};function k(){v((_,a,m)=>{m.active&&(m.active=!1)}),n.value=void 0}const v=_=>{for(let a=0;a<s.value.length;a++)for(let m=0;m<s.value[a].length;m++)_(a,m,s.value[a][m])};return(_,a)=>{const m=ot;return c(),d("div",q,[N("table",P,[N("tbody",null,[(c(!0),d(U,null,A(o(s),(p,e)=>(c(),d("tr",{key:e},[(c(!0),d(U,null,A(p,(b,h)=>(c(),d("td",{key:h,class:at(["cube",{active:b.active}]),style:O({width:`${i.cubeSize}px`,height:`${i.cubeSize}px`}),onClick:Y=>((D,E)=>{const S=s.value[D][E];if(!V())return n.value=S,void(n.value.active=!0);t.value.push(B(n.value,S)),k();let f=t.value.length-1;$(t.value[f],f),r()})(e,h),onMouseenter:Y=>((D,E)=>{if(!V())return;const S=B(n.value,s.value[D][E]);for(const G of t.value)if(g=S,(f=G).left<g.left+g.width&&f.left+f.width>g.left&&f.top<g.top+g.height&&f.height+f.top>g.top)return void k();var f,g;v((G,jt,J)=>{var C,M;J.active=(C=S,(M=J).x>=C.left&&M.x<C.right&&M.y>=C.top&&M.y<C.bottom)})})(e,h)},[l(m,{icon:"ep-plus"})],46,F))),128))]))),128))]),(c(!0),d(U,null,A(o(t),(p,e)=>(c(),d("div",{key:e,class:"hot-area",style:O({top:i.cubeSize*p.top+"px",left:i.cubeSize*p.left+"px",height:i.cubeSize*p.height+"px",width:i.cubeSize*p.width+"px"}),onClick:b=>$(p,e),onMouseover:k},[o(z)===e?(c(),d("div",{key:0,class:"btn-delete",onClick:b=>(h=>{t.value.splice(h,1),k(),r()})(e)},[l(m,{icon:"ep:circle-close-filled"})],8,I)):Q("",!0),j(" "+lt(`${p.width}\xD7${p.height}`),1)],44,H))),128))])])}}}),[["__scopeId","data-v-25f7ee46"]]),X=K({name:"MagicCubeProperty",__name:"property",props:{modelValue:{}},emits:["update:modelValue"],setup(i,{emit:w}){const u=i,s=w,{formData:t}=yt(u.modelValue,s),n=R(-1),V=(x,r)=>{n.value=r};return(x,r)=>{const z=ht,$=W,k=nt,v=ut,_=mt,a=st,m=_t,p=Z;return c(),rt(p,{modelValue:o(t).style,"onUpdate:modelValue":r[4]||(r[4]=e=>o(t).style=e)},{default:y(()=>[l(m,{"label-width":"80px",model:o(t),class:"m-t-8px"},{default:y(()=>[l(z,{tag:"p"},{default:y(()=>[j(" \u9B54\u65B9\u8BBE\u7F6E ")]),_:1}),l(z,{type:"info",size:"small"},{default:y(()=>[j(" \u6BCF\u683C\u5C3A\u5BF8187 * 187 ")]),_:1}),l($,{class:"m-y-16px",modelValue:o(t).list,"onUpdate:modelValue":r[0]||(r[0]=e=>o(t).list=e),rows:4,cols:4,onHotAreaSelected:V},null,8,["modelValue"]),(c(!0),d(U,null,A(o(t).list,(e,b)=>(c(),d(U,{key:b},[o(n)===b?(c(),d(U,{key:0},[l(v,{label:"\u4E0A\u4F20\u56FE\u7247",prop:`list[${b}].imgUrl`},{default:y(()=>[l(k,{modelValue:e.imgUrl,"onUpdate:modelValue":h=>e.imgUrl=h,height:"80px",width:"80px"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"]),l(v,{label:"\u94FE\u63A5",prop:`list[${b}].url`},{default:y(()=>[l(_,{modelValue:e.url,"onUpdate:modelValue":h=>e.url=h},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])],64)):Q("",!0)],64))),128)),l(v,{label:"\u4E0A\u5706\u89D2",prop:"borderRadiusTop"},{default:y(()=>[l(a,{modelValue:o(t).borderRadiusTop,"onUpdate:modelValue":r[1]||(r[1]=e=>o(t).borderRadiusTop=e),max:100,min:0,"show-input":"","input-size":"small","show-input-controls":!1},null,8,["modelValue"])]),_:1}),l(v,{label:"\u4E0B\u5706\u89D2",prop:"borderRadiusBottom"},{default:y(()=>[l(a,{modelValue:o(t).borderRadiusBottom,"onUpdate:modelValue":r[2]||(r[2]=e=>o(t).borderRadiusBottom=e),max:100,min:0,"show-input":"","input-size":"small","show-input-controls":!1},null,8,["modelValue"])]),_:1}),l(v,{label:"\u95F4\u9694",prop:"space"},{default:y(()=>[l(a,{modelValue:o(t).space,"onUpdate:modelValue":r[3]||(r[3]=e=>o(t).space=e),max:100,min:0,"show-input":"","input-size":"small","show-input-controls":!1},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])}}})});export{Tt as __tla,X as default};