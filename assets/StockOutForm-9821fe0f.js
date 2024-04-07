import{ao as i,d as $,k as H,r as d,n as J,Y as Q,o as n,q as v,e as t,a as e,h as T,a0 as W,b as a,w as ee,c as ae,F as te,g as le,j as C,L as ue,y as oe,a9 as se,z as re,s as de,x as ie,ab as me,C as ce,l as pe,m as _e,B as ne,v as fe,_ as ve,__tla as ke}from"./index-aaa5adb3.js";import{_ as ye,__tla as be}from"./Dialog-9a73a39c.js";import{_ as we,__tla as Ve}from"./ContentWrap-04d7f6d1.js";import{_ as Se,__tla as ge}from"./UploadFile-31413487.js";import he,{__tla as Oe}from"./StockOutItemForm-0e9912fe.js";import{C as Ue,__tla as xe}from"./index-b5d33a28.js";import{u as Fe,__tla as Ie}from"./useMessage-873da1e2.js";let g,f,P,Te=Promise.all([(()=>{try{return ke}catch{}})(),(()=>{try{return be}catch{}})(),(()=>{try{return Ve}catch{}})(),(()=>{try{return ge}catch{}})(),(()=>{try{return Oe}catch{}})(),(()=>{try{return xe}catch{}})(),(()=>{try{return Ie}catch{}})()]).then(async()=>{f={getStockOutPage:async s=>await i.get({url:"/erp/stock-out/page",params:s}),getStockOut:async s=>await i.get({url:"/erp/stock-out/get?id="+s}),createStockOut:async s=>await i.post({url:"/erp/stock-out/create",data:s}),updateStockOut:async s=>await i.put({url:"/erp/stock-out/update",data:s}),updateStockOutStatus:async(s,k)=>await i.put({url:"/erp/stock-out/update-status",params:{id:s,status:k}}),deleteStockOut:async s=>await i.delete({url:"/erp/stock-out/delete",params:{ids:s.join(",")}}),exportStockOut:async s=>await i.download({url:"/erp/stock-out/export-excel",params:s})},g=ve($({name:"StockOutForm",__name:"StockOutForm",emits:["success"],setup(s,{expose:k,emit:j}){const{t:y}=H(),h=Fe(),m=d(!1),O=d(""),c=d(!1),b=d(""),o=d({id:void 0,customerId:void 0,outTime:void 0,remark:void 0,fileUrl:"",items:[]}),R=J({outTime:[{required:!0,message:"\u51FA\u5E93\u65F6\u95F4\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),w=Q(()=>b.value==="detail"),V=d(),U=d([]),S=d("item"),x=d();k({open:async(r,l)=>{if(m.value=!0,O.value=y("action."+r),b.value=r,q(),l){c.value=!0;try{o.value=await f.getStockOut(l)}finally{c.value=!1}}U.value=await Ue.getCustomerSimpleList()}});const z=j,L=async()=>{await V.value.validate(),await x.value.validate(),c.value=!0;try{const r=o.value;b.value==="create"?(await f.createStockOut(r),h.success(y("common.createSuccess"))):(await f.updateStockOut(r),h.success(y("common.updateSuccess"))),m.value=!1,z("success")}finally{c.value=!1}},q=()=>{var r;o.value={id:void 0,customerId:void 0,outTime:void 0,remark:void 0,fileUrl:void 0,items:[]},(r=V.value)==null||r.resetFields()};return(r,l)=>{const F=ue,p=oe,_=se,D=re,E=de,M=ie,Y=Se,A=me,B=ce,G=pe,K=_e,N=we,I=ne,X=ye,Z=fe;return n(),v(X,{title:e(O),modelValue:e(m),"onUpdate:modelValue":l[7]||(l[7]=u=>C(m)?m.value=u:null),width:"1080"},{footer:t(()=>[e(w)?W("",!0):(n(),v(I,{key:0,onClick:L,type:"primary",disabled:e(c)},{default:t(()=>[T(" \u786E \u5B9A ")]),_:1},8,["disabled"])),a(I,{onClick:l[6]||(l[6]=u=>m.value=!1)},{default:t(()=>[T("\u53D6 \u6D88")]),_:1})]),default:t(()=>[ee((n(),v(B,{ref_key:"formRef",ref:V,model:e(o),rules:e(R),"label-width":"100px",disabled:e(w)},{default:t(()=>[a(A,{gutter:20},{default:t(()=>[a(_,{span:8},{default:t(()=>[a(p,{label:"\u51FA\u5E93\u5355\u53F7",prop:"no"},{default:t(()=>[a(F,{disabled:"",modelValue:e(o).no,"onUpdate:modelValue":l[0]||(l[0]=u=>e(o).no=u),placeholder:"\u4FDD\u5B58\u65F6\u81EA\u52A8\u751F\u6210"},null,8,["modelValue"])]),_:1})]),_:1}),a(_,{span:8},{default:t(()=>[a(p,{label:"\u51FA\u5E93\u65F6\u95F4",prop:"outTime"},{default:t(()=>[a(D,{modelValue:e(o).outTime,"onUpdate:modelValue":l[1]||(l[1]=u=>e(o).outTime=u),type:"date","value-format":"x",placeholder:"\u9009\u62E9\u51FA\u5E93\u65F6\u95F4",class:"!w-1/1"},null,8,["modelValue"])]),_:1})]),_:1}),a(_,{span:8},{default:t(()=>[a(p,{label:"\u5BA2\u6237",prop:"customerId"},{default:t(()=>[a(M,{modelValue:e(o).customerId,"onUpdate:modelValue":l[2]||(l[2]=u=>e(o).customerId=u),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u5BA2\u6237",class:"!w-1/1"},{default:t(()=>[(n(!0),ae(te,null,le(e(U),u=>(n(),v(E,{key:u.id,label:u.name,value:u.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(_,{span:16},{default:t(()=>[a(p,{label:"\u5907\u6CE8",prop:"remark"},{default:t(()=>[a(F,{type:"textarea",modelValue:e(o).remark,"onUpdate:modelValue":l[3]||(l[3]=u=>e(o).remark=u),rows:1,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1}),a(_,{span:8},{default:t(()=>[a(p,{label:"\u9644\u4EF6",prop:"fileUrl"},{default:t(()=>[a(Y,{"is-show-tip":!1,modelValue:e(o).fileUrl,"onUpdate:modelValue":l[4]||(l[4]=u=>e(o).fileUrl=u),limit:1},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules","disabled"])),[[Z,e(c)]]),a(N,null,{default:t(()=>[a(K,{modelValue:e(S),"onUpdate:modelValue":l[5]||(l[5]=u=>C(S)?S.value=u:null),class:"-mt-15px -mb-10px"},{default:t(()=>[a(G,{label:"\u51FA\u5E93\u4EA7\u54C1\u6E05\u5355",name:"item"},{default:t(()=>[a(he,{ref_key:"itemFormRef",ref:x,items:e(o).items,disabled:e(w)},null,8,["items","disabled"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["title","modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/erp/stock/out/StockOutForm.vue"]]),P=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"}))});export{g as S,Te as __tla,f as a,P as b};
