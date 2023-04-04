const screenOne = document.querySelector("#firstScreen");
const screenTwo = document.querySelector("#secondScreen");
const span = document.querySelector(".msg");
screenOne.style.fontSize = "28px"

let result = "";
let isCalculated = false

function insertValue(value) {
    result += value
    screenOne.value = result;
}

//calcul

function calculate() {
    result = eval(screenOne.value)
    //screenOne.value = screenTwo.value
    
    screenTwo.value = result
    isCalculated = true
}

function clearDisplay() {
    result = "";
    screenOne.value = "";
    screenTwo.value = ""
    isCalculated = false
}

function backspace() {

    if(isCalculated) {
        screenOne.value = screenOne.value.slice(0, -1)
        screenTwo.value = ""
        result = ""
        result += screenOne.value
        //screenOne.value = ""
    } else {
        screenTwo.value = screenTwo.value.slice(0, -1)
        result = ""
    }
    
}
