const menuIcon = document.querySelector(".menu-icon")
const navList = document.querySelector(".main-nav_list")
const body = document.querySelector('body')
const closeMenuIcon = document.querySelector(".close-button")

menuIcon.addEventListener('click', showMenu)
closeMenuIcon.addEventListener('click', closeMenu)

function showMenu(){
    navList.classList.add('main-nav_list-open')
    document.body.style.position = "fixed"
}

function closeMenu(){
    navList.classList.remove('main-nav_list-open')
    document.body.style.position = "static"
}
