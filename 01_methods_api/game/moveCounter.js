"use strict";
/*
moveCounter function counts the number of moves in a tic-tac-toe array
*/
function moveCounter(board) {
    var counter = 0;
    board.forEach(function (element) {
        if (element !== '')
            counter++;
    });
    return counter;
}
module.exports = moveCounter;
