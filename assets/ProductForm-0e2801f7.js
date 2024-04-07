import{d as L,k as Z,r as i,ak as z,n as H,p as J,o as n,q as m,e as r,b as l,a,h as D,w as K,c as y,F as V,g as w,j as Q,at as W,dY as $,L as ee,y as ae,a9 as le,s as te,x as re,bY as se,bX as ue,ab as oe,C as de,B as ie,v as ne,_ as ce,__tla as pe}from"./index-aaa5adb3.js";import{_ as me,__tla as _e}from"./Dialog-9a73a39c.js";import{a as P,D as R,__tla as ve}from"./dict-f2796e71.js";import{a as fe,c as be,u as ge,__tla as ye}from"./index-b6c7d721.js";import{g as Ve,__tla as we}from"./index-e2b091c4.js";import{h as Ue,d as he}from"./tree-02f455f9.js";import{g as Ie,__tla as ke}from"./index-c1a6a53a.js";import{u as Ce,__tla as qe}from"./useMessage-873da1e2.js";let T,De=Promise.all([(()=>{try{return pe}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return ve}catch{}})(),(()=>{try{return ye}catch{}})(),(()=>{try{return we}catch{}})(),(()=>{try{return ke}catch{}})(),(()=>{try{return qe}catch{}})()]).then(async()=>{T=ce(L({name:"CrmProductForm",__name:"ProductForm",emits:["success"],setup(Pe,{expose:F,emit:N}){const{t:v}=Z(),U=Ce(),c=i(!1),h=i(""),p=i(!1),I=i(""),S=z().getUser.id,t=i({id:void 0,name:void 0,no:void 0,unit:void 0,price:NaN,status:void 0,categoryId:void 0,description:void 0,ownerUserId:-1}),x=H({name:[{required:!0,message:"\u4EA7\u54C1\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],no:[{required:!0,message:"\u4EA7\u54C1\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],status:[{required:!0,message:"\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],categoryId:[{required:!0,message:"\u4EA7\u54C1\u5206\u7C7BID\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],ownerUserId:[{required:!0,message:"\u8D1F\u8D23\u4EBA\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],price:[{required:!0,message:"\u4EF7\u683C\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),_=i();F({open:async(u,s)=>{if(c.value=!0,h.value=v("action."+u),I.value=u,A(),s){p.value=!0;try{t.value=await fe(s),t.value.price=Number(W(t.value.price))}finally{p.value=!1}}else t.value.ownerUserId=S}});const M=N,Y=async()=>{if(_&&await _.value.validate()){p.value=!0;try{const u={...t.value,price:$(t.value.price)};I.value==="create"?(await be(u),U.success(v("common.createSuccess"))):(await ge(u),U.success(v("common.updateSuccess"))),c.value=!1,M("success")}finally{p.value=!1}}},A=()=>{var u;t.value={id:void 0,name:void 0,no:void 0,unit:void 0,price:NaN,status:void 0,categoryId:void 0,description:void 0,ownerUserId:-1},(u=_.value)==null||u.resetFields()},k=i([]),C=i([]);return J(async()=>{const u=await Ve({});k.value=Ue(u,"id","parentId"),C.value=await Ie()}),(u,s)=>{const f=ee,o=ae,d=le,b=te,g=re,O=se,X=ue,j=oe,B=de,q=ie,E=me,G=ne;return n(),m(E,{title:a(h),modelValue:a(c),"onUpdate:modelValue":s[9]||(s[9]=e=>Q(c)?c.value=e:null)},{footer:r(()=>[l(q,{onClick:Y,type:"primary",disabled:a(p)},{default:r(()=>[D("\u786E \u5B9A")]),_:1},8,["disabled"]),l(q,{onClick:s[8]||(s[8]=e=>c.value=!1)},{default:r(()=>[D("\u53D6 \u6D88")]),_:1})]),default:r(()=>[K((n(),m(B,{ref_key:"formRef",ref:_,model:a(t),rules:a(x),"label-width":"100px"},{default:r(()=>[l(j,null,{default:r(()=>[l(d,{span:12},{default:r(()=>[l(o,{label:"\u4EA7\u54C1\u540D\u79F0",prop:"name"},{default:r(()=>[l(f,{modelValue:a(t).name,"onUpdate:modelValue":s[0]||(s[0]=e=>a(t).name=e),placeholder:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0"},null,8,["modelValue"])]),_:1})]),_:1}),l(d,{span:12},{default:r(()=>[l(o,{label:"\u8D1F\u8D23\u4EBA",prop:"ownerUserId"},{default:r(()=>[l(g,{modelValue:a(t).ownerUserId,"onUpdate:modelValue":s[1]||(s[1]=e=>a(t).ownerUserId=e),placeholder:"\u8BF7\u9009\u62E9\u8D1F\u8D23\u4EBA",disabled:a(t).id,class:"w-1/1"},{default:r(()=>[(n(!0),y(V,null,w(a(C),e=>(n(),m(b,{key:e.id,label:e.nickname,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1})]),_:1}),l(d,{span:12},{default:r(()=>[l(o,{label:"\u4EA7\u54C1\u7C7B\u578B",prop:"categoryId"},{default:r(()=>[l(O,{modelValue:a(t).categoryId,"onUpdate:modelValue":s[2]||(s[2]=e=>a(t).categoryId=e),options:a(k),props:a(he),class:"w-1/1",clearable:"",placeholder:"\u8BF7\u9009\u62E9\u4EA7\u54C1\u7C7B\u578B",filterable:""},null,8,["modelValue","options","props"])]),_:1})]),_:1}),l(d,{span:12},{default:r(()=>[l(o,{label:"\u4EA7\u54C1\u5355\u4F4D",prop:"unit"},{default:r(()=>[l(g,{modelValue:a(t).unit,"onUpdate:modelValue":s[3]||(s[3]=e=>a(t).unit=e),class:"w-1/1",placeholder:"\u8BF7\u9009\u62E9\u5355\u4F4D"},{default:r(()=>[(n(!0),y(V,null,w(a(P)(a(R).CRM_PRODUCT_UNIT),e=>(n(),m(b,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(d,{span:12},{default:r(()=>[l(o,{label:"\u4EA7\u54C1\u7F16\u7801",prop:"no"},{default:r(()=>[l(f,{modelValue:a(t).no,"onUpdate:modelValue":s[4]||(s[4]=e=>a(t).no=e),placeholder:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u7F16\u7801"},null,8,["modelValue"])]),_:1})]),_:1}),l(d,{span:12},{default:r(()=>[l(o,{label:"\u4EF7\u683C",prop:"price"},{default:r(()=>[l(X,{modelValue:a(t).price,"onUpdate:modelValue":s[5]||(s[5]=e=>a(t).price=e),placeholder:"\u8BF7\u8F93\u5165\u4EF7\u683C",min:0,precision:2,step:.1,class:"w-full!"},null,8,["modelValue"])]),_:1})]),_:1}),l(d,{span:12},{default:r(()=>[l(o,{label:"\u4EA7\u54C1\u63CF\u8FF0",prop:"description"},{default:r(()=>[l(f,{modelValue:a(t).description,"onUpdate:modelValue":s[6]||(s[6]=e=>a(t).description=e),placeholder:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u63CF\u8FF0"},null,8,["modelValue"])]),_:1})]),_:1}),l(d,{span:12},{default:r(()=>[l(o,{label:"\u4E0A\u67B6\u72B6\u6001",prop:"status"},{default:r(()=>[l(g,{modelValue:a(t).status,"onUpdate:modelValue":s[7]||(s[7]=e=>a(t).status=e),placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",class:"w-1/1"},{default:r(()=>[(n(!0),y(V,null,w(a(P)(a(R).CRM_PRODUCT_STATUS),e=>(n(),m(b,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[G,a(p)]])]),_:1},8,["title","modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/crm/product/ProductForm.vue"]])});export{De as __tla,T as default};
