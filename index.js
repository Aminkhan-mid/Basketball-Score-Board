// setting count to 0 for both of the teams
let homeScore = 0
let guestScore = 0

// grabing the ids of the two teams and the reset button
let homeEL = document.getElementById("home-score")
let guestEL = document.getElementById("guest-score")
let resetEl = document.getElementById("reset-el")


// functions for points 1, 2 and 3 for Home team.
function home1(){
    homeScore += 1
    homeEL.textContent = homeScore
}
function home2(){
    homeScore += 2
    homeEL.textContent = homeScore
}
function home3(){
    homeScore += 3
    homeEL.textContent = homeScore
}


// functions for points 1, 2 and 3 for Guest team.
function guest1(){
    guestScore += 1
    guestEL.textContent = guestScore
}
function guest2(){
    guestScore += 2
    guestEL.textContent = guestScore
}
function guest3(){
    guestScore += 3
    guestEL.textContent = guestScore
}

// when the reset button is clicked, the count for both teams set to 0 and the displayed number will also set to 0.
resetEl.addEventListener("click", function(){
    homeScore = 0
    guestScore = 0

    homeEL.textContent = 0
    guestEL.textContent = 0
})