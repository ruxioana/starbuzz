var startButton = document.querySelector("input");
var speed = 2000;

startButton.addEventListener("click", start);

window.addEventListener("keypress", keyPressed);

function start() {
    startButton.style.display = "none"; /* ascundem butonul, ar fi mers si cu style.visibility = "hidden", dar le ascunde pe toate, desi le randeaza si au acolo spatiul lor */
    console.log(randomPosition()); /* verificam */
    newLetter();
}

function keyPressed(event) {
    let letter = event.key; /* trebuie sa stim ce litera e apasata si o aflam din acest eveniment */
    div = document.querySelector("." + letter);
    document.querySelector("body").removeChild(div);
}

function newLetter() {
    let letter = randomLetter();
    let x = randomPosition();
    let y = randomPosition();
    let div = document.createElement("div");
    div.innerText = letter;
    div.style.top = y;
    div.style.left = x;
    div.className = "boxLetter " + letter; /* am setat clasele cu numele literei respective */
    document.querySelector("body").appendChild(div); /* abia acum este legat de html, altfel degeaba cream noi elemente, erau doar virtuale */
    setTimeout(newLetter, speed);
}

function randomLetter() {
    let letters = "abcdefghijklmnopqrstuvwxyz"; /* putem sa il lasam in string, considerandu-l un array */
    let pos = randomNumber(letters.length); /* pozitia din string; let e o variabila locala, se vede doar aici in functie, var e globala */
    return letters.charAt(pos);
}

function randomPosition() {
    return randomNumber(95) + "%";
}

function randomNumber(max) {
    return Math.round(Math.random() * max);
}