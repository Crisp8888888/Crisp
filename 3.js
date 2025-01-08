// script.js
// JS variables and constants
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

// Purpose:
// taskInput: Holds the reference to the input field where the user types a new task.
// addTaskButton: Holds the reference to the button that triggers adding a new task.
// taskList: Holds the reference to the unordered list where tasks will be appended.


// Control structure
addTaskButton.addEventListener('click', function() {
  // Check if the input is not empty
  if (taskInput.value.trim()!== '') {
    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
});


// JS event: click event on the addTaskButton
// Purpose: When the user clicks the button, it triggers the function that adds a new task to the task list.


// DOM model relevancies:
// 1. Selecting elements: We use document.getElementById to access and manipulate DOM elements (taskInput, addTaskButton, taskList).
// 2. Creating elements: We create new <li> elements using document.createElement to dynamically add tasks to the DOM.
// 3. Modifying elements: We use appendChild to modify the DOM by adding new tasks to the taskList.


// An alternative control structure could be using the submit event on a form instead of the click event on the button.
// For example:

// HTML
// <form id="task-form">
//   <input type="text" id="task-input" placeholder="Enter a new task">
//   <button type="submit">Add Task</button>
// </form>

// JavaScript
// const taskForm = document.getElementById('task-form');
// taskForm.addEventListener('submit', function(event) {
//   event.preventDefault();
//   const taskInput = document.getElementById('task-input');
//   if (taskInput.value.trim()!== '') {
//     const newTask = document.createElement('li');
//     newTask.textContent = taskInput.value;
//     taskList.appendChild(newTask);
//     taskInput.value = '';
//   }
// });