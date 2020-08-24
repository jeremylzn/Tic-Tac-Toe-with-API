const move = require('./move');
const newBoard = require('./newBoard');

/*
addMove function accepts tic-tac-toe array as a parameter and returns tic-tac-toe board with optimal next move added to board.
*/

function addMove(board:String[]){
	let position = move(board);

	return newBoard(board,position);

}

export = addMove;