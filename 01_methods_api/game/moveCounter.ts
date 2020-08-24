/*
moveCounter function counts the number of moves in a tic-tac-toe array
*/

function moveCounter(board:String[]):number{
	let counter:number = 0

	board.forEach(element =>{
		if(element !== '') counter++
	});

	return counter;
}

export = moveCounter;