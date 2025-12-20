const navToggleIcon=document.querySelector(".nav__toggle-icon")
const menuOpen=document.querySelector(".menu")
const cover=document.querySelector(".cover")
const resumeListItems=document.querySelectorAll(".resume-list__item")
const portfoliolistitem=document.querySelectorAll(".portfolio-list__item")
const menuItem=document.querySelectorAll(".menu__item")
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
menuItem.forEach(item=>{
    item.addEventListener("click",(e)=>{
        e.preventDefault()
        removeActive("menu-active")
        item.classList.add("menu-active")
        let data=item.getAttribute("data-section")
        let scrollTop=document.querySelector(`.${data}`).offsetTop
        window.scrollTo({
            top:scrollTop-120,
            behavior:"smooth"
        })
    })
})