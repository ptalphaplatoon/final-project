(this["webpackJsonpcovid-app"]=this["webpackJsonpcovid-app"]||[]).push([[0],{134:function(e){e.exports=JSON.parse('{"Alaska":"Alaska_DHSS","Alabama":"alpublichealth","Arkansas":"adhpio","Arizona":"azdhs","California":"CAPublicHealth","Colorado":"cdphe","Connecticut":"ctdph","Delaware":"Delaware_DHSS","Florida":"HealthyFla","Georgia":"GaDPH","Guam":"guamdphss","Hawaii":"HawaiiDOH","Iowa":"IAPublicHealth","Idaho":"IDHW","Illinois":"IDPH","Indiana":"statehealthin","Kansas":"kdhe","Kentucky":"CHFSKy","Louisiana":"LADeptHealth","Massachusetts":"massdph","Maryland":"MDHealthDept","Maine":"mainedhhs","Michigan":"MichiganHHS","Minnesota":"mnhealth","Missouri":"HealthyLivingMo","Northern Mariana Islands":"cnmichcc","Mississippi":"msdh","Montana":"dphhsmt","North Carolina":"ncdhhs","North Dakota":"NDDOH","Nebraska":"NEDHHS","New Hampshire":"NHPubHealth","New Jersey":"NJDeptofHealth","New Mexico":"NMDOH","Nevada":"dhhsnevada","New York":"healthnygov","Ohio":"OHdeptofhealth","Oklahoma":"HealthyOklahoma","Oregon":"OHAOregon","Pennsylvania":"PAHealthDept","Puerto Rico":"DeptSaludPR","Rhode Island":"rihealth","South Carolina":"scdhec","South Dakota":"SDDOH","Tennessee":"TNDeptofHealth","Texas":"TexasDSHS","Utah":"utahdepofhealth","Virginia":"vdhgov","US Virgin Islands":"usvidoh","Vermont":"healthvermont","Washington":"WADeptHealth","Wisconsin":"DHSWI","West Virginia":"WV_DHHR","Wyoming":"health_wyoming"}')},135:function(e){e.exports=JSON.parse('{"Alabama":"AL","Alaska":"AK","American Samoa":"AS","Arizona":"AZ","Arkansas":"AR","California":"CA","Colorado":"CO","Connecticut":"CT","Delaware":"DE","District Of Columbia":"DC","Federated States Of Micronesia":"FM","Florida":"FL","Georgia":"GA","Guam":"GU","Hawaii":"HI","Idaho":"ID","Illinois":"IL","Indiana":"IN","Iowa":"IA","Kansas":"KS","Kentucky":"KY","Louisiana":"LA","Maine":"ME","Marshall Islands":"MH","Maryland":"MD","Massachusetts":"MA","Michigan":"MI","Minnesota":"MN","Mississippi":"MS","Missouri":"MO","Montana":"MT","Nebraska":"NE","Nevada":"NV","New Hampshire":"NH","New Jersey":"NJ","New Mexico":"NM","New York":"NY","North Carolina":"NC","North Dakota":"ND","Northern Mariana Islands":"MP","Ohio":"OH","Oklahoma":"OK","Oregon":"OR","Palau":"PW","Pennsylvania":"PA","Puerto Rico":"PR","Rhode Island":"RI","South Carolina":"SC","South Dakota":"SD","Tennessee":"TN","Texas":"TX","Utah":"UT","Vermont":"VT","Virgin Islands":"VI","Virginia":"VA","Washington":"WA","West Virginia":"WV","Wisconsin":"WI","Wyoming":"WY"}')},148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},154:function(e,t,a){},156:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){"use strict";a.r(t);var n=a(12),s=a(7),r=a.n(s),o=a(99),c=a.n(o),i=(a(148),a(31)),l=a.n(i),u=a(52),h=a(80),d=a(38),p=(a(149),a(150),a(58)),j=a(59),b=a(79),m=a(78),f=a(167),g=a(139),v=function(e){return Object(n.jsxs)(f.a,{onSubmit:function(t){t.preventDefault(),console.log("Author: ".concat(t.target.author.value,", Comments: ").concat(t.target.textarea1.value)),e.close()},children:[Object(n.jsxs)(f.a.Group,{controlId:"author",children:[Object(n.jsx)(f.a.Label,{children:"Author:"}),Object(n.jsx)(f.a.Control,{defaultValue:"John Smith",readOnly:!0})]}),Object(n.jsxs)(f.a.Group,{controlId:"textarea1",children:[Object(n.jsx)(f.a.Label,{children:"Comment:"}),Object(n.jsx)("br",{}),Object(n.jsx)(f.a.Control,{as:"textarea",rows:10,cols:50})]}),Object(n.jsx)(g.a,{variant:"primary",type:"submit",children:"Submit"})]})},O=v,x=a(133),S=a.n(x),y=function(e){var t=e.onClickOutside,a=e.onKeyDown,s=e.modalRef,r=e.buttonRef,o=e.closeModal;e.onSubmit;return c.a.createPortal(Object(n.jsx)(S.a,{children:Object(n.jsx)("aside",{tag:"aside",role:"dialog",tabIndex:"-1","aria-modal":"true",className:"modal-cover",onClick:t,onKeyDown:a,children:Object(n.jsxs)("div",{className:"modal-area",ref:s,children:[Object(n.jsxs)("button",{ref:r,"aria-label":"Close Modal","aria-labelledby":"close-modal",className:"_modal-close",onClick:o,children:[Object(n.jsx)("span",{id:"close-modal",className:"_hide-visual",children:"Close"}),Object(n.jsx)("svg",{className:"_modal-close-icon",viewBox:"0 0 40 40",children:Object(n.jsx)("path",{d:"M 10,10 L 30,30 M 30,10 L 10,30"})})]}),Object(n.jsx)("div",{className:"modal-body",children:Object(n.jsx)(v,{close:o})})]})})}),document.body)},N=function(e){var t=e.triggerText,a=e.buttonRef,s=e.showModal;return Object(n.jsx)("button",{className:"btn btn-lg btn-danger center modal-button",ref:a,onClick:s,children:t})},w=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={isShown:!1},e.showModal=function(){e.setState({isShown:!0},(function(){e.closeButton.focus()})),e.toggleScrollLock()},e.closeModal=function(){e.setState({isShown:!1}),e.TriggerButton.focus(),e.toggleScrollLock()},e.onKeyDown=function(t){27===t.keyCode&&e.closeModal()},e.onClickOutside=function(t){e.modal&&e.modal.contains(t.target)||e.closeModal()},e.toggleScrollLock=function(){document.querySelector("html").classList.toggle("scroll-lock")},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(N,{showModal:this.showModal,buttonRef:function(t){return e.TriggerButton=t},triggerText:this.props.triggerText}),this.state.isShown?Object(n.jsx)(y,{onSubmit:this.props.onSubmit,modalRef:function(t){return e.modal=t},buttonRef:function(t){return e.closeButton=t},closeModal:this.closeModal,onKeyDown:this.onKeyDown,onClickOutside:this.onClickOutside}):null]})}}]),a}(s.Component),k=a(120),C=a(134),I=a(135),M="https://api.covidtracking.com",_=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(M).concat("/v1/us/current.json"));case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="/v1/states/".concat(t,"/info.json"),e.prev=1,e.next=4,fetch("".concat(M).concat(a));case 4:return n=e.sent,e.next=7,n.json();case 7:return s=e.sent,e.abrupt("return",s);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(M).concat("/v1/states/current.json"));case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();var A=function(e){var t=e.sName,a=I[t],o=C[t],c=Object(s.useState)([]),i=Object(h.a)(c,2),d=i[0],p=i[1];r.a.useEffect((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(a);case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]);var j=Object(n.jsx)("a",{href:d.covid19Site,target:"_blank",rel:"noreferrer",children:"Health Department Website"});return Object(n.jsxs)("div",{id:"StatePage-container",children:[Object(n.jsx)("div",{className:"a-api_feed_title",children:"PUBLIC COMMENT"}),Object(n.jsx)("div",{className:"a-api_feed_container"}),Object(n.jsx)("div",{className:"a-api_add_feed_button",children:Object(n.jsx)(w,{triggerText:"Open form"})}),Object(n.jsxs)("div",{className:"a-state_name_container",children:[t," Health Department Tweets",Object(n.jsx)("div",{children:j})]}),Object(n.jsx)("div",{className:"a-state_info_container",children:Object(n.jsx)(k.a,{dataSource:{sourceType:"profile",screenName:o},options:{height:"800"}})})]})},T=(a(154),a(85)),P=a(101),R=a(137),L=a(140);a(156);var V=function(e){var t=Object(d.f)();return Object(s.useEffect)((function(){T.d(L.a);var a=T.b("chartdiv",P.b);a.geodata=R.a,a.projection=new P.d.AlbersUsa;var n=a.series.push(new P.c);n.heatRules.push({property:"fill",target:n.mapPolygons.template,min:a.colors.getIndex(8).brighten(3),max:a.colors.getIndex(8).brighten(-.3)}),n.useGeodata=!0,n.data=e.currentstateInfNums;var s=a.createChild(P.a);s.id="heatLegend",s.series=n,s.align="right",s.valign="bottom",s.width=T.c(35),s.marginRight=T.c(4),s.background.fill=T.a("#000"),s.background.fillOpacity=.05,s.padding(5,5,5,5),s.valueAxis.axisRanges.create().label.horizontalCenter="left",s.valueAxis.axisRanges.create().label.horizontalCenter="right",s.valueAxis.renderer.labels.template.adapter.add("text",(function(e){return""})),n.events.on("datavalidated",(function(e){var t=e.target.map.getKey("heatLegend"),a=t.series.dataItem.values.value.low,n=t.valueAxis.axisRanges.getIndex(0);n.value=a,n.label.text=""+t.numberFormatter.format(a);var s=t.series.dataItem.values.value.high,r=t.valueAxis.axisRanges.getIndex(1);r.value=s,r.label.text=""+t.numberFormatter.format(s)}));var r=n.mapPolygons.template;r.tooltipText="{name}\n\nCases: {value} +{positiveIncrease}\nDeaths: {deaths} +{deathIncrease}\nHospitalized: {hospitalizedCurrently} +{hospitalizedIncrease}\nTests: {totalTests} +{totalTestResultsIncrease}",r.nonScalingStroke=!0,r.strokeWidth=.5,r.states.create("hover").properties.fill=T.a("#3c5bdc");r.events.on("hit",(function(a){var n;n=a.target.dataItem.dataContext.name,e.setSName(n),t.push("/state-page")}))}),[e,t]),Object(n.jsx)("div",{id:"chartdiv"})};var W=function(e){var t=e.setSName,a=e.chart,s=e.currentUSValues.map((function(e,t){return Object(n.jsxs)("div",{children:["Positive Cases: ",e.positive," Deaths: ",e.death]},t)})),r=e.currentUSValues.map((function(e,t){return Object(n.jsxs)("div",{children:["Last Updated: ",e.lastModified]},t)})),o=e.currentStateValues.map((function(e){return{id:"US-"+e.state,value:e.positive,deaths:e.death,hospitalizedCurrently:e.hospitalizedCurrently,hospitalizedCumulative:e.hospitalizedCumulative,totalTests:e.totalTestResults,positiveIncrease:e.positiveIncrease,deathIncrease:e.deathIncrease,hospitalizedIncrease:e.hospitalizedIncrease,totalTestResultsIncrease:e.totalTestResultsIncrease}}));return Object(n.jsxs)("div",{id:"home-container",children:[Object(n.jsx)("div",{className:"b-label-title",children:"title"}),Object(n.jsx)("div",{className:"b-updated-lable",children:r}),Object(n.jsx)("div",{className:"b-info-updater",children:s}),Object(n.jsx)("div",{className:"b-tweet-container",children:Object(n.jsx)(k.a,{dataSource:{sourceType:"profile",screenName:"CDCgov"},options:{height:"800"}})}),Object(n.jsx)("div",{className:"b-us-map",children:Object(n.jsx)(V,{map:a,setSName:t,currentstateInfNums:o})})]})},F=(a(159),a(95));var z=function(e){var t=Object(d.f)();return Object(n.jsxs)("div",{id:"nav-container",children:[Object(n.jsx)("div",{className:"sub-nav-title",children:"COVID APP"}),Object(n.jsxs)("div",{className:"sub-nav-home-button",children:[Object(n.jsx)(F.b,{to:"/",children:"HOME"}),Object(n.jsx)(g.a,{onClick:function(){t.push("/user-profile/")},children:"User Profile"})]})]})};var U=function(e){var t=Object(n.jsxs)("div",{className:"nav-login-signup",children:[Object(n.jsx)("div",{className:"sub-nav-login-button",onClick:function(){return e.display_form("login")},children:"Login"}),Object(n.jsx)("div",{className:"sub-nav-signup-button",onClick:function(){return e.display_form("signup")},children:"Signup"})]}),a=Object(n.jsx)("ul",{children:Object(n.jsx)("li",{onClick:e.handle_logout,children:"logout"})});return Object(n.jsx)("div",{children:e.logged_in?a:t})},K=a(121),J=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:""},e.handle_change=function(t){var a=t.target.name,n=t.target.value;e.setState((function(e){var t=Object(K.a)({},e);return t[a]=n,t}))},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("form",{onSubmit:function(t){return e.props.handle_login(t,e.state)},children:[Object(n.jsx)("h4",{children:"Log In"}),Object(n.jsx)("label",{htmlFor:"username",children:"Username"}),Object(n.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.handle_change}),Object(n.jsx)("label",{htmlFor:"password",children:"Password"}),Object(n.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.handle_change}),Object(n.jsx)("input",{type:"submit"})]})}}]),a}(r.a.Component),E=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:""},e.handle_change=function(t){var a=t.target.name,n=t.target.value;e.setState((function(e){var t=Object(K.a)({},e);return t[a]=n,t}))},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this;return console.log("sign up form is called"),Object(n.jsxs)("form",{onSubmit:function(t){return e.props.handle_signup(t,e.state)},children:[Object(n.jsx)("h4",{children:"Sign Up"}),Object(n.jsx)("label",{htmlFor:"username",children:"Username"}),Object(n.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.handle_change}),Object(n.jsx)("label",{htmlFor:"password",children:"Password"}),Object(n.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.handle_change}),Object(n.jsx)("input",{type:"submit"})]})}}]),a}(r.a.Component),G="https://pt-alpha-final-project.herokuapp.com/",B=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handle_login=function(e,t){e.preventDefault(),fetch("".concat(G,"token-auth/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("token",e.token),n.setState({logged_in:!0,displayed_form:"",username:e.user.username}),localStorage.setItem("username",e.user.username)}))},n.handle_signup=function(e,t){e.preventDefault(),fetch("".concat(G,"covid/users/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("token",e.token),n.setState({logged_in:!0,displayed_form:"",username:e.username})}))},n.handle_logout=function(){localStorage.removeItem("token"),n.setState({logged_in:!1,username:""})},n.display_form=function(e){n.setState({displayed_form:e})},n.state={displayed_form:"",logged_in:!!localStorage.getItem("token"),username:""},n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.logged_in&&fetch("".concat(G,"/covid/current_user/"),{headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(t){e.setState({username:t.username})}))}},{key:"render",value:function(){var e;switch(this.state.displayed_form){case"login":e=Object(n.jsx)(J,{handle_login:this.handle_login});break;case"signup":e=Object(n.jsx)(E,{handle_signup:this.handle_signup});break;default:e=null}return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{logged_in:this.state.logged_in,display_form:this.display_form,handle_logout:this.handle_logout}),e,Object(n.jsx)("h3",{children:this.state.logged_in?"Hello, ".concat(this.state.username):""})]})}}]),a}(r.a.Component),Y="https://pt-alpha-final-project.herokuapp.com/",q=function(e){var t=Object(s.useState)(null),a=Object(h.a)(t,2),r=a[0],o=a[1];console.log("user profile compnent is called");var c=localStorage.getItem("token"),i=localStorage.getItem("username");return Object(s.useEffect)((function(){(function(e,t){return fetch("".concat(Y,'posts?filter={"where":{"author":"').concat(t,'"}}'),{method:"get",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"JWT "+e}}).then((function(e){return e.json()}))})(c,i).then((function(e){return o(e)}))}),[c,i]),Object(n.jsxs)("div",{children:[Object(n.jsxs)("h1",{children:["All Posts from author: ",i]}),Object(n.jsx)("ul",{children:r&&r.map((function(e){return Object(n.jsxs)("li",{children:[Object(n.jsxs)("h1",{children:["Post Title: ",e.title]}),Object(n.jsxs)("h2",{children:["Post Description ",e.description]})]},e.id)}))})]})};var X=function(e){var t=Object(s.useState)(""),a=Object(h.a)(t,2),o=a[0],c=a[1],i=Object(s.useState)([]),p=Object(h.a)(i,2),j=p[0],b=p[1],m=Object(s.useState)([]),f=Object(h.a)(m,2),g=f[0],v=f[1];return r.a.useEffect((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.useEffect((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:t=e.sent,v(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.jsxs)("div",{id:"app-container",children:[Object(n.jsxs)("div",{className:"nav-bar",children:[Object(n.jsx)(B,{}),Object(n.jsx)(z,{})]}),Object(n.jsx)("div",{className:"body-container",children:Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{exact:!0,path:"/",render:function(e){return Object(n.jsx)(W,{setSName:c,currentUSValues:j,currentStateValues:g})}}),Object(n.jsx)(d.a,{exact:!0,path:"/state-page",render:function(e){return Object(n.jsx)(A,{sName:o})}}),Object(n.jsx)(d.a,{exact:!0,path:"/add-comments",component:O}),Object(n.jsx)(d.a,{exact:!0,path:"/user-profile",component:q})]})})]})},Z=function(e){e&&e instanceof Function&&a.e(7).then(a.bind(null,368)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),s(e),r(e),o(e)}))};c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(F.a,{basename:"/",children:Object(n.jsx)(X,{})})}),document.getElementById("root")),Z()}},[[160,1,4]]]);
//# sourceMappingURL=main.91b3aa46.chunk.js.map