import express = require('express');
const api = require('../01_methods_api/api/api');

const router : express.Router = express.Router();

router.post('/',
  api.ticTacToe
);

router.post('/isWinner',
  api.isWinner
);

router.post('/move',
  api.nextMove
);

export = router;