import turnPlayer = require('./turnPlayer');

/*
addBoard function accepts board(array) and position and returns new tic-tac-toe array with added element.
*/

function addBoard(board:String[], position:number):String[]{
	let move:String = turnPlayer(board);
	let newBoard:String[] = [];

	for (let i = 0; i < board.length; i++){
		if(i === position) {
			newBoard.push(move);
		} else {
			newBoard.push(board[i]);
		}
	}

	return newBoard;

}

export = addBoard;