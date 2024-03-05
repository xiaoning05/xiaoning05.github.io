import{b1 as Q,ci as O,bY as D,z as M,bU as V,a2 as C,an as A,d as S,y as z,am as W,aT as I,bQ as $,cj as j,bI as F,aY as G,ck as J,r as T,e as w,p as R,b8 as H,b3 as X,__tla as Z}from"./index-f0743f71.js";let U,ee=Promise.all([(()=>{try{return Z}catch{}})()]).then(async()=>{const Y=S({extends:z,setup(e,n){const d=z.setup(e,n);delete d.selectOptionClick;const i=W().proxy;return A(()=>{d.select.cachedOptions.get(i.value)||d.select.onOptionCreate(i)}),d},methods:{selectOptionClick(){this.$el.parentElement.click()}}});function E(e){return e||e===0}function _(e){return Array.isArray(e)&&e.length}function b(e){return Array.isArray(e)?e:E(e)?[e]:[]}function K(e,n,d,i,r){for(let s=0;s<e.length;s++){const h=e[s];if(n(h,s,e,r))return i?i(h,s,e,r):h;{const m=d(h);if(_(m)){const a=K(m,n,d,i,h);if(a)return a}}}}function L(e,n,d,i){for(let r=0;r<e.length;r++){const s=e[r];n(s,r,e,i);const h=d(s);_(h)&&L(h,n,d,s)}}const q=(e,{attrs:n,slots:d,emit:i},{select:r,tree:s,key:h})=>{I(()=>e.modelValue,()=>{e.showCheckbox&&A(()=>{const l=s.value;l&&!$(l.getCheckedKeys(),b(e.modelValue))&&l.setCheckedKeys(b(e.modelValue))})},{immediate:!0,deep:!0});const m=C(()=>({value:h.value,label:"label",children:"children",disabled:"disabled",isLeaf:"isLeaf",...e.props})),a=(l,t)=>{var c;const u=m.value[l];return F(u)?u(t,(c=s.value)==null?void 0:c.getNode(a("value",t))):t[u]},x=b(e.modelValue).map(l=>K(e.data||[],t=>a("value",t)===l,t=>a("children",t),(t,c,u,v)=>v&&a("value",v))).filter(l=>E(l)),g=C(()=>{if(!e.renderAfterExpand&&!e.lazy)return[];const l=[];return L(e.data.concat(e.cacheData),t=>{const c=a("value",t);l.push({value:c,currentLabel:a("label",t),isDisabled:a("disabled",t)})},t=>a("children",t)),l}),p=C(()=>g.value.reduce((l,t)=>({...l,[t.value]:t}),{}));return{...O(D(e),Object.keys(j.props)),...n,nodeKey:h,expandOnClickNode:C(()=>!e.checkStrictly&&e.expandOnClickNode),defaultExpandedKeys:C(()=>e.defaultExpandedKeys?e.defaultExpandedKeys.concat(x):x),renderContent:(l,{node:t,data:c,store:u})=>l(Y,{value:a("value",c),label:a("label",c),disabled:a("disabled",c)},e.renderContent?()=>e.renderContent(l,{node:t,data:c,store:u}):d.default?()=>d.default({node:t,data:c,store:u}):void 0),filterNodeMethod:(l,t,c)=>{var u;return e.filterNodeMethod?e.filterNodeMethod(l,t,c):!l||((u=a("label",t))==null?void 0:u.includes(l))},onNodeClick:(l,t,c)=>{var u,v,k;if((u=n.onNodeClick)==null||u.call(n,l,t,c),!e.showCheckbox||!e.checkOnClickNode){if(e.showCheckbox||!e.checkStrictly&&!t.isLeaf)e.expandOnClickNode&&c.proxy.handleExpandIconClick();else if(!a("disabled",l)){const o=(v=r.value)==null?void 0:v.options.get(a("value",l));(k=r.value)==null||k.handleOptionSelect(o)}}},onCheck:(l,t)=>{if(!e.showCheckbox)return;const c=a("value",l),u=t.checkedKeys,v=e.multiple?b(e.modelValue).filter(o=>o in p.value&&!s.value.getNode(o)&&!u.includes(o)):[],k=u.concat(v);if(e.checkStrictly)i(V,e.multiple?k:k.includes(c)?c:void 0);else if(e.multiple)i(V,s.value.getCheckedKeys(!0));else{const o=K([l],y=>!_(a("children",y))&&!a("disabled",y),y=>a("children",y)),f=o?a("value",o):void 0,P=E(e.modelValue)&&!!K([l],y=>a("value",y)===e.modelValue,y=>a("children",y));i(V,f===e.modelValue||P?void 0:f)}A(()=>{var o;const f=b(e.modelValue);s.value.setCheckedKeys(f),(o=n.onCheck)==null||o.call(n,l,{checkedKeys:s.value.getCheckedKeys(),checkedNodes:s.value.getCheckedNodes(),halfCheckedKeys:s.value.getHalfCheckedKeys(),halfCheckedNodes:s.value.getHalfCheckedNodes()})})},cacheOptions:g}};var B=S({props:{data:{type:Array,default:()=>[]}},setup(e){const n=G(J);return I(()=>e.data,()=>{var d;e.data.forEach(r=>{n.cachedOptions.has(r.value)||n.cachedOptions.set(r.value,r)});const i=((d=n.selectWrapper)==null?void 0:d.querySelectorAll("input"))||[];Array.from(i).includes(document.activeElement)||n.setSelected()},{flush:"post",immediate:!0}),()=>{}}}),N=X(S({name:"ElTreeSelect",inheritAttrs:!1,props:{...M.props,...j.props,cacheData:{type:Array,default:()=>[]}},setup(e,n){const{slots:d,expose:i}=n,r=T(),s=T(),h=C(()=>e.nodeKey||e.valueKey||"value"),m=((p,{attrs:l,emit:t},{tree:c,key:u})=>{const v=Q("tree-select"),k={...O(D(p),Object.keys(M.props)),...l,"onUpdate:modelValue":o=>t(V,o),valueKey:u,popperClass:C(()=>{const o=[v.e("popper")];return p.popperClass&&o.push(p.popperClass),o.join(" ")}),filterMethod:(o="")=>{p.filterMethod&&p.filterMethod(o),A(()=>{var f;(f=c.value)==null||f.filter(o)})},onVisibleChange:o=>{var f;(f=l.onVisibleChange)==null||f.call(l,o),p.filterable&&o&&k.filterMethod()}};return k})(e,n,{select:r,tree:s,key:h}),{cacheOptions:a,...x}=q(e,n,{select:r,tree:s,key:h}),g=w({});return i(g),R(()=>{Object.assign(g,{...O(s.value,["filter","updateKeyChildren","getCheckedNodes","setCheckedNodes","getCheckedKeys","setCheckedKeys","setChecked","getHalfCheckedNodes","getHalfCheckedKeys","getCurrentKey","getCurrentNode","setCurrentKey","setCurrentNode","getNode","remove","append","insertBefore","insertAfter"]),...O(r.value,["focus","blur"])})}),()=>H(M,w({...m,ref:p=>r.value=p}),{...d,default:()=>[H(B,{data:a.value}),H(j,w({...x,ref:p=>s.value=p}))]})}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tree-select/src/tree-select.vue"]]);N.install=e=>{e.component(N.name,N)},U=N});export{U as E,ee as __tla};