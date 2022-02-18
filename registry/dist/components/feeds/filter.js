!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["feeds/filter"]=t():e["feeds/filter"]=t()}(self,(function(){return function(){var e,t,n={151:function(e,t,n){"use strict";n.r(t),n.d(t,{hasBlockedPattern:function(){return r}});const i=(e,t)=>!(!e||!t)&&(e.startsWith("/")&&e.endsWith("/")?new RegExp(e.slice(1,e.length-1)).test(t):t.includes(e)),r=(e,t)=>{const n=e.match(/(.+) up:([^ ]+)/);return n?i(n[1],t.text)&&i(n[2],t.username):i(e,t.text)}},420:function(e,t,n){var i=n(645)((function(e){return e[1]}));i.push([e.id,'body.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-repost .feed-card .card[data-type="1"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-textWithImages .feed-card .card[data-type="2"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-text .feed-card .card[data-type="4"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-video .feed-card .card[data-type="8"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-miniVideo .feed-card .card[data-type="16"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-column .feed-card .card[data-type="64"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-audio .feed-card .card[data-type="256"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-bangumi .feed-card .card[data-type="512"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-liveRecord .feed-card .card[data-type="2047"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-share .feed-card .card[data-type="2048"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-self-repost .feed-card .card[data-self-repost] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter) .left-panel .scroll-content > *,\nbody.enable-feeds-filter:not(.disable-feeds-filter) .right-panel .scroll-content > * {\n  margin: 0 !important;\n  margin-bottom: 8px !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter) .left-panel > :not(:last-child) {\n  margin: 0 !important;\n  margin-bottom: 8px !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter) .left-panel .user-panel.f-left {\n  float: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-profile .left-panel .user-wrapper {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-following-tags .left-panel .tag-panel,\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-following-tags .right-panel .dyn-topic-panel,\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-following-tags .right-panel .new-topic-panel {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-notice .right-panel .notice-panel {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-live .left-panel .live-panel {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-trending-tags .right-panel .tag-panel {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-most-viewed .card-list .most-viewed-panel {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter) .feed-card .card.pattern-block {\n  display: none !important;\n}\n.feeds-filter {\n  background-color: white;\n  font-size: 12px;\n  width: 100%;\n  padding: 12px 16px;\n  border-radius: 4px;\n  box-sizing: border-box;\n  display: none;\n  flex-direction: column;\n  max-height: 80vh;\n  overflow: auto;\n  scrollbar-width: none !important;\n  overscroll-behavior: contain;\n}\n.feeds-filter::-webkit-scrollbar {\n  height: 0 !important;\n  width: 0 !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter) .feeds-filter {\n  display: flex;\n}\n.feeds-filter, .feeds-filter * {\n  transition: 0.2s ease-out;\n  transition-property: border-color, color, background-color;\n}\nbody.dark .feeds-filter {\n  color: #eee;\n  background-color: #444;\n}\n.feeds-filter .feeds-filter-header {\n  cursor: pointer;\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.feeds-filter .feeds-filter-header h1 {\n  font-weight: normal;\n  font-size: 14px;\n  margin: 0;\n}\n.feeds-filter.collapse .feeds-filter-header {\n  margin-bottom: 0;\n}\n.feeds-filter.collapse .feeds-filter-header .be-icon {\n  transform: rotate(180deg);\n}\n.feeds-filter.collapse > :not(.feeds-filter-header) {\n  display: none;\n}\n.feeds-filter h2 {\n  font-weight: bold;\n  font-size: 13px;\n  margin: 0;\n  margin-bottom: 8px;\n}\n.feeds-filter .filter-type-switch {\n  flex: 0 0 49%;\n}\n.feeds-filter .filter-side-card-switch {\n  flex: 0 0 100%;\n}\n.feeds-filter .filter-types {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\nbody.by-type .feeds-filter h2:nth-of-type(1),\nbody.by-type .feeds-filter .filter-types {\n  display: none;\n}\n.feeds-filter .filter-patterns:not(:empty) {\n  margin-bottom: 4px;\n}\n.feeds-filter .filter-patterns .pattern {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 4px 6px;\n  border-radius: 4px;\n  font-size: 12px;\n  border: 1px solid rgba(136,136,136,0.26667);\n}\n.feeds-filter .filter-patterns .pattern:not(:last-child) {\n  margin-bottom: 4px;\n}\n.feeds-filter .filter-patterns .pattern .be-icon {\n  cursor: pointer;\n}\n.feeds-filter .add-pattern {\n  display: flex;\n  align-items: center;\n  margin-bottom: 18px;\n}\n.feeds-filter .add-pattern input {\n  font-size: 12px;\n}\n.feeds-filter .add-pattern .be-button {\n  margin-left: 6px;\n  padding: 4px 6px;\n}',""]),e.exports=i},866:function(e,t,n){var i=n(645)((function(e){return e[1]}));i.push([e.id,".feeds-filter-swtich:not(:last-child) {\n  margin-bottom: 4px;\n}\n.feeds-filter-swtich label {\n  cursor: pointer;\n  margin: 0;\n  padding: 4px 6px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid rgba(136,136,136,0.26667);\n}\n.feeds-filter-swtich label .name {\n  font-size: 12px;\n}\n.feeds-filter-swtich label .disabled {\n  color: var(--theme-color) !important;\n}\n.feeds-filter-swtich label:hover {\n  background-color: rgba(136,136,136,0.13333);\n}\n.feeds-filter-swtich label input {\n  display: none;\n}\n.feeds-filter-swtich label .be-icon.disabled {\n  display: none;\n}\n.feeds-filter-swtich label.disabled .be-icon {\n  display: none;\n}\n.feeds-filter-swtich label.disabled .be-icon.disabled {\n  display: block;\n}",""]),e.exports=i},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,i){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(i)for(var s=0;s<this.length;s++){
// eslint-disable-next-line prefer-destructuring
var a=this[s][0];null!=a&&(r[a]=!0)}for(var o=0;o<e.length;o++){var l=[].concat(e[o]);i&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},379:function(e,t,n){"use strict";var i,r=function(){return void 0===i&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
i=Boolean(window&&document&&document.all&&!window.atob)),i},s=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function o(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},i=[],r=0;r<e.length;r++){var s=e[r],l=t.base?s[0]+t.base:s[0],d=n[l]||0,c="".concat(l," ").concat(d);n[l]=d+1;var f=o(c),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(a[f].references++,a[f].updater(p)):a.push({identifier:c,updater:m(p,t),references:1}),i.push(c)}return i}function d(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=s(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,f=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function p(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=f(t,r);else{var s=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function u(e,t,n){var i=n.css,r=n.media,s=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var b=null,y=0;function m(e,t){var n,i,r;if(t.singleton){var s=y++;n=b||(b=d(t)),i=p.bind(null,n,s,!1),r=p.bind(null,n,s,!0)}else n=d(t),i=u.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=o(n[i]);a[r].references--}for(var s=l(e,t),d=0;d<n.length;d++){var c=o(n[d]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}n=s}}}},135:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"feeds-filter",class:{collapse:e.collapse}},[n("div",{staticClass:"feeds-filter-header",on:{click:function(t){e.collapse=!e.collapse}}},[n("h1",[e._v("动态过滤")]),e._v(" "),n("VIcon",{attrs:{icon:"mdi-chevron-up"}})],1),e._v(" "),n("h2",[e._v("类型")]),e._v(" "),n("div",{staticClass:"filter-types"},e._l(e.allTypes,(function(e){var t=e[0],i=e[1];return n("FilterTypeSwitch",{key:i.id,attrs:{name:t,type:i}})})),1),e._v(" "),n("h2",[e._v("关键词")]),e._v(" "),n("div",{staticClass:"filter-patterns"},e._l(e.patterns,(function(t){return n("div",{key:t,staticClass:"pattern"},[e._v("\n      "+e._s(t)+"\n      "),n("VIcon",{attrs:{title:"删除",icon:"mdi-trash-can-outline",size:16},nativeOn:{click:function(n){return e.deletePattern(t)}}})],1)})),0),e._v(" "),n("div",{staticClass:"add-pattern"},[n("TextBox",{attrs:{placeholder:"支持正则表达式 /^xxx$/",type:"text"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addPattern(e.newPattern)}},model:{value:e.newPattern,callback:function(t){e.newPattern=t},expression:"newPattern"}}),e._v(" "),n("VButton",{attrs:{type:"transparent"},nativeOn:{click:function(t){return e.addPattern(e.newPattern)}}},[n("VIcon",{attrs:{title:"添加",icon:"mdi-plus",size:18}})],1)],1),e._v(" "),n("h2",[e._v("侧边栏")]),e._v(" "),n("div",{staticClass:"filter-side-card"},e._l(Object.entries(e.allSideCards),(function(t){var i=t[0],r=t[1];return n("div",{key:i,staticClass:"filter-side-card-switch feeds-filter-swtich",on:{click:function(t){return e.toggleBlockSide(i)}}},[n("label",{class:{disabled:e.sideDisabled(i)}},[n("span",{staticClass:"name",class:{disabled:e.sideDisabled(i)}},[e._v(e._s(r.displayName))]),e._v(" "),n("VIcon",{staticClass:"disabled",attrs:{size:16,icon:"mdi-cancel"}}),e._v(" "),n("VIcon",{attrs:{size:16,icon:"mdi-check"}})],1)])})),0)])};i._withStripped=!0;var r=n(407),s=n(569),a=coreApis.observer,o=n(643),l=n(151);const d=(0,r.getComponentSettings)("feedsFilter").options,c={0:{className:"profile",displayName:"个人资料"},1:{className:"following-tags",displayName:"话题"},2:{className:"notice",displayName:"公告栏"},3:{className:"live",displayName:"正在直播"},5:{className:"most-viewed",displayName:"关注栏"}};let f;const p="feeds-filter-side-block-";var u=Vue.extend({components:{FilterTypeSwitch:()=>Promise.resolve().then(n.bind(n,179)),VIcon:o.VIcon,TextBox:o.TextBox,VButton:o.VButton},data:()=>({allTypes:[],patterns:[...d.patterns],newPattern:"",allSideCards:c,blockSideCards:[...d.sideCards],collapse:!0}),watch:{patterns(){d.patterns=this.patterns,f&&f.cards.forEach((e=>this.updateCard(lodash.clone(e))))}},async mounted(){this.updateBlockSide();const e=await(0,s.select)(".feed-card .tab-bar");if(!e)return void console.error("tabBar not found");const t=e.querySelector(".tab:nth-child(1) .tab-text");(0,a.attributes)(t,(()=>{document.body.classList.toggle("by-type",!t.classList.contains("selected"))})),document.body.classList.add("enable-feeds-filter");const{feedsCardsManager:i,feedsCardTypes:r}=await Promise.resolve().then(n.t.bind(n,23,23));if(!await i.startWatching())return void console.error("feedsCardsManager.startWatching() failed");this.allTypes=Object.entries(r).concat(Object.entries({"self-repost":{id:-1,name:"自转发"}})).filter((([,e])=>e.id<=2048)).map((([e,t])=>[e,lodash.clone(t)])),i.cards.forEach((e=>this.updateCard(lodash.clone(e)))),i.addEventListener("addCard",(e=>{const t=e.detail;this.updateCard(t)})),f=i},methods:{updateCard(e){d.patterns.some((t=>(0,l.hasBlockedPattern)(t,e)))?e.element.classList.add("pattern-block"):e.element.classList.remove("pattern-block")},deletePattern(e){const t=d.patterns.indexOf(e);-1!==t&&this.patterns.splice(t,1)},addPattern(e){e&&!this.patterns.includes(e)&&this.patterns.push(e),this.newPattern=""},updateBlockSide(){Object.entries(c).forEach((([e,t])=>{const n=p+t.className;document.body.classList[this.blockSideCards.includes(e)?"add":"remove"](n)}))},toggleBlockSide(e){const t=this.blockSideCards.indexOf(e),n=c[e];-1!==t?(this.blockSideCards.splice(t,1),document.body.classList.remove(p+n.className)):(this.blockSideCards.push(e),document.body.classList.add(p+n.className)),d.sideCards=this.blockSideCards},sideDisabled(e){return this.blockSideCards.includes(e)}}}),b=n(379),y=n.n(b),m=n(420),h=n.n(m),v={insert:"head",singleton:!1},g=(y()(h(),v),h().locals,(0,n(900).Z)(u,i,[],!1,null,null,null));g.options.__file="registry/lib/components/feeds/filter/FeedsFilterCard.vue";var x=g.exports},179:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"filter-type-switch feeds-filter-swtich"},[n("label",{class:{disabled:e.disabled}},[n("span",{staticClass:"name",class:{disabled:e.disabled}},[e._v(e._s(e.type.name))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.disabled,expression:"disabled"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.disabled)?e._i(e.disabled,null)>-1:e.disabled},on:{change:function(t){var n=e.disabled,i=t.target,r=!!i.checked;if(Array.isArray(n)){var s=e._i(n,null);i.checked?s<0&&(e.disabled=n.concat([null])):s>-1&&(e.disabled=n.slice(0,s).concat(n.slice(s+1)))}else e.disabled=r}}}),e._v(" "),e.disabled?n("VIcon",{staticClass:"disabled",attrs:{size:16,icon:"mdi-cancel"}}):n("VIcon",{attrs:{size:16,icon:"mdi-check"}})],1)])};i._withStripped=!0;var r=n(407),s=n(643);const{options:a}=(0,r.getComponentSettings)("feedsFilter");var o=Vue.extend({components:{VIcon:s.VIcon},props:{name:{type:String,required:!0},type:{type:Object,required:!0}},data(){const e=this.type.id>=0?"types":"specialTypes";return{disabled:a[e].includes(this.type.id),optionKey:e}},watch:{disabled(e){this.setFilter(e)}},created(){this.setFilter(this.disabled,!1)},methods:{setFilter(e,t=!0){if(document.body.classList[e?"add":"remove"](`feeds-filter-block-${this.name}`),t)if(e)a[this.optionKey].push(this.type.id);else{const e=a[this.optionKey].indexOf(this.type.id);-1!==e&&a[this.optionKey].splice(e,1)}}}}),l=n(379),d=n.n(l),c=n(866),f=n.n(c),p={insert:"head",singleton:!1},u=(d()(f(),p),f().locals,(0,n(900).Z)(o,i,[],!1,null,null,null));u.options.__file="registry/lib/components/feeds/filter/FilterTypeSwitch.vue";var b=u.exports},900:function(e,t,n){"use strict";function i(e,t,n,i,r,s,a,o){var l,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),i&&(d.functional=!0),s&&(d._scopeId="data-v-"+s),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=l):r&&(l=o?function(){r.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(d.functional){d._injectStyles=l;var c=d.render;d.render=function(e,t){return l.call(t),c(e,t)}}else{var f=d.beforeCreate;d.beforeCreate=f?[].concat(f,l):[l]}return{exports:e,options:d}}n.d(t,{Z:function(){return i}})},23:function(e){"use strict";e.exports=coreApis.componentApis.feeds.api},407:function(e){"use strict";e.exports=coreApis.settings},569:function(e){"use strict";e.exports=coreApis.spinQuery},643:function(e){"use strict";e.exports=coreApis.ui},109:function(e){"use strict";e.exports=coreApis.utils}},i={};function r(e){var t=i[e];if(void 0!==t)return t.exports;var s=i[e]={id:e,exports:{}};return n[e](s,s.exports,r),s.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"==typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"==typeof n.then)return n}var s=Object.create(null);r.r(s);var a={};e=e||[null,t({}),t([]),t(t)];for(var o=2&i&&n;"object"==typeof o&&!~e.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((function(e){a[e]=function(){return n[e]}}));return a.default=function(){return n},r.d(s,a),s},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return function(){"use strict";r.d(s,{component:function(){return n}});const e=[{username:"title",text:"epTitle"},{username:"upName",text:["title","dynamic"]},{username:["username","repostUsername"],text:["text","repostText"]}],t={name:"feeds.contentFilters.patterns",displayName:"动态关键词过滤",setup:({addData:t})=>{t("feeds.contentFilters",(async t=>{const{getComponentSettings:n}=await Promise.resolve().then(r.t.bind(r,407,23)),{hasBlockedPattern:i}=await Promise.resolve().then(r.bind(r,151));t.push({filter:t=>{const{patterns:r}=n("feedsFilter").options;return t.filter((t=>{const n=e.find((e=>Object.values(e).every((e=>Array.isArray(e)?e.some((e=>e in t)):e in t)))),s=Object.fromEntries(Object.entries(n).map((([e,n])=>Array.isArray(n)?[e,n.map((e=>t[e]??"")).join("\n").trim()]:[e,t[n].trim()])));return r.every((e=>!i(e,s)))}))}})}))}},n={name:"feedsFilter",displayName:"动态过滤器",description:{"zh-CN":"按照类型或者关键词过滤动态首页的内容, 也可以移除动态页的一些侧边卡片."},entry:async()=>{const{select:e}=await Promise.resolve().then(r.t.bind(r,569,23)),t=await e(".home-container .left-panel");if(null===t)return;const n=await Promise.resolve().then(r.bind(r,135)),{mountVueComponent:i}=await Promise.resolve().then(r.t.bind(r,109,23));t.insertAdjacentElement("afterbegin",i(n).$el)},tags:[componentsTags.feeds],options:{types:{defaultValue:[],displayName:"过滤动态类型",hidden:!0},patterns:{defaultValue:[],displayName:"过滤关键词",hidden:!0},sideCards:{defaultValue:[],displayName:"过滤侧边栏",hidden:!0},specialTypes:{defaultValue:[],displayName:"过滤特殊动态类型",hidden:!0}},reload:()=>document.body.classList.remove("disable-feeds-filter"),unload:()=>document.body.classList.add("disable-feeds-filter"),urlInclude:[/^https:\/\/t\.bilibili\.com\/$/],plugin:t,commitHash:"bb92efd851dd2cc2f00ec919b5b8b6184f7ce60a",coreVersion:"2.1.4"}}(),s=s.component}()}));