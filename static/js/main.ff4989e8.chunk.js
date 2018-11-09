(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,a){},126:function(e,t,a){},129:function(e,t,a){},171:function(e,t,a){},173:function(e,t,a){},176:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),s=a.n(l),c=a(29),o=a(22),i=a(82),u=a(183),p=a(184),m=a(17),h=a(18),d=a(21),g=a(19),f=a(20),y=a(45),E=a(83),b=a.n(E),v="GET_PLAYERS",P="GET_PLAYERS_RECEIVED",_="GET_PLAYERS_ERROR",O=function(e){return e({type:v}),function(e){return b.a.get("https://api.fantasydata.net/v3/nfl/stats/json/Players",{headers:{"Ocp-Apim-Subscription-Key":"d2531025400b4604a1d0470935625c1c"}}).then(function(t){e({type:P,players:t.data})}).catch(function(t){console.log(t),e({type:_,error:t})})}},N={loading:!1,error:!1,results:[],lookupResults:{}},j=function(e){var t={};return e.forEach(function(e){t[e.PlayerID]=e}),t};var w=a(179),k=(a(124),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"renderResults",value:function(){return this.props.results&&this.props.results.slice(0,10).map(function(e){return r.a.createElement(w.a,{key:e.PlayerID,className:"searchbox__results-content",to:"/player/".concat(e.PlayerID)},"".concat(e.FirstName," ").concat(e.LastName))})}},{key:"render",value:function(){var e=this.props.onSearch;return r.a.createElement("div",{className:"searchbox__container"},r.a.createElement("input",{className:"searchbox__input",onChange:function(t){return e&&e(t.target.value)},placeholder:"search player..."}),r.a.createElement("div",{className:"searchbox__results"},this.renderResults()))}}]),t}(n.Component));a(126);function R(){return r.a.createElement("div",{className:"loader__container"},r.a.createElement("div",{className:"loader"}),r.a.createElement("h3",null,"Loading..."))}var S=a(26),x=a(43),A=a.n(x),I=a(185),C=a(182),T=a(180),D=a(181),L=(a(129),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(g.a)(t).call(this,e))).showPreviousPage=function(){1!==a.state.page&&a.setState(function(e){return{page:e.page-1,prevPage:e.prevPage-100,currentPage:e.currentPage-100,nextPage:e.currentPage}})},a.showNextPage=function(){a.state.currentPage===a.props.results.length||a.state.currentPage>a.props.results.length||a.setState(function(e){return{page:e.page+1,nextPage:e.nextPage+100,currentPage:e.currentPage+100,prevPage:e.currentPage}})},a.state={page:1,prevPage:0,currentPage:100,nextPage:200,filter:"default"},a.showPreviousPage=a.showPreviousPage.bind(Object(S.a)(Object(S.a)(a))),a.showNextPage=a.showNextPage.bind(Object(S.a)(Object(S.a)(a))),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"renderResults",value:function(){var e=this.state,t=e.prevPage,a=e.currentPage,n=e.filter;return("default"===n?this.props.results:A.a.sortBy(this.props.results,function(e){return e[n]})).slice(t,a).map(function(e,a){return r.a.createElement("tr",{key:e.PlayerID},r.a.createElement("td",null,t+a),r.a.createElement("td",null,"".concat(e.Name)),r.a.createElement("td",null,e.Team),r.a.createElement("td",null,e.Number),r.a.createElement("td",null,e.Position),r.a.createElement("td",null,e.Age),r.a.createElement("td",null,e.Weight," lbs"))})}},{key:"renderFilter",value:function(){var e=this,t=this.state,a=t.page,n=t.currentPage,l=this.props,s=l.results,c=l.filter;return r.a.createElement("div",{className:"player-table__group"},r.a.createElement(I.a,null,r.a.createElement(I.a.Prev,{disabled:a<=1,onClick:this.showPreviousPage}),r.a.createElement(I.a.Item,null,a),r.a.createElement(I.a.Next,{disabled:n===s.length||n>s.length,onClick:this.showNextPage})),r.a.createElement(C.a,{bsStyle:"default",title:this.state.filter,id:"filter-player"},Object.keys(c).map(function(t){return r.a.createElement(T.a,{key:t,eventKey:t,onSelect:function(){e.setState({filter:t})}},c[t])})))}},{key:"render",value:function(){return r.a.createElement("div",{className:"player-table__container"},this.renderFilter(),r.a.createElement(D.a,{responsive:!0,striped:!0,bordered:!0,condensed:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Team"),r.a.createElement("th",null,"Number"),r.a.createElement("th",null,"Position"),r.a.createElement("th",null,"Age"),r.a.createElement("th",null,"Weight"))),r.a.createElement("tbody",null,this.renderResults())),this.renderFilter())}}]),t}(n.Component)),W=(a(171),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={playerName:""},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){0===this.props.player.results.length&&this.props.getAvailablePlayers()}},{key:"searchPlayer",value:function(e){this.setState({playerName:e.toLowerCase()})}},{key:"searchResult",value:function(){var e=this;return this.props.player.loading||!this.state.playerName?[]:this.props.player.results.slice(0,200).filter(function(t){return t.Name.toLowerCase().includes(e.state.playerName)})}},{key:"render",value:function(){if(console.log(this.props),this.props.player.loading)return r.a.createElement(R,null);return r.a.createElement("div",{className:"home__container"},r.a.createElement(k,{onSearch:this.searchPlayer.bind(this),results:this.searchResult()}),r.a.createElement(L,{results:this.props.player.results,filter:{default:"default",Name:"name",Team:"team",Age:"age",Number:"number",Position:"position",Weight:"weight"}}))}}]),t}(n.Component)),B=Object(c.b)(function(e){return{player:e.player}},function(e){return{getAvailablePlayers:function(){return e(O(e))}}})(W),F=a(78),G=(a(173),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){A.a.isEmpty(this.props.lookupResults)&&this.props.getAvailablePlayers()}},{key:"render",value:function(){var e=this.props.playerInfo[this.props.match.params.playerId];return this.props.loading||!e?r.a.createElement(R,null):r.a.createElement("div",{className:"player__container"},r.a.createElement("img",{className:"player__image",src:e.PhotoUrl,alt:e.Age}),r.a.createElement("h3",{className:"player__title"},e.Name),r.a.createElement("div",{className:"player__info"},"Age: ",e.Age),r.a.createElement("div",{className:"player__info"},"Team: ",e.Team),r.a.createElement("div",{className:"player__info"},"Position: ",e.Position),r.a.createElement("div",{className:"player__info"},"Number: ",e.Number),r.a.createElement("div",{className:"player__info"},"Weight: ",e.Weight),r.a.createElement(w.a,{to:"/"},r.a.createElement(F.a,{className:"player__button"},"Go Back")))}}]),t}(n.Component)),M=Object(c.b)(function(e){var t=e.player;return{loading:t.loading,playerInfo:t.lookupResults}},function(e){return{getAvailablePlayers:function(){return e(O(e))}}})(G),X=function(){return r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(p.a,{exact:!0,path:"/",component:B}),r.a.createElement(p.a,{path:"/player/:playerId",component:M})))},U=Object(o.c)({player:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(y.a)({},e,{loading:!0,error:!1});case P:return Object(y.a)({},e,{loading:!1,results:t.players,lookupResults:j(t.players)});case _:return Object(y.a)({},e,{loading:!1,error:!0});default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(176);var V=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):o.d)(Object(o.a)(i.a)),Y=Object(o.e)(U,V);s.a.render(r.a.createElement(c.a,{store:Y},r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},96:function(e,t,a){e.exports=a(178)}},[[96,2,1]]]);
//# sourceMappingURL=main.ff4989e8.chunk.js.map