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

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(` ${taskText} - Due: ${dueDate} - Priority: ${priority}`));

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'deleteTask';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);

    document.getElementById('task').value = '';  // Clear input
    document.getElementById('dueDate').value = '';  // Clear date
});

document.getElementById('clearTasks').addEventListener('click', function() {
    document.getElementById('taskList').innerHTML = '';
    document.getElementById('doneList').innerHTML = '';
});
