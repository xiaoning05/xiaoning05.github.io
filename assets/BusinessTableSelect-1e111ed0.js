import{d as k,r as t,o as f,q as y,e as s,b as e,a as r,h as v,w as x,i as C,j,al as q,E as A,B as E,v as I,_ as N,__tla as U}from"./index-aaa5adb3.js";import{_ as D,__tla as G}from"./Dialog-9a73a39c.js";import{h as M,__tla as P}from"./index-dbe340e2.js";import{d as R,__tla as X}from"./formatTime-9c0e8879.js";let h,Y=Promise.all([(()=>{try{return U}catch{}})(),(()=>{try{return G}catch{}})(),(()=>{try{return P}catch{}})(),(()=>{try{return X}catch{}})()]).then(async()=>{h=N(k({name:"BusinessTableSelect",__name:"BusinessTableSelect",props:{modelValue:{type:Array,required:!0,default:()=>[]}},emits:["update:modelValue"],setup(Z,{expose:b,emit:w}){const _=t([]),u=t(!1),a=t(!1),i=t(!1),g=w,d=t(),p=t([]),T=o=>{p.value=o},V=()=>{i.value=!0;try{g("update:modelValue",p.value.map(o=>o.id))}finally{i.value=!1,a.value=!1}};return b({open:async()=>{a.value=!0,await q(),p.value.length>0&&d.value.clearSelection(),await(async()=>{u.value=!0;try{_.value=await M()}finally{u.value=!1}})()}}),(o,n)=>{const l=A,c=E,B=D,S=I;return f(),y(B,{modelValue:r(a),"onUpdate:modelValue":n[1]||(n[1]=m=>j(a)?a.value=m:null),appendToBody:!0,title:"\u9009\u62E9\u5546\u673A",width:"700"},{footer:s(()=>[e(c,{disabled:r(i),type:"primary",onClick:V},{default:s(()=>[v("\u786E \u5B9A")]),_:1},8,["disabled"]),e(c,{onClick:n[0]||(n[0]=m=>a.value=!1)},{default:s(()=>[v("\u53D6 \u6D88")]),_:1})]),default:s(()=>[x((f(),y(r(C),{ref_key:"multipleTableRef",ref:d,data:r(_),"show-overflow-tooltip":!0,stripe:!0,onSelectionChange:T},{default:s(()=>[e(l,{type:"selection",width:"55"}),e(l,{align:"center",label:"\u5546\u673A\u540D\u79F0",prop:"name"}),e(l,{align:"center",label:"\u5BA2\u6237\u540D\u79F0",prop:"customerName"}),e(l,{align:"center",label:"\u5546\u673A\u91D1\u989D",prop:"price"}),e(l,{formatter:r(R),align:"center",label:"\u9884\u8BA1\u6210\u4EA4\u65E5\u671F",prop:"dealTime",width:"180px"},null,8,["formatter"]),e(l,{align:"center",label:"\u5907\u6CE8",prop:"remark"})]),_:1},8,["data"])),[[S,r(u)]])]),_:1},8,["modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/crm/followup/components/BusinessTableSelect.vue"]])});export{Y as __tla,h as default};
