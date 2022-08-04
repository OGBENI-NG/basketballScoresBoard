let homeScore = 0;
let guestScore = 0;
const boardEl = document.getElementById("board-el")
const homeEl = document.getElementById("home-el")
const guestEl = document.getElementById("guest-el")  


const homeAdd1 = () => {
    homeScore += 1
    homeEl.textContent = homeScore;
    board()
}

const homeAdd2 = () => {
    homeScore += 2
    homeEl.textContent = homeScore;
    board()
}

const homeAdd3 = () => {
    homeScore += 3
    homeEl.textContent = homeScore;
    board()
}

const guestAdd1 = () => {
    guestScore += 1
    guestEl.textContent = guestScore;
    board()
}

const guestAdd2 = () => {
    guestScore += 2
    guestEl.textContent = guestScore;
    board()
}

const guestAdd3 = () => {
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


