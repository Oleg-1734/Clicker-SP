let cookie = document.querySelector(".CookIMG")
let AUTOC = document.querySelector(".AUTOClick")
let scoreHTML = document.querySelector(".score")
let score = 0

cookie.addEventListener("click", function(){
    score = score + 1
    scoreHTML.innerHTML = score
})




