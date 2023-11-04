const submit = document.getElementById("submit")

function submitdata() {
  const userName = document.getElementById("name").value
  const age = document.getElementById("age").value
  const birthdate = document.getElementById("birthdate").value
  const email = document.getElementById("email").value
  const hash = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

  document.getElementById("userId").innerHTML = `USER ID: ${hash}`
  document.getElementById("userName").innerHTML = `NAME: ${userName} `
  document.getElementById("userAge").innerHTML = `AGE: ${age} YEARS OLD`
  document.getElementById("userBirthdate").innerHTML = `BIRTHDATE: ${birthdate}`
  document.getElementById("userEmail").innerHTML = `EMAIL: ${email}`
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    // Check if the length of the input values is greater than 0
    const userName = document.getElementById("name").value
    const age = document.getElementById("age").value
    const birthdate = document.getElementById("birthdate").value
    const email = document.getElementById("email").value

    if (userName.length > 0 || age.length > 0 || birthdate.length > 0 || email.length > 0) {
      submitdata()
    } else {
      alert("Please provide user details")
    }
  }
})

submit.addEventListener("click", submitdata)
