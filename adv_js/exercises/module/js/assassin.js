import { Hero } from './hero.js';

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

export { Assassin }