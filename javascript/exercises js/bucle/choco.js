var money = 5;
var price = 1;
var chocolates = 0;

while (money >= price) {
    money -= price;
    chocolates++;
}
document.write("I bought " + chocolates + " chocolates and have " + money + " money left.");
document.write("</br>");
document.write("I have " + money + " money left");

do {
    money -= price;
    chocolates++;
} while (money >= price)
console.log("I bought " + chocolates + " chocolates and have " + money + " money left.");

var number = 0;
while(number < 5) {
 if(number == 3) {
    break; /* aici se oprestsc iteratiile si se vor afisa doar 0, 1 si 2 */
 }
 console.log(number);
 number++;
} 

var numbers = 0;
while(numbers < 5) {
 if(numbers == 3) {
    numbers++;
    continue; /* aici sare iteratia si se trece la urmatoarea linie de cod, dar opreste doar iteratia curenta; nu se va afisa 3 */
 }
 console.log("numbers="+numbers);
 numbers++;
} 