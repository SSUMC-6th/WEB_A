import { useCallback, useState } from 'react'

function TodoInput({addTodo}) {
  const [newTodo, setNewTodo] = useState('');

  const onSubmit = useCallback(
      e => {
          addTodo(newTodo);
          setNewTodo('');
          e.preventDefault();
      }
  , [addTodo, newTodo]);

  const onChange = useCallback(
      e => {
          setNewTodo(e.target.value);
      }
  , []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={newTodo} type='text' id='todoInput' placeholder='UMC 스터디 계획을 작성해보세요!'/>
      </form>
    </>
  )
}

export default TodoInput
