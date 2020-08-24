const addMove = require('../game/addMove');
const gameisWinner = require('../game/isWinner');
const move = require('../game/move');

function ticTacToe(req:any,res:any) {
	let input = JSON.parse(req.body.board);
	let output = addMove(input);
  res.json({board : output});
}

function isWinner(req:any,res:any) {
	let input = JSON.parse(req.body.board);
	let output = gameisWinner(input);
  res.json({isWinner : output});
}

function nextMove(req:any,res:any) {
	let input = JSON.parse(req.body.board);
	let output = move(input);
  res.json({nextMove : output});
}

export = {
	ticTacToe,
	isWinner,
	nextMove
};