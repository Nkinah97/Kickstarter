parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";AOS.init({duration:1500,disable:"phone"});var e=new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}}),t=document.querySelector(".header__menu-open"),n=document.querySelector(".header__nav"),r=document.querySelector(".menu__top-close");t.addEventListener("click",function(){n.classList.toggle("header__nav-active")}),r.addEventListener("click",function(){n.classList.remove("header__nav-active")});var i=document.querySelector(".mail"),a=document.querySelector(".area-message"),o=document.querySelector(".questions__btn");function c(){""!==i.value.trim()&&""!==a.value.trim()?o.disabled=!1:o.disabled=!0}i.addEventListener("input",c),a.addEventListener("input",c);
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.bedbaab9.js.map