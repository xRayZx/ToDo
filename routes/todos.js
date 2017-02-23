"use strict";

var express = require('express');
var router = express.Router();

import mongoose from 'mongoose';
import Todo from '../models/Todo.js';

/* GET /todos listing. */
router.get('/', function(req, res, next) {
	Todo.find(function (err, todos) {
		if (err) return next(err);
		res.json(todos);
	});
});

module.exports = router;
