import { useCallback, useRef, useState } from 'react'
import './App.css'
import TodoContainer from './components/TodoContainer'
import TodoInput from './components/TodoInput'

function App() {
  //todo 배열
  const [todos, setTodos] = useState([
    { id: 1, content: "Send E-mail", isDone: false },
    { id: 2, content: "Make Work-Books", isDone: false },
    { id: 3, content: "Sleeping", isDone: true },
    { id: 4, content: "Watching You-Tube", isDone: true },
  ])

  //새로운 아이디 초기값 5
  const newId = useRef(5);
  //todos 배열에 새로운 객체를 추가하는 함수
  const onAdd = useCallback(
    (content) => {
      const todo = {
        id: newId.current,
        content,
        isDone: false,
      };
      setTodos(todos.concat(todo)); //새로 입력한 todo 합쳐서 새로운 배열 만들기
      newId.current++; //아이디 증가
    },
    [todos],
  );

  //할 일 완료
  const onIsDone = useCallback(
    (id) => {
      setTodos(todos => (todos.map(todo =>
        (todo.id === id ? {...todo, isDone: !todo.isDone} : todo)  
      )));
    },
    [todos],
  );

  //할 일 삭제
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  return (
    <>
      <h1>UMC Study Plan</h1>
      <hr/>
      <TodoInput onAdd={onAdd} />
      <div className='todo-box'>
        <TodoContainer 
          todos={todos}
          onIsDone={onIsDone}
          onRemove={onRemove}
        />
      </div>
    </>
  )
}

export default App
