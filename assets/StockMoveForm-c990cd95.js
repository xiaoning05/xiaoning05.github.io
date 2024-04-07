import{ao as m,d as W,k as X,r as d,n as Z,Y as H,o as S,q as V,e as l,a as e,h as I,a0 as J,b as a,w as K,j as C,L as Q,y as $,a9 as ee,z as ae,ab as te,C as le,l as oe,m as se,B as re,v as ue,_ as de,__tla as me}from"./index-aaa5adb3.js";import{_ as ie,__tla as ce}from"./Dialog-9a73a39c.js";import{_ as pe,__tla as ne}from"./ContentWrap-04d7f6d1.js";import{_ as ve,__tla as _e}from"./UploadFile-31413487.js";import fe,{__tla as ke}from"./StockMoveItemForm-6ce76ff6.js";import{u as ye,__tla as be}from"./useMessage-873da1e2.js";let M,p,F,we=Promise.all([(()=>{try{return me}catch{}})(),(()=>{try{return ce}catch{}})(),(()=>{try{return ne}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return ke}catch{}})(),(()=>{try{return be}catch{}})()]).then(async()=>{p={getStockMovePage:async o=>await m.get({url:"/erp/stock-move/page",params:o}),getStockMove:async o=>await m.get({url:"/erp/stock-move/get?id="+o}),createStockMove:async o=>await m.post({url:"/erp/stock-move/create",data:o}),updateStockMove:async o=>await m.put({url:"/erp/stock-move/update",data:o}),updateStockMoveStatus:async(o,_)=>await m.put({url:"/erp/stock-move/update-status",params:{id:o,status:_}}),deleteStockMove:async o=>await m.delete({url:"/erp/stock-move/delete",params:{ids:o.join(",")}}),exportStockMove:async o=>await m.download({url:"/erp/stock-move/export-excel",params:o})},M=de(W({name:"StockMoveForm",__name:"StockMoveForm",emits:["success"],setup(o,{expose:_,emit:j}){const{t:f}=X(),g=ye(),i=d(!1),h=d(""),c=d(!1),k=d(""),s=d({id:void 0,customerId:void 0,moveTime:void 0,remark:void 0,fileUrl:"",items:[]}),q=Z({moveTime:[{required:!0,message:"\u8C03\u5EA6\u65F6\u95F4\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),y=H(()=>k.value==="detail"),b=d(),w=d("item"),U=d();_({open:async(u,t)=>{if(i.value=!0,h.value=f("action."+u),k.value=u,L(),t){c.value=!0;try{s.value=await p.getStockMove(t)}finally{c.value=!1}}}});const P=j,z=async()=>{await b.value.validate(),await U.value.validate(),c.value=!0;try{const u=s.value;k.value==="create"?(await p.createStockMove(u),g.success(f("common.createSuccess"))):(await p.updateStockMove(u),g.success(f("common.updateSuccess"))),i.value=!1,P("success")}finally{c.value=!1}},L=()=>{var u;s.value={id:void 0,customerId:void 0,moveTime:void 0,remark:void 0,fileUrl:void 0,items:[]},(u=b.value)==null||u.resetFields()};return(u,t)=>{const x=Q,n=$,v=ee,O=ae,R=ve,Y=te,A=le,B=oe,D=se,E=pe,T=re,G=ie,N=ue;return S(),V(G,{title:e(h),modelValue:e(i),"onUpdate:modelValue":t[6]||(t[6]=r=>C(i)?i.value=r:null),width:"1080"},{footer:l(()=>[e(y)?J("",!0):(S(),V(T,{key:0,onClick:z,type:"primary",disabled:e(c)},{default:l(()=>[I(" \u786E \u5B9A ")]),_:1},8,["disabled"])),a(T,{onClick:t[5]||(t[5]=r=>i.value=!1)},{default:l(()=>[I("\u53D6 \u6D88")]),_:1})]),default:l(()=>[K((S(),V(A,{ref_key:"formRef",ref:b,model:e(s),rules:e(q),"label-width":"100px",disabled:e(y)},{default:l(()=>[a(Y,{gutter:20},{default:l(()=>[a(v,{span:8},{default:l(()=>[a(n,{label:"\u8C03\u5EA6\u5355\u53F7",prop:"no"},{default:l(()=>[a(x,{disabled:"",modelValue:e(s).no,"onUpdate:modelValue":t[0]||(t[0]=r=>e(s).no=r),placeholder:"\u4FDD\u5B58\u65F6\u81EA\u52A8\u751F\u6210"},null,8,["modelValue"])]),_:1})]),_:1}),a(v,{span:8},{default:l(()=>[a(n,{label:"\u8C03\u5EA6\u65F6\u95F4",prop:"moveTime"},{default:l(()=>[a(O,{modelValue:e(s).moveTime,"onUpdate:modelValue":t[1]||(t[1]=r=>e(s).moveTime=r),type:"date","value-format":"x",placeholder:"\u9009\u62E9\u8C03\u5EA6\u65F6\u95F4",class:"!w-1/1"},null,8,["modelValue"])]),_:1})]),_:1}),a(v,{span:16},{default:l(()=>[a(n,{label:"\u5907\u6CE8",prop:"remark"},{default:l(()=>[a(x,{type:"textarea",modelValue:e(s).remark,"onUpdate:modelValue":t[2]||(t[2]=r=>e(s).remark=r),rows:1,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1}),a(v,{span:8},{default:l(()=>[a(n,{label:"\u9644\u4EF6",prop:"fileUrl"},{default:l(()=>[a(R,{"is-show-tip":!1,modelValue:e(s).fileUrl,"onUpdate:modelValue":t[3]||(t[3]=r=>e(s).fileUrl=r),limit:1},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules","disabled"])),[[N,e(c)]]),a(E,null,{default:l(()=>[a(D,{modelValue:e(w),"onUpdate:modelValue":t[4]||(t[4]=r=>C(w)?w.value=r:null),class:"-mt-15px -mb-10px"},{default:l(()=>[a(B,{label:"\u8C03\u5EA6\u4EA7\u54C1\u6E05\u5355",name:"item"},{default:l(()=>[a(fe,{ref_key:"itemFormRef",ref:U,items:e(s).items,disabled:e(y)},null,8,["items","disabled"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["title","modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/erp/stock/move/StockMoveForm.vue"]]),F=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}))});export{M as S,we as __tla,p as a,F as b};