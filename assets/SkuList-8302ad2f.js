import{d as Y,ae as P,r as B,aR as F,o as u,c as V,q as h,e as i,a as m,a0 as _,F as v,b as a,g as S,f as N,t as p,h as f,i as A,aI as H,dF as K,E as Q,L as ee,bX as le,B as te,_ as ae,__tla as re}from"./index-aaa5adb3.js";import{E as ie,__tla as oe}from"./el-image-1cd11263.js";import{__tla as ne}from"./el-image-viewer-fc91515b.js";import{_ as se,__tla as ce}from"./UploadImg-9fa46f1e.js";import{__tla as de}from"./UploadImgs.vue_vue_type_style_index_0_scoped_9d666400_lang-4f9fa2ef.js";import{__tla as ue}from"./UploadFile.vue_vue_type_style_index_0_scoped_436eca1b_lang-d92f2323.js";import{c as me,__tla as pe}from"./index-93c914d7.js";import{u as fe,__tla as he}from"./useMessage-873da1e2.js";import{__tla as _e}from"./useUpload-c52dec87.js";import{__tla as we}from"./index-fb6b5360.js";let R,ge=Promise.all([(()=>{try{return re}catch{}})(),(()=>{try{return oe}catch{}})(),(()=>{try{return ne}catch{}})(),(()=>{try{return ce}catch{}})(),(()=>{try{return de}catch{}})(),(()=>{try{return ue}catch{}})(),(()=>{try{return pe}catch{}})(),(()=>{try{return he}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return we}catch{}})()]).then(async()=>{let T,E,L;T={style:{"font-weight":"bold",color:"#40aaff"}},E={style:{"font-weight":"bold",color:"#40aaff"}},L={style:{"font-weight":"bold",color:"#40aaff"}},R=ae(Y({name:"SkuList",__name:"SkuList",props:{propFormData:{type:Object,default:()=>{}},propertyList:{type:Array,default:()=>[]},ruleConfig:{type:Array,default:()=>[]},isBatch:P.bool.def(!1),isDetail:P.bool.def(!1),isComponent:P.bool.def(!1),isActivityComponent:P.bool.def(!1)},emits:["selectionChange"],setup(w,{expose:j,emit:X}){const Z=fe(),b=w,c=B(),x=B([{price:0,marketPrice:0,costPrice:0,barCode:"",picUrl:"",stock:0,weight:0,volume:0,firstBrokeragePrice:0,secondBrokeragePrice:0}]),D=r=>{me({zIndex:9999999,urlList:[r]})},$=()=>{c.value.skus.forEach(r=>{K(r,x.value[0])})},U=B([]),q=(r,d)=>{const e=d.split(".");let o=r;for(const n of e){if(!o||typeof o!="object"||!(n in o)){o=void 0;break}o=o[n]}return o},G=X,M=r=>{G("selectionChange",r)};F(()=>b.propFormData,r=>{r&&(c.value=r)},{deep:!0,immediate:!0});const I=r=>{const d=r.map(o=>o.values.map(n=>({propertyId:o.id,propertyName:o.name,valueId:n.id,valueName:n.name}))),e=z(d);O(r)||(c.value.skus=[]);for(const o of e){const n={properties:Array.isArray(o)?o:[o],price:0,marketPrice:0,costPrice:0,barCode:"",picUrl:"",stock:0,weight:0,volume:0,firstBrokeragePrice:0,secondBrokeragePrice:0};c.value.skus.findIndex(k=>JSON.stringify(k.properties)===JSON.stringify(n.properties))===-1&&c.value.skus.push(n)}},O=r=>{const d=[];c.value.skus.forEach(o=>{var n,k;return(k=(n=o.properties)==null?void 0:n.map(y=>y.propertyId))==null?void 0:k.forEach(y=>{d.indexOf(y)===-1&&d.push(y)})});const e=r.map(o=>o.id);return d.length===e.length},z=r=>{if(r.length===0)return[];if(r.length===1)return r[0];{const d=[],e=z(r.slice(1));for(let o=0;o<r[0].length;o++)for(let n=0;n<e.length;n++)Array.isArray(e[n])?d.push([r[0][o],...e[n]]):d.push([r[0][o],e[n]]);return d}};F(()=>b.propertyList,r=>{c.value.specType&&(b.isBatch&&(x.value=[{price:0,marketPrice:0,costPrice:0,barCode:"",picUrl:"",stock:0,weight:0,volume:0,firstBrokeragePrice:0,secondBrokeragePrice:0}]),JSON.stringify(r)!=="[]"&&(U.value=[],r.forEach((d,e)=>{U.value.push({prop:`name${e}`,label:d.name})}),O(r)||r.some(d=>d.values.length===0)||I(r)))},{deep:!0,immediate:!0});const J=B();return j({generateTableData:I,validateSku:()=>{let r="\u8BF7\u68C0\u67E5\u5546\u54C1\u5404\u884C\u76F8\u5173\u5C5E\u6027\u914D\u7F6E\uFF0C",d=!0;for(const e of c.value.skus){for(const o of b==null?void 0:b.ruleConfig){const n=q(e,o.name);if(!o.rule(n)){d=!1,r+=o.message;break}}if(!d)throw Z.warning(r),new Error(r)}},getSkuTableRef:()=>J.value}),(r,d)=>{const e=Q,o=ee,n=le,k=te,y=ie;return u(),V(v,null,[w.isDetail||w.isActivityComponent?_("",!0):(u(),h(m(A),{key:0,data:w.isBatch?m(x):m(c).skus,border:"",class:"tabNumWidth","max-height":"500",size:"small"},{default:i(()=>{var l;return[a(e,{align:"center",label:"\u56FE\u7247","min-width":"65"},{default:i(({row:t})=>[a(m(se),{modelValue:t.picUrl,"onUpdate:modelValue":s=>t.picUrl=s,height:"50px",width:"50px"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),m(c).specType&&!w.isBatch?(u(!0),V(v,{key:0},S(m(U),(t,s)=>(u(),h(e,{key:s,label:t.label,align:"center","min-width":"120"},{default:i(({row:g})=>{var C;return[N("span",T,p((C=g.properties[s])==null?void 0:C.valueName),1)]}),_:2},1032,["label"]))),128)):_("",!0),a(e,{align:"center",label:"\u5546\u54C1\u6761\u7801","min-width":"168"},{default:i(({row:t})=>[a(o,{modelValue:t.barCode,"onUpdate:modelValue":s=>t.barCode=s,class:"w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(e,{align:"center",label:"\u9500\u552E\u4EF7","min-width":"168"},{default:i(({row:t})=>[a(n,{modelValue:t.price,"onUpdate:modelValue":s=>t.price=s,min:0,precision:2,step:.1,class:"w-100%","controls-position":"right"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(e,{align:"center",label:"\u5E02\u573A\u4EF7","min-width":"168"},{default:i(({row:t})=>[a(n,{modelValue:t.marketPrice,"onUpdate:modelValue":s=>t.marketPrice=s,min:0,precision:2,step:.1,class:"w-100%","controls-position":"right"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(e,{align:"center",label:"\u6210\u672C\u4EF7","min-width":"168"},{default:i(({row:t})=>[a(n,{modelValue:t.costPrice,"onUpdate:modelValue":s=>t.costPrice=s,min:0,precision:2,step:.1,class:"w-100%","controls-position":"right"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(e,{align:"center",label:"\u5E93\u5B58","min-width":"168"},{default:i(({row:t})=>[a(n,{modelValue:t.stock,"onUpdate:modelValue":s=>t.stock=s,min:0,class:"w-100%","controls-position":"right"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(e,{align:"center",label:"\u91CD\u91CF(kg)","min-width":"168"},{default:i(({row:t})=>[a(n,{modelValue:t.weight,"onUpdate:modelValue":s=>t.weight=s,min:0,precision:2,step:.1,class:"w-100%","controls-position":"right"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(e,{align:"center",label:"\u4F53\u79EF(m^3)","min-width":"168"},{default:i(({row:t})=>[a(n,{modelValue:t.volume,"onUpdate:modelValue":s=>t.volume=s,min:0,precision:2,step:.1,class:"w-100%","controls-position":"right"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),m(c).subCommissionType?(u(),V(v,{key:1},[a(e,{align:"center",label:"\u4E00\u7EA7\u8FD4\u4F63(\u5143)","min-width":"168"},{default:i(({row:t})=>[a(n,{modelValue:t.firstBrokeragePrice,"onUpdate:modelValue":s=>t.firstBrokeragePrice=s,min:0,precision:2,step:.1,class:"w-100%","controls-position":"right"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(e,{align:"center",label:"\u4E8C\u7EA7\u8FD4\u4F63(\u5143)","min-width":"168"},{default:i(({row:t})=>[a(n,{modelValue:t.secondBrokeragePrice,"onUpdate:modelValue":s=>t.secondBrokeragePrice=s,min:0,precision:2,step:.1,class:"w-100%","controls-position":"right"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})],64)):_("",!0),(l=m(c))!=null&&l.specType?(u(),h(e,{key:2,align:"center",fixed:"right",label:"\u64CD\u4F5C",width:"80"},{default:i(({row:t})=>[w.isBatch?(u(),h(k,{key:0,link:"",size:"small",type:"primary",onClick:$},{default:i(()=>[f(" \u6279\u91CF\u6DFB\u52A0 ")]),_:1})):(u(),h(k,{key:1,link:"",size:"small",type:"primary",onClick:s=>(g=>{const C=c.value.skus.findIndex(W=>JSON.stringify(W.properties)===JSON.stringify(g.properties));c.value.skus.splice(C,1)})(t)},{default:i(()=>[f("\u5220\u9664")]),_:2},1032,["onClick"]))]),_:1})):_("",!0)]}),_:1},8,["data"])),w.isDetail?(u(),h(m(A),{key:1,ref_key:"activitySkuListRef",ref:J,data:m(c).skus,border:"","max-height":"500",size:"small",style:{width:"99%"},onSelectionChange:M},{default:i(()=>[w.isComponent?(u(),h(e,{key:0,type:"selection",width:"45"})):_("",!0),a(e,{align:"center",label:"\u56FE\u7247","min-width":"80"},{default:i(({row:l})=>[l.picUrl?(u(),h(y,{key:0,src:l.picUrl,class:"h-50px w-50px",onClick:t=>D(l.picUrl)},null,8,["src","onClick"])):_("",!0)]),_:1}),m(c).specType&&!w.isBatch?(u(!0),V(v,{key:1},S(m(U),(l,t)=>(u(),h(e,{key:t,label:l.label,align:"center","min-width":"80"},{default:i(({row:s})=>{var g;return[N("span",E,p((g=s.properties[t])==null?void 0:g.valueName),1)]}),_:2},1032,["label"]))),128)):_("",!0),a(e,{align:"center",label:"\u5546\u54C1\u6761\u7801","min-width":"100"},{default:i(({row:l})=>[f(p(l.barCode),1)]),_:1}),a(e,{align:"center",label:"\u9500\u552E\u4EF7(\u5143)","min-width":"80"},{default:i(({row:l})=>[f(p(l.price),1)]),_:1}),a(e,{align:"center",label:"\u5E02\u573A\u4EF7(\u5143)","min-width":"80"},{default:i(({row:l})=>[f(p(l.marketPrice),1)]),_:1}),a(e,{align:"center",label:"\u6210\u672C\u4EF7(\u5143)","min-width":"80"},{default:i(({row:l})=>[f(p(l.costPrice),1)]),_:1}),a(e,{align:"center",label:"\u5E93\u5B58","min-width":"80"},{default:i(({row:l})=>[f(p(l.stock),1)]),_:1}),a(e,{align:"center",label:"\u91CD\u91CF(kg)","min-width":"80"},{default:i(({row:l})=>[f(p(l.weight),1)]),_:1}),a(e,{align:"center",label:"\u4F53\u79EF(m^3)","min-width":"80"},{default:i(({row:l})=>[f(p(l.volume),1)]),_:1}),m(c).subCommissionType?(u(),V(v,{key:2},[a(e,{align:"center",label:"\u4E00\u7EA7\u8FD4\u4F63(\u5143)","min-width":"80"},{default:i(({row:l})=>[f(p(l.firstBrokeragePrice),1)]),_:1}),a(e,{align:"center",label:"\u4E8C\u7EA7\u8FD4\u4F63(\u5143)","min-width":"80"},{default:i(({row:l})=>[f(p(l.secondBrokeragePrice),1)]),_:1})],64)):_("",!0)]),_:1},8,["data"])):_("",!0),w.isActivityComponent?(u(),h(m(A),{key:2,data:m(c).skus,border:"","max-height":"500",size:"small",style:{width:"99%"}},{default:i(()=>[w.isComponent?(u(),h(e,{key:0,type:"selection",width:"45"})):_("",!0),a(e,{align:"center",label:"\u56FE\u7247","min-width":"80"},{default:i(({row:l})=>[a(y,{src:l.picUrl,class:"h-60px w-60px",onClick:t=>D(l.picUrl)},null,8,["src","onClick"])]),_:1}),m(c).specType?(u(!0),V(v,{key:1},S(m(U),(l,t)=>(u(),h(e,{key:t,label:l.label,align:"center","min-width":"80"},{default:i(({row:s})=>{var g;return[N("span",L,p((g=s.properties[t])==null?void 0:g.valueName),1)]}),_:2},1032,["label"]))),128)):_("",!0),a(e,{align:"center",label:"\u5546\u54C1\u6761\u7801","min-width":"100"},{default:i(({row:l})=>[f(p(l.barCode),1)]),_:1}),a(e,{align:"center",label:"\u9500\u552E\u4EF7(\u5143)","min-width":"80"},{default:i(({row:l})=>[f(p(l.price),1)]),_:1}),a(e,{align:"center",label:"\u5E02\u573A\u4EF7(\u5143)","min-width":"80"},{default:i(({row:l})=>[f(p(l.marketPrice),1)]),_:1}),a(e,{align:"center",label:"\u6210\u672C\u4EF7(\u5143)","min-width":"80"},{default:i(({row:l})=>[f(p(l.costPrice),1)]),_:1}),a(e,{align:"center",label:"\u5E93\u5B58","min-width":"80"},{default:i(({row:l})=>[f(p(l.stock),1)]),_:1}),H(r.$slots,"extension")]),_:3},8,["data"])):_("",!0)],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mall/product/spu/components/SkuList.vue"]])});export{ge as __tla,R as default};