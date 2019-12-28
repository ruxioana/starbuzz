var car = { /* aici definim un obiect */
    make: "Mercedes-Benz", /* proprietatea - marca */
    model: "C200", /* proprietatile se scriu una sub alta cu virgula la final */
    year: 2018, /* proprietatea unui obiect este sinonim cu atributul unui obiect */
    color: "silver",
    passengers: 5,
    mileage: 2000,
    engineIsOn: false, /* variabila tine minte starea masinii, daca e oprita sau pornita */
    fuel: 50,
    maxFuel: 50, /* capacitatea rezervorului */
    mediumConsumption: 7.5, /* consum la suta de km */
    refill: function(num) { /* in paranteze putem da parametrii pentru aceasta functie; num e numarul de litri cu care vrem sa alimentam */
        if(this.fuel + num > this.maxFuel) {
            this.fuel = this.maxFuel;
            console.log("Too much!");
        } else {
            this.fuel += num;
        }
    },
    drive: function(distance) {
        if(this.distanceToEmpty() < distance) { /* !!!mereu daca scriem functii, trebuie sa punem si parantezele!!! */
            console.log("Too far!");
            distance = this.distanceToEmpty();
        }
        expectedConsumption = Math.round(distance * this.mediumConsumption / 100); /* expectedConsumption este diferit fata de this.mediumConsumption, de aceea nu se foloseste this. la primul consumption */
        this.fuel -= expectedConsumption;
        this.mileage += distance;
    },
    distanceToEmpty: function() { /* e un fel de proprietate calculata */
        return Math.round(this.fuel / this.mediumConsumption * 100); /* atunci cand dunctia este apelata, ea returneaza valearea acestei ecuatii; fara return nu se intampla nimic */
    },
    stop: function() { /* asta e un comportament, desi se scrie cam la fel cu proprietatile */
        if(this.engineIsOn) {
            this.engineIsOn = false; /* proprietatile se scriu cu this. inainte */
            console.log("Car stopped.");
        } else {
            console.log("Car is already stopped.");
        }
    },
    start: function() { /* functia unui obiect este sinonim cu metoda unui obiect */
        if(!this.engineIsOn) { /* este acelasi lucru cu engineIsOn == true */
            this.engineIsOn = true; /* "this" reprezinta obiectul in care sunt acum, de aceea se foloseste cand scriem in interiorul obiectului */
            console.log("Car started.");
        } else {
            console.log("Car is already started.");
        }
    },
}

car.mileage = 2150; /* schimbam valoarea kilometrajului */
console.log(car.year); /* putem cere informatii despre obiect, aici cerem anul fabricatiei */
console.log(car["mileage"]); /* verificam ca s-a schimbat kilometrajul - sintaxa este identica cu "car.mileage" */
car.start(); /* aceasta este o actiune - apleaza blocul de cod numit start */
car.start();

car.drive(100);
console.log(car.fuel);
car.drive(800);
console.log(car.fuel);
car.refill(30);
console.log(car.fuel);

// for(prop in car) { /* prop va lua fiecare nume al proprietatilor (si functiilor) obiectului */
//    console.log(prop + " = " + car[prop]); /* accesam si valoarea proprieattilor obiectului - aici car se comporta ca un array */
//}