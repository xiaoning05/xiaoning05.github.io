import{d as V,r as f,p as D,o as Y,c as H,b as t,e as s,h as c,a as i,j as h,aH as M,c4 as u,ax as j,af as k,z as C,__tla as P}from"./index-34f06ebd.js";import{h as U,i as z,j as O,k as R,l as S,__tla as $}from"./formatTime-ed0a77fd.js";let p,q=Promise.all([(()=>{try{return P}catch{}})(),(()=>{try{return $}catch{}})()]).then(async()=>{let d;d={class:"flex flex-row items-center gap-2"},p=V({name:"ShortcutDateRangePicker",__name:"index",emits:["change"],setup(A,{expose:x,emit:v}){const l=f(7),a=f(["",""]);x({times:a});const b=[{text:"\u6628\u5929",value:()=>U(new Date,-1)},{text:"\u6700\u8FD17\u5929",value:()=>z()},{text:"\u672C\u6708",value:()=>[u().startOf("M"),u().subtract(1,"d")]},{text:"\u6700\u8FD130\u5929",value:()=>O()},{text:"\u6700\u8FD11\u5E74",value:()=>R()}],m=async()=>{(function(){const n=u().subtract(l.value,"d"),e=u().subtract(1,"d");a.value=S(n,e)})(),await _()},g=v,_=async()=>{g("change",a.value)};return D(()=>{m()}),(n,e)=>{const o=j,w=k,y=C;return Y(),H("div",d,[t(w,{modelValue:i(l),"onUpdate:modelValue":e[0]||(e[0]=r=>h(l)?l.value=r:null),onChange:m},{default:s(()=>[t(o,{label:1},{default:s(()=>[c("\u6628\u5929")]),_:1}),t(o,{label:7},{default:s(()=>[c("\u6700\u8FD17\u5929")]),_:1}),t(o,{label:30},{default:s(()=>[c("\u6700\u8FD130\u5929")]),_:1})]),_:1},8,["modelValue"]),t(y,{modelValue:i(a),"onUpdate:modelValue":e[1]||(e[1]=r=>h(a)?a.value=r:null),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],shortcuts:b,class:"!w-240px",onChange:_},null,8,["modelValue","default-time"]),M(n.$slots,"default")])}}})});export{p as _,q as __tla};