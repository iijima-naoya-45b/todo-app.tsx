import { useState, useEffect } from 'react';
import './App.css';
import { getTodos } from './api';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
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

//削除の表示
const handleTodoDelete = async (todoId: number) => {
  try {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  } catch (error) {
    console.error(error);
  }
};

return (
  <div>
    <h1>Todo App</h1>
    <TodoForm />
    <TodoList todos={todos} onTodoDelete={handleTodoDelete} />
  </div>
  );
};

export default App;