import{d as E,r as _,n as R,p as T,o as u,q as I,e as S,f as s,w,a,b as e,h as d,E as v,i as B,v as H,__tla as N}from"./index-34f06ebd.js";import{_ as V,__tla as D}from"./ContentWrap.vue_vue_type_script_setup_true_lang-80915c85.js";import{_ as P,__tla as z}from"./index.vue_vue_type_script_setup_true_lang-68fe248c.js";let y,U=Promise.all([(()=>{try{return N}catch{}})(),(()=>{try{return D}catch{}})(),(()=>{try{return z}catch{}})()]).then(async()=>{let r,p;r=s("div",{class:"tips"},[d(" \u672C\u7CFB\u7EDF\u5DF2\u63A5\u5165\u6570\u636E\u4E2D\u67A2\uFF0C\u5DF2\u4E0A\u7EBF\u6570\u636E\u8868 "),s("span",{class:"blue"},"10"),d(" \u4E2A\uFF0C\u5B57\u6BB5 "),s("span",{class:"blue"},"400"),d(" \u6761\u3002 ")],-1),p={style:{overflow:"auto"}},y=E({__name:"dataSupplementation",setup(q){const o=_(!0),g=_(0),c=_([]),l=R({pageNo:1,pageSize:10,code:"",name:"",category:void 0,industry:void 0,time:"",createTime:[]}),C=({row:t,rowIndex:i})=>t.operation==="\u53BB\u9664"?"removeC":"",m=async()=>{o.value=!0;try{const t={total:5,list:[{chinese:"\u5B66\u751F\u5B66\u53F7",english:"Student_num",type:"INT",length:"50",notInChinese:"\u5B66\u751F\u4FE1\u606F\u8868",addEnglish:"S_Student_Basic_Information_Table",explain:"\u5B66\u751F\u7684\u552F\u4E00\u6807\u8BC6\u7B26"},{chinese:"\u5B66\u751F\u59D3\u540D",english:"Student_Name",type:"VARCHAR",length:"50",notInChinese:"\u5B66\u751F\u6570\u636E\u8868",addEnglish:"S_Student_Basic_Information_Table",explain:"\u5B66\u751F\u7684\u59D3\u540D"},{chinese:"\u5B66\u751F\u751F\u65E5",english:"DateOfBirth",type:"DATE",length:"",notInChinese:"\u5B66\u751F\u57FA\u7840\u4FE1\u606F\u8868",addEnglish:"S_Student_Basic_Information_Table",explain:"\u5B66\u751F\u7684\u5B66\u751F\u751F\u65E5"},{chinese:"\u5B66\u751F\u6027\u522B",english:"Gender",type:"VARCHAR",length:"10",notInChinese:"\u5B66\u751F\u4FE1\u606F\u8868",addEnglish:"S_Student_Basic_Information_Table",explain:"\u5B66\u751F\u7684\u6027\u522B"},{chinese:"\u73ED\u7EA7ID",english:"ClassID",type:"INT",length:"",notInChinese:"\u5B66\u751F\u6570\u636E\u8868",addEnglish:"S_Student_Basic_Information_Table",explain:"\u73ED\u7EA7\u552F\u4E00\u6807\u8BC6\u7B26"},{chinese:"\u73ED\u7EA7\u540D\u79F0",english:"ClassName",type:"VARCHAR",length:"100",notInChinese:"\u5B66\u751F\u4FE1\u606F\u8868",addEnglish:"S_Student_Basic_Information_Table",explain:"\u73ED\u7EA7\u540D\u79F0"},{chinese:"\u5B66\u751F\u5BB6\u5EAD\u4F4F\u5740",english:"HomeAddress",type:"VARCHAR",length:"100",notInChinese:"\u5B66\u751F\u6570\u636E\u8868",addEnglish:"S_Student_Basic_Information_Table",explain:"\u5B66\u751F\u7684\u5BB6\u5EAD\u5730\u5740"},{chinese:"\u5B66\u751F\u5BB6\u5EAD\u7535\u8BDD",english:"HomePhone",type:"VARCHAR",length:"15",notInChinese:"\u5B66\u751F\u4FE1\u606F\u8868",addEnglish:"S_Student_Basic_Information_Table",explain:"\u5B66\u751F\u7684\u5BB6\u5EAD\u7535\u8BDD\u53F7\u7801"},{chinese:"\u7236\u6BCD\u59D3\u540D",english:"ParentNames",type:"VARCHAR",length:"100",notInChinese:"\u5B66\u751F\u6570\u636E\u8868",addEnglish:"S_Student_Basic_Information_Table",explain:"\u5B66\u751F\u7684\u7236\u6BCD\u59D3\u540D"},{chinese:"\u7D27\u6025\u8054\u7CFB\u4EBA\u59D3\u540D",english:"EmergencyContact",type:"VARCHAR",length:"50",notInChinese:"\u5B66\u751F\u57FA\u7840\u4FE1\u606F\u8868",addEnglish:"S_Student_Basic_Information_Table",explain:"\u5B66\u751F\u7684\u7D27\u6025\u8054\u7CFB\u4EBA\u59D3\u540D"}]};c.value=t.list,g.value=t.total}finally{o.value=!1}};return T(()=>{m()}),(t,i)=>{const n=v,b=B,f=P,A=V,x=H;return u(),I(A,null,{default:S(()=>[r,s("div",p,[w((u(),I(b,{data:a(c),"row-class-name":C},{default:S(()=>[e(n,{type:"index",label:"\u5E8F\u53F7",width:"80"}),e(n,{align:"center",label:"\u8865\u5145\u5B57\u6BB5\u4E2D\u6587",prop:"chinese",width:"120"}),e(n,{align:"center",label:"\u8865\u5145\u5B57\u6BB5\u82F1\u6587",prop:"english",width:"180"}),e(n,{align:"center",label:"\u6570\u636E\u7C7B\u578B",prop:"type",width:"120"}),e(n,{align:"center",label:"\u5B57\u6BB5\u957F\u5EA6",prop:"length",width:"120"}),e(n,{align:"center",label:"\u8865\u5165\u8868\u4E2D\u6587",prop:"notInChinese",width:"180"}),e(n,{align:"center",label:"\u8865\u5165\u8868\u82F1\u6587",prop:"addEnglish",width:"260"}),e(n,{align:"center",label:"\u6570\u636E\u8BF4\u660E",prop:"explain",width:"180"})]),_:1},8,["data"])),[[x,a(o)]]),e(f,{limit:a(l).pageSize,"onUpdate:limit":i[0]||(i[0]=h=>a(l).pageSize=h),page:a(l).pageNo,"onUpdate:page":i[1]||(i[1]=h=>a(l).pageNo=h),total:a(g),onPagination:m},null,8,["limit","page","total"])])]),_:1})}}})});export{y as _,U as __tla};
