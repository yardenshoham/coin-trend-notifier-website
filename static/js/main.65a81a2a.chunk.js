(this["webpackJsonpcoin-trend-notifier-website"]=this["webpackJsonpcoin-trend-notifier-website"]||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),s=a.n(l),c=(a(76),a(11)),o=a(109),i=a(103),u=a(110),m=a(58),p=a.n(m),f=a(22);function d(e){var t=Object(f.f)(),a=function(e){t.push("/".concat(e))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",style:{marginBottom:"30px"}},r.a.createElement(i.a,{style:{maxWidth:"1020px",margin:"auto"}},r.a.createElement(o.a.Brand,{href:"#home"},r.a.createElement("img",{src:p.a,width:"90px",className:"d-inline-block align-top",alt:"logo",style:{marginLeft:"15px"}})),r.a.createElement(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(o.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(u.a,{className:"mr-auto"},r.a.createElement(u.a.Link,{onClick:function(){return a("")}},"Home"),r.a.createElement(u.a.Link,{onClick:function(){return a("about")}},"About")),r.a.createElement(u.a,{className:"mr-sm-2",variant:"dark"},r.a.createElement(u.a.Item,{style:{color:"rgba(255,255,255,.5)"},onClick:function(){return e.onAccountWindowChange()}},"Account"))))))}var h=a(6),b=a.n(h),g=a(7),E=a(17),y=a(18),v=a(19),x=a(20),C=a(111),j=a(104),w=a(68),O=a(105),A=a(70),N=(a(39),a(66)),S=a(67),k=function(e){var t=e.color,a=Object(A.a)(e,["color"]),n="green"===t?45:135;return r.a.createElement(N.a,Object.assign({icon:S.a,size:"2x",style:{color:t,transform:"rotate("+n+"deg)",marginLeft:"1rem"}},a))},P=function(e){Object(x.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).verticalCenterStyle={minHeight:"100%",display:"flex",alignItems:"center"},e.verticalCenterMarginzStyle={minHeight:"100%",display:"flex",alignItems:"center",width:"0px",color:"lightslategrey"},e.borderStyle={padding:"5px",textAlign:"center"},e}return Object(y.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,null,r.a.createElement(i.a,{fluid:"true",style:this.borderStyle},r.a.createElement(j.a,{noGutters:"true"},r.a.createElement(w.a,{xs:1},r.a.createElement("h3",{style:this.verticalCenterMarginzStyle},this.props.indx)),r.a.createElement(w.a,null,r.a.createElement("h3",{style:this.verticalCenterStyle},r.a.createElement(O.a,{variant:"up"===this.props.type?"success":"danger"},this.props.base+"/"+this.props.quote))),r.a.createElement(w.a,{style:{display:"flex",alignItems:"center"}},r.a.createElement("h3",null,"up"===this.props.type?r.a.createElement(k,{color:"green"}):r.a.createElement(k,{color:"red"}))),r.a.createElement(w.a,null,r.a.createElement("h3",{style:this.verticalCenterStyle},r.a.createElement(O.a,{variant:"up"===this.props.type?"success":"danger"},this.props.chance+"%"))),r.a.createElement(w.a,null,r.a.createElement("h3",{style:this.verticalCenterStyle},this.props.url))))))}}]),a}(n.Component),q=a(40).default,I="https://coin-trend-notifier-api.herokuapp.com/",T=function(e){var t=localStorage.getItem("jwt"),a={headers:{Authorization:"Bearer ".concat(t)}};return q.get(I+"api/events",a)},B=function(e){Object(x.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={allTrends:[{base:"BTC",quote:"USDT",type:"up",chance:30,url:"#href"},{base:"ETH",quote:"USDT",type:"up",chance:30,url:"#href"},{base:"TRX",quote:"USDT",type:"down",chance:30,url:"#href"},{base:"ETH",quote:"BTC",type:"up",chance:30,url:"#href"},{base:"TRX",quote:"BTC",type:"down",chance:30,url:"#href"}]},e.verticalCenterStyle={minHeight:"100%",display:"flex",alignItems:"center",color:"lightslategrey"},e.borderStyle={padding:"5px",textAlign:"center"},e.handleAllTrends=Object(g.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)}))),e}return Object(y.a)(a,[{key:"componentDidMount",value:function(){try{this.handleAllTrends()}catch(e){console.log(e)}}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,null,r.a.createElement(i.a,{fluid:"true",style:this.borderStyle},r.a.createElement(j.a,{noGutters:"true"},r.a.createElement(w.a,{xs:1},r.a.createElement("h4",{style:this.verticalCenterStyle},"#")),r.a.createElement(w.a,null,r.a.createElement("h4",{style:this.verticalCenterStyle},"Asset")),r.a.createElement(w.a,null,r.a.createElement("h4",{style:this.verticalCenterStyle},"Expected to")),r.a.createElement(w.a,null,r.a.createElement("h4",{style:this.verticalCenterStyle},"Possibilty")),r.a.createElement(w.a,null,r.a.createElement("h4",{style:this.verticalCenterStyle},"More info"))))),this.state.allTrends.map((function(e,t){return r.a.createElement(P,{indx:t+1,key:"STD"+t,base:e.base,quote:e.quote,type:e.type,chance:e.chance,url:e.url})})))}}]),a}(n.Component),L=a(108),D=a(40).default,F="https://coin-trend-notifier-api.herokuapp.com/",H=function(){var e=Object(g.a)(b.a.mark((function e(t,a,n,r,l){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.post(F+"api/users",{email:t,password:a,username:n,phoneNumber:r,alertLimit:l});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t,a,n,r,l){return e.apply(this,arguments)}}(),U=function(){var e=Object(g.a)(b.a.mark((function e(t,a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.post(F+"api/users/login",{email:t,password:a});case 2:n=e.sent,localStorage.setItem("jwt",n.data.jwt);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),V=a(106);function R(e){var t=Object(f.f)();return r.a.createElement(i.a,null,r.a.createElement(j.a,{className:"justify-content-md-center"},r.a.createElement(w.a,{style:{textAlign:"center"},className:"m-3"},r.a.createElement(V.a,{variant:"primary",size:"lg",active:!0,type:"submit",style:{position:"relative",margin:"auto"}},"Login"))),""!==e.error&&r.a.createElement(j.a,{className:"justify-content-md-center"},r.a.createElement(w.a,{md:11,xs:10,style:{textAlign:"center"},className:"m-3"},e.error)),r.a.createElement(j.a,{className:"justify-content-md-center"},r.a.createElement(w.a,{md:5,xs:10,style:{textAlign:"center"},className:"m-3"},r.a.createElement(V.a,{onClick:function(){t.push("/signup")},variant:"outline-primary"},"Click here for Signup"))))}function z(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),l=a[0],s=a[1],o=Object(n.useState)(""),i=Object(c.a)(o,2),u=i[0],m=i[1],p=Object(n.useState)(""),d=Object(c.a)(p,2),h=d[0],E=d[1],y=function(){var e=Object(g.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,U(l,u);case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),E("User does not exist or Password does not match. Try again."),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),v=Object(f.f)();return Object(n.useEffect)((function(){localStorage.getItem("jwt")&&v.push("/trends")})),r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{onSubmit:y},r.a.createElement(L.a.Group,{controlId:"formEmail"},r.a.createElement(L.a.Label,null,"Email"),r.a.createElement(L.a.Control,{type:"email",placeholder:"Email",onChange:function(e){s(e.target.value)}})),r.a.createElement(L.a.Group,{controlId:"formPassword"},r.a.createElement(L.a.Label,null,"Password"),r.a.createElement(L.a.Control,{type:"password",placeholder:"Password",onChange:function(e){m(e.target.value)}})),r.a.createElement(R,{error:h})))}var G=a(112),M=a(14),W=function(e){Object(x.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(y.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{style:{top:"7%",width:"18%",position:"absolute",right:"3px",display:this.props.visible?"block":"none",zIndex:"1"}},r.a.createElement(G.a.Item,{style:{backgroundColor:"#343a40",color:"white"}},"Hi ",localStorage.getItem("jwt")?"Username":"Guest"),r.a.createElement(G.a.Item,{style:{backgroundColor:"#343a40",color:"rgba(255,255,255,.5)"}},r.a.createElement(M.b,{to:"/preferences"},"My Preferences")),r.a.createElement(G.a.Item,{style:{backgroundColor:"#343a40",color:"rgba(255,255,255,.5)"}},r.a.createElement(M.b,{to:"/settings"},"Account Settings"))))}}]),a}(n.Component);function Q(e){var t=Object(f.f)();return r.a.createElement(i.a,null,r.a.createElement(j.a,{className:"justify-content-md-center"},r.a.createElement(w.a,{style:{textAlign:"center"},className:"m-3"},r.a.createElement(V.a,{variant:"primary",size:"lg",active:!0,type:"submit",style:{position:"relative",margin:"auto"}},"Signup"))),""!==e.error&&r.a.createElement(j.a,{className:"justify-content-md-center"},r.a.createElement(w.a,{md:11,xs:10,style:{textAlign:"center"},className:"m-3"},e.error)),r.a.createElement(j.a,{className:"justify-content-md-center"},r.a.createElement(w.a,{md:5,xs:10,style:{textAlign:"center"},className:"m-3"},r.a.createElement(V.a,{onClick:function(){t.push("/login")},variant:"outline-primary"},"Cancel"))))}function _(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),l=a[0],s=a[1],o=Object(n.useState)(""),i=Object(c.a)(o,2),u=i[0],m=i[1],p=Object(n.useState)(""),d=Object(c.a)(p,2),h=d[0],E=d[1],y=Object(n.useState)(""),v=Object(c.a)(y,2),x=v[0],C=v[1],j=Object(n.useState)("0"),w=Object(c.a)(j,2),O=w[0],A=w[1],N=Object(n.useState)(""),S=Object(c.a)(N,2),k=S[0],P=S[1],q=Object(f.f)(),I=function(){var e=Object(g.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,H(l,u,h,x,parseInt(O));case 4:q.push("/login"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),P("Error"),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{onSubmit:I},r.a.createElement(L.a.Group,{controlId:"formEmail"},r.a.createElement(L.a.Label,null,"Email"),r.a.createElement(L.a.Control,{type:"email",placeholder:"Email",onChange:function(e){s(e.target.value)}})),r.a.createElement(L.a.Group,{controlId:"formPassword"},r.a.createElement(L.a.Label,null,"Password"),r.a.createElement(L.a.Control,{type:"password",placeholder:"Password",onChange:function(e){m(e.target.value)}})),r.a.createElement(L.a.Group,{controlId:"formUsername"},r.a.createElement(L.a.Label,null,"Username"),r.a.createElement(L.a.Control,{type:"username",placeholder:"Username",onChange:function(e){E(e.target.value)}})),r.a.createElement(L.a.Group,{controlId:"formPhoneNumber"},r.a.createElement(L.a.Label,null,"Phone Number"),r.a.createElement(L.a.Control,{type:"phoneNumber",placeholder:"Such as: +972501234567",onChange:function(e){C(e.target.value)}})),r.a.createElement(L.a.Group,{controlId:"formAlertLimitNumber"},r.a.createElement(L.a.Label,null,"Alert Limit"),r.a.createElement(L.a.Control,{type:"alertLimit",placeholder:"AlertLimit",onChange:function(e){A(e.target.value)}})),r.a.createElement(Q,{error:k})))}var X=a(69),J=a(40).default,Y="https://coin-trend-notifier-api.herokuapp.com/api/preferences",$=function(){var e=Object(g.a)(b.a.mark((function e(t,a,n){var r,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("jwt"),l={headers:{Authorization:"Bearer ".concat(r)}},e.next=4,J.post(Y,{probability:t,baseAssetName:a,quoteAssetName:n},l);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),K=function(){var e=Object(g.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("jwt"),n={headers:{Authorization:"Bearer ".concat(a)}},e.next=4,J.delete(Y+"?baseAssetName="+t.baseAssetName+"&quoteAssetName="+t.quoteAssetName,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(g.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("jwt"),a={headers:{Authorization:"Bearer ".concat(t)}},e.next=4,J.get(Y,a);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=a(107),te=function(e){Object(x.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={preference:{},edit:!0,originalValues:{}},e.calculateProbabilities=function(){for(var e=[],t=10;t<=90;t+=10)e.push(t);return e},e.handleEditPreference=function(){var t=Object(g.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!(n=e.state.edit)){t.next=22;break}if("Base Coin"!==e.state.preference.baseAssetName&&"Quote Coin"!==e.state.preference.quoteAssetName&&"Probability"!==e.state.preference.probability||(n=!n,e.props.onEditChange(a,n),console.log("preferenced could not be saved")),n){t.next=22;break}if("Base Coin"!==e.state.originalValues.baseAssetName||"Quote Coin"!==e.state.originalValues.quoteAssetName||"Probability"!==e.state.originalValues.probability){t.next=10;break}return t.next=8,$(parseFloat(e.state.preference.probability)/100,e.state.preference.baseAssetName,e.state.preference.quoteAssetName);case 8:t.next=20;break;case 10:if(e.state.preference.baseAssetName===e.state.originalValues.baseAssetName&&e.state.preference.quoteAssetName===e.state.originalValues.quoteAssetName){t.next=17;break}return t.next=13,K({baseAssetName:e.state.originalValues.baseAssetName,quoteAssetName:e.state.originalValues.quoteAssetName});case 13:return t.next=15,$(parseFloat(e.state.preference.probability)/100,e.state.preference.baseAssetName,e.state.preference.quoteAssetName);case 15:t.next=20;break;case 17:if(e.state.preference.probability===e.state.originalValues.probability){t.next=20;break}return t.next=20,$(parseFloat(e.state.preference.probability)/100,e.state.preference.baseAssetName,e.state.preference.quoteAssetName);case 20:e.props.refresh(),console.log("preference saved");case 22:e.props.onEditChange(a,n),e.setState({edit:n});case 24:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handlePreferenceChanges=function(t,a,n){var r=e.state.preference;"base"===t?r.baseAssetName=n.target.value:"quote"===t?r.quoteAssetName=n.target.value:"prob"===t&&(r.probability=n.target.value),e.setState({preference:r})},e.componentDidMount=function(){var t=Object.assign({},e.props.preference),a=Object.assign({},e.props.preference),n=e.props.editing;e.setState({edit:n,preference:a,originalValues:t})},e}return Object(y.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,null,r.a.createElement(L.a.Row,null,r.a.createElement(w.a,{xs:1},r.a.createElement(V.a,{variant:"outline-danger",onClick:function(){return e.props.onRemovePreference(e.props.index)}},"x")),r.a.createElement(w.a,{xs:1.2},r.a.createElement(V.a,{id:"preference_"+this.props.index,variant:"outline-info",onClick:function(){return e.handleEditPreference(e.props.index)}},!1===this.state.edit?"Edit":"Save")),r.a.createElement(w.a,null,r.a.createElement(L.a.Control,{defaultValue:this.props.preference.baseAssetName,disabled:!this.state.edit,as:"select",onChange:function(t){return e.handlePreferenceChanges("base",e.props.index,t)}},r.a.createElement("option",null,"Base Coin"),this.props.baseCoins.map((function(e){return r.a.createElement("option",{key:"option_"+e,value:e},e)})))),r.a.createElement(w.a,{style:{textAlign:"center"},xs:1},"/"),r.a.createElement(w.a,null,r.a.createElement(L.a.Control,{disabled:!this.state.edit,as:"select",onChange:function(t){return e.handlePreferenceChanges("quote",e.props.index,t)},defaultValue:this.props.preference.quoteAssetName},r.a.createElement("option",null,"Quote Coin"),this.props.quoteCoins.map((function(e){return r.a.createElement("option",{key:"option_"+e,value:e},e)})))),r.a.createElement(w.a,null,r.a.createElement(L.a.Control,{defaultValue:"Probability"===this.props.preference.probability?"Probability":100*this.props.preference.probability,disabled:!this.state.edit,as:"select",onChange:function(t){return e.handlePreferenceChanges("prob",e.props.index,t)}},r.a.createElement("option",null,"Probability"),this.calculateProbabilities().map((function(e){var t=parseInt(e);return r.a.createElement("option",{key:"option_"+t,value:t},t)})))))))}}]),a}(n.Component),ae=function(e){Object(x.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={userPreferences:[],editing:[],baseCoins:["BTC","ETH","TRX","USDT"],quoteCoins:["BTC","ETH","TRX","USDT"]},e.handleNewUserPreferences=function(){e.setState({userPrefences:e.state.userPreferences.push({probability:"Probability",baseAssetName:"Base Coin",quoteAssetName:"Quote Coin"}),editing:[].concat(Object(X.a)(e.state.editing),[!0])})},e.handleRemovePreference=function(){var t=Object(g.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"Base Coin"!==e.state.userPreferences[a].baseAssetName&&"Quote Coin"!==e.state.userPreferences[a].quoteAssetName&&"Probability"!==e.state.userPreferences[a].probability||e.refreshData(),n=e.state.userPreferences,t.next=4,K({baseAssetName:n[a].baseAssetName,quoteAssetName:n[a].quoteAssetName});case 4:e.refreshData();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.refreshData=Object(g.a)(b.a.mark((function t(){var a,n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z();case 2:for(a=t.sent,n=[],r=0;r<a.data.length;r++)n.push(!1);e.setState({userPreferences:a.data,editing:n});case 6:case"end":return t.stop()}}),t)}))),e.handleEditingChange=function(t,a){var n=e.state.editing;n[t]=a,e.setState({editing:n})},e.componentDidMount=Object(g.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.refreshData();case 2:case"end":return t.stop()}}),t)}))),e}return Object(y.a)(a,[{key:"render",value:function(){var e,t=this;try{e=this.state.userPreferences.map((function(e,a){return r.a.createElement(te,{key:"preference_"+a,index:a,preference:e,editing:t.state.editing[a],onRemovePreference:t.handleRemovePreference,baseCoins:t.state.baseCoins,quoteCoins:t.state.quoteCoins,refresh:t.refreshData,onEditChange:t.handleEditingChange})}))}catch(a){e=null}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Hi, ","Username"),r.a.createElement("span",null,"In this page you can edit your preferred coins."),r.a.createElement("br",null),r.a.createElement("span",null,"You will get notifications on the crypto coins that are shown here."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(L.a,{onSubmit:this.handleSaveChanges},e,r.a.createElement("br",null),r.a.createElement(ee.a,{className:"justify-content-center"},r.a.createElement(V.a,{variant:"outline-primary",onClick:this.handleNewUserPreferences},"Add New Preference"))))}}]),a}(n.Component);function ne(e){var t=Object(f.f)();return Object(n.useEffect)((function(){localStorage.getItem("jwt")?t.push("/trends"):t.push("/login")})),r.a.createElement(r.a.Fragment,null)}function re(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),l=a[0],s=a[1],o=function(){s(!l)};return Object(n.useEffect)((function(){})),r.a.createElement(M.a,null,r.a.createElement("div",null,r.a.createElement(d,{onAccountWindowChange:o}),r.a.createElement(W,{visible:l}),r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/login"},r.a.createElement(i.a,{fluid:!0,className:"HomepageBody"},r.a.createElement(j.a,null,r.a.createElement(w.a,{style:{border:"1px solid gray",padding:"50px",position:"relative",top:"10%",margin:"auto",boxShadow:"0px 0px 8px -2px",borderRadius:"1%"},md:5,xs:10},r.a.createElement(z,null))))),r.a.createElement(f.a,{path:"/trends"},r.a.createElement("div",{style:{position:"relative",maxWidth:"960px",margin:"auto"},className:"HomepageBody"},r.a.createElement(B,null))),r.a.createElement(f.a,{path:"/signup"},r.a.createElement(i.a,{fluid:!0,className:"HomepageBody"},r.a.createElement(j.a,null,r.a.createElement(w.a,{style:{border:"1px solid gray",padding:"50px",position:"relative",top:"10%",margin:"auto",boxShadow:"0px 0px 8px -2px",borderRadius:"1%"},md:5,xs:10},r.a.createElement(_,null))))),r.a.createElement(f.a,{path:"/settings"},r.a.createElement(r.a.Fragment,null)),r.a.createElement(f.a,{path:"/preferences"},r.a.createElement(i.a,{fluid:!0,className:"HomepageBody"},r.a.createElement(j.a,null,r.a.createElement(w.a,{style:{border:"1px solid gray",padding:"50px",position:"relative",top:"10%",margin:"auto",boxShadow:"0px 0px 8px -2px",borderRadius:"1%"},md:8,xs:10},r.a.createElement(ae,null))))),r.a.createElement(f.a,{path:"/about"},r.a.createElement(r.a.Fragment,null)),r.a.createElement(f.a,{path:"/"},r.a.createElement(ne,null)))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},58:function(e,t,a){e.exports=a.p+"static/media/logo.6d974881.png"},71:function(e,t,a){e.exports=a(101)},76:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.65a81a2a.chunk.js.map