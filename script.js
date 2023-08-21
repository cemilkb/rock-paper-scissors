
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
let sonuc = document.querySelector(".sonuc")

// Button's event

rockButton.addEventListener("click", () => {
    playerChoice = "Rock"
    let computerC = computerChoice()
    sonucYaz(playerChoice, computerC)
    game(playerChoice, computerC)
    isGameEnd()
})

paperButton.addEventListener("click", () => {
    playerChoice = "Paper"
    let computerC = computerChoice()
    game(playerChoice, computerC)
    sonucYaz(playerChoice, computerC)
    isGameEnd()
})

scissorsButton.addEventListener("click", () => {
    playerChoice = "Scissors"
    let computerC = computerChoice()
    game(playerChoice, computerC)
    sonucYaz(playerChoice, computerC)
    isGameEnd()
})

// Function's

function computerChoice() {
    let rps = ["Rock", "Paper", "Scissors"]
    let random = Math.floor(Math.random() * 3)
    let choice = rps[random]

    return choice
}

function sonucYaz(player, comp) {
    if (player === comp) {
        let playerH1 = document.createElement("h1")
        let computerH1 = document.createElement("h1")
        let draw = document.createElement("h1")
        let playerSpan = document.createElement("span")
        let computerSpan = document.createElement("span")
        playerH1.textContent = ("Player: ")
        computerH1.textContent = ("Computer: ")
        playerSpan.textContent = (`${player}`)
        computerSpan.textContent = (`${comp}`)
        draw.textContent = ("Draw with")

        playerH1.appendChild(playerSpan)
        computerH1.appendChild(computerSpan)
        sonuc.innerHTML = ("")
        sonuc.appendChild(playerH1)
        sonuc.appendChild(draw)
        sonuc.appendChild(computerH1)

    }
    else if (player === "Rock" && comp === "Scissors" || player === "Paper" && comp === "Rock"
        || player === "Scissors" && comp === "Paper") {
        console.log("geldi")
        if (playerScore < 3 && computerScore < 3) {
            let playerH1 = document.createElement("h1")
            let computerH1 = document.createElement("h1")
            let beat = document.createElement("h1")
            let playerSpan = document.createElement("span")
            let computerSpan = document.createElement("span")
            playerH1.textContent = ("Player: ")
            computerH1.textContent = ("Computer: ")
            playerSpan.textContent = (`${player}`)
            computerSpan.textContent = (`${comp}`)
            beat.textContent = ("Beat againts")

            playerH1.appendChild(playerSpan)
            computerH1.appendChild(computerSpan)
            sonuc.innerHTML = ("")
            sonuc.appendChild(playerH1)
            sonuc.appendChild(beat)
            sonuc.appendChild(computerH1)
        }
    }
    else {
        if (playerScore < 3 && computerScore < 3) {
            let playerH1 = document.createElement("h1")
            let computerH1 = document.createElement("h1")
            let lose = document.createElement("h1")
            let playerSpan = document.createElement("span")
            let computerSpan = document.createElement("span")
            playerH1.textContent = ("Player: ")
            computerH1.textContent = ("Computer: ")
            playerSpan.textContent = (`${player}`)
            computerSpan.textContent = (`${comp}`)
            lose.textContent = ("Lose againts")

            playerH1.appendChild(playerSpan)
            computerH1.appendChild(computerSpan)
            sonuc.innerHTML = ("")
            sonuc.appendChild(playerH1)
            sonuc.appendChild(lose)
            sonuc.appendChild(computerH1)
        }
    }


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

    button.setAttribute("class", "again")
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

    button.setAttribute("class", "again")
    button.addEventListener("click", again)
}

function again() {
    winner.innerHTML = " <h1> VS </h1> "
    playerScore = 0
    computerScore = 0
    player.textContent = `Score: ${playerScore}`
    computer.textContent = `Score: ${computerScore}`
    sonuc.innerHTML = (` 
                        <h1>Player</h1>
                        <h1> VS</h1>
                        <h1>computer</h1>`)
}

// Game 

function game(playerC, computerC) {

    if (playerC === computerC) {
        // draw
    }
    else if (playerC === "Rock" && computerC === "Scissors" || playerC === "Paper" && computerC === "Rock"
        || playerC === "Scissors" && computerC === "Paper") {
        if (playerScore < 3 && computerScore < 3) {
            playerScore++
            player.textContent = `Score: ${playerScore}`
        }
    }
    else {
        if (playerScore < 3 && computerScore < 3) {
            computerScore++
            computer.textContent = `Score: ${computerScore}`
        }
    }

}

function isGameEnd() {

    if (playerScore > 2) {
        playerWininig()
    } else if (computerScore > 2) {
        computerWininig()

    }

}

