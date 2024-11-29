document.addEventListener("DOMContentLoaded", function() {

const display = document.getElementById("display");
const last = document.getElementById("lastcalculation")
let lastcalc = ''

window.calculate = function(input) {
    if (display.value == "Error"){
        display.value = '';
    }
    display.value += input;
}

window.calc1 = function() {
    lastcalc = display.value
    try{
        display.value = eval(display.value)
    }
    catch{
        display.value = "Error"
    }
    last.value = lastcalc
}

window.clear1 = function() {
    display.value = '';
}

});