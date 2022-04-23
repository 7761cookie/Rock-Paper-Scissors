const item = ['rock', 'paper', 'scissors'];

const computerPlay = () => {
	let i = Math.floor(Math.random() * 3);
	return item[i];
};

const computerSelection = computerPlay();

const playRound = (playerSelection, computerSelection) => {
	if (playerSelection === computerSelection) {
		//I can change these console.logs to return statements
		console.log('Draw');
	} else if (
		(playerSelection === item[0] && computerSelection === item[2]) ||
		(playerSelection === item[1] && computerSelection === item[0]) ||
		(playerSelection === item[2] && computerSelection === item[1])
	) {
		pScore++;
		console.log('You Win! ' + playerSelection + ' beats ' + computerSelection);
	} else {
		cScore++;
		console.log('You Lose! ' + computerSelection + ' beats ' + playerSelection);
	}
};

let pScore = 0;
let cScore = 0;

const game = () => {
	for (i = 0; i < 5; i++) {
		const choice = prompt('Rock, Paper or Scissors?');

		const result = choice.toString().toLowerCase();

		const playerSelection = result;

		playRound(playerSelection, computerSelection);
	}
};

const victor = () => {
	if (pScore > cScore) {
		return 'Victory';
	} else if (pScore < cScore) {
		return 'Defeat';
	} else {
		return 'No Winner :(';
	}
};
game();

console.log(pScore, cScore);
console.log(victor());
