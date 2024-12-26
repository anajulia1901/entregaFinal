const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo')
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.error('Error de conexión:', err));