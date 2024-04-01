import{d as Y,k as Z,r as _,n as ee,p as ae,o as n,c as f,b as a,e as t,a as l,h as m,w as le,q as p,F as v,g as b,t as h,$ as te,j as re,K as oe,y as ue,a8 as de,s as se,x as ne,bU as _e,ae as me,af as ie,ah as ce,A as pe,aa as fe,B as ve,v as ge,__tla as ye}from"./index-34f06ebd.js";import{_ as be,__tla as he}from"./Dialog.vue_vue_type_style_index_0_lang-08560286.js";import{_ as Ve,__tla as Ue}from"./style.css_vue_type_style_index_0_src_true_lang-6005f6aa.js";import{_ as Ie,__tla as ke}from"./UploadImg-5952b4f4.js";import{a as qe,D as w,g as F,__tla as we}from"./dict-e142e39a.js";import{g as Be,c as Ae,u as xe,__tla as Ne}from"./index-0dd6446d.js";import{g as Se,__tla as Ce}from"./index-51b8858c.js";import{i as Fe,__tla as He}from"./spu-7528f5a7.js";import{_ as Oe,__tla as Re}from"./SpuSelect.vue_vue_type_script_setup_true_lang-940096c8.js";import{__tla as Te}from"./el-image-a5cf0b35.js";import{__tla as Ge}from"./el-image-viewer-331eba6f.js";import{__tla as Le}from"./index-9ab6e3b3.js";import{__tla as Me}from"./SkuList.vue_vue_type_script_setup_true_lang-8e18adf3.js";import{u as Pe,__tla as De}from"./useMessage-7a5ab7ef.js";let H,Ee=Promise.all([(()=>{try{return ye}catch{}})(),(()=>{try{return he}catch{}})(),(()=>{try{return Ue}catch{}})(),(()=>{try{return ke}catch{}})(),(()=>{try{return we}catch{}})(),(()=>{try{return Ne}catch{}})(),(()=>{try{return Ce}catch{}})(),(()=>{try{return He}catch{}})(),(()=>{try{return Re}catch{}})(),(()=>{try{return Te}catch{}})(),(()=>{try{return Ge}catch{}})(),(()=>{try{return Le}catch{}})(),(()=>{try{return Me}catch{}})(),(()=>{try{return De}catch{}})()]).then(async()=>{H=Y({name:"PromotionArticleForm",__name:"ArticleForm",emits:["success"],setup($e,{expose:O,emit:R}){const{t:V}=Z(),B=Pe(),i=_(!1),A=_(""),c=_(!1),x=_(""),o=_({id:void 0,categoryId:void 0,title:void 0,author:void 0,picUrl:void 0,introduction:void 0,sort:0,status:0,spuId:0,recommendHot:!1,recommendBanner:!1,content:void 0}),T=ee({categoryId:[{required:!0,message:"\u5206\u7C7Bid\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],title:[{required:!0,message:"\u6587\u7AE0\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],picUrl:[{required:!0,message:"\u6587\u7AE0\u5C01\u9762\u56FE\u7247\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],sort:[{required:!0,message:"\u6392\u5E8F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],status:[{required:!0,message:"\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],spuId:[{required:!0,message:"\u5546\u54C1\u5173\u8054id\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],recommendHot:[{required:!0,message:"\u662F\u5426\u70ED\u95E8(\u5C0F\u7A0B\u5E8F)\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],recommendBanner:[{required:!0,message:"\u662F\u5426\u8F6E\u64AD\u56FE(\u5C0F\u7A0B\u5E8F)\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],content:[{required:!0,message:"\u6587\u7AE0\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),g=_(),N=_(),G=u=>{o.value.spuId=u};O({open:async(u,r)=>{if(i.value=!0,A.value=V("action."+u),x.value=u,P(),r){c.value=!0;try{o.value=await Be(r)}finally{c.value=!1}}}});const L=R,M=async()=>{if(g&&await g.value.validate()){c.value=!0;try{const u=o.value;x.value==="create"?(await Ae(u),B.success(V("common.createSuccess"))):(await xe(u),B.success(V("common.updateSuccess"))),i.value=!1,L("success")}finally{c.value=!1}}},P=()=>{var u;o.value={id:void 0,categoryId:void 0,title:void 0,author:void 0,picUrl:void 0,introduction:void 0,sort:0,status:0,spuId:0,recommendHot:!1,recommendBanner:!1,content:void 0},(u=g.value)==null||u.resetFields()},S=_([]),C=_([]);return ae(async()=>{S.value=await Se(),C.value=await Fe()}),(u,r)=>{const U=oe,d=ue,s=de,D=se,E=ne,$=Ie,j=_e,I=me,k=ie,z=ce,q=pe,K=Ve,W=fe,J=ve,Q=be,X=ge;return n(),f(v,null,[a(Q,{modelValue:l(i),"onUpdate:modelValue":r[12]||(r[12]=e=>re(i)?i.value=e:null),title:l(A),width:"70%"},{footer:t(()=>[a(q,{disabled:l(c),type:"primary",onClick:M},{default:t(()=>[m("\u786E \u5B9A")]),_:1},8,["disabled"]),a(q,{onClick:r[11]||(r[11]=e=>i.value=!1)},{default:t(()=>[m("\u53D6 \u6D88")]),_:1})]),default:t(()=>[le((n(),p(J,{ref_key:"formRef",ref:g,model:l(o),rules:l(T),"label-width":"110px"},{default:t(()=>[a(W,null,{default:t(()=>[a(s,{span:12},{default:t(()=>[a(d,{label:"\u6587\u7AE0\u6807\u9898",prop:"title"},{default:t(()=>[a(U,{modelValue:l(o).title,"onUpdate:modelValue":r[0]||(r[0]=e=>l(o).title=e),placeholder:"\u8BF7\u8F93\u5165\u6587\u7AE0\u6807\u9898"},null,8,["modelValue"])]),_:1})]),_:1}),a(s,{span:12},{default:t(()=>[a(d,{label:"\u6587\u7AE0\u5206\u7C7B",prop:"categoryId"},{default:t(()=>[a(E,{modelValue:l(o).categoryId,"onUpdate:modelValue":r[1]||(r[1]=e=>l(o).categoryId=e),placeholder:"\u8BF7\u9009\u62E9"},{default:t(()=>[(n(!0),f(v,null,b(l(S),e=>(n(),p(D,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(s,{span:12},{default:t(()=>[a(d,{label:"\u6587\u7AE0\u4F5C\u8005",prop:"author"},{default:t(()=>[a(U,{modelValue:l(o).author,"onUpdate:modelValue":r[2]||(r[2]=e=>l(o).author=e),placeholder:"\u8BF7\u8F93\u5165\u6587\u7AE0\u4F5C\u8005"},null,8,["modelValue"])]),_:1})]),_:1}),a(s,{span:12},{default:t(()=>[a(d,{label:"\u6587\u7AE0\u7B80\u4ECB",prop:"introduction"},{default:t(()=>[a(U,{modelValue:l(o).introduction,"onUpdate:modelValue":r[3]||(r[3]=e=>l(o).introduction=e),placeholder:"\u8BF7\u8F93\u5165\u6587\u7AE0\u7B80\u4ECB"},null,8,["modelValue"])]),_:1})]),_:1}),a(s,{span:24},{default:t(()=>[a(d,{label:"\u6587\u7AE0\u5C01\u9762",prop:"picUrl"},{default:t(()=>[a($,{modelValue:l(o).picUrl,"onUpdate:modelValue":r[4]||(r[4]=e=>l(o).picUrl=e),height:"80px"},null,8,["modelValue"])]),_:1})]),_:1}),a(s,{span:12},{default:t(()=>[a(d,{label:"\u6392\u5E8F",prop:"sort"},{default:t(()=>[a(j,{modelValue:l(o).sort,"onUpdate:modelValue":r[5]||(r[5]=e=>l(o).sort=e),min:0,clearable:"","controls-position":"right"},null,8,["modelValue"])]),_:1})]),_:1}),a(s,{span:12},{default:t(()=>[a(d,{label:"\u72B6\u6001",prop:"status"},{default:t(()=>[a(k,{modelValue:l(o).status,"onUpdate:modelValue":r[6]||(r[6]=e=>l(o).status=e)},{default:t(()=>[(n(!0),f(v,null,b(l(qe)(l(w).COMMON_STATUS),e=>(n(),p(I,{key:e.value,label:e.value},{default:t(()=>[m(h(e.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(s,{span:12},{default:t(()=>[a(d,{label:"\u662F\u5426\u70ED\u95E8",prop:"recommendHot"},{default:t(()=>[a(k,{modelValue:l(o).recommendHot,"onUpdate:modelValue":r[7]||(r[7]=e=>l(o).recommendHot=e)},{default:t(()=>[(n(!0),f(v,null,b(l(F)(l(w).INFRA_BOOLEAN_STRING),e=>(n(),p(I,{key:e.value,label:e.value},{default:t(()=>[m(h(e.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(s,{span:12},{default:t(()=>[a(d,{label:"\u662F\u5426\u8F6E\u64AD\u56FE",prop:"recommendBanner"},{default:t(()=>[a(k,{modelValue:l(o).recommendBanner,"onUpdate:modelValue":r[8]||(r[8]=e=>l(o).recommendBanner=e)},{default:t(()=>[(n(!0),f(v,null,b(l(F)(l(w).INFRA_BOOLEAN_STRING),e=>(n(),p(I,{key:e.value,label:e.value},{default:t(()=>[m(h(e.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(s,{span:24},{default:t(()=>[a(d,{label:"\u5546\u54C1\u5173\u8054",prop:"spuId"},{default:t(()=>[l(o).spuId?(n(),p(z,{key:0,class:"mr-10px"},{default:t(()=>{var e;return[m(h((e=l(C).find(y=>y.id===l(o).spuId))==null?void 0:e.name),1)]}),_:1})):te("",!0),a(q,{onClick:r[9]||(r[9]=e=>{var y;return(y=l(N))==null?void 0:y.open()})},{default:t(()=>[m("\u9009\u62E9\u5546\u54C1")]),_:1})]),_:1})]),_:1}),a(s,{span:24},{default:t(()=>[a(d,{label:"\u6587\u7AE0\u5185\u5BB9"},{default:t(()=>[a(K,{modelValue:l(o).content,"onUpdate:modelValue":r[10]||(r[10]=e=>l(o).content=e),height:"150px"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[X,l(c)]])]),_:1},8,["modelValue","title"]),a(l(Oe),{ref_key:"spuSelectRef",ref:N,onConfirm:G},null,512)],64)}}})});export{H as _,Ee as __tla};