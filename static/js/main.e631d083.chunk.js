(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[0],{180:function(e,t,a){},181:function(e,t,a){},189:function(e,t,a){},284:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(28),r=a.n(s),i=(a(180),a(181),a(182),a(124)),l=a(27),o=a(34),d=a(32),j=a(167),u=a(114),h=a(54),b=a(288),f=a(289),O=a(89),p=a(90),x=a(287),g=a(64),y=a(290),v=a(291),S=a(173),m=a(61),k=a.n(m),C=(a(189),a(7));var w=function(e){var t=e.cacheActions,a=t.hasCache,c=t.getCache,s=Object(n.useState)("MUMBAI"),r=Object(d.a)(s,2),i=r[0],m=r[1],w=Object(n.useState)(null),T=Object(d.a)(w,2),A=T[0],E=T[1],_=Object(n.useState)(!1),L=Object(d.a)(_,2),I=L[0],F=L[1],B=Object(n.useState)(null),D=Object(d.a)(B,2),M=D[0],N=D[1],z=Object(n.useState)(""),V=Object(d.a)(z,2),P=V[0],R=V[1],H=Object(n.useState)(""),J=Object(d.a)(H,2),W=J[0],K=J[1],U=Object(n.useState)(""),G=Object(d.a)(U,2),q=G[0],Q=G[1],X=Object(n.useState)(""),Y=Object(d.a)(X,2),Z=Y[0],$=Y[1],ee=Object(n.useState)(""),te=Object(d.a)(ee,2),ae=te[0],ne=te[1],ce=Object(n.useState)(""),se=Object(d.a)(ce,2),re=se[0],ie=se[1],le=Object(n.useState)(""),oe=Object(d.a)(le,2),de=oe[0],je=oe[1],ue=Object(n.useState)(""),he=Object(d.a)(ue,2),be=he[0],fe=he[1],Oe=Object(n.useState)(!1),pe=Object(d.a)(Oe,2),xe=pe[0],ge=pe[1],ye=Object(n.useState)(!1),ve=Object(d.a)(ye,2),Se=ve[0],me=ve[1],ke=Object(g.b)(),Ce=Object(g.c)((function(e){return e.banks}));Object(l.f)(),Object(n.useEffect)((function(){0===Ce.bankList.length&&ke({type:"GET_DATA"})}),[]),Object(n.useEffect)((function(){Ae({name:P,bankId:be,branch:W,city:Z,ifsc:q,address:de,state:ae,district:re})}),[xe]);var we=function(e,a,n){ke({type:"SET_STATE",payload:{loading:!1,error:null,bankList:e}}),t.setCache(a,n,e)};Object(n.useEffect)((function(){if(Ce.loading)F(!0);else if(Ce.bankList){var e,t=Ce.bankList;null===(e=Ce.favBanksList)||void 0===e||e.map((function(e){t=t.map((function(t){return t.ifsc===e?Object(o.a)(Object(o.a)({},t),{},{isFav:!0}):t}))})),console.log("fav banks slifn"),F(!1),E(t),N(t)}}),[Ce.loading,Ce.bankList,Ce.favBanksList]);var Te=[{render:function(e,t){return Object(C.jsx)(u.a,{title:"Mark as ".concat(t.isFav?"un-favourite":"favourite"),children:Object(C.jsx)(h.a,{type:"link",style:{padding:0},onClick:function(){var e;(e=t).isFav?(console.log("got in"),ke({type:"REMOVE_FROM_FAV_LIST",payload:{ifsc:e.ifsc}})):ke({type:"APPEND_FAV_LIST",payload:{ifsc:e.ifsc}})},children:t.isFav?Object(C.jsx)(y.a,{style:{fontSize:18}}):Object(C.jsx)(v.a,{style:{fontSize:18}})})})}},{title:"Bank Id",dataIndex:"bank_id",width:80,align:"center"},{title:"Bank Name",dataIndex:"bank_name",render:function(e,t){return Object(C.jsx)(h.a,{type:"link",style:{fontSize:11},children:P?Object(C.jsx)(k.a,{highlightStyle:{backgroundColor:"#ffca80",padding:0},searchWords:[P],autoEscape:!0,textToHighlight:e}):e})}},{title:"Branch",dataIndex:"branch",render:function(e,t){return W?Object(C.jsx)(k.a,{highlightStyle:{backgroundColor:"#ffca80",padding:0},searchWords:[W],autoEscape:!0,textToHighlight:e}):e}},{title:"IFSC Code",dataIndex:"ifsc",width:130,render:function(e,t){return q?Object(C.jsx)(k.a,{highlightStyle:{backgroundColor:"#ffca80",padding:0},searchWords:[q],autoEscape:!0,textToHighlight:e}):e}},{title:"City",dataIndex:"city",width:110,render:function(e,t){return Z?Object(C.jsx)(k.a,{highlightStyle:{backgroundColor:"#ffca80",padding:0},searchWords:[Z],autoEscape:!0,textToHighlight:e}):e}},{title:"District",dataIndex:"district",render:function(e,t){return re?Object(C.jsx)(k.a,{highlightStyle:{backgroundColor:"#ffca80",padding:0},searchWords:[re],autoEscape:!0,textToHighlight:e}):e}},{title:"State",dataIndex:"state",render:function(e,t){return ae?Object(C.jsx)(k.a,{highlightStyle:{backgroundColor:"#ffca80",padding:0},searchWords:[ae],autoEscape:!0,textToHighlight:e}):e}},{title:"Address",dataIndex:"address",width:380,render:function(e,t){return de?Object(C.jsx)(k.a,{highlightStyle:{backgroundColor:"#ffca80",padding:0},searchWords:[de],autoEscape:!0,textToHighlight:e}):e}}],Ae=function(e){var t=e.bankId,a=e.name,n=e.branch,c=e.city,s=e.ifsc,r=e.address,i=e.state,l=e.district,o=M,d=!1;xe&&(o=o&&o.filter((function(e){return e.isFav&&!0===e.isFav}))),t&&(d=!0,o=o&&o.filter((function(e){return e.bank_id&&String(e.bank_id).includes(t.toLowerCase())}))),a&&(d=!0,o=o&&o.filter((function(e){return e.bank_name&&e.bank_name.toLowerCase().includes(a.toLowerCase())}))),n&&(d=!0,o=o&&o.filter((function(e){var t;return e.branch&&(null===(t=e.branch)||void 0===t?void 0:t.toLowerCase().includes(n.toLowerCase()))}))),s&&(d=!0,o=o&&o.filter((function(e){var t;return null===(t=e.ifsc)||void 0===t?void 0:t.toLowerCase().includes(s.toLowerCase())}))),c&&(d=!0,o=o&&o.filter((function(e){var t;return null===(t=e.city)||void 0===t?void 0:t.toLowerCase().includes(c.toLowerCase())}))),l&&(d=!0,o=o&&o.filter((function(e){return e.district&&e.district.toLowerCase().includes(l.toLowerCase())}))),i&&(d=!0,o=o&&o.filter((function(e){var t;return null===(t=e.state)||void 0===t?void 0:t.toLowerCase().includes(i.toLowerCase())}))),r&&(d=!0,o=o&&o.filter((function(e){return e.address&&e.address.toLowerCase().includes(r.toLowerCase())}))),me(d),E(o)},Ee=function(e){var t=e.target.name,a=e.target.value;switch(t){case"bankId":fe(a);break;case"name":R(a);break;case"branch":K(a);break;case"city":$(a);break;case"ifsc":Q(a);break;case"state":ne(a);break;case"address":je(a);break;case"district":ie(a)}Ae({bankId:"bankId"===t?a:be,name:"name"===t?a:P,branch:"branch"===t?a:W,city:"city"===t?a:Z,ifsc:"ifsc"===t?a:q,state:"state"===t?a:ae,district:"district"===t?a:re,address:"address"===t?a:de})},_e={margin:"0px 0px 0px 6px",width:136},Le={width:60,textAlign:"right"},Ie={display:"flex",alignItems:"center"},Fe=Object(C.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"auto auto auto auto",zIndex:2,height:"64px",width:"98%"},children:[Object(C.jsxs)("span",{style:Ie,children:[Object(C.jsx)("span",{style:Le,children:"Bank ID :"}),Object(C.jsx)(b.a,{size:"small",name:"bankId",placeholder:"Search Bank Id",allowClear:!0,value:be,onChange:function(e){return Ee(e)},style:_e})]}),Object(C.jsxs)("span",{style:Ie,children:[Object(C.jsx)("span",{style:Le,children:"Branch :"}),Object(C.jsx)(b.a,{size:"small",allowClear:!0,name:"branch",placeholder:"Search Branch",value:W,onChange:function(e){return Ee(e)},style:_e})]}),Object(C.jsxs)("span",{style:Ie,children:[Object(C.jsx)("span",{style:Le,children:"City :"}),Object(C.jsx)(b.a,{size:"small",name:"city",placeholder:"Search City",allowClear:!0,value:Z,onChange:function(e){return Ee(e)},style:_e})]}),Object(C.jsxs)("span",{style:Ie,children:[Object(C.jsx)("span",{style:Le,children:"State :"}),Object(C.jsx)(b.a,{size:"small",name:"state",placeholder:"Search State",allowClear:!0,value:ae,onChange:function(e){return Ee(e)},style:_e})]}),Object(C.jsxs)("span",{style:Ie,children:[Object(C.jsx)("span",{style:Le,children:"Name :"}),Object(C.jsx)(b.a,{size:"small",name:"name",placeholder:"Search Name",allowClear:!0,value:P,onChange:function(e){return Ee(e)},style:_e})]}),Object(C.jsxs)("span",{style:Ie,children:[Object(C.jsx)("span",{style:Le,children:"IFSC :"}),Object(C.jsx)(b.a,{size:"small",name:"ifsc",allowClear:!0,placeholder:"Search IFSC Code",value:q,onChange:function(e){return Ee(e)},style:_e})]}),Object(C.jsxs)("span",{style:Ie,children:[Object(C.jsx)("span",{style:Le,children:"District :"}),Object(C.jsx)(b.a,{size:"small",name:"district",placeholder:"Search Discrict",allowClear:!0,value:re,onChange:function(e){return Ee(e)},style:_e})]}),Object(C.jsxs)("span",{style:Ie,children:[Object(C.jsx)("span",{style:Le,children:"Address :"}),Object(C.jsx)(b.a,{size:"small",name:"address",placeholder:"Search Address",allowClear:!0,value:de,onChange:function(e){return Ee(e)},style:_e})]})]});return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{style:{width:"100%",height:80,backgroundColor:"#f9f9f9",padding:28,fontSize:16},children:"Klaar assignment"}),Object(C.jsx)("div",{style:{width:"94%",margin:"20px auto"},children:Object(C.jsx)(f.a,{children:Object(C.jsx)(f.a.Item,{children:"Home"})})}),Object(C.jsxs)("div",{className:"modify-table",style:{width:"95%",alignSelf:"center",margin:"10px auto 30px"},children:[Object(C.jsxs)("div",{style:{width:"100%",padding:"10px 0 10px 10px",display:"flex",justifyContent:"space-between"},children:[Object(C.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(C.jsxs)(O.a,{value:i,onChange:function(e){!function(t){var n="https://vast-shore-74260.herokuapp.com/banks?city=".concat(t),s={city:t};if(console.log(n,s),a(n,s)){console.log("has cache");var r=c(n,s).data;ke({type:"SET_STATE",payload:{loading:!1,bankList:r,error:null}})}else{console.log("no cache"),ke({type:"SET_STATE",payload:{loading:!0}});try{fetch(n,s).then((function(e){return e.json()})).then((function(e){return we(e,n,s)}))}catch(e){ke({type:"SET_STATE",payload:{loading:!1,error:JSON.parse(e)}}),j.a.error({message:"Something went wrong",description:JSON.parse(e)})}}}(e),m(e)},style:{width:180},children:[Object(C.jsx)(O.a.Option,{value:"MUMBAI",children:"Mumbai"}),Object(C.jsx)(O.a.Option,{value:"DELHI",children:"Delhi"}),Object(C.jsx)(O.a.Option,{value:"NOIDA",children:"Noida"}),Object(C.jsx)(O.a.Option,{value:"JAIPUR",children:"Jaipur"}),Object(C.jsx)(O.a.Option,{value:"LUCKNOW",children:"Lucknow"})]}),Object(C.jsx)(p.a,{onChange:function(e){return ge(e.target.checked)},checked:xe,style:{marginLeft:"20px"},children:"Show favourite Only"})]}),Se?Object(C.jsxs)(h.a,{type:"link",style:{marginLeft:"10px",color:"#feb61b"},onClick:function(){fe(""),R(""),je(""),K(""),Q(""),$(""),ie(""),ne(""),me(!1),E(M)},size:"small",children:["Clear Filters",Object(C.jsx)(S.a,{})]}):null]}),Object(C.jsx)(x.a,{loading:I,dataSource:A,rowKey:function(e){return e.ifsc},title:function(){return Fe},columns:Te,pagination:{defaultPageSize:20,showSizeChanger:!0,pageSizeOptions:["20","30","50","100"],position:"top"}})]})]})};var T=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("bankProfile"))),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(g.b)();console.log(a);var r={width:"50%",fontSize:16,fontWeight:600,textAlign:"right"},i={marginLeft:20,width:"50%",fontSize:16},l={display:"flex",marginBottom:"5px"};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{style:{width:"100%",height:80,backgroundColor:"#f9f9f9",padding:28,fontSize:16},children:"Klaar assignment"}),Object(C.jsx)("div",{style:{width:"70%",margin:"20px auto"},children:Object(C.jsxs)(f.a,{children:[Object(C.jsx)(f.a.Item,{children:Object(C.jsx)("a",{href:"/",style:{color:"#1C8FFA"},children:"Home"})}),Object(C.jsx)(f.a.Item,{children:"Profile"})]})}),a?Object(C.jsx)("div",{style:{padding:"24px",width:"70%",margin:"40px auto",alignSelf:"center",border:"1px solid #d9d9d9",boxShadow:"0 1px 1px 0 rgb(242, 242, 242)",height:440},children:Object(C.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(C.jsx)("div",{style:l,children:Object(C.jsxs)(h.a,{type:"link",onClick:function(){var e;(e=a).isFav?(s({type:"REMOVE_FROM_FAV_LIST",payload:{ifsc:e.ifsc}}),c(Object(o.a)(Object(o.a)({},a),{},{isFav:!1}))):(s({type:"APPEND_FAV_LIST",payload:{ifsc:e.ifsc}}),c(Object(o.a)(Object(o.a)({},a),{},{isFav:!0})))},style:{marginLeft:"auto"},children:[" ",a.isFav?Object(C.jsx)(y.a,{style:{fontSize:20}}):Object(C.jsx)(v.a,{style:{fontSize:20}})]})}),Object(C.jsxs)("div",{style:l,children:[Object(C.jsx)("div",{style:r,children:"Bank Name "}),Object(C.jsxs)("div",{style:i,children:[": ",a.bank_name]})]}),Object(C.jsxs)("div",{style:l,children:[Object(C.jsx)("div",{style:r,children:"Branch "}),Object(C.jsxs)("div",{style:i,children:[": ",a.branch]})]}),Object(C.jsxs)("div",{style:l,children:[Object(C.jsx)("div",{style:r,children:"IFSC Code "}),Object(C.jsxs)("div",{style:i,children:[": ",a.ifsc," "]})]}),Object(C.jsxs)("div",{style:l,children:[Object(C.jsx)("div",{style:r,children:"City "}),Object(C.jsxs)("div",{style:i,children:[": ",a.city]})]}),Object(C.jsxs)("div",{style:l,children:[Object(C.jsx)("div",{style:r,children:"District "}),Object(C.jsxs)("div",{style:i,children:[": ",a.district]})]}),Object(C.jsxs)("div",{style:l,children:[Object(C.jsx)("div",{style:r,children:"State "}),Object(C.jsxs)("div",{style:i,children:[": ",a.state]})]}),Object(C.jsxs)("div",{style:l,children:[Object(C.jsx)("div",{style:r,children:"Address "}),Object(C.jsxs)("div",{style:i,children:[": ",a.address]})]})]})}):Object(C.jsx)("div",{style:{width:"70%",margin:"40px auto"},children:"Please select a profile from table"})]})},A=a(168),E={SET_STATE:"SET_STATE",GET_DATA:"GET_DATA",FETCH_DATA:"FETCH_DATA",MARK_AS_FAV:"MARK_AS_FAV",MARK_AS_UNFAV:"MARK_AS_UNFAV",APPEND_FAV_LIST:"APPEND_FAV_LIST",REMOVE_FROM_FAV_LIST:"REMOVE_FROM_FAV_LIST"},_={loading:!1,error:null,favBanksList:function(){try{console.log("i got in funtxoint");var e=localStorage.getItem("favBanksList");return void 0===e||null===e?[]:(console.log("i got in return function",JSON.parse(e)),JSON.parse(e))}catch(t){return j.a.error({message:"Something went wrong",description:JSON.parse(t)}),[]}}(),bankList:[]};var L=a(35),I=a(169),F=a(160),B=a(161),D=a.n(B),M=a(52),N=a(40),z=a.n(N),V=a(46),P=a(162),R=a(163),H=a.n(R);function J(e){return W.apply(this,arguments)}function W(){return(W=Object(P.a)(z.a.mark((function e(t){var a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=H.a.get("https://vast-shore-74260.herokuapp.com/banks?city=".concat(t.city)).then((function(e){return e})).catch((function(e){return e})),e.abrupt("return",a);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K=z.a.mark(q),U=z.a.mark(Q),G=z.a.mark(X);function q(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.c)({type:"SET_STATE",payload:{loading:!1,error:null}});case 2:return e.next=4,Object(V.c)({type:"FETCH_DATA",payload:{city:"MUMBAI"}});case 4:case"end":return e.stop()}}),K)}function Q(e){var t,a;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.next=3,Object(V.c)({type:"SET_STATE",payload:{loading:!0}});case 3:return n.next=5,Object(V.b)(J,t);case 5:if(a=n.sent,console.log("in response",a),!a||!a.data){n.next=12;break}return n.next=10,Object(V.c)({type:"SET_STATE",payload:{loading:!1,error:null,bankList:a.data}});case 10:n.next=15;break;case 12:return j.a.error({message:"Something went wrong",description:"Request failed with status code 404"}),n.next=15,Object(V.c)({type:"SET_STATE",payload:{loading:!1,error:"Request failed with status code 404"}});case 15:case"end":return n.stop()}}),U)}function X(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.a)([Object(V.d)(E.GET_DATA,q),Object(V.d)(E.FETCH_DATA,Q)]);case 2:case"end":return e.stop()}}),G)}var Y=z.a.mark(Z);function Z(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.a)([X()]);case 2:case"end":return e.stop()}}),Y)}var $=a(164),ee=a.n($);var te=function(){return Object(C.jsx)(ee.a,{children:function(e){e.store;var t=e.actions;return Object(C.jsx)("div",{children:Object(C.jsx)(w,{cacheActions:t})})}})},ae=(Object(L.b)(),Object(M.c)({banks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.SET_STATE:return Object(o.a)(Object(o.a)({},e),t.payload);case E.APPEND_FAV_LIST:return Object(o.a)(Object(o.a)({},e),{},{favBanksList:[t.payload.ifsc].concat(Object(A.a)(e.favBanksList))});case E.REMOVE_FROM_FAV_LIST:var a=[];return e.favBanksList.forEach((function(e){e!==t.payload.ifsc&&a.push(e)})),console.log(a),Object(o.a)(Object(o.a)({},e),{},{favBanksList:a});default:return e}}})),ne=Object(I.a)(),ce=[F.a,D.a,ne],se=Object(M.e)(ae,Object(M.d)(M.a.apply(void 0,ce)));ne.run(Z),se.subscribe((function(){return function(e){try{localStorage.setItem("favBanksList",JSON.stringify(e.banks.favBanksList))}catch(t){j.a.error({message:"Something went wrong",description:JSON.parse(t)})}}(se.getState())}));var re=function(){return Object(C.jsx)(g.a,{store:se,children:Object(C.jsx)(i.a,{children:Object(C.jsxs)(l.c,{children:[Object(C.jsx)(l.a,{path:"/",exact:!0,component:te}),Object(C.jsx)(l.a,{path:"/profile/",component:T,exact:!0}),Object(C.jsx)(l.a,{component:Error})]})})})},ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,292)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(re,{})}),document.getElementById("root")),ie()}},[[284,1,2]]]);
//# sourceMappingURL=main.e631d083.chunk.js.map