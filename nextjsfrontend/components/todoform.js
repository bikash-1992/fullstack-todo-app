import { useState } from 'react';
import axios from 'axios';

export default function TodoForm({ onTodoAdded }) {
  const [todo, setTodo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/add-todo', { todo });
      onTodoAdded(response.data);
      setTodo('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a new todo"
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
