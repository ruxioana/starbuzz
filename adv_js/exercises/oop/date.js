class RoDate extends Date { /* este o clasa generala/universala care da data curenta, iar noi vrem sa avem aceasta data in limba romana */

    sayInRomanian() {
        let months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 
                      'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 
                      'Noiembrie', 'Decembrie'];
        return `${this.getDay()} ${months[this.getMonth()]} ${this.getFullYear()}`;
    }
}

var date = new RoDate();
console.log(date.sayInRomanian());