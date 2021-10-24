(this["webpackJsonplibrary-app"]=this["webpackJsonplibrary-app"]||[]).push([[0],{118:function(e,t,n){e.exports={header:"header_header__2a52w",logo:"header_logo__2_787",logoText:"header_logoText__3folY",teamName:"header_teamName__2y4Bj"}},170:function(e,t,n){e.exports={carousel:"books-carousel_carousel__2qZ50",arrow:"books-carousel_arrow__2Z38V"}},181:function(e,t,n){e.exports={layout:"src_layout__73Zt4",contentWrapper:"src_contentWrapper__363N0"}},182:function(e,t,n){e.exports={content:"content-container_content__3fUXG",skeleton:"content-container_skeleton__24f93"}},184:function(e,t,n){e.exports={select:"target-select_select__2jREz"}},185:function(e,t,n){e.exports={helpIcon:"help-text_helpIcon__2IsqK",tooltip:"help-text_tooltip__3DN2U"}},186:function(e,t,n){e.exports={form:"user-select_form__PkcnS",input:"user-select_input__1XflJ"}},219:function(e,t,n){e.exports={bookWrapper:"book-wrapper_bookWrapper__rCweB"}},220:function(e,t,n){e.exports={collapse:"target-container_collapse__3Dv3v",infoIcon:"target-container_infoIcon__3NrqM"}},223:function(e,t,n){e.exports={notFound:"not-found-component_notFound__2dU7U"}},245:function(e,t,n){},405:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"init",(function(){return Hn})),n.d(a,"loadUsers",(function(){return Kn}));var c={};n.r(c),n.d(c,"loadRecommendations",(function(){return Yn})),n.d(c,"finishLoadRecommendations",(function(){return Jn}));var r={};n.r(r),n.d(r,"initLoadPopular",(function(){return Vn})),n.d(r,"loadPopular",(function(){return Wn}));var o={};n.r(o),n.d(o,"init",(function(){return zn})),n.d(o,"loadBooks",(function(){return Xn}));var i={};n.r(i),n.d(i,"loadTarget",(function(){return Zn})),n.d(i,"clearTarget",(function(){return $n}));var s={};n.r(s),n.d(s,"init",(function(){return ea})),n.d(s,"loadGenres",(function(){return ta}));var u={};n.r(u),n.d(u,"loadFilteredBooks",(function(){return na}));var l={};n.r(l),n.d(l,"loadCreatedRecommendations",(function(){return aa})),n.d(l,"clearCreatedRecommendations",(function(){return ca}));var d=n(0),j=n.n(d),b=n(29),O=n.n(b),f=(n(245),n(426)),m=n(181),p=n.n(m),h=(n(246),n(54)),g=n(51),v=n(38),x=n(182),k=n.n(x),_=n(415),B=n(5),A=function(){return Object(B.jsx)(_.a.Title,{level:2,children:"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0434\u043b\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438"})},C=n(32),N=n(25),y=n(24),T=function(e){return e.recommendations},S=Object(y.a)(T,(function(e){return e.recommendationsData})),F=Object(y.a)(T,(function(e){return e.historyData})),R=Object(y.a)(T,(function(e){return e.loading})),D=n(408),w=n(10),P=n(419),G=n(87),I=n(116),q=n(188),E=n(170),L=n.n(E),Q=function(e){var t={dots:!0,infinite:!1,speed:500,nextArrow:Object(B.jsx)(U,{}),prevArrow:Object(B.jsx)(M,{}),slidesToShow:e.slidesToShow||6,responsive:e.responsive||[{breakpoint:1200,settings:{slidesToShow:5}},{breakpoint:1024,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]};return Object(B.jsx)(P.a,Object(w.a)(Object(w.a)({arrows:!0},t),{},{className:L.a.carousel,dots:!0,children:e.children}))};function U(e){var t=e.className,n=e.style,a=e.onClick;return Object(B.jsx)("div",{className:"".concat(t," ").concat(L.a.arrow),style:n,children:Object(B.jsx)(G.a,{shape:"circle",onClick:a,icon:Object(B.jsx)(I.a,{})})})}function M(e){var t=e.className,n=e.style,a=e.onClick;return Object(B.jsx)("div",{className:"".concat(t," ").concat(L.a.arrow),style:n,children:Object(B.jsx)(G.a,{shape:"circle",onClick:a,icon:Object(B.jsx)(q.a,{})})})}var H,K,Y,J=n(431),V=n(427),W="NO_HISTORY";!function(e){e.red="red",e.green="green",e.orange="orange"}(Y||(Y={}));var z,X,Z=(H={},Object(g.a)(H,Y.red,"linear-gradient(90deg,#f5222d -.01%,#fff1f0 1.99%,#ffccc7 3%,#ff4d4f 5%,transparent 6%,#ffccc7 7%,#ffa39e 100.01%)"),Object(g.a)(H,Y.orange,"linear-gradient(90deg,#fa8c16 -.01%,#fff7e6 1.99%,#ffe7ba 3%,#ffa940 5%,transparent 6%,#ffe7ba 7%,#ffd591 100.01%)"),Object(g.a)(H,Y.green,"linear-gradient(90deg,#13c2c2 -.01%,#e6fffb 1.99%,#b5f5ec 3%,#36cfc9 5%,transparent 6%,#b5f5ec 7%,#87e8de 100.01%)"),H),$=(K={},Object(g.a)(K,Y.red,"#ff7875"),Object(g.a)(K,Y.orange,"#ff9c6e"),Object(g.a)(K,Y.green,"#36cfc9"),K),ee="user",te="https://svetlanatselikova.pythonanywhere.com",ne=n(67),ae=n.n(ne),ce=function(e){var t=e.book,n=t.id,a=t.title,c=t.author,r=t.year,o=t.age_resctriction,i=e.color,s=Object(B.jsxs)("span",{className:ae.a.itemImage,style:{background:Z[i]},children:[Object(B.jsx)("span",{className:ae.a.imageTitle,children:a}),Object(B.jsx)("span",{className:ae.a.imageYear,children:r}),Object(B.jsxs)("span",{className:ae.a.imageAuthor,children:[" ",c]})]});return Object(B.jsxs)("div",{className:"".concat(ae.a.item," ").concat(ae.a.itemText," ").concat(ae.a.slickSlide),children:[o?Object(B.jsx)(V.a.Ribbon,{text:"".concat(o,"+"),color:$[i],children:s}):s,Object(B.jsx)("span",{className:ae.a.itemTitle,children:a}),Object(B.jsx)("span",{className:ae.a.itemAuthor,children:c})]},n)},re=n(430),oe=n(83),ie=n.n(oe),se=function(e){var t=e.book,n=e.color;return Object(B.jsxs)("div",{className:ie.a.wrapper,children:[Object(B.jsx)(ce,{book:t,color:n}),Object(B.jsxs)("div",{className:ie.a.description,children:[Object(B.jsx)("div",{className:ie.a.annotation,children:t.annotation}),Object(B.jsx)("div",{className:ie.a.age,children:t.year}),Object(B.jsxs)("div",{className:ie.a.volume,children:[t.volume," \u0441\u0442\u0440\u0430\u043d\u0438\u0446"]}),Object(B.jsx)("div",{className:ie.a.tags,children:t.rubrics?Object(B.jsx)(re.a,{className:ie.a.tag,color:"blue",children:t.rubrics}):null})]})]})},ue=n(219),le=n.n(ue),de=function(e){var t=e.book,n=e.popupPlacement,a=e.popupTrigger,c=Object(d.useState)(Y.orange),r=Object(v.a)(c,2),o=r[0],i=r[1];return Object(d.useEffect)((function(){var e=function(){var e=t.id%10,n=Y.orange;return[1,4,9].includes(e)&&(n=Y.red),[0,2,5].includes(e)&&(n=Y.green),n}();i(e)}),[]),Object(B.jsx)(J.a,{content:Object(B.jsx)(se,{book:t,color:o}),trigger:a||"click",title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438",placement:n,children:Object(B.jsx)("div",{className:le.a.bookWrapper,children:Object(B.jsx)(ce,{book:t,color:o})})})},je=function(e){var t=e.title,n=e.books,a=e.isTarget,c=e.popupPlacement;return Object(B.jsxs)("div",{style:{margin:a?"40px 0 0 0 ":"40px 0"},children:[a?null:Object(B.jsx)(D.a,{}),Object(B.jsx)(_.a.Title,{level:4,children:t}),Object(B.jsx)(Q,{children:n.map((function(e,t){return Object(B.jsx)(j.a.Fragment,{children:Object(B.jsx)(de,{book:e,popupPlacement:c})},t)}))})]})},be=function(){var e=Object(N.c)(S),t=Object(N.c)(F);return Object(B.jsxs)(j.a.Fragment,{children:[Object(B.jsx)(je,{title:"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",books:e}),Object(B.jsx)(je,{title:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f",books:t})]})},Oe=function(e){return e.popular},fe=Object(y.a)(Oe,(function(e){return e.monthData})),me=Object(y.a)(Oe,(function(e){return e.russianData})),pe=Object(y.a)(Oe,(function(e){return e.newData})),he=Object(y.a)(Oe,(function(e){return e.loading})),ge=Object(y.a)((function(e){return e.contentMode}),(function(e){return e.mode})),ve=Object(y.a)(R,he,(function(e,t){return e||t})),xe=function(e){return e.users},ke=Object(y.a)(xe,(function(e){return e.ids})),_e=Object(y.a)(xe,(function(e){return e.loading}));!function(e){e.recommendations="recommendations",e.populdar="popular"}(z||(z={})),function(e){e.classic="classic",e.modern="modern"}(X||(X={}));var Be,Ae=function(){var e=Object(N.c)(fe),t=Object(N.c)(me),n=Object(N.c)(pe);return Object(B.jsxs)(j.a.Fragment,{children:[Object(B.jsx)(je,{title:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u0437\u0430 \u043c\u0435\u0441\u044f\u0446",books:e}),Object(B.jsx)(je,{title:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0430\u044f \u043e\u0442\u0435\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",books:t}),Object(B.jsx)(je,{title:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043d\u043e\u0432\u044b\u0435 \u0438\u0437\u0434\u0430\u043d\u0438\u044f",books:n})]})},Ce=n(33),Ne=Object(Ce.b)({name:"users",initialState:{ids:[],loading:!1},reducers:{fetchUsersFailure:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{loading:!1})},fetchUsersRequest:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{loading:!0})},fetchUsersSuccess:function(e,t){var n;return Object(w.a)(Object(w.a)({},e),{},{loading:!1,ids:(null===(n=t.payload)||void 0===n?void 0:n.ids)||[]})}}}),ye=Ne.actions,Te=ye.fetchUsersFailure,Se=ye.fetchUsersRequest,Fe=ye.fetchUsersSuccess,Re=Object(Ce.b)({name:"recommendations",initialState:{recommendationsData:[],historyData:[],loading:!1},reducers:{fetchRecommendationsFailure:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{loading:!1})},fetchRecommendationsRequest:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{recommendationsData:[],historyData:[],loading:!0})},fetchRecommendationsSuccess:function(e,t){var n,a;return Object(w.a)(Object(w.a)({},e),{},{loading:!1,recommendationsData:(null===(n=t.payload)||void 0===n?void 0:n.recommendations)||[],historyData:(null===(a=t.payload)||void 0===a?void 0:a.history)||[]})}}}),De=Re.actions,we=De.fetchRecommendationsFailure,Pe=De.fetchRecommendationsRequest,Ge=De.fetchRecommendationsSuccess,Ie=Object(Ce.b)({name:"popular",initialState:{monthData:[],russianData:[],newData:[],loading:!1},reducers:{fetchPopularFailure:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{loading:!1})},fetchPopularRequest:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{monthData:[],russianData:[],newData:[],loading:!0})},fetchPopularSuccess:function(e,t){var n,a,c;return Object(w.a)(Object(w.a)({},e),{},{loading:!1,monthData:(null===(n=t.payload)||void 0===n?void 0:n.month)||[],russianData:(null===(a=t.payload)||void 0===a?void 0:a.russian)||[],newData:(null===(c=t.payload)||void 0===c?void 0:c.new)||[]})}}}),qe=Ie.actions,Ee=qe.fetchPopularFailure,Le=qe.fetchPopularRequest,Qe=qe.fetchPopularSuccess,Ue=Object(Ce.b)({name:"contentMode",initialState:{mode:null},reducers:{setContentMode:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{mode:t.payload})}}}),Me=Ue.actions.setContentMode,He=Object(Ce.b)({name:"books",initialState:{ids:[],loading:!1},reducers:{fetchBooksFailure:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{loading:!1})},fetchBooksRequest:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{loading:!0})},fetchBooksSuccess:function(e,t){var n;return Object(w.a)(Object(w.a)({},e),{},{loading:!1,ids:(null===(n=t.payload)||void 0===n?void 0:n.ids)||[]})}}}),Ke=He.actions,Ye=Ke.fetchBooksFailure,Je=Ke.fetchBooksRequest,Ve=Ke.fetchBooksSuccess,We=Object(Ce.b)({name:"target",initialState:{targetData:[],loading:!1},reducers:{fetchTargetFailure:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{loading:!1})},fetchTargetRequest:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{targetData:[],loading:!0})},fetchTargetSuccess:function(e,t){var n;return Object(w.a)(Object(w.a)({},e),{},{loading:!1,targetData:(null===(n=t.payload)||void 0===n?void 0:n.target)||[]})}}}),ze=We.actions,Xe=ze.fetchTargetFailure,Ze=ze.fetchTargetRequest,$e=ze.fetchTargetSuccess,et=Object(Ce.b)({name:"genres",initialState:{genresData:[],loading:!1},reducers:{fetchGenresFailure:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{loading:!1})},fetchGenresRequest:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{loading:!0})},fetchGenresSuccess:function(e,t){var n;return Object(w.a)(Object(w.a)({},e),{},{loading:!1,genresData:(null===(n=t.payload)||void 0===n?void 0:n.rubrics)||[]})}}}),tt=et.actions,nt=tt.fetchGenresFailure,at=tt.fetchGenresRequest,ct=tt.fetchGenresSuccess,rt=Object(Ce.b)({name:"createdRecommendations",initialState:{createdRecommendationsData:[],loading:!1},reducers:{fetchCreatedRecommendationsFailure:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{loading:!1})},fetchCreatedRecommendationsRequest:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{createdRecommendationsData:[],loading:!0})},fetchCreatedRecommendationsSuccess:function(e,t){var n;return Object(w.a)(Object(w.a)({},e),{},{loading:!1,createdRecommendationsData:(null===(n=t.payload)||void 0===n?void 0:n.recommendations)||[]})}}}),ot=rt.actions,it=ot.fetchCreatedRecommendationsFailure,st=ot.fetchCreatedRecommendationsRequest,ut=ot.fetchCreatedRecommendationsSuccess,lt=Object(Ce.b)({name:"filteredBooks",initialState:{filteredBooksData:[],loading:!1},reducers:{fetchFilteredBooksFailure:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{loading:!1})},fetchFilteredBooksRequest:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{filteredBooksData:[],loading:!0})},fetchFilteredBooksSuccess:function(e,t){var n;return Object(w.a)(Object(w.a)({},e),{},{loading:!1,filteredBooksData:(null===(n=t.payload)||void 0===n?void 0:n.books)||[]})}}}),dt=lt.actions,jt=dt.fetchFilteredBooksFailure,bt=dt.fetchFilteredBooksRequest,Ot=dt.fetchFilteredBooksSuccess,ft=n(420),mt=n(423),pt=function(e){return e.books},ht=Object(y.a)(pt,(function(e){return e.ids})),gt=Object(y.a)(pt,(function(e){return e.loading})),vt=function(e){return e.target},xt=Object(y.a)(vt,(function(e){return e.targetData})),kt=Object(y.a)(vt,(function(e){return e.loading})),_t=n(220),Bt=n.n(_t),At=n(414),Ct=n(418),Nt=n(184),yt=n.n(Nt),Tt="TARGET_SELECT",St=function(e){var t=e.targetIds,n=e.isLoadingTargets,a=e.onSearch,c=At.a.useForm(),r=Object(v.a)(c,1)[0],o=Object(d.useState)(!0),i=Object(v.a)(o,2),s=i[0],u=i[1];return Object(B.jsxs)(At.a,{form:r,layout:"inline",className:yt.a.form,onFinish:function(e){return a(e.TARGET_SELECT)},children:[Object(B.jsx)(At.a.Item,{name:Tt,label:"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b \u043a\u043d\u0438\u0433",children:Object(B.jsx)(Ct.a,{className:yt.a.select,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b...",loading:n,showSearch:!0,mode:"multiple",maxTagCount:5,allowClear:!0,onChange:function(e){Array.isArray(e)&&e.length?u(!1):u(!0)},children:t.map((function(e){return Object(B.jsx)(Ct.a.Option,{value:e,children:e},e)}))})}),Object(B.jsx)(At.a.Item,{children:Object(B.jsx)(G.a,{type:"primary",htmlType:"submit",disabled:s,children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u043d\u0438\u0433\u0438"})})]})},Ft=n(81),Rt=n(238),Dt=n(185),wt=n.n(Dt),Pt=function(){return Object(B.jsxs)("span",{children:["\u041c\u044b \u043c\u043e\u0436\u0435\u043c \u043f\u043e\u043c\u043e\u0447\u044c \u0432\u0430\u043c \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0434\u043b\u044f \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",Object(B.jsx)(Ft.a,{title:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c \u043a\u043d\u0438\u0433\u0438 \u0438 \u043d\u0430\u0433\u043b\u044f\u0434\u043d\u043e \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b",overlayClassName:wt.a.tooltip,children:Object(B.jsx)(Rt.a,{className:wt.a.helpIcon})})]})},Gt=function(){var e=Object(N.c)(kt),t=Object(N.c)(ht),n=Object(N.c)(gt),a=Object(N.c)(xt),c=Object(N.b)(),r=e?Object(B.jsx)(ft.a,{active:!0}):Object.values(a).length?Object(B.jsx)(je,{books:a,title:"\u0424\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0432\u044b\u0431\u043e\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",isTarget:!0}):null;return Object(B.jsx)(mt.a,{ghost:!0,className:Bt.a.collapse,children:Object(B.jsx)(mt.a.Panel,{header:Object(B.jsx)(Pt,{}),children:Object(B.jsxs)(j.a.Fragment,{children:[Object(B.jsx)(St,{targetIds:t,isLoadingTargets:n,onSearch:function(e){return c(Ze(e))}}),r]})},1)})},It=n(422),qt=n(186),Et=n.n(qt),Lt="USER_INPUT",Qt=function(e){var t=e.isLoadingUsers,n=e.onPredict,a=e.value,c=At.a.useForm(),r=Object(v.a)(c,1)[0];return Object(d.useEffect)((function(){r.setFieldsValue(Object(g.a)({},Lt,a))}),[a]),Object(B.jsxs)(At.a,{form:r,layout:"inline",className:Et.a.form,onFinish:function(e){return n(e.USER_INPUT)},children:[Object(B.jsx)(At.a.Item,{name:Lt,label:"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",rules:[{pattern:/^(?:\d*)$/,message:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c"}],children:Object(B.jsx)(It.a,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0439\u0434\u0438 \u0438\u043b\u0438 \u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043f\u0443\u0441\u0442\u044b\u043c...",className:Et.a.input,allowClear:!0,autoComplete:"off"})}),Object(B.jsx)(At.a.Item,{children:Object(B.jsx)(G.a,{type:"primary",htmlType:"submit",disabled:t,loading:t,children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"})})]})},Ut=n(44),Mt=n.n(Ut),Ht=n(421),Kt=n(425),Yt=n(432),Jt=n.p+"static/media/reading.aad66751.png",Vt=function(e){var t=e.onCancel,n=e.onNext;return Object(B.jsx)(Kt.a,{subTitle:"\u041f\u043e\u0445\u043e\u0436\u0435, \u0443 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445 \u043a\u043d\u0438\u0433\u0430\u0445. \u041e\u0442\u0432\u0435\u0442\u044c\u0442\u0435 \u043d\u0430 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0445 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432, \u0438 \u043c\u044b \u043f\u043e\u0434\u0431\u0435\u0440\u0435\u043c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u0432\u0430\u0441.",extra:Object(B.jsxs)(Yt.b,{children:[Object(B.jsx)(G.a,{onClick:t,children:"\u041d\u0435\u0442, \u0441\u043f\u0430\u0441\u0438\u0431\u043e"}),Object(B.jsxs)(G.a,{type:"primary",onClick:n,children:[" ","\u041f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"]})]}),icon:Object(B.jsx)("img",{src:Jt,alt:"",className:Mt.a.askImg})})},Wt=n(416),zt=n(424),Xt=function(e){var t=e.onSelect,n=e.currentType;return Object(B.jsxs)(zt.a.Group,{value:n,onChange:function(e){return t(e.target.value)},size:"large",children:[Object(B.jsx)(zt.a.Button,{value:X.classic,children:"\u041a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0430\u044f"}),Object(B.jsx)(zt.a.Button,{value:X.modern,children:"\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f"})]})},Zt=(re.a.CheckableTag,function(e){var t=e.isLoadingGenres,n=e.genresData,a=e.selectedGenres,c=e.onChange;return t?Object(B.jsx)(ft.a,{active:!0}):Object(B.jsx)("div",{className:Mt.a.genresContent,children:Object(B.jsx)(Ct.a,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0436\u0430\u043d\u0440\u044b...",onChange:c,mode:"multiple",className:Mt.a.genresSelect,maxTagCount:6,loading:t,value:a,children:(null===n||void 0===n?void 0:n.length)?n.slice().sort((function(e,t){return e.localeCompare(t)})).map((function(e,t){return Object(B.jsx)(Ct.a.Option,{value:e,children:e},t)})):null})})}),$t=[{breakpoint:1200,settings:{slidesToShow:4}},{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}],en=function(e){var t=e.isLoadingBooks,n=e.booksData,a=e.selectedBooks,c=e.onPick;return t?Object(B.jsx)(ft.a,{active:!0}):Object(B.jsx)(Q,{responsive:$t,slidesToShow:5,children:n.map((function(e,t){return Object(B.jsx)("div",{className:"".concat(Mt.a.bookBlock," ").concat(a.includes(e.id)?Mt.a.selectedBook:void 0),onClick:function(){return c(e.id)},children:Object(B.jsx)(de,{book:e,popupPlacement:"right",popupTrigger:"hover"})},t)}))})},tn=Wt.a.Step,nn=function(e){var t=e.isLoadingGenres,n=e.genresData,a=e.isLoadingFilteredBooks,c=e.filteredBooksData,r=e.fetchFilteredBooks,o=e.isCreatingRecommendations,i=e.fetchCreatedRecommendations,s=Object(d.useState)(0),u=Object(v.a)(s,2),l=u[0],b=u[1],O=Object(d.useState)(void 0),f=Object(v.a)(O,2),m=f[0],p=f[1],g=Object(d.useState)([]),x=Object(v.a)(g,2),k=x[0],A=x[1],C=Object(d.useState)([]),N=Object(v.a)(C,2),y=N[0],T=N[1],S=[{title:"\u0422\u0438\u043f",content:Object(B.jsx)(Xt,{currentType:m,onSelect:function(e){return p(e)}}),header:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u044b"},{title:"\u0416\u0430\u043d\u0440\u044b",content:Object(B.jsx)(Zt,{isLoadingGenres:t,genresData:n,selectedGenres:k,onChange:function(e){A(e)}}),header:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435 \u0436\u0430\u043d\u0440\u044b"},{title:"\u041a\u043d\u0438\u0433\u0438",content:Object(B.jsx)(en,{isLoadingBooks:a,booksData:c,onPick:function(e){var t;t=y.includes(e)?y.filter((function(t){return t!==e})):[].concat(Object(h.a)(y),[e]),T(t)},selectedBooks:y}),header:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043d\u0438\u0433\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u0430\u043c \u043d\u0440\u0430\u0432\u044f\u0442\u0441\u044f"}];return Object(B.jsxs)(j.a.Fragment,{children:[Object(B.jsx)(Wt.a,{current:l,progressDot:!0,children:S.map((function(e){return Object(B.jsx)(tn,{title:e.title},e.title)}))}),Object(B.jsxs)("div",{className:Mt.a.stepsContent,children:[Object(B.jsx)(_.a.Title,{level:4,className:Mt.a.stepHeader,children:S[l].header}),S[l].content]}),Object(B.jsxs)("div",{className:Mt.a.stepBtns,children:[l>0&&Object(B.jsx)(G.a,{onClick:function(){b(l-1)},children:"\u041d\u0430\u0437\u0430\u0434"}),Object(B.jsx)(G.a,{type:"primary",onClick:function(){1===l&&(T([]),r(m,k)),2===l?i(y):b(l+1)},className:Mt.a.stepBtnNext,disabled:0===l&&!m||1===l&&!k.length||2===l&&!y.length,loading:2===l&&o,children:l===S.length-1?"\u041f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438":"\u0414\u0430\u043b\u0435\u0435"})]})]})};!function(e){e.steps="steps",e.ask="ask"}(Be||(Be={}));var an=function(e){var t=e.isOpen,n=e.onClose,a=e.isLoadingGenres,c=e.genresData,r=e.isLoadingFilteredBooks,o=e.filteredBooksData,i=e.fetchFilteredBooks,s=e.isCreatingRecommendations,u=e.fetchCreatedRecommendations,l=Object(d.useState)(Be.ask),j=Object(v.a)(l,2),b=j[0],O=j[1];return Object(B.jsx)(Ht.a,{visible:t,footer:null,onCancel:n,closable:!s,width:b===Be.steps?"80%":void 0,children:b===Be.ask?Object(B.jsx)(Vt,{onCancel:function(){return n()},onNext:function(){return O(Be.steps)}}):Object(B.jsx)(nn,{genresData:c,isLoadingGenres:a,isLoadingFilteredBooks:r,filteredBooksData:o,fetchFilteredBooks:i,isCreatingRecommendations:s,fetchCreatedRecommendations:u})})},cn=function(e){var t=e.isLoadingGenres,n=e.genresData,a=e.isLoadingFilteredBooks,c=e.filteredBooksData,r=e.fetchFilteredBooks,o=e.isCreatingRecommendations,i=e.fetchCreatedRecommendations,s=Object(d.useState)(!0),u=Object(v.a)(s,2),l=u[0],b=u[1];var O=function(e){var t=Object(d.useRef)();return Object(d.useEffect)((function(){t.current=e})),t.current}(o);return Object(d.useEffect)((function(){O&&!o&&b(!1)}),[o]),Object(B.jsxs)(j.a.Fragment,{children:[Object(B.jsxs)(G.a,{onClick:function(){return b(!0)},className:Mt.a.creatorBtn,type:"link",children:["\u041f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",Object(B.jsx)("img",{src:"data:image/png;base64,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",className:Mt.a.magicImg,alt:""})]}),l?Object(B.jsx)(an,{isOpen:l,onClose:function(){return b(!1)},genresData:n,isLoadingGenres:t,isLoadingFilteredBooks:a,filteredBooksData:c,fetchFilteredBooks:r,isCreatingRecommendations:o,fetchCreatedRecommendations:i}):null]})},rn=function(e){return e.genres},on=Object(y.a)(rn,(function(e){return e.genresData})),sn=Object(y.a)(rn,(function(e){return e.loading})),un=function(e){return e.filteredBooks},ln=Object(y.a)(un,(function(e){return e.filteredBooksData})),dn=Object(y.a)(un,(function(e){return e.loading})),jn=function(e){return e.createdRecommendations},bn=Object(y.a)(jn,(function(e){return e.loading})),On=Object(y.a)(jn,(function(e){return e.createdRecommendationsData})),fn=function(){var e=Object(N.c)(on),t=Object(N.c)(sn),n=Object(N.c)(dn),a=Object(N.c)(ln),c=Object(N.c)(bn),r=Object(N.c)(On),o=Object(N.b)();return r.length?Object(B.jsx)(je,{books:r,title:"\u0412\u0430\u0448\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",popupPlacement:"right"}):Object(B.jsx)(cn,{genresData:e,isLoadingGenres:t,isLoadingFilteredBooks:n,filteredBooksData:a,fetchFilteredBooks:function(e,t){return o(bt({type:e,genres:t}))},isCreatingRecommendations:c,fetchCreatedRecommendations:function(e){return o(st(e))}})},mn=n(223),pn=n.n(mn),hn=function(){return Object(B.jsx)("div",{className:pn.a.notFound,children:Object(B.jsx)(Kt.a,{status:"404",title:"404",subTitle:"\u0414\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"})})},gn=function(){var e=Object(N.c)(ge),t=Object(N.c)(ve),n=Object(N.b)(),a=Object(C.f)(),c=Object(d.useState)(void 0),r=Object(v.a)(c,2),o=r[0],i=r[1],s=Object(N.c)(ke),u=Object(N.c)(_e),l=Object(C.e)();Object(d.useEffect)((function(){var e=new URLSearchParams(a.search).get(ee)||void 0;i(e?Number(e):e),n(Pe(e||W))}),[a]);return Object(B.jsxs)("div",{className:k.a.content,children:[Object(B.jsx)(A,{}),Object(B.jsx)(Qt,{isLoadingUsers:u,onPredict:function(e){if(e){var t=new URLSearchParams(Object(g.a)({},ee,e.toString())).toString();l.push({search:t})}else{var n=new URLSearchParams(a.search);n.delete(ee),l.push({search:n.toString()})}},value:o}),t||u?Object(B.jsx)(j.a.Fragment,{children:Object(h.a)(Array(3).keys()).map((function(e,t){return Object(B.jsx)(ft.a,{active:!0,className:k.a.skeleton},t)}))}):!s.includes(o)&&o?Object(B.jsx)(hn,{}):e===z.populdar?Object(B.jsxs)(j.a.Fragment,{children:[Object(B.jsx)(fn,{}),Object(B.jsx)(Ae,{})]}):e===z.recommendations?Object(B.jsxs)(j.a.Fragment,{children:[Object(B.jsx)(Gt,{}),Object(B.jsx)(be,{})]}):null]})},vn=n(118),xn=n.n(vn),kn=n.p+"static/media/books.da7c06a2.png",_n=function(){return Object(B.jsxs)(f.a.Header,{className:xn.a.header,children:[Object(B.jsx)("img",{src:kn,className:xn.a.logo,alt:"logo"}),Object(B.jsx)(_.a.Title,{level:3,className:xn.a.logoText,children:"Library app"}),Object(B.jsxs)("div",{className:xn.a.teamName,children:[" ","Made by laugh-most-late-coat-not-deterministic"]})]})},Bn=n(225),An=n(226),Cn=n(236),Nn=n(230),yn=n(232);function Tn(){yn.b.error("\u041e\u0439, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.")}var Sn=function(e){Object(Cn.a)(n,e);var t=Object(Nn.a)(n);function n(e){var a;return Object(Bn.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(An.a)(n,[{key:"componentDidCatch",value:function(e,t){Tn()}},{key:"render",value:function(){return this.state.hasError?null:this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(j.a.Component);var Fn=function(){return Object(B.jsx)(Sn,{children:Object(B.jsxs)(f.a,{className:p.a.layout,children:[Object(B.jsx)(_n,{}),Object(B.jsx)(f.a.Content,{className:p.a.contentWrapper,children:Object(B.jsx)(gn,{})})]})})},Rn=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,433)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},Dn=n(66),wn=Object(Dn.b)({users:Ne.reducer,recommendations:Re.reducer,popular:Ie.reducer,contentMode:Ue.reducer,books:He.reducer,target:We.reducer,genres:et.reducer,filteredBooks:lt.reducer,createdRecommendations:rt.reducer}),Pn=n(417),Gn=n(429),In=n(409),qn=n(153),En=n(410),Ln=n(411),Qn=n(412),Un=n(413),Mn=n(428),Hn=function(e,t){return t.pipe(Object(In.a)(1),Object(qn.a)((function(){return Se()})))},Kn=function(e,t){return e.pipe(Object(En.a)(Se.match),Object(Ln.a)((function(){return Mn.a.get("".concat(te,"/users")).pipe(Object(qn.a)((function(e){return Fe(null===e||void 0===e?void 0:e.response)})),Object(Qn.a)((function(){return Tn(),Object(Un.a)(Te())})))})))},Yn=function(e,t){return e.pipe(Object(En.a)(Pe.match),Object(Ln.a)((function(e){return e.payload===W?Object(Un.a)(Me(z.populdar)):Object(Mn.a)({url:"".concat(te,"/recommendations?user_id=").concat(e.payload,"&model_name=item_similarity"),method:"GET",responseType:"text"}).pipe(Object(Ln.a)((function(e){var t,n=JSON.parse(null===e||void 0===e?void 0:e.response.replace(/\bNaN\b/g,"null"));return(null===n||void 0===n||null===(t=n.recommendations)||void 0===t?void 0:t.length)?Object(Un.a)(Me(z.recommendations),Ge(n)):Object(Un.a)(Me(z.populdar))})),Object(Qn.a)((function(){return Tn(),Object(Un.a)(we())})))})))},Jn=function(e,t){return e.pipe(Object(En.a)(Le.match),Object(qn.a)((function(){return Ge({history:[],recommendations:[]})})))},Vn=function(e,t){return e.pipe(Object(En.a)(Me.match),Object(En.a)((function(e){return e.payload===z.populdar})),Object(qn.a)((function(){return Le()})))},Wn=function(e,t){return e.pipe(Object(En.a)(Le.match),Object(Ln.a)((function(e){return Object(Mn.a)({url:"".concat(te,"/popular"),method:"GET",responseType:"text"}).pipe(Object(qn.a)((function(e){return Qe(JSON.parse(null===e||void 0===e?void 0:e.response.replace(/\bNaN\b/g,"null")))})),Object(Qn.a)((function(){return Tn(),Object(Un.a)(Ee())})))})))},zn=function(e,t){return t.pipe(Object(In.a)(1),Object(qn.a)((function(){return Je()})))},Xn=function(e,t){return e.pipe(Object(En.a)(Je.match),Object(Ln.a)((function(){return Mn.a.get("".concat(te,"/books")).pipe(Object(qn.a)((function(e){return Ve(null===e||void 0===e?void 0:e.response)})),Object(Qn.a)((function(){return Tn(),Object(Un.a)(Ye())})))})))},Zn=function(e,t){return e.pipe(Object(En.a)(Ze.match),Object(Ln.a)((function(e){return Object(Mn.a)({url:"".concat(te,"/targets?target_ids=").concat(e.payload.join(",")),method:"GET",responseType:"text"}).pipe(Object(qn.a)((function(e){return $e(JSON.parse(null===e||void 0===e?void 0:e.response.replace(/\bNaN\b/g,"null")))})),Object(Qn.a)((function(){return Tn(),Object(Un.a)(Xe())})))})))},$n=function(e,t){return e.pipe(Object(En.a)(Pe.match),Object(qn.a)((function(){return $e({target:[]})})))},ea=function(e,t){return t.pipe(Object(In.a)(1),Object(qn.a)((function(){return at()})))},ta=function(e,t){return e.pipe(Object(En.a)(at.match),Object(Ln.a)((function(e){return Mn.a.get("".concat(te,"/rubrics")).pipe(Object(qn.a)((function(e){return ct(null===e||void 0===e?void 0:e.response)})),Object(Qn.a)((function(){return Tn(),Object(Un.a)(nt())})))})))},na=function(e,t){return e.pipe(Object(En.a)(bt.match),Object(Ln.a)((function(e){var t=e.payload,n=t.type,a=t.genres;return Object(Mn.a)({url:"".concat(te,"/books_filter?type=").concat(n,"&rubrics=").concat(a.join(",")),method:"GET",responseType:"text"}).pipe(Object(qn.a)((function(e){return Ot(JSON.parse(null===e||void 0===e?void 0:e.response.replace(/\bNaN\b/g,"null")))})),Object(Qn.a)((function(){return Tn(),Object(Un.a)(jt())})))})))},aa=function(e,t){return e.pipe(Object(En.a)(st.match),Object(Ln.a)((function(e){return Object(Mn.a)({url:"".concat(te,"/recommendations?book_ids=").concat(e.payload.join(","),"&model_name=item_similarity"),method:"GET",responseType:"text"}).pipe(Object(qn.a)((function(e){return ut(JSON.parse(null===e||void 0===e?void 0:e.response.replace(/\bNaN\b/g,"null")))})),Object(Qn.a)((function(){return Tn(),Object(Un.a)(it())})))})))},ca=function(e,t){return e.pipe(Object(En.a)(Pe.match),Object(qn.a)((function(){return ut({recommendations:[],history:[]})})))},ra=Gn.a.apply(void 0,Object(h.a)(Object.values(a)).concat(Object(h.a)(Object.values(c)),Object(h.a)(Object.values(r)),Object(h.a)(Object.values(o)),Object(h.a)(Object.values(i)),Object(h.a)(Object.values(s)),Object(h.a)(Object.values(u)),Object(h.a)(Object.values(l)))),oa=Object(Pn.a)(),ia=Object(Ce.a)({reducer:wn,middleware:[oa]});oa.run(ra);var sa=n(180);O.a.render(Object(B.jsx)(j.a.StrictMode,{children:Object(B.jsx)(N.a,{store:ia,children:Object(B.jsx)(sa.a,{children:Object(B.jsx)(C.a,{component:Fn})})})}),document.getElementById("root")),Rn()},44:function(e,t,n){e.exports={creatorBtn:"recommendations-creator_creatorBtn__3Uprf",magicImg:"recommendations-creator_magicImg__6kHvx",stepBtns:"recommendations-creator_stepBtns__1ne8O",stepBtnNext:"recommendations-creator_stepBtnNext__1TFNf",stepsContent:"recommendations-creator_stepsContent__2c12r",stepHeader:"recommendations-creator_stepHeader__3PMl8",genresContent:"recommendations-creator_genresContent__1uIzh",askImg:"recommendations-creator_askImg__OENr5",wideModal:"recommendations-creator_wideModal__3j0ra",bookBlock:"recommendations-creator_bookBlock__pq3gz",selectedBook:"recommendations-creator_selectedBook__3il4c",genresSelect:"recommendations-creator_genresSelect__1v_-3"}},67:function(e,t,n){e.exports={item:"book_item__RiWFx",itemText:"book_itemText__3cOaP",slickSlide:"book_slickSlide__1Lfgo",itemTitle:"book_itemTitle__klfLR",itemAuthor:"book_itemAuthor__3p4s2",itemImage:"book_itemImage__2-ItX",imageTitle:"book_imageTitle__S5TcD",imageAuthor:"book_imageAuthor__2O5vg",imageYear:"book_imageYear__3Lwfm"}},83:function(e,t,n){e.exports={wrapper:"book-popover_wrapper__11qdo",age:"book-popover_age__1Hklc",annotation:"book-popover_annotation__3MbkA",tags:"book-popover_tags__IeQ8i",tag:"book-popover_tag__3e0xg",description:"book-popover_description__2Igw6"}}},[[405,1,2]]]);
//# sourceMappingURL=main.d16bf5bb.chunk.js.map