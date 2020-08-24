"use strict";
var move = require('./move');
var newBoard = require('./newBoard');
/*
addMove function accepts tic-tac-toe array as a parameter and returns tic-tac-toe board with optimal next move added to board.
*/
function addMove(board) {
    var position = move(board);
    return newBoard(board, position);
}
module.exports = addMove;
