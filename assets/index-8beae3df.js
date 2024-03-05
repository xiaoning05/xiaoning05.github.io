import{b0 as j,by as Q,d as z,bJ as L,a2 as h,o as c,c as y,t as U,v as I,w as V,aR as G,a,$ as H,b3 as J,aY as Ke,b7 as ee,cf as ae,be as te,b1 as K,r as E,aT as W,bQ as $e,f as ne,F as le,q as se,y as Oe,z as Qe,S as k,g as re,Q as Re,b9 as Ye,a5 as R,cX as Ze,cY as ie,cZ as Ve,M as We,am as Xe,bZ as De,bR as Ge,b8 as M,bb as F,cI as He,cJ as ea,b5 as aa,__tla as ta}from"./index-f0743f71.js";let ue,na=Promise.all([(()=>{try{return ta}catch{}})()]).then(async()=>{const X=Symbol("elPaginationKey"),oe=j({disabled:Boolean,currentPage:{type:Number,default:1},prevText:{type:String},prevIcon:{type:Q}}),pe={click:e=>e instanceof MouseEvent},ce=["disabled","aria-label","aria-disabled"],ge={key:0},de=z({name:"ElPaginationPrev"});var be=J(z({...de,props:oe,emits:pe,setup(e){const u=e,{t:n}=L(),g=h(()=>u.disabled||u.currentPage<=1);return(r,o)=>(c(),y("button",{type:"button",class:"btn-prev",disabled:a(g),"aria-label":r.prevText||a(n)("el.pagination.prev"),"aria-disabled":a(g),onClick:o[0]||(o[0]=b=>r.$emit("click",b))},[r.prevText?(c(),y("span",ge,U(r.prevText),1)):(c(),I(a(H),{key:1},{default:V(()=>[(c(),I(G(r.prevIcon)))]),_:1}))],8,ce))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);const ve=j({disabled:Boolean,currentPage:{type:Number,default:1},pageCount:{type:Number,default:50},nextText:{type:String},nextIcon:{type:Q}}),me=["disabled","aria-label","aria-disabled"],fe={key:0},ye=z({name:"ElPaginationNext"});var Ce=J(z({...ye,props:ve,emits:["click"],setup(e){const u=e,{t:n}=L(),g=h(()=>u.disabled||u.currentPage===u.pageCount||u.pageCount===0);return(r,o)=>(c(),y("button",{type:"button",class:"btn-next",disabled:a(g),"aria-label":r.nextText||a(n)("el.pagination.next"),"aria-disabled":a(g),onClick:o[0]||(o[0]=b=>r.$emit("click",b))},[r.nextText?(c(),y("span",fe,U(r.nextText),1)):(c(),I(a(H),{key:1},{default:V(()=>[(c(),I(G(r.nextIcon)))]),_:1}))],8,me))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);const Y=()=>Ke(X,{}),xe=j({pageSize:{type:Number,required:!0},pageSizes:{type:ee(Array),default:()=>ae([10,20,30,40,50,100])},popperClass:{type:String},disabled:Boolean,teleported:Boolean,size:{type:String,values:te}}),Pe=z({name:"ElPaginationSizes"});var ze=J(z({...Pe,props:xe,emits:["page-size-change"],setup(e,{emit:u}){const n=e,{t:g}=L(),r=K("pagination"),o=Y(),b=E(n.pageSize);W(()=>n.pageSizes,(d,C)=>{if(!$e(d,C)&&Array.isArray(d)){const p=d.includes(n.pageSize)?n.pageSize:n.pageSizes[0];u("page-size-change",p)}}),W(()=>n.pageSize,d=>{b.value=d});const P=h(()=>n.pageSizes);function w(d){var C;d!==b.value&&(b.value=d,(C=o.handleSizeChange)==null||C.call(o,Number(d)))}return(d,C)=>(c(),y("span",{class:k(a(r).e("sizes"))},[ne(a(Qe),{"model-value":b.value,disabled:d.disabled,"popper-class":d.popperClass,size:d.size,teleported:d.teleported,"validate-event":!1,onChange:w},{default:V(()=>[(c(!0),y(le,null,se(a(P),p=>(c(),I(a(Oe),{key:p,value:p,label:p+a(g)("el.pagination.pagesize")},null,8,["value","label"]))),128))]),_:1},8,["model-value","disabled","popper-class","size","teleported"])],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);const he=j({size:{type:String,values:te}}),ke=["disabled"],Se=z({name:"ElPaginationJumper"});var Ne=J(z({...Se,props:he,setup(e){const{t:u}=L(),n=K("pagination"),{pageCount:g,disabled:r,currentPage:o,changeEvent:b}=Y(),P=E(),w=h(()=>{var p;return(p=P.value)!=null?p:o==null?void 0:o.value});function d(p){P.value=p?+p:""}function C(p){p=Math.trunc(+p),b==null||b(p),P.value=void 0}return(p,S)=>(c(),y("span",{class:k(a(n).e("jump")),disabled:a(r)},[re("span",{class:k([a(n).e("goto")])},U(a(u)("el.pagination.goto")),3),ne(a(Re),{size:p.size,class:k([a(n).e("editor"),a(n).is("in-pagination")]),min:1,max:a(g),disabled:a(r),"model-value":a(w),"validate-event":!1,label:a(u)("el.pagination.page"),type:"number","onUpdate:modelValue":d,onChange:C},null,8,["size","class","max","disabled","model-value","label"]),re("span",{class:k([a(n).e("classifier")])},U(a(u)("el.pagination.pageClassifier")),3)],10,ke))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);const _e=j({total:{type:Number,default:1e3}}),Te=["disabled"],Be=z({name:"ElPaginationTotal"});var Ee=J(z({...Be,props:_e,setup(e){const{t:u}=L(),n=K("pagination"),{disabled:g}=Y();return(r,o)=>(c(),y("span",{class:k(a(n).e("total")),disabled:a(g)},U(a(u)("el.pagination.total",{total:r.total})),11,Te))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);const we=j({currentPage:{type:Number,default:1},pageCount:{type:Number,required:!0},pagerCount:{type:Number,default:7},disabled:Boolean}),Ie=["onKeyup"],Me=["aria-current","aria-label","tabindex"],qe=["tabindex","aria-label"],Ae=["aria-current","aria-label","tabindex"],je=["tabindex","aria-label"],Le=["aria-current","aria-label","tabindex"],Ue=z({name:"ElPaginationPager"});var Fe=J(z({...Ue,props:we,emits:["change"],setup(e,{emit:u}){const n=e,g=K("pager"),r=K("icon"),{t:o}=L(),b=E(!1),P=E(!1),w=E(!1),d=E(!1),C=E(!1),p=E(!1),S=h(()=>{const t=n.pagerCount,l=(t-1)/2,s=Number(n.currentPage),N=Number(n.pageCount);let B=!1,_=!1;N>t&&(s>t-l&&(B=!0),s<N-l&&(_=!0));const T=[];if(B&&!_)for(let x=N-(t-2);x<N;x++)T.push(x);else if(!B&&_)for(let x=2;x<t;x++)T.push(x);else if(B&&_){const x=Math.floor(t/2)-1;for(let Z=s-x;Z<=s+x;Z++)T.push(Z)}else for(let x=2;x<N;x++)T.push(x);return T}),f=h(()=>["more","btn-quickprev",r.b(),g.is("disabled",n.disabled)]),$=h(()=>["more","btn-quicknext",r.b(),g.is("disabled",n.disabled)]),q=h(()=>n.disabled?-1:0);function O(t=!1){n.disabled||(t?w.value=!0:d.value=!0)}function A(t=!1){t?C.value=!0:p.value=!0}function i(t){const l=t.target;if(l.tagName.toLowerCase()==="li"&&Array.from(l.classList).includes("number")){const s=Number(l.textContent);s!==n.currentPage&&u("change",s)}else l.tagName.toLowerCase()==="li"&&Array.from(l.classList).includes("more")&&v(t)}function v(t){const l=t.target;if(l.tagName.toLowerCase()==="ul"||n.disabled)return;let s=Number(l.textContent);const N=n.pageCount,B=n.currentPage,_=n.pagerCount-2;l.className.includes("more")&&(l.className.includes("quickprev")?s=B-_:l.className.includes("quicknext")&&(s=B+_)),Number.isNaN(+s)||(s<1&&(s=1),s>N&&(s=N)),s!==B&&u("change",s)}return Ye(()=>{const t=(n.pagerCount-1)/2;b.value=!1,P.value=!1,n.pageCount>n.pagerCount&&(n.currentPage>n.pagerCount-t&&(b.value=!0),n.currentPage<n.pageCount-t&&(P.value=!0))}),(t,l)=>(c(),y("ul",{class:k(a(g).b()),onClick:v,onKeyup:We(i,["enter"])},[t.pageCount>0?(c(),y("li",{key:0,class:k([[a(g).is("active",t.currentPage===1),a(g).is("disabled",t.disabled)],"number"]),"aria-current":t.currentPage===1,"aria-label":a(o)("el.pagination.currentPage",{pager:1}),tabindex:a(q)}," 1 ",10,Me)):R("v-if",!0),b.value?(c(),y("li",{key:1,class:k(a(f)),tabindex:a(q),"aria-label":a(o)("el.pagination.prevPages",{pager:t.pagerCount-2}),onMouseenter:l[0]||(l[0]=s=>O(!0)),onMouseleave:l[1]||(l[1]=s=>w.value=!1),onFocus:l[2]||(l[2]=s=>A(!0)),onBlur:l[3]||(l[3]=s=>C.value=!1)},[!w.value&&!C.value||t.disabled?(c(),I(a(ie),{key:1})):(c(),I(a(Ze),{key:0}))],42,qe)):R("v-if",!0),(c(!0),y(le,null,se(a(S),s=>(c(),y("li",{key:s,class:k([[a(g).is("active",t.currentPage===s),a(g).is("disabled",t.disabled)],"number"]),"aria-current":t.currentPage===s,"aria-label":a(o)("el.pagination.currentPage",{pager:s}),tabindex:a(q)},U(s),11,Ae))),128)),P.value?(c(),y("li",{key:2,class:k(a($)),tabindex:a(q),"aria-label":a(o)("el.pagination.nextPages",{pager:t.pagerCount-2}),onMouseenter:l[4]||(l[4]=s=>O()),onMouseleave:l[5]||(l[5]=s=>d.value=!1),onFocus:l[6]||(l[6]=s=>A()),onBlur:l[7]||(l[7]=s=>p.value=!1)},[!d.value&&!p.value||t.disabled?(c(),I(a(ie),{key:1})):(c(),I(a(Ve),{key:0}))],42,je)):R("v-if",!0),t.pageCount>1?(c(),y("li",{key:3,class:k([[a(g).is("active",t.currentPage===t.pageCount),a(g).is("disabled",t.disabled)],"number"]),"aria-current":t.currentPage===t.pageCount,"aria-label":a(o)("el.pagination.currentPage",{pager:t.pageCount}),tabindex:a(q)},U(t.pageCount),11,Le)):R("v-if",!0)],42,Ie))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);const m=e=>typeof e!="number",Je=j({pageSize:Number,defaultPageSize:Number,total:Number,pageCount:Number,pagerCount:{type:Number,validator:e=>F(e)&&Math.trunc(e)===e&&e>4&&e<22&&e%2==1,default:7},currentPage:Number,defaultCurrentPage:Number,layout:{type:String,default:["prev","pager","next","jumper","->","total"].join(", ")},pageSizes:{type:ee(Array),default:()=>ae([10,20,30,40,50,100])},popperClass:{type:String,default:""},prevText:{type:String,default:""},prevIcon:{type:Q,default:()=>He},nextText:{type:String,default:""},nextIcon:{type:Q,default:()=>ea},teleported:{type:Boolean,default:!0},small:Boolean,background:Boolean,disabled:Boolean,hideOnSinglePage:Boolean}),D="ElPagination";ue=aa(z({name:D,props:Je,emits:{"update:current-page":e=>F(e),"update:page-size":e=>F(e),"size-change":e=>F(e),"current-change":e=>F(e),"prev-click":e=>F(e),"next-click":e=>F(e)},setup(e,{emit:u,slots:n}){const{t:g}=L(),r=K("pagination"),o=Xe().vnode.props||{},b="onUpdate:currentPage"in o||"onUpdate:current-page"in o||"onCurrentChange"in o,P="onUpdate:pageSize"in o||"onUpdate:page-size"in o||"onSizeChange"in o,w=h(()=>{if(m(e.total)&&m(e.pageCount)||!m(e.currentPage)&&!b)return!1;if(e.layout.includes("sizes")){if(m(e.pageCount)){if(!m(e.total)&&!m(e.pageSize)&&!P)return!1}else if(!P)return!1}return!0}),d=E(m(e.defaultPageSize)?10:e.defaultPageSize),C=E(m(e.defaultCurrentPage)?1:e.defaultCurrentPage),p=h({get:()=>m(e.pageSize)?d.value:e.pageSize,set(i){m(e.pageSize)&&(d.value=i),P&&(u("update:page-size",i),u("size-change",i))}}),S=h(()=>{let i=0;return m(e.pageCount)?m(e.total)||(i=Math.max(1,Math.ceil(e.total/p.value))):i=e.pageCount,i}),f=h({get:()=>m(e.currentPage)?C.value:e.currentPage,set(i){let v=i;i<1?v=1:i>S.value&&(v=S.value),m(e.currentPage)&&(C.value=v),b&&(u("update:current-page",v),u("current-change",v))}});function $(i){f.value=i}function q(){e.disabled||(f.value-=1,u("prev-click",f.value))}function O(){e.disabled||(f.value+=1,u("next-click",f.value))}function A(i,v){i&&(i.props||(i.props={}),i.props.class=[i.props.class,v].join(" "))}return W(S,i=>{f.value>i&&(f.value=i)}),De(X,{pageCount:S,disabled:h(()=>e.disabled),currentPage:f,changeEvent:$,handleSizeChange:function(i){p.value=i;const v=S.value;f.value>v&&(f.value=v)}}),()=>{var i,v;if(!w.value)return Ge(D,g("el.pagination.deprecationWarning")),null;if(!e.layout||e.hideOnSinglePage&&S.value<=1)return null;const t=[],l=[],s=M("div",{class:r.e("rightwrapper")},l),N={prev:M(be,{disabled:e.disabled,currentPage:f.value,prevText:e.prevText,prevIcon:e.prevIcon,onClick:q}),jumper:M(Ne,{size:e.small?"small":"default"}),pager:M(Fe,{currentPage:f.value,pageCount:S.value,pagerCount:e.pagerCount,onChange:$,disabled:e.disabled}),next:M(Ce,{disabled:e.disabled,currentPage:f.value,pageCount:S.value,nextText:e.nextText,nextIcon:e.nextIcon,onClick:O}),sizes:M(ze,{pageSize:p.value,pageSizes:e.pageSizes,popperClass:e.popperClass,disabled:e.disabled,teleported:e.teleported,size:e.small?"small":"default"}),slot:(v=(i=n==null?void 0:n.default)==null?void 0:i.call(n))!=null?v:null,total:M(Ee,{total:m(e.total)?0:e.total})},B=e.layout.split(",").map(T=>T.trim());let _=!1;return B.forEach(T=>{T!=="->"?_?l.push(N[T]):t.push(N[T]):_=!0}),A(t[0],r.is("first")),A(t[t.length-1],r.is("last")),_&&l.length>0&&(A(l[0],r.is("first")),A(l[l.length-1],r.is("last")),t.push(s)),M("div",{class:[r.b(),r.is("background",e.background),{[r.m("small")]:e.small}]},t)}}}))});export{ue as E,na as __tla};