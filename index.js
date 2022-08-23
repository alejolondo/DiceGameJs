let player1Score = 0
let player2Score = 0
let player1Turn = true


const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showDisplayBtn(){
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

rollBtn.addEventListener('click', function(){

    const ramdonNumber = Math.ceil(Math.random()* 6)
    
    if(player1Turn){
        player1Dice.textContent = ramdonNumber
        player1Score += ramdonNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.classList.remove('active')
        player2Dice.classList.add('active')
        message.textContent = " 🟥Player #2 turn "
    }else{
        player2Dice.textContent = ramdonNumber
        player2Score += ramdonNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.classList.remove('active')
        player1Dice.classList.add('active')
        message.textContent = " 🟩 Player #1 turn "
    }

    if(player1Score >= 25){
        message.textContent = "🟩 The player #1 has won 🎉🎉🎉🎉🎉"
        showDisplayBtn()
    }else if(player2Score >= 25){
        message.textContent = "🟥 The player #2 has won 🎉🎉🎉🎉🎉"
        showDisplayBtn()
    }
    player1Turn = !player1Turn
})

resetBtn.addEventListener("click", function(){
    reset()
})
 
function reset() {
    message.textContent = "Player 1 Turn"
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = '-'
    player2Dice.textContent = '-'
    player1Score = 0
    player2Score = 0
    player1Turn = true
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}