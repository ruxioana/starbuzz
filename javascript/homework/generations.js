var gen = "You belong to ";
var age = prompt("How old are you?", "write your age here");

if(age<=6) {
    alert("You're still a child!" + gen + "generation alpha.");
} else if (age<=20) {
    alert("You're a teenager." + gen + "generation Z.");
} else if (age<=35){
    alert("Your're evolving!" + gen + "generation Y.");
} else if (age<=50){
    alert("Adulthood is here!" + gen + "generation X.");
} else if (age<=69) {
    alert("Enjoy retirement." + gen + "the baby boomers.");
} else if (age>=70) {
    alert("Wow... your're old!" + gen + "the builders.");
} else {
    alert("Just how long will you live?");
}