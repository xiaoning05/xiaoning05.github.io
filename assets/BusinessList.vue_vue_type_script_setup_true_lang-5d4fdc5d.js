import{d as g,r as w,aQ as x,a as r,o as y,q as v,e as n,b as e,h as I,E as N,A as k,i as T,__tla as B}from"./index-34f06ebd.js";import{d as i,__tla as C}from"./formatTime-ed0a77fd.js";import{i as L,__tla as q}from"./index-afd15d48.js";let p,A=Promise.all([(()=>{try{return B}catch{}})(),(()=>{try{return C}catch{}})(),(()=>{try{return q}catch{}})()]).then(async()=>{p=g({name:"BusinessList",__name:"BusinessList",props:{businessIds:{default:()=>[]}},emits:["update:businessIds"],setup(c,{emit:d}){const m=c,t=w([]);x(()=>m.businessIds,l=>{l&&l.length!==0&&(t.value=L(r(l)))});const u=d;return(l,E)=>{const a=N,_=k,b=T;return y(),v(b,{data:r(t),"show-overflow-tooltip":!0,stripe:!0,height:"200"},{default:n(()=>[e(a,{align:"center",label:"\u5546\u673A\u540D\u79F0",prop:"name"}),e(a,{align:"center",label:"\u5BA2\u6237\u540D\u79F0",prop:"customerName"}),e(a,{align:"center",label:"\u5546\u673A\u91D1\u989D",prop:"price"}),e(a,{formatter:r(i),align:"center",label:"\u9884\u8BA1\u6210\u4EA4\u65E5\u671F",prop:"dealTime",width:"120px"},null,8,["formatter"]),e(a,{align:"center",label:"\u5546\u673A\u72B6\u6001\u7C7B\u578B",prop:"statusTypeName",width:"120"}),e(a,{align:"center",label:"\u5546\u673A\u72B6\u6001",prop:"statusName"}),e(a,{formatter:r(i),align:"center",label:"\u66F4\u65B0\u65F6\u95F4",prop:"updateTime",width:"180px"},null,8,["formatter"]),e(a,{formatter:r(i),align:"center",label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",width:"180px"},null,8,["formatter"]),e(a,{align:"center",label:"\u8D1F\u8D23\u4EBA",prop:"ownerUserName",width:"120"}),e(a,{align:"center",label:"\u521B\u5EFA\u4EBA",prop:"creatorName",width:"120"}),e(a,{align:"center",label:"\u5907\u6CE8",prop:"remark"}),e(a,{align:"center",fixed:"right",label:"\u64CD\u4F5C",width:"130"},{default:n(h=>[e(_,{link:"",type:"danger",onClick:P=>(f=>{const o=t.value.findIndex(s=>s.id===f);o!==-1&&t.value.splice(o,1),u("update:businessIds",t.value.map(s=>s.id))})(h.row.id)},{default:n(()=>[I(" \u79FB\u9664")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])}}})});export{p as _,A as __tla};