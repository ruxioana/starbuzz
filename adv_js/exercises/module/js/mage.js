import { Hero } from './hero.js';

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

export { Mage }