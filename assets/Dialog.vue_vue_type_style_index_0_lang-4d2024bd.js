import{d as j,ag as s,ct as C,a1 as x,r as g,cq as v,aS as D,o as d,v as u,cu as O,a as l,w as c,aj as S,bh as N,cv as q,aJ as n,g as y,h as B,t as E,a4 as J,f as P,av as V,am as z,_ as A,aT as F,__tla as G}from"./index-d2088aec.js";let _,I=Promise.all([(()=>{try{return G}catch{}})()]).then(async()=>{let m,h;m={class:"relative h-54px flex items-center justify-between pl-15px pr-15px"},h={class:"absolute right-15px top-[50%] h-54px flex translate-y-[-50%] items-center justify-between"},_=j({name:"Dialog",__name:"Dialog",props:{modelValue:s.bool.def(!1),title:s.string.def("Dialog"),fullscreen:s.bool.def(!0),width:s.oneOfType([String,Number]).def("40%"),scroll:s.bool.def(!1),maxHeight:s.oneOfType([String,Number]).def("400px")},setup(t){const p=C(),o=t,b=x(()=>{const e=["fullscreen","title","maxHeight","appendToBody"],a={...N(),...o};for(const i in a)e.indexOf(i)!==-1&&delete a[i];return a}),r=g(!1),k=()=>{r.value=!l(r)},f=g(v(o.maxHeight)?`${o.maxHeight}px`:o.maxHeight);D(()=>r.value,async e=>{if(await z(),e){const a=document.documentElement.offsetHeight;f.value=a-55-60-(p.footer?63:0)+"px"}else f.value=v(o.maxHeight)?`${o.maxHeight}px`:o.maxHeight},{immediate:!0});const w=x(()=>({height:l(f)}));return(e,a)=>{const i=A,H=F,$=q;return d(),u($,S(l(b),{"close-on-click-modal":!0,fullscreen:l(r),width:t.width,"destroy-on-close":"","lock-scroll":"",draggable:"",class:"com-dialog","show-close":!1}),O({header:c(({close:T})=>[y("div",m,[n(e.$slots,"title",{},()=>[B(E(t.title),1)]),y("div",h,[t.fullscreen?(d(),u(i,{key:0,class:"is-hover mr-10px cursor-pointer",icon:l(r)?"radix-icons:exit-full-screen":"radix-icons:enter-full-screen",color:"var(--el-color-info)","hover-color":"var(--el-color-primary)",onClick:k},null,8,["icon"])):J("",!0),P(i,{class:"is-hover cursor-pointer",icon:"ep:close","hover-color":"var(--el-color-primary)",color:"var(--el-color-info)",onClick:T},null,8,["onClick"])])])]),default:c(()=>[t.scroll?(d(),u(H,{key:0,style:V(l(w))},{default:c(()=>[n(e.$slots,"default")]),_:3},8,["style"])):n(e.$slots,"default",{key:1})]),_:2},[l(p).footer?{name:"footer",fn:c(()=>[n(e.$slots,"footer")]),key:"0"}:void 0]),1040,["fullscreen","width"])}}})});export{_,I as __tla};