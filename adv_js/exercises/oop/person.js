class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`); /* pentru a putea folosi direct un obiect in ceea ce vrem sa afisam, trebuie sa punem ghilimele inverse cand scriem textul, iar obiectul intre acolade si cu semnul de dolar in fata lor */
    }
}

class Student extends Person { /* clasa student mosteneste clasa person, adica va avea atributele clasei person, dar va mai avea si alte atribute in plus daca doreste */
    constructor(name, age, height, course) { /* trebuie definite toate atributele pe care aceasta clasa noua le va avea, chiar si pe cele ale parintelui ei */
        super(name, age, height); /* apelam constructorul parintelui prin super.constructor() - sau mai simplu doar super() si se apeleaza automat, adica acel constructor al clasei person, pentru a lua de acolo atributele name, age, height */
        /* super. este exact ca this., doar ca se refera la parintele obiectului curent */
        // adaugam proprietatile in plus, fata de parinte
        this.course = course;
    }
    // suprascrierea metodelor:
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I like ${this.course}`); /* ici voom avea doua interpolari */
    }
}

var radu = new Person("Radu", 33, 170);
var ruxi = new Student("Ruxi", 24, 158, "Java Script");

radu.sayHello();
ruxi.sayHello(); /* comportamente diferite pentru aceeasi medoda; se mai numeste si polimorfism */