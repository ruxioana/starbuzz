/* am nevoie de un sablon/concept dupa care sa fac toate masinile, iar acest sablon se cheama clasa, cu proprietati obligatorii, ca sa nu uitam vreo proprietate importanta, ca de exemplu mileage care trebuie sa fie 0, sau marca masinii */
class Car { /* noua metoda de definire a claselor in js6 */
    constructor(make, model, year, color, maxSpeed) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.started = false;
        this.mileage = 0;
    }
    drive(distance) { /* asa se definesc functiile clasei, sub constructor si fara ; dupa ele */
        this.mileage += distance;
    }
    start() {
        this.started = false;
    }
    stop() {
        this.started = false;
    }
}

var Car = function(make, model, year, color, maxSpeed) { /* vechea metoda de definire a clasei */
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.started = false;
    this.mileage = 0;
    this.drive = function(distance) { 
        this.mileage += distance; 
    };
    this.start = function() {
        this.started = true;
    };
    this.stop = function() {
        this.started = false;
    };
}

var myFord = new Car("Ford", "Mondeo", 2016, "black", 210); /* este o instanta a clasei "Car", cu proprietatile date in acea clasa */
var myNationalCar = new Car("Dacia", "Logan", 2020, "white", 170);

myNationalCar.drive(100); /* va creste mileage, pentru ca este predefinit in clasa initiala */

var myCar = { /* putem adauga sau sterge proprietati/functii dinamic din consola; ex. myCar.passengers = 2 */
    make: "Ford", /* marca */
    model: "GT",
    year: 2020,
    mileage: 1100.5,
    maxSpeed: 300,
    color: "blue",
    started: false, /* boolean */
    drive: function(distance) { /* in consola putem apela functia asta prin myCar.drive(200), ceea ce inseamna ca vom conduce 200 km, care vor fi adaugati la mileage, iar daca apelam myCar.mileage, vom vedea ca s-a schimbat */
        this.mileage += distance; /* vrem sa schimbam proprietatea obiectului curent, altfel ar fi fost o variabila globala */
    }, /* functia/metoda este tot un fel de proprietate a obiectului */
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    }
}

var anotherCar = {
    make: "Chevy",
    model: "Bel Air",
    year: 1960,
    mileage: 3450,
    maxSpeed: 160,
    color: "red",
    started: true
}
