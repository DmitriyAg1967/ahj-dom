(()=>{var t={145:(t,e,r)=>{t.exports=r.p+"goblin.png"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,r),s.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{"use strict";new class{constructor(t){this.size=t}start(){const t=document.getElementById("board_box");for(let e=0;e<this.size**2;e+=1){const e=document.createElement("div");e.classList="cell",t.appendChild(e)}const e=document.getElementsByClassName("cell");let r,n=0;const o=this.size**2-1;setInterval((()=>{r=Math.floor(Math.random()*(o+1)),r===n&&(r+=1,r>=o&&(r=0)),e[r].innerHTML='<img src="goblin.png">',e[n].innerHTML="",n=r}),900)}}(4).start(),r(145)})()})();