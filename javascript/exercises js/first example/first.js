var name = "Ruxi"; /*  urmeaza o concatenare */
var myMessage = "Hello " + name + "!"; /* asa declaram o variabila, se poate folosi si cu numere */
var myTime = 2000;
var isNight = false; /* it's boolean - numele este sugestiv */
var isMorning = false;
var nothing = null;

var date = new Date();
var hour = date.getHours(); /* ia data curenta si ne da ora de pe sistem */

hour = 0;
if (hour == 0) {
    alert("Happy New Year!");
} else if(hour >=20 || hour <= 6) {
    alert("Good night!");
    alert("Sleep tight!");
} else if (/* hour > 6 && */ hour <= 11) { /* this is redundant */
    alert("Good morning!");
} else if(hour <= 17) {
    alert("Good day!");
} else {
    alert("Good evening!");
}

if(isNight) {
    alert("Good night!"); 
    alert("Sleep tight!");
} else if (isMorning) {
    alert("Good morning!");
} else {
    alert("Good evening!");
}

setTimeout(sayHello, myTime); /* timpul e in milisecunde, si inainte de asta ii zicem sa faca actiunea sayHello */
    function sayHello() { /* aici am creat o noua instructiune - se numesc identificatori */
        // alert(myMessage); /* apare un pop-up cu "hello java script" - hence the alert */
        console.log(myMessage); /* folosim consola pentru a afisa mesajul, fara ca utilizatorul sa il vada */
    }
/* ridicarea la putere se face cu 2 stelute, adica 2ˆ10 este de fapt 2**10 */
/* var timp = 1;
timp++;
timp++; console.log(timp); */