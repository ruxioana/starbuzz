var app = new Vue({
    el: '#app',
    data: {
        isActive: true
    },
    methods: {
        toggleActive() {
            this.isActive = !this.isActive;
        },
        /* randomColor() {
            return '#' + Math.floor(Math.random()*16777215).toString(16); /* sunt 16777215 de posibilitati de culori (255*255*255) si transformam acest numar in baza 16, adica in Hexa 
        } */
    },
    // in computed trecem functiile care nu au legatura cu datele de mai sus si pot fi de sine statatoare (si de asemenea nu vrem sa se randeze la fiecare click sau ceva asemanator)
    computed: { /* la acest exemplu in culori, poate vrem ca atunci cand apasam pe text sa ramana culoarea la fel si doar taietura sa se schimbe - pentru asta trebuie adaugata functia in computed, ca sa se randeze o singura data */
        randomColor() {
            return '#' + Math.floor(Math.random()*16777215).toString(16); /* sunt 16777215 de posibilitati de culori (255*255*255) si transformam acest numar in baza 16, adica in Hexa */
        }
    }
});