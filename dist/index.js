!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VubPreventBack=t():e.VubPreventBack=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(t,n,o){"use strict";function r(e){var t=void 0===e?"undefined":c(e);return"string"==t||"object"==t&&e instanceof String}function i(e,t){return function(n){if(n=n||window.event,e()){var o=t;return n.returnValue=o,o}}}function u(e,t){return function(n,o,r){!e()||e()&&confirm(t)?r():r(!1)}}Object.defineProperty(n,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n.createDirective=function(t){var n=t.message||"You have unsaved work. Are you sure you want to leave this page?";return{bind:function(t,o,c){function f(){e,y=!0}var a=o.value,s=o.modifiers,v=s["vue-router-disable"],d=s["beforeunload-disable"],p=s["tester-only"],l=n,b=function(){return!0};r(a)?l=a:((a=a||{}).message&&(l=a.message),a.tester&&(b=a.tester));var y=!1,m=function(){return y||!b()};if(p||t.addEventListener("input",f),!d){var x=i(m,l);window.addEventListener("beforeunload",x)}if(!v){var w=u(m,l);c.context.$options.beforeRouteLeave||(c.context.$options.__proto__.beforeRouteLeave=[]),c.context.$options.beforeRouteLeave.push(w)}t._vuePreventBackUnbind=function(){p||t.removeEventListener("input",f),d||window.removeEventListener("beforeunload",x),v||(c.context.$options.beforeRouteLeave.splice(c.context.$options.beforeRouteLeave.indexOf(w),1),0===c.context.$options.beforeRouteLeave.length&&delete c.context.$options.beforeRouteLeave)}},unbind:function(e,t,n){e._vuePreventBackUnbind(),delete e._vuePreventBackUnbind}}}},function(e,t,n){"use strict";function o(e,t){t=t||{},e.prototype.$isServer?e.directive(t.name||"prevent-back",{}):e.directive(t.name||"prevent-back",(0,r.createDirective)(t))}Object.defineProperty(t,"__esModule",{value:!0}),t.install=o;var r=n(0);"undefined"!=typeof window&&window.Vue&&o(window.Vue),t["default"]={install:o}}])});