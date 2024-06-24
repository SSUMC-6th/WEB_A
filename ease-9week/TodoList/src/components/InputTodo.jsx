import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { add } from '../redux/todoSlice';

const InputTodoSt = styled.div`
  margin-bottom: 20px;
  margin: 0 auto;
  width: 80%;
`;

const InputContainer = styled.div`
  margin: 0 auto;
`;

const TextbarSt = styled.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
`;

const SubmitbuttonSt = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #28a745;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

export default function InputTodo() {
  const dispatch = useDispatch();

  const [todolist, setTodolist] = useState({
    id: 0,
    text: "",
  });

  function handleText(e) {
    setTodolist({ ...todolist, text: e.target.value });
  }

  function onReset() {
    setTodolist({ ...todolist, text: "" });
  }

  return (
    <InputTodoSt>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (todolist.text !== "") {
          dispatch(add(todolist.text));
        } else {
          alert("할 일을 입력해주세요!");
        }
        onReset();
      }}>
        <InputContainer>
          <TextbarSt 
            type="text"
            value={todolist.text} 
            onChange={handleText} 
          />
          <SubmitbuttonSt type="submit" value="+" />
        </InputContainer>
      </form>
    </InputTodoSt>
  );
}
