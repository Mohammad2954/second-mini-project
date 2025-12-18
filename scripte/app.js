const navToggleIcon=document.querySelector(".nav__toggle-icon")
const menuOpen=document.querySelector(".menu")
const cover=document.querySelector(".cover")
const resumeListItems=document.querySelectorAll(".resume-list__item")
const portfoliolistitem=document.querySelectorAll(".portfolio-list__item")
navToggleIcon.addEventListener("click",function(){
    navToggleIcon.classList.toggle("nav-open")
    menuOpen.classList.toggle("menu--open")
    cover.classList.toggle("cover--show")
})
resumeListItems.forEach(item=>{
    item.addEventListener("click",function(){
        document.querySelector(".resume-list__item--active").classList.remove("resume-list__item--active")
        document.querySelector(".resume-content--show").classList.remove("resume-content--show")
        this.classList.add("resume-list__item--active")
        let contentId=item.getAttribute("data-content")
        document.querySelector(contentId).classList.add("resume-content--show")
    })
})
portfoliolistitem.forEach(item=>{
    item.addEventListener("click",()=>{
        document.querySelector(".portfolio-list__item--active").classList.remove("portfolio-list__item--active")
        document.querySelector(".portfolio-content--show").classList.remove("portfolio-content--show")
        item.classList.add("portfolio-list__item--active")
        let id=item.getAttribute("id-conent")
        document.querySelector(id).classList.add("portfolio-content--show")
    })
})
