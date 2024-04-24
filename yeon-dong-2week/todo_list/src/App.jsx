import { useCallback, useRef, useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';


function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Send E-mail", isDone: false },
    { id: 2, content: "Make Work-Books", isDone: false },
    { id: 3, content: "Sleeping", isDone: true },
    { id: 4, content: "Watching You-Tube", isDone: true },
  ]);

  const nextId = useRef(5);
  const addTodo = useCallback(
    (data) => {
      const todo = {
        id: nextId.current,
        content:data,
        isDone: false,
      };
      setTodos((prev)=>[...prev, todo]);
      nextId.current++;
    },
    [],
  );

  return (
    <>
      <TodoInput addTodo={addTodo}></TodoInput>
      <div className='todo-box'>
        <TodoList todos={todos} setTodos={setTodos}/>
        <DoneList todos={todos} setTodos={setTodos}/>
      </div>
    </>
  )
}

export default App
