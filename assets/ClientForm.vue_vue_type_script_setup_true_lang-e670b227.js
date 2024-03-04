import{ap as v,d as j,i as J,r as h,e as Z,o as d,v as i,w as r,f as o,a as l,h as S,x as K,c,F as p,q as m,t as Q,l as W,P as X,A as $,ah as ee,ai as le,bZ as ae,y as te,z as oe,D as re,C as de,I as ue,__tla as se}from"./index-d5b00dc9.js";import{_ as ie,__tla as ne}from"./Dialog.vue_vue_type_style_index_0_lang-03cf6454.js";import{_ as ce,__tla as pe}from"./UploadImg-b64c8ba7.js";import{a as me,D as A,d as _e,__tla as fe}from"./dict-29b94c3f.js";import{C as q}from"./constants-99751ef9.js";import{u as Ve,__tla as ye}from"./useMessage-2288a5f2.js";let G,z,C,he=Promise.all([(()=>{try{return se}catch{}})(),(()=>{try{return ne}catch{}})(),(()=>{try{return pe}catch{}})(),(()=>{try{return fe}catch{}})(),(()=>{try{return ye}catch{}})()]).then(async()=>{C=b=>v.get({url:"/system/oauth2-client/page",params:b}),z=b=>v.delete({url:"/system/oauth2-client/delete?id="+b}),G=j({name:"SystemOAuth2ClientForm",__name:"ClientForm",emits:["success"],setup(b,{expose:E,emit:N}){const{t:U}=J(),T=Ve(),_=h(!1),k=h(""),f=h(!1),I=h(""),t=h({id:void 0,clientId:void 0,secret:void 0,name:void 0,logo:void 0,description:void 0,status:q.ENABLE,accessTokenValiditySeconds:1800,refreshTokenValiditySeconds:43200,redirectUris:[],authorizedGrantTypes:[],scopes:[],autoApproveScopes:[],authorities:[],resourceIds:[],additionalInformation:void 0}),O=Z({clientId:[{required:!0,message:"\u5BA2\u6237\u7AEF\u7F16\u53F7\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],secret:[{required:!0,message:"\u5BA2\u6237\u7AEF\u5BC6\u94A5\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],name:[{required:!0,message:"\u5E94\u7528\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],logo:[{required:!0,message:"\u5E94\u7528\u56FE\u6807\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],status:[{required:!0,message:"\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],accessTokenValiditySeconds:[{required:!0,message:"\u8BBF\u95EE\u4EE4\u724C\u7684\u6709\u6548\u671F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],refreshTokenValiditySeconds:[{required:!0,message:"\u5237\u65B0\u4EE4\u724C\u7684\u6709\u6548\u671F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],redirectUris:[{required:!0,message:"\u53EF\u91CD\u5B9A\u5411\u7684 URI \u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],authorizedGrantTypes:[{required:!0,message:"\u6388\u6743\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),g=h();E({open:async(s,a)=>{if(_.value=!0,k.value=U("action."+s),I.value=s,P(),a){f.value=!0;try{t.value=await(n=>v.get({url:"/system/oauth2-client/get?id="+n}))(a)}finally{f.value=!1}}}});const R=N,F=async()=>{if(g&&await g.value.validate()){f.value=!0;try{const s=t.value;I.value==="create"?(await(a=>v.post({url:"/system/oauth2-client/create",data:a}))(s),T.success(U("common.createSuccess"))):(await(a=>v.put({url:"/system/oauth2-client/update",data:a}))(s),T.success(U("common.updateSuccess"))),_.value=!1,R("success")}finally{f.value=!1}}},P=()=>{var s;t.value={id:void 0,clientId:void 0,secret:void 0,name:void 0,logo:void 0,description:void 0,status:q.ENABLE,accessTokenValiditySeconds:1800,refreshTokenValiditySeconds:43200,redirectUris:[],authorizedGrantTypes:[],scopes:[],autoApproveScopes:[],authorities:[],resourceIds:[],additionalInformation:void 0},(s=g.value)==null||s.resetFields()};return(s,a)=>{const n=X,u=$,B=ce,M=ee,D=le,w=ae,V=te,y=oe,H=re,x=de,L=ie,Y=ue;return d(),i(L,{modelValue:l(_),"onUpdate:modelValue":a[16]||(a[16]=e=>W(_)?_.value=e:null),title:l(k),"max-height":"500px",scroll:""},{footer:r(()=>[o(x,{disabled:l(f),type:"primary",onClick:F},{default:r(()=>[S("\u786E \u5B9A")]),_:1},8,["disabled"]),o(x,{onClick:a[15]||(a[15]=e=>_.value=!1)},{default:r(()=>[S("\u53D6 \u6D88")]),_:1})]),default:r(()=>[K((d(),i(H,{ref_key:"formRef",ref:g,model:l(t),rules:l(O),"label-width":"160px"},{default:r(()=>[o(u,{label:"\u5BA2\u6237\u7AEF\u7F16\u53F7",prop:"secret"},{default:r(()=>[o(n,{modelValue:l(t).clientId,"onUpdate:modelValue":a[0]||(a[0]=e=>l(t).clientId=e),placeholder:"\u8BF7\u8F93\u5165\u5BA2\u6237\u7AEF\u7F16\u53F7"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u5BA2\u6237\u7AEF\u5BC6\u94A5",prop:"secret"},{default:r(()=>[o(n,{modelValue:l(t).secret,"onUpdate:modelValue":a[1]||(a[1]=e=>l(t).secret=e),placeholder:"\u8BF7\u8F93\u5165\u5BA2\u6237\u7AEF\u5BC6\u94A5"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u5E94\u7528\u540D",prop:"name"},{default:r(()=>[o(n,{modelValue:l(t).name,"onUpdate:modelValue":a[2]||(a[2]=e=>l(t).name=e),placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528\u540D"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u5E94\u7528\u56FE\u6807"},{default:r(()=>[o(B,{modelValue:l(t).logo,"onUpdate:modelValue":a[3]||(a[3]=e=>l(t).logo=e),limit:1},null,8,["modelValue"])]),_:1}),o(u,{label:"\u5E94\u7528\u63CF\u8FF0"},{default:r(()=>[o(n,{modelValue:l(t).description,"onUpdate:modelValue":a[4]||(a[4]=e=>l(t).description=e),placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528\u540D",type:"textarea"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u72B6\u6001",prop:"status"},{default:r(()=>[o(D,{modelValue:l(t).status,"onUpdate:modelValue":a[5]||(a[5]=e=>l(t).status=e)},{default:r(()=>[(d(!0),c(p,null,m(l(me)(l(A).COMMON_STATUS),e=>(d(),i(M,{key:e.value,label:e.value},{default:r(()=>[S(Q(e.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(u,{label:"\u8BBF\u95EE\u4EE4\u724C\u7684\u6709\u6548\u671F",prop:"accessTokenValiditySeconds"},{default:r(()=>[o(w,{modelValue:l(t).accessTokenValiditySeconds,"onUpdate:modelValue":a[6]||(a[6]=e=>l(t).accessTokenValiditySeconds=e),placeholder:"\u5355\u4F4D\uFF1A\u79D2"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u5237\u65B0\u4EE4\u724C\u7684\u6709\u6548\u671F",prop:"refreshTokenValiditySeconds"},{default:r(()=>[o(w,{modelValue:l(t).refreshTokenValiditySeconds,"onUpdate:modelValue":a[7]||(a[7]=e=>l(t).refreshTokenValiditySeconds=e),placeholder:"\u5355\u4F4D\uFF1A\u79D2"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u6388\u6743\u7C7B\u578B",prop:"authorizedGrantTypes"},{default:r(()=>[o(y,{modelValue:l(t).authorizedGrantTypes,"onUpdate:modelValue":a[8]||(a[8]=e=>l(t).authorizedGrantTypes=e),filterable:"",multiple:"",placeholder:"\u8BF7\u8F93\u5165\u6388\u6743\u7C7B\u578B",style:{width:"500px"}},{default:r(()=>[(d(!0),c(p,null,m(l(_e)(l(A).SYSTEM_OAUTH2_GRANT_TYPE),e=>(d(),i(V,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(u,{label:"\u6388\u6743\u8303\u56F4",prop:"scopes"},{default:r(()=>[o(y,{modelValue:l(t).scopes,"onUpdate:modelValue":a[9]||(a[9]=e=>l(t).scopes=e),filterable:"",multiple:"","allow-create":"",placeholder:"\u8BF7\u8F93\u5165\u6388\u6743\u8303\u56F4",style:{width:"500px"}},{default:r(()=>[(d(!0),c(p,null,m(l(t).scopes,e=>(d(),i(V,{key:e,label:e,value:e},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(u,{label:"\u81EA\u52A8\u6388\u6743\u8303\u56F4",prop:"autoApproveScopes"},{default:r(()=>[o(y,{modelValue:l(t).autoApproveScopes,"onUpdate:modelValue":a[10]||(a[10]=e=>l(t).autoApproveScopes=e),filterable:"",multiple:"",placeholder:"\u8BF7\u8F93\u5165\u6388\u6743\u8303\u56F4",style:{width:"500px"}},{default:r(()=>[(d(!0),c(p,null,m(l(t).scopes,e=>(d(),i(V,{key:e,label:e,value:e},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(u,{label:"\u53EF\u91CD\u5B9A\u5411\u7684 URI \u5730\u5740",prop:"redirectUris"},{default:r(()=>[o(y,{modelValue:l(t).redirectUris,"onUpdate:modelValue":a[11]||(a[11]=e=>l(t).redirectUris=e),"allow-create":"",filterable:"",multiple:"",placeholder:"\u8BF7\u8F93\u5165\u53EF\u91CD\u5B9A\u5411\u7684 URI \u5730\u5740",style:{width:"500px"}},{default:r(()=>[(d(!0),c(p,null,m(l(t).redirectUris,e=>(d(),i(V,{key:e,label:e,value:e},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(u,{label:"\u6743\u9650",prop:"authorities"},{default:r(()=>[o(y,{modelValue:l(t).authorities,"onUpdate:modelValue":a[12]||(a[12]=e=>l(t).authorities=e),"allow-create":"",filterable:"",multiple:"",placeholder:"\u8BF7\u8F93\u5165\u6743\u9650",style:{width:"500px"}},{default:r(()=>[(d(!0),c(p,null,m(l(t).authorities,e=>(d(),i(V,{key:e,label:e,value:e},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(u,{label:"\u8D44\u6E90",prop:"resourceIds"},{default:r(()=>[o(y,{modelValue:l(t).resourceIds,"onUpdate:modelValue":a[13]||(a[13]=e=>l(t).resourceIds=e),"allow-create":"",filterable:"",multiple:"",placeholder:"\u8BF7\u8F93\u5165\u8D44\u6E90",style:{width:"500px"}},{default:r(()=>[(d(!0),c(p,null,m(l(t).resourceIds,e=>(d(),i(V,{key:e,label:e,value:e},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(u,{label:"\u9644\u52A0\u4FE1\u606F",prop:"additionalInformation"},{default:r(()=>[o(n,{modelValue:l(t).additionalInformation,"onUpdate:modelValue":a[14]||(a[14]=e=>l(t).additionalInformation=e),placeholder:"\u8BF7\u8F93\u5165\u9644\u52A0\u4FE1\u606F\uFF0CJSON \u683C\u5F0F\u6570\u636E",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[Y,l(f)]])]),_:1},8,["modelValue","title"])}}})});export{G as _,he as __tla,z as d,C as g};
