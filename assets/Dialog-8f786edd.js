import{d as C,ah as s,cv as T,a2 as x,r as g,cs as v,aT as N,o as d,v as u,cw as O,a as l,w as c,ak as j,bi as E,cx as I,aK as n,g as y,h as S,t as U,a5 as A,f as B,aw as G,an as K,C as M,aU as P,_ as V,__tla as X}from"./index-f0743f71.js";let _,Y=Promise.all([(()=>{try{return X}catch{}})()]).then(async()=>{let m,h;m={class:"relative h-54px flex items-center justify-between pl-15px pr-15px"},h={class:"absolute right-15px top-[50%] h-54px flex translate-y-[-50%] items-center justify-between"},_=V(C({name:"Dialog",__name:"Dialog",props:{modelValue:s.bool.def(!1),title:s.string.def("Dialog"),fullscreen:s.bool.def(!0),width:s.oneOfType([String,Number]).def("40%"),scroll:s.bool.def(!1),maxHeight:s.oneOfType([String,Number]).def("400px")},setup(t){const p=T(),o=t,w=x(()=>{const e=["fullscreen","title","maxHeight","appendToBody"],a={...E(),...o};for(const i in a)e.indexOf(i)!==-1&&delete a[i];return a}),r=g(!1),b=()=>{r.value=!l(r)},f=g(v(o.maxHeight)?`${o.maxHeight}px`:o.maxHeight);N(()=>r.value,async e=>{if(await K(),e){const a=document.documentElement.offsetHeight;f.value=a-55-60-(p.footer?63:0)+"px"}else f.value=v(o.maxHeight)?`${o.maxHeight}px`:o.maxHeight},{immediate:!0});const k=x(()=>({height:l(f)}));return(e,a)=>{const i=M,H=P,D=I;return d(),u(D,j(l(w),{"close-on-click-modal":!0,fullscreen:l(r),width:t.width,"destroy-on-close":"","lock-scroll":"",draggable:"",class:"com-dialog","show-close":!1}),O({header:c(({close:$})=>[y("div",m,[n(e.$slots,"title",{},()=>[S(U(t.title),1)]),y("div",h,[t.fullscreen?(d(),u(i,{key:0,class:"is-hover mr-10px cursor-pointer",icon:l(r)?"radix-icons:exit-full-screen":"radix-icons:enter-full-screen",color:"var(--el-color-info)","hover-color":"var(--el-color-primary)",onClick:b},null,8,["icon"])):A("",!0),B(i,{class:"is-hover cursor-pointer",icon:"ep:close","hover-color":"var(--el-color-primary)",color:"var(--el-color-info)",onClick:$},null,8,["onClick"])])])]),default:c(()=>[t.scroll?(d(),u(H,{key:0,style:G(l(k))},{default:c(()=>[n(e.$slots,"default")]),_:3},8,["style"])):n(e.$slots,"default",{key:1})]),_:2},[l(p).footer?{name:"footer",fn:c(()=>[n(e.$slots,"footer")]),key:"0"}:void 0]),1040,["fullscreen","width"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/components/Dialog/src/Dialog.vue"]])});export{_,Y as __tla};