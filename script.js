const choices = {
	rock: { beats: "Scissors", loses: "Paper" },
	paper: { beats: "Rock", loses: "Scissors" },
	scissors: { beats: "Paper", loses: "Rock" }
};

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let gamePlaying = true;

const buttons = document.querySelectorAll("button");
const resultDiv = document.querySelector("#result");
const playerScoreDiv = document.querySelector("#player-score");
const computerScoreDiv = document.querySelector("#computer-score");
const tieScoreDiv = document.querySelector("#tie-score");
const playAgainBtn = document.querySelector("#play-again");

function playRound(playerChoice) {
	if (!gamePlaying) {
		return;
	}

	const computerChoice = computerPlay();
	let resultText = "";

	if (playerChoice === computerChoice) {
		resultText = "Tie game!";
		tieScore++;
	} else if (choices[playerChoice].beats === computerChoice) {
		resultText = `You win! ${playerChoice} beats ${computerChoice}.`;
		playerScore++;
	} else {
		resultText = `You lose! ${computerChoice} beats ${playerChoice}.`;
		computerScore++;
	}

	resultDiv.textContent = resultText;
	playerScoreDiv.textContent = `Player: ${playerScore}`;
	computerScoreDiv.textContent = `Computer: ${computerScore}`;
	tieScoreDiv.textContent = `Tie: ${tieScore}`;

	if (playerScore === 5) {
		resultDiv.textContent = "You won the game!";
		gamePlaying = false;
		playAgainBtn.style.display = "block";
	} else if (computerScore === 5) {
		resultDiv.textContent = "You lost the game!";
		gamePlaying = false;
		playAgainBtn.style.display = "block";
	}
}

function computerPlay() {
	const choicesArray = Object.keys(choices);
	const randomIndex = Math.floor(Math.random() * choicesArray.length);
	return choicesArray[randomIndex];
}

buttons.forEach(button => {
	button.addEventListener("click", () => {
		playRound(button.id);
	});
});

playAgainBtn.addEventListener("click", () => {
	playerScore = 0;
	computerScore = 0;
	tieScore = 0;
	gamePlaying = true;
	resultDiv.textContent = "";
	playerScoreDiv.textContent = "Player: 0";
	computerScoreDiv.textContent = "Computer: 0";
    tieScoreDiv.textContent = "Tie: 0";
    playAgainBtn.style.display = "none";
});


