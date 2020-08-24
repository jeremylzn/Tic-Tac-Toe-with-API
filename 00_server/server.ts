import express = require('express');
import bodyParser = require('body-parser');
import cookieParser = require('cookie-parser');
import path = require('path');

const api = require('./api');


const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'../02_client')));

app.use(cookieParser());

app.use(bodyParser.json());

app.use('/api', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Method', 'GET, POST, HEAD, OPTIONS, PUT');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization');
    next();
  });

app.use('/api', api);


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'../02_client','tic-tac-toe.html'));
    });

app.all('*', function (req, res) {
    res.status(404).send('Error path');
});

app.listen((process.env.PORT || 3000), function () {console.log('App is listening on port 3000!');
});
