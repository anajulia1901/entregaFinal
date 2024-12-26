import { useState } from 'react';

function AddTodoForm({ onAdd }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [creator, setCreator] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name) {
      alert('Por favor escribe un nombre para la tarea');
      return;
    }

    const newTodo = {
      title: name,
      description,
      creator,
      completed: false
    };

    await addTodo(newTodo);
    setName('');
    setDescription('');
    setCreator('');
  };

  const addTodo = async (newTodo) => {
    try {
        const response = await fetch('http://localhost:5000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTodo),
        });
        const createdTodo = await response.json();
        onAdd(createdTodo);
    } catch (error) {
        console.error('Error al agregar la tarea:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        placeholder="Nombre de la tarea"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Creador"
        value={creator}
        onChange={(e) => setCreator(e.target.value)}
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
}

export default AddTodoForm;