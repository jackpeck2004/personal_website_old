(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={pushHash:function(e){if(e=e?0===e.indexOf("#")?e:"#"+e:"",history.pushState){var t=window.location;history.pushState(null,null,e?t.pathname+t.search+e:t.pathname+t.search)}else location.hash=e},getHash:function(){return window.location.hash.replace(/^#/,"")},filterElementInContainer:function(e){return function(t){return e.contains?e!=t&&e.contains(t):!!(16&e.compareDocumentPosition(t))}},scrollOffset:function(e,t){return e===document?t.getBoundingClientRect().top+(window.scrollY||window.pageYOffset):"relative"===getComputedStyle(e).position?t.offsetTop:t.getBoundingClientRect().top+e.scrollTop}}},18:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=s(n(13)),i=s(n(49)),a=s(n(35));function s(e){return e&&e.__esModule?e:{default:e}}var l={},u=void 0;t.default={unmount:function(){l={}},register:function(e,t){l[e]=t},unregister:function(e){delete l[e]},get:function(e){return l[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return u=e},getActiveLink:function(){return u},scrollTo:function(e,t){var n=this.get(e);if(n){var s=(t=o({},t,{absolute:!1})).containerId,l=t.container,u=void 0;u=s?document.getElementById(s):l&&l.nodeType?l:document,a.default.registered.begin&&a.default.registered.begin(e,n),t.absolute=!0;var c=r.default.scrollOffset(u,n)+(t.offset||0);if(!t.smooth)return u===document?window.scrollTo(0,c):u.scrollTop=c,void(a.default.registered.end&&a.default.registered.end(e,n));i.default.animateTopScroll(c,t,e,n)}else console.warn("target Element not found")}}},19:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Helpers=t.ScrollElement=t.ScrollLink=t.animateScroll=t.scrollSpy=t.Events=t.scroller=t.Element=t.Button=t.Link=void 0;var o=d(n(91)),r=d(n(95)),i=d(n(96)),a=d(n(18)),s=d(n(35)),l=d(n(33)),u=d(n(49)),c=d(n(32)),f=d(n(51)),p=d(n(97));function d(e){return e&&e.__esModule?e:{default:e}}t.Link=o.default,t.Button=r.default,t.Element=i.default,t.scroller=a.default,t.Events=s.default,t.scrollSpy=l.default,t.animateScroll=u.default,t.ScrollLink=c.default,t.ScrollElement=f.default,t.Helpers=p.default,t.default={Link:o.default,Button:r.default,Element:i.default,scroller:a.default,Events:s.default,scrollSpy:l.default,animateScroll:u.default,ScrollLink:c.default,ScrollElement:f.default,Helpers:p.default}},234:function(e,t,n){__NEXT_REGISTER_PAGE("/home",function(){return e.exports=n(64),{page:e.exports.default}})},32:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=c(n(0)),a=(c(n(30)),c(n(13)),c(n(33))),s=c(n(18)),l=c(n(7)),u=c(n(50));function c(e){return e&&e.__esModule?e:{default:e}}var f={to:l.default.string.isRequired,containerId:l.default.string,container:l.default.object,activeClass:l.default.string,spy:l.default.bool,smooth:l.default.oneOfType([l.default.bool,l.default.string]),offset:l.default.number,delay:l.default.number,isDynamic:l.default.bool,onClick:l.default.func,duration:l.default.oneOfType([l.default.number,l.default.func]),absolute:l.default.bool,onSetActive:l.default.func,onSetInactive:l.default.func,ignoreCancelEvents:l.default.bool,hashSpy:l.default.bool};t.default=function(e,t){var n=t||s.default,l=function(t){function s(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e));return c.call(t),t.state={active:!1},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(s,i.default.PureComponent),r(s,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e&&!t?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();a.default.isMounted(e)||a.default.mount(e),this.props.hashSpy&&(u.default.isMounted()||u.default.mount(n),u.default.mapContainer(this.props.to,e)),a.default.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){a.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=o({},this.props);for(var r in f)n.hasOwnProperty(r)&&delete n[r];return n.className=t,n.onClick=this.handleClick,i.default.createElement(e,n)}}]),s}(),c=function(){var e=this;this.scrollTo=function(t,r){n.scrollTo(t,o({},e.state,r))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.spyHandler=function(t){var o=e.getScrollSpyContainer();if(!u.default.isMounted()||u.default.isInitialized()){var r=e.props.to,i=null,a=0,s=0,l=0;if(o.getBoundingClientRect)l=o.getBoundingClientRect().top;if(!i||e.props.isDynamic){if(!(i=n.get(r)))return;var c=i.getBoundingClientRect();s=(a=c.top-l+t)+c.height}var f=t-e.props.offset,p=f>=Math.floor(a)&&f<Math.floor(s),d=f<Math.floor(a)||f>=Math.floor(s),h=n.getActiveLink();d&&(r===h&&n.setActiveLink(void 0),e.props.hashSpy&&u.default.getHash()===r&&u.default.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive(r,i))),!p||h===r&&!1!==e.state.active||(n.setActiveLink(r),e.props.hashSpy&&u.default.changeHash(r),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(r,i)))}}};return l.propTypes=f,l.defaultProps={offset:0},l}},33:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(92),i=(o=r)&&o.__esModule?o:{default:o},a=n(34);var s={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e){if(e){var t=function(e){return(0,i.default)(e,66)}(function(t){s.scrollHandler(e)});s.scrollSpyContainers.push(e),(0,a.addPassiveEventListener)(e,"scroll",t)}},isMounted:function(e){return-1!==s.scrollSpyContainers.indexOf(e)},currentPositionY:function(e){if(e===document){var t=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop}return e.scrollTop},scrollHandler:function(e){(s.scrollSpyContainers[s.scrollSpyContainers.indexOf(e)].spyCallbacks||[]).forEach(function(t){return t(s.currentPositionY(e))})},addStateHandler:function(e){s.spySetState.push(e)},addSpyHandler:function(e,t){var n=s.scrollSpyContainers[s.scrollSpyContainers.indexOf(t)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(e),e(s.currentPositionY(t))},updateStates:function(){s.spySetState.forEach(function(e){return e()})},unmount:function(e,t){s.scrollSpyContainers.forEach(function(e){return e.spyCallbacks&&e.spyCallbacks.length&&e.spyCallbacks.splice(e.spyCallbacks.indexOf(t),1)}),s.spySetState&&s.spySetState.length&&s.spySetState.splice(s.spySetState.indexOf(e),1),document.removeEventListener("scroll",s.scrollHandler)},update:function(){return s.scrollSpyContainers.forEach(function(e){return s.scrollHandler(e)})}};t.default=s},34:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addPassiveEventListener=function(e,t,n){var o=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}();e.addEventListener(t,n,!!o&&{passive:!0})},t.removePassiveEventListener=function(e,t,n){e.removeEventListener(t,n)}},35:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={registered:{},scrollEvent:{register:function(e,t){o.registered[e]=t},remove:function(e){o.registered[e]=null}}};t.default=o},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=(s(n(13)),s(n(93))),i=s(n(94)),a=s(n(35));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return r.default[e.smooth]||r.default.defaultEasing},u=function(){if("undefined"!=typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame}()||function(e,t,n){window.setTimeout(e,n||1e3/60,(new Date).getTime())},c=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollTop;var n=void 0!==window.pageXOffset,o="CSS1Compat"===(document.compatMode||"");return n?window.pageYOffset:o?document.documentElement.scrollTop:document.body.scrollTop},f=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},p=function(e,t,n,o){if(t.data=t.data||{currentPositionY:0,startPositionY:0,targetPositionY:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,deltaTop:null,percent:null,delayTimeout:null},window.clearTimeout(t.data.delayTimeout),i.default.subscribe(function(){t.data.cancel=!0}),f(t),t.data.start=null,t.data.cancel=!1,t.data.startPositionY=c(t),t.data.targetPositionY=t.absolute?e:e+t.data.startPositionY,t.data.startPositionY!==t.data.targetPositionY){var r;t.data.deltaTop=Math.round(t.data.targetPositionY-t.data.startPositionY),t.data.duration=("function"==typeof(r=t.duration)?r:function(){return r})(t.data.deltaTop),t.data.duration=isNaN(parseFloat(t.data.duration))?1e3:parseFloat(t.data.duration),t.data.to=n,t.data.target=o;var s=l(t),p=function e(t,n,o){var r=n.data;if(n.ignoreCancelEvents||!r.cancel)if(r.deltaTop=Math.round(r.targetPositionY-r.startPositionY),null===r.start&&(r.start=o),r.progress=o-r.start,r.percent=r.progress>=r.duration?1:t(r.progress/r.duration),r.currentPositionY=r.startPositionY+Math.ceil(r.deltaTop*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?r.containerElement.scrollTop=r.currentPositionY:window.scrollTo(0,r.currentPositionY),r.percent<1){var i=e.bind(null,t,n);u.call(window,i)}else a.default.registered.end&&a.default.registered.end(r.to,r.target,r.currentPositionY);else a.default.registered.end&&a.default.registered.end(r.to,r.target,r.currentPositionY)}.bind(null,s,t);t&&t.delay>0?t.data.delayTimeout=window.setTimeout(function(){u.call(window,p)},t.delay):u.call(window,p)}else a.default.registered.end&&a.default.registered.end(t.data.to,t.data.target,t.data.currentPositionY)},d=function(e){return(e=o({},e)).data=e.data||{currentPositionY:0,startPositionY:0,targetPositionY:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,deltaTop:null,percent:null,delayTimeout:null},e.absolute=!0,e};t.default={animateTopScroll:p,getAnimationType:l,scrollToTop:function(e){p(0,d(e))},scrollToBottom:function(e){e=d(e),f(e),p(function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight);var n=document.body,o=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)}(e),e)},scrollTo:function(e,t){p(e,d(t))},scrollMore:function(e,t){t=d(t),f(t),p(c(t)+e,t)}}},50:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(34);var o,r=n(13),i=(o=r)&&o.__esModule?o:{default:o};var a={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,t){this.containers[e]=t},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,t=this.getHash();t?window.setTimeout(function(){e.scrollTo(t,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,t){var n=this.scroller;if(n.get(e)&&(t||e!==n.getActiveLink())){var o=this.containers[e]||document;n.scrollTo(e,{container:o})}},getHash:function(){return i.default.getHash()},changeHash:function(e){this.isInitialized()&&i.default.getHash()!==e&&i.default.pushHash(e)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};t.default=a},51:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=l(n(0)),a=(l(n(30)),l(n(18))),s=l(n(7));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,i.default.Component),r(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentWillReceiveProps",value:function(e){this.props.name!==e.name&&this.registerElems(e.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;a.default.unregister(this.props.name)}},{key:"registerElems",value:function(e){a.default.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return i.default.createElement(e,o({},this.props,{parentBindings:this.childBindings}))}}]),n}();return t.propTypes={name:s.default.string,id:s.default.string},t}},64:function(e,t,n){"use strict";n.r(t);var o=n(3),r=n.n(o),i=n(0),a=n.n(i),s=n(14),l=n.n(s),u=n(19);t.default=function(){return a.a.createElement("div",{className:"jsx-1224270312"},a.a.createElement("div",{className:"jsx-1224270312 pannel1"},a.a.createElement("p",{className:"jsx-1224270312 header"},"Giacomo Pasin")),a.a.createElement("div",{className:"jsx-1224270312 pannel1__readMore"},a.a.createElement(l.a,null,a.a.createElement("a",{onClick:function(){return e="pannel2",void u.scroller.scrollTo(e,{duration:1e3,delay:10,smooth:!0,offset:0});var e},className:"jsx-1224270312 readMore"},"Read More"))),a.a.createElement(u.Element,{name:"pannel2"},a.a.createElement("div",{className:"jsx-1224270312 pannel2"},a.a.createElement("h1",{className:"jsx-1224270312"},"About me"))),a.a.createElement(r.a,{styleId:"1224270312",css:[".pannel1{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:85vh;}",".pannel2{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;}",".header{font-size:80px;font-family:arial;-webkit-letter-spacing:20px;-moz-letter-spacing:20px;-ms-letter-spacing:20px;letter-spacing:20px;text-transform:uppercase;color:black;}",".pannel1__readMore{text-transform:uppercase;font-size:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15vh;padding-top:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:whitesmoke;-webkit-letter-spacing:20px;-moz-letter-spacing:20px;-ms-letter-spacing:20px;letter-spacing:20px;}",".readMore{-webkit-text-decoration:none;text-decoration:none;color:white;font-weight:lighter;}",".readMore:hover{cursor:pointer;}"]}))}},91:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(0)),r=i(n(32));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.render=function(){return o.default.createElement("a",r.props,r.props.children)},a(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),t}();t.default=(0,r.default)(s)},92:function(e,t,n){(function(t){var n="Expected a function",o=NaN,r="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,p=c||f||Function("return this")(),d=Object.prototype.toString,h=Math.max,y=Math.min,m=function(){return p.Date.now()};function v(e,t,o){var r,i,a,s,l,u,c=0,f=!1,p=!1,d=!0;if("function"!=typeof e)throw new TypeError(n);function v(t){var n=r,o=i;return r=i=void 0,c=t,s=e.apply(o,n)}function w(e){var n=e-u;return void 0===u||n>=t||n<0||p&&e-c>=a}function O(){var e=m();if(w(e))return _(e);l=setTimeout(O,function(e){var n=t-(e-u);return p?y(n,a-(e-c)):n}(e))}function _(e){return l=void 0,d&&r?v(e):(r=i=void 0,s)}function S(){var e=m(),n=w(e);if(r=arguments,i=this,u=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(O,t),f?v(e):s}(u);if(p)return l=setTimeout(O,t),v(u)}return void 0===l&&(l=setTimeout(O,t)),s}return t=b(t)||0,g(o)&&(f=!!o.leading,a=(p="maxWait"in o)?h(b(o.maxWait)||0,t):a,d="trailing"in o?!!o.trailing:d),S.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=u=i=l=void 0},S.flush=function(){return void 0===l?s:_(m())},S}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&d.call(e)==r}(e))return o;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=s.test(e);return n||l.test(e)?u(e.slice(2),n?2:8):a.test(e)?o:+e}e.exports=function(e,t,o){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(n);return g(o)&&(r="leading"in o?!!o.leading:r,i="trailing"in o?!!o.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})}}).call(this,n(88))},93:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={defaultEasing:function(e){return e<.5?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}},94:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(34),r=["mousedown","mousewheel","touchmove","keydown"];t.default={subscribe:function(e){return"undefined"!=typeof document&&r.forEach(function(t){return(0,o.addPassiveEventListener)(document,t,e)})}}},95:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=a(n(0)),i=a(n(32));function a(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),o(t,[{key:"render",value:function(){return r.default.createElement("input",this.props,this.props.children)}}]),t}();t.default=(0,i.default)(s)},96:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=l(n(0)),a=l(n(51)),s=l(n(7));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"render",value:function(){var e=this,t=o({},this.props);return t.parentBindings&&delete t.parentBindings,i.default.createElement("div",o({},t,{ref:function(t){e.props.parentBindings.domNode=t}}),this.props.children)}}]),t}();u.propTypes={name:s.default.string,id:s.default.string},t.default=(0,a.default)(u)},97:function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),u=(n(30),n(13),n(33)),c=n(18),f=n(7),p=n(50),d={to:f.string.isRequired,containerId:f.string,container:f.object,activeClass:f.string,spy:f.bool,smooth:f.oneOfType([f.bool,f.string]),offset:f.number,delay:f.number,isDynamic:f.bool,onClick:f.func,duration:f.oneOfType([f.number,f.func]),absolute:f.bool,onSetActive:f.func,onSetInactive:f.func,ignoreCancelEvents:f.bool,hashSpy:f.bool},h={Scroll:function(e,t){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=t||c,f=function(t){function c(e){i(this,c);var t=a(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));return h.call(t),t.state={active:!1},t}return s(c,l.Component),r(c,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();u.isMounted(e)||u.mount(e),this.props.hashSpy&&(p.isMounted()||p.mount(n),p.mapContainer(this.props.to,e)),this.props.spy&&u.addStateHandler(this.stateHandler),u.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){u.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=o({},this.props);for(var r in d)n.hasOwnProperty(r)&&delete n[r];return n.className=t,n.onClick=this.handleClick,l.createElement(e,n)}}]),c}(),h=function(){var e=this;this.scrollTo=function(t,r){n.scrollTo(t,o({},e.state,r))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.stateHandler=function(){n.getActiveLink()!==e.props.to&&(null!==e.state&&e.state.active&&e.props.onSetInactive&&e.props.onSetInactive(),e.setState({active:!1}))},this.spyHandler=function(t){var o=e.getScrollSpyContainer();if(!p.isMounted()||p.isInitialized()){var r=e.props.to,i=null,a=0,s=0,l=0;if(o.getBoundingClientRect)l=o.getBoundingClientRect().top;if(!i||e.props.isDynamic){if(!(i=n.get(r)))return;var c=i.getBoundingClientRect();s=(a=c.top-l+t)+c.height}var f=t-e.props.offset,d=f>=Math.floor(a)&&f<Math.floor(s),h=f<Math.floor(a)||f>=Math.floor(s),y=n.getActiveLink();return h?(r===y&&n.setActiveLink(void 0),e.props.hashSpy&&p.getHash()===r&&p.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive()),u.updateStates()):d&&y!==r?(n.setActiveLink(r),e.props.hashSpy&&p.changeHash(r),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(r)),u.updateStates()):void 0}}};return f.propTypes=d,f.defaultProps={offset:0},f},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var t=function(t){function n(e){i(this,n);var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return s(n,l.Component),r(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentWillReceiveProps",value:function(e){this.props.name!==e.name&&this.registerElems(e.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;c.unregister(this.props.name)}},{key:"registerElems",value:function(e){c.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return l.createElement(e,o({},this.props,{parentBindings:this.childBindings}))}}]),n}();return t.propTypes={name:f.string,id:f.string},t}};e.exports=h}},[[234,1,0]]]);