function add(a, b) {
    return a + b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function calculator(a, b, callback) {
    return callback(a, b)
}

//function addCalculatorEvent(targetElement, callback){
  //  targetElement.addEventListener("click", function(){
     //   let inputNum1 = Number(input1.value)
       // let inputNum2 = Number(input2.value)
    
      //  let result = calculator(inputNum1,inputNum2,callback)
    
      //  outputdiv.append(result)

  //  })

//}

//addCalculatorEvent(addition,add)
//addCalculatorEvent(multiplyButton,multiply)
//addCalculatorEvent(division,divide)

addition.addEventListener("click", function(){
    let inputNum1 = Number(input1.value)
    let inputNum2 = Number(input2.value)

    let result = calculator(inputNum1,inputNum2,add)

    outputdiv.append(result)

})

multiplyButton.addEventListener("click", function(){
    let inputNum1 = Number(input1.value)
    let inputNum2 = Number(input2.value)

    let result = calculator(inputNum1,inputNum2,multiply)

    outputdiv.append(result)

})

division.addEventListener("click", function(){
    let inputNum1 = Number(input1.value)
    let inputNum2 = Number(input2.value)

    let result = calculator(inputNum1,inputNum2,divide)

    outputdiv.append(result)

})