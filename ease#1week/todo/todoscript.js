//JavaScript source code
const form = document.getElementById('form');
const todoinput = document.getElementById('todoinput');

let listcnt = 0;

form.addEventListener('submit', addtodo);


function addtodo(event){
    event.preventDefault();
    let todoul = document.getElementById('todoul');
    let newli = document.createElement('li');
    newli.id = 'li'+listcnt;
    let newtext = document.createElement('span');
    newtext.id = 'span'+listcnt;
    newtext.textContent = todoinput.value;
    let newdonebutton = document.createElement('button');
    newdonebutton.id = 'done'+listcnt;
    let line = document.createElement('hr');
    newdonebutton.textContent = "완료";
    newcontainer = document.createElement('div');
    newcontainer.className = 'content';

    newdonebutton.addEventListener('click', move);
    
    newli.appendChild(newcontainer);
    newcontainer.appendChild(newtext);
    newcontainer.appendChild(newdonebutton);
    newli.appendChild(line);
    todoul.appendChild(newli);
    
    listcnt++;
    todoinput.value = '';
}

function move(event){
    let doneul = document.getElementById('doneul');
    let donebutton = event.target;
    donebutton.textContent = '삭제';
    doneul.appendChild(donebutton.parentNode.parentNode);

    donebutton.addEventListener('click', buttondelete);
}

function buttondelete(event){
    event.target.parentNode.parentNode.remove();
}