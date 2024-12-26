import React from 'react';

const TodoItem = ({ todo, onComplete, onDelete }) => {
    return (
      <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onComplete(todo._id)}
        />
        <div className="todo-info">
          <h3>{todo.title}</h3>
          <p>{todo.description || 'Sin descripción'}</p>
          <p>Created by: {todo.creator || 'Desconocido'}</p>
        </div>
        <button onClick={() => onDelete(todo._id)}>Delete</button>
      </div>
    );
  };
  
  export default TodoItem;