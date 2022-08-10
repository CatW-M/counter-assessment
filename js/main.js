const startInput = 1;
const startResult = 0;

let display = startResult;
let inputNumber = startInput;

let displayScreen = document.getElementById("display");
let entryInput = document.getElementById("input");
let addBtn = document.getElementById("add");
let subtractBtn = document.getElementById("subtract");

displayScreen.innerHTML = display;
entryInput.value = inputNumber;
function add() {

}
function changeColor(display) {
    if (display < 0) {
        displayScreen.style.color = `red`;
    } else {
        displayScreen.style.color = `black`}
}

addBtn.addEventListener(`click`, ()=>{
    if(isNaN(entryInput.value)) {
        alert("Error - Enter a number!");
    } else {
        display = parseFloat(display) + parseFloat(entryInput.value);
        displayScreen.innerHTML = display;
    }
    changeColor(display);
})

subtractBtn.addEventListener(`click`, ()=>{
    if(isNaN(entryInput.value)) {
        alert("Error - Enter a number!");
    } else {
        display = parseFloat(display) - parseFloat(entryInput.value);
        displayScreen.innerHTML = display;
    }
    changeColor(display);
})

