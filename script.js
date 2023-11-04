// Get the output element
const output = document.getElementById("answer")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const zero = document.getElementById("zero")
const minus = document.getElementById("minus")
const add = document.getElementById("add")
const divide = document.getElementById("divide")
const multiply = document.getElementById("multiply")
const equals = document.getElementById("equals")
const clear = document.getElementById("clear")

// Function to handle button clicks
function handleButtonClick(e) {
  const button = e.target
  const buttonText = button.textContent

  if (buttonText === "=") {
    // Perform calculation and update the output
    try {
      output.textContent = eval(output.textContent)
    } catch (error) {
      output.textContent = "Error"
    }
  } else if (!isNaN(buttonText)) {
    output.textContent += buttonText
  } else {
    // Handle operators like +, -, *, /
    output.textContent += ` ${buttonText} `
  }
}

function clearinput() {
  output.textContent = ""
}

document.addEventListener("keydown", (event) => {
  const keyAsNumber = parseInt(event.key, 10)
  if (event.key === "1") {
    output.textContent += keyAsNumber
  } else if (event.key === "2") {
    output.textContent += keyAsNumber
  } else if (event.key === "3") {
    output.textContent += keyAsNumber
  } else if (event.key === "4") {
    output.textContent += keyAsNumber
  } else if (event.key === "5") {
    output.textContent += keyAsNumber
  } else if (event.key === "6") {
    output.textContent += keyAsNumber
  } else if (event.key === "7") {
    output.textContent += keyAsNumber
  } else if (event.key === "8") {
    output.textContent += keyAsNumber
  } else if (event.key === "9") {
    output.textContent += keyAsNumber
  } else if (event.key === "0") {
    output.textContent += keyAsNumber
  }
  if (event.key === "Enter") {
    // Prevent the default behavior of the "=" key (e.g., form submission)
    event.preventDefault()
    // Perform the calculation and update the output
    try {
      output.textContent = eval(output.textContent)
    } catch (error) {
      output.textContent = "Error"
    }
  } else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
    // Handle numeric keys and operators like +, -, *, /
    output.textContent += ` ${event.key} `
  }
})

// Add event listeners to all the buttons
one.addEventListener("click", handleButtonClick)
two.addEventListener("click", handleButtonClick)
three.addEventListener("click", handleButtonClick)
four.addEventListener("click", handleButtonClick)
five.addEventListener("click", handleButtonClick)
six.addEventListener("click", handleButtonClick)
seven.addEventListener("click", handleButtonClick)
eight.addEventListener("click", handleButtonClick)
nine.addEventListener("click", handleButtonClick)
zero.addEventListener("click", handleButtonClick)
minus.addEventListener("click", handleButtonClick)
add.addEventListener("click", handleButtonClick)
divide.addEventListener("click", handleButtonClick)
multiply.addEventListener("click", handleButtonClick)
equals.addEventListener("click", handleButtonClick)
clear.addEventListener("click", clearinput)
