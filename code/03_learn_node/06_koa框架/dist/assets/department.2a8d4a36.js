import{u as d,p as c}from"./use-page-search.20fb2ac1.js";import{u as s,p as E,_ as F}from"./use-page-modal.53da0862.js";import{r as t}from"./reactive-width.78941a43.js";import{d as f,o as m,c as C,e as u,f as e}from"./index.38f45ce1.js";const h={labelWidth:t("70px","120px"),formItems:[{field:"id",type:"input",label:"id",placeholder:"\u8BF7\u8F93\u5165id"},{field:"name",type:"input",label:"\u90E8\u95E8\u540D\u79F0",placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0"},{field:"leader",type:"input",label:"\u6743\u9650\u4ECB\u7ECD",placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u4ECB\u7ECD"},{field:"createAt",type:"picker",label:"\u521B\u5EFA\u65F6\u95F4",otherOptions:{type:"daterange",startPlaceholder:"\u5F00\u59CB\u65F6\u95F4",endPlaceholder:"\u7ED3\u675F\u65F6\u95F4"}},{field:"updateAt",type:"picker",label:"\u66F4\u65B0\u65F6\u95F4",otherOptions:{type:"daterange",startPlaceholder:"\u5F00\u59CB\u65F6\u95F4",endPlaceholder:"\u7ED3\u675F\u65F6\u95F4"}}]},B={title:{text:"\u90E8\u95E8\u5217\u8868",btnText:"\u521B\u5EFA\u90E8\u95E8"},showFooter:!1,showIndexColumn:!0,propList:[{label:"\u90E8\u95E8\u540D\u79F0",prop:"name",minWidth:"100"},{label:"\u6743\u9650\u4ECB\u7ECD",prop:"leader",minWidth:"100"},{label:"\u4E0A\u7EA7\u90E8\u95E8",prop:"parentId",minWidth:"100"},{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createAt",minWidth:"250",slotName:"createAt"},{label:"\u66F4\u65B0\u65F6\u95F4",prop:"updateAt",minWidth:"250",slotName:"updateAt"},{label:"\u64CD\u4F5C",minWidth:"130",slotName:"handle"}]},g={title:"\u90E8\u95E8",formConfig:{labelWidth:t("70px","120px"),itemStyle:{},colLayout:{},formItems:[{field:"name",type:"input",label:"\u90E8\u95E8\u540D\u79F0",placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0"},{field:"parentId",type:"input",label:"\u4E0A\u7EA7\u90E8\u95E8",placeholder:"\u8BF7\u8F93\u5165\u4E0A\u7EA7\u90E8\u95E8"},{field:"leader",type:"input",label:"\u6743\u9650\u4ECB\u7ECD",placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u4ECB\u7ECD"}]}},b={class:"department"},W=f({setup(y){const{pageContentRef:a,handleResetClick:l,handleQueryClick:n}=d(),{pageModalRef:o,defaultInfo:r,handleEditData:i,handleNewData:p}=s();return(k,A)=>(m(),C("div",b,[u(e(c),{searchFormConfig:e(h),onResetBtnClick:e(l),onQueryBtnClick:e(n)},null,8,["searchFormConfig","onResetBtnClick","onQueryBtnClick"]),u(e(E),{ref_key:"pageContentRef",ref:a,contentTableConfig:e(B),pageName:"department",onEditBtnClick:e(i),onNewBtnClick:e(p)},null,8,["contentTableConfig","onEditBtnClick","onNewBtnClick"]),u(F,{ref_key:"pageModalRef",ref:o,pageName:"department",defaultInfo:e(r),modalConfig:e(g)},null,8,["defaultInfo","modalConfig"])]))}});export{W as default};
