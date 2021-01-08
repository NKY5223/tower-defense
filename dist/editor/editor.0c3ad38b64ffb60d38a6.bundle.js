(()=>{"use strict";var e={901:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"* {\r\n\tmargin:0;\r\n\tpadding:0;\r\n\tbox-sizing: border-box;\r\n}\r\nbody {\r\n\tfont-size:16px;\r\n\tbackground-color: #b0b0b0;\r\n}\r\ncanvas {\r\n\tposition:absolute;\r\n\tleft:0;\r\n\ttop:0;\r\n\tcursor:none;\r\n}",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},39:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});var r=t(379),o=t.n(r),i=t(901);o()(i.Z,{insert:"head",singleton:!1});const a=i.Z.locals||{}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],d=n.base?c[0]+n.base:c[0],s=t[d]||0,l="".concat(d," ").concat(s);t[d]=s+1;var u=a(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:l,updater:m(f,n),references:1}),r.push(l)}return r}function d(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var s,l=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,p=0;function m(e,n){var t,r,o;if(n.singleton){var i=p++;t=h||(h=d(n)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=d(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var d=c(e,n),s=0;s<t.length;s++){var l=a(t[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=d}}}},556:e=>{e.exports={GAME_WIDTH:1600,GAME_HEIGHT:900,BACKGROUND_COLOR:"black",LINE_DISTANCE:50,PATH_SIZE:70,SIMULATION_RATE:30,FAST_ENEMY_COLOR:"#19d4ab",BASIC_ENEMY_COLOR:"#2d2e2e",PATH_INSIDE_COLOR:"white",PATH_ENDS_COLOR:"#470703",PATH_ENDS_SIZE:70,SPOT_COLOR:"33",SPOT_SIZE:65,CONTROLS:{i:"zoomin",o:"zoomout"}}},615:e=>{e.exports=function({mouse:e,ctx:n}){n.fillStyle="black",n.beginPath(),n.arc(e.x,e.y,3,0,2*Math.PI),n.fill()}},736:(e,n,t)=>{const{GAME_WIDTH:r,GAME_HEIGHT:o}=t(556);e.exports=function(e,n=(()=>{})){if(e)return e.width!==r&&(e.width=r),e.height!==o&&(e.height=o),e.style.transform=`scale(${Math.min(window.innerWidth/r,window.innerHeight/o)})`,e.style.left=(window.innerWidth-r)/2+"px",e.style.top=(window.innerHeight-o)/2+"px",n(),Math.min(window.innerWidth/r,window.innerHeight/o)}}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{t(39);const{BACKGROUND_COLOR:e,GAME_WIDTH:n,GAME_HEIGHT:r}=t(556),o=t(615),i=t(736),a=document.createElement("canvas"),c=a.getContext("2d"),d={x:0,y:0};l("resize",(()=>i(a))),l("mousemove",(e=>{if(!s||!a)return;const n=a.getBoundingClientRect();d.x=Math.round((e.pageX-n.left)/s),d.y=Math.round((e.pageY-n.top)/s)}),a);let s=Math.min(window.innerWidth/n,window.innerHeight/r);function l(e,n,t=window){t.addEventListener(e,n)}i(a,(()=>{s=Math.min(window.innerWidth/n,window.innerHeight/r)})),document.body.appendChild(a),function n(){c.fillStyle=e,c.fillRect(0,0,a.width,a.height),o({mouse:d,ctx:c}),requestAnimationFrame(n)}(),console.log("tower defense editor (by ZeroTix)")})()})();