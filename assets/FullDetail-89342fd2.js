import{d as p,r as m,o as u,q as h,e as n,b as i,a as I,j as C,E as b,i as g,ct as _,_ as f,__tla as v}from"./index-b079f499.js";let o,D=Promise.all([(()=>{try{return v}catch{}})()]).then(async()=>{o=f(p({__name:"FullDetail",setup(E,{expose:r}){const t=m(!1),l=[{indicatorCategories:"\u7EFC\u5408\u7C7B",indicatorChinese:"\u5E08\u751F\u6BD4",abbreviation:"a",formulaDescription:"\u6559\u5E08\u603B\u662F/\u5B66\u751F\u603B\u6570",dataItemChinese:"\u6559\u5E08\u603B\u6570\u3001\u5B66\u751F\u603B\u6570",dataItemInEnglish:"Student_num",indicatorApplication:"\u5168\u606F\u67E5\u8BE2"},{indicatorCategories:"\u5B66\u751F\u7C7B",indicatorChinese:"\u73ED\u7EA7\u5B66\u751F\u6570",abbreviation:"b",formulaDescription:"\u2211\u5B66\u751F",dataItemChinese:"\u73ED\u7EA7\u7F16\u53F7\u3001\u5B66\u751F\u7EDF\u8BA1",dataItemInEnglish:"Student_num",indicatorApplication:"\u5168\u606F\u67E5\u8BE2"},{indicatorCategories:"\u5B66\u751F\u7C7B",indicatorChinese:"\u5B66\u751F\u6027\u522B\u6BD4",abbreviation:"c",formulaDescription:"\u7537\u751F\u6570/\u5973\u751F\u6570",dataItemChinese:"\u7537\u751F\u6570\u3001\u5973\u751F\u6570",dataItemInEnglish:"Student_num",indicatorApplication:"\u5168\u606F\u67E5\u8BE2"},{indicatorCategories:"\u6559\u5E08\u7C7B",indicatorChinese:"\u5404\u79D1\u6559\u5E08\u6570",abbreviation:"d",formulaDescription:"\u2211\u6559\u5E08",dataItemChinese:"\u79D1\u76EE\u7F16\u53F7\u3001\u6559\u5E08\u7EDF\u8BA1",dataItemInEnglish:"Student_num",indicatorApplication:"\u5168\u606F\u67E5\u8BE2"},{indicatorCategories:"\u6559\u5E08\u7C7B",indicatorChinese:"\u6559\u5E08\u5E74\u9F84\u5206\u5E03",abbreviation:"e",formulaDescription:"\u5206\u5E74\u9F84\u6BB5\u4EA4\u53C9\u7EDF\u8BA1",dataItemChinese:"\u5E74\u9F84\u6BB5\u3001\u6559\u5E08\u6570",dataItemInEnglish:"Student_num",indicatorApplication:"\u5168\u606F\u67E5\u8BE2"},{indicatorCategories:"\u73ED\u7EA7\u7C7B",indicatorChinese:"\u503C\u5468\u6392\u540D",abbreviation:"f",formulaDescription:"\u5206\u73ED\u7EA7\u503C\u5468\u5206\u503C\u7EDF\u8BA1",dataItemChinese:"\u73ED\u7EA7\u7F16\u53F7\u3001\u503C\u5468\u5206\u503C",dataItemInEnglish:"Student_num",indicatorApplication:"\u5168\u606F\u67E5\u8BE2"},{indicatorCategories:"\u8BFE\u7A0B\u7C7B",indicatorChinese:"\u542C\u8BC4\u8BFE\u6392\u884C",abbreviation:"g",formulaDescription:"\u5206\u73ED\u7EA7\u3001\u6559\u5E08\u542C\u8BC4\u8BFE\u5206\u503C\u7EDF\u8BA1",dataItemChinese:"\u73ED\u7EA7\u3001\u6559\u5E08\u3001\u542C\u8BC4\u8BFE\u5206\u503C",dataItemInEnglish:"Student_num",indicatorApplication:"\u5168\u606F\u67E5\u8BE2"},{indicatorCategories:"\u7CFB\u7EDF\u60C5\u51B5\u7C7B",indicatorChinese:"\u53EF\u63A5\u7CFB\u7EDF\u5360\u6BD4",abbreviation:"h",formulaDescription:"\u53EF\u63A5\u7CFB\u7EDF\u6570/\u603B\u7CFB\u7EDF\u6570",dataItemChinese:"\u7CFB\u7EDF\u603B\u6570\u3001\u53EF\u63A5\u7CFB\u7EDF\u6570",dataItemInEnglish:"Student_num",indicatorApplication:"\u6570\u636E\u4E2D\u67A2"},{indicatorCategories:"\u6570\u636E\u60C5\u51B5\u7C7B",indicatorChinese:"\u53EF\u63A5\u6570\u636E\u5360\u6BD4",abbreviation:"i",formulaDescription:"\u53EF\u63A5\u6570\u636E\u8868\u6570/\u6570\u636E\u8868\u603B\u6570",dataItemChinese:"\u6570\u636E\u8868\u603B\u6570\uFF0C\u53EF\u63A5\u6570\u636E\u8868\u6570",dataItemInEnglish:"Student_num",indicatorApplication:"\u6570\u636E\u4E2D\u67A2"},{indicatorCategories:"\u7528\u6237\u4F7F\u7528\u7C7B",indicatorChinese:"\u7D2F\u8BA1\u767B\u5F55\u6B21\u6570",abbreviation:"j",formulaDescription:"\u2211\u767B\u5F55",dataItemChinese:"\u7528\u6237\u767B\u5F55\u6B21\u6570",dataItemInEnglish:"Student_num",indicatorApplication:"\u6570\u636E\u4E2D\u67A2"},{indicatorCategories:"\u5176\u4ED6\u7C7B",indicatorChinese:"\u996D\u5361\u6D88\u8D39\u91D1\u989D",abbreviation:"k",formulaDescription:"\u2211\u996D\u5361\u6D88\u8D39\u91D1\u989D",dataItemChinese:"\u5B66\u751F\u996D\u5361\u6D88\u8D39\u91D1\u989D",dataItemInEnglish:"Student_num",indicatorApplication:"\u8FD0\u8425\u65B9\u8231"}];return r({open:async()=>{t.value=!0}}),(A,e)=>{const a=b,d=g,s=_;return u(),h(s,{modelValue:I(t),"onUpdate:modelValue":e[0]||(e[0]=c=>C(t)?t.value=c:null),title:"\u5168\u90E8\u6307\u6807\u4FE1\u606F",fullscreen:""},{default:n(()=>[i(d,{data:l,"max-height":"540"},{default:n(()=>[i(a,{align:"center",label:"\u5E8F\u53F7",type:"index",width:"80"}),i(a,{align:"center",label:"\u6307\u6807\u7C7B\u522B",prop:"indicatorCategories"}),i(a,{align:"center",label:"\u6307\u6807\u4E2D\u6587\u540D",prop:"indicatorChinese",width:"160"}),i(a,{align:"center",label:"\u6307\u6807\u7F29\u5199",prop:"abbreviation"}),i(a,{align:"center",label:"\u8BA1\u7B97\u516C\u5F0F\u8BF4\u660E",prop:"formulaDescription",width:"180"}),i(a,{align:"center",label:"\u6570\u636E\u9879\u4E2D\u6587",prop:"dataItemChinese",width:"180"}),i(a,{align:"center",label:"\u6570\u636E\u9879\u82F1\u6587",prop:"dataItemInEnglish",width:"180"}),i(a,{align:"center",label:"\u6307\u6807\u5E94\u7528",prop:"indicatorApplication",width:"100"})]),_:1})]),_:1},8,["modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/dataLabels/components/FullDetail.vue"]])});export{D as __tla,o as default};
