const calculator = document.getElementById("calculator")
const dataInput = document.getElementById("dataInput")
const todoList = document.getElementById("todoList")

function nextpage(event) {
  const button = event.target
  const buttonText = button.textContent

  if (buttonText === "CALCULATOR") {
    location.href = "index.html"
  } else if (buttonText === "DATA INPUT") {
    location.href = "input.html"
  } else if (buttonText === "TO DO LIST") {
    location.href = "todo.html"
  }
}

calculator.addEventListener("click", nextpage)
dataInput.addEventListener("click", nextpage)
todoList.addEventListener("click", nextpage)
