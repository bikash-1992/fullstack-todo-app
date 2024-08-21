import { useState, useEffect } from 'react';
import TodoForm from '../components/todoformodoForm';
import TodoList from '../components/todolist';
import axios from 'axios';

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('https://your-firebase-url/todos');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchTodos();
  }, []);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`https://your-firebase-url/todos/${id}`);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onTodoAdded={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}
