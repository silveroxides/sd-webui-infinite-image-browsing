import{P as D,Z as ye,d as ae,bg as pe,aP as be,$ as F,bi as _e,l as Ce,u as ge,ai as W,a0 as Y,h as x,c as v,a as X,bj as xe,b as Ae,f as Ie,bk as we,a3 as se,bl as ke,a2 as Pe,i as $e,aT as Oe,bm as Se,a5 as Be,a6 as Ke,a7 as Te,ag as Ee,aL as Ne,aK as Re,bn as je,bo as Me,k as De,bp as Fe,aj as Ue,ax as Le,bq as Ve,br as qe,o as C,y as S,H as q,z as J,p as j,v as B,r as K,S as te,m as Q,n as L,x as z,A as oe,K as ie,bs as ze,q as re,a1 as Ge,bt as He,bu as ce,ah as ne,O as Qe,T as de,R as We,bv as Xe,X as Ze}from"./index-812384b6.js";/* empty css              *//* empty css              */import{b as Je,a as ue,c as Ye,d as ea,r as aa,u as ta}from"./db-6cb27576.js";var na=function(){return{prefixCls:String,activeKey:{type:[Array,Number,String]},defaultActiveKey:{type:[Array,Number,String]},accordion:{type:Boolean,default:void 0},destroyInactivePanel:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},expandIcon:Function,openAnimation:D.object,expandIconPosition:D.oneOf(ye("left","right")),collapsible:{type:String},ghost:{type:Boolean,default:void 0},onChange:Function,"onUpdate:activeKey":Function}},he=function(){return{openAnimation:D.object,prefixCls:String,header:D.any,headerClass:String,showArrow:{type:Boolean,default:void 0},isActive:{type:Boolean,default:void 0},destroyInactivePanel:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},accordion:{type:Boolean,default:void 0},forceRender:{type:Boolean,default:void 0},expandIcon:Function,extra:D.any,panelKey:D.oneOfType([D.string,D.number]),collapsible:{type:String},role:String,onItemClick:{type:Function}}};function ve(n){var e=n;if(!Array.isArray(e)){var t=Ae(e);e=t==="number"||t==="string"?[e]:[]}return e.map(function(l){return String(l)})}const Z=ae({compatConfig:{MODE:3},name:"ACollapse",inheritAttrs:!1,props:pe(na(),{accordion:!1,destroyInactivePanel:!1,bordered:!0,openAnimation:be("ant-motion-collapse",!1),expandIconPosition:"left"}),slots:["expandIcon"],setup:function(e,t){var l=t.attrs,c=t.slots,s=t.emit,o=F(ve(_e([e.activeKey,e.defaultActiveKey])));Ce(function(){return e.activeKey},function(){o.value=ve(e.activeKey)},{deep:!0});var f=ge("collapse",e),g=f.prefixCls,P=f.direction,T=W(function(){var d=e.expandIconPosition;return d!==void 0?d:P.value==="rtl"?"right":"left"}),h=function(r){var u=e.expandIcon,y=u===void 0?c.expandIcon:u,b=y?y(r):v(ke,{rotate:r.isActive?90:void 0},null);return v("div",null,[Pe(Array.isArray(y)?b[0]:b)?se(b,{class:"".concat(g.value,"-arrow")},!1):b])},E=function(r){e.activeKey===void 0&&(o.value=r);var u=e.accordion?r[0]:r;s("update:activeKey",u),s("change",u)},$=function(r){var u=o.value;if(e.accordion)u=u[0]===r?[]:[r];else{u=$e(u);var y=u.indexOf(r),b=y>-1;b?u.splice(y,1):u.push(r)}E(u)},M=function(r,u){var y,b,R;if(!we(r)){var a=o.value,i=e.accordion,_=e.destroyInactivePanel,k=e.collapsible,O=e.openAnimation,A=String((y=r.key)!==null&&y!==void 0?y:u),w=r.props||{},I=w.header,p=I===void 0?(b=r.children)===null||b===void 0||(R=b.header)===null||R===void 0?void 0:R.call(b):I,G=w.headerClass,m=w.collapsible,V=w.disabled,U=!1;i?U=a[0]===A:U=a.indexOf(A)>-1;var H=m??k;(V||V==="")&&(H="disabled");var me={key:A,panelKey:A,header:p,headerClass:G,isActive:U,prefixCls:g.value,destroyInactivePanel:_,openAnimation:O,accordion:i,onItemClick:H==="disabled"?null:$,expandIcon:h,collapsible:H};return se(r,me)}},N=function(){var r;return Ie((r=c.default)===null||r===void 0?void 0:r.call(c)).map(M)};return function(){var d,r=e.accordion,u=e.bordered,y=e.ghost,b=Y((d={},x(d,g.value,!0),x(d,"".concat(g.value,"-borderless"),!u),x(d,"".concat(g.value,"-icon-position-").concat(T.value),!0),x(d,"".concat(g.value,"-rtl"),P.value==="rtl"),x(d,"".concat(g.value,"-ghost"),!!y),x(d,l.class,!!l.class),d));return v("div",X(X({class:b},xe(l)),{},{style:l.style,role:r?"tablist":null}),[N()])}}}),la=ae({compatConfig:{MODE:3},name:"PanelContent",props:he(),setup:function(e,t){var l=t.slots,c=F(!1);return Oe(function(){(e.isActive||e.forceRender)&&(c.value=!0)}),function(){var s,o;if(!c.value)return null;var f=e.prefixCls,g=e.isActive,P=e.role;return v("div",{ref:F,class:Y("".concat(f,"-content"),(s={},x(s,"".concat(f,"-content-active"),g),x(s,"".concat(f,"-content-inactive"),!g),s)),role:P},[v("div",{class:"".concat(f,"-content-box")},[(o=l.default)===null||o===void 0?void 0:o.call(l)])])}}}),ee=ae({compatConfig:{MODE:3},name:"ACollapsePanel",inheritAttrs:!1,props:pe(he(),{showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1}),slots:["expandIcon","extra","header"],setup:function(e,t){var l=t.slots,c=t.emit,s=t.attrs;Se(e.disabled===void 0,"Collapse.Panel",'`disabled` is deprecated. Please use `collapsible="disabled"` instead.');var o=ge("collapse",e),f=o.prefixCls,g=function(){c("itemClick",e.panelKey)},P=function(h){(h.key==="Enter"||h.keyCode===13||h.which===13)&&g()};return function(){var T,h,E,$,M=e.header,N=M===void 0?(T=l.header)===null||T===void 0?void 0:T.call(l):M,d=e.headerClass,r=e.isActive,u=e.showArrow,y=e.destroyInactivePanel,b=e.accordion,R=e.forceRender,a=e.openAnimation,i=e.expandIcon,_=i===void 0?l.expandIcon:i,k=e.extra,O=k===void 0?(h=l.extra)===null||h===void 0?void 0:h.call(l):k,A=e.collapsible,w=A==="disabled",I=f.value,p=Y("".concat(I,"-header"),(E={},x(E,d,d),x(E,"".concat(I,"-header-collapsible-only"),A==="header"),E)),G=Y(($={},x($,"".concat(I,"-item"),!0),x($,"".concat(I,"-item-active"),r),x($,"".concat(I,"-item-disabled"),w),x($,"".concat(I,"-no-arrow"),!u),x($,"".concat(s.class),!!s.class),$)),m=v("i",{class:"arrow"},null);u&&typeof _=="function"&&(m=_(e));var V=Be(v(la,{prefixCls:I,isActive:r,forceRender:R,role:b?"tabpanel":null},{default:l.default}),[[Ke,r]]),U=X({appear:!1,css:!1},a);return v("div",X(X({},s),{},{class:G}),[v("div",{class:p,onClick:function(){return A!=="header"&&g()},role:b?"tab":"button",tabindex:w?-1:0,"aria-expanded":r,onKeypress:P},[u&&m,A==="header"?v("span",{onClick:g,class:"".concat(I,"-header-text")},[N]):N,O&&v("div",{class:"".concat(I,"-extra")},[O])]),v(Te,U,{default:function(){return[!y||r?V:null]}})])}}});Z.Panel=ee;Z.install=function(n){return n.component(Z.name,Z),n.component(ee.name,ee),n};var sa={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"};const oa=sa;function fe(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},l=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(t).filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable}))),l.forEach(function(c){ia(n,c,t[c])})}return n}function ia(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var le=function(e,t){var l=fe({},e,t.attrs);return v(Ee,fe({},l,{icon:oa}),null)};le.displayName="ArrowRightOutlined";le.inheritAttrs=!1;const ra=le;function ca(n,e,t,l){for(var c=-1,s=n==null?0:n.length;++c<s;){var o=n[c];e(l,o,t(o),n)}return l}function da(n){return function(e,t,l){for(var c=-1,s=Object(e),o=l(e),f=o.length;f--;){var g=o[n?f:++c];if(t(s[g],g,s)===!1)break}return e}}var ua=da();const va=ua;function fa(n,e){return n&&va(n,e,Ne)}function pa(n,e){return function(t,l){if(t==null)return t;if(!Re(t))return n(t,l);for(var c=t.length,s=e?c:-1,o=Object(t);(e?s--:++s<c)&&l(o[s],s,o)!==!1;);return t}}var ga=pa(fa);const ha=ga;function ma(n,e,t,l){return ha(n,function(c,s,o){e(l,c,t(c),o)}),l}function ya(n,e){return function(t,l){var c=je(t)?ca:ma,s=e?e():{};return c(t,n,Je(l),s)}}var ba=Object.prototype,_a=ba.hasOwnProperty,Ca=ya(function(n,e,t){_a.call(n,t)?n[t].push(e):Me(n,t,[e])});const xa=Ca;const Aa={class:"container"},Ia={class:"search-bar"},wa={class:"form-name"},ka={class:"search-bar"},Pa={class:"form-name"},$a={class:"search-bar"},Oa={class:"form-name"},Sa={key:0,class:"generate-idx-hint"},Ba={class:"list-container"},Ka=["onClick"],Ta=["onClick"],Ea=["onClickCapture"],Na=ae({__name:"TagSearch",props:{tabIdx:{},paneIdx:{}},setup(n){const e=n,t=De(),l=Fe(),c=W(()=>!l.isIdle),s=F(),o=F({and_tags:[],or_tags:[],not_tags:[]}),f=W(()=>s.value?s.value.tags.slice().sort((a,i)=>i.count-a.count):[]),g=["custom","Model","lora","pos","size","Postprocess upscaler","Postprocess upscale by","Sampler"].reduce((a,i,_)=>(a[i]=_,a),{}),P=W(()=>Object.entries(xa(f.value,a=>a.type)).sort((a,i)=>g[a[0]]-g[i[0]])),T=Ue(),h=F(P.value.map(a=>a[0]));Le(async()=>{s.value=await ue(),h.value=P.value.map(a=>a[0]),s.value.img_count&&s.value.expired&&E()});const E=Ve(()=>l.pushAction(async()=>(await ta(),s.value=await ue(),h.value=P.value.map(a=>a[0]),s.value)).res),$=()=>{t.openTagSearchMatchedImageGridInRight(e.tabIdx,T,o.value)};qe("return-to-iib",async()=>{const a=await l.pushAction(Ye).res;s.value.expired=a.expired});const M=(a,i=!1)=>(i?`[${a.type}] `:"")+(a.display_name?`${a.display_name} : ${a.name}`:a.name),N=F(!1),d=F(""),r=async()=>{var i,_,k;if(!d.value){N.value=!1;return}const a=await l.pushAction(()=>ea({tag_name:d.value})).res;a.type!=="custom"&&ce.error(ne("existInOtherType")),(i=s.value)!=null&&i.tags.find(O=>O.id===a.id)?ce.error(ne("alreadyExists")):((_=s.value)==null||_.tags.push(a),(k=t.conf)==null||k.all_custom_tags.push(a)),d.value="",N.value=!1},u=a=>{Qe.confirm({title:ne("confirmDelete"),async onOk(){var _,k,O,A;await aa({tag_id:a});const i=((_=s.value)==null?void 0:_.tags.findIndex(w=>w.id===a))??-1;(k=s.value)==null||k.tags.splice(i,1),(A=t.conf)==null||A.all_custom_tags.splice((O=t.conf)==null?void 0:O.all_custom_tags.findIndex(w=>w.id===a),1)}})},y=W(()=>new Set([o.value.and_tags,o.value.or_tags,o.value.not_tags].flat())),b=a=>{y.value.has(a.id)?(o.value.and_tags=o.value.and_tags.filter(i=>i!==a.id),o.value.or_tags=o.value.or_tags.filter(i=>i!==a.id),o.value.not_tags=o.value.not_tags.filter(i=>i!==a.id)):o.value.and_tags.push(a.id)},R={value:a=>a.id,text:M,optionText:a=>M(a,!0)};return(a,i)=>{const _=de,k=We,O=de,A=Xe,w=ee,I=Z;return C(),S("div",Aa,[q("",!0),s.value?(C(),S(J,{key:1},[j("div",null,[j("div",Ia,[j("div",wa,B(a.$t("exactMatch")),1),v(K(te),{conv:R,mode:"multiple",style:{width:"100%"},options:f.value,value:o.value.and_tags,"onUpdate:value":i[0]||(i[0]=p=>o.value.and_tags=p),disabled:!f.value.length,placeholder:a.$t("selectExactMatchTag")},null,8,["options","value","disabled","placeholder"]),s.value.expired||!s.value.img_count?(C(),Q(_,{key:0,onClick:K(E),loading:!K(l).isIdle,type:"primary"},{default:L(()=>[z(B(s.value.img_count===0?a.$t("generateIndexHint"):a.$t("UpdateIndex")),1)]),_:1},8,["onClick","loading"])):(C(),Q(_,{key:1,type:"primary",onClick:$,loading:!K(l).isIdle,disabled:!o.value.and_tags.length},{default:L(()=>[z(B(a.$t("search")),1)]),_:1},8,["loading","disabled"]))]),j("div",ka,[j("div",Pa,B(a.$t("anyMatch")),1),v(K(te),{conv:R,mode:"multiple",style:{width:"100%"},options:f.value,value:o.value.or_tags,"onUpdate:value":i[1]||(i[1]=p=>o.value.or_tags=p),disabled:!f.value.length,placeholder:a.$t("selectAnyMatchTag")},null,8,["options","value","disabled","placeholder"])]),j("div",$a,[j("div",Oa,B(a.$t("exclude")),1),v(K(te),{conv:R,mode:"multiple",style:{width:"100%"},options:f.value,value:o.value.not_tags,"onUpdate:value":i[2]||(i[2]=p=>o.value.not_tags=p),disabled:!f.value.length,placeholder:a.$t("selectExcludeTag")},null,8,["options","value","disabled","placeholder"])])]),f.value.filter(p=>p.type!=="custom").length?q("",!0):(C(),S("p",Sa,B(a.$t("needGenerateIdx")),1)),j("div",Ba,[(C(!0),S(J,null,oe(P.value,([p,G])=>(C(),S("ul",{class:"tag-list",key:p},[j("h3",{class:"cat-name",onClick:m=>h.value.includes(p)?h.value.splice(h.value.indexOf(p),1):h.value.push(p)},[v(K(ra),{class:ie(["arrow",{down:h.value.includes(p)}])},null,8,["class"]),z(" "+B(a.$t(p)),1)],8,Ka),v(I,{ghost:"",activeKey:h.value,"onUpdate:activeKey":i[5]||(i[5]=m=>h.value=m)},{expandIcon:L(()=>[]),default:L(()=>[(C(),Q(w,{key:p},{default:L(()=>[(C(!0),S(J,null,oe(G,(m,V)=>(C(),S("li",{key:m.id,class:ie(["tag",{selected:y.value.has(m.id)}]),onClick:U=>b(m)},[y.value.has(m.id)?(C(),Q(K(ze),{key:0})):q("",!0),z(" "+B(M(m))+" ",1),p==="custom"&&V!==0?(C(),S("span",{key:1,class:"remove",onClickCapture:re(U=>u(m.id),["stop"])},[v(K(Ge))],40,Ea)):q("",!0)],10,Ta))),128)),p==="custom"?(C(),S("li",{key:0,class:"tag",onClick:i[4]||(i[4]=m=>N.value=!0)},[N.value?(C(),Q(A,{key:0,compact:""},{default:L(()=>[v(k,{value:d.value,"onUpdate:value":i[3]||(i[3]=m=>d.value=m),style:{width:"128px"},loading:c.value,"allow-clear":"",size:"small"},null,8,["value","loading"]),v(O,{size:"small",type:"primary",onClickCapture:re(r,["stop"]),loading:c.value},{default:L(()=>[z(B(d.value?a.$t("submit"):a.$t("cancel")),1)]),_:1},8,["onClickCapture","loading"])]),_:1})):(C(),S(J,{key:1},[v(K(He)),z(" "+B(a.$t("add")),1)],64))])):q("",!0)]),_:2},1024))]),_:2},1032,["activeKey"])]))),128))])],64)):q("",!0)])}}});const Fa=Ze(Na,[["__scopeId","data-v-d55ebc48"]]);export{Fa as default};
