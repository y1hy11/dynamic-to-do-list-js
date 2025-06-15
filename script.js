document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === "") {
            alert("Please enter a valid task!");
            return;
        }

        const taskListItem = document.createElement('li');
        taskListItem.classList.add('task-item');
        taskListItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";
        removeButton.classList.add('delete-button');
        
        removeButton.addEventListener('click', () => {
            taskListItem.remove();
        });

        taskListItem.appendChild(removeButton);
        taskList.appendChild(taskListItem);
        taskInput.value = "";
        taskInput.focus();
    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});

