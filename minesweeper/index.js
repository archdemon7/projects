!function(){"use strict";var e={};function t(e){const t=document.querySelector(".field"),s=e*e;t.style.gridTemplateColumns=`repeat(${e}, 1fr)`;for(let e=0;e<s;e++){const s=document.createElement("div");s.classList.add("cell"),s.setAttribute("number",e),t.append(s)}}function s(e,t,s){const n=e*e,c=new Array(n);for(let e=0;e<n;e++)c[e]=e<t?"bomb":"0";function a(e){for(let t=e.length-1;t>0;t--){let s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}}for(a(c);"bomb"==c[s];)a(c);return[...c.keys()].filter((e=>"bomb"==c[e]))}function n(e,t){return e.includes(t)}function c(e,t,s,c){let a=0;for(let o=-1;o<=1;o++)for(let l=-1;l<=1;l++)n(e,(t+l)*c+(s+o))&&t+l>=0&&t+l<c&&s+o>=0&&s+o<c&&a++;return a}function a(e,t,s,a,d,r,i,m){if(n(e,t))return s.target.classList.add("bomb"),void function(e,t){t.forEach((t=>{e[t].classList.contains("bomb")||e[t].classList.add("close-bomb")}))}(i,m);0==c(e,a,d,r)?(s.target.textContent=" ",s.target.classList.add("clicked","empty"),l(e,a,d,r,i)):(s.target.textContent=c(e,a,d,r),o(s.target,c(e,a,d,r)),s.target.classList.add("clicked"))}function o(e,t){switch(+t){case 1:e.style.color="#322feb";break;case 2:e.style.color="#36BC05";break;case 3:e.style.color="#FF3838";break;case 4:e.style.color="#1800f1";break;case 5:e.style.color="#7c4500";break;case 6:e.style.color="#069483";break;case 7:e.style.color="#000000";break;case 8:e.style.color="#b7b2b2"}}function l(e,t,s,n,a){for(let d=-1;d<=1;d++)for(let r=-1;r<=1;r++)if(t+r>=0&&t+r<n&&s+d>=0&&s+d<n){const i=(t+r)*n+s+d;if(a[i].classList.contains("bomb"))return;" "!==a[i].textContent&&(0==c(e,t+r,s+d,n)?(a[i].textContent=" ",a[i].classList.contains("flag")&&a[i].classList.remove("flag"),a[i].classList.add("clicked","empty"),l(e,t+r,s+d,n,a)):(a[i].textContent=c(e,t+r,s+d,n),o(a[i],c(e,t+r,s+d,n)),a[i].classList.contains("flag")&&a[i].classList.remove("flag"),a[i].classList.add("clicked")))}}function d(e,t,s){const n=document.querySelector(".mines-stats"),c=document.querySelector(".steps-stats"),a=document.querySelector(".flags-stats");n.innerHTML=t.value-s,c.innerHTML=e,a.innerHTML=s}function r(e,t,s,n,c,a){const o=document.querySelector(".steps-count"),l=document.querySelector(".time-count");e.classList.add("active"),t.classList.add("active"),s.textContent="win"===n?"you win":"you lose",o.textContent=c,l.textContent=`${a}s`}function i(e,t){e.classList.remove("active"),t.classList.remove("active")}function m(e){const t=document.querySelector(".wrapper"),s=document.querySelectorAll(".level-button"),n=document.querySelectorAll(".menu-button"),c=document.querySelector("body"),a=document.querySelectorAll(".stats-text"),o=document.querySelector(".input-container"),l=document.querySelectorAll(".theme");e?(c.style.background="#000000",t.classList.add("dark"),s.forEach((e=>e.classList.add("dark"))),n.forEach((e=>e.classList.add("dark"))),a.forEach((e=>e.classList.add("dark"))),o.classList.add("dark"),l.forEach((e=>e.classList.add("dark")))):(c.style.background="pink",t.classList.remove("dark"),s.forEach((e=>e.classList.remove("dark"))),n.forEach((e=>e.classList.remove("dark"))),a.forEach((e=>e.classList.remove("dark"))),o.classList.remove("dark"),l.forEach((e=>e.classList.remove("dark"))))}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var t;e.g.importScripts&&(t=e.g.location+"");var s=e.g.document;if(!t&&s&&(s.currentScript&&(t=s.currentScript.src),!t)){var n=s.getElementsByTagName("script");if(n.length)for(var c=n.length-1;c>-1&&!t;)t=n[c--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t}();var u=e.p+"assets/sounds/click.mp3",p=e.p+"assets/sounds/explosion.mp3",g=e.p+"assets/sounds/flag.mp3",L=e.p+"assets/sounds/win.mp3";function v(){const e=new Audio;e.src=u,e.play()}function f(e,t){e.classList.add("active"),t.classList.add("active"),t.innerHTML=" ";const s=document.createElement("p");s.classList.add("popup-title"),s.textContent="Last 10 wins",t.append(s);const n=document.createElement("div");n.classList.add("stats-container"),t.append(n);const c=document.createElement("div");if(c.classList.add("close-button","menu-button"),c.textContent="close",t.append(c),c.addEventListener("click",(()=>{i(e,t)})),!JSON.parse(localStorage.getItem("stats")))return void(n.innerText="NoNe");let a=JSON.parse(localStorage.getItem("stats"));for(let e=0;e<a.length;e++){const t=document.createElement("div");t.classList.add("stats-row"),n.append(t);const s=document.createElement("p");s.classList.add("stats-text"),s.innerText=`${e+1}. Clicks: ${a[e].clickCounter} Seconds: ${a[e].sec} Bombs: ${a[e].bombs}`,t.append(s)}}!function(){const e=document.querySelector("body"),t=document.createElement("div");t.classList.add("overlay"),e.append(t);const s=document.createElement("div");s.classList.add("overlay-continue"),e.append(s);const n=document.createElement("div");n.classList.add("overlay-stats"),e.append(n);const c=document.createElement("div");c.classList.add("popup"),e.append(c);const a=document.createElement("div");a.classList.add("popup-continue"),e.append(a);const o=document.createElement("div");o.classList.add("popup-stats"),e.append(o);const l=document.createElement("div");l.classList.add("title-container"),c.append(l);const d=document.createElement("p");d.classList.add("popup-title"),l.append(d);const r=document.createElement("div");r.classList.add("results"),c.append(r);const i=document.createElement("div");i.classList.add("steps-info"),r.append(i);const m=document.createElement("p");m.classList.add("steps-count-title"),m.textContent="steps:",i.append(m);const u=document.createElement("p");u.classList.add("steps-count"),i.append(u);const p=document.createElement("div");p.classList.add("time-info"),r.append(p);const g=document.createElement("p");g.classList.add("time-count-title"),g.textContent="time:",p.append(g);const L=document.createElement("p");L.classList.add("time-count"),p.append(L);const v=document.createElement("div");v.classList.add("new-game","menu-button"),v.textContent="new game",c.append(v);const f=document.createElement("div");f.classList.add("score-button","menu-button"),f.textContent="score",c.append(f);const b=document.createElement("div");b.classList.add("wrapper"),e.append(b);const E=document.createElement("div");E.classList.add("container"),b.append(E);const S=document.createElement("div");S.classList.add("menu"),E.append(S);const y=document.createElement("div");y.classList.add("savegame","menu-button"),y.textContent="save game",S.append(y);const h=document.createElement("div");h.classList.add("level"),S.append(h);const k=document.createElement("div");k.classList.add("level-button","easy-level","active"),k.textContent="easy",h.append(k);const x=document.createElement("div");x.classList.add("level-button","medium-level"),x.textContent="medium",h.append(x);const C=document.createElement("div");C.classList.add("level-button","hard-level"),C.textContent="hard",h.append(C);const w=document.createElement("div");w.classList.add("score","menu-button"),w.textContent="score",S.append(w);const I=document.createElement("div");I.classList.add("panel"),E.append(I);const q=document.createElement("div");q.classList.add("timer"),q.textContent="000",I.append(q);const O=document.createElement("div");O.classList.add("input-container"),I.append(O);const N=document.createElement("p");N.classList.add("bombs-counter"),O.append(N);const P=document.createElement("input");P.classList.add("input"),P.type="range",P.min=1,P.max=99,P.value=10,O.append(P);const T=document.createElement("div");T.classList.add("stats"),I.append(T);const A=document.createElement("div");A.classList.add("mines"),T.append(A);const J=document.createElement("p");J.classList.add("stats-text"),J.textContent="mines",A.append(J);const $=document.createElement("p");$.classList.add("stats-text","mines-stats"),$.innerHTML=10,A.append($);const D=document.createElement("div");D.classList.add("steps"),T.append(D);const M=document.createElement("p");M.classList.add("stats-text"),M.textContent="steps",D.append(M);const H=document.createElement("p");H.classList.add("stats-text","steps-stats"),H.innerHTML=0,D.append(H);const j=document.createElement("div");j.classList.add("flags"),T.append(j);const F=document.createElement("p");F.classList.add("stats-text"),F.textContent="flags",j.append(F);const B=document.createElement("p");B.classList.add("stats-text","flags-stats"),B.innerHTML=0,j.append(B);const z=document.createElement("div");z.classList.add("field"),b.append(z);const G=document.createElement("div");G.classList.add("switchers"),b.append(G);const K=document.createElement("div");K.classList.add("theme-switch"),G.append(K);const Q=document.createElement("p");Q.classList.add("light-theme","theme"),Q.textContent="light",K.append(Q);const R=document.createElement("label");R.classList.add("switcher"),K.append(R);const U=document.createElement("input");U.type="checkbox",U.classList.add("checkbox"),R.append(U);const V=document.createElement("span");V.classList.add("span"),R.append(V);const W=document.createElement("p");W.classList.add("dark-theme","theme"),W.textContent="dark",K.append(W);const X=document.createElement("div");X.classList.add("sound-switch"),G.append(X);const Y=document.createElement("p");Y.classList.add("sound-on","theme"),Y.textContent="sound on",X.append(Y);const Z=document.createElement("label");Z.classList.add("sound-switcher"),X.append(Z);const _=document.createElement("input");_.type="checkbox",_.classList.add("checkbox","soundCheckbox"),Z.append(_);const ee=document.createElement("span");ee.classList.add("span"),Z.append(ee);const te=document.createElement("p");te.classList.add("sound-off","theme"),te.textContent="sound off",X.append(te)}();const b=document.querySelector(".field"),E=document.querySelector(".savegame"),S=document.querySelector(".overlay"),y=document.querySelector(".overlay-continue"),h=document.querySelector(".popup"),k=document.querySelector(".popup-continue"),x=document.querySelector(".overlay-stats"),C=document.querySelector(".popup-stats"),w=document.querySelector(".popup-title"),I=document.querySelector(".new-game"),q=document.querySelector(".score"),O=document.querySelector(".score-button");q.addEventListener("click",(()=>{f(x,C)})),O.addEventListener("click",(()=>{f(x,C)}));let N,P=10,T=0;const A=document.querySelectorAll(".level-button");let J,$=0,D=0,M=document.querySelector(".checkbox"),H=document.querySelector(".soundCheckbox");m(JSON.parse(localStorage.getItem("switcher"))),JSON.parse(localStorage.getItem("switcher"))&&(M.checked=!0),JSON.parse(localStorage.getItem("soundSwitcher"))&&(H.checked=!0);const j=document.querySelector(".timer");let F=!0;localStorage.getItem("gameProperties")&&(!function(e,t){e.classList.add("active"),t.classList.add("active");const s=document.createElement("p");s.classList.add("popup-title"),s.textContent="Do you want to continue game?",t.append(s);const n=document.createElement("div");n.classList.add("continue-button","menu-button"),n.textContent="continue",t.append(n);const c=document.createElement("div");c.classList.add("new-game2","menu-button"),c.textContent="new game",t.append(c)}(y,k),document.querySelector(".continue-button").addEventListener("click",(()=>{!function(){let e=JSON.parse(localStorage.getItem("cellsObj")),s=JSON.parse(localStorage.getItem("gameProperties")),n=s.width;D=s.clickCounter,$=s.sec,b.innerHTML=" ",B.disabled=!0,F=!0,N=s.bombIndexes,T=s.flags,d(D,B,T),t(n),j.innerText=$<=9?"00"+$:$<=99?"0"+$:$;const c=document.querySelectorAll(".cell");for(let t=0;t<n*n;t++)1==e[t].isClicked&&c[t].classList.add("clicked"),1==e[t].isEmpty&&c[t].classList.add("empty"),1==e[t].isFlag&&c[t].classList.add("flag"),c[t].textContent=e[t].text,+e[t].text&&o(c[t],+e[t].text)}(),P=+JSON.parse(localStorage.getItem("gameProperties")).width,A.forEach((e=>{e.classList.contains("easy-level")&&10==P?e.classList.add("active"):e.classList.remove("active"),e.classList.contains("medium-level")&&15==P?e.classList.add("active"):e.classList.remove("active"),e.classList.contains("hard-level")&&25==P?e.classList.add("active"):e.classList.remove("active")})),i(y,k)})),document.querySelector(".new-game2").addEventListener("click",(()=>{R(),K(P),i(y,k)}))),S.addEventListener("click",(()=>{i(S,h),F=!1})),A.forEach((e=>{e.addEventListener("click",(t=>{R(),e.classList.contains("easy-level")&&(P=10,Q(e),K(P)),e.classList.contains("medium-level")&&(P=15,Q(e),K(P)),e.classList.contains("hard-level")&&(P=25,Q(e),K(P))}))})),I.addEventListener("click",(()=>{K(P),i(S,h)}));const B=document.querySelector(".input"),z=document.querySelector(".bombs-counter");z.textContent=B.value,B.style.background=`linear-gradient(to right, #595959 0%, #595959 ${B.value/99*100}%, #DCDCDC ${B.value/99*100}%, #DCDCDC 100%)`,b.style.gridTemplateColumns=`repeat(${P}, 1fr)`;let G=B.value;function K(e){clearInterval(J),j.innerText="000",$=0,b.innerHTML=" ",B.disabled=!1,N=void 0,D=0,T=0,F=!0,d(D,B,T),t(e)}function Q(e){A.forEach((e=>{e.classList.remove("active")})),e.classList.add("active")}function R(){localStorage.removeItem("cellsObj"),localStorage.removeItem("gameProperties")}function U(){$++,j.innerText=$<=9?"00"+$:$<=99?"0"+$:$}t(P),b.addEventListener("contextmenu",(e=>{e.preventDefault();const t=document.querySelectorAll(".cell"),n=+e.target.getAttribute("number");if(t[n].classList.contains("clicked"))return;if(t[n].classList.contains("bomb"))return;if(t[n].classList.contains("close-bomb"))return;if(void 0===N&&(N=localStorage.getItem("gameProperties")&&null!=JSON.parse(localStorage.getItem("gameProperties")).bombIndexes?JSON.parse(localStorage.getItem("gameProperties")).bombIndexes:s(P,G,n)),!1===F)return;H.checked||function(){const e=new Audio;e.src=g,e.play()}();let c=0;t.forEach((e=>{e.classList.contains("flag")&&c++})),c<N.length?t[n].classList.toggle("flag"):t[n].classList.contains("flag")&&t[n].classList.remove("flag"),T=0,t.forEach((e=>{e.classList.contains("flag")&&T++})),d(D,B,T)})),b.addEventListener("click",(e=>{const t=document.querySelectorAll(".cell");if(!e.target.classList.contains("cell"))return;if(e.target.classList.contains("flag"))return;if(" "==e.target.textContent)return;if(!1===F)return;localStorage.getItem("gameProperties")&&(P=JSON.parse(localStorage.getItem("gameProperties")).width),D++,d(D,B,T);const n=+e.target.getAttribute("number"),c=n%P,o=(n-c)/P;localStorage.getItem("gameProperties")&&($=JSON.parse(localStorage.getItem("gameProperties")).sec,J=setInterval(U,1e3)),0==$&&($=1,j.innerText="001",J=setInterval(U,1e3)),null==N?(B.disabled=!0,N=localStorage.getItem("gameProperties")&&null!=JSON.parse(localStorage.getItem("gameProperties")).bombIndexes?JSON.parse(localStorage.getItem("gameProperties")).bombIndexes:s(P,G,n),H.checked||v(),a(N,n,e,o,c,P,t,N)):(N.includes(n)&&(t[n].classList.add("bomb"),F="lose",H.checked||function(){const e=new Audio;e.src=p,e.play()}(),clearInterval(J),localStorage.getItem("gameProperties")&&(D=JSON.parse(localStorage.getItem("gameProperties")).clickCounter),r(S,h,w,F,D,$)),H.checked||v(),a(N,n,e,o,c,P,t,N)),function(e,t){let s=0;if(e.forEach((e=>{e.classList.contains("clicked")&&s++})),e.length-s==t.length)return!0}(t,N)&&(F="win",function(e,t,s){let n,c;localStorage.getItem("stats")?(n=JSON.parse(localStorage.getItem("stats")),c={sec:e,clickCounter:t,bombs:s.length},n.length<10||n.shift(),n.push(c)):(n=[],c={sec:e,clickCounter:t,bombs:s.length},n.push(c)),localStorage.setItem("stats",JSON.stringify(n))}($,D,N),H.checked||function(){const e=new Audio;e.src=L,e.play()}(),clearInterval(J),r(S,h,w,F,D,$)),localStorage.getItem("gameProperties")&&R()})),B.addEventListener("input",(function(){let e=this.value;z.textContent=e,B.style.background=`linear-gradient(to right, #595959 0%, #595959 ${e/99*100}%, #DCDCDC ${e/99*100}%, #DCDCDC 100%)`,b.innerHTML=" ",N=void 0,G=e,d(D,B,T),t(P)})),E.addEventListener("click",(()=>{let{cellsObj:e,gameProperties:t}=function(){clearInterval(J);const e=document.querySelectorAll(".cell");let t={};return e.forEach((e=>{const s=+e.getAttribute("number");t[`${s}`]={},t[`${s}`].isClicked=e.classList.contains("clicked"),t[`${s}`].isEmpty=e.classList.contains("empty"),t[`${s}`].isFlag=e.classList.contains("flag"),t[`${s}`].text=e.textContent})),{cellsObj:t,gameProperties:{width:P,bombIndexes:N,clickCounter:D,sec:$,flags:T}}}();localStorage.setItem("cellsObj",JSON.stringify(e)),localStorage.setItem("gameProperties",JSON.stringify(t))})),M.addEventListener("click",(()=>{m(M.checked),localStorage.setItem("switcher",M.checked)})),H.addEventListener("click",(()=>{localStorage.setItem("soundSwitcher",H.checked)}))}();