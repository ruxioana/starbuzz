import { Hero } from './hero.js'; /* punct e directorul curent in care se afla fisierul nostru; daca am scrie ../../hero.js, punct-punct ar insemna directorul parinte, deci directorul parinte al directorului parinte */

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

export { Superman }