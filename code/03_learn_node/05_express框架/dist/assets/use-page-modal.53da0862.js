var Z=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var X=(e,a,t)=>a in e?Z(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,C=(e,a)=>{for(var t in a||(a={}))ae.call(a,t)&&X(e,t,a[t]);if(H)for(var t of H(a))le.call(a,t)&&X(e,t,a[t]);return e},L=(e,a)=>ee(e,te(a));import{_ as q,d as B,b as d,o as u,c as S,g as k,z as N,e as m,w as o,F as U,n as j,q as _,G as oe,I as $,h as D,t as P,m as w,A as ne,f as b,u as se,J as G,a as x,K as J,j as M,L as re}from"./index.38f45ce1.js";import{r as K}from"./reactive-width.78941a43.js";const ue={class:"xl-form"},de={class:"header"},ie={class:"footer"},ce=B({props:{modelValue:{type:Object,required:!0},formItems:{type:Array,default:()=>[]},labelWidth:{type:String,default:"100px"},itemStyle:{type:Object,default:()=>({padding:"10px 40px"})},colLayout:{type:Object,default:()=>({lg:8,md:12,xs:24})}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,l=(r,c)=>{a("update:modelValue",L(C({},t.modelValue),{[c]:r}))};return(r,c)=>{const y=d("el-input"),i=d("el-option"),V=d("el-select"),n=d("el-date-picker"),v=d("el-form-item"),z=d("el-col"),g=d("el-row"),I=d("el-form");return u(),S("div",ue,[k("div",de,[N(r.$slots,"header",{},void 0,!0)]),m(I,{"label-width":e.labelWidth,size:"large"},{default:o(()=>[m(g,null,{default:o(()=>[(u(!0),S(U,null,j(e.formItems,s=>(u(),_(z,ne($({key:s.label},e.colLayout)),{default:o(()=>[s.isHidden?w("",!0):(u(),_(v,{key:0,label:s.label,style:oe(e.itemStyle)},{default:o(()=>[s.type==="input"||s.type==="password"?(u(),_(y,$({key:0,placeholder:s.placeholder},s.otherOptions,{"show-password":s.type==="password",modelValue:e.modelValue[s.field],"onUpdate:modelValue":h=>l(h,s.field)}),null,16,["placeholder","show-password","modelValue","onUpdate:modelValue"])):s.type==="select"?(u(),_(V,$({key:1,placeholder:s.placeholder},s.otherOptions,{modelValue:e.modelValue[s.field],style:{width:"100%"},"onUpdate:modelValue":h=>l(h,s.field)}),{default:o(()=>[(u(!0),S(U,null,j(s.options,h=>(u(),_(i,{key:h.value,value:h.value},{default:o(()=>[D(P(h.title),1)]),_:2},1032,["value"]))),128))]),_:2},1040,["placeholder","modelValue","onUpdate:modelValue"])):s.type==="picker"?(u(),_(n,$({key:2},s.otherOptions,{style:{width:"100%"},modelValue:e.modelValue[s.field],"onUpdate:modelValue":h=>l(h,s.field)}),null,16,["modelValue","onUpdate:modelValue"])):w("",!0)]),_:2},1032,["label","style"]))]),_:2},1040))),128))]),_:1})]),_:1},8,["label-width"]),k("div",ie,[N(r.$slots,"footer",{},void 0,!0)])])}}});var pe=q(ce,[["__scopeId","data-v-775294ca"]]);const fe={class:"xl-tabel"},me={class:"header"},ge={class:"title"},_e={class:"handle"},he={key:0,class:"footer"},ye=B({props:{listData:{type:Array,required:!0},propList:{type:Array,default:()=>[]},listCount:{type:Number,default:0},showIndexColumn:{type:Boolean,default:!1},showSelectColumn:{type:Boolean,default:!1},title:{type:Object,default:()=>({})},page:{type:Object,default:()=>({currentPage:1,pageSize:10})},childrenProps:{type:Object,default:()=>({})},showFooter:{type:Boolean,default:!0}},emits:["selectionChange","update:page"],setup(e,{emit:a}){const t=e,l=K("total, sizes, prev, pager, next","total, sizes, prev, pager, next, jumper"),r=i=>{a("selectionChange",i)},c=i=>{a("update:page",L(C({},t.page),{currentPage:i}))},y=i=>{a("update:page",L(C({},t.page),{pageSize:i}))};return(i,V)=>{const n=d("el-table-column"),v=d("el-table"),z=d("el-pagination");return u(),S("div",fe,[k("div",me,[N(i.$slots,"header",{},()=>[k("div",ge,P(e.title.text),1),k("div",_e,[N(i.$slots,"headerHandle",{},void 0,!0)])],!0)]),m(v,$({data:e.listData,border:""},e.childrenProps,{size:"large",style:{width:"100%"},onSelectionChange:r}),{default:o(()=>[e.showSelectColumn?(u(),_(n,{key:0,type:"selection",align:"center",width:"60"})):w("",!0),e.showIndexColumn?(u(),_(n,{key:1,type:"index",label:"\u5E8F\u53F7",align:"center",width:"70"})):w("",!0),(u(!0),S(U,null,j(e.propList,g=>(u(),_(n,$({key:g.prop},g,{align:"center","show-overflow-tooltip":""}),{default:o(I=>[N(i.$slots,g.slotName,{row:I.row},()=>[D(P(I.row[g.prop]),1)],!0)]),_:2},1040))),128))]),_:3},16,["data"]),e.showFooter?(u(),S("div",he,[N(i.$slots,"footer",{},()=>[m(z,{small:!0,total:e.listCount,"page-sizes":[10,20,30],"page-size":e.page.pageSize,"current-page":e.page.currentPage,layout:b(l),onSizeChange:y,onCurrentChange:c},null,8,["total","page-size","current-page","layout"])],!0)])):w("",!0)])}}});var ve=q(ye,[["__scopeId","data-v-b56e2960"]]);function O(e,a){const l=se().permissions,r=`system:${e}:${a}`;return!!l.find(c=>c===r)}const Ce={class:"page-content"},be={class:"handle-btns"},we=D(" \u7F16\u8F91 "),ke=D(" \u5220\u9664 "),Ve=B({props:{contentTableConfig:{type:Object,required:!0},pageName:{type:String,required:!0}},emits:["editBtnClick","newBtnClick"],setup(e,{expose:a,emit:t}){var T;const l=e,r=G(),c=O(l.pageName,"create"),y=O(l.pageName,"delete"),i=O(l.pageName,"update"),V=O(l.pageName,"query"),n=x({currentPage:1,pageSize:10});J(()=>n.value,()=>v());const v=(f={})=>{!V||r.getPageListAction({pageName:l.pageName,queryInfo:C({offset:(n.value.currentPage-1)*n.value.pageSize,size:n.value.pageSize},f)})};v();const z=M(()=>r.pageListData(l.pageName)),g=M(()=>r.pageListCount(l.pageName)),I=(T=l.contentTableConfig)==null?void 0:T.propList.filter(f=>!(f.slotName==="status"||f.slotName==="createAt"||f.slotName==="updateAt"||f.slotName==="handle")),s=f=>{r.deletePageDataAction({pageName:l.pageName,id:f.id})},h=f=>{t("editBtnClick",f)},Q=()=>{t("newBtnClick")};return a({getPageData:v}),(f,E)=>{const A=d("el-button"),R=d("EditPen"),W=d("el-icon"),Y=d("Delete");return u(),S("div",Ce,[m(b(ve),$({page:n.value,"onUpdate:page":E[0]||(E[0]=p=>n.value=p),listData:b(z)},e.contentTableConfig,{listCount:b(g)}),re({headerHandle:o(()=>[b(c)?(u(),_(A,{key:0,type:"primary",onClick:Q},{default:o(()=>[D(P(e.contentTableConfig.title.btnText),1)]),_:1})):w("",!0)]),status:o(p=>[m(A,{plain:"",size:"small",type:p.row.enable?"success":"danger"},{default:o(()=>[D(P(p.row.enable?"\u542F\u52A8":"\u7981\u6B62"),1)]),_:2},1032,["type"])]),createAt:o(p=>[k("span",null,P(f.$filter.formatTime(p.row.createAt)),1)]),updateAt:o(p=>[k("span",null,P(f.$filter.formatTime(p.row.updateAt)),1)]),handle:o(p=>[k("div",be,[b(i)?(u(),_(A,{key:0,size:"small",type:"text",onClick:F=>h(p.row)},{default:o(()=>[m(W,null,{default:o(()=>[m(R)]),_:1}),we]),_:2},1032,["onClick"])):w("",!0),b(y)?(u(),_(A,{key:1,size:"small",type:"text",onClick:F=>s(p.row)},{default:o(()=>[m(W,null,{default:o(()=>[m(Y)]),_:1}),ke]),_:2},1032,["onClick"])):w("",!0)])]),_:2},[j(b(I),p=>({name:p.slotName,fn:o(F=>[p.slotName?N(f.$slots,p.slotName,{key:0,row:F.row},void 0,!0):w("",!0)])}))]),1040,["page","listData","listCount"])])}}});var xe=q(Ve,[["__scopeId","data-v-4eeb59ac"]]);const Ne={class:"page-modal"},$e={class:"dialog-footer"},Se=D("\u53D6\u6D88"),De=D(" \u786E\u5B9A "),Ae=B({props:{modalConfig:{type:Object,required:!0},defaultInfo:{type:Object,default:()=>({})},outerInfo:{type:Object,default:()=>({})},pageName:{type:String,required:!0}},setup(e,{expose:a}){const t=e,l=G(),r=x(!1),c=x({}),y=K("90%","30%");J(()=>t.defaultInfo,V=>{for(const n of t.modalConfig.formConfig.formItems)c.value[n.field]=V[n.field]});const i=()=>{r.value=!1,Object.keys(t.defaultInfo).length?l.editPageDataAction({pageName:t.pageName,editData:C(C({},c.value),t.outerInfo),id:t.defaultInfo.id}):l.createPageDataAction({pageName:t.pageName,newData:C(C({},c.value),t.outerInfo)})};return a({dialogVisible:r}),(V,n)=>{const v=d("el-button"),z=d("el-dialog");return u(),S("div",Ne,[m(z,{modelValue:r.value,"onUpdate:modelValue":n[2]||(n[2]=g=>r.value=g),width:b(y),title:e.modalConfig.title,"destroy-on-close":"",center:""},{footer:o(()=>[k("span",$e,[m(v,{onClick:n[1]||(n[1]=g=>r.value=!1)},{default:o(()=>[Se]),_:1}),m(v,{type:"primary",onClick:i},{default:o(()=>[De]),_:1})])]),default:o(()=>[m(b(pe),$(e.modalConfig.formConfig,{modelValue:c.value,"onUpdate:modelValue":n[0]||(n[0]=g=>c.value=g)}),null,16,["modelValue"]),N(V.$slots,"default")]),_:3},8,["modelValue","width","title"])])}}});function Le(e,a){const t=x(),l=x({});return{pageModalRef:t,defaultInfo:l,handleEditData:y=>{l.value=C({},y),t.value&&(t.value.dialogVisible=!0),e&&e(y)},handleNewData:()=>{l.value={},t.value&&(t.value.dialogVisible=!0),a&&a()}}}export{pe as X,Ae as _,xe as p,Le as u};
