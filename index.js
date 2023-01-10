let homeScore = 0;
let guestScore = 0;
const boardEl = document.getElementById("board-el")
const homeEl = document.getElementById("home-el")
const guestEl = document.getElementById("guest-el")
let scoreTurn = true


const home1Score = () => {
    homeScore += 1
    homeEl.textContent = homeScore;
    board()
}

const home2Score = () => {
    homeScore += 2
    homeEl.textContent = homeScore;
    board()
}

const home3Score = () => {
    homeScore += 3
    homeEl.textContent = homeScore;
    board()
}

const guest1Score = () => {
    guestScore += 1
    guestEl.textContent = guestScore;
    board()
}

const guest2Score = () => {
    guestScore += 2
    guestEl.textContent = guestScore;
    board()
}

const guest3Score = () => {
    guestScore += 3
    guestEl.textContent = guestScore;
    board()
}

const board = () => {
    if(scoreTurn) {
        boardEl.textContent = 'HOME TEAM GOAL...'
    } else {
        boardEl.textContent =`GUEST TEAM GOAL...`
    }
    scoreTurn = !scoreTurn
}


