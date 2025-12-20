const navToggleIcon=document.querySelector(".nav__toggle-icon")
const menuOpen=document.querySelector(".menu")
const cover=document.querySelector(".cover")
const resumeListItems=document.querySelectorAll(".resume-list__item")
const portfoliolistitem=document.querySelectorAll(".portfolio-list__item")
const menuItem=document.querySelectorAll(".menu__item")
const sections = document.querySelectorAll("main > section")
const chengThem=document.querySelector(".cheng-them")

navToggleIcon.addEventListener("click",function(){
    navToggleIcon.classList.toggle("nav-open")
    menuOpen.classList.toggle("menu--open")
    cover.classList.toggle("cover--show")
})
function navigationTabInit(listItems,activeClass,showClass,dataGet){
    listItems.forEach(listItem=>{
        listItem.addEventListener("click",()=>{
            removeActive(activeClass)
            removeActive(showClass)
            listItem.classList.add(`${activeClass}`)
            let id=listItem.getAttribute(`${dataGet}`)
            document.querySelector(id).classList.add(`${showClass}`)
        })
    })
}
function removeActive(removclass){
    document.querySelector(`.${removclass}`).classList.remove(`${removclass}`)

}
navigationTabInit(portfoliolistitem,"portfolio-list__item--active","portfolio-content--show","id-conent")
navigationTabInit(resumeListItems,"resume-list__item--active","resume-content--show","data-content")
const observer = new IntersectionObserver(observerHandler,{
    threshold: 0.5
});
sections.forEach(section => {
    observer.observe(section)
})
function observerHandler(allSections) {
    allSections.map(section => {
        let sectionClassName = section.target.className
        let sectionMenuItem = document.querySelector(`.menu__item[data-section=${sectionClassName}]`)
        if (section.isIntersecting){
            sectionMenuItem.classList.add("menu-active")
        } else {
            sectionMenuItem.classList.remove("menu-active")
        }
    })
}
menuItem.forEach(item => {
    item.addEventListener("click", function (e) {
        e.preventDefault()
        removeActive('menu-active')
        item.classList.add("menu-active")
        let sectionClass = item.getAttribute("data-section")
        let sectionOffsetTop = document.querySelector(`.${sectionClass}`).offsetTop

        window.scrollTo({
            top: sectionOffsetTop - 130,
            behavior: "smooth"
        })
    })
})
chengThem.addEventListener("click",()=>{
    document.documentElement.classList.toggle("dark")
    if(document.documentElement.classList.contains("dark")){
        window.localStorage.setItem("teme","dark")
        chengThem.innerHTML=`<svg viewBox="0 0 24 24" stroke-width="1.5" class="theme size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>`
    }else{
        window.localStorage.setItem("teme","light")
        chengThem.innerHTML=`<svg viewBox="0 0 24 24" stroke-width="1.5"  class="size-6 theme"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" /></svg>`
    }
})
if(window.localStorage.getItem("teme")=="dark"){
    document.documentElement.classList.add("dark")
    chengThem.innerHTML=`<svg viewBox="0 0 24 24" stroke-width="1.5" class="theme size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>`
    
}