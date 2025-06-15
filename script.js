document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
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
            removeButton.onclick = () => {
                taskListItem.remove();
            };
            taskListItem.appendChild(removeButton);
            taskList.appendChild(taskListItem);
            taskInput.value = "";
        }
    };
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
