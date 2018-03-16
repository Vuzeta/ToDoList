function addNewTask(title) {
    var taskLi = document.createElement("li");
    taskLi.classList.add("list-group-item");
    taskLi.innerHTML = prepareTaskHTML(title);
    // Events - success and remove
    var BtnSuccess = taskLi.querySelector(".toogle-complete-btn");
    var BtnRemove = taskLi.querySelector(".delete-task-btn");
    BtnSuccess.addEventListener("click", function () {
        taskComplete(this);
    });
    BtnRemove.addEventListener("click", function () {
        taskRemove(this);
    });
    //Add Task in List
    taskContainer.appendChild(taskLi);
};
//Adds the rest of the code
function prepareTaskHTML(title) {
    return '<button class="btn px-3 toogle-complete-btn"><i class="fa fa-thumbs-o-up text-dark" aria-hidden="true"></i></button>' +
        '<p class="text-dark">' + title + '</p>' +
        '<button class="btn btn-warning px-3 delete-task-btn"><i class="fa fa-remove" aria-hidden="true"></i></button></li>'
};
// Add new task
function bindAddTaskEvents() {
    addButton.addEventListener("click", function () {
        if (newTask.value.length) {
            addNewTask(newTask.value);
        };
    });
};
