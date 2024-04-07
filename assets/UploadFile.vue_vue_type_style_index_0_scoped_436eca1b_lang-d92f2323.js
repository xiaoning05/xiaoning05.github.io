import{d as L,ae as i,r as p,aR as Y,o as P,c as C,b as v,cs as D,e as _,a as y,j as E,aY as z,bh as G,f,h as m,t as S,A as H,B as J,__tla as K}from"./index-aaa5adb3.js";import{u as N,__tla as Q}from"./useUpload-c52dec87.js";import{u as W,__tla as X}from"./useMessage-873da1e2.js";let U,Z=Promise.all([(()=>{try{return K}catch{}})(),(()=>{try{return Q}catch{}})(),(()=>{try{return X}catch{}})()]).then(async()=>{let h,x,b,g,O;h={class:"upload-file"},x={style:{"font-size":"8px"}},b={style:{color:"#f56c6c"}},g={style:{"font-size":"8px"}},O={style:{color:"#f56c6c"}},U=L({name:"UploadFile",__name:"UploadFile",props:{modelValue:i.oneOfType([String,Array]).isRequired,title:i.string.def("\u6587\u4EF6\u4E0A\u4F20"),fileType:i.array.def(["doc","xls","ppt","txt","pdf"]),fileSize:i.number.def(5),limit:i.number.def(5),autoUpload:i.bool.def(!0),drag:i.bool.def(!1),isShowTip:i.bool.def(!0)},emits:["update:modelValue"],setup(r,{emit:I}){const s=W(),V=I,t=r,j=p(),n=p([]),l=p([]),c=p(0),{uploadUrl:q,httpRequest:w}=N(),R=e=>{if(l.value.length>=t.limit)return s.error(`\u4E0A\u4F20\u6587\u4EF6\u6570\u91CF\u4E0D\u80FD\u8D85\u8FC7${t.limit}\u4E2A!`),!1;let a="";e.name.lastIndexOf(".")>-1&&(a=e.name.slice(e.name.lastIndexOf(".")+1));const o=t.fileType.some(d=>e.type.indexOf(d)>-1||!!(a&&a.indexOf(d)>-1)),u=e.size<1024*t.fileSize*1024;return o?u?(s.success("\u6B63\u5728\u4E0A\u4F20\u6587\u4EF6\uFF0C\u8BF7\u7A0D\u5019..."),void c.value++):(s.error(`\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7${t.fileSize}MB!`),!1):(s.error(`\u6587\u4EF6\u683C\u5F0F\u4E0D\u6B63\u786E, \u8BF7\u4E0A\u4F20${t.fileType.join("/")}\u683C\u5F0F!`),!1)},$=e=>{s.success("\u4E0A\u4F20\u6210\u529F");const a=l.value.findIndex(o=>{var u;return((u=o.response)==null?void 0:u.data)===e.data});l.value.splice(a,1),n.value.push({name:e.data,url:e.data}),n.value.length==c.value&&(l.value.push(...n.value),n.value=[],c.value=0,T())},B=()=>{s.error(`\u4E0A\u4F20\u6587\u4EF6\u6570\u91CF\u4E0D\u80FD\u8D85\u8FC7${t.limit}\u4E2A!`)},k=()=>{s.error("\u5BFC\u5165\u6570\u636E\u5931\u8D25\uFF0C\u8BF7\u60A8\u91CD\u65B0\u4E0A\u4F20\uFF01")},A=e=>{const a=l.value.map(o=>o.name).indexOf(e.name);a>-1&&(l.value.splice(a,1),T())},F=e=>{console.log(e)};Y(()=>t.modelValue,e=>{e?(l.value=[],z(e)?l.value.push(...e.split(",").map(a=>({name:a.substring(a.lastIndexOf("/")+1),url:a}))):l.value.push(...e.map(a=>({name:a.substring(a.lastIndexOf("/")+1),url:a})))):l.value=[]},{immediate:!0,deep:!0});const T=()=>{let e=l.value.map(a=>a.url);(t.limit===1||z(t.modelValue))&&(e=e.join(",")),V("update:modelValue",e)};return(e,a)=>{const o=H,u=J,d=G;return P(),C("div",h,[v(d,{ref_key:"uploadRef",ref:j,"file-list":y(l),"onUpdate:fileList":a[0]||(a[0]=M=>E(l)?l.value=M:null),action:y(q),"auto-upload":r.autoUpload,"before-upload":R,drag:r.drag,limit:t.limit,multiple:t.limit>1,"on-error":k,"on-exceed":B,"on-preview":F,"on-remove":A,"on-success":$,"show-file-list":!0,"http-request":y(w),class:"upload-file-uploader",name:"file"},D({default:_(()=>[v(u,{type:"primary"},{default:_(()=>[v(o,{icon:"ep:upload-filled"}),m(" \u9009\u53D6\u6587\u4EF6 ")]),_:1})]),_:2},[r.isShowTip?{name:"tip",fn:_(()=>[f("div",x,[m(" \u5927\u5C0F\u4E0D\u8D85\u8FC7 "),f("b",b,S(r.fileSize)+"MB",1)]),f("div",g,[m(" \u683C\u5F0F\u4E3A "),f("b",O,S(r.fileType.join("/")),1),m(" \u7684\u6587\u4EF6 ")])]),key:"0"}:void 0]),1032,["file-list","action","auto-upload","drag","limit","multiple","http-request"])])}}})});export{U as _,Z as __tla};
