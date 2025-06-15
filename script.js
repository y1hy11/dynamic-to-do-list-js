document.addEventListener('DOMContentLoaded', () => {

    const addButton = document.getElementById('add-button');
    const taskInput  = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Enter a task!");
        } else {
            const taskListItem = document.createElement('li');
            taskListItem.textContent = taskText;
            
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = "remove-btn";
        }
    };

});