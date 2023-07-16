const calculator = {
    display: document.querySelector('.display'),

    renderDisplay(){
        const displayButtons = document.querySelectorAll('.number-button, .operation-button')
        displayButtons.forEach(button => {
            button.addEventListener('click', () => {
                calculator.display.innerHTML += button.innerHTML
            })
        })
    },

    clearDisplay(){
        const clearButtons = document.querySelectorAll('.clear-button')
        clearButtons.forEach(button => {
            button.addEventListener('click', () => {
                button.innerHTML === 'AC'? calculator.display.innerHTML = '': calculator.display.innerHTML = calculator.display.innerHTML.slice(0,-1)
            })
        })
    },
    

}

main()

function main(){
    calculator.renderDisplay()
    calculator.clearDisplay()
}


