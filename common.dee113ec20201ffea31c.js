(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r={bubbles:{dur:1e3,circles:9,fn:(e,t,n)=>{const r=`${e*t/n-e}ms`,o=2*Math.PI*t/n;return{r:5,style:{top:`${9*Math.sin(o)}px`,left:`${9*Math.cos(o)}px`,"animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(e,t,n)=>{const r=t/n,o=`${e*r-e}ms`,i=2*Math.PI*r;return{r:5,style:{top:`${9*Math.sin(i)}px`,left:`${9*Math.cos(i)}px`,"animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:`${9-9*t}px`,"animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":`${e*t/n-e}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":`${e*t/n-e}ms`}})}}},KwJk:function(e,t,n){"use strict";n.d(t,"a",(function(){return createColorClasses})),n.d(t,"b",(function(){return getClassMap})),n.d(t,"c",(function(){return hostContext})),n.d(t,"d",(function(){return openURL}));const hostContext=(e,t)=>null!==t.closest(e),createColorClasses=e=>"string"==typeof e&&e.length>0?{"ion-color":!0,[`ion-color-${e}`]:!0}:void 0,getClassMap=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},r=/^[a-z][a-z0-9+\-.]*:/,openURL=async(e,t,n)=>{if(null!=e&&"#"!==e[0]&&!r.test(e)){const r=document.querySelector("ion-router");if(r)return null!=t&&t.preventDefault(),r.push(e,n)}return!1}},NqGI:function(e,t,n){"use strict";n.d(t,"a",(function(){return attachComponent})),n.d(t,"b",(function(){return detachComponent}));const attachComponent=async(e,t,n,r,o)=>{if(e)return e.attachViewToDom(t,n,o,r);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n;return r&&r.forEach(e=>i.classList.add(e)),o&&Object.assign(i,o),t.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i},detachComponent=(e,t)=>{if(t){if(e){const n=t.parentElement;return e.removeViewFromDom(n,t)}t.remove()}return Promise.resolve()}},Uwmq:function(e,t,n){"use strict";n.d(t,"a",(function(){return sanitizeDOMString}));const sanitizeDOMString=e=>{try{if("string"!=typeof e||""===e)return e;const t=document.createDocumentFragment(),n=document.createElement("div");t.appendChild(n),n.innerHTML=e,o.forEach(e=>{const n=t.querySelectorAll(e);for(let r=n.length-1;r>=0;r--){const e=n[r];e.parentNode?e.parentNode.removeChild(e):t.removeChild(e);const o=getElementChildren(e);for(let t=0;t<o.length;t++)sanitizeElement(o[t])}});const r=getElementChildren(t);for(let e=0;e<r.length;e++)sanitizeElement(r[e]);const i=document.createElement("div");i.appendChild(t);const c=i.querySelector("div");return null!==c?c.innerHTML:i.innerHTML}catch(t){return console.error(t),""}},sanitizeElement=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let n=e.attributes.length-1;n>=0;n--){const t=e.attributes.item(n),o=t.name;if(!r.includes(o.toLowerCase())){e.removeAttribute(o);continue}const i=t.value;null!=i&&i.toLowerCase().includes("javascript:")&&e.removeAttribute(o)}const t=getElementChildren(e);for(let n=0;n<t.length;n++)sanitizeElement(t[n])},getElementChildren=e=>null!=e.children?e.children:e.childNodes,r=["class","id","href","src","name","slot"],o=["script","style","iframe","meta","link","object","embed"]},fzvj:function(e,t,n){"use strict";n.d(t,"a",(function(){return hapticSelectionStart})),n.d(t,"b",(function(){return hapticSelectionChanged})),n.d(t,"c",(function(){return hapticSelectionEnd})),n.d(t,"d",(function(){return hapticSelection}));const hapticSelection=()=>{const e=window.TapticEngine;e&&e.selection()},hapticSelectionStart=()=>{const e=window.TapticEngine;e&&e.gestureSelectionStart()},hapticSelectionChanged=()=>{const e=window.TapticEngine;e&&e.gestureSelectionChanged()},hapticSelectionEnd=()=>{const e=window.TapticEngine;e&&e.gestureSelectionEnd()}}}]);