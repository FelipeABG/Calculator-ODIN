const display = document.querySelector('.display')
let canUseDot = true


const expression = {
    firstNumber: undefined,
    secondNumber: undefined,
    operator: undefined,
    indexofOperator: undefined
}


calculator()

function calculator(){

    const displayButtons = document.querySelectorAll('.number-button, .operation-button')
    displayButtons.forEach(button => {
        button.addEventListener('click', () => {
            renderDisplay(button.innerHTML)
        })
    })

    const dotButton = document.querySelector('.dot-button')
    dotButton.addEventListener('click', () => {
        if(canUseDot){
            renderDisplay('.')
        }
        canUseDot = false
    })

    const clearButtons = document.querySelectorAll('.clear-button')
    clearButtons.forEach(button => { 
        button.addEventListener('click', () => {
            if(button.innerHTML === 'DEL'){
                display.innerHTML = display.innerHTML.slice(0,-1)
                resetExpression()
            }
            else{
                clearDisplay()
                resetExpression()
            }

        })
    })

    const operationButtons = document.querySelectorAll('.operation-button')
    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            if(!expression.operator){
                getPartialExpression()
            }
            else{
                expression.secondNumber = Number(display.innerHTML.slice(expression.indexofOperator + 1,display.innerHTML.length -1))
                expression.indexofOperator = display.innerHTML.slice(-1)
                clearDisplay()
                renderDisplay(operate(expression.firstNumber, expression.secondNumber, expression.operator)+expression.indexofOperator)
                resetExpression()
                getPartialExpression()
            }
        })
    })

    const equalButton = document.querySelector('.equal-button')
    equalButton.addEventListener('click', () => {
        expression.secondNumber = Number(display.innerHTML.slice(expression.indexofOperator + 1))
        clearDisplay()
        renderDisplay(operate(expression.firstNumber, expression.secondNumber, expression.operator))
        resetExpression()
    })

}  



function renderDisplay(elementToRender){
    display.innerHTML += elementToRender
}

function clearDisplay(){
    display.innerHTML = ''
    canUseDot = true

}

function operate(firstNumber, secondNumber, operator){
    switch(operator){
        case '+':
            return firstNumber + secondNumber
        case '-':
            return firstNumber - secondNumber
        case '*':
            return firstNumber * secondNumber
        case '/':
            return firstNumber / secondNumber
        case '%':
            return firstNumber % secondNumber
    }
}

function getPartialExpression(){
    expression.firstNumber = Number(display.innerHTML.slice(0,-1))
    expression.operator = display.innerHTML.slice(-1)
    expression.indexofOperator = display.innerHTML.indexOf(expression.operator)
    canUseDot = true
}

function resetExpression(){
    expression.firstNumber = undefined
    expression.secondNumber = undefined
    expression.operator = undefined
    expression.indexofOperator = undefined
    canUseDot = true
}