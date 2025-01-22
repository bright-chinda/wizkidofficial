let dropDown = document.querySelector(".links")
let menuBtn = document.querySelector(".menu-btn")
let exitBtn = document.querySelector(".exit-btn")

menuBtn.addEventListener("click",function(){
    dropDown.classList.add("active")
    // exitBtn.classList.remove("active")
})
exitBtn.addEventListener("click",function(){
    dropDown.classList.remove("active")
})
