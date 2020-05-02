class Hero {
    constructor(name, life, mana) {
        this.name = name;
        this.life = life;
        this.mana = mana;
    }
    firePrimary(anotherHero) { }
    fireSecondary(anotherHero) { }
    receiveHit(power) { }
    isAlive() {
        return this.life > 0;
    }
}

class Superman extends Hero {
    firePrimary(anotherHero) {
        this.mana -= 5;
        anotherHero.receiveHit(30);
    }
    fireSecondary(anotherHero) {
        this.mana -= 1;
        anotherHero.receiveHit(5);
    }
    receiveHit(power) {
        if(power > 10) {
            this.life -= 0.1 * power;
        }
    }
}

class Mage extends Hero {
    firePrimary(anotherHero) {
        this.mana -= 20;
        this.life += 2;
        anotherHero.receiveHit(15);
    }
    fireSecondary(anotherHero) {
        this.mana -= 10;
        this.life += 1;
        anotherHero.receiveHit(5);
    }
    receiveHit(power) {
        this.life -= 10;
        this.mana += power * 0.5;
    }
}

class Assassin extends Hero {
    firePrimary(anotherHero) {
        this.mana -= 8;
        anotherHero.receiveHit(20);
    }
    fireSecondary(anotherHero) {
        this.mana -= 5;
        anotherHero.receiveHit(15);
    }
    receiveHit(power) {
        this.life -= power * 0.3;
    }
}

var clark = new Superman("Clark Kent", 1000, 1000);
var merlin = new Mage("Merlin", 100, 300);
var aria = new Assassin("Aria", 600, 400);

clark.firePrimary(merlin);
merlin.firePrimary(aria);
merlin.fireSecondary(clark);
aria.firePrimary(merlin);
clark.fireSecondary(merlin);
aria.fireSecondary(clark);
clark.fireSecondary(aria);

console.log(clark);
console.log(merlin);
console.log(aria);

console.log(clark.isAlive());
console.log(merlin.isAlive());
console.log(aria.isAlive());