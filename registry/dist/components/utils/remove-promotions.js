!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["utils/remove-promotions"]=n():e["utils/remove-promotions"]=n()}(globalThis,(()=>(()=>{var e,n,o={8:(e,n,o)=>{var t=o(218)((function(e){return e[1]}));t.push([e.id,'#slide_ad,\n.v-wrap .vcd,\n.ad-report,\n#home_popularize .l-con,\n#home_popularize .adpos,\n.gg-floor-module,\n.home-app-download,\n.bilibili-player-promote-wrap,\n.bili-header-m .nav-menu .nav-con .nav-item .text-red,\n.mobile-link-l,\n.video-page-game-card,\n.international-home .banner-card,\n.bypb-window .operate-card,\n.gg-window .operate-card,\n#reportFirst2 .extension,\n.video-page-special-card,\n.mascot,\n.rank-container .cm-module,\nbody:not(.preserve-event-banner) .activity-m,\nbody:not(.preserve-event-banner) .activity-m-v1,\nbody.remove-game-match-module .bili-wrapper > .home-match,\nbody.remove-game-match-module #reportFirst3,\n.home-content .ad-panel,\n.recommend-list .rec-list > :not(.video-page-card),\n.eva-extension-area,\n.eva-banner,\n.video-ad-creative-card,\n.bili-dyn-home--member .bili-dyn-ads,\n.video-page-special-card-small,\n.video-page-game-card-small,\n.video-page-operator-card-small,\n[data-be-promotion-mark],\nbody:not(.preserve-feed-goods) .dyn-goods,\n.desktop-download-tip,\n.adcard,\n.palette-button-adcard,\n.palette-button-wrap .adcard-content {\n  display: none !important;\n}\n\n.recommend-list .rec-list > :not(.video-page-card) + .video-page-card {\n  padding-top: 0 !important;\n}\n\n#home_popularize {\n  position: relative !important;\n}\n\n.popularize-module .online,\n.gg-window .online {\n  position: absolute !important;\n  top: 50% !important;\n  right: 0.5% !important;\n  transform: translateY(-100%) !important;\n}\n\n.gg-window .online {\n  right: 0 !important;\n  padding: 0 16px !important;\n}\n\n#reportFirst2 {\n  position: relative;\n  margin-bottom: 4px;\n}\n\n.blocked-ads {\n  width: 440px;\n  height: 220px;\n  display: flex;\n  color: #888;\n  background-color: rgba(136, 136, 136, 0.1333333333);\n  font-size: 24pt;\n  font-weight: 600;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.blocked-ads.new {\n  width: 100%;\n  height: 100%;\n  background-color: #eee;\n}\n\nbody.dark .blocked-ads.new {\n  background-color: #333;\n}\n\n.recommended-container .business-card {\n  position: absolute !important;\n  pointer-events: none !important;\n  opacity: 0 !important;\n}\n\n.recommended-container_floor-aside .container > *,\nbody:not(.preserve-feed-goods) .bili-dyn-content__orig__additional[\\:has\\(.dyn-goods\\)] {\n  margin: 0 !important;\n}\n\n.recommended-container_floor-aside .container > *,\nbody:not(.preserve-feed-goods) .bili-dyn-content__orig__additional:has(.dyn-goods) {\n  margin: 0 !important;\n}\n\n.feed-card[\\:has\\(.bili-video-card\\%20a\\[href*\\%3D\\%22cm.bilibili.com\\%22\\]\\)],\n.bili-video-card.is-rcmd[\\:has\\(a\\[href*\\%3D\\%22cm.bilibili.com\\%22\\]\\)],\n.bili-video-card__wrap[\\:has\\(a\\[href*\\%3D\\%22cm.bilibili.com\\%22\\]\\)],\nbody:not(.promotion-show-placeholder) :is(.bili-video-card.is-rcmd, .bili-feed4-layout .feed-card)[\\:not-has\\(.bili-video-card__wrap\\)] {\n  display: none !important;\n}\n\n.feed-card:has(.bili-video-card a[href*="cm.bilibili.com"]),\n.bili-video-card.is-rcmd:has(a[href*="cm.bilibili.com"]),\n.bili-video-card__wrap:has(a[href*="cm.bilibili.com"]),\nbody:not(.promotion-show-placeholder) :is(.bili-video-card.is-rcmd, .bili-feed4-layout .feed-card):not(:has(.bili-video-card__wrap)) {\n  display: none !important;\n}',""]),e.exports=t},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var o=e(n);return n[2]?"@media ".concat(n[2]," {").concat(o,"}"):o})).join("")},
// eslint-disable-next-line func-names
n.i=function(e,o,t){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(t)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);t&&r[s[0]]||(o&&(s[2]?s[2]="".concat(o," and ").concat(s[2]):s[2]=o),n.push(s))}},n}},438:(e,n,o)=>{var t=o(8);t&&t.__esModule&&(t=t.default),e.exports="string"==typeof t?t:t.toString()},451:e=>{function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id=451,e.exports=n},322:e=>{"use strict";e.exports='删除站内的各种广告. 包括首页的推广模块, 手机 app 推荐, 视频页面右侧的广告等. 注意: 首页推广模块删除后留下空白区域是正常现象, 如果觉得怪可以开启 \\`占位文本\\` 选项.\n\n- \\`占位文本\\`: 删除首页推广模块的广告后显示"🚫已屏蔽广告"来替代空白区域.\n- \\`保留活动横幅\\`: 保留视频页面的活动横幅.\n'},986:e=>{"use strict";e.exports=coreApis.settings},200:e=>{"use strict";e.exports=coreApis.spinQuery}},t={};function r(e){var n=t[e];if(void 0!==n)return n.exports;var i=t[e]={id:e,exports:{}};return o[e](i,i.exports,r),i.exports}n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(o,t){if(1&t&&(o=this(o)),8&t)return o;if("object"==typeof o&&o){if(4&t&&o.__esModule)return o;if(16&t&&"function"==typeof o.then)return o}var i=Object.create(null);r.r(i);var a={};e=e||[null,n({}),n([]),n(n)];for(var d=2&t&&o;"object"==typeof d&&!~e.indexOf(d);d=n(d))Object.getOwnPropertyNames(d).forEach((e=>a[e]=()=>o[e]));return a.default=()=>o,r.d(i,a),i},r.d=(e,n)=>{for(var o in n)r.o(n,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";r.d(i,{component:()=>e});const e=(0,coreApis.componentApis.define.defineComponentMetadata)({name:"removePromotions",displayName:"删除广告",entry:async e=>{let{settings:n,metadata:o}=e;const{addComponentListener:t}=await Promise.resolve().then(r.t.bind(r,986,23));if("https://www.bilibili.com/"===document.URL.replace(window.location.search,"")){const{selectAll:e,select:o}=await Promise.resolve().then(r.t.bind(r,200,23));o(".eva-extension-area").then((e=>{e&&(e.parentElement.style.margin="12px")})),e(".gg-pic").then((e=>{0!==e.length&&e.forEach((e=>{const o=e.parentElement;o.style.display="none";const t=[...o.parentElement.childNodes].indexOf(o)+1,r=o.parentElement.parentElement.querySelector(`.pic li:nth-child(${t})`);if(r){r.style.display="flex";const e=r.querySelector("a:not(.more-text)");e.insertAdjacentHTML("afterend",`\n            <div class="blocked-ads">${n.options.showPlaceholder?"🚫已屏蔽广告":""}</div>\n          `),e.style.visibility="hidden";[r.querySelector("a.more-text"),r.querySelector("img")].forEach((e=>e.style.display="none"))}}))})),o(".focus-carousel.home-slide").then((e=>{e&&dqa(e,".gg-icon,.bypb-icon").map((e=>e.parentElement.parentElement)).forEach((e=>{e.style.display="none",e.insertAdjacentHTML("afterend",`\n            <div class="blocked-ads new">${n.options.showPlaceholder?"🚫已屏蔽广告":""}</div>\n          `)}))}))}t(`${o.name}.preserveEventBanner`,(e=>{document.body.classList.toggle("preserve-event-banner",e)}),!0),t(`${o.name}.preserveFeedGoods`,(e=>{document.body.classList.toggle("preserve-feed-goods",e)}),!0),t(`${o.name}.preserveReplyNotice`,(e=>{document.body.classList.toggle("preserve-reply-notice",e)}),!0),t(`${o.name}.showPlaceholder`,(e=>{document.body.classList.toggle("promotion-show-placeholder",e)}),!0)},instantStyles:[{name:"removePromotions",style:()=>Promise.resolve().then(r.t.bind(r,438,23))}],tags:[componentsTags.utils],options:{showPlaceholder:{displayName:"占位文本",defaultValue:!0},preserveEventBanner:{displayName:"保留活动横幅",defaultValue:!1},preserveFeedGoods:{displayName:"保留动态商品推荐",defaultValue:!1}},commitHash:"55fb3f2157b163fc7108120ef1c6e614f477c098",coreVersion:"2.9.6",description:(()=>{const e=r(451);return{...Object.fromEntries(e.keys().map((n=>[n.match(/index\.(.+)\.md$/)[1],e(n)]))),"zh-CN":()=>Promise.resolve().then(r.t.bind(r,322,17)).then((e=>e.default))}})()})})(),i=i.component})()));