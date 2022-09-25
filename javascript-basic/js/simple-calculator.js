function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function calculate(operator) {
    let number1 =  parseInt(firstNumber.value)
    let number2 =  parseInt(secondNumber.value)
    let result = 0;
    switch (operator) {
        case 'add':
            result = add(number1, number2)
            break;
        case 'sub':
            result = subtract(number1, number2)
            break;
        case 'multiply':
            result = multiply(number1, number2)
            break;
        case 'divide':
            result = divide(number1, number2)
            break;
    }
    return result;
}

function showResult(result){
    resultElement.innerHTML = result
}

let firstNumber = document.getElementById('first_number')
let secondNumber = document.getElementById('second_number')
let addBtn = document.getElementById('add_btn')
let subBtn = document.getElementById('sub_btn')
let multiplyBtn = document.getElementById('multiply_btn')
let divideBtn = document.getElementById('divide_btn')
let resultElement = document.getElementById('result')

addBtn.addEventListener('click', function(){
    let result = calculate('add')
    showResult(result)
})
subBtn.addEventListener('click', function(){
    let result = calculate('sub')
    showResult(result)
})
multiplyBtn.addEventListener('click', function(){
    let result = calculate('multiply')
    showResult(result)
})
divideBtn.addEventListener('click', function(){
    let result = calculate('divide')
    showResult(result)
})


