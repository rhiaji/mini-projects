const submit = document.getElementById("submit")

function addList() {
  const todo = document.getElementById("todo")
  const date = document.getElementById("date")
  const list = document.getElementById("todoContainer")

  if (todo.value.trim() === "") {
    alert("Please enter a task.")
    return
  }

  const div = document.createElement("div")
  div.className = "todoPlate"
  div.innerHTML = `<input type="checkbox" onclick="toggleTodo(this)">
  <p> ${todo.value} due on ${date.value} </p> 
  <button onclick="removeTodo(this)">Remove</button>`

  list.appendChild(div)

  todo.value = ""
  date.value = ""
}

// Function to toggle the completed status of a task
function toggleTodo(checkbox) {
  const todoItem = checkbox.parentNode

  if (checkbox.checked) {
    todoItem.classList.add("completed")
  } else {
    todoItem.classList.remove("completed")
  }
}

// Function to remove a task
function removeTodo(button) {
  const todoItem = button.parentNode
  todoItem.remove()
}

submit.addEventListener("click", addList)
