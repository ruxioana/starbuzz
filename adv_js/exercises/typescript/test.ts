function sums(a: number, b: number): number { /* suma de a care e un numar, cu b care e tot un numar si rezultatul va fi tot un numar, e bine sa definim tipurile de date cu care lucram si ce ne rezulta */
    return a + b;
}

/* sum('x', 'y'); apare deja eroarea si o primim si in terminal */

// void inseamna ca nu va fi returnat nimic
function halli(firstName: string, lastName?:string): void { /* semnul intrebarii dupa un parametru, inseamna ca devine optional, dar tot vom primi "undefined" in JS */
    console.log(`Hello ${firstName} ${lastName}!`)
}

halli('Ruxi', 'Ioana'); /* ma obliga sa dau nume parametrilor, altfel va aparea ca eroare, in JS este insa legal pana il rulam (acolo apare eroarea) */

enum Direction {
    Up = 'UP', /* putem spune de la ce valoare vrem sa porneasca, altfel vor incepe de la 0, 1, etc */
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

function move(direction: Direction) {

}

let rez = sums(10, 20);

console.log(rez);

/* pentru a compila acest fisier, trebuie sa scriem "tsc test.ts" si va fi transformat intr-un .js (scriem in terminal) */
// conteaza tipul de date, in typescript