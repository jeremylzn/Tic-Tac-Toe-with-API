"use strict";
/*
turnPlayer function determine if it is X or O turn given a tic-tac-toe array.
*/
function turnPlayer(board) {
    var x = 0;
    var o = 0;
    board.forEach(function (element) {
        if (element === 'X')
            x++;
        if (element === 'O')
            o++;
    });
    return x === o ? 'X' : 'O';
}
module.exports = turnPlayer;
