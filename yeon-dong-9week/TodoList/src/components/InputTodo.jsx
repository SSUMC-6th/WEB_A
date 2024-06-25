import React, {useState} from 'react'
import {useDispatch  } from 'react-redux'
import {add} from '../redux/todoSlice'
import { InputContainer, StyledInput, StyledInputBtn, StyledInputContainer } from './InputTodo.style'

function InputTodo() {
    const dispatch = useDispatch()

    const [todolist, setTodolist] = useState(
    {
        id : 0,
        text : "",
    }
    )

    function handleText(e) {
        setTodolist({text : e.target.value})
    }

    function onReset () {
        setTodolist({text : ""})
    }
  
    
  return (
      <InputContainer>
      <form onSubmit={(e) => {
        e.preventDefault()
        if(todolist.text !== ""){dispatch(add(todolist.text))}
        else(alert("할 일을 입력해주세요!"))
        onReset()
        }}>
            <StyledInputContainer>
            <StyledInput type="text" value = {todolist.text} onChange={handleText}></StyledInput>
            <StyledInputBtn type="submit" value="+"></StyledInputBtn>
            </StyledInputContainer>
        </form>
      </InputContainer>
    )
}

export default InputTodo