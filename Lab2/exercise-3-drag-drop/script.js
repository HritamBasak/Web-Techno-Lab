function addTask() {
    const taskText = document.getElementById("taskInput").value;

    if (taskText === "") return;

    const task = document.createElement("div");
    task.className = "task";
    task.draggable = true;
    task.id = "task-" + Date.now();

    const date = new Date().toLocaleDateString();
    task.textContent = taskText + " (" + date + ")";

    task.ondragstart = function (event) {
        event.dataTransfer.setData("text", event.target.id);
    };

    document.getElementById("todo").appendChild(task);
    document.getElementById("taskInput").value = "";
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text");
    const task = document.getElementById(taskId);

    event.target.appendChild(task);

    if (event.target.id === "completed") {
        task.style.backgroundColor = "lightgreen";
        alert("Task Completed Successfully");
    }
}
