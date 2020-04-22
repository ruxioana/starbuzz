class Animal {
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

var cat = new Cat();
var dog = new Dog();
var duck = new Duck();

cat.speak();
dog.speak();
duck.speak();