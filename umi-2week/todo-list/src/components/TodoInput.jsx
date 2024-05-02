import React, { useCallback, useState } from "react";

function TodoInput({onAdd}){
    const [newTodo, setNewTodo] = useState('');

    const onChange = useCallback(
        e => {
            setNewTodo(e.target.value);
        }
    , [])
    
    const onSubmit = useCallback(
        e => {
            onAdd(newTodo); //새로운 투두 추가
            setNewTodo(''); //인풋 창 초기화
            e.preventDefault(); //새로고침 방지
        }
    , [onAdd, newTodo])

    return(
        <>
            <form onSubmit={onSubmit}>
                <input 
                onChange={onChange}
                value={newTodo}
                type='text' 
                id='todoInput' 
                placeholder='스터디 계획을 작성해보세요!'/>
            </form>
        </>
    );
}

export default TodoInput;