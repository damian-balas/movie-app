(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{24:function(e,a,t){e.exports=t(43)},29:function(e,a,t){},31:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(20),c=t.n(r),i=t(8),l=(t(29),t(15)),o=t.n(l),u=t(21),m=t(5),f=t(6),v=t(9),d=t(7),h=t(10),p=t(11),b=(t(31),function(){return s.a.createElement("header",{className:"header"},s.a.createElement(i.b,{className:"logo",to:"/"},"Movie App"),s.a.createElement(i.b,{className:"link",to:"/favs"},s.a.createElement("span",{"aria-label":"Favourites page",className:"fas fa-heart"})))}),E=(t(37),function(e){var a=e.favs,t=e.handleFavButttonClicked,n=e.id,r=e.Title,c=e.Poster;return s.a.createElement("div",{className:"movie-item"},s.a.createElement("div",{className:"img-wrapper"},s.a.createElement("img",{className:"img",src:"".concat(c),alt:"".concat(r," - Poster")})),s.a.createElement("div",{className:"btns-group"},s.a.createElement(i.b,{to:"/movie/".concat(n),className:"info-btn"},s.a.createElement("span",{"aria-label":"More information about ".concat(r),className:"fas fa-info"})),s.a.createElement("button",{"aria-label":"Add to favourites",className:"fav-btn",value:n,onClick:t},a.includes(n)?s.a.createElement("span",{"aira-hidden":"true",className:"fas fa-heart"}):s.a.createElement("span",{"aira-hidden":"true",className:"far fa-heart"}))))}),g=(t(38),function(e){function a(){return Object(m.a)(this,a),Object(v.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"movie-grid"},this.props.movies?this.props.movies.map((function(a){var t=a.imdbID,n=a.Title,r=a.Poster;return s.a.createElement(E,{key:"".concat(t,"_").concat(Math.floor(1e3*Math.random())),id:t,Title:n,Poster:r,favs:e.props.favs,handleFavButttonClicked:e.props.handleFavButttonClicked})})):null)}}]),a}(n.Component)),k=(t(39),function(){return s.a.createElement("div",{className:"sk-folding-cube"},s.a.createElement("div",{className:"sk-cube1 sk-cube"}),s.a.createElement("div",{className:"sk-cube2 sk-cube"}),s.a.createElement("div",{className:"sk-cube4 sk-cube"}),s.a.createElement("div",{className:"sk-cube3 sk-cube"}))}),N=(t(40),function(e){return s.a.createElement("form",{autoComplete:"off",className:"form"},s.a.createElement("label",{className:"label",htmlFor:"query"},"Search Movie: "),s.a.createElement("input",{placeholder:"Search for movies...",className:"search-input",onChange:e.handleChange,type:"text",name:"query",id:"query"}),s.a.createElement("button",{className:"submit-btn",onClick:e.handleSubmit,type:"submit"},s.a.createElement("span",{"aria-hidden":"true",className:"fas fa-search"})))}),C=function(e){return s.a.createElement(n.Fragment,null,s.a.createElement(N,{handleClearMovies:e.handleClearMovies,handleChange:e.handleChange,handleSubmit:e.handleSubmit}),e.isLoading?s.a.createElement(k,null):s.a.createElement(g,{favs:e.favs,handleFavButttonClicked:e.handleFavButttonClicked,movies:e.movies}))},S=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(v.a)(this,Object(d.a)(a).call(this,e))).state={movies:[]},t}return Object(h.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.favs.forEach((function(a){fetch("https://omdbapi.com/?apikey=251e77f3&i=".concat(a)).then((function(e){return e.json()})).then((function(a){return e.setState((function(e){return{movies:e.movies.concat(a)}}))}))}))}},{key:"render",value:function(){return s.a.createElement(n.Fragment,null,this.state.movies.length>0?s.a.createElement(g,{favs:this.props.favs,handleFavButttonClicked:this.props.handleFavButttonClicked,movies:this.state.movies}):s.a.createElement("h1",{style:{textAlign:"center",marginTop:"20px",fontSize:"36px"}},"ADD MOVIES TO FAVOURITES FIRST..."))}}]),a}(n.Component),O=(t(41),function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(v.a)(this,Object(d.a)(a).call(this,e))).state={movie:""},t}return Object(h.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;fetch("https://omdbapi.com/?apikey=251e77f3&i=".concat(a,"&plot=full")).then((function(e){return e.json()})).then((function(a){return e.setState({movie:a},(function(){"False"===e.state.movie.Response&&e.props.history.replace("/")}))}))}},{key:"render",value:function(){var e=this.state.movie,a=e.Poster,t=e.Title,n=e.Plot,r=e.Genre,c=e.Released,i=e.Actors,l=e.imdbRating,o=e.Runtime;return s.a.createElement("div",{className:"movie-info"},s.a.createElement("div",{className:"img-wrapper"},s.a.createElement("img",{className:"img",src:"".concat(a),alt:"".concat(t," Poster")})),s.a.createElement("h2",{className:"title"},t),s.a.createElement("div",{className:"info"},s.a.createElement("span",{className:"released"},c),s.a.createElement("span",{className:"runtime"},o),s.a.createElement("span",null,l," / 10")),s.a.createElement("span",{className:"genre"},r),s.a.createElement("span",{className:"actors"},i),s.a.createElement("p",{className:"plot"},n),s.a.createElement("button",{"aria-label":"Add to favourites",className:"fav-btn",value:this.props.match.params.id,onClick:this.props.handleFavButttonClicked},this.props.favs.includes(this.props.match.params.id)?s.a.createElement("span",{"aira-hidden":"true",className:"fas fa-heart"}):s.a.createElement("span",{"aira-hidden":"true",className:"far fa-heart"})))}}]),a}(n.Component)),j=(t(42),function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(v.a)(this,Object(d.a)(a).call(this))).handleChange=function(a){e.setState({query:a.target.value})},e.handleSubmit=function(){var a=Object(u.a)(o.a.mark((function a(t){var n,s;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),e.setState({isLoading:!0}),a.prev=2,a.next=5,fetch("https://www.omdbapi.com/?s=".concat(e.state.query,"&apikey=251e77f3"));case 5:return n=a.sent,a.next=8,n.json();case 8:s=a.sent,e.setState({movies:s.Search},(function(){return e.setState({isLoading:!1})})),a.next=16;break;case 12:a.prev=12,a.t0=a.catch(2),console.error(a.t0),e.setState({isLoading:!1});case 16:case"end":return a.stop()}}),a,null,[[2,12]])})));return function(e){return a.apply(this,arguments)}}(),e.saveInLocalStorage=function(e){localStorage.setItem("favs",JSON.stringify(e))},e.handleFavButttonClicked=function(a){var t=a.currentTarget.value;e.state.favs.includes(t)?(e.setState((function(e){return{favs:e.favs.filter((function(e){return e!==t}))}}),(function(){e.saveInLocalStorage(e.state.favs)})),a.currentTarget.classList.remove("in-favs")):(e.setState((function(e){return{favs:e.favs.concat(t)}}),(function(){e.saveInLocalStorage(e.state.favs)})),a.currentTarget.classList.add("in-favs"))},e.state={movies:"",query:"",favs:localStorage.favs?JSON.parse(localStorage.favs):[],isLoading:!1},e}return Object(h.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(n.Fragment,null,s.a.createElement(b,null),s.a.createElement(p.c,null,s.a.createElement(p.a,{exact:!0,path:"/favs",render:function(){return s.a.createElement(S,{favs:e.state.favs,handleFavButttonClicked:e.handleFavButttonClicked})}}),s.a.createElement(p.a,{exact:!0,path:"/movie/:id",render:function(a){return s.a.createElement(O,Object.assign({},a,{favs:e.state.favs,handleFavButttonClicked:e.handleFavButttonClicked}))}}),s.a.createElement(p.a,{path:"/",render:function(){return s.a.createElement(C,{favs:e.state.favs,handleFavButttonClicked:e.handleFavButttonClicked,movies:e.state.movies,handleClearMovies:e.handleClearMovies,handleChange:e.handleChange,handleSubmit:e.handleSubmit,isLoading:e.state.isLoading})}})))}}]),a}(n.Component));c.a.render(s.a.createElement(i.a,null,s.a.createElement(j,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.d67c925d.chunk.js.map