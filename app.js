"use strict";
import express from "express";
import configModule from './config/index.js';
const config = configModule();

console.log(config);

const app = express();

app.get('/', function(req, res) {
	res.send("Hello World");
});

app.listen(config.port, () => {
	console.log("App listening on port " + config.port);
});
