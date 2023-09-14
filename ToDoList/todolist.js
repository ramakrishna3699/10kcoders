// JavaScript code for the to-do list
document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  // Add a new task
  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
            <input type="checkbox" class="checkbox">
            <span>${taskText}</span>
            <span class="delete">Delete</span>
        `;

    // Mark task as done
    const checkbox = li.querySelector(".checkbox");
    checkbox.addEventListener("change", function () {
      li.classList.toggle("done");
    });

    // Delete task
    const deleteButton = li.querySelector(".delete");
    deleteButton.addEventListener("click", function () {
      li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = "";
  });
});
