"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var path = require("path");
var api = require('./api');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../02_client')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/api', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Method', 'GET, POST, HEAD, OPTIONS, PUT');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization');
    next();
});
app.use('/api', api);
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../02_client', 'tic-tac-toe.html'));
});
app.all('*', function (req, res) {
    res.status(404).send('Error path');
});
app.listen((process.env.PORT || 3000), function () {
    console.log('App is listening on port 3000!');
});
