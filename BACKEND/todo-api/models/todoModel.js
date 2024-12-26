const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    description: { type: String },
    creator: { type: String }
});

module.exports = mongoose.model('Todo', todoSchema);