!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["video/full-episode-title"]=e():t["video/full-episode-title"]=e()}(self,(function(){return function(){var t,e,n={324:function(t,e,n){var o=n(645)((function(t){return t[1]}));o.push([t.id,".multi-page .cur-list ul {\n  max-height: none !important;\n}\n.multi-page .cur-list li {\n  height: auto !important;\n}\n.multi-page .cur-list li a {\n  overflow: visible !important;\n  white-space: normal !important;\n}",""]),t.exports=o},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var u=this[i][0];null!=u&&(r[u]=!0)}for(var c=0;c<t.length;c++){var f=[].concat(t[c]);o&&r[f[0]]||(n&&(f[2]?f[2]="".concat(n," and ").concat(f[2]):f[2]=n),e.push(f))}},e}},916:function(t,e,n){var o=n(324);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()}},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var i=o[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var u={};t=t||[null,e({}),e([]),e(e)];for(var c=2&o&&n;"object"==typeof c&&!~t.indexOf(c);c=e(c))Object.getOwnPropertyNames(c).forEach((function(t){u[t]=function(){return n[t]}}));return u.default=function(){return n},r.d(i,u),i},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return n}});var t=coreApis.componentApis.styledComponent,e=coreApis.utils.urls;const n={...(0,t.toggleStyle)("fullEpisodeTitle",(()=>Promise.resolve().then(r.t.bind(r,916,23)))),displayName:"展开选集标题",description:{"zh-CN":"总是完全展开视频选集列表的标题, 注意对番剧无效."},tags:[componentsTags.video],urlInclude:e.videoUrls,commitHash:"bb92efd851dd2cc2f00ec919b5b8b6184f7ce60a",coreVersion:"2.1.4"}}(),i=i.component}()}));