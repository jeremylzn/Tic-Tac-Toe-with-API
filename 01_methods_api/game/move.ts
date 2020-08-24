const moveCounter = require('./moveCounter');
const playerOne = require('./playerOne');
const playerTwo = require('./playerTwo');
const optimalBot = require('./optimalBot');

/*
move function accepts tic-tac-toe array as a parameter and returns index position for the next move.
*/

function move(board:String[]){
	switch (moveCounter(board)) {
		case 0:
		case 1:
			return playerOne(board);
			break;
		case 2:
			return playerTwo(board);
			break;
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
			return optimalBot(board);
			break;
	}

}

export = move;