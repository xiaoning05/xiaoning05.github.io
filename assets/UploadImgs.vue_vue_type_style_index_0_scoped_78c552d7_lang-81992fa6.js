import{d as G,ad as s,cn as J,r as o,aQ as K,o as b,c as T,b as v,e as U,a as p,j as N,M as W,f as r,aH as j,q as X,$ as M,bi as g,bg as Y,aP as ee,_ as ae,P as le,Q as te,__tla as se}from"./index-34f06ebd.js";import{E as ie,__tla as re}from"./el-image-viewer-331eba6f.js";import{u as ue,__tla as de}from"./useUpload-76a6f89f.js";import{u as ne,__tla as oe}from"./useMessage-7a5ab7ef.js";let P,pe=Promise.all([(()=>{try{return se}catch{}})(),(()=>{try{return re}catch{}})(),(()=>{try{return de}catch{}})(),(()=>{try{return oe}catch{}})()]).then(async()=>{let _,x,k,C,q,w,z,V,$;_=l=>(le("data-v-78c552d7"),l=l(),te(),l),x={class:"upload-box"},k={class:"upload-empty"},C=["src"],q=["onClick"],w=_(()=>r("span",null,"\u67E5\u770B",-1)),z=["onClick"],V=_(()=>r("span",null,"\u5220\u9664",-1)),$={class:"el-upload__tip"},P=G({name:"UploadImgs",__name:"UploadImgs",props:{modelValue:s.oneOfType([String,Array]).isRequired,drag:s.bool.def(!0),disabled:s.bool.def(!1),limit:s.number.def(5),fileSize:s.number.def(5),fileType:s.array.def(["image/jpeg","image/png","image/gif"]),height:s.string.def("150px"),width:s.string.def("150px"),borderradius:s.string.def("8px")},emits:["update:modelValue"],setup(l,{emit:O}){J(a=>({"4d6bb537":l.borderradius,"7908ce6d":l.width,e37bf540:l.height}));const Q=ne(),n=l,{uploadUrl:R,httpRequest:A}=ue(),t=o([]),y=o(0),c=o([]),E=a=>{const e=a.size/1024/1024<n.fileSize,i=n.fileType;return i.includes(a.type)||g({title:"\u6E29\u99A8\u63D0\u793A",message:"\u4E0A\u4F20\u56FE\u7247\u4E0D\u7B26\u5408\u6240\u9700\u7684\u683C\u5F0F\uFF01",type:"warning"}),e||g({title:"\u6E29\u99A8\u63D0\u793A",message:`\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 ${n.fileSize}M\uFF01`,type:"warning"}),y.value++,i.includes(a.type)&&e},I=O,H=a=>{Q.success("\u4E0A\u4F20\u6210\u529F");const e=t.value.findIndex(i=>{var m;return((m=i.response)==null?void 0:m.data)===a.data});t.value.splice(e,1),c.value.push({name:a.data,url:a.data}),c.value.length==y.value&&(t.value.push(...c.value),c.value=[],y.value=0,L())};K(()=>n.modelValue,a=>{a?(t.value=[],t.value.push(...a.map(e=>({name:e.substring(e.lastIndexOf("/")+1),url:e})))):t.value=[]},{immediate:!0,deep:!0});const L=()=>{let a=t.value.map(e=>e.url);I("update:modelValue",a)},B=()=>{g({title:"\u6E29\u99A8\u63D0\u793A",message:"\u56FE\u7247\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u60A8\u91CD\u65B0\u4E0A\u4F20\uFF01",type:"error"})},D=()=>{g({title:"\u6E29\u99A8\u63D0\u793A",message:`\u5F53\u524D\u6700\u591A\u53EA\u80FD\u4E0A\u4F20 ${n.limit} \u5F20\u56FE\u7247\uFF0C\u8BF7\u79FB\u9664\u540E\u4E0A\u4F20\uFF01`,type:"warning"})},S=o(""),h=o(!1);return(a,e)=>{const i=ae,m=Y,Z=ie;return b(),T("div",x,[v(m,{"file-list":p(t),"onUpdate:fileList":e[1]||(e[1]=u=>N(t)?t.value=u:null),accept:l.fileType.join(","),action:p(R),"before-upload":E,class:W(["upload",l.drag?"no-border":""]),drag:l.drag,limit:l.limit,multiple:!0,"on-error":B,"on-exceed":D,"on-success":H,"http-request":p(A),"list-type":"picture-card"},{file:U(({file:u})=>[r("img",{src:u.url,class:"upload-image"},null,8,C),r("div",{class:"upload-handle",onClick:e[0]||(e[0]=ee(()=>{},["stop"]))},[r("div",{class:"handle-icon",onClick:F=>{return d=u,S.value=d.url,void(h.value=!0);var d}},[v(i,{icon:"ep:zoom-in"}),w],8,q),l.disabled?M("",!0):(b(),T("div",{key:0,class:"handle-icon",onClick:F=>{return d=u,t.value=t.value.filter(f=>f.url!==d.url||f.name!==d.name),void I("update:modelValue",t.value.map(f=>f.url));var d}},[v(i,{icon:"ep:delete"}),V],8,z))])]),default:U(()=>[r("div",k,[j(a.$slots,"empty",{},()=>[v(i,{icon:"ep:plus"})],!0)])]),_:3},8,["file-list","accept","action","class","drag","limit","http-request"]),r("div",$,[j(a.$slots,"tip",{},void 0,!0)]),p(h)?(b(),X(Z,{key:0,"url-list":[p(S)],onClose:e[2]||(e[2]=u=>h.value=!1)},null,8,["url-list"])):M("",!0)])}}})});export{P as _,pe as __tla};
