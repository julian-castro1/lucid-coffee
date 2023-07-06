(()=>{"use strict";var e={947:(e,n,t)=>{t.d(n,{Z:()=>y});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),s=t(667),c=t.n(s),l=new URL(t(413),t.b),d=new URL(t(134),t.b),u=new URL(t(444),t.b),p=new URL(t(839),t.b),f=i()(r()),m=c()(l),h=c()(d),g=c()(u),b=c()(p);f.push([e.id,`@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(${m}); /* For IE6-8 */\n  src: local('Material Icons'),\n       local('MaterialIcons-Regular'),\n       url(${h}) format('woff2'),\n       url(${g}) format('woff'),\n       url(${b}) format('truetype');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Support for IE. */\n  font-feature-settings: 'liga';\n}\n`,""]);const y=f},20:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),i.push([e.id,"/* src/fonts.css */",""]);const s=i},28:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"*{\n    box-sizing: border-box;\n\n    margin: 0;\n    padding: 0;\n}\n\nbody{\n    background-color: #252525;\n\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n\n    font-family: 'Roboto', sans-serif;\n}\n.logo-cont{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 160px;\n    background-color: #000000;\n}\n.logo{\n    height: 80px;\n}\n\n.nav-bar{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 14px;\n    gap: 6%;\n\n    font-weight: 500;\n    width: 100%;\n    border-bottom: 1px solid #FF00B5;\n}\n.nav-bar-item{\n    color: #6F6F6F;\n    cursor: pointer;\n}\n#content{\n    flex: 1;\n}\n\n.about-us-image{\n    border: 2px solid #FF00B5;\n    border-radius: 30px;\n\n    height: max-content;\n    width: max-content;\n}\n.about-us-title{\n    font-size: 40px;\n}\n.about-us-page{\n    display: flex;\n    padding: 10%;\n    align-items: center;\n\n    color: #c5c5c5;\n    gap: 40px;\n}\n.about-us-right{\n    display: flex;\n    flex-direction: column;\n    align-items: left;\n    justify-content: center;\n\n    gap: 8px;\n}\n\n.home-page, .menu-page{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n\n    font-size: 40px;\n    font-weight: 100;\n    color: #FF00B5;\n}",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=o.base?c[0]+o.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=r(f,o);o.byIndex=s,n.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=o(e,r),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},693:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});var o=t(970);function r(){(0,o.Z)(),document.getElementById("about-us").style.color="#FF00B5",function(){console.log("displaying about us page");let e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("img"),o=document.createElement("h2"),r=document.createElement("p"),a=document.createElement("p"),i=document.createElement("p");t.setAttribute("src","https://cdn.shopify.com/s/files/1/0579/9323/2437/files/about_us_pic.jpg?v=1661821091&width=360"),t.setAttribute("alt","about us"),o.textContent="About Lucid Coffee Co.",r.textContent="Welcome to Lucid Coffee Co., a place where the upbeat, artistic energy of Austin finds a home in the heart of Houston. We are Julian and Rhianna, a vibrant couple in our mid-20s, who are passionate about sharing the unique blend of laid-back vibes and vibrant coffee culture that defines Austin. Our mission is to bring a taste of Austin's dynamic coffee scene to the busy professionals and energetic students of Houston, creating a hub where creativity meets productivity, and where bustling days can pause for a moment of tranquillity.",a.textContent="But we're not alone in this journey. Meet Aura, our loyal German Shepherd, and Maggie, our adorably charismatic Golden Doodle who also happens to be our cheerful mascot. They embody the spirit of Lucid Coffee Co. – welcoming, joyful, and full of life. When you're here, you may get a friendly nudge or a playful glance from them, ensuring your coffee experience is filled with warmth and friendliness.",i.textContent="As lovers of coffee, our passions extend beyond the café, encapsulating the thrilling world of Formula 1 racing and the inspiring diversity of art. These influences subtly weave their way into our coffee shop, shaping an environment that's as diverse and lively as our interests. So, come on in and experience a unique blend of Austin's charm and Houston's heart at Lucid Coffee Co. Let's share stories, passions, and of course, great coffee.",r.classList.add("about-us-description"),a.classList.add("about-us-description"),i.classList.add("about-us-description"),e.classList.add("about-us-page"),t.classList.add("about-us-image"),o.classList.add("about-us-title"),n.classList.add("about-us-right"),n.appendChild(o),n.appendChild(r),n.appendChild(a),n.appendChild(i),e.appendChild(t),e.appendChild(n),document.getElementById("content").appendChild(e)}()}},666:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});var o=t(970);function r(){(0,o.Z)(),document.getElementById("home").style.color="#FF00B5",function(){console.log("displaying home page");let e=document.createElement("div");e.classList.add("home-page"),e.innerHTML="This is the Home Page",document.getElementById("content").appendChild(e)}()}},970:(e,n,t)=>{t.d(n,{Z:()=>L});var o=t(379),r=t.n(o),a=t(795),i=t.n(a),s=t(569),c=t.n(s),l=t(565),d=t.n(l),u=t(216),p=t.n(u),f=t(589),m=t.n(f),h=t(28),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),r()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var b=t(947),y={};y.styleTagTransform=m(),y.setAttributes=d(),y.insert=c().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=p(),r()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals;var v=t(20),w={};function x(){Promise.resolve().then(t.bind(t,666)).then((e=>{e.default()})).catch((e=>{console.log("An error occurred while loading the home module.",e)}))}function E(){Promise.resolve().then(t.bind(t,83)).then((e=>{e.default()})).catch((e=>{console.log("An error occurred while loading the menu module.",e)}))}function C(){Promise.resolve().then(t.bind(t,693)).then((e=>{e.default()})).catch((e=>{console.log("An error occurred while loading the about us module.",e)}))}function L(){document.getElementById("content").innerHTML="",document.getElementById("home").style.color="#6F6F6F",document.getElementById("menu").style.color="#6F6F6F",document.getElementById("about-us").style.color="#6F6F6F"}w.styleTagTransform=m(),w.setAttributes=d(),w.insert=c().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=p(),r()(v.Z,w),v.Z&&v.Z.locals&&v.Z.locals,t(666),t(83),t(693),function(){let e=document.createElement("div"),n=document.createElement("img"),t=document.createElement("div"),o=document.createElement("span"),r=document.createElement("span"),a=document.createElement("span"),i=document.createElement("div");n.src="https://www.lucidcoffee.co/uploads/b/64d2e6576f12c24d4ef7850976a35d7d84959c62e6e94d52c0f1eea24bd551c2/logo_1688147373.png?width=400&optimize=medium",n.alt="logo",n.className="logo",e.className="logo-cont",t.className="nav-bar",o.className="nav-bar-item",o.innerHTML="Home",o.id="home",r.className="nav-bar-item",r.innerHTML="Menu",r.id="menu",a.className="nav-bar-item",a.innerHTML="About Us",a.id="about-us",i.id="content",e.appendChild(n),document.body.appendChild(e),document.body.appendChild(t),t.appendChild(o),t.appendChild(r),t.appendChild(a),document.body.appendChild(i),o.addEventListener("click",x),r.addEventListener("click",E),a.addEventListener("click",C)}(),x()},83:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});var o=t(970);function r(){(0,o.Z)(),document.getElementById("menu").style.color="#FF00B5",function(){console.log("displaying menu");let e=document.createElement("div");e.classList.add("menu-page"),e.innerHTML="This is the Menu Page",document.getElementById("content").appendChild(e)}()}},413:(e,n,t)=>{e.exports=t.p+"5f92d4295eda45eb7100.eot"},839:(e,n,t)=>{e.exports=t.p+"88813222b3d119bd4bf9.ttf"},444:(e,n,t)=>{e.exports=t.p+"a6631fc90972310cfc07.woff"},134:(e,n,t)=>{e.exports=t.p+"cc4b6e3fb62208d095dc.woff2"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,t(970)})();