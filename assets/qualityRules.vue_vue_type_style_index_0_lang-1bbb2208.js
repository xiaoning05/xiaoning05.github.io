import{_ as C,__tla as y}from"./ContentWrap.vue_vue_type_script_setup_true_lang-80915c85.js";import{d as v,o as I,q as j,e as s,f as a,b as n,h as i,E as q,i as A,__tla as B}from"./index-34f06ebd.js";let w,R=Promise.all([(()=>{try{return y}catch{}})(),(()=>{try{return B}catch{}})()]).then(async()=>{let d,t,o,c,p,u;d={class:"dataRelationships"},t=a("div",{class:"title"},"\u6570\u636E\u8D28\u91CF\u6807\u51C6\u6307\u6807\u4F53\u7CFB",-1),o=["onClick"],c=a("div",{class:"title",style:{"margin-top":"50px"}},"\u6807\u5F71\u54CD\u7B49\u7EA7\u8BF4\u660E",-1),p=["onClick"],u=a("div",{class:"explain"},[i(" \u8BF4\u660E\uFF1A"),a("br"),i(" 1.\u5728\u5F00\u5C55\u6570\u636E\u8D28\u91CF\u68C0\u6D4B\u524D\uFF0C\u9700\u5224\u65AD\u68C0\u6D4B\u5B57\u6BB5\u3001\u68C0\u6D4B\u6307\u6807\u548C\u6307\u6807\u5F71\u54CD\u7B49\u7EA7\u3002\u6307\u6807\u5F71\u54CD\u7B49\u7EA7A\u7684\u6743\u91CD\u5206\u503C\u4E3A6\u5206\uFF0C\u5F71\u54CD\u7B49\u7EA7B\u7684\u6743\u91CD\u5206\u503C\u4E3A3\u5206\uFF0C\u5F71\u54CD\u7B49\u7EA7C\u7684\u6743\u91CD\u5206\u503C\u4E3A1\u5206\u3002"),a("br"),i(" 2.\u6570\u636E\u8D28\u91CF\u68C0\u6D4B\u5408\u683C\u7387=\uFF081-\u95EE\u9898\u6570\u636E\u8BB0\u5F55\u6570/\u8868\u8BB0\u5F55\u6570\uFF09*100%\u3002"),a("br"),i(" 3.\u5404\u89C4\u5219\u7684\u52A0\u6743\u5206\u6570=\u5408\u683C\u7387*\u89C4\u5219\u6743\u91CD\uFF08\u5373\u5F71\u54CD\u7B49\u7EA7\u5360\u6BD4\uFF09*100\u3002"),a("br"),i(" 4.\u5F53\u6570\u636E\u8D28\u91CF\u8BC4\u4F30\u5206\u6570\u4E3A 90 \u5206\uFF08\u542B\uFF09\u6216\u4EE5\u4E0A\uFF0C\u8D28\u91CF\u68C0\u6D4B\u7ED3\u679C\u4E3A\u5408\u683C\u3002\u5F53\u8D28\u91CF\u8BC4\u4F30\u5206\u6570\u5C0F\u4E8E90\u5206\u65F6\uFF0C\u4E3A\u4E0D\u5408\u683C\u3002 ")],-1),w=v({__name:"qualityRules",setup(E){const f=({row:m,column:b,rowIndex:e,columnIndex:r})=>{if(r===1||r===2||r===0){if(e===2)return{rowspan:5,colspan:1};if("3,4,5,6".includes(e))return{rowspan:0,colspan:0};if(e===7)return{rowspan:3,colspan:1};if("8,9".includes(e))return{rowspan:0,colspan:0}}},_=({row:m,column:b,rowIndex:e,columnIndex:r})=>{if(r===1||r===0){if(e===0)return{rowspan:5,colspan:1};if("1,2,3,4".includes(e))return{rowspan:0,colspan:0};if(e===5)return{rowspan:5,colspan:1};if("6,7,8,9".includes(e))return{rowspan:0,colspan:0};if(e===10)return{rowspan:5,colspan:1};if("11,12,13".includes(e))return{rowspan:0,colspan:0}}},x=[{num:"1",dimension:"\u5B8C\u6574\u6027",explain:"\u5BF9\u4E1A\u52A1\u5B57\u6BB5\u548C\u6280\u672F\u5B57\u6BB5\u7684\u7A7A\u503C\u68C0\u6D4B\uFF0C\u786E\u8BA4\u5FC5\u586B\u5B57\u6BB5\u4E0D\u80FD\u4E3A\u7A7A\u503C\u3002",standard:"\u5FC5\u586B\u5B57\u6BB5\u975E\u7A7A"},{num:"2",dimension:"\u552F\u4E00\u6027",explain:"\u5BF9\u4E8E\u4E1A\u52A1\u4E3B\u952E\u5B57\u6BB5\u7684\u552F\u4E00\u6027\u7684\u5EA6\u91CF\u3002\u68C0\u67E5\u4E3B\u952E\u5B57\u6BB5\u662F\u5426\u5B58\u5728\u91CD\u590D\u60C5\u51B5\u3002",standard:"\u4E1A\u52A1\u4E3B\u952E\u5B57\u6BB5\u4E0D\u53EF\u91CD\u590D"},{num:"3",dimension:"\u51C6\u786E\u6027",explain:"\u5BF9\u68C0\u6D4B\u5BF9\u8C61\u7684\u4EE3\u7801\u503C\u3001\u957F\u5EA6\u3001\u5185\u5BB9\u89C4\u8303\u3001\u53D6\u503C\u8303\u56F4\u3001\u6570\u636E\u683C\u5F0F\u7B49\u7684\u68C0\u6D4B\uFF0C\u786E\u8BA4\u7B26\u5408\u76F8\u5173\u6807\u51C6\u89C4\u8303\u7684\u8981\u6C42\u3002",standard:"\u4EE3\u7801\u503C\u6EE1\u8DB3\u503C\u57DF\u8981\u6C42"},{dimension:"\u51C6\u786E\u6027",explain:"\u5BF9\u68C0\u6D4B\u5BF9\u8C61\u7684\u4EE3\u7801\u503C\u3001\u957F\u5EA6\u3001\u5185\u5BB9\u89C4\u8303\u3001\u53D6\u503C\u8303\u56F4\u3001\u6570\u636E\u683C\u5F0F\u7B49\u7684\u68C0\u6D4B\uFF0C\u786E\u8BA4\u7B26\u5408\u76F8\u5173\u6807\u51C6\u89C4\u8303\u7684\u8981\u6C42\u3002",standard:"\u957F\u5EA6\u6EE1\u8DB3\u957F\u5EA6\u8981\u6C42"},{dimension:"\u51C6\u786E\u6027",explain:"\u5BF9\u68C0\u6D4B\u5BF9\u8C61\u7684\u4EE3\u7801\u503C\u3001\u957F\u5EA6\u3001\u5185\u5BB9\u89C4\u8303\u3001\u53D6\u503C\u8303\u56F4\u3001\u6570\u636E\u683C\u5F0F\u7B49\u7684\u68C0\u6D4B\uFF0C\u786E\u8BA4\u7B26\u5408\u76F8\u5173\u6807\u51C6\u89C4\u8303\u7684\u8981\u6C42\u3002",standard:"\u5185\u5BB9\u89C4\u8303\u6EE1\u8DB3\u89C4\u5219\u3001\u89C4\u8303\u8981\u6C42"},{dimension:"\u51C6\u786E\u6027",explain:"\u5BF9\u68C0\u6D4B\u5BF9\u8C61\u7684\u4EE3\u7801\u503C\u3001\u957F\u5EA6\u3001\u5185\u5BB9\u89C4\u8303\u3001\u53D6\u503C\u8303\u56F4\u3001\u6570\u636E\u683C\u5F0F\u7B49\u7684\u68C0\u6D4B\uFF0C\u786E\u8BA4\u7B26\u5408\u76F8\u5173\u6807\u51C6\u89C4\u8303\u7684\u8981\u6C42\u3002",standard:"\u53D6\u503C\u6EE1\u8DB3\u53D6\u503C\u8303\u56F4\u8981\u6C42"},{dimension:"\u51C6\u786E\u6027",explain:"\u5BF9\u68C0\u6D4B\u5BF9\u8C61\u7684\u4EE3\u7801\u503C\u3001\u957F\u5EA6\u3001\u5185\u5BB9\u89C4\u8303\u3001\u53D6\u503C\u8303\u56F4\u3001\u6570\u636E\u683C\u5F0F\u7B49\u7684\u68C0\u6D4B\uFF0C\u786E\u8BA4\u7B26\u5408\u76F8\u5173\u6807\u51C6\u89C4\u8303\u7684\u8981\u6C42\u3002",standard:"\u6570\u636E\u683C\u5F0F\u6EE1\u8DB3\u683C\u5F0F\u8981\u6C42"},{num:"4",dimension:"\u4E00\u81F4\u6027",explain:"\u5BF9\u4E8E\u5B57\u6BB5\u7684\u903B\u8F91\u5408\u7406\u6027\u7684\u5224\u65AD\uFF0C\u786E\u8BA4\u8868\u5185\u5B57\u6BB5\u3001\u8868\u95F4\u5B57\u6BB5\u4E0D\u51FA\u73B0\u77DB\u76FE\u60C5\u51B5\u3002\u5305\u62EC\uFF1A\u903B\u8F91\u4E00\u81F4\u6027\u3001\u5B58\u5728\u4E00\u81F4\u6027\u3001\u7B49\u503C\u4E00\u81F4\u6027\u3002",standard:"\u8868\u5185\u5B57\u6BB5\u95F4\u5FC5\u987B\u6EE1\u8DB3\u903B\u8F91\u6027"},{dimension:"\u4E00\u81F4\u6027",explain:"\u5BF9\u4E8E\u5B57\u6BB5\u7684\u903B\u8F91\u5408\u7406\u6027\u7684\u5224\u65AD\uFF0C\u786E\u8BA4\u8868\u5185\u5B57\u6BB5\u3001\u8868\u95F4\u5B57\u6BB5\u4E0D\u51FA\u73B0\u77DB\u76FE\u60C5\u51B5\u3002\u5305\u62EC\uFF1A\u903B\u8F91\u4E00\u81F4\u6027\u3001\u5B58\u5728\u4E00\u81F4\u6027\u3001\u7B49\u503C\u4E00\u81F4\u6027\u3002",standard:"\u8868\u95F4\u5B57\u6BB5\u5FC5\u987B\u6EE1\u8DB3\u5B58\u5728\u7684\u5408\u7406\u6027"},{dimension:"\u4E00\u81F4\u6027",explain:"\u5BF9\u4E8E\u5B57\u6BB5\u7684\u903B\u8F91\u5408\u7406\u6027\u7684\u5224\u65AD\uFF0C\u786E\u8BA4\u8868\u5185\u5B57\u6BB5\u3001\u8868\u95F4\u5B57\u6BB5\u4E0D\u51FA\u73B0\u77DB\u76FE\u60C5\u51B5\u3002\u5305\u62EC\uFF1A\u903B\u8F91\u4E00\u81F4\u6027\u3001\u5B58\u5728\u4E00\u81F4\u6027\u3001\u7B49\u503C\u4E00\u81F4\u6027\u3002",standard:"\u8868\u5185\u5B57\u6BB5\u5FC5\u987B\u6EE1\u8DB3\u5728\u7279\u5B9A\u60C5\u51B5\u4E0B\u7684\u7B49\u503C\u8981\u6C42"},{num:"5",dimension:"\u65F6\u6548\u6027",explain:"\u5BF9\u4E8E\u6570\u636E\u66F4\u65B0\u9891\u7387\u7684\u8981\u6C42\uFF0C\u5982\u9891\u7387\u4E3A\u6BCF\u65E5\u3001\u6BCF\u5468\u3001\u6BCF\u6708\u3001\u5B9E\u65F6\u7B49\u3002",standard:"\u6570\u636E\u66F4\u65B0\u65F6\u95F4\u7B26\u5408\u6570\u636E\u66F4\u65B0\u8981\u6C42"}],h=[{num:"1",grade:"A",describe:"\u65F6\u6548\u6027\u68C0\u67E5\u3002\u5BF9\u6570\u636E\u66F4\u65B0\u9891\u7387\u8981\u6C42\u8F83\u9AD8\u7684\u5B57\u6BB5\u68C0\u6D4B\uFF0C\u5982\u6570\u636E\u66F4\u65B0\u8981\u6C42\u6BCF\u65E5\u3001\u6BCF\u5468\u3001\u6BCF\u6708\u3002"},{describe:"\u975E\u7A7A\u68C0\u67E5\u3002\u5BF9\u5FC5\u586B\u5173\u952E\u4E1A\u52A1\u5B57\u6BB5\u548C\u6709\u6302\u63A5\u89C4\u8303\u8981\u6C42\u7684\u6280\u672F\u5B57\u6BB5\u7684\u7A7A\u503C\u68C0\u6D4B\u3002"},{describe:"\u552F\u4E00\u6027\u68C0\u67E5\u3002\u5BF9\u4E1A\u52A1\u4E3B\u952E\u5B57\u6BB5\u7684\u91CD\u590D\u6027\u8FDB\u884C\u68C0\u6D4B\u3002"},{describe:"\u4EE3\u7801\u503C\u68C0\u67E5\u3002\u5BF9\u6709\u89C4\u8303\u8981\u6C42\u7684\u5173\u952E\u4E1A\u52A1\u5B57\u6BB5\u7684\u503C\u57DF\u68C0\u6D4B\u3002"},{describe:"\u51C6\u786E\u6027\u68C0\u67E5\u3002\u957F\u5EA6\u68C0\u67E5\u3001\u5185\u5BB9\u89C4\u8303\u68C0\u67E5\uFF0C\u5BF9\u4E8E\u5173\u952E\u5B57\u6BB5\u6570\u636E\u7684\u957F\u5EA6\u3001\u5185\u5BB9\u89C4\u8303\u68C0\u6D4B\uFF0C\u6EE1\u8DB3\u957F\u5EA6\u8981\u6C42\u548C\u5185\u5BB9\u89C4\u8303\u8981\u6C42\u3002"},{num:"2",grade:"B",describe:"\u65F6\u6548\u6027\u68C0\u67E5\u3002\u5BF9\u6570\u636E\u66F4\u65B0\u9891\u7387\u8981\u6C42\u4E0D\u9AD8\u7684\u5B57\u6BB5\u68C0\u6D4B\uFF0C\u5982\u6570\u636E\u66F4\u65B0\u8981\u6C42\u4E3A\u6BCF\u5B63\u5EA6\u3001\u6BCF\u534A\u5E74\u3001\u6BCF\u5E74\u3002"},{describe:"\u4EE3\u7801\u503C\u68C0\u67E5\u3002\u5BF9\u6709\u89C4\u8303\u8981\u6C42\u7684\u91CD\u8981\u4E1A\u52A1\u5B57\u6BB5\u7684\u503C\u57DF\u8FDB\u884C\u68C0\u6D4B\u3002"},{describe:"\u903B\u8F91\u4E00\u81F4\u6027\u68C0\u67E5\u3002\u5BF9\u8868\u5185\u5B57\u6BB5\u95F4\u7684\u903B\u8F91\u5408\u7406\u6027\u8FDB\u884C\u68C0\u6D4B\u3002"},{describe:"\u5B58\u5728\u4E00\u81F4\u6027\u68C0\u67E5\u3002\u5BF9\u8868\u95F4\u5B57\u6BB5\u7684\u5B58\u5728\u5408\u7406\u6027\u8FDB\u884C\u68C0\u6D4B\u3002"},{describe:"\u7B49\u503C\u4E00\u81F4\u6027\u3002\u5BF9\u8868\u5185\u5B57\u6BB5\u662F\u5426\u6EE1\u8DB3\u7B49\u503C\u8981\u6C42\u8FDB\u884C\u68C0\u6D4B\u3002"},{num:"3",grade:"C",describe:"\u975E\u7A7A\u68C0\u67E5\u3002\u5BF9\u975E\u5173\u952E\u4E1A\u52A1\u5B57\u6BB5\u7684\u7A7A\u503C\u68C0\u6D4B\u3002"},{describe:"\u65F6\u6548\u6027\u68C0\u67E5\u3002\u5BF9\u6570\u636E\u66F4\u65B0\u9891\u7387\u8981\u6C42\u8F83\u4F4E\u7684\u5B57\u6BB5\u68C0\u6D4B\uFF0C\u5982\u6570\u636E\u66F4\u65B0\u9891\u7387\u8981\u6C42\u4E3A\u4E0D\u5B9A\u65F6\u3001\u6BCF\u4E24\u5E74\u3002"},{describe:"\u552F\u4E00\u6027\u68C0\u67E5\u3002\u5BF9\u975E\u5173\u952E\u4E1A\u52A1\u5B57\u6BB5\u7684\u91CD\u590D\u6027\u68C0\u67E5\u3002"},{describe:"\u51C6\u786E\u6027\u68C0\u67E5\u3002\u5BF9\u975E\u5173\u952E\u4E1A\u52A1\u5B57\u6BB5\u4E14\u6709\u6570\u636E\u6807\u51C6\u8981\u6C42\u7684\u5185\u5BB9\u89C4\u8303\u3001\u957F\u5EA6\u3001\u6570\u636E\u683C\u5F0F\u7B49\u7684\u68C0\u6D4B\u3002"}];return(m,b)=>{const e=q,r=A,g=C;return I(),j(g,null,{default:s(()=>[a("div",d,[t,n(r,{data:x,border:"","header-cell-class-name":"hsbj","span-method":f},{default:s(()=>[n(e,{align:"center",label:"\u5E8F\u53F7",width:"80",prop:"num"}),n(e,{align:"center",label:"\u8D28\u91CF\u6807\u51C6\u7EF4\u5EA6",prop:"dimension",width:"110"}),n(e,{align:"center",label:"\u7EF4\u5EA6\u8BF4\u660E",prop:"explain",width:"260"}),n(e,{align:"center",label:"\u6570\u636E\u8D28\u91CF\u6807\u51C6",prop:"standard"}),n(e,{align:"center",label:"\u64CD\u4F5C",prop:"operation",width:"100"},{default:s(l=>[a("span",{class:"look",onClick:k=>{l.row}},"\u4FEE\u6539",8,o)]),_:1})]),_:1}),c,n(r,{data:h,border:"","header-cell-class-name":"hsbj","span-method":_},{default:s(()=>[n(e,{align:"center",label:"\u5E8F\u53F7",width:"80",prop:"num"}),n(e,{align:"center",label:"\u5F71\u54CD\u7B49\u7EA7",prop:"grade",width:"110"}),n(e,{align:"center",label:"\u8BC4\u4F30\u9879\u63CF\u8FF0",prop:"describe"}),n(e,{align:"center",label:"\u64CD\u4F5C",prop:"operation",width:"100"},{default:s(l=>[a("span",{class:"look",onClick:k=>{l.row}},"\u4FEE\u6539",8,p)]),_:1})]),_:1}),u])]),_:1})}}})});export{w as _,R as __tla};