const addTaskBtn = document.getElementById('add-task-btn');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

addTaskBtn.addEventListener('click', function () {
  const task = document.createElement('div');
  task.classList.add('task');

  const li = document.createElement('li');
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  const checkBtn = document.createElement('button');
  checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
  checkBtn.classList.add('checkTask');
  task.appendChild(checkBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteBtn.classList.add('deleteTask');
  task.appendChild(deleteBtn);

  if (inputTask.value === "") {
    alert('Please Enter a Task');
  } else {
    taskContainer.insertBefore(task, taskContainer.firstChild);
  }

  inputTask.value = "";

  checkBtn.addEventListener('click', function () {
    checkBtn.classList.toggle('disable');
    task.classList.toggle('task-done');
  })

  deleteBtn.addEventListener('click', function (e) {
    task.remove();
  })
})