function sum(a, b) {
    return a + b;
}
/* sum('x', 'y'); apare deja eroarea si o primim si in terminal */
function hello(firstName, lastName) {
    console.log("Hello " + firstName + " " + lastName + "!");
}
hello('Ruxi', 'Ioana'); /* ma obliga sa dau nume parametrilor, altfel va aparea ca eroare, in JS este insa legal pana il rulam (acolo apare eroarea) */
var res = sum(10, 20);
console.log(res);
/* pentru a compila acest fisier, trebuie sa scriem "tsc test.ts" si va fi transformat intr-un .js (scriem in terminal) */
// conteaza tipul de date, in typescript
