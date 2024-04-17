import { useCallback, useState } from 'react'

function DoneList({todos}) {
  const doneTodos = todos&&todos.filter(todo => todo.isDone);

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  return (
    <>
        <div className='finsh-list'>
            <h3>해낸 일</h3>
            <hr width="90%" color="white"/>
            <ul id="doneList">
            {doneTodos.map(todo => (
              <li key={todo.id}>
                <span className="todo-data">{todo.content}</span>
                <button className="done-button" onClick={() => onRemove(todo.id)}>삭제</button>
              </li>
            ))}
            </ul>
        </div>

    </>
  )
}

export default DoneList
