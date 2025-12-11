const navToggleIcon=document.querySelector(".nav__toggle-icon")
const menuOpen=document.querySelector(".menu")
const cover=document.querySelector(".cover")
navToggleIcon.addEventListener("click",function(){
    navToggleIcon.classList.toggle("nav-open")
    menuOpen.classList.toggle("menu--open")
    cover.classList.toggle("cover--show")
})