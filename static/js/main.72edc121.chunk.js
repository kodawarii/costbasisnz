(this.webpackJsonpcostbasisnz=this.webpackJsonpcostbasisnz||[]).push([[0],[,,,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('{"username":"thesiyu","brokers":[{"name":"Interactive Brokers","id":"b1"},{"name":"Hatch","id":"b2"},{"name":"Sharsies","id":"b3"},{"name":"Stake","id":"b4"},{"name":"TD Ameritrade","id":"b5"},{"name":"E*TRADE","id":"b6"},{"name":"Fidelity","id":"b7"}],"b1":{"master":[],"holdings":[],"log":[{"type":"start","pkey":0,"period":"2022 OCT","notes1":"start only has 1 note"},{"type":"reg","pkey":1,"date":"22-10-10","action":"Topup","ticker":"","notes1":"note1=This FX block is only for IBKR - Hatch and Sharsies format will be different","notes2":"note2=sssss","amountAUD":12000},{"type":"reg","pkey":24,"date":"20-02-02","action":"FX USD","ticker":"","notes1":"This FX block is only for IBKR, AUD>USD*","notes2":"note2=sssss","amountAUD":12000,"rate":0.7411,"amountUSD":8890},{"type":"reg","pkey":24,"date":"20-02-02","action":"FX AUD","ticker":"","notes1":"This FX block is only for IBKR, *USD>>AUD","notes2":"note2=sssss","amountUSD":13800,"rate":0.7,"amountAUD":8890},{"type":"reg","pkey":2,"date":"20-02-03","action":"Topup","ticker":"","notes1":"Seed noting example","notes2":"note2=sssss","amountAUD":8000},{"type":"reg","pkey":3,"date":"20-02-04","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":3,"date":"20-02-04","action":"SELL","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":3,"date":"20-02-04","action":"Withdraw","ticker":"","notes1":"","notes2":"","amountAUD":2000},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes1":"","notes2":"note2=sssss"},{"type":"reg","pkey":5,"date":"20-02-05","action":"SELL","ticker":"NVDA","notes1":"","notes2":"note2=sssss"},{"type":"reg","pkey":3,"date":"20-02-04","action":"Dividend","ticker":"MSFT","notes1":"","notes2":"note2=sssss"},{"type":"reg","pkey":3,"date":"20-02-04","action":"Topup liq usd","ticker":"NVDA","notes1":"IBKR Liquidate topup = ticker in log-tab, just amount in usd in topup/withdraw-tab","notes2":"note2=sssss","amountUSD":32000},{"type":"reg","pkey":3,"date":"20-02-04","action":"Monthly Fee","ticker":"","notes1":"","notes2":"note2=sssss"},{"type":"end1","pkey":6,"bought":"2000","notes1":"end1 only has 1 note"},{"type":"end2","pkey":7,"sold":"200","notes1":"end1 only has 1 note"}]},"b2":{"master":[],"holdings":[],"log":[{"type":"start","pkey":0,"period":"2022 OCT","notes1":"start only has 1 note"},{"type":"start","pkey":0,"period":"HATCH check","notes1":"start only has 1 note"},{"type":"reg","pkey":1,"date":"22-10-10","action":"Topup","ticker":"","notes1":"note1=This FX block is only for IBKR - Hatch and Sharsies format will be different","notes2":"note2=sssss","amountAUD":12000}]},"b3":{"master":[],"holdings":[],"log":[{"type":"start","pkey":0,"period":"2022 OCT","notes1":"start only has 1 note"},{"type":"start","pkey":0,"period":"SHARSIES check","notes1":"start only has 1 note"},{"type":"reg","pkey":1,"date":"22-10-10","action":"Topup","ticker":"","notes1":"note1=This FX block is only for IBKR - Hatch and Sharsies format will be different","notes2":"note2=sssss","amountAUD":555}]}}')},,,,,function(e,t,n){},,,,,,,function(e,t,n){},,,,function(e,t,n){e.exports=n(51)},,,,,function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),c=n.n(o),s=(n(37),n(1)),i=n(2),l=n(13),u=n(4),p=n(3),d=(n(38),n(12)),m=n(22),h=n(7),k=n(15),E=n(30),b=n(16),f=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||k.d,y=Object(k.e)(Object(k.c)({portfolioNameToShow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PORTFOLIO_NAME_TO_SHOW":case"UPDATE_PORTFOLIO_NAME_TO_SHOW":return{name:t.payload};default:return e}},brokers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{brokers:b.brokers},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BROKERS":case"ADD_TO_BROKERS":return{brokers:t.payload};default:return e}},logs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_LOGS":return{logs:t.payload};default:return e}}}),{},f(Object(k.a)(E.a))),v=(n(43),n(31)),g=function(e,t){return function(n){n({type:"ADD_TO_BROKERS",payload:[].concat(Object(v.a)(e),[t])})}},N=function(e){return function(t){switch(e){case"Interactive Brokers":t({type:"FETCH_LOGS",payload:b.b1.log});break;case"Hatch":t({type:"FETCH_LOGS",payload:b.b2.log});break;case"Sharsies":t({type:"FETCH_LOGS",payload:b.b3.log});break;default:t({type:"FETCH_LOGS",payload:[{type:"start",period:"Error - User does not have that portfolio / any entries within that portfolio"}]}),console.log(">> ID DOES NOT EXIST")}}},S=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={value:""},a.handleChange=a.handleChange.bind(Object(l.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(l.a)(a)),a}return Object(i.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t={name:this.state.value,id:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})).substring(0,8)};this.props.addToBrokers(this.props.brokers,t),e.preventDefault()}},{key:"componentDidMount",value:function(){this.props.updateScreenName("addBroker")}},{key:"componentDidUpdate",value:function(){this.props.updateScreenName("addBroker")}},{key:"render",value:function(){return r.a.createElement("div",{className:"AddBroker Screen"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Enter Broker ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"name",value:this.state.value,onChange:this.handleChange,className:"AddBrokerTextBox"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{className:"msg"}," Broker Portfolio Deletion in Settings (Todo: 1. Delete All Data, or 2. Hide from Home) "),r.a.createElement("input",{type:"submit",value:"Add",className:"AddBroker-submit"})))}}]),n}(a.Component),O=Object(d.b)((function(e){return{brokers:e.brokers.brokers}}),{addToBrokers:g})(S),T=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.updateScreenName("AddTopup")}},{key:"componentDidUpdate",value:function(){this.props.updateScreenName("AddTopup")}},{key:"render",value:function(){return r.a.createElement("div",{className:"AddTopup Screen"},"Adding for = ",this.props.portfolio)}}]),n}(a.Component),j=Object(d.b)((function(e){return{portfolio:e.portfolioNameToShow.name}}),{})(T),A=(a.Component,a.Component,a.Component,a.Component,a.Component,a.Component,n(44),n(6)),D=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.updateScreenName("selectaddtype")}},{key:"componentDidUpdate",value:function(){this.props.updateScreenName("selectaddtype")}},{key:"render",value:function(){var e="SelectAddType-li";return r.a.createElement("div",{className:"SelectAddType Screen"},r.a.createElement("h4",null," Select Type of Log "),r.a.createElement("ul",{className:"SelectAddType-ul"},r.a.createElement(A.HashLink,{to:"/AddTopup"},r.a.createElement("li",{className:e+" AddTopup-li"}," Topup ")),r.a.createElement(A.HashLink,{to:"/AddWithdraw"},r.a.createElement("li",{className:e+" AddWithdraw-li"}," Withdraw ")),r.a.createElement(A.HashLink,{to:"/AddFX"},r.a.createElement("li",{className:e+" AddFX-li"}," FX ")),r.a.createElement(A.HashLink,{to:"/AddBuy"},r.a.createElement("li",{className:e+" AddBuy-li"}," Buy ")),r.a.createElement(A.HashLink,{to:"/AddSell"},r.a.createElement("li",{className:e+" AddSell-li"}," Sell ")),r.a.createElement(A.HashLink,{to:"/AddDividend"},r.a.createElement("li",{className:e+" AddDividend-li"}," Dividend ")),r.a.createElement(A.HashLink,{to:"/AddFee"},r.a.createElement("li",{className:e+" AddFee-li"}," Fee "))))}}]),n}(a.Component),L=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Edit Screen"},"Edit works")}}]),n}(a.Component),B=(n(46),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPortfolioNameToShow(),this.props.updateScreenName("home")}},{key:"componentDidUpdate",value:function(){this.props.updateScreenName("home")}},{key:"renderBrokers",value:function(){var e=this;return void 0===this.props.brokers?"Loading Brokers":this.props.brokers.map((function(t,n){return r.a.createElement("ul",{key:n,className:"Brokers"},r.a.createElement(A.HashLink,{to:"/Portfolio"},r.a.createElement("li",{onClick:function(){return e.props.updatePortfolioNameToShow(t.name)},className:"Broker"},t.name)))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Home Screen"},r.a.createElement("div",{className:"Brokers"},this.renderBrokers()),r.a.createElement("div",{className:"AddBrokerBtn-wrapper"},r.a.createElement(A.HashLink,{to:"/AddBroker"},r.a.createElement("button",{className:"AddBtn"},"+"))))}}]),n}(a.Component)),C=Object(d.b)((function(e){return{brokers:e.brokers.brokers}}),{fetchPortfolioNameToShow:function(){return function(e){e({type:"FETCH_PORTFOLIO_NAME_TO_SHOW",payload:"redux-default"})}},updatePortfolioNameToShow:function(e){return function(t){t({type:"UPDATE_PORTFOLIO_NAME_TO_SHOW",payload:e})}},fetchBrokers:function(){return function(e){e({type:"FETCH_BROKERS",payload:b.brokers})}},addToBrokers:g,fetchLogs:N})(B),x=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.updateScreenName("login")}},{key:"componentDidUpdate",value:function(){this.props.updateScreenName("login")}},{key:"render",value:function(){return r.a.createElement("div",{className:"Login Screen"},"Login works")}}]),n}(a.Component),w=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.updateScreenName("logout")}},{key:"componentDidUpdate",value:function(){this.props.updateScreenName("logout")}},{key:"render",value:function(){return r.a.createElement("div",{className:"Logout Screen"},"Logout works")}}]),n}(a.Component),U=(n(47),n(48),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={currentTab:"",tabs:["Master","Holdings","Log","Topup / Withdraw","Buy / Sell","Fees","Dividends"]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.state.currentTab!==this.props.currentTab&&this.setState({currentTab:this.props.currentTab})}},{key:"updateCurrentTab",value:function(e){this.setState({currentTab:e}),this.props.updateCurrentTab(e)}},{key:"getTabs",value:function(){var e=this;return this.state.tabs.map((function(t,n){return r.a.createElement("li",{onClick:function(){return e.updateCurrentTab(t)},className:"Tab",key:n},r.a.createElement("span",{className:"Tab-inner "+(t===e.state.currentTab?" Tab-inner-highlighted":"")},t))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Ribbon"},r.a.createElement("ul",{className:"Tabs"},this.getTabs()))}}]),n}(a.Component)),H=(n(21),n(49),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.isVisible?" Notes ":" Notes-hide ";return r.a.createElement("div",{className:e},r.a.createElement("div",{className:" Notes-exit ",onClick:this.props.closeNotes},"x"),r.a.createElement("div",{className:"Notes-content"},this.props.notes))}}]),n}(a.Component)),M=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={showNotes:!1,notes:""},a}return Object(i.a)(n,[{key:"closeNotes",value:function(){this.setState({showNotes:!1})}},{key:"openNotes",value:function(e){this.setState({showNotes:!0,notes:e})}},{key:"getData",value:function(){var e=this;return void 0===this.props.data?r.a.createElement("tr",null,r.a.createElement("td",null,"must fetch first")):this.props.data.map((function(t,n){if("start"===t.type)return r.a.createElement("tr",{key:n},r.a.createElement("td",null,t.pkey),r.a.createElement("td",null,r.a.createElement("b",null,t.period)),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",{className:"OpenNotes",onClick:function(){return e.openNotes(t.notes1)}}," x "));if("reg"===t.type){var a=" ";return t.action.includes("Topup")?a=" Topup ":t.action.includes("BUY")?a=" Buy ":t.action.includes("SELL")?a=" Sell ":t.action.includes("Withdraw")?a=" Withdraw ":t.action.includes("Dividend")?a=" Dividend ":t.action.includes("Fee")?a=" Fee ":t.action.includes("FX")&&(a=" FX "),r.a.createElement("tr",{key:n},r.a.createElement("td",null,t.pkey),r.a.createElement("td",null,t.date),r.a.createElement("td",{className:a},t.action),r.a.createElement("td",null,t.ticker),r.a.createElement("td",{className:"OpenNotes",onClick:function(){return e.openNotes(t.notes1)}}," x "))}return"end1"===t.type?r.a.createElement("tr",{key:n},r.a.createElement("td",null,t.pkey),r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("b",null,"BOUGHT")),r.a.createElement("td",null,t.bought),r.a.createElement("td",{className:"OpenNotes",onClick:function(){return e.openNotes(t.notes1)}}," x ")):"end2"===t.type?r.a.createElement("tr",{key:n},r.a.createElement("td",null,t.pkey),r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("b",null,"SOLD")),r.a.createElement("td",null,t.sold),r.a.createElement("td",{className:"OpenNotes",onClick:function(){return e.openNotes(t.notes1)}}," x ")):(console.log("> ERROR: LOG TYPE DOES NOT EXIST: "+t.type),r.a.createElement("tr",null,r.a.createElement("td",null,"ERROR")))}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Ref"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Action"),r.a.createElement("th",null,"Symbol"),r.a.createElement("th",null,"Notes"))),r.a.createElement("tbody",null,this.getData())),r.a.createElement(A.HashLink,{to:"/SelectAddType"},r.a.createElement("div",{className:"AddLogBtn-wrapper"},r.a.createElement("button",{className:"AddBtn"},"+"))),r.a.createElement(H,{notes:this.state.notes,isVisible:this.state.showNotes,closeNotes:this.closeNotes.bind(this)}))}}]),n}(a.Component),F=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={showNotes:!1,notes:""},a}return Object(i.a)(n,[{key:"closeNotes",value:function(){this.setState({showNotes:!1})}},{key:"openNotes",value:function(e){this.setState({showNotes:!0,notes:e})}},{key:"getData",value:function(){var e=this;return void 0===this.props.data?r.a.createElement("tr",null,r.a.createElement("td",null,"Must"),r.a.createElement("td",null,"Fetch"),r.a.createElement("td",null,"First"),r.a.createElement("td",null,"From"),r.a.createElement("td",null,"The"),r.a.createElement("td",null,"User"),r.a.createElement("td",null,"ok")):this.props.data.map((function(t,n){if("end1"===t.type||"end2"===t.type);else{if("start"===t.type)return r.a.createElement("tr",{key:n},r.a.createElement("td",null,t.pkey),r.a.createElement("td",null,r.a.createElement("b",null,t.period)),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",{className:"OpenNotes",onClick:function(){return e.openNotes(t.notes1)}}," x "));if(t.action.includes("Topup")||t.action.includes("Withdraw")||t.action.includes("FX")){var a=" ";return t.action.includes("Topup")?a=" Topup ":t.action.includes("Withdraw")?a=" Withdraw ":t.action.includes("FX")&&(a=" FX "),r.a.createElement("tr",{key:n},r.a.createElement("td",null,t.pkey),r.a.createElement("td",null,t.date),r.a.createElement("td",{className:a},t.action),r.a.createElement("td",null,t.amountAUD),r.a.createElement("td",null,t.rate),r.a.createElement("td",null,t.amountUSD),r.a.createElement("td",{className:"OpenNotes",onClick:function(){return e.openNotes(t.notes2)}}," x "))}}}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,"Total AUD= "),r.a.createElement("p",null,"Total USD= ")),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Ref"),r.a.createElement("th",{className:"Date-topup-withdraw"},"Date"),r.a.createElement("th",null,"Action"),r.a.createElement("th",null,"AUD"),r.a.createElement("th",null,"Rate"),r.a.createElement("th",null,"USD"),r.a.createElement("th",null,"Notes"))),r.a.createElement("tbody",null,this.getData())),r.a.createElement("div",{className:"AddLog"},"ADD + // go direct to addTopupWithdraw page"),r.a.createElement(H,{notes:this.state.notes,isVisible:this.state.showNotes,closeNotes:this.closeNotes.bind(this)}))}}]),n}(a.Component),R=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={a:1},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=function(){return"n/a"};switch(this.props.currentTab){case"Log":t=function(){return r.a.createElement(M,{data:e.props.data})};break;case"Topup / Withdraw":t=function(){return r.a.createElement(F,{data:e.props.data})};break;default:t=function(){return"Invalid Choice"}}return r.a.createElement("div",{className:"DataTable"},t())}}]),n}(a.Component),_=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={currentTab:"Log"},a}return Object(i.a)(n,[{key:"updateCurrentTab",value:function(e){this.setState({currentTab:e})}},{key:"componentDidMount",value:function(){this.props.updateScreenName("portfolio"),this.props.fetchLogs(this.props.portfolio)}},{key:"componentDidUpdate",value:function(){this.props.updateScreenName("portfolio")}},{key:"render",value:function(){return r.a.createElement("div",{className:"Portfolio Screen"},r.a.createElement("div",{className:"BrokerName"}," ",this.props.portfolio," "),r.a.createElement(U,{currentTab:this.state.currentTab,updateCurrentTab:this.updateCurrentTab.bind(this)}),r.a.createElement(R,{portfolio:this.props.portfolio,currentTab:this.state.currentTab,data:this.props.logs}))}}]),n}(a.Component),P=Object(d.b)((function(e){return{portfolio:e.portfolioNameToShow.name,logs:e.logs.logs}}),{fetchLogs:N})(_),I=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.updateScreenName("settings")}},{key:"componentDidUpdate",value:function(){this.props.updateScreenName("settings")}},{key:"render",value:function(){return r.a.createElement("div",{className:"Settings Screen"},"Settings works")}}]),n}(a.Component),X=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.updateScreenName("about")}},{key:"componentDidUpdate",value:function(){this.props.updateScreenName("about")}},{key:"render",value:function(){return r.a.createElement("div",{className:"About Screen"},"About works")}}]),n}(a.Component),W=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.updateScreenName("register")}},{key:"componentDidUpdate",value:function(){this.props.updateScreenName("register")}},{key:"render",value:function(){return r.a.createElement("div",{className:"Register Screen"},"Register works")}}]),n}(a.Component),Y=(n(28),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"menu"},r.a.createElement("div",{onClick:this.props.toggleMenu,className:"menu-exit-btn"}," x "),r.a.createElement(A.HashLink,{to:"/"},r.a.createElement("div",{onClick:this.props.toggleMenu,className:"settings-link"}," Home ")),r.a.createElement(A.HashLink,{to:"/Settings"},r.a.createElement("div",{onClick:this.props.toggleMenu,className:"settings-link"}," Settings ")),r.a.createElement(A.HashLink,{to:"/Login"},r.a.createElement("div",{onClick:this.props.toggleMenu,className:"settings-link"}," Login ")),r.a.createElement(A.HashLink,{to:"/Logout"},r.a.createElement("div",{onClick:this.props.toggleMenu,className:"settings-link"}," Logout ")),r.a.createElement(A.HashLink,{to:"/Register"},r.a.createElement("div",{onClick:this.props.toggleMenu,className:"settings-link"}," Register ")),r.a.createElement(A.HashLink,{to:"/About"},r.a.createElement("div",{onClick:this.props.toggleMenu,className:"settings-link"}," About ")))}}]),n}(a.Component)),K=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e,t=" back-btn ",n=this.props.isMenuHidden?" menu-outer-hidden ":" menu-outer ";return"home"===this.props.screen?(e="Select Portfolio",t=" back-btn-hide "):"portfolio"===this.props.screen?e="Portfolio":"addBroker"===this.props.screen?e="Add Broker":"login"===this.props.screen?e="Login":"logout"===this.props.screen?e="Logout":"settings"===this.props.screen?e="Settings":"register"===this.props.screen?e="Register":"about"===this.props.screen?e="About":"selectaddtype"===this.props.screen&&(e="Add a Log item"),r.a.createElement("div",{className:"Nav"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"col Padding"},r.a.createElement("div",{className:t},r.a.createElement(A.HashLink,{to:"/"},r.a.createElement("div",{className:"back-btn-btn"}," \u21b6 ")))),r.a.createElement("div",{className:"col Title"},e),r.a.createElement("div",{className:"col MenuBtn"},r.a.createElement("div",{className:"hamburger",onClick:this.props.toggleMenu}," \u2630 ")),r.a.createElement("div",{className:n},r.a.createElement(Y,{toggleMenu:this.props.toggleMenu}))))}}]),n}(a.Component);n(50);function G(){return r.a.createElement("div",{className:"Footer"},"Created by Paul / This is not a Sponsored Product / Recognized_Unrecognized \xa9 2020")}var V=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).toggleMenu=function(){a.setState({isMenuHidden:!a.state.isMenuHidden})},a.setBrokers=function(e){a.setState({brokers:e})},a.state={isMenuHidden:!0,screen:"home",brokers:[]},a.updateScreenName=a.updateScreenName.bind(Object(l.a)(a)),a.setBrokers=a.setBrokers.bind(Object(l.a)(a)),a.toggleMenu=a.toggleMenu.bind(Object(l.a)(a)),a}return Object(i.a)(n,[{key:"updateScreenName",value:function(e){this.state.screen!==e&&this.setState({screen:e})}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,{store:y},r.a.createElement(m.HashRouter,null,r.a.createElement("div",{className:"App"},r.a.createElement(K,{screen:this.state.screen,isMenuHidden:this.state.isMenuHidden,toggleMenu:this.toggleMenu}),r.a.createElement(h.g,null,r.a.createElement(h.d,{exact:!0,path:"/",component:function(){return r.a.createElement(C,{updateScreenName:e.updateScreenName,brokers:e.state.brokers,setBrokers:e.setBrokers})}}),r.a.createElement(h.d,{exact:!0,path:"/Portfolio",component:function(){return r.a.createElement(P,{updateScreenName:e.updateScreenName})}}),r.a.createElement(h.d,{exact:!0,path:"/AddBroker",component:function(){return r.a.createElement(O,{updateScreenName:e.updateScreenName})}}),r.a.createElement(h.d,{exact:!0,path:"/AddTopup",component:function(){return r.a.createElement(j,{updateScreenName:e.updateScreenName})}}),r.a.createElement(h.d,{exact:!0,path:"/SelectAddType",component:function(){return r.a.createElement(D,{updateScreenName:e.updateScreenName})}}),r.a.createElement(h.d,{exact:!0,path:"/Login",component:function(){return r.a.createElement(x,{updateScreenName:e.updateScreenName})}}),r.a.createElement(h.d,{exact:!0,path:"/Logout",component:function(){return r.a.createElement(w,{updateScreenName:e.updateScreenName})}}),r.a.createElement(h.d,{exact:!0,path:"/Edit",component:function(){return r.a.createElement(L,{updateScreenName:e.updateScreenName})}}),r.a.createElement(h.d,{exact:!0,path:"/Settings",component:function(){return r.a.createElement(I,{updateScreenName:e.updateScreenName})}}),r.a.createElement(h.d,{exact:!0,path:"/About",component:function(){return r.a.createElement(X,{updateScreenName:e.updateScreenName})}}),r.a.createElement(h.d,{exact:!0,path:"/Register",component:function(){return r.a.createElement(W,{updateScreenName:e.updateScreenName})}}),r.a.createElement(h.c,{from:"*",to:"/"})),r.a.createElement(G,null))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[32,1,2]]]);
//# sourceMappingURL=main.72edc121.chunk.js.map