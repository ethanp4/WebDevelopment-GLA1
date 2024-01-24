var body = document.getElementsByTagName("body")[0]
var h1 = document.createElement("h1")
h1.innerHTML = "Ethan"
h1.style.color = "gray"

var input1 = document.createElement("input")
var input2 = document.createElement("input")
body.appendChild(h1)
body.appendChild(input1)
body.appendChild(input2)

var button = document.createElement("button")
button.textContent = "text"
body.appendChild(button)

var resultDiv = document.createElement("div")
body.appendChild(resultDiv)

//function for button onclick
button.onclick = () => {
    if (isNaN(input1.value) || isNaN(input2.value)) {
        resultDiv.innerHTML = "Please enter a number"
        resultDiv.style.color = "red"
    } else {
        resultDiv.innerHTML = parseInt(input1.value) + parseInt(input2.value)
        resultDiv.style.color = "black"
    }
}






