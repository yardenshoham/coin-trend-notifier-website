(this["webpackJsonpcoin-trend-notifier-website"]=this["webpackJsonpcoin-trend-notifier-website"]||[]).push([[0],{47:function(e,t,a){e.exports=a.p+"static/media/logo.6d974881.png"},57:function(e,t,a){e.exports=a(85)},62:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),o=a.n(l),c=(a(62),a(7)),s=a(8),i=a(9),u=a(10),m=a(92),p=a(87),h=a(94),d=a(47),g=a.n(d),y=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",style:{marginBottom:"30px"}},r.a.createElement(p.a,{style:{maxWidth:"1020px",margin:"auto"}},r.a.createElement(m.a.Brand,{href:"#home"},r.a.createElement("img",{src:g.a,width:"90px",className:"d-inline-block align-top",alt:"logo",style:{marginLeft:"15px"}})),r.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(h.a,{className:"mr-auto"},r.a.createElement(h.a.Link,{href:"#home"},"Home"),r.a.createElement(h.a.Link,{href:"#about"},"About")),r.a.createElement(h.a,{className:"mr-sm-2",variant:"dark"},r.a.createElement(h.a.Item,{style:{color:"rgba(255,255,255,.5)"},onClick:function(){return e.props.onAccountWindowChange()}},"Account"))))))}}]),a}(n.Component),E=a(6),f=a.n(E),b=a(14),v=a(93),w=a(88),C=a(55),x=a(89),S=a(56),j=(a(29),a(53)),k=a(54),O=function(e){var t=e.color,a=Object(S.a)(e,["color"]),n="green"===t?45:135;return r.a.createElement(j.a,Object.assign({icon:k.a,size:"2x",style:{color:t,transform:"rotate("+n+"deg)",marginLeft:"1rem"}},a))},A=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).verticalCenterStyle={minHeight:"100%",display:"flex",alignItems:"center"},e.verticalCenterMarginzStyle={minHeight:"100%",display:"flex",alignItems:"center",width:"0px",color:"lightslategrey"},e.borderStyle={padding:"5px",textAlign:"center"},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null,r.a.createElement(p.a,{fluid:"true",style:this.borderStyle},r.a.createElement(w.a,{noGutters:"true"},r.a.createElement(C.a,{xs:1},r.a.createElement("h3",{style:this.verticalCenterMarginzStyle},this.props.indx)),r.a.createElement(C.a,null,r.a.createElement("h3",{style:this.verticalCenterStyle},r.a.createElement(x.a,{variant:"up"===this.props.type?"success":"danger"},this.props.base+"/"+this.props.quote))),r.a.createElement(C.a,{style:{display:"flex",alignItems:"center"}},r.a.createElement("h3",null,"up"===this.props.type?r.a.createElement(O,{color:"green"}):r.a.createElement(O,{color:"red"}))),r.a.createElement(C.a,null,r.a.createElement("h3",{style:this.verticalCenterStyle},r.a.createElement(x.a,{variant:"up"===this.props.type?"success":"danger"},this.props.chance+"%"))),r.a.createElement(C.a,null,r.a.createElement("h3",{style:this.verticalCenterStyle},this.props.url))))))}}]),a}(n.Component),T=a(38).default,L="https://coin-trend-notifier-api.herokuapp.com/",P=function(e){var t=localStorage.getItem("jwt"),a={headers:{Authorization:"Bearer ".concat(t)}};return T.get(L+"api/events",a)},N=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={allTrends:[{base:"BTC",quote:"USDT",type:"up",chance:30,url:"#href"},{base:"ETH",quote:"USDT",type:"up",chance:30,url:"#href"},{base:"TRX",quote:"USDT",type:"down",chance:30,url:"#href"},{base:"ETH",quote:"BTC",type:"up",chance:30,url:"#href"},{base:"TRX",quote:"BTC",type:"down",chance:30,url:"#href"}]},e.verticalCenterStyle={minHeight:"100%",display:"flex",alignItems:"center",color:"lightslategrey"},e.borderStyle={padding:"5px",textAlign:"center"},e.handleAllTrends=Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)}))),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){try{this.handleAllTrends()}catch(e){console.log(e)}}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null,r.a.createElement(p.a,{fluid:"true",style:this.borderStyle},r.a.createElement(w.a,{noGutters:"true"},r.a.createElement(C.a,{xs:1},r.a.createElement("h4",{style:this.verticalCenterStyle},"#")),r.a.createElement(C.a,null,r.a.createElement("h4",{style:this.verticalCenterStyle},"Asset")),r.a.createElement(C.a,null,r.a.createElement("h4",{style:this.verticalCenterStyle},"Expected to")),r.a.createElement(C.a,null,r.a.createElement("h4",{style:this.verticalCenterStyle},"Possibilty")),r.a.createElement(C.a,null,r.a.createElement("h4",{style:this.verticalCenterStyle},"More info"))))),this.state.allTrends.map((function(e,t){return r.a.createElement(A,{indx:t+1,key:"STD"+t,base:e.base,quote:e.quote,type:e.type,chance:e.chance,url:e.url})})))}}]),a}(n.Component),D=a(91),I=a(90),W=a(38).default,F="https://coin-trend-notifier-api.herokuapp.com/",M=function(){var e=Object(b.a)(f.a.mark((function e(t,a,n,r,l){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.post(F+"api/users",{email:t,password:a,username:n,phoneNumber:r,alertLimit:l});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t,a,n,r,l){return e.apply(this,arguments)}}(),B=function(){var e=Object(b.a)(f.a.mark((function e(t,a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.post(F+"api/users/login",{email:t,password:a});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),H=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",error:""},e.styleMargin="m-3",e.handleErrorChange=function(){e.setState({error:"User does not exist or Password does not match. Try again."})},e.handleEmailChange=function(t){e.setState({email:t.target.value})},e.handlePasswordChange=function(t){e.setState({password:t.target.value})},e.handleLogin=function(){var t=Object(b.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,B(e.state.email,e.state.password);case 4:n=t.sent,localStorage.setItem("jwt",n.jwt),console.log("token saved"),e.props.onPageToDisplayChange("trendsContainer"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),e.handleErrorChange(),console.log(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),e.changePageToSignup=function(){e.props.onPageToDisplayChange("signupForm")},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{onSubmit:this.handleLogin},r.a.createElement(D.a.Group,{controlId:"formEmail"},r.a.createElement(D.a.Label,null,"Email"),r.a.createElement(D.a.Control,{type:"email",placeholder:"Email",onChange:this.handleEmailChange})),r.a.createElement(D.a.Group,{controlId:"formPassword"},r.a.createElement(D.a.Label,null,"Password"),r.a.createElement(D.a.Control,{type:"password",placeholder:"Password",onChange:this.handlePasswordChange})),r.a.createElement(p.a,null,r.a.createElement(w.a,{className:"justify-content-md-center"},r.a.createElement(C.a,{style:{textAlign:"center"},className:this.styleMargin},r.a.createElement(I.a,{variant:"primary",size:"lg",active:!0,type:"submit",style:{position:"relative",margin:"auto"}},"Login"))),""!==this.state.error&&r.a.createElement(w.a,{className:"justify-content-md-center"},r.a.createElement(C.a,{md:11,xs:10,style:{textAlign:"center"},className:this.styleMargin},this.state.error)),r.a.createElement(w.a,{className:"justify-content-md-center"},r.a.createElement(C.a,{md:5,xs:10,style:{textAlign:"center"},className:this.styleMargin},r.a.createElement(I.a,{onClick:this.changePageToSignup,variant:"outline-primary"},"Click here for Signup"))))))}}]),a}(n.Component),U=a(95),G=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{style:{top:"10%",width:"18%",position:"absolute",right:"3px",display:this.props.visible?"block":"none"}},r.a.createElement(U.a.Item,{style:{backgroundColor:"#343a40",color:"white"}},"Hi ","Username"),r.a.createElement(U.a.Item,{style:{backgroundColor:"#343a40",color:"rgba(255,255,255,.5)"},action:!0,href:"#My preferences"},"My Preferences"),r.a.createElement(U.a.Item,{style:{backgroundColor:"#343a40",color:"rgba(255,255,255,.5)"},action:!0,href:"#Account Settiings"},"Account Settings")))}}]),a}(n.Component),q=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",username:"",phoneNumber:"",alertLimit:"0",signup:!1,error:""},e.styleMargin="m-3",e.handleSignup=function(){var t=Object(b.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,M(e.state.email,e.state.password,e.state.username,e.state.phoneNumber,parseInt(e.state.alertLimit));case 4:e.changeToLogin(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}(),e.handleEmailChange=function(t){e.setState({email:t.target.value})},e.handlePasswordChange=function(t){e.setState({password:t.target.value})},e.handleUsernameChange=function(t){e.setState({username:t.target.value})},e.handlePhoneNumberChange=function(t){e.setState({phoneNumber:t.target.value})},e.handleAlertLimitChange=function(t){e.setState({alertLimit:t.target.value})},e.changeToLogin=function(){e.props.onPageToDisplayChange("loginForm")},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{onSubmit:this.handleSignup},r.a.createElement(D.a.Group,{controlId:"formEmail"},r.a.createElement(D.a.Label,null,"Email"),r.a.createElement(D.a.Control,{type:"email",placeholder:"Email",onChange:this.handleEmailChange})),r.a.createElement(D.a.Group,{controlId:"formPassword"},r.a.createElement(D.a.Label,null,"Password"),r.a.createElement(D.a.Control,{type:"password",placeholder:"Password",onChange:this.handlePasswordChange})),r.a.createElement(D.a.Group,{controlId:"formUsername"},r.a.createElement(D.a.Label,null,"Username"),r.a.createElement(D.a.Control,{type:"username",placeholder:"Username",onChange:this.handleUsernameChange})),r.a.createElement(D.a.Group,{controlId:"formPhoneNumber"},r.a.createElement(D.a.Label,null,"Phone Number"),r.a.createElement(D.a.Control,{type:"phoneNumber",placeholder:"Such as: +972501234567",onChange:this.handlePhoneNumberChange})),r.a.createElement(D.a.Group,{controlId:"formAlertLimitNumber"},r.a.createElement(D.a.Label,null,"Alert Limit"),r.a.createElement(D.a.Control,{type:"alertLimit",placeholder:"AlertLimit",onChange:this.handleAlertLimitChange})),r.a.createElement(p.a,null,r.a.createElement(w.a,{className:"justify-content-md-center"},r.a.createElement(C.a,{style:{textAlign:"center"},className:this.styleMargin},r.a.createElement(I.a,{variant:"primary",size:"lg",active:!0,type:"submit",style:{position:"relative",margin:"auto"}},"Signup"))),r.a.createElement(w.a,{className:"justify-content-md-center"},r.a.createElement(C.a,{md:5,xs:10,style:{textAlign:"center"},className:this.styleMargin},r.a.createElement(I.a,{onClick:this.changeToLogin,variant:"outline-primary"},"Cancel"))))))}}]),a}(n.Component),R=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={loggedIn:!1,accountWindow:!1,pageToDisplay:"loginForm"},e.handlePageToDisplay=function(t){e.setState({pageToDisplay:t})},e.handleLoggedInChange=function(){e.setState({pageToDisplay:"trendsContainer"}),e.setState({loggedIn:!0})},e.handleAccountWindow=function(){console.log("handling"),e.setState({accountWindow:!e.state.accountWindow})},e.whatDoDisplay=function(){switch(e.state.pageToDisplay){case"loginForm":return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{onAccountWindowChange:e.handleAccountWindow}),r.a.createElement(G,{visible:e.state.accountWindow}),r.a.createElement(p.a,{fluid:!0,className:"HomepageBody"},r.a.createElement(w.a,null,r.a.createElement(C.a,{style:{border:"1px solid gray",padding:"50px",position:"relative",top:"10%",margin:"auto",boxShadow:"0px 0px 8px -2px",borderRadius:"1%"},md:5,xs:10},r.a.createElement(H,{onPageToDisplayChange:e.handlePageToDisplay})))));case"trendsContainer":return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{onAccountWindowChange:e.handleAccountWindow}),r.a.createElement("div",{style:{position:"relative",maxWidth:"960px",margin:"auto"},className:"HomepageBody"},r.a.createElement(N,null)));case"signupForm":return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{onAccountWindowChange:e.handleAccountWindow}),r.a.createElement(G,{visible:e.state.accountWindow}),r.a.createElement(p.a,{fluid:!0,className:"HomepageBody"},r.a.createElement(w.a,null,r.a.createElement(C.a,{style:{border:"1px solid gray",padding:"50px",position:"relative",top:"10%",margin:"auto",boxShadow:"0px 0px 8px -2px",borderRadius:"1%"},md:5,xs:10},r.a.createElement(q,{onPageToDisplayChange:e.handlePageToDisplay})))));default:return r.a.createElement("div",null,"ERROR")}},e}return Object(s.a)(a,[{key:"render",value:function(){return this.whatDoDisplay()}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.6a842a41.chunk.js.map