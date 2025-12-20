const navToggleIcon=document.querySelector(".nav__toggle-icon")
const menuOpen=document.querySelector(".menu")
const cover=document.querySelector(".cover")
const resumeListItems=document.querySelectorAll(".resume-list__item")
const portfoliolistitem=document.querySelectorAll(".portfolio-list__item")
const menuItem=document.querySelectorAll(".menu__item")
const sections = document.querySelectorAll("main > section")
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
