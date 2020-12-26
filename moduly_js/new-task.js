//dodawanie nowego buttona

function prepareTaskHTML(title) {
    return '<div class = "input-group" > ' +
        '<button class = "bbutton" >' + title + ''
    '< /button> '
    '< /div > ';
}


// add new task

function bindAddTaskEvents() {
    newTaskForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var title = this.querySelector('input').value;

        if (title) {
            addNewTask(title);
        }
    });
}

//funkcja czekania



function addNewTask(title) {


    //add task to dom
    var taskLi = document.createElement('li');


    taskLi.classList.add('single-task');
    taskLi.innerHTML = prepareTaskHTML(title);

    // delete

    tasksContainer.appendChild(taskLi);

    var deleteBtn = taskLi.querySelector('.bbutton');


    deleteBtn.addEventListener('click', function () {

        deleteTask(this);

    });




};
