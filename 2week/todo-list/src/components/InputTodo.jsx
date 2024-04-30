import React from 'react';
import { useState } from 'react';

function InputTodo({addList}) {

  const [inputText, setInputText] = useState('');

  const activeEnter = (e) => {
    if (e.key === 'Enter'){
      const trimmedText = inputText.trim();
      if (trimmedText !== ''){
        addList(trimmedText)
        setInputText('');
      }
    }
  }
  return (
    <input 
        placeholder='UMC 스터디 계획을 작성해보세요!'
        id="insert"
        onKeyDown={activeEnter}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></input>
  );
  
}

export default InputTodo;
