
// Geting element

let player = document.getElementById("playerScore")
let computer = document.getElementById("computerScore")
let rockButton = document.querySelector(".rock")
let paperButton = document.querySelector(".paper")
let scissorsButton = document.querySelector(".scissors")
let winner = document.getElementById("winner")
let playerChoice
let playerScore = 0
let computerScore = 0

// Button's event

rockButton.addEventListener("click", () => {
    playerChoice = "rock"
    game(playerChoice, computerChoice())
    isGameEnd()
})

paperButton.addEventListener("click", () => {
    playerChoice = "paper"
    game(playerChoice, computerChoice())
    isGameEnd()
})

scissorsButton.addEventListener("click", () => {
    playerChoice = "scissors"
    game(playerChoice, computerChoice())
    isGameEnd()
})

// Function's

function computerChoice() {
    let rps = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random() * 3)
    let choice = rps[random]

    return choice
}

function playerWininig() {
    let win = document.createElement("h1")
    let name = document.createElement("h1")
    let button = document.createElement("button")
    win.textContent = "!! WIN !!"
    name.textContent = "Player"
    button.innerHTML = "Again"
    winner.innerHTML = ""
    winner.appendChild(name)
    winner.appendChild(win)
    winner.appendChild(button)

    button.addEventListener("click", again)
}

function computerWininig() {
    let win = document.createElement("h1")
    let name = document.createElement("h1")
    let button = document.createElement("button")
    win.textContent = "!! WIN !!"
    name.textContent = "Computer"
    button.innerHTML = "Again"
    winner.innerHTML = ""
    winner.appendChild(name)
    winner.appendChild(win)
    winner.appendChild(button)

    button.addEventListener("click", again)
}

function again(){
    winner.innerHTML = " <h1> VS </h1> "
    playerScore = 0
    computerScore = 0
    player.textContent = `Score: ${playerScore}`
    computer.textContent = `Score: ${computerScore}`
}

// Game 

function game(playerC, computerC) {

    if (playerC === computerC) {
        // draw
    }
    else if (playerC === "rock" && computerC === "scissors" || playerC === "paper" && computerC === "rock"
        || playerC === "scissors" && computerC === "paper") {
        if(playerScore < 3 && computerScore <3 ){
            ++playerScore
        player.textContent = `Score: ${playerScore}`
        }
    }
    else {
        if(playerScore <3 && computerScore <3  ){
            ++computerScore
        computer.textContent = `Score: ${computerScore}`
        }
    }

}

function isGameEnd() {

    if (playerScore >= 3) {
        playerWininig()
    } else if (computerScore >= 3) {
        computerWininig()
       
    }

}

