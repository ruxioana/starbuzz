class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() { }
}

class Cat extends Animal {
    speak() {
        console.log('Meow!');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Woof!');
    }
}

class Duck extends Animal {
    speak() {
        console.log('Quack!');
    }
}

var cat = new Cat('Felix');
var dog = new Dog('Rex');
var duck = new Duck('Donald');
var doggo = new Dog('Lessie');

cat.speak();
dog.speak();
duck.speak();
doggo.speak();