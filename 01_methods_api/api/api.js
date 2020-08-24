"use strict";
var addMove = require('../game/addMove');
var gameisWinner = require('../game/isWinner');
var move = require('../game/move');
function ticTacToe(req, res) {
    var input = JSON.parse(req.body.board);
    var output = addMove(input);
    res.json({ board: output });
}
function isWinner(req, res) {
    var input = JSON.parse(req.body.board);
    var output = gameisWinner(input);
    res.json({ isWinner: output });
}
function nextMove(req, res) {
    var input = JSON.parse(req.body.board);
    var output = move(input);
    res.json({ nextMove: output });
}
module.exports = {
    ticTacToe: ticTacToe,
    isWinner: isWinner,
    nextMove: nextMove
};
