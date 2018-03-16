// Variables
var taskContainer = document.querySelector("#taskList");
var newTask = document.querySelector('#form1');
var addButton = document.querySelector("#newAdd");
//DOM Loaded
document.addEventListener('DOMContentLoaded', function () {
    bindAddTaskEvents();
    showTasks();
})
