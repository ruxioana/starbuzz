var button = document.querySelector("input");
var element = document.getElementById("time");

var showTime = function() {
    // var date = Date();
    element.innerText = Date(); /* in loc sa folosim variabila "date", scriem direct data */
}
function changeStyle() {
    // element.style.color = "red"; /* nu se prea foloseste in js, ci se modifica de obicei din css daca este ceva static */
    element.className = "newStyle";
}

// showTime();
// button.onclick = showTime;
// button.onclick = changeStyle;
button.onclick = function() { /* am facut o functie care cuprinde ambele functii, ca sa fie apelate amandoua, altfel a doua o suprascrie pe prima */
    showTime();
    changeStyle(); /* aici problema este ca daca la un moment dat nu mai vrei una dintre ele, trebuie sa modifici tot, pentru ca ele sunt asociate */
}
button.addEventListener("click", showTime);
button.addEventListener("click", changeStyle); /* ambele fac acelasi lucru ca mai sus */

// button.removeEventListener("click", changeStyle); /* se sterge un event, nu se mai aplica */