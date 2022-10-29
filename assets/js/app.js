
numberTyped.value = "";
let defaultValue = numberTyped.value;

//content to display when calculator is turned on or off
//when the text input is empty, clicking the power should turn on calculator and show 0
function turnOfOn() {
    if (defaultValue !== 0) {
        defaultValue = 0;
    } else if (defaultValue == 0 || defaultValue > 0 || defaultValue < 0) {
        defaultValue = 0;
    }
}

console.log(numberTyped, turnOfOn())

//The calculator shows zero when calculator is powered on
powerBtn.addEventListener('click', turnOfOn);