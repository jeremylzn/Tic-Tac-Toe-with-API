"use strict";
var moveCounter = require('./moveCounter');
var playerOne = require('./playerOne');
var playerTwo = require('./playerTwo');
var optimalBot = require('./optimalBot');
/*
move function accepts tic-tac-toe array as a parameter and returns index position for the next move.
*/
function move(board) {
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
module.exports = move;
