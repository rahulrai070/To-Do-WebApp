const taskInput = document.getElementById("taskInput");

const addTaskBtn = document.getElementById("addTaskBtn");

const pendingTasks = document.getElementById("pendingTasks");

const completedTasks = document.getElementById("completedTasks");

const pendingCount = document.getElementById("pendingCount");

const completedCount = document.getElementById("completedCount");

addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value;

  if (taskText.trim() === "") {
    alert("Please enter a task");
    return;
  }

  const taskElement = document.createElement("div");

  taskElement.classList.add("task-item");

  taskElement.innerHTML = `
  <div class="d-flex justify-content-between align-items-start flex-wrap gap-3">

    <div>
      <h5 class="task-title"> ${taskText}</h5>
      <small class="task-time"> Added: Just Now</small>
    </div>

    <div class="task-buttons">

      <button class="btn btn-success btn-sm complete-btn">Complete</button>
      <button class="btn btn-primary btn-sm edit-btn">Edit</button>
      <button class="btn btn-danger btn-sm delete-btn">Delete</button>
    
      </div>
  </div>
  `;

  // Delete Button

  const deleteBtn = taskElement.querySelector(".delete-btn");

  deleteBtn.addEventListener("click", function () {
    taskElement.remove();

    updateTaskCount();
  });

  // Complete Button

  const completeBtn = taskElement.querySelector(".complete-btn");

  completeBtn.addEventListener("click", function () {
    completedTasks.appendChild(taskElement);

    completeBtn.remove();

    taskElement.querySelector(".task-title").style.textDecoration =
      "line-through";

    taskElement.querySelector(".task-time").textContent = "Completed: Just Now";

    updateTaskCount();
  });

  // Edit button

  const editBtn = taskElement.querySelector(".edit-btn");

  editBtn.addEventListener("click", function () {
    const taskTitle = taskElement.querySelector(".task-title");

    const updatedTask = prompt("Edit your task", taskTitle.textContent);

    if (updatedTask === null) {
      return;
    }

    if (updatedTask.trim() === "") {
      alert("Task cannot be empty");
      return;
    }

    taskTitle.textContent = updatedTask;
  });

  pendingTasks.appendChild(taskElement);

  updateTaskCount();

  taskInput.value = "";
});

function updateTaskCount() {
  pendingCount.textContent = pendingTasks.children.length;

  completedCount.textContent = completedTasks.children.length;
}
updateTaskCount();
