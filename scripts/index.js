var e=document.querySelector(".toggle"),n=document.querySelector(".main-menu");e.classList.remove("main-nav__toggle--nojs","toggle--open");n.classList.remove("main-menu--nojs","main-menu--open");var o=()=>{e.classList.toggle("toggle--open"),n.classList.toggle("main-menu--open")};e.addEventListener("click",()=>o());var c=document.querySelector(".form"),s=document.querySelectorAll("input"),i=document.querySelector(".button"),l=()=>{c.checkValidity()||s.forEach(t=>{t.hasAttribute("required")&&t.classList.add("form__control--invalid")})};i.addEventListener("click",()=>l());