import{d as I,r as _,n as U,aR as k,a as l,o as v,q as w,e as a,b as e,f as x,h as B,L as A,y as F,a9 as g,A as q,az as M,ab as R,C as j,_ as z,__tla as D}from"./index-b079f499.js";import{r as n,__tla as E}from"./formRules-ddc6648c.js";let f,G=Promise.all([(()=>{try{return D}catch{}})(),(()=>{try{return E}catch{}})()]).then(async()=>{f=z(I({name:"InfraCodegenBasicInfoForm",__name:"BasicInfoForm",props:{table:{type:Object,default:()=>null}},setup(c,{expose:b}){const i=c,p=_(),t=_({tableName:"",tableComment:"",className:"",author:"",remark:""}),h=U({tableName:[n],tableComment:[n],className:[n],author:[n]});return k(()=>i.table,m=>{m&&(t.value=m)},{deep:!0,immediate:!0}),b({validate:async()=>{var m;return(m=l(p))==null?void 0:m.validate()}}),(m,o)=>{const r=A,u=F,d=g,V=q,N=M,C=R,y=j;return v(),w(y,{ref_key:"formRef",ref:p,model:l(t),rules:l(h),"label-width":"120px"},{default:a(()=>[e(C,null,{default:a(()=>[e(d,{span:12},{default:a(()=>[e(u,{label:"\u8868\u540D\u79F0",prop:"tableName"},{default:a(()=>[e(r,{modelValue:l(t).tableName,"onUpdate:modelValue":o[0]||(o[0]=s=>l(t).tableName=s),placeholder:"\u8BF7\u8F93\u5165\u4ED3\u5E93\u540D\u79F0"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:a(()=>[e(u,{label:"\u8868\u63CF\u8FF0",prop:"tableComment"},{default:a(()=>[e(r,{modelValue:l(t).tableComment,"onUpdate:modelValue":o[1]||(o[1]=s=>l(t).tableComment=s),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:a(()=>[e(u,{prop:"className"},{label:a(()=>[x("span",null,[B(" \u5B9E\u4F53\u7C7B\u540D\u79F0 "),e(N,{content:"\u9ED8\u8BA4\u53BB\u9664\u8868\u540D\u7684\u524D\u7F00\u3002\u5982\u679C\u5B58\u5728\u91CD\u590D\uFF0C\u5219\u9700\u8981\u624B\u52A8\u6DFB\u52A0\u524D\u7F00\uFF0C\u907F\u514D MyBatis \u62A5 Alias \u91CD\u590D\u7684\u95EE\u9898\u3002",placement:"top"},{default:a(()=>[e(V,{class:"",icon:"ep:question-filled"})]),_:1})])]),default:a(()=>[e(r,{modelValue:l(t).className,"onUpdate:modelValue":o[2]||(o[2]=s=>l(t).className=s),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:a(()=>[e(u,{label:"\u4F5C\u8005",prop:"author"},{default:a(()=>[e(r,{modelValue:l(t).author,"onUpdate:modelValue":o[3]||(o[3]=s=>l(t).author=s),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:24},{default:a(()=>[e(u,{label:"\u5907\u6CE8",prop:"remark"},{default:a(()=>[e(r,{modelValue:l(t).remark,"onUpdate:modelValue":o[4]||(o[4]=s=>l(t).remark=s),rows:3,type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/infra/codegen/components/BasicInfoForm.vue"]])});export{G as __tla,f as default};
