document.getElementById('addTask').addEventListener('click', function() {
    let taskText = document.getElementById('task').value;
    let dueDate = document.getElementById('dueDate').value;
    let priority = document.getElementById('priority').value;

    if (taskText === '' || dueDate === '') {
        alert('Please enter a task and due date');
        return;
    }

    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            li.classList.add('done-task');
            document.getElementById('doneList').appendChild(li);
        } else {
            li.classList.remove('done-task');
            document.getElementById('taskList').appendChild(li);
        }
    });


    let taskTextNode = document.createElement('span');
    taskTextNode.textContent = `${taskText} \nDue: ${dueDate}`;
    
    let priorityNode = document.createElement('span');

    priorityNode.textContent = ` \nPriority: ${priority}`;
    if (priority === 'High') {
        priorityNode.style.color = 'red';
    } else if (priority === 'Medium') {
        priorityNode.style.color = 'Orange';
    } else if (priority === 'Low') {
        priorityNode.style.color = 'blue';
    }


    li.appendChild(checkbox);
    li.appendChild(taskTextNode);
    li.appendChild(priorityNode);
    

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'deleteTask';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);

    document.getElementById('task').value = '';  
    document.getElementById('dueDate').value = '';  
});

document.getElementById('clearTasks').addEventListener('click', function() {
    document.getElementById('taskList').innerHTML = '';
    document.getElementById('doneList').innerHTML = '';
});
