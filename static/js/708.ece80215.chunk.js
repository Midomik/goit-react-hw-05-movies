"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[708],{320:function(t,n,e){e.d(n,{Hg:function(){return s},M1:function(){return p},qH:function(){return o},qP:function(){return f},tx:function(){return l}});var r=e(861),a=e(757),u=e.n(a),c=e(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="57aaf5a2d832988df2f4aaf96918b565",s=function(){var t=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?query=".concat(n,"&api_key=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},708:function(t,n,e){e.r(n),e.d(n,{default:function(){return v}});var r=e(439),a=e(689),u=e(87),c="FilmList_film_list__itk-5",i="FilmList_item_list_film__jpNiH",s="FilmList_link_item__plCOu",o=e(184),f=function(t){var n=t.movies,e=(0,a.TH)();return(0,o.jsx)("ul",{className:c,children:n.map((function(t){return(0,o.jsx)("li",{className:i,children:(0,o.jsx)(u.rU,{className:s,state:{from:e},to:{pathname:"/movies/".concat(t.id)},children:t.title})},t.id)}))})},p=e(320),l=e(791),m=(0,p.Hg)();console.log(m);var v=function(){var t=(0,l.useState)(null),n=(0,r.Z)(t,2),e=n[0],a=n[1];return(0,l.useEffect)((function(){(0,p.Hg)().then((function(t){a(t)}))}),[]),(0,o.jsx)("section",{className:"home_section",children:null!==e&&(0,o.jsx)(f,{movies:e})})}}}]);
//# sourceMappingURL=708.ece80215.chunk.js.map