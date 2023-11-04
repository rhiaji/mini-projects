const submit = document.getElementById("submit")

function todolist() {
  const toDo = document.getElementById("todo")
  const toFinish = document.getElementById("date")

  const jsonData = {
    title: toDo.value,
    finish: toFinish.value,
  }

  let list = localStorage.getItem("todolist")
  let arrList = []

  if (list) {
    arrList = JSON.parse(list)
  }

  arrList.push(jsonData)

  // Store the updated array in localStorage after converting it to a JSON string
  localStorage.setItem("todolist", JSON.stringify(arrList))

  // Reload the page
  location.reload()
}

function list() {
  const list = localStorage.getItem("todolist")
  const table = document.getElementById("todoContainer")

  if (list) {
    const arrList = JSON.parse(list)

    arrList.forEach((element, index) => {
      // Create a new div element
      const divElement = document.createElement("div")
      divElement.className = "todoPlate"

      const div2Element = document.createElement("div")
      div2Element.className = "todo"

      // Create a p element for the title and date
      const titleElement = document.createElement("p")
      titleElement.textContent = `Title: ${element.title}`

      // Create a p element for the title and date
      const finishElement = document.createElement("p")
      finishElement.textContent = `Date to Finish: ${element.finish}`

      // Create "Done" button
      const doneButton = document.createElement("button")
      doneButton.textContent = "Done"
      doneButton.id = `done_${index}`

      // Create "Delete" button
      const deleteButton = document.createElement("button")
      deleteButton.textContent = "Delete"
      deleteButton.id = `delete_${index}`

      // Append elements to the div
      div2Element.appendChild(titleElement)
      div2Element.appendChild(finishElement)
      divElement.appendChild(div2Element)
      divElement.appendChild(doneButton)
      divElement.appendChild(deleteButton)
      // Get the container div by ID
      const todoContainer = document.getElementById("todoContainer")

      // Append the div element to the "todoContainer" div
      todoContainer.appendChild(divElement)
    })
  } else {
    console.log("No data found in 'todolist'.")
  }
}

// Add an event listener to the todoContainer
const todoContainer = document.getElementById("todoContainer")

todoContainer.addEventListener("click", function (e) {
  if (e.target && e.target.tagName === "BUTTON") {
    // Check if the clicked element is a button

    // Access the ID of the clicked button
    const buttonId = e.target.id

    // Check if the clicked button is a "Delete" button
    if (buttonId.startsWith("done")) {
      const index = parseInt(buttonId.split("_")[1], 10)

      // Handle the delete action using the index
      handleList(index)
      // Alert that the item was deleted
      alert("Todo is done and will be deleted!")

      // Reload the page
      location.reload()
    } else if (buttonId.startsWith("delete")) {
      const index = parseInt(buttonId.split("_")[1], 10)
      // Handle the delete action using the index
      handleList(index)
      // Alert that the item was deleted
      alert("Your Todo list will be deleted!")

      // Reload the page
      location.reload()
    }
  }
})

function handleList(index) {
  const list = localStorage.getItem("todolist")
  const arrList = JSON.parse(list)

  // Remove the item from the array
  arrList.splice(index, 1)

  // Update localStorage with the modified array
  localStorage.setItem("todolist", JSON.stringify(arrList))
}

window.addEventListener("load", () => {
  list()
})

submit.addEventListener("click", todolist)
