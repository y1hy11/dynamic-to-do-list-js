document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        tasks.forEach(taskText => {
            createTaskElement(taskText);
        });
    }

    function createTaskElement(taskText) {
        const taskListItem = document.createElement('li');
        taskListItem.classList.add('task-item');
        taskListItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";
        removeButton.classList.add('delete-button');
        
        removeButton.addEventListener('click', () => {
            const index = tasks.indexOf(taskText);
            if (index > -1) {
                tasks.splice(index, 1);
                saveTasks();
            }
            taskListItem.remove();
        });

        taskListItem.appendChild(removeButton);
        taskList.appendChild(taskListItem);
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === "") {
            alert("Please enter a valid task!");
            return;
        }

        tasks.push(taskText);
        saveTasks();

        createTaskElement(taskText);

        taskInput.value = "";
        taskInput.focus();
    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    loadTasks();
});
