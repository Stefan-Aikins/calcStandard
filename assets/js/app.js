/*
show no value when page loads
print zero to h2 element when power button is clicked
*/

// turn on and off calculator
function powerCalculator() {
    if (displayResults.innerText != '') {
        displayResults.innerText = '';
    } else if (displayResults.innerText == '') {
        displayResults.innerText = parseInt(0);
    }
}
// function to perform when power button is clicked
powerBtn.addEventListener('click', powerCalculator)

//Digits
let numbers = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0
}




