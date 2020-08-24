"use strict";
var express = require("express");
var api = require('../01_methods_api/api/api');
var router = express.Router();
router.post('/', api.ticTacToe);
router.post('/isWinner', api.isWinner);
router.post('/move', api.nextMove);
module.exports = router;
