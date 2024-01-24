//create elements
var body = document.getElementsByTagName("body")[0]
var main = document.createElement("main")
var h1 = document.createElement("h1")
var input1 = document.createElement("input")
var input2 = document.createElement("input")
var button = document.createElement("button")
var resultDiv = document.createElement("div")

//set elements attributes
main.style.fontFamily = "Arial, Helvetica, sans-serif"
main.style.marginLeft = "40%"
main.style.marginTop = "10%"

h1.innerHTML = "Ethan"
h1.style.color = "gray"

button.textContent = "Add"

button.onclick = () => {
    try {
        if (isNaN(parseInt(input1.value) + parseInt(input2.value))) {
            throw "not a number"
        }
        resultDiv.innerHTML = parseInt(input1.value) + parseInt(input2.value)
        input1.style.border = "1px solid black"
        input2.style.border = "1px solid black"

        resultDiv.style.color = "black"
    } catch {
        resultDiv.innerHTML = "Please enter a number"
        resultDiv.style.color = "red"
        input1.style.border = "1px solid red"
        input2.style.border = "1px solid red"
    }
}

//append elements
body.appendChild(main)
main.appendChild(h1)
main.appendChild(input1)
main.appendChild(input2)
main.appendChild(button)
main.appendChild(resultDiv)

