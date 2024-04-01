import{an as m,d as G,k as J,r as d,n as W,X as L,o as b,q as S,e as l,a as e,h as T,$ as N,b as a,w as O,j as F,K as Q,y as Y,a8 as Z,z as ee,aa as ae,B as te,l as le,m as oe,A as se,v as re,__tla as ue}from"./index-34f06ebd.js";import{_ as de,__tla as me}from"./Dialog.vue_vue_type_style_index_0_lang-08560286.js";import{_ as ie,__tla as ce}from"./ContentWrap.vue_vue_type_script_setup_true_lang-80915c85.js";import{_ as pe,__tla as ne}from"./UploadFile-ebcd7c2f.js";import{_ as ve,__tla as _e}from"./StockMoveItemForm.vue_vue_type_script_setup_true_lang-b8622256.js";import{u as fe,__tla as ke}from"./useMessage-7a5ab7ef.js";let p,q,ye=Promise.all([(()=>{try{return ue}catch{}})(),(()=>{try{return me}catch{}})(),(()=>{try{return ce}catch{}})(),(()=>{try{return ne}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return ke}catch{}})()]).then(async()=>{p={getStockMovePage:async o=>await m.get({url:"/erp/stock-move/page",params:o}),getStockMove:async o=>await m.get({url:"/erp/stock-move/get?id="+o}),createStockMove:async o=>await m.post({url:"/erp/stock-move/create",data:o}),updateStockMove:async o=>await m.put({url:"/erp/stock-move/update",data:o}),updateStockMoveStatus:async(o,_)=>await m.put({url:"/erp/stock-move/update-status",params:{id:o,status:_}}),deleteStockMove:async o=>await m.delete({url:"/erp/stock-move/delete",params:{ids:o.join(",")}}),exportStockMove:async o=>await m.download({url:"/erp/stock-move/export-excel",params:o})},q=G({name:"StockMoveForm",__name:"StockMoveForm",emits:["success"],setup(o,{expose:_,emit:C}){const{t:f}=J(),h=fe(),i=d(!1),g=d(""),c=d(!1),k=d(""),s=d({id:void 0,customerId:void 0,moveTime:void 0,remark:void 0,fileUrl:"",items:[]}),I=W({moveTime:[{required:!0,message:"\u8C03\u5EA6\u65F6\u95F4\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),y=L(()=>k.value==="detail"),w=d(),V=d("item"),M=d();_({open:async(u,t)=>{if(i.value=!0,g.value=f("action."+u),k.value=u,P(),t){c.value=!0;try{s.value=await p.getStockMove(t)}finally{c.value=!1}}}});const j=C,B=async()=>{await w.value.validate(),await M.value.validate(),c.value=!0;try{const u=s.value;k.value==="create"?(await p.createStockMove(u),h.success(f("common.createSuccess"))):(await p.updateStockMove(u),h.success(f("common.updateSuccess"))),i.value=!1,j("success")}finally{c.value=!1}},P=()=>{var u;s.value={id:void 0,customerId:void 0,moveTime:void 0,remark:void 0,fileUrl:void 0,items:[]},(u=w.value)==null||u.resetFields()};return(u,t)=>{const U=Q,n=Y,v=Z,R=ee,z=pe,A=ae,E=te,H=le,K=oe,X=ie,x=se,$=de,D=re;return b(),S($,{title:e(g),modelValue:e(i),"onUpdate:modelValue":t[6]||(t[6]=r=>F(i)?i.value=r:null),width:"1080"},{footer:l(()=>[e(y)?N("",!0):(b(),S(x,{key:0,onClick:B,type:"primary",disabled:e(c)},{default:l(()=>[T(" \u786E \u5B9A ")]),_:1},8,["disabled"])),a(x,{onClick:t[5]||(t[5]=r=>i.value=!1)},{default:l(()=>[T("\u53D6 \u6D88")]),_:1})]),default:l(()=>[O((b(),S(E,{ref_key:"formRef",ref:w,model:e(s),rules:e(I),"label-width":"100px",disabled:e(y)},{default:l(()=>[a(A,{gutter:20},{default:l(()=>[a(v,{span:8},{default:l(()=>[a(n,{label:"\u8C03\u5EA6\u5355\u53F7",prop:"no"},{default:l(()=>[a(U,{disabled:"",modelValue:e(s).no,"onUpdate:modelValue":t[0]||(t[0]=r=>e(s).no=r),placeholder:"\u4FDD\u5B58\u65F6\u81EA\u52A8\u751F\u6210"},null,8,["modelValue"])]),_:1})]),_:1}),a(v,{span:8},{default:l(()=>[a(n,{label:"\u8C03\u5EA6\u65F6\u95F4",prop:"moveTime"},{default:l(()=>[a(R,{modelValue:e(s).moveTime,"onUpdate:modelValue":t[1]||(t[1]=r=>e(s).moveTime=r),type:"date","value-format":"x",placeholder:"\u9009\u62E9\u8C03\u5EA6\u65F6\u95F4",class:"!w-1/1"},null,8,["modelValue"])]),_:1})]),_:1}),a(v,{span:16},{default:l(()=>[a(n,{label:"\u5907\u6CE8",prop:"remark"},{default:l(()=>[a(U,{type:"textarea",modelValue:e(s).remark,"onUpdate:modelValue":t[2]||(t[2]=r=>e(s).remark=r),rows:1,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1}),a(v,{span:8},{default:l(()=>[a(n,{label:"\u9644\u4EF6",prop:"fileUrl"},{default:l(()=>[a(z,{"is-show-tip":!1,modelValue:e(s).fileUrl,"onUpdate:modelValue":t[3]||(t[3]=r=>e(s).fileUrl=r),limit:1},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules","disabled"])),[[D,e(c)]]),a(X,null,{default:l(()=>[a(K,{modelValue:e(V),"onUpdate:modelValue":t[4]||(t[4]=r=>F(V)?V.value=r:null),class:"-mt-15px -mb-10px"},{default:l(()=>[a(H,{label:"\u8C03\u5EA6\u4EA7\u54C1\u6E05\u5355",name:"item"},{default:l(()=>[a(ve,{ref_key:"itemFormRef",ref:M,items:e(s).items,disabled:e(y)},null,8,["items","disabled"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["title","modelValue"])}}})});export{p as S,q as _,ye as __tla};
