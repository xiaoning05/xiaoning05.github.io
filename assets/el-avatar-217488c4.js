import{a$ as w,bd as $,ba as p,bv as x,b6 as q,d as v,b0 as A,r as B,a1 as o,bc as F,ca as J,aS as N,o as c,c as m,av as f,a as l,v as y,w as P,aQ as Q,Z as R,aJ as V,R as Z,b2 as C,b4 as D,__tla as G}from"./index-d5b00dc9.js";let b,H=Promise.all([(()=>{try{return G}catch{}})()]).then(async()=>{const _=w({size:{type:[Number,String],values:$,default:"",validator:s=>p(s)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:x},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:q(String),default:"cover"}}),d={error:s=>s instanceof Event},S=["src","alt","srcset"],g=v({name:"ElAvatar"});b=D(C(v({...g,props:_,emits:d,setup(s,{emit:h}){const t=s,e=A("avatar"),n=B(!1),k=o(()=>{const{size:a,icon:i,shape:u}=t,r=[e.b()];return F(a)&&r.push(e.m(a)),i&&r.push(e.m("icon")),u&&r.push(e.m(u)),r}),z=o(()=>{const{size:a}=t;return p(a)?e.cssVarBlock({size:J(a)||""}):void 0}),E=o(()=>({objectFit:t.fit}));function j(a){n.value=!0,h("error",a)}return N(()=>t.src,()=>n.value=!1),(a,i)=>(c(),m("span",{class:Z(l(k)),style:f(l(z))},[!a.src&&!a.srcSet||n.value?a.icon?(c(),y(l(R),{key:1},{default:P(()=>[(c(),y(Q(a.icon)))]),_:1})):V(a.$slots,"default",{key:2}):(c(),m("img",{key:0,src:a.src,alt:a.alt,srcset:a.srcSet,style:f(l(E)),onError:j},null,44,S))],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]))});export{b as E,H as __tla};
