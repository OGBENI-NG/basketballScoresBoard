let homeScore = 0;
let guestScore = 0;
const boardEl = document.getElementById("board-el")
const homeEl = document.getElementById("home-el")
const guestEl = document.getElementById("guest-el")  


const add1 = () => {
    homeScore += 1
    homeEl.textContent = homeScore;
    board()
}

const add2 = () => {
    homeScore += 2
    homeEl.textContent = homeScore;
    board()
}

const add3 = () => {
    homeScore += 3
    homeEl.textContent = homeScore;
    board()
}

const add4 = () => {
    guestScore += 1
    guestEl.textContent = guestScore;
    board()
}

const add5 = () => {
    guestScore += 2
    guestEl.textContent = guestScore;
    board()
}

const add6 = () => {
    guestScore += 3
    guestEl.textContent = guestScore;
    board()
}

const board = () => {
    if(homeEl.textContent > 0 ) {
        boardEl.textContent = "HOME TEAM GOAL..."
    } else if(guestEl.textContent > 0) {
        boardEl.textContent = "GUEST TEAM GOAL..."
    } 
    return boardEl
}


