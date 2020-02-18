function double1(n) {
    return n * 2;
}
var double2 = function (n) { /* am definit aceeasi functie in doua moduri diferite */
    return n * 2;
} /* asta se cheama functie anonima - anonymus function */
double2(10);
var double3 = (n) => { n * 2; } /* asta este arrow function, in paranteza este parametrul, apoi rezulta si expresia pe care vrem sa o folosim */
double3(10);
/* var creaza variablie globale, double 1 e locala */

console.log([-2, -22, -36].every((n) => n < 0)); /* putem scrie functia "every" pentru arrays si asa, fara a defini explicit alta functie cu nume si toate cele */

var numbers = [12, 2, 4, 5, 7, 9, 8];
console.log(
    numbers.filter(n => n % 2 === 0)
           .some(n => n > 10) /* putem avea mai multe functii de-o data */
);