const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const completedTasks = document.getElementById('completedTasks');

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        if (taskInput.value.trim() !== '') {
            const task = document.createElement('div');
            task.className = 'task';
            task.innerText = taskInput.value;
            
            const completeBtn = document.createElement('button');
            completeBtn.className = 'complete-button';
            completeBtn.innerText = '완료';
            
            completeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                task.classList.toggle('completed-task');
                if (task.classList.contains('completed-task')) {
                    completedTasks.appendChild(task);
                    completeBtn.remove();
                    task.appendChild(deleteBtn);
                } else {
                    taskList.appendChild(task);
                    task.appendChild(completeBtn);
                    deleteBtn.remove();
                }
            });
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-button';
            deleteBtn.innerText = '삭제';
            
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                task.remove();
            });
            
            task.appendChild(completeBtn);
            
            taskList.appendChild(task);
            
            taskInput.value = '';
        }
    }
});

completedTasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-button')) {
        e.stopPropagation(); 
        e.target.parentElement.remove();
    }
});
