(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{24:function(e,t,a){e.exports=a(42)},29:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),c=a.n(s),l=a(8),i=(a(29),a(15)),o=a.n(i),m=a(21),u=a(5),f=a(6),v=a(9),h=a(7),p=a(10),d=a(11),E=(a(31),function(){return r.a.createElement("header",{className:"header"},r.a.createElement(l.b,{className:"logo",to:"/"},"Movie App"),r.a.createElement(l.b,{className:"link",to:"/favs"},r.a.createElement("span",{"aria-label":"Favourites page",className:"fas fa-heart"})))}),b=(a(37),function(e){var t=e.favs,a=e.handleFavButttonClicked,n=e.id,s=e.Title,c=e.Poster,i=e.Year;return r.a.createElement("div",{className:"movie-item"},r.a.createElement("div",{className:"img-wrapper"},r.a.createElement("img",{className:"img",src:"".concat(c),alt:"".concat(s," Poster")})),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",{className:"title"},s),r.a.createElement("span",{className:"year"},i)),r.a.createElement("div",{className:"btns-group"},r.a.createElement(l.b,{to:"/movie/".concat(n),className:"info-btn"},r.a.createElement("span",{"aria-label":"More information about ".concat(s),className:"fas fa-info"})),r.a.createElement("button",{"aria-label":"Add to favourites",className:"fav-btn",value:n,onClick:a},t.includes(n)?r.a.createElement("span",{"aira-hidden":"true",className:"fas fa-heart"}):r.a.createElement("span",{"aira-hidden":"true",className:"far fa-heart"}))))}),g=(a(38),function(e){function t(){return Object(u.a)(this,t),Object(v.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"movie-grid"},this.props.movies?this.props.movies.map((function(t){var a=t.imdbID,n=t.Title,s=t.Poster,c=t.Year;return r.a.createElement(b,{key:a,id:a,Title:n,Poster:s,Year:c,favs:e.props.favs,handleFavButttonClicked:e.props.handleFavButttonClicked})})):null)}}]),t}(n.Component)),N=(a(39),function(e){return r.a.createElement("form",{autoComplete:"off",className:"form"},r.a.createElement("label",{className:"label",htmlFor:"query"},"Search Movie: "),r.a.createElement("input",{placeholder:"Search for movies...",className:"search-input",onChange:e.handleChange,type:"text",name:"query",id:"query"}),r.a.createElement("button",{className:"submit-btn",onClick:e.handleSubmit,type:"submit"},r.a.createElement("span",{"aria-hidden":"true",className:"fas fa-search"})))}),C=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(N,{handleClearMovies:e.handleClearMovies,handleChange:e.handleChange,handleSubmit:e.handleSubmit}),r.a.createElement(g,{favs:e.favs,handleFavButttonClicked:e.handleFavButttonClicked,movies:e.movies}))},k=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(v.a)(this,Object(h.a)(t).call(this,e))).state={movies:[]},a}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.favs.forEach((function(t){fetch("https://omdbapi.com/?apikey=251e77f3&i=".concat(t)).then((function(e){return e.json()})).then((function(t){return e.setState((function(e){return{movies:e.movies.concat(t)}}))}))})),console.log(this.props)}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,this.state.movies.length>0?r.a.createElement(g,{favs:this.props.favs,handleFavButttonClicked:this.props.handleFavButttonClicked,movies:this.state.movies}):r.a.createElement("h1",{style:{textAlign:"center",marginTop:"20px",fontSize:"36px"}},"ADD MOVIES TO FAVOURITES FIRST..."))}}]),t}(n.Component),O=(a(40),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(v.a)(this,Object(h.a)(t).call(this,e))).state={movie:""},a}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("https://omdbapi.com/?apikey=251e77f3&i=".concat(t,"&plot=full")).then((function(e){return e.json()})).then((function(t){return e.setState({movie:t},(function(){"False"===e.state.movie.Response&&e.props.history.replace("/")}))}))}},{key:"render",value:function(){var e=this.state.movie,t=e.Poster,a=e.Title,n=e.Plot,s=e.Genre,c=e.Released,l=e.Actors,i=e.imdbRating,o=e.Runtime;return r.a.createElement("div",{className:"movie-info"},r.a.createElement("div",{className:"img-wrapper"},r.a.createElement("img",{className:"img",src:"".concat(t),alt:"".concat(a," Poster")})),r.a.createElement("h2",{className:"title"},a),r.a.createElement("div",{className:"info"},r.a.createElement("span",{className:"released"},c),r.a.createElement("span",{className:"runtime"},o),r.a.createElement("span",null,i," / 10")),r.a.createElement("span",{className:"genre"},s),r.a.createElement("span",{className:"actors"},l),r.a.createElement("p",{className:"plot"},n),r.a.createElement("button",{"aria-label":"Add to favourites",className:"fav-btn",value:this.props.match.params.id,onClick:this.props.handleFavButttonClicked},this.props.favs.includes(this.props.match.params.id)?r.a.createElement("span",{"aira-hidden":"true",className:"fas fa-heart"}):r.a.createElement("span",{"aira-hidden":"true",className:"far fa-heart"})))}}]),t}(n.Component)),S=(a(41),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(v.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){e.setState({query:t.target.value}),console.log(e.state)},e.handleSubmit=function(){var t=Object(m.a)(o.a.mark((function t(a){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,fetch("https://www.omdbapi.com/?s=".concat(e.state.query,"&apikey=251e77f3"));case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,e.setState({movies:r.Search},(function(){return console.log(e.state)})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}(),e.saveInLocalStorage=function(e){localStorage.setItem("favs",JSON.stringify(e))},e.handleFavButttonClicked=function(t){var a=t.currentTarget.value;e.state.favs.includes(a)?(e.setState((function(e){return{favs:e.favs.filter((function(e){return e!==a}))}}),(function(){e.saveInLocalStorage(e.state.favs)})),t.currentTarget.classList.remove("in-favs")):(e.setState((function(e){return{favs:e.favs.concat(a)}}),(function(){e.saveInLocalStorage(e.state.favs)})),t.currentTarget.classList.add("in-favs"))},e.state={movies:"",query:"",favs:localStorage.favs?JSON.parse(localStorage.favs):[]},e}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement(E,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/favs",render:function(){return r.a.createElement(k,{favs:e.state.favs,handleFavButttonClicked:e.handleFavButttonClicked})}}),r.a.createElement(d.a,{exact:!0,path:"/movie/:id",render:function(t){return r.a.createElement(O,Object.assign({},t,{favs:e.state.favs,handleFavButttonClicked:e.handleFavButttonClicked}))}}),r.a.createElement(d.a,{path:"/",render:function(){return r.a.createElement(C,{favs:e.state.favs,handleFavButttonClicked:e.handleFavButttonClicked,movies:e.state.movies,handleClearMovies:e.handleClearMovies,handleChange:e.handleChange,handleSubmit:e.handleSubmit})}})))}}]),t}(n.Component));c.a.render(r.a.createElement(l.a,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.dcad4497.chunk.js.map