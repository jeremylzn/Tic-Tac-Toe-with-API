const winningCombo = require('./winningCombo');

/*
isWinner function accepts tic-tac-toe board array as a paramenter and determines if the game has a isWinner.
Returns 'Tie', 'In Progress', 'X wins', 'O wins' 
*/

function isWinner(board:String[]){

	if (!winningCombo(board) && board.indexOf('') > -1) return 'In Progress';
	if (!winningCombo(board) && board.indexOf('') === -1) return 'Tie';
	if (winningCombo(board)) return board[winningCombo(board)[0]] + ' Wins';

}

export = isWinner;