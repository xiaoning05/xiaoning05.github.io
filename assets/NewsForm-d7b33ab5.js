import{co as oe,cp as se,d as ie,aX as re,a1 as Y,r as ue,o as u,v as y,w as n,f as e,g as m,c as C,F as ce,q as de,a,R as Z,t as D,a4 as _,l as me,_ as pe,C as _e,k as he,aU as ve,P as fe,j as ge,e5 as ye,aY as Ce,V as we,W as ke,__tla as Ve}from"./index-d5b00dc9.js";import{_ as Ue,__tla as be}from"./style.css_vue_type_style_index_0_src_true_lang-bcdcdb45.js";import{u as G,__tla as Fe}from"./useMessage-2288a5f2.js";import Se,{__tla as Ne}from"./CoverSelect-5b9766d6.js";import{_ as xe}from"./_plugin-vue_export-helper-1b428a4d.js";let b,H,J,Ie=Promise.all([(()=>{try{return Ve}catch{}})(),(()=>{try{return be}catch{}})(),(()=>{try{return Fe}catch{}})(),(()=>{try{return Ne}catch{}})()]).then(async()=>{let V,F,S,N,x,I,O,z,P,M,j,A,E,B,T,W,q;V=G(),F=(h,U)=>({MENU_CONF:{uploadImage:{server:h,maxFileSize:5242880,maxNumberOfFiles:10,allowedFileTypes:["image/*"],meta:{accountId:U,type:"image"},metaWithUrl:!0,headers:{Accept:"*",Authorization:"Bearer "+oe(),"tenant-id":se()},withCredentials:!0,timeout:5e3,fieldName:"file",onBeforeUpload:d=>d,onProgress(d){},onSuccess(d,p){},onFailed(d,p){V.alertError(p.message)},onError(d,p,L){V.alertError(p.message)},customInsert(d,p){p(d.data.url,"image",d.data.url)}}}}),J=()=>({title:"",thumbMediaId:"",author:"",digest:"",showCoverPic:"",content:"",contentSourceUrl:"",needOpenComment:"",onlyFansCanComment:"",thumbUrl:""}),S={class:"select-item"},N=["onClick"],x={class:"news-content"},I=["src"],O={class:"news-content-title"},z={key:0,class:"child"},P=["onClick"],M={class:"news-content-item"},j={class:"news-content-item-title"},A={class:"news-content-item-img"},E=["src"],B={class:"child"},T={key:0},W=(h=>(we("data-v-1886bf9c"),h=h(),ke(),h))(()=>m("p",null,"\u6458\u8981:",-1)),q=ie({name:"NewsForm",__name:"NewsForm",props:{isCreating:{type:Boolean},modelValue:{}},emits:["update:modelValue"],setup(h,{emit:U}){const d=G(),p=h,L=re("accountId"),K=F("http://localhost:48080/admin-api/mp/material/upload-permanent",L),$=U,l=Y({get:()=>p.modelValue===null?[{title:"",thumbMediaId:"",author:"",digest:"",showCoverPic:"",content:"",contentSourceUrl:"",needOpenComment:"",onlyFansCanComment:"",thumbUrl:""}]:p.modelValue,set(o){$("update:modelValue",o)}}),c=ue(0),r=Y(()=>l.value[c.value]),Q=o=>{const s=l.value[o];l.value[o]=l.value[o+1],l.value[o+1]=s,c.value=o+1},R=async o=>{try{await d.confirm("\u786E\u5B9A\u5220\u9664\u8BE5\u56FE\u6587\u5417?"),l.value.splice(o,1),c.value===o&&(c.value=0)}catch{}},ee=()=>{l.value.push({title:"",thumbMediaId:"",author:"",digest:"",showCoverPic:"",content:"",contentSourceUrl:"",needOpenComment:"",onlyFansCanComment:"",thumbUrl:""}),c.value=l.value.length-1};return(o,s)=>{const f=pe,g=_e,w=he,ae=ve,k=fe,X=ge,le=ye,te=Ce;return u(),y(te,null,{default:n(()=>[e(ae,{width:"40%"},{default:n(()=>[m("div",S,[(u(!0),C(ce,null,de(a(l),(t,i)=>(u(),C("div",{key:i},[i===0?(u(),C("div",{key:0,class:Z(["news-main father",{activeAddNews:a(c)===i}]),onClick:v=>c.value=i},[m("div",x,[m("img",{class:"material-img",src:t.thumbUrl},null,8,I),m("div",O,D(t.title),1)]),a(l).length>1?(u(),C("div",z,[e(g,{type:"info",circle:"",size:"small",onClick:()=>Q(i)},{default:n(()=>[e(f,{icon:"ep:arrow-down-bold"})]),_:2},1032,["onClick"]),o.isCreating?(u(),y(g,{key:0,type:"danger",circle:"",size:"small",onClick:()=>R(i)},{default:n(()=>[e(f,{icon:"ep:delete"})]),_:2},1032,["onClick"])):_("",!0)])):_("",!0)],10,N)):_("",!0),i>0?(u(),C("div",{key:1,class:Z(["news-main-item father",{activeAddNews:a(c)===i}]),onClick:v=>c.value=i},[m("div",M,[m("div",j,D(t.title),1),m("div",A,[m("img",{class:"material-img",src:t.thumbUrl,width:"100%"},null,8,E)])]),m("div",B,[a(l).length>i+1?(u(),y(g,{key:0,circle:"",type:"info",size:"small",onClick:()=>Q(i)},{default:n(()=>[e(f,{icon:"ep:arrow-down-bold"})]),_:2},1032,["onClick"])):_("",!0),i>0?(u(),y(g,{key:1,type:"info",circle:"",size:"small",onClick:()=>(v=>{const ne=l.value[v];l.value[v]=l.value[v-1],l.value[v-1]=ne,c.value=v-1})(i)},{default:n(()=>[e(f,{icon:"ep:arrow-up-bold"})]),_:2},1032,["onClick"])):_("",!0),o.isCreating?(u(),y(g,{key:2,type:"danger",size:"small",circle:"",onClick:()=>R(i)},{default:n(()=>[e(f,{icon:"ep:delete"})]),_:2},1032,["onClick"])):_("",!0)])],10,P)):_("",!0)]))),128)),e(w,{justify:"center",class:"ope-row"},{default:n(()=>[a(l).length<8&&o.isCreating?(u(),y(g,{key:0,type:"primary",circle:"",onClick:ee},{default:n(()=>[e(f,{icon:"ep:plus"})]),_:1})):_("",!0)]),_:1})])]),_:1}),e(le,null,{default:n(()=>[a(l).length>0?(u(),C("div",T,[e(w,{gutter:20},{default:n(()=>[e(k,{modelValue:a(r).title,"onUpdate:modelValue":s[0]||(s[0]=t=>a(r).title=t),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF08\u5FC5\u586B\uFF09"},null,8,["modelValue"]),e(k,{modelValue:a(r).author,"onUpdate:modelValue":s[1]||(s[1]=t=>a(r).author=t),placeholder:"\u8BF7\u8F93\u5165\u4F5C\u8005",style:{"margin-top":"5px"}},null,8,["modelValue"]),e(k,{modelValue:a(r).contentSourceUrl,"onUpdate:modelValue":s[2]||(s[2]=t=>a(r).contentSourceUrl=t),placeholder:"\u8BF7\u8F93\u5165\u539F\u6587\u5730\u5740",style:{"margin-top":"5px"}},null,8,["modelValue"])]),_:1}),e(w,{gutter:20},{default:n(()=>[e(X,{span:12},{default:n(()=>[e(Se,{modelValue:a(r),"onUpdate:modelValue":s[3]||(s[3]=t=>me(r)?r.value=t:null),"is-first":a(c)===0},null,8,["modelValue","is-first"])]),_:1}),e(X,{span:12},{default:n(()=>[W,e(k,{rows:8,type:"textarea",modelValue:a(r).digest,"onUpdate:modelValue":s[4]||(s[4]=t=>a(r).digest=t),placeholder:"\u8BF7\u8F93\u5165\u6458\u8981",class:"digest",maxlength:"120"},null,8,["modelValue"])]),_:1})]),_:1}),e(w,null,{default:n(()=>[e(a(Ue),{modelValue:a(r).content,"onUpdate:modelValue":s[5]||(s[5]=t=>a(r).content=t),"editor-config":a(K)},null,8,["modelValue","editor-config"])]),_:1})])):_("",!0)]),_:1})]),_:1})}}}),b=xe(q,[["__scopeId","data-v-1886bf9c"]]),H=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"}))});export{b as N,Ie as __tla,H as a,J as c};
