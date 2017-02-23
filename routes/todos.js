"use strict";

var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Todo = require('../models/Todo.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
	console.log(req.body);
	Todo.find(function (err, todos) {
		if (err) return next(err);
		res.json(todos);
	});
});

router.post('/', function(req, res, next) {
	console.log(req.body);
	Todo.create(req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

router.get('/:id', function(req, res, next) {
	console.log(req.body);
	Todo.findById(req.params.id, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

router.put('/:id', function(req, res, next) {
	console.log(req.body);
	Todo.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

router.delete('/:id', function(req, res, next) {
	Todo.findByIdAndRemove(req.params.id, req.body, function(err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

module.exports = router;
