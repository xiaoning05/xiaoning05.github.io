import{d as f,ad as n,X as u,o as a,q as l,e as _,ag as m,a as I,bc as k,A as b,$ as c,h as g,t as y,_ as C,__tla as x}from"./index-34f06ebd.js";import{_ as h}from"./_plugin-vue_export-helper-1b428a4d.js";let r,X=Promise.all([(()=>{try{return x}catch{}})()]).then(async()=>{r=h(f({name:"XButton",__name:"XButton",props:{modelValue:n.bool.def(!1),loading:n.bool.def(!1),preIcon:n.string.def(""),postIcon:n.string.def(""),title:n.string.def(""),type:n.oneOf(["","primary","success","warning","danger","info"]).def(""),link:n.bool.def(!1),circle:n.bool.def(!1),round:n.bool.def(!1),plain:n.bool.def(!1),onClick:{type:Function,default:null}},setup(e){const i=e,d=u(()=>{const s=["title","preIcon","postIcon","onClick"],t={...k(),...i};for(const o in t)s.indexOf(o)!==-1&&delete t[o];return t});return(s,t)=>{const o=C,p=b;return a(),l(p,m(I(d),{onClick:e.onClick}),{default:_(()=>[e.preIcon?(a(),l(o,{key:0,icon:e.preIcon,class:"mr-1px"},null,8,["icon"])):c("",!0),g(" "+y(e.title?e.title:"")+" ",1),e.postIcon?(a(),l(o,{key:1,icon:e.postIcon,class:"mr-1px"},null,8,["icon"])):c("",!0)]),_:1},16,["onClick"])}}}),[["__scopeId","data-v-9ff26ce2"]])});export{r as _,X as __tla};