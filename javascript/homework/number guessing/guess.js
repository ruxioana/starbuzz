var startButton = document.querySelector("input");
var myNumber = prompt("What's my number?", "write your guess here");

startButton.addEventListener("click", start);

function start() {
    startButton.style.display = "none";
    newNumber(); 
    var num = newNumber();
}

function newNumber() {
    var numbers = [0,1,2,3,4,5,6,7,8,9];
    let div = document.createElement("div");
    let pos = randomNumber(numbers.length);
    document.querySelector("body").appendChild(div);
    return numbers.charAt(pos);
}
function randomNumber(max) {
    return Math.round(Math.random() * max);
}
function inquiry() {
    if(myNumber == num) {
        alert("Congrats! You found my number!");
    } else if (myNumber < num) {
        alert("too small");
    } else if (myNumber > num) {
        alert("big");
    }
}