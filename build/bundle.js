(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(n=t.currentScript.src),!n)){var c=t.getElementsByTagName("script");if(c.length)for(var s=c.length-1;s>-1&&(!n||!/^http(s?):/.test(n));)n=c[s--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})();const n=e.p+"images/lamp1.png",t=e.p+"images/lamp2.png",c=e.p+"images/lamp3.png",s=[{id:1,logo:n,text:"Встраиваемый светильник Markt",price:"3 490",discount:!0,discPrice:"5 060"},{id:2,logo:t,text:"Линейный светильник ARG",price:"6 700",discount:!1,discPrice:""},{id:3,logo:c,text:"Сведодиодный светильник",price:"5 060",discount:!0,discPrice:"5 060"},{id:4,logo:n,text:"Встраиваемый светильник Markt",price:"3 490",discount:!1,discPrice:""},{id:5,logo:t,text:"Линейный светильник ARG",price:"6 700",discount:!0,discPrice:"6 060"},{id:6,logo:c,text:"Сведодиодный светильник",price:"5 060",discount:!1,discPrice:""},{id:7,logo:n,text:"Встраиваемый светильник Markt",price:"3 490",discount:!0,discPrice:"6 060"},{id:8,logo:t,text:"Линейный светильник ARG",price:"6 700",discount:!1,discPrice:""}],i=e.p+"images/cite-logo-b.png",r=e.p+"images/search-icon.png",d=e.p+"images/basket.png",a=e.p+"images/cite-logo-w.png",o=e.p+"images/mir.png",l=e.p+"images/visa.png",m=e.p+"images/mc.png",p=e.p+"images/mButton.png",u=e.p+"images/close-menu.png";(()=>{const e=document.querySelector(".header__second-logo img"),n=document.querySelector(".header__second-search img"),t=document.querySelector(".header__second-basket img"),c=document.querySelector(".footer__block-one-logo img"),_=document.querySelector(".footer__block-four--cards-one"),g=document.querySelector(".footer__block-four--cards-two"),h=document.querySelector(".footer__block-four--cards-three");e.src=i,n.src=r,t.src=d,c.src=a,_.src=o,g.src=l,h.src=m;const v=document.querySelector(".main__cards");s.forEach((e=>{const n=document.createElement("div");n.classList.add("main__card");const t=document.createElement("div");t.classList.add("main__card-disc");const c=document.createElement("span");c.textContent=e.discount?"Акция":"",t.appendChild(c),e.discount&&n.appendChild(t);const s=document.createElement("div");s.classList.add("main__card-img");const i=document.createElement("img");i.src=e.logo,s.appendChild(i),n.appendChild(s);const r=document.createElement("div");r.classList.add("main__card-info");const d=document.createElement("h5");d.textContent=e.text,r.appendChild(d);const a=document.createElement("div");a.classList.add("main__card-price");const o=document.createElement("span");o.classList.add("main__card-price--main"),o.textContent=`${e.price} ₽`,e.discount&&(o.style.color="#E45302");const l=document.createElement("span");l.classList.add("main__card-price--disc"),l.textContent=e.discount?`${e.discPrice} ₽`:"",l.style.color="#808080";const m=document.createElement("div");m.classList.add("main__card-price--dash"),e.discount&&a.appendChild(m),a.appendChild(o),a.appendChild(l),r.appendChild(a),n.appendChild(r);const p=document.createElement("div");p.classList.add("main__card-button");const u=document.createElement("button");u.textContent="Подробнее",p.appendChild(u),n.appendChild(p),v.appendChild(n)}));let f=!1;const E=document.querySelector(".header"),y=E.innerHTML;function C(){f=!f,console.log(f),document.querySelector(".header__second-open-menu img").src=f?u:p;const e=document.querySelector(".header__menu");e&&e.classList.toggle("opened",f)}window.addEventListener("resize",(()=>{if(window.innerWidth<=770){E.innerHTML=`\n        <div class="header__second">\n            <div class="header__second-logo">\n                <img src=${i} alt="" />\n                <span>URBAN DWELLING</span>\n            </div>\n            <div class="header__second-open-menu">\n                <img src=${p} alt="" />\n            </div>\n        </div>\n        <div class="header__menu">\n        <div class="header__menu-logo">\n            <img src="" alt="" />\n            <span>URBAN DWELLING</span>\n        </div>\n        <div class="header__menu-help">\n            <span>Доставка и оплата</span>\n        </div>\n        <div class="header__menu-help">\n            <span>Гарантия и возврат</span>\n        </div>\n        <div class="header__menu-help">\n            <span>EN</span>\n        </div>\n\n        <div class="header__menu-navs">\n            <a href="#main" class="header__menu-navs-nav">КАТАЛОГ</a>\n            <a href="#footer" class="header__menu-navs-nav">О КОМПАНИИ</a>\n            <a href="#footer" class="header__menu-navs-nav">КОНТАКТЫ</a>\n        </div>\n\n        <div class="header__menu-search">\n            <input type="text" placeholder="Лампы" />\n            <img src="" alt="" />\n        </div>\n\n        <div class="header__menu-basket">\n            <img src="" alt="" />\n            <span>Корзина</span>\n        </div>\n        </div>`;const e=document.querySelector(".header__second-open-menu img");e.removeEventListener("click",C),e.addEventListener("click",C);const n=document.querySelector(".header__menu-logo img"),t=document.querySelector(".header__menu-search img"),c=document.querySelector(".header__menu-basket img");n.src=i,t.src=r,c.src=d}else window.innerWidth>=770&&(E.innerHTML=y)}))})()})();