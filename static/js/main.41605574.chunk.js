(this.webpackJsonpcostbasisnz=this.webpackJsonpcostbasisnz||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"username":"thesiyu","brokers":[{"name":"Interactive Brokers","id":"b1"},{"name":"Hatch","id":"b2"}],"b1":{"master":[],"holdings":[],"log":[{"type":"start","pkey":0,"period":"2020 FEB"},{"type":"reg","pkey":1,"date":"20-02-02","action":"Topup","ticker":"","notes":"This is a long noteThis is a long noteThis is a long noteThis is a long noteThis is a long noteThis is a long noteThis is a long noteThis is a long noteThis is a long note"},{"type":"reg","pkey":2,"date":"20-02-03","action":"Topup","ticker":"","notes":""},{"type":"reg","pkey":3,"date":"20-02-04","action":"BUY","ticker":"TSLA","notes":""},{"type":"reg","pkey":3,"date":"20-02-04","action":"SELL","ticker":"TSLA","notes":""},{"type":"reg","pkey":3,"date":"20-02-04","action":"Withdraw","ticker":"","notes":""},{"type":"reg","pkey":4,"date":"20-02-05","action":"BUY","ticker":"TSLA","notes":""},{"type":"reg","pkey":5,"date":"20-02-05","action":"SELL","ticker":"NVDA","notes":""},{"type":"reg","pkey":3,"date":"20-02-04","action":"Dividend","ticker":"MSFT","notes":""},{"type":"reg","pkey":3,"date":"20-02-04","action":"Topup Liq nvda","ticker":"","notes":""},{"type":"reg","pkey":3,"date":"20-02-04","action":"Monthly Fee","ticker":"","notes":""},{"type":"end1","pkey":6,"bought":"2000"},{"type":"end2","pkey":7,"sold":"200"}],"topupwithdraw":[],"buysell":[],"fees":[],"dividends":[]},"b2":{"master":[],"holdings":[],"log":[],"topupwithdraw":[],"buysell":[],"fees":[],"dividends":[]}}')},26:function(e,t,n){},29:function(e,t,n){e.exports=n(46)},34:function(e,t,n){},35:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),l=(n(34),n(3)),i=n(4),s=n(6),u=n(5),d=(n(35),n(13)),p=n(20),m=n(2),h=n(12),f=n(28),b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||h.d,E=Object(h.e)(Object(h.c)({logs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_LOGS":return{logs:t.payload};default:return e}},portfolio:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PORTFOLIO":case"UPDATE_PORTFOLIO":return{portfolio:t.payload};default:return e}},brokers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BROKERS":return{brokers:t.payload};default:return e}}}),{},b(Object(h.a)(f.a))),v=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Add"},"add works")}}]),n}(a.Component),k=(a.Component,n(15)),y=(n(41),n(18)),O=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).setBrokers=function(e){a.setState({brokers:e})},a.state={brokers:[]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchBrokers(),this.props.fetchPortfolio(),this.props.fetchLogs(),this.props.updateScreenName("home")}},{key:"componentDidUpdate",value:function(){this.props.updateScreenName("home")}},{key:"renderBrokers",value:function(){var e=this;return this.state.brokers.map((function(t,n){return r.a.createElement("ul",{key:n,className:"Brokers"},r.a.createElement(k.HashLink,{to:"/Portfolio"},r.a.createElement("li",{onClick:function(){return e.props.updatePortfolio(t.name)},className:"Broker"},t.name)))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Home Screen"},r.a.createElement("div",{className:"Activator"},r.a.createElement("button",{onClick:function(){return e.setBrokers(e.props.brokers)},className:"Activator-btn"}," Fetch ")),r.a.createElement("div",{className:"Brokers"},this.renderBrokers()),r.a.createElement("div",{className:"Add"},r.a.createElement(k.HashLink,{to:"/Add"},r.a.createElement("button",{className:"Add-btn"},"+"))))}}]),n}(a.Component),g=Object(d.b)((function(e){return{brokers:e.brokers.brokers}}),{fetchBrokers:function(){return function(e){e({type:"FETCH_BROKERS",payload:y.brokers})}},fetchPortfolio:function(){return function(e){e({type:"FETCH_PORTFOLIO",payload:"redux-default"})}},updatePortfolio:function(e){return function(t){t({type:"UPDATE_PORTFOLIO",payload:e})}},fetchLogs:function(){return function(e){e({type:"FETCH_LOGS",payload:y.b1.log})}}})(O),T=(a.Component,n(42),n(43),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={currentTab:"Log",tabs:["Master","Holdings","Log","Topup / Withdraw","Buy / Sell","Fees","Dividends"]},a}return Object(i.a)(n,[{key:"updateCurrentTab",value:function(e){this.setState({currentTab:e}),this.props.updateCurrentTab(e)}},{key:"getTabs",value:function(){var e=this;return this.state.tabs.map((function(t,n){return r.a.createElement("li",{onClick:function(){return e.updateCurrentTab(t)},className:"Tab",key:n},r.a.createElement("span",{className:"Tab-inner "+(t===e.state.currentTab?" Tab-inner-highlighted":"")},t))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Ribbon"},r.a.createElement("ul",{className:"Tabs"},this.getTabs()))}}]),n}(a.Component)),N=(n(26),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={a:1},a}return Object(i.a)(n,[{key:"getData",value:function(){return void 0===this.props.data?r.a.createElement("tr",null,r.a.createElement("td",null,"must fetch first")):this.props.data.map((function(e,t){if("start"===e.type)return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.pkey),r.a.createElement("td",null,r.a.createElement("b",null,e.period)),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null));if("reg"===e.type){var n=" ";return e.action.includes("Topup")?n=" Topup ":e.action.includes("BUY")?n=" Buy ":e.action.includes("SELL")?n=" Sell ":e.action.includes("Withdraw")?n=" Withdraw ":e.action.includes("Dividend")?n=" Dividend ":e.action.includes("Fee")&&(n=" Fee "),r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.pkey),r.a.createElement("td",null,e.date),r.a.createElement("td",{className:n},e.action),r.a.createElement("td",null,e.ticker),r.a.createElement("td",null," x "))}return"end1"===e.type?r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.pkey),r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("b",null,"BOUGHT")),r.a.createElement("td",null,e.bought),r.a.createElement("td",null)):"end2"===e.type?r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.pkey),r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("b",null,"SOLD")),r.a.createElement("td",null,e.sold),r.a.createElement("td",null)):void 0}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Ref"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Action"),r.a.createElement("th",null,"Symbol"),r.a.createElement("th",null,"Notes"))),r.a.createElement("tbody",null,this.getData())))}}]),n}(a.Component)),S=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={a:1},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=function(){return"n/a"};switch(this.props.currentTab){case"Log":t=function(){return r.a.createElement(N,{data:e.props.data})};break;default:t=function(){return"Invalid Choice"}}return r.a.createElement("div",{className:"DataTable"},t())}}]),n}(a.Component),j=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={currentTab:"Log"},a}return Object(i.a)(n,[{key:"updateCurrentTab",value:function(e){this.setState({currentTab:e})}},{key:"componentDidMount",value:function(){this.props.updateScreenName("portfolio")}},{key:"componentDidUpdate",value:function(){this.props.updateScreenName("portfolio")}},{key:"render",value:function(){return r.a.createElement("div",{className:"Portfolio Screen"},r.a.createElement("div",{className:"BrokerName"}," ",this.props.portfolio," "),r.a.createElement(T,{updateCurrentTab:this.updateCurrentTab.bind(this)}),r.a.createElement(S,{currentTab:this.state.currentTab,data:this.props.logs}))}}]),n}(a.Component),C=Object(d.b)((function(e){return{portfolio:e.portfolio.portfolio,logs:e.logs.logs}}),{})(j),L=(n(44),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){var e;return"home"===this.props.screen&&(e="Select Portfolio"),"portfolio"===this.props.screen&&(e="Portfolio"),r.a.createElement("div",{className:"Nav"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"col Padding"},r.a.createElement(k.HashLink,{to:"/"},r.a.createElement("div",null," \u21b6 "))),r.a.createElement("div",{className:"col Title"},e),r.a.createElement("div",{className:"col MenuBtn"},r.a.createElement("div",{className:"hamburger"}," \u2630 "))))}}]),n}(a.Component));n(45);function w(){return r.a.createElement("div",{className:"Footer"},"foot")}var B=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={screen:"home"},a}return Object(i.a)(n,[{key:"updateScreenName",value:function(e){this.state.screen!==e&&this.setState({screen:e})}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,{store:E},r.a.createElement(p.HashRouter,null,r.a.createElement("div",{className:"App"},r.a.createElement(L,{screen:this.state.screen}),r.a.createElement(m.g,null,r.a.createElement(m.d,{exact:!0,path:"/",component:function(){return r.a.createElement(g,{updateScreenName:e.updateScreenName.bind(e)})}}),r.a.createElement(m.d,{exact:!0,path:"/Portfolio",component:function(){return r.a.createElement(C,{updateScreenName:e.updateScreenName.bind(e)})}}),r.a.createElement(m.d,{exact:!0,path:"/Add",component:function(){return r.a.createElement(v,{updateScreenName:e.updateScreenName.bind(e)})}}),r.a.createElement(m.c,{from:"*",to:"/"})),r.a.createElement(w,null))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.41605574.chunk.js.map