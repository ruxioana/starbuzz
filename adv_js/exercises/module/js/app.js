// acest fisier este cel care leaga toata aplicatia si restul fisierelor js

import {} from 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js';
/* import * as AllSupermen from './superman.js';  daca avem mai multe elemente de importat, putem sa le punem pe toate in "AllSupermen" de exemplu si doar sa importam asta, adica tot (*) ce se gaseste in AllSupermen */ 
import { Superman } from './superman.js';
import { Mage } from './mage.js';
import { Assassin } from './assassin.js';

/* iar pentru a accesa o componenta din modul, scriem AllSupermen.Superman de exemplu */
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