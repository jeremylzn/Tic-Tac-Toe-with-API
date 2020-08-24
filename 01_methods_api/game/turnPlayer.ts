/*
turnPlayer function determine if it is X or O turn given a tic-tac-toe array. 
*/

function turnPlayer(board:String[]):String{
	let x:number = 0;
	let o:number = 0;

	board.forEach(element => {
		if(element === 'X') x++
		if(element === 'O') o++
	});

	return x === o ? 'X' : 'O'

}

export = turnPlayer
