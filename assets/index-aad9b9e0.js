import{d as x,X as g,o as s,c as o,F as f,g as b,at as a,b as d,e as R,f as c,a as v,_ as w,__tla as $}from"./index-34f06ebd.js";import{E as B,__tla as T}from"./el-image-a5cf0b35.js";import{__tla as L}from"./el-image-viewer-331eba6f.js";let h,M=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return T}catch{}})(),(()=>{try{return L}catch{}})()]).then(async()=>{let p,r;p={class:"image-slot"},r=93.75,h=x({name:"MagicCube",__name:"index",props:{property:{}},setup(u){const i=u,y=g(()=>{let t=0;return i.property.list.length>0&&(t=Math.max(...i.property.list.map(l=>l.bottom))),t+1});return(t,l)=>{const m=w,_=B;return s(),o("div",{class:"relative",style:a({height:v(y)*r+"px",width:"375px"})},[(s(!0),o(f,null,b(t.property.list,(e,n)=>(s(),o("div",{key:n,class:"absolute",style:a({width:e.width*r-2*t.property.space+"px",height:e.height*r-2*t.property.space+"px",margin:`${t.property.space}px`,top:e.top*r+"px",left:e.left*r+"px"})},[d(_,{class:"h-full w-full",fit:"cover",src:e.imgUrl,style:a({borderTopLeftRadius:`${t.property.borderRadiusTop}px`,borderTopRightRadius:`${t.property.borderRadiusTop}px`,borderBottomLeftRadius:`${t.property.borderRadiusBottom}px`,borderBottomRightRadius:`${t.property.borderRadiusBottom}px`})},{error:R(()=>[c("div",p,[c("div",{class:"flex items-center justify-center",style:a({width:e.width*r+"px",height:e.height*r+"px"})},[d(m,{icon:"ep-picture",color:"gray",size:r})],4)])]),_:2},1032,["src","style"])],4))),128))],4)}}})});export{M as __tla,h as default};
