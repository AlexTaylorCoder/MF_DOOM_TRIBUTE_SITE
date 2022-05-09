const navItem = document.querySelector("nav").children
const about = document.getElementById("about")
const career =document.getElementById("career")
const disc = document.getElementById("disc")

console.log(navItem)

navItem[1].addEventListener("click",() => {
    about.scrollIntoView({behavior:"smooth"})
})

navItem[2].addEventListener("click",() => {
    career.scrollIntoView({behavior:"smooth"})

})
navItem[3].addEventListener("click",() => {
    disc.scrollIntoView({behavior:"smooth"})

})
