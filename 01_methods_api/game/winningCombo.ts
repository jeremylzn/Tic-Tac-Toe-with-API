/*
winningCombo function accepts an array as a parameter and returns 'undefined' if there is no winning tic-tac-toe combination.
If there is a winning tic-tac-toe combination, the function will return an array containing the winning combination
*/

function winningCombo(board:String[]){
	if (board === undefined) return undefined
	var winningCombinations:number[][] = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	var isWinner = winningCombinations.find(combo =>
    board[combo[0]] !== '' &&
    board[combo[0]] === board[combo[1]] &&
    board[combo[1]] === board[combo[2]]
  );

  return isWinner

}

export = winningCombo;