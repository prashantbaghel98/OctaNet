document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const todoList = document.getElementById('todoList');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="remove">Remove</button>
        `;

        // Mark task as completed
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Remove task
        const removeButton = li.querySelector('.remove');
        removeButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering the 'completed' event
            li.remove();
        });

        todoList.appendChild(li);
        taskInput.value = '';
        taskInput.focus();
    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
