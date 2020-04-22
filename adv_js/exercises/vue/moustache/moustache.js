var app = new Vue({
    el: '#app',
    data: {
        message: 'Do you like my moustache? }}',
        counter: 10,
        myClass: 'important'
    },
    methods: {
        
    },
    computed: { /* VueJS se uita in aceste proprietati sa vada daca s-a schimbat ceva in message (pentru ca metoda noastra depinde de message) si va efectua bucata de cod doar daca se schimba message */
        reversedMessage() { /* fiind acum in computed, cand apelam metoda in html, o vom apela fara paranteze, doar cu numele */
            return this.message
                       .split('')
                       .reverse()
                       .join('');
        }
    }
})