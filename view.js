let input1 = document.createElement("input")
input1.type = "number"

let input2 = document.createElement("input")
input2.type = "number"

let bodyElement = document.querySelector("body")
bodyElement.append(input1, input2)

let addition = document.createElement("button")
addition.append("add")
bodyElement.append(addition)

let multiplyButton = document.createElement("button")
multiplyButton.append("multiply")
bodyElement.append(multiplyButton)

let division = document.createElement("button")
division.append("division")
bodyElement.append(division)

let outputdiv = document.createElement("div")
bodyElement.append(outputdiv)