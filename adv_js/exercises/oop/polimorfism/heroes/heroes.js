class Hero {
    constructor(name, life, mana) {
        this.name = name;
        this.life = life;
        this.mana = mana;
    }
    firePrimary() { }
    fireSecondary() { }
    receiveHit() { }
    isAlive() {
        return this.life > 0;
    }
}

class Superman extends Hero {
    firePrimary() {
        this.mana -= 5;
    }
    fireSecondary() {
        this.mana -= 1;
    }
    receiveHit() {
        this.life -= 0.1;
    }
}

class Mage extends Hero {
    firePrimary() {
        this.mana -= 20;
        this.life += 2;
    }
    fireSecondary() {
        this.mana -= 10;
        this.life += 1;
    }
    receiveHit() {
        this.life -= 10;
    }
}

class Assassin extends Hero {
    firePrimary() {
        this.mana -= 8;
    }
    fireSecondary() {
        this.mana -= 5;
    }
    receiveHit() {
        this.life -= 5;
    }
}

var clark = new Superman("Clark Kent", 1000, 1000);
var merlin = new Mage("Merlin", 100, 300);
var aria = new Assassin("Aria", 600, 400);

clark.firePrimary();
merlin.receiveHit();
merlin.firePrimary();
clark.receiveHit();
merlin.fireSecondary();
clark.receiveHit();
clark.fireSecondary();
merlin.receiveHit();

console.log(clark);
console.log(merlin);

console.log(clark.isAlive());
console.log(merlin.isAlive());