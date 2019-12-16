var scores = [78, 56, 19, 45, 89, 24 ,10, 45, 98, 46];
var fruits = ["oranges", "mandarines", "apples", 
            "nuts", "bananas", "kiwi"];

var max = 0; /* daca nu initializam cu nimic, va fi undefined si undefined este mereu mai mare, iar iteratiile urmatoare nu vor fi efectuate */
var position;

for(var i = 0; i < scores.length; i++) {
    if(scores[i] > max) {
        max = scores[i];
        position = i;
    }
}
document.writeln(max + " bule pe pozitia " + position);
console.log(scores.sort);

maxi = fruits[0];
for(var j = 0; j < fruits.length; j++) { /* stringurile se compara in ordine alfabetica - litera o este dupa celalalte litere, deci e mai mare */
    if(fruits[j] > maxi) {
        maxi = fruits[j];
        position = j;
    }
}
document.writeln("The biggest fruits are " + maxi);