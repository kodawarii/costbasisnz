(this.webpackJsonpcostbasisnz=this.webpackJsonpcostbasisnz||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('{"username":"thesiyu","brokers":[{"name":"Interactive Brokers","id":"b1"},{"name":"Hatch","id":"b2"},{"name":"Sharsies","id":"b3"},{"name":"Stake","id":"b4"},{"name":"TD Ameritrade","id":"b5"},{"name":"E*TRADE","id":"b6"},{"name":"Fidelity","id":"b7"}],"b1":{"master":[],"holdings":[],"log":[{"type":"start","pkey":0,"period":"2020 FEB","notes1":"start only has 1 note"},{"type":"reg","pkey":1,"date":"20-02-02","action":"Topup","ticker":"","notes1":"note1=This FX block is only for IBKR - Hatch and Sharsies format will be different","notes2":"note2=sssss","amountAUD":12000},{"type":"reg","pkey":24,"date":"20-02-02","action":"FX USD","ticker":"","notes1":"This FX block is only for IBKR, AUD>USD*","notes2":"note2=sssss","amountAUD":12000,"rate":0.7411,"amountUSD":8890},{"type":"reg","pkey":24,"date":"20-02-02","action":"FX AUD","ticker":"","notes1":"This FX block is only for IBKR, *USD>>AUD","notes2":"note2=sssss","amountUSD":13800,"rate":0.7,"amountAUD":8890},{"type":"reg","pkey":2,"date":"20-02-03","action":"Topup","ticker":"","notes1":"Seed noting example","notes2":"note2=sssss","amountAUD":8000},{"type":"reg","pkey":3,"date":"20-02-04","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":3,"date":"20-02-04","action":"SELL","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":3,"date":"20-02-04","action":"Withdraw","ticker":"","notes1":"","notes2":"","amountAUD":2000},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":"note2=sssss"},{"type":"reg","pkey":5,"date":"20-02-05","action":"SELL","ticker":"NVDA","notes1":"","notes2":"note2=sssss"},{"type":"reg","pkey":3,"date":"20-02-04","action":"Dividend","ticker":"MSFT","notes1":"","notes2":"note2=sssss"},{"type":"reg","pkey":3,"date":"20-02-04","action":"Topup liq usd","ticker":"NVDA","notes1":"IBKR Liquidate topup = ticker in log-tab, just amount in usd in topup/withdraw-tab","notes2":"note2=sssss","amountUSD":32000},{"type":"reg","pkey":3,"date":"20-02-04","action":"Monthly Fee","ticker":"","notes1":"","notes2":"note2=sssss"},{"type":"end1","pkey":6,"bought":"2000","notes1":"end1 only has 1 note"},{"type":"end2","pkey":7,"sold":"200","notes1":"end1 only has 1 note"}]},"b2":{"master":[],"holdings":[],"log":[]}}')},,,,function(e,t,n){},,,,,,,function(e,t,n){},,,,function(e,t,n){e.exports=n(50)},,,,,function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),c=n.n(o),s=(n(37),n(1)),i=n(2),l=n(12),u=n(4),d=n(3),m=(n(38),n(13)),p=n(22),h=n(6),k=n(15),b=n(30),E=n(17),f=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||k.d,y=Object(k.e)(Object(k.c)({portfolioNameToShow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PORTFOLIO_NAME_TO_SHOW":case"UPDATE_PORTFOLIO_NAME_TO_SHOW":return{name:t.payload};default:return e}},brokers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{brokers:E.brokers},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BROKERS":case"ADD_TO_BROKERS":return{brokers:t.payload};default:return e}},logs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_LOGS":return{logs:t.payload};default:return e}}}),{},f(Object(k.a)(b.a))),v=(n(43),n(31)),g=function(e,t){return function(n){n({type:"ADD_TO_BROKERS",payload:[].concat(Object(v.a)(e),[t])})}},N=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={value:""},a.handleChange=a.handleChange.bind(Object(l.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(l.a)(a)),a}return Object(i.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t={name:this.state.value,id:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})).substring(0,8)};this.props.addToBrokers(this.props.brokers,t),e.preventDefault()}},{key:"componentDidMount",value:function(){this.props.updateScreenName("addBroker")}},{key:"componentDidUpdate",value:function(){this.props.updateScreenName("addBroker")}},{key:"render",value:function(){return r.a.createElement("div",{className:"AddBroker Screen"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Enter Broker ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"name",value:this.state.value,onChange:this.handleChange,className:"AddBrokerTextBox"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{className:"msg"}," Broker Portfolio Deletion in Settings (Todo: 1. Delete All Data, or 2. Hide from Home) "),r.a.createElement("input",{type:"submit",value:"Add",className:"AddBroker-submit"})))}}]),n}(a.Component),S=Object(m.b)((function(e){return{brokers:e.brokers.brokers}}),{addToBrokers:g})(N),O=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Edit Screen"},"Edit works")}}]),n}(a.Component),T=n(10),j=(n(45),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPortfolioNameToShow(),this.props.fetchLogs(),this.props.updateScreenName("home")}},{key:"componentDidUpdate",value:function(){this.props.updateScreenName("home")}},{key:"renderBrokers",value:function(){var e=this;return void 0===this.props.brokers?"Loading Brokers":this.props.brokers.map((function(t,n){return r.a.createElement("ul",{key:n,className:"Brokers"},r.a.createElement(T.HashLink,{to:"/Portfolio"},r.a.createElement("li",{onClick:function(){return e.props.updatePortfolioNameToShow(t.name)},className:"Broker"},t.name)))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Home Screen"},r.a.createElement("div",{className:"Brokers"},this.renderBrokers()),r.a.createElement("div",{className:"AddBroker-outer"},r.a.createElement(T.HashLink,{to:"/AddBroker"},r.a.createElement("button",{className:"Add-broker-btn"},"+"))))}}]),n}(a.Component)),D=Object(m.b)((function(e){return{brokers:e.brokers.brokers}}),{fetchPortfolioNameToShow:function(){return function(e){e({type:"FETCH_PORTFOLIO_NAME_TO_SHOW",payload:"redux-default"})}},updatePortfolioNameToShow:function(e){return function(t){t({type:"UPDATE_PORTFOLIO_NAME_TO_SHOW",payload:e})}},fetchBrokers:function(){return function(e){e({type:"FETCH_BROKERS",payload:E.brokers})}},addToBrokers:g,fetchLogs:function(){return function(e){e({type:"FETCH_LOGS",payload:E.b1.log})}}})(j),A=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.updateScreenName("login")}},{key:"componentDidUpdate",value:function(){this.props.updateScreenName("login")}},{key:"render",value:function(){return r.a.createElement("div",{className:"Login Screen"},"Login works")}}]),n}(a.Component),B=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.updateScreenName("logout")}},{key:"componentDidUpdate",value:function(){this.props.updateScreenName("logout")}},{key:"render",value:function(){return r.a.createElement("div",{className:"Logout Screen"},"Logout works")}}]),n}(a.Component),x=(n(46),n(47),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={currentTab:"",tabs:["Master","Holdings","Log","Topup / Withdraw","Buy / Sell","Fees","Dividends"]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.state.currentTab!==this.props.currentTab&&this.setState({currentTab:this.props.currentTab})}},{key:"updateCurrentTab",value:function(e){this.setState({currentTab:e}),this.props.updateCurrentTab(e)}},{key:"getTabs",value:function(){var e=this;return this.state.tabs.map((function(t,n){return r.a.createElement("li",{onClick:function(){return e.updateCurrentTab(t)},className:"Tab",key:n},r.a.createElement("span",{className:"Tab-inner "+(t===e.state.currentTab?" Tab-inner-highlighted":"")},t))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Ribbon"},r.a.createElement("ul",{className:"Tabs"},this.getTabs()))}}]),n}(a.Component)),L=(n(21),n(48),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.isVisible?" Notes ":" Notes-hide ";return r.a.createElement("div",{className:e},r.a.createElement("div",{className:" Notes-exit ",onClick:this.props.closeNotes},"x"),r.a.createElement("div",{className:"Notes-content"},this.props.notes))}}]),n}(a.Component)),C=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={showNotes:!1,notes:""},a}return Object(i.a)(n,[{key:"closeNotes",value:function(){this.setState({showNotes:!1})}},{key:"openNotes",value:function(e){this.setState({showNotes:!0,notes:e})}},{key:"getData",value:function(){var e=this;return void 0===this.props.data?r.a.createElement("tr",null,r.a.createElement("td",null,"must fetch first")):this.props.data.map((function(t,n){if("start"===t.type)return r.a.createElement("tr",{key:n},r.a.createElement("td",null,t.pkey),r.a.createElement("td",null,r.a.createElement("b",null,t.period)),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",{className:"OpenNotes",onClick:function(){return e.openNotes(t.notes1)}}," x "));if("reg"===t.type){var a=" ";return t.action.includes("Topup")?a=" Topup ":t.action.includes("BUY")?a=" Buy ":t.action.includes("SELL")?a=" Sell ":t.action.includes("Withdraw")?a=" Withdraw ":t.action.includes("Dividend")?a=" Dividend ":t.action.includes("Fee")?a=" Fee ":t.action.includes("FX")&&(a=" FX "),r.a.createElement("tr",{key:n},r.a.createElement("td",null,t.pkey),r.a.createElement("td",null,t.date),r.a.createElement("td",{className:a},t.action),r.a.createElement("td",null,t.ticker),r.a.createElement("td",{className:"OpenNotes",onClick:function(){return e.openNotes(t.notes1)}}," x "))}return"end1"===t.type?r.a.createElement("tr",{key:n},r.a.createElement("td",null,t.pkey),r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("b",null,"BOUGHT")),r.a.createElement("td",null,t.bought),r.a.createElement("td",{className:"OpenNotes",onClick:function(){return e.openNotes(t.notes1)}}," x ")):"end2"===t.type?r.a.createElement("tr",{key:n},r.a.createElement("td",null,t.pkey),r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("b",null,"SOLD")),r.a.createElement("td",null,t.sold),r.a.createElement("td",{className:"OpenNotes",onClick:function(){return e.openNotes(t.notes1)}}," x ")):void 0}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Ref"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Action"),r.a.createElement("th",null,"Symbol"),r.a.createElement("th",null,"Notes"))),r.a.createElement("tbody",null,this.getData())),r.a.createElement("div",{className:"AddLog"},"ADD +"),r.a.createElement(L,{notes:this.state.notes,isVisible:this.state.showNotes,closeNotes:this.closeNotes.bind(this)}))}}]),n}(a.Component),w=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={showNotes:!1,notes:""},a}return Object(i.a)(n,[{key:"closeNotes",value:function(){this.setState({showNotes:!1})}},{key:"openNotes",value:function(e){this.setState({showNotes:!0,notes:e})}},{key:"getData",value:function(){var e=this;return void 0===this.props.data?r.a.createElement("tr",null,r.a.createElement("td",null,"Must"),r.a.createElement("td",null,"Fetch"),r.a.createElement("td",null,"First"),r.a.createElement("td",null,"From"),r.a.createElement("td",null,"The"),r.a.createElement("td",null,"User"),r.a.createElement("td",null,"ok")):this.props.data.map((function(t,n){if("end1"===t.type||"end2"===t.type);else{if("start"===t.type)return r.a.createElement("tr",{key:n},r.a.createElement("td",null,t.pkey),r.a.createElement("td",null,r.a.createElement("b",null,t.period)),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",{className:"OpenNotes",onClick:function(){return e.openNotes(t.notes1)}}," x "));if(t.action.includes("Topup")||t.action.includes("Withdraw")||t.action.includes("FX")){var a=" ";return t.action.includes("Topup")?a=" Topup ":t.action.includes("Withdraw")?a=" Withdraw ":t.action.includes("FX")&&(a=" FX "),r.a.createElement("tr",{key:n},r.a.createElement("td",null,t.pkey),r.a.createElement("td",null,t.date),r.a.createElement("td",{className:a},t.action),r.a.createElement("td",null,t.amountAUD),r.a.createElement("td",null,t.rate),r.a.createElement("td",null,t.amountUSD),r.a.createElement("td",{className:"OpenNotes",onClick:function(){return e.openNotes(t.notes2)}}," x "))}}}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,"Total AUD= "),r.a.createElement("p",null,"Total USD= ")),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Ref"),r.a.createElement("th",{className:"Date-topup-withdraw"},"Date"),r.a.createElement("th",null,"Action"),r.a.createElement("th",null,"AUD"),r.a.createElement("th",null,"Rate"),r.a.createElement("th",null,"USD"),r.a.createElement("th",null,"Notes"))),r.a.createElement("tbody",null,this.getData())),r.a.createElement("div",{className:"AddLog"},"ADD +"),r.a.createElement(L,{notes:this.state.notes,isVisible:this.state.showNotes,closeNotes:this.closeNotes.bind(this)}))}}]),n}(a.Component),U=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={a:1},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=function(){return"n/a"};switch(this.props.currentTab){case"Log":t=function(){return r.a.createElement(C,{data:e.props.data})};break;case"Topup / Withdraw":t=function(){return r.a.createElement(w,{data:e.props.data})};break;default:t=function(){return"Invalid Choice"}}return r.a.createElement("div",{className:"DataTable"},t())}}]),n}(a.Component),M=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={currentTab:"Topup / Withdraw"},a}return Object(i.a)(n,[{key:"updateCurrentTab",value:function(e){this.setState({currentTab:e})}},{key:"componentDidMount",value:function(){this.props.updateScreenName("portfolio")}},{key:"componentDidUpdate",value:function(){this.props.updateScreenName("portfolio")}},{key:"render",value:function(){return r.a.createElement("div",{className:"Portfolio Screen"},r.a.createElement("div",{className:"BrokerName"}," ",this.props.portfolio," "),r.a.createElement(x,{currentTab:this.state.currentTab,updateCurrentTab:this.updateCurrentTab.bind(this)}),r.a.createElement(U,{currentTab:this.state.currentTab,data:this.props.logs}))}}]),n}(a.Component),H=Object(m.b)((function(e){return{portfolio:e.portfolioNameToShow.name,logs:e.logs.logs}}),{})(M),_=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.updateScreenName("settings")}},{key:"componentDidUpdate",value:function(){this.props.updateScreenName("settings")}},{key:"render",value:function(){return r.a.createElement("div",{className:"Settings Screen"},"Settings works")}}]),n}(a.Component),F=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.updateScreenName("about")}},{key:"componentDidUpdate",value:function(){this.props.updateScreenName("about")}},{key:"render",value:function(){return r.a.createElement("div",{className:"About Screen"},"About works")}}]),n}(a.Component),R=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.updateScreenName("register")}},{key:"componentDidUpdate",value:function(){this.props.updateScreenName("register")}},{key:"render",value:function(){return r.a.createElement("div",{className:"Register Screen"},"Register works")}}]),n}(a.Component),P=(n(28),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"menu"},r.a.createElement("div",{onClick:this.props.toggleMenu,className:"menu-exit-btn"}," x "),r.a.createElement(T.HashLink,{to:"/"},r.a.createElement("div",{onClick:this.props.toggleMenu,className:"settings-link"}," Home ")),r.a.createElement(T.HashLink,{to:"/Settings"},r.a.createElement("div",{onClick:this.props.toggleMenu,className:"settings-link"}," Settings ")),r.a.createElement(T.HashLink,{to:"/Login"},r.a.createElement("div",{onClick:this.props.toggleMenu,className:"settings-link"}," Login ")),r.a.createElement(T.HashLink,{to:"/Logout"},r.a.createElement("div",{onClick:this.props.toggleMenu,className:"settings-link"}," Logout ")),r.a.createElement(T.HashLink,{to:"/Register"},r.a.createElement("div",{onClick:this.props.toggleMenu,className:"settings-link"}," Register ")),r.a.createElement(T.HashLink,{to:"/About"},r.a.createElement("div",{onClick:this.props.toggleMenu,className:"settings-link"}," About ")))}}]),n}(a.Component)),W=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){var e,t=" back-btn ",n=this.props.isMenuHidden?" menu-outer-hidden ":" menu-outer ";return"home"===this.props.screen?(e="Select Portfolio",t=" back-btn-hide "):"portfolio"===this.props.screen?e="Portfolio":"addBroker"===this.props.screen?e="Add Broker":"login"===this.props.screen?e="Login":"logout"===this.props.screen?e="Logout":"settings"===this.props.screen?e="Settings":"register"===this.props.screen?e="Register":"about"===this.props.screen&&(e="About"),r.a.createElement("div",{className:"Nav"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"col Padding"},r.a.createElement("div",{className:t},r.a.createElement(T.HashLink,{to:"/"},r.a.createElement("div",{className:"back-btn-btn"}," \u21b6 ")))),r.a.createElement("div",{className:"col Title"},e),r.a.createElement("div",{className:"col MenuBtn"},r.a.createElement("div",{className:"hamburger",onClick:this.props.toggleMenu}," \u2630 ")),r.a.createElement("div",{className:n},r.a.createElement(P,{toggleMenu:this.props.toggleMenu}))))}}]),n}(a.Component);n(49);function Y(){return r.a.createElement("div",{className:"Footer"},"Created by Paul / This is not a Sponsored Product / Recognized_Unrecognized \xa9 2020")}var I=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).toggleMenu=function(){a.setState({isMenuHidden:!a.state.isMenuHidden})},a.setBrokers=function(e){a.setState({brokers:e})},a.state={isMenuHidden:!0,screen:"home",brokers:[]},a.updateScreenName=a.updateScreenName.bind(Object(l.a)(a)),a.setBrokers=a.setBrokers.bind(Object(l.a)(a)),a.toggleMenu=a.toggleMenu.bind(Object(l.a)(a)),a}return Object(i.a)(n,[{key:"updateScreenName",value:function(e){this.state.screen!==e&&this.setState({screen:e})}},{key:"render",value:function(){var e=this;return r.a.createElement(m.a,{store:y},r.a.createElement(p.HashRouter,null,r.a.createElement("div",{className:"App"},r.a.createElement(W,{screen:this.state.screen,isMenuHidden:this.state.isMenuHidden,toggleMenu:this.toggleMenu}),r.a.createElement(h.g,null,r.a.createElement(h.d,{exact:!0,path:"/",component:function(){return r.a.createElement(D,{updateScreenName:e.updateScreenName,brokers:e.state.brokers,setBrokers:e.setBrokers})}}),r.a.createElement(h.d,{exact:!0,path:"/Portfolio",component:function(){return r.a.createElement(H,{updateScreenName:e.updateScreenName})}}),r.a.createElement(h.d,{exact:!0,path:"/AddBroker",component:function(){return r.a.createElement(S,{updateScreenName:e.updateScreenName})}}),r.a.createElement(h.d,{exact:!0,path:"/Login",component:function(){return r.a.createElement(A,{updateScreenName:e.updateScreenName})}}),r.a.createElement(h.d,{exact:!0,path:"/Logout",component:function(){return r.a.createElement(B,{updateScreenName:e.updateScreenName})}}),r.a.createElement(h.d,{exact:!0,path:"/Edit",component:function(){return r.a.createElement(O,{updateScreenName:e.updateScreenName})}}),r.a.createElement(h.d,{exact:!0,path:"/Settings",component:function(){return r.a.createElement(_,{updateScreenName:e.updateScreenName})}}),r.a.createElement(h.d,{exact:!0,path:"/About",component:function(){return r.a.createElement(F,{updateScreenName:e.updateScreenName})}}),r.a.createElement(h.d,{exact:!0,path:"/Register",component:function(){return r.a.createElement(R,{updateScreenName:e.updateScreenName})}}),r.a.createElement(h.c,{from:"*",to:"/"})),r.a.createElement(Y,null))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[32,1,2]]]);
//# sourceMappingURL=main.28000a99.chunk.js.map