import { useState, useEffect } from 'react';
import './App.css';
import { getTodos } from './api';
import TodoForm from './components/TodoForm';

type Todo = {
  id: number;
  title: string;
  description: string;
  completed: string;
};

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosData = await getTodos();
        setTodos(todosData);
      } catch (error) {
        console.error('Error while fetching todos:', error);
    }
  };

  fetchTodos();
}, []);

return (
  <div className="container">
    <h1>ToDo list</h1>
    <TodoForm />
    <ul>
      {todos.map((todo: Todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  </div>
  );
};

export default App;