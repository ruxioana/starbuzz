alert = function() {
    var planet = document.getElementById("redplanet"); /* punem raspunsul returnat intr-o variabila pentru a putea lucra cu el */
    // document.querySelector("#redplanet"); /* aici luam din css, de aceea folosim hashtag */
    // document.querySelector("p"); /* va da primul element */
    planet.innerHTML = "Aliens approaching!"; /* schimbam interiorul paragrafului cu un nou text */
    /* cand a reulat js-ul in html, nu a gasit nici un text, pt ca html-ul nu fusese incarcat inca */
    planet.style.color = "red"; /* accesam css-ul */
}
clear = function() {
    var planet = document.querySelector("#redplanet");
    planet.innerHTML = "Nothing to report";
    planet.style.color = "black";
}
// document.querySelector("#redplanet").onclick = alert; /* aici nu mai scriem cu paranteze, pentru ca o leg de onclick - ca sa se apeleze doar atunci cand este apelat onclick; altfel se apeleaza functia atunci cand sunt puse parantezele rotunde */
document.querySelector("#redplanet").onmouseout = clear;