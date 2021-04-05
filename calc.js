let screen = document.getElementById('screen')
let screenValue = ' '
buttons = document.querySelectorAll('button')


function calc(eq) {
    return new Function('return ' + eq)();
}
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText
        console.log('button text is', buttonText)
        if (buttonText == 'X') {
            buttonText = '*'
            screenValue += buttonText
            screen.value = screenValue
        } else if (buttonText == 'C') {
            screenValue = ''
            screen.value = screenValue
        } else if (buttonText == '=') {
            screen.value = calc(screenValue)
        } else {
            screenValue += buttonText
            screen.value = screenValue
        }

    })
}