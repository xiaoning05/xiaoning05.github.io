import{_ as tt,__tla as et}from"./ComponentContainerProperty-651422fa.js";import{d as F,aX as at,ah as T,r as M,aT as H,o as c,c as d,g as O,F as C,q as E,S as lt,aw as J,f as l,a as r,a5 as K,h as j,t as rt,C as ot,_ as L,v as ut,w as y,A as st,c2 as _t,G as it,__tla as mt}from"./index-f0743f71.js";import{_ as ct,__tla as nt}from"./index-2770ff46.js";import{_ as pt,__tla as dt}from"./UploadImg-aab03145.js";import{E as ht,__tla as ft}from"./el-text-60e0fe3f.js";import{u as yt,__tla as vt}from"./util-c67f257a.js";import{__tla as bt}from"./index-c494a973.js";import"./color-f5b6e279.js";import{__tla as Vt}from"./index-a48a5540.js";import{__tla as wt}from"./AppLinkSelectDialog-fd80c1ea.js";import{__tla as xt}from"./Dialog-8f786edd.js";import{__tla as gt}from"./ProductCategorySelect-46787ab5.js";import{__tla as Ut}from"./el-tree-select-d7a8a522.js";import"./tree-02f455f9.js";import{__tla as Ct}from"./category-7944548c.js";import{__tla as kt}from"./index-4baae72c.js";import{__tla as zt}from"./el-image-viewer-d97aa530.js";import{__tla as St}from"./useUpload-27a6f734.js";import{__tla as Mt}from"./index-21698e53.js";import{__tla as Rt}from"./useMessage-75a00a06.js";import{__tla as At}from"./Qrcode-be5e525d.js";import{__tla as Et}from"./Qrcode.vue_vue_type_style_index_0_scoped_573c75fe_lang-631e3371.js";import{__tla as $t}from"./IFrame-13ae3bdf.js";import{__tla as It}from"./vuedraggable.umd-f0c0a941.js";import{__tla as Dt}from"./el-collapse-item-c597cb54.js";let Q,Tt=Promise.all([(()=>{try{return et}catch{}})(),(()=>{try{return mt}catch{}})(),(()=>{try{return nt}catch{}})(),(()=>{try{return dt}catch{}})(),(()=>{try{return ft}catch{}})(),(()=>{try{return vt}catch{}})(),(()=>{try{return bt}catch{}})(),(()=>{try{return Vt}catch{}})(),(()=>{try{return wt}catch{}})(),(()=>{try{return xt}catch{}})(),(()=>{try{return gt}catch{}})(),(()=>{try{return Ut}catch{}})(),(()=>{try{return Ct}catch{}})(),(()=>{try{return kt}catch{}})(),(()=>{try{return zt}catch{}})(),(()=>{try{return St}catch{}})(),(()=>{try{return Mt}catch{}})(),(()=>{try{return Rt}catch{}})(),(()=>{try{return At}catch{}})(),(()=>{try{return Et}catch{}})(),(()=>{try{return $t}catch{}})(),(()=>{try{return It}catch{}})(),(()=>{try{return Dt}catch{}})()]).then(async()=>{let $,q,B,G,X,N,P;$=(i,g)=>{const[u,s]=[i.x,g.x].sort(),[t,n]=[i.y,g.y].sort(),V=s+1,w=n+1;return{left:u,right:V,top:t,bottom:w,height:w-t,width:V-u}},q={class:"relative"},B={class:"cube-table"},G=["onClick","onMouseenter"],X=["onClick"],N=["onClick"],P=L(F({name:"MagicCubeEditor",__name:"index",props:{modelValue:at().isRequired,rows:T.number.def(4),cols:T.number.def(4),cubeSize:T.number.def(75)},emits:["update:modelValue","hotAreaSelected"],setup(i,{emit:g}){const u=i,s=M([]);H(()=>[u.rows,u.cols],()=>{if(s.value=[],u.rows&&u.cols)for(let _=0;_<u.rows;_++){s.value[_]=[];for(let a=0;a<u.cols;a++)s.value[_].push({x:a,y:_,active:!1})}},{immediate:!0});const t=M([]);H(()=>u.modelValue,()=>t.value=u.modelValue||[],{immediate:!0});const n=M(),V=()=>!!n.value,w=g,o=()=>w("update:modelValue",t),k=M(-1),R=(_,a)=>{k.value=a,w("hotAreaSelected",_,a)};function U(){v((_,a,m)=>{m.active&&(m.active=!1)}),n.value=void 0}const v=_=>{for(let a=0;a<s.value.length;a++)for(let m=0;m<s.value[a].length;m++)_(a,m,s.value[a][m])};return(_,a)=>{const m=ot;return c(),d("div",q,[O("table",B,[O("tbody",null,[(c(!0),d(C,null,E(r(s),(p,e)=>(c(),d("tr",{key:e},[(c(!0),d(C,null,E(p,(b,h)=>(c(),d("td",{key:h,class:lt(["cube",{active:b.active}]),style:J({width:`${i.cubeSize}px`,height:`${i.cubeSize}px`}),onClick:W=>((I,D)=>{const z=s.value[I][D];if(!V())return n.value=z,void(n.value.active=!0);t.value.push($(n.value,z)),U();let f=t.value.length-1;R(t.value[f],f),o()})(e,h),onMouseenter:W=>((I,D)=>{if(!V())return;const z=$(n.value,s.value[I][D]);for(const Y of t.value)if(x=z,(f=Y).left<x.left+x.width&&f.left+f.width>x.left&&f.top<x.top+x.height&&f.height+f.top>x.top)return void U();var f,x;v((Y,jt,Z)=>{var S,A;Z.active=(S=z,(A=Z).x>=S.left&&A.x<S.right&&A.y>=S.top&&A.y<S.bottom)})})(e,h)},[l(m,{icon:"ep-plus"})],46,G))),128))]))),128))]),(c(!0),d(C,null,E(r(t),(p,e)=>(c(),d("div",{key:e,class:"hot-area",style:J({top:i.cubeSize*p.top+"px",left:i.cubeSize*p.left+"px",height:i.cubeSize*p.height+"px",width:i.cubeSize*p.width+"px"}),onClick:b=>R(p,e),onMouseover:U},[r(k)===e?(c(),d("div",{key:0,class:"btn-delete",onClick:b=>(h=>{t.value.splice(h,1),U(),o()})(e)},[l(m,{icon:"ep:circle-close-filled"})],8,N)):K("",!0),j(" "+rt(`${p.width}\xD7${p.height}`),1)],44,X))),128))])])}}}),[["__scopeId","data-v-d5b18453"],["__file","E:/newCode/GYZX-UI-ADMIN/src/components/MagicCubeEditor/index.vue"]]),Q=L(F({name:"MagicCubeProperty",__name:"property",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(i,{emit:g}){const u=i,s=g,{formData:t}=yt(u.modelValue,s),n=M(-1),V=(w,o)=>{n.value=o};return(w,o)=>{const k=ht,R=P,U=pt,v=st,_=ct,a=_t,m=it,p=tt;return c(),ut(p,{modelValue:r(t).style,"onUpdate:modelValue":o[4]||(o[4]=e=>r(t).style=e)},{default:y(()=>[l(m,{"label-width":"80px",model:r(t),class:"m-t-8px"},{default:y(()=>[l(k,{tag:"p"},{default:y(()=>[j(" \u9B54\u65B9\u8BBE\u7F6E ")]),_:1}),l(k,{type:"info",size:"small"},{default:y(()=>[j(" \u6BCF\u683C\u5C3A\u5BF8187 * 187 ")]),_:1}),l(R,{class:"m-y-16px",modelValue:r(t).list,"onUpdate:modelValue":o[0]||(o[0]=e=>r(t).list=e),rows:4,cols:4,onHotAreaSelected:V},null,8,["modelValue"]),(c(!0),d(C,null,E(r(t).list,(e,b)=>(c(),d(C,{key:b},[r(n)===b?(c(),d(C,{key:0},[l(v,{label:"\u4E0A\u4F20\u56FE\u7247",prop:`list[${b}].imgUrl`},{default:y(()=>[l(U,{modelValue:e.imgUrl,"onUpdate:modelValue":h=>e.imgUrl=h,height:"80px",width:"80px"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"]),l(v,{label:"\u94FE\u63A5",prop:`list[${b}].url`},{default:y(()=>[l(_,{modelValue:e.url,"onUpdate:modelValue":h=>e.url=h},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])],64)):K("",!0)],64))),128)),l(v,{label:"\u4E0A\u5706\u89D2",prop:"borderRadiusTop"},{default:y(()=>[l(a,{modelValue:r(t).borderRadiusTop,"onUpdate:modelValue":o[1]||(o[1]=e=>r(t).borderRadiusTop=e),max:100,min:0,"show-input":"","input-size":"small","show-input-controls":!1},null,8,["modelValue"])]),_:1}),l(v,{label:"\u4E0B\u5706\u89D2",prop:"borderRadiusBottom"},{default:y(()=>[l(a,{modelValue:r(t).borderRadiusBottom,"onUpdate:modelValue":o[2]||(o[2]=e=>r(t).borderRadiusBottom=e),max:100,min:0,"show-input":"","input-size":"small","show-input-controls":!1},null,8,["modelValue"])]),_:1}),l(v,{label:"\u95F4\u9694",prop:"space"},{default:y(()=>[l(a,{modelValue:r(t).space,"onUpdate:modelValue":o[3]||(o[3]=e=>r(t).space=e),max:100,min:0,"show-input":"","input-size":"small","show-input-controls":!1},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/components/DiyEditor/components/mobile/MagicCube/property.vue"]])});export{Tt as __tla,Q as default};