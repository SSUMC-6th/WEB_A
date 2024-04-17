import React, { useState, useCallback } from 'react'

function InsertTodo({onInsert}) {
  const [text, setText] = useState('');

  const onChange = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const onSubmit = useCallback((e)=> {
    e.preventDefault();
    onInsert(text);
    setText('');
  }, [onInsert, text]);
  return (
    <>
      <form id="form" onSubmit={onSubmit}>
        <input 
        id="todoinput" 
        onChange={onChange} 
        value={text} 
        type="text" 
        placeholder="UMC 스터디 계획을 작성해보세요!" 
        autoFocus/>
      </form>
    </>
  )
}

export default InsertTodo
