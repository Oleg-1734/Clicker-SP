let cookie = document.querySelector(".CookIMG")
let AUTOC = document.querySelector(".AUTOClick")
let scoreHTML = document.querySelector(".score")
let ferm = document.querySelector(".ButtonFerm")
let factory = document.querySelector(".ButtonFactory")
let bank = document.querySelector(".ButtonBank")
let score = 0
let autoClick = 0

cookie.addEventListener("click", function(){
    score = score + 1
    scoreHTML.innerHTML = score
})

AUTOC.addEventListener("click", function(){
    if (score >= 100){
        score = score - 100
        scoreHTML.innerHTML = score
        autoClick += 1
    }
})

ferm.addEventListener("click", function(){
    if (score >= 300){
        score = score - 300
        scoreHTML.innerHTML = score
        autoClick += 15
    }
})
factory.addEventListener("click", function(){
    if (score >= 15000){
        score = score - 15000
        scoreHTML.innerHTML = score
        autoClick += 850
    }
})
bank.addEventListener("click", function(){
    if (score >= 250000){
        score = score - 250000
        scoreHTML.innerHTML = score
        autoClick += 7500
    }
})

setInterval(function(){
    score = score + autoClick
    scoreHTML.innerHTML = score
}, 1000)

