"use strict";

import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
	name: String,
	completed: Boolean,
	note: String,
	updated_at: {type: Date, default: Date.now }
});

export const ToDo = mongoose.model('ToDo', TodoSchema);
