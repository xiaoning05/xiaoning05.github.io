import{d as f,ag as n,a1 as u,o as a,v as s,w as _,aj as m,a as I,bh as k,C as y,a4 as r,h as b,t as g,_ as x,__tla as C}from"./index-d5b00dc9.js";import{_ as h}from"./_plugin-vue_export-helper-1b428a4d.js";let c,v=Promise.all([(()=>{try{return C}catch{}})()]).then(async()=>{c=h(f({name:"XTextButton",__name:"XTextButton",props:{modelValue:n.bool.def(!1),loading:n.bool.def(!1),preIcon:n.string.def(""),postIcon:n.string.def(""),title:n.string.def(""),type:n.oneOf(["","primary","success","warning","danger","info"]).def("primary"),circle:n.bool.def(!1),round:n.bool.def(!1),plain:n.bool.def(!1),onClick:{type:Function,default:null}},setup(e){const i=e,p=u(()=>{const l=["title","preIcon","postIcon","onClick"],o={...k(),...i};for(const t in o)l.indexOf(t)!==-1&&delete o[t];return o});return(l,o)=>{const t=x,d=y;return a(),s(d,m({link:""},I(p),{onClick:e.onClick}),{default:_(()=>[e.preIcon?(a(),s(t,{key:0,icon:e.preIcon,class:"mr-1px"},null,8,["icon"])):r("",!0),b(" "+g(e.title?e.title:"")+" ",1),e.postIcon?(a(),s(t,{key:1,icon:e.postIcon,class:"mr-1px"},null,8,["icon"])):r("",!0)]),_:1},16,["onClick"])}}}),[["__scopeId","data-v-7561ab3f"]])});export{c as _,v as __tla};
