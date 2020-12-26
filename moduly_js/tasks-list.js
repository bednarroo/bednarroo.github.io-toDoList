//pokazywanie zadan

function showTasks() {
    tasks.forEach(function (title) {
        addNewTask(title);


    });
}


//delete 


function deleteTask(task) {


    var liToDelete = task.closest('li');


    task.closest('ul').removeChild(liToDelete);

}
