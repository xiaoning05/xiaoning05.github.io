import{d as F,ae as s,cp as G,r as o,aR as H,o as b,c as R,b as f,e as S,a as p,j as J,N as K,f as r,aI as T,q as X,a0 as U,bj as g,bh as Z,aQ as ee,A as ae,Q as le,R as te,__tla as se}from"./index-b079f499.js";import{E as ie,__tla as re}from"./el-image-viewer-3e8b0085.js";import{u as ue,__tla as de}from"./useUpload-ca092158.js";import{u as ne,__tla as oe}from"./useMessage-66b9cf03.js";let A,pe=Promise.all([(()=>{try{return se}catch{}})(),(()=>{try{return re}catch{}})(),(()=>{try{return de}catch{}})(),(()=>{try{return oe}catch{}})()]).then(async()=>{let _,x,k,w,C,V,j,q,z;_=l=>(le("data-v-9d666400"),l=l(),te(),l),x={class:"upload-box"},k={class:"upload-empty"},w=["src"],C=["onClick"],V=_(()=>r("span",null,"\u67E5\u770B",-1)),j=["onClick"],q=_(()=>r("span",null,"\u5220\u9664",-1)),z={class:"el-upload__tip"},A=F({name:"UploadImgs",__name:"UploadImgs",props:{modelValue:s.oneOfType([String,Array]).isRequired,drag:s.bool.def(!0),disabled:s.bool.def(!1),limit:s.number.def(5),fileSize:s.number.def(5),fileType:s.array.def(["image/jpeg","image/png","image/gif"]),height:s.string.def("150px"),width:s.string.def("150px"),borderradius:s.string.def("8px")},emits:["update:modelValue"],setup(l,{emit:O}){G(a=>({"9d666400-borderradius":l.borderradius,"9d666400-width":l.width,"9d666400-height":l.height}));const Q=ne(),n=l,{uploadUrl:E,httpRequest:L}=ue(),t=o([]),h=o(0),c=o([]),M=a=>{const e=a.size/1024/1024<n.fileSize,i=n.fileType;return i.includes(a.type)||g({title:"\u6E29\u99A8\u63D0\u793A",message:"\u4E0A\u4F20\u56FE\u7247\u4E0D\u7B26\u5408\u6240\u9700\u7684\u683C\u5F0F\uFF01",type:"warning"}),e||g({title:"\u6E29\u99A8\u63D0\u793A",message:`\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 ${n.fileSize}M\uFF01`,type:"warning"}),h.value++,i.includes(a.type)&&e},I=O,N=a=>{Q.success("\u4E0A\u4F20\u6210\u529F");const e=t.value.findIndex(i=>{var m;return((m=i.response)==null?void 0:m.data)===a.data});t.value.splice(e,1),c.value.push({name:a.data,url:a.data}),c.value.length==h.value&&(t.value.push(...c.value),c.value=[],h.value=0,B())};H(()=>n.modelValue,a=>{a?(t.value=[],t.value.push(...a.map(e=>({name:e.substring(e.lastIndexOf("/")+1),url:e})))):t.value=[]},{immediate:!0,deep:!0});const B=()=>{let a=t.value.map(e=>e.url);I("update:modelValue",a)},D=()=>{g({title:"\u6E29\u99A8\u63D0\u793A",message:"\u56FE\u7247\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u60A8\u91CD\u65B0\u4E0A\u4F20\uFF01",type:"error"})},P=()=>{g({title:"\u6E29\u99A8\u63D0\u793A",message:`\u5F53\u524D\u6700\u591A\u53EA\u80FD\u4E0A\u4F20 ${n.limit} \u5F20\u56FE\u7247\uFF0C\u8BF7\u79FB\u9664\u540E\u4E0A\u4F20\uFF01`,type:"warning"})},$=o(""),y=o(!1);return(a,e)=>{const i=ae,m=Z,W=ie;return b(),R("div",x,[f(m,{"file-list":p(t),"onUpdate:fileList":e[1]||(e[1]=u=>J(t)?t.value=u:null),accept:l.fileType.join(","),action:p(E),"before-upload":M,class:K(["upload",l.drag?"no-border":""]),drag:l.drag,limit:l.limit,multiple:!0,"on-error":D,"on-exceed":P,"on-success":N,"http-request":p(L),"list-type":"picture-card"},{file:S(({file:u})=>[r("img",{src:u.url,class:"upload-image"},null,8,w),r("div",{class:"upload-handle",onClick:e[0]||(e[0]=ee(()=>{},["stop"]))},[r("div",{class:"handle-icon",onClick:Y=>{return d=u,$.value=d.url,void(y.value=!0);var d}},[f(i,{icon:"ep:zoom-in"}),V],8,C),l.disabled?U("",!0):(b(),R("div",{key:0,class:"handle-icon",onClick:Y=>{return d=u,t.value=t.value.filter(v=>v.url!==d.url||v.name!==d.name),void I("update:modelValue",t.value.map(v=>v.url));var d}},[f(i,{icon:"ep:delete"}),q],8,j))])]),default:S(()=>[r("div",k,[T(a.$slots,"empty",{},()=>[f(i,{icon:"ep:plus"})],!0)])]),_:3},8,["file-list","accept","action","class","drag","limit","http-request"]),r("div",z,[T(a.$slots,"tip",{},void 0,!0)]),p(y)?(b(),X(W,{key:0,"url-list":[p($)],onClose:e[2]||(e[2]=u=>y.value=!1)},null,8,["url-list"])):U("",!0)])}}})});export{A as _,pe as __tla};
