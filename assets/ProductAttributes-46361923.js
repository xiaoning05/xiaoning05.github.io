import{d as H,ae as N,r as v,Y as R,aR as S,o as f,c as k,g as A,a as m,F as I,q as P,e as c,f as g,b as n,h as _,t as B,w as L,$ as V,j as X,H as J,L as O,k as Q,ai as T,B as W,a9 as j,c2 as aa,_ as ea,__tla as sa}from"./index-b079f499.js";import{E as la,__tla as ta}from"./el-text-e19e4a45.js";import{c as ua,__tla as ra}from"./property-2c6d78a0.js";import{u as oa,__tla as ca}from"./useMessage-66b9cf03.js";let z,na=Promise.all([(()=>{try{return sa}catch{}})(),(()=>{try{return ta}catch{}})(),(()=>{try{return ra}catch{}})(),(()=>{try{return ca}catch{}})()]).then(async()=>{z=ea(H({name:"ProductAttributes",__name:"ProductAttributes",props:{propertyList:{type:Array,default:()=>{}},isDetail:N.bool.def(!1)},emits:["success"],setup(y,{emit:E}){const{t:K}=Q(),w=oa(),l=v(""),d=v(null),C=R(()=>a=>d.value!==null&&(d.value===a||void 0)),b=v([]),U=a=>{a!=null&&(b.value.some(r=>{var t,i;return((t=r.input)==null?void 0:t.attributes.id)===((i=a.input)==null?void 0:i.attributes.id)})||b.value.push(a))},u=v([]),Y=y;S(()=>Y.propertyList,a=>{a&&(u.value=a)},{deep:!0,immediate:!0});const M=E,x=async(a,r)=>{if(l.value)try{const t=await ua({propertyId:r,name:l.value});u.value[a].values.push({id:t,name:l.value}),w.success(K("common.createSuccess")),M("success",u.value)}catch{w.error("\u6DFB\u52A0\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")}d.value=null,l.value=""};return(a,r)=>{const t=la,i=T,Z=W,$=aa,q=j;return f(!0),k(I,null,A(m(u),(p,e)=>(f(),P(q,{key:e},{default:c(()=>[g("div",null,[n(t,{class:"mx-1"},{default:c(()=>[_("\u5C5E\u6027\u540D\uFF1A")]),_:1}),n(i,{class:"mx-1",closable:!y.isDetail,type:"success",onClose:s=>(o=>{var h;(h=u.value)==null||h.splice(o,1)})(e)},{default:c(()=>[_(B(p.name),1)]),_:2},1032,["closable","onClose"])]),g("div",null,[n(t,{class:"mx-1"},{default:c(()=>[_("\u5C5E\u6027\u503C\uFF1A")]),_:1}),(f(!0),k(I,null,A(p.values,(s,o)=>(f(),P(i,{key:s.id,class:"mx-1",closable:!y.isDetail,onClose:h=>((F,G)=>{var D;(D=u.value[F].values)==null||D.splice(G,1)})(e,o)},{default:c(()=>[_(B(s.name),1)]),_:2},1032,["closable","onClose"]))),128)),L(n(m(O),{id:`input${e}`,ref_for:!0,ref:U,modelValue:m(l),"onUpdate:modelValue":r[0]||(r[0]=s=>X(l)?l.value=s:null),class:"!w-20",size:"small",onBlur:s=>x(e,p.id),onKeyup:J(s=>x(e,p.id),["enter"])},null,8,["id","modelValue","onBlur","onKeyup"]),[[V,m(C)(e)]]),L(n(Z,{class:"button-new-tag ml-1",size:"small",onClick:s=>(async o=>{d.value=o,b.value[o].focus()})(e)},{default:c(()=>[_(" + \u6DFB\u52A0 ")]),_:2},1032,["onClick"]),[[V,!m(C)(e)]])]),n($,{class:"my-10px"})]),_:2},1024))),128)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mall/product/spu/form/ProductAttributes.vue"]])});export{na as __tla,z as default};
