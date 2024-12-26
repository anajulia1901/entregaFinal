import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import './App.css';

const BASE_URL = 'http://localhost:5000/todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(BASE_URL)
        .then(response => response.json())
        .then(data => {
            console.log('Datos cargados:', data);
            setTodos(data);
        })
        .catch(error => {
            console.error('Error cargando las tareas:', error);
            setError('No se pudieron cargar las tareas');
        });
  }, []);

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const completeTodo = async (id) => {
    try {
      const updatedTodo = todos.find(todo => todo._id === id);
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !updatedTodo.completed }),
      });
      const result = await response.json();
      setTodos(todos.map(todo => (todo._id === id ? result : todo)));
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
      });
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="app">
      <h1>To do list</h1>
      <AddTodoForm onAdd={addTodo} />
      {todos.length === 0 ? (
        <p>Cargando tareas...</p>
      ) : (
        <TodoList 
          todos={todos} 
          onComplete={completeTodo} 
          onDelete={deleteTodo} 
        />
      )}
    </div>
  );
}

export default App;