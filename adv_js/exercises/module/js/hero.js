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

export { Hero } /* sau putem scrie export { default } adica exportam absolut tot din acest fisier */