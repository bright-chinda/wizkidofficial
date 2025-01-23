let dropDown = document.querySelector(".links")
let menuBtn = document.querySelector(".menu-btn")
let exitBtn = document.querySelector(".exit-btn")
let tabRemove = document.querySelectorAll(".tab-list")

tabRemove.forEach(element => {
    element.addEventListener("click", ()=>{
        dropDown.classList.remove("active")
    })
});

menuBtn.addEventListener("click",function(){
    dropDown.classList.add("active")
    // exitBtn.classList.remove("active")
})
exitBtn.addEventListener("click",function(){
    dropDown.classList.remove("active")
})
