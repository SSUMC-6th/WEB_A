let addValue = document.getElementById('todo');
const todoList = document.querySelector('#todoList');
const doneList = document.getElementById('doneList');

function onKeyUp(event){
    if(event.keyCode == 13 && addValue.value !== ''){
        createTodo();
    }
};

function createTodo(){
	const newLi = document.createElement('li'); // li 생성
    const newBtn = document.createElement('button'); // button 생성
	const newSpan = document.createElement('span'); // span 생성

    newLi.appendChild(newSpan); // li안에 span 담기
    newLi.appendChild(newBtn); // li안에 button 담기
      
	newSpan.textContent = addValue.value; // span 안에 value값 담기
    newBtn.innerText = "완료";

	todoList.appendChild(newLi);

    newBtn.addEventListener('click', (event) => finsh(event));
    addValue.value = '';
}

function finsh(event){
    const delBtn = document.createElement('button'); // button 생성
    delBtn.innerText = "삭제";

    doneList.appendChild(event.target.parentElement);
    event.target.parentElement.appendChild(delBtn); // 삭제버튼 추가
    event.target.remove(); //완료버튼 삭제
    delBtn.addEventListener('click', (event) => delTodo(event));
}

function delTodo(event){
    event.target.parentElement.remove();
}