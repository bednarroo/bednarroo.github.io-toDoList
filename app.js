//kiedy dom zaladowany

document.addEventListener("DOMContentLoaded", function () {

    showTasks();
    bindAddTaskEvents();

});



///zmienne
var newTaskForm = document.querySelector('.new-task-container form');
var tasksContainer = document.querySelector('.tasks-container ul')






//zdarzenie

//function remove(e) {
//    // you need some check here if you don't want any element to be removed on clicking it
//    if (e.class = "single-task") {
//        e.target.remove();
//    } else {
//        e = e;
//
//    }
//
//}
