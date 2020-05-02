const readline = require('readline');

const reader = readline.createInterface({ /* instanta care citeste din input-ul pe care il vom scrie noi */
    input: process.stdin /* ii spunem de unde sa citeasca caracterele */
});

n = 0;

console.log('Please enter your age: ');

reader.on('line', function(line) {
    try {
        if (isNaN(line)) throw new TypeError('The input must be a number');
        if (line < 1) throw new RangeError('The input must be bigger than 0');
        if (line > 999) throw new RangeError('The number must be smaller than 999');
    } catch (error) {
        console.log(error.message + '. PLease try again: ');
        return; /* iese din functie */
    }
    // n = line; /* line este acum un string si nu vrea sa se converteasca la numar singur */
    n = parseInt(line); /* convertim line intr-un numar */
    console.log('Next year you will be ' + (n + 1));
    process.exit(0); /* i-am dat un cod de iesire: 0 inseamna succes - asta ca sa incheiem functia si sa nu mai fie activa, altfel reader ar fi asteptat sa citeasca o alta linie */
}); /* cand se intampla ceva, pe eveniment */