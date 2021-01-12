(()=>{"use strict";var t={23:t=>{t.exports=JSON.parse('{"enemy":[{"type":"basic","amount":10,"time-in-between-ms":500,"delay":1600},{"type":"fast","amount":5,"delay":0,"time-in-between-ms":400},{"type":"strong","amount":5,"delay":6200,"time-in-between-ms":800}],"path":[{"x":-50,"y":-50},{"x":100,"y":100},{"x":200,"y":300},{"x":700,"y":400},{"x":690,"y":250},{"x":800,"y":250},{"x":850,"y":200},{"x":900,"y":100},{"x":950,"y":150},{"x":1000,"y":175},{"x":1000,"y":200},{"x":1100,"y":350},{"x":1250,"y":200},{"x":1300,"y":200},{"x":1350,"y":300},{"x":1400,"y":400},{"x":1200,"y":500},{"x":1000,"y":600},{"x":500,"y":600},{"x":450,"y":550},{"x":300,"y":650},{"x":400,"y":700},{"x":1000,"y":750},{"x":1300,"y":800},{"x":1500,"y":850},{"x":1600,"y":900}],"waves":[0,50],"waveLocation":{"x":1500,"y":50},"spots":[{"x":120,"y":20},{"x":80,"y":220},{"x":420,"y":240},{"x":740,"y":100},{"x":1120,"y":160},{"x":1320,"y":560},{"x":340,"y":480},{"x":480,"y":820},{"x":740,"y":840},{"x":1200,"y":900},{"x":1400,"y":740},{"x":1200,"y":360},{"x":889,"y":479}]}')},197:(t,e,s)=>{s.d(e,{Z:()=>a});var i=s(645),n=s.n(i)()((function(t){return t[1]}));n.push([t.id,"* {\r\n\tmargin:0;\r\n\tpadding:0;\r\n\tbox-sizing: border-box;\r\n}\r\nbody {\r\n\tbackground-color: black;\r\n}\r\ncanvas {\r\n\tposition:absolute;\r\n\tleft:0;\r\n\ttop:0;\r\n}",""]);const a=n},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var s=t(e);return e[2]?"@media ".concat(e[2]," {").concat(s,"}"):s})).join("")},e.i=function(t,s,i){"string"==typeof t&&(t=[[null,t,""]]);var n={};if(i)for(var a=0;a<this.length;a++){var h=this[a][0];null!=h&&(n[h]=!0)}for(var o=0;o<t.length;o++){var r=[].concat(t[o]);i&&n[r[0]]||(s&&(r[2]?r[2]="".concat(s," and ").concat(r[2]):r[2]=s),e.push(r))}},e}},202:(t,e,s)=>{s.r(e),s.d(e,{default:()=>h});var i=s(379),n=s.n(i),a=s(197);n()(a.Z,{insert:"head",singleton:!1});const h=a.Z.locals||{}},379:(t,e,s)=>{var i,n=function(){var t={};return function(e){if(void 0===t[e]){var s=document.querySelector(e);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(t){s=null}t[e]=s}return t[e]}}(),a=[];function h(t){for(var e=-1,s=0;s<a.length;s++)if(a[s].identifier===t){e=s;break}return e}function o(t,e){for(var s={},i=[],n=0;n<t.length;n++){var o=t[n],r=e.base?o[0]+e.base:o[0],l=s[r]||0,c="".concat(r," ").concat(l);s[r]=l+1;var d=h(c),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(u)):a.push({identifier:c,updater:x(u,e),references:1}),i.push(c)}return i}function r(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var a=s.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var h=n(t.insert||"head");if(!h)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");h.appendChild(e)}return e}var l,c=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function d(t,e,s,i){var n=s?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=c(e,n);else{var a=document.createTextNode(n),h=t.childNodes;h[e]&&t.removeChild(h[e]),h.length?t.insertBefore(a,h[e]):t.appendChild(a)}}function u(t,e,s){var i=s.css,n=s.media,a=s.sourceMap;if(n?t.setAttribute("media",n):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var y=null,p=0;function x(t,e){var s,i,n;if(e.singleton){var a=p++;s=y||(y=r(e)),i=d.bind(null,s,a,!1),n=d.bind(null,s,a,!0)}else s=r(e),i=u.bind(null,s,e),n=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(s)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else n()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var s=o(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<s.length;i++){var n=h(s[i]);a[n].references--}for(var r=o(t,e),l=0;l<s.length;l++){var c=h(s[l]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}s=r}}}},693:(t,e,s)=>{const{GAME_WIDTH:i,GAME_HEIGHT:n}=s(556);t.exports=class{constructor(t=i/2,e=n/2,s=2.5){this.x=t,this.y=e,this.scale=.8,this.scalingBounds=[.2,20],this.speed=s,this.xv=0,this.yv=0,this.friction=.6}roundTo(t,e){return Math.round(t*10**e)/10**e}zoomIn(){this.scale+=.2,this.scale=this.roundTo(this.scale,2)>=this.scalingBounds[1]?this.scalingBounds[0]:this.roundTo(this.scale,2)}zoomOut(){this.scale-=.2,this.scale=this.roundTo(this.scale,2)<=this.scalingBounds[0]?this.scalingBounds[0]:this.roundTo(this.scale,2)}interp(t,e,s){s<1/30&&(this.xv+=.45*(t-this.x)*s*this.speed,this.yv+=.45*(e-this.y)*s*this.speed,this.xv+=.95*(i/2-this.x)*s*this.speed*5,this.yv+=.95*(n/2-this.y)*s*this.speed*5,this.xv*=Math.pow(this.friction,60*s),this.yv*=Math.pow(this.friction,60*s),this.x+=this.xv,this.y+=this.yv)}setTo(t,e){this.x=t,this.y=e}}},688:(t,e,s)=>{const i=s(17),n=s(131),a=s(198);t.exports={Basic:i,Fast:n,Strong:a}},17:(t,e,s)=>{const{BASIC_ENEMY_COLOR:i,ENEMY_STATS_WIDTH:n,ENEMY_STATS_HEIGHT:a}=s(556),h=s(503);t.exports=class{constructor(t,e=5,s=50){this.pathIndex=1,this.path=t,this.x=this.lastPath.x,this.y=this.lastPath.y,this.radius=s/2,this.speed=e,this.color=i,this.accuracy=5,this.calculateVelocity(),this.health=100,this.showStats=!1,this.type="Basic"}lerp(t,e,s){return t*(1-s)+e*s}findAngle(){return Math.atan2(this.currentPath.y-this.lastPath.y,this.currentPath.x-this.lastPath.x)}calculateVelocity(){this.angle=this.findAngle(),this.xv=this.speed*Math.cos(this.angle)/this.accuracy,this.yv=this.speed*Math.sin(this.angle)/this.accuracy}update(){for(let t=0;t<this.accuracy;t++)this.x+=this.xv,this.y+=this.yv,this.onPath&&(this.pathIndex++,this.x=this.lastPath.x,this.y=this.lastPath.y,this.currentPath||(this.pathIndex=1,this.x=this.path[0].x,this.y=this.path[0].y),this.calculateVelocity())}get roundPos(){return{x:Math.round(this.x),y:Math.round(this.y)}}drawPlayer(t,e,s){t.fillStyle=e,t.beginPath();const i=h(this.x,this.y,s);t.arc(i.x,i.y,this.radius*s.scale,0,2*Math.PI),t.fill()}showEnemyStats(t,e){t.globalAlpha=.5,t.fillStyle=this.color;const s=h(this.x,this.y,e);t.fillRect(s.x-n/2,s.y,n,a),t.fillStyle="white",t.fillRect(s.x-n/2,s.y,n,a),t.globalAlpha=1,t.fillStyle="black",t.font=28*e.scale+"px sans-serif",t.fillStyle="red",t.textAlign="center",t.textBaseline="middle",t.fillText(`${Math.round(this.health)}`,s.x,s.y),t.fillStyle="black",t.fillText(`type: ${this.type}`,s.x,Math.round(s.y+a/3)),t.fillText(`speed: ${Math.round(4*this.speed)}`,s.x,Math.round(s.y+a-a/3))}render(t,e){this.drawPlayer(t,this.color,e),this.showStats&&this.showEnemyStats(t,e)}get lastPath(){return this.path[this.pathIndex-1]}get onPath(){return Math.abs(this.currentPath.x-this.roundPos.x)<2&&Math.abs(this.currentPath.y-this.roundPos.y)<2}get nextPath(){return this.path[this.pathIndex+1]}get currentPath(){return this.path[this.pathIndex]}}},131:(t,e,s)=>{const i=s(17),{FAST_ENEMY_COLOR:n}=s(556);t.exports=class extends i{constructor(t,e=7,s=45){super(t,e,s),this.color=n,this.type="Fast"}}},198:(t,e,s)=>{const i=s(17),{STRONG_ENEMY_COLOR:n}=s(556);t.exports=class extends i{constructor(t,e=4,s=55){super(t,e,s),this.color=n,this.type="Strong"}}},565:(t,e,s)=>{const i=s(736),n=s(140),a=s(693),h=s(1),o=s(711),{BACKGROUND_COLOR:r,SIMULATION_RATE:l,CONTROLS:c}=s(556),d=s(662),u=s(448);t.exports=class{constructor(){this.wave=0,this.towers=[],this.events=Object.create(null),this.fov=.1,this.camera=new a,this.map=s(23),this.path=this.map.path,this.pathObject=new n(this.path),this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.state=new h,this.makeSpots(),this.state.waveLocation=this.map.waveLocation,this.tick=0,this.startTime=window.performance.now(),this.mouse={x:0,y:0},this.scale=i(this.canvas),this.listen("resize",(()=>{this.scale=i(this.canvas)})),this.listen("mousemove",(t=>{const e=this.canvas.getBoundingClientRect();this.mouse.x=Math.round((t.pageX-e.left)/this.scale),this.mouse.y=Math.round((t.pageY-e.top)/this.scale)})),this.controls=c,this.listen("keydown",this.trackKeys.bind(this)),this.listen("keyup",this.trackKeys.bind(this)),this.listen("mousedown",(()=>{this.state.handleMouseDown(this.mouse,this.camera)})),document.body.appendChild(this.canvas)}trackKeys(t){t.repeat||this.controls[t.key.toLowerCase()]}makeSpots(){for(const t of this.map.spots)this.state.spots.push(new o(t.x,t.y))}newEvent(t,e){void 0===this.events[Math.round(e)]&&(this.events[Math.round(e)]=[]),this.events[Math.round(e)].push(t)}listen(t,e,s=window){s.addEventListener(t,e.bind(this))}stop(){this.afr&&window.cancelAnimationFrame(this.afr)}start(){u(this.path,this.map.enemy,this),this.lastTime=0,function t(e=0){this.delta=(e-this.lastTime)/1e3,this.lastTime=e,this.update(),this.render(),this.afr=requestAnimationFrame(t.bind(this))}.bind(this)()}render(){this.ctx.fillStyle=r,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.pathObject.render(this.ctx,this.camera),this.state.render(this.ctx,this.camera,this.path)}simulate(){this.state.simulate(this.mouse,this.camera)}panic(){this.tick=d(this.startTime)}update(){const t=d(this.startTime);let e=0;for(this.camera.interp(this.mouse.x,this.mouse.y,this.delta);this.tick<t;){if(this.events[this.tick]){for(const t of this.events[this.tick])t();delete this.events[this.tick]}if(this.simulate(),e>=2*l){this.panic();break}this.tick++,e++}}}},140:(t,e,s)=>{const i=s(503),{PATH_SIZE:n,PATH_INSIDE_COLOR:a}=s(556);t.exports=class{constructor(t){this.paths=t}idx(t){return this.paths[t]}lineToPaths(t,e){for(const{x:s,y:n}of this.paths){const a=i(s,n,e);t.lineTo(a.x,a.y)}}render(t,e){t.beginPath(),t.lineJoin="round",t.beginPath(),this.lineToPaths(t,e),t.strokeStyle=a,t.lineWidth=.8*n*e.scale,t.stroke()}}},711:(t,e,s)=>{const{SPOT_COLOR:i,SPOT_SIZE:n,TOWER_DISPLAY_WIDTH:a,TOWER_DISPLAY_HEIGHT:h}=s(556),o=s(890),r=s(503);t.exports=class{constructor(t,e){this.x=t,this.y=e,this.radius=n/2,this.color=i,this.tower=Math.random()<.5?null:new o(this.x,this.y)}get fill(){return`rgb(${this.color}, ${this.color}, ${this.color})`}get hasTower(){return null!==this.tower}update(t,e){const s=r(this.x,this.y,e),n=t.x-s.x,a=t.y-s.y;this.color=i,Math.abs(n)<50&&Math.abs(a)<50&&!this.hasTower&&Math.sqrt(n*n+a*a)<this.radius&&(this.color=255),this.hasTower&&this.tower.update()}drawSpot(t,e){t.fillStyle=this.fill,t.beginPath();const s=r(this.x,this.y,e);t.arc(s.x,s.y,this.radius*e.scale,0,2*Math.PI),t.fill()}drawTowerData(t,e){t.fillStyle="rgba(150, 150, 150, 0.2)";const s=r(this.x,this.y,e);t.beginPath(),t.arc(s.x,s.y,this.tower.fov/2*e.scale,0,2*Math.PI),t.fill()}drawSpotData(t,e){t.fillStyle="rgba(255, 255, 255, 0.5)";const s=r(this.x,this.y,e);t.textAlign="center",t.textBaseline="middle",t.font="40px Arial","down"===this.showData?(t.fillRect(s.x-a/2,s.y,a,h),t.fillStyle="black",t.fillText("TOWERS",s.x,s.y+50)):"up"===this.showData&&(t.fillRect(s.x-a/2,s.y,a,-h),t.fillStyle="black",t.fillText("TOWERS",s.x,s.y-50))}drawData(t,e){this.hasTower?this.drawTowerData(t,e):this.drawSpotData(t,e)}render(t,e){this.drawSpot(t,e),this.showData&&this.drawData(t,e),this.hasTower&&this.tower.render(t,e)}}},1:(t,e,s)=>{const{PATH_ENDS_COLOR:i,PATH_ENDS_SIZE:n,GAME_HEIGHT:a}=s(556),h=s(503);t.exports=class{constructor(){this.enemy=[],this.spots=[],this.wave=1,this.waveLocation={x:0,y:0}}intersect(t,e,s,i){const n=h(t.x,t.y,i),a=e.x-n.x,o=e.y-n.y;return!(Math.abs(a)>50||Math.abs(o)>50)&&Math.sqrt(a*a+o*o)<2*s}simulate(t,e){let s=null;for(let i=this.enemy.length-1;i>=0;i--){const n=this.enemy[i];n.update(),n.showStats=!1,null===s&&this.intersect({x:n.x,y:n.y},t,n.radius,e)&&(s=i),n.dead&&this.enemy.splice(i,1)}null!=s&&(this.enemy[s].showStats=!0);for(const s of this.spots)s.update(t,e)}handleMouseDown(t,e){let s=null;for(let i=this.spots.length-1;i>=0;i--){const n=this.spots[i];n.showData=null,null===s&&this.intersect({x:n.x,y:n.y},t,n.radius,e)&&(s=i)}if(null!=s){const t=this.spots[s];t.y<a/2+a/10?t.showData="down":t.showData="up"}}drawPathEnds(t,e,s){t.fillStyle=i,t.beginPath();const a=h(s[0].x,s[0].y,e);t.arc(a.x,a.y,n/2*e.scale,0,2*Math.PI),t.fill(),t.beginPath();const o=h(s[s.length-1].x,s[s.length-1].y,e);t.arc(o.x,o.y,n/2*e.scale,0,2*Math.PI),t.fill()}drawWaveText(t,e){const s=h(this.waveLocation.x,this.waveLocation.y,e);t.font="40px sans-serif",t.fillStyle="white",t.fillText(`Wave ${this.wave}`,s.x,s.y)}render(t,e,s){for(const s of this.spots)s.render(t,e);for(const s of this.enemy)s.render(t,e);this.drawPathEnds(t,e,s),this.drawWaveText(t,e)}}},890:(t,e,s)=>{const{TOWER_SIZE:i,TOWER_BARREL_WIDTH:n,TOWER_BARREL_HEIGHT:a,TOWER_ROTATE_SPEED:h,BASIC_TOWER_COLOR:o,BASIC_TOWER_FOV:r}=s(556),l=s(503);t.exports=class{constructor(t,e){this.x=t,this.y=e,this.angle=Math.round(360*Math.random()),this.rotateSpeed=h,this.radius=i/2,this.color=o,this.fov=r}update(){this.angle+=this.rotateSpeed,this.angle=this.angle%360}simulate(t){}render(t,e){const s=l(this.x,this.y,e);t.save(),t.translate(s.x,s.y),t.rotate(this.angle*Math.PI/180),t.fillStyle=this.color,t.beginPath(),t.arc(0,0,this.radius*e.scale,0,2*Math.PI),t.fill(),t.fillRect(0,-a/2,n,a),t.restore()}}},556:t=>{t.exports={GAME_WIDTH:1600,GAME_HEIGHT:900,BACKGROUND_COLOR:"black",LINE_DISTANCE:50,PATH_SIZE:75,SIMULATION_RATE:30,FAST_ENEMY_COLOR:"#19d4ab",BASIC_ENEMY_COLOR:"#2d2e2e",PATH_INSIDE_COLOR:"white",STRONG_ENEMY_COLOR:"#73020f",PATH_ENDS_COLOR:"#d40018",PATH_ENDS_SIZE:70,SPOT_COLOR:"33",BASIC_TOWER_FOV:400,SPOT_SIZE:65,CONTROLS:{i:"zoomin",o:"zoomout"},TOWER_ROTATE_SPEED:5,TOWER_DISPLAY_WIDTH:350,TOWER_DISPLAY_HEIGHT:200,ENEMY_STATS_WIDTH:150,ENEMY_STATS_HEIGHT:100,TOWER_LEVELS:[{name:"bronze",tiers:4,color:"33"},{name:"gold",tiers:4},{name:"diamond",tiers:4},{name:"ruby",tiers:4}],TOWER_TIERS:4,BASIC_TOWER_COLOR:"#474747",TOWER_SIZE:45,TOWER_BARREL_WIDTH:35,TOWER_BARREL_HEIGHT:20}},662:(t,e,s)=>{const{SIMULATION_RATE:i}=s(556);t.exports=function(t){return Math.ceil((window.performance.now()-t)*(i/1e3))}},503:(t,e,s)=>{const{GAME_WIDTH:i,GAME_HEIGHT:n}=s(556);t.exports=function(t,e,s){return{x:Math.round((t-s.x)*s.scale+i/2),y:Math.round((e-s.y)*s.scale+n/2)}}},736:(t,e,s)=>{const{GAME_WIDTH:i,GAME_HEIGHT:n}=s(556);t.exports=function(t,e=(()=>{})){if(t)return t.width!==i&&(t.width=i),t.height!==n&&(t.height=n),t.style.transform=`scale(${Math.min(window.innerWidth/i,window.innerHeight/n)})`,t.style.left=(window.innerWidth-i)/2+"px",t.style.top=(window.innerHeight-n)/2+"px",e(),Math.min(window.innerWidth/i,window.innerHeight/n)}},448:(t,e,s)=>{const i=s(688),n=s(662),{SIMULATION_RATE:a}=s(556);t.exports=function(t,e,s){function h(e,i,h,o){for(let l=1;l<i+1;l++)s.newEvent((()=>{s.state.enemy.push(new e(t))}),(r=o+l*h,n(s.startTime)+r/1e3*a));var r}for(const t of e){const{type:e,amount:s,delay:n}=t;"basic"===e?h(i.Basic,s,t["time-in-between-ms"],n):"fast"===e?h(i.Fast,s,t["time-in-between-ms"],n):"strong"===e&&h(i.Strong,s,t["time-in-between-ms"],n)}}}},e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={id:i,exports:{}};return t[i](n,n.exports,s),n.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s(202),(new(s(565))).start()})();