console.log("JavaScript connected!");
const taskInput = document.getElementById("new-task");

console.log(taskInput);
const addButton = document.querySelector(".add-button");
console.log(addButton);
addButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText !=="") {
    const newTask = document.createElement("li");

    newTask.textContent = taskText;
    taskList.prepend(newTask);
    taskInput.value = "";
    console.log(newTask);
    errorMessage.textContent = "";


} else {
    errorMessage.textContent = "! Please enter a task before adding.";
}
});
const taskList = document.querySelector("ul");

const errorMessage = document.getElementById("error-message");

