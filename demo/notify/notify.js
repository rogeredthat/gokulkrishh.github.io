
// Notify.js
// (c) 2015 Gokulakrishnan Kalaikovan
// Notify.js is freely distributable under the MIT license.

!function(e){"use strict";function n(e,n,t){setTimeout(function(){n.style.display="none",o(n)},t)}function o(e){for(var n=0;n<e.childNodes.length;n++)e.removeChild(e.childNodes[n])}var t,i;t=document.createElement("div"),t.className="notify-container",document.body.appendChild(t);var d={show:function(e,o,d){var c=d;"undefined"==typeof c&&(c=4e3),i=document.createElement("div"),i.innerHTML=e,t.style.display="block",i.className="notify "+o,t.appendChild(i),n(t,i,c)}};e.notify=d}("undefined"==typeof window?module.exports:window);
