webpackJsonp([9],{14:function(t,n,e){"use strict";n.a={data:function(){return{}},mounted:function(){},beforeDestroy:function(){},methods:{}}},15:function(t,n){t.exports=function(t,n,e,o,r,i){var a,c=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(a=t,c=t.default);var s="function"==typeof c?c.options:c;n&&(s.render=n.render,s.staticRenderFns=n.staticRenderFns,s._compiled=!0),e&&(s.functional=!0),r&&(s._scopeId=r);var f;if(i?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},s._ssrRegister=f):o&&(f=o),f){var l=s.functional,d=l?s.render:s.beforeCreate;l?(s._injectStyles=f,s.render=function(t,n){return f.call(n),d(t,n)}):s.beforeCreate=d?[].concat(d,f):[f]}return{esModule:a,exports:c,options:s}}},16:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(1),r=e(5),i=e.n(r),a=e(6),c=e(20),u=e(7),s=e(21),f=e(40),l=e(42),d=(e.n(l),e(43)),p=(e.n(d),e(44));e.n(p);o.default.use(a.a),o.default.use(u.a),o.default.use(i.a);var h={mode:"history",linkActiveClass:"current",routes:c.a},m=new a.a(h);m.beforeEach(function(t,n,e){i.a.LoadingBar.start(),s.a.title(t.meta.title),e()}),m.afterEach(function(){i.a.LoadingBar.finish(),window.scrollTo(0,0)});var v=new u.a.Store({state:{goods:[]},getters:{num:function(t){var n=t.goods,e=0;return n.forEach(function(t){e+=1*t.num}),e}},mutations:{add:function(t,n){-1!=t.goods.indexOf(n)?n.num++:t.goods.push(n)},remove:function(t,n){t.goods=t.goods.filter(function(t){return t!=n})}},actions:{add:function(t,n){(0,t.commit)("add",n)},remove:function(t,n){(0,t.commit)("remove",n)}}});o.default.filter("money",function(t){return(t/100).toFixed(2)}),new o.default({el:"#app",router:m,store:v,render:function(t){return t(f.a)}})},20:function(t,n,e){"use strict";var o=[{path:"/",meta:{title:"首页"},redirect:"/home",component:function(t){return e.e(8).then(function(){var n=[e(46)];t.apply(null,n)}.bind(this)).catch(e.oe)},children:[{path:"/home",meta:{title:"首页"},component:function(t){return e.e(0).then(function(){var n=[e(47)];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/list",meta:{title:"分类"},component:function(t){return e.e(2).then(function(){var n=[e(48)];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/shopping",meta:{title:"拼购"},component:function(t){return e.e(4).then(function(){var n=[e(49)];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/mine",meta:{title:"我的"},component:function(t){return e.e(5).then(function(){var n=[e(50)];t.apply(null,n)}.bind(this)).catch(e.oe)}}]},{path:"/login",component:function(t){return e.e(7).then(function(){var n=[e(51)];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/cart",component:function(t){return e.e(1).then(function(){var n=[e(52)];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/search",component:function(t){return e.e(6).then(function(){var n=[e(53)];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/product",component:function(t){return e.e(3).then(function(){var n=[e(54)];t.apply(null,n)}.bind(this)).catch(e.oe)}}];n.a=o},21:function(t,n,e){"use strict";var o=e(8),r=e.n(o),i=e(39),a={};a.title=function(t){t=t||"京东",window.document.title=t};var c="development"===i.a?"http://127.0.0.1:8888":"production"===i.a?"https://www.url.com":"https://debug.url.com";a.ajax=r.a.create({baseURL:c,timeout:3e4}),n.a=a},39:function(t,n,e){"use strict";n.a="production"},40:function(t,n,e){"use strict";var o=e(14),r=e(41),i=e(15),a=i(o.a,r.a,!1,null,null,null);a.options.__file="src/app.vue",n.a=a.exports},41:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("router-view")],1)},r=[];o._withStripped=!0;var i={render:o,staticRenderFns:r};n.a=i},42:function(t,n){},43:function(t,n){},44:function(t,n){}},[16]);