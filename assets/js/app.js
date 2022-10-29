
powerBtn.addEventListener('click', onAndOff)
let displayOutput = displayResults.textContent
displayOutput = parseInt(displayOutput.value)

//the display or output should go blank when on and off button is clicked
//if the on and off button is clicked and there is results on display, clear and leave empty
function onAndOff() {
    if (ddisplayResults >= 0 || displayResults <= 0) {
        displayResults = null;
    } else if (displayResults == null) {
        displayResults = 0
    }


}

