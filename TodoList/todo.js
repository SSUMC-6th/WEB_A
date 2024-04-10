function enter(e) {
    //만약 엔터키가 눌렸다
    if(e.keyCode == '13'){
        addTodo();
    }
}

function addTodo(){
    const todoList = document.querySelector('#todoList');
    const todoInput = document.querySelector('#todoInput');
    const newTodo = document.createElement('li');
    const todoText = document.createElement('span');
    const doneBtn = document.createElement('button');
    todoText.textContent = todoInput.value;
    doneBtn.innerText = "완료";

    newTodo.appendChild(todoText);
    newTodo.appendChild(doneBtn);

    todoList.appendChild(newTodo);
    todoInput.value = '';

    doneBtn.addEventListener('click', (event) => doneTodo(event));
}

function doneTodo(event){
    const doneList = document.querySelector('#doneList');
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "삭제";

    doneList.appendChild(event.target.parentElement);
    event.target.parentElement.appendChild(deleteBtn);
    event.target.remove();

    deleteBtn.addEventListener('click', (event) => deleteTodo(event));
}

function deleteTodo(event){
    event.target.parentElement.remove();
}