const express = require('express');
const Todo = require('../models/todoModel');
const router = express.Router();

// Obtener todas las tareas
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Obtener una tarea por ID
router.get('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) return res.status(404).json({ message: 'Tarea no encontrada' });
        res.json(todo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Crear una nueva tarea
router.post('/', async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        completed: req.body.completed || false,
        description: req.body.description,
        creator: req.body.creator
    });
    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Actualizar una tarea
router.put('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) return res.status(404).json({ message: 'Tarea no encontrada' });

        todo.title = req.body.title || todo.title;
        todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;

        const updatedTodo = await todo.save();
        res.json(updatedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Eliminar una tarea
router.delete('/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if (!todo) return res.status(404).json({ message: 'Tarea no encontrada' });

        res.json({ message: 'Tarea eliminada' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;