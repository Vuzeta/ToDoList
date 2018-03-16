//Show task
function showTasks() {
    tasks.forEach(title => {
        addNewTask(title);
    });
}
// Success Task
function taskComplete(task) {
    task.classList.toggle('btn-success');
}
// Remove task
function taskRemove(task) {
    var liToDelete = task.closest('li');
    taskContainer.removeChild(liToDelete);
}
