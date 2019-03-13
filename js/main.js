let list = new TaskList();
let tache1 = new Task("Manger", "04/11");
let tache2 = new Task("Dromir", "04/12");
let tache3 = new Task("Boire", "04/10");
let tasks = new CompoTaskList({
    element: document.getElementById('tasks'),
    taskList: tache1, tache2, tache3
});
