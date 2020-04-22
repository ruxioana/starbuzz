// construim o noua aplicatie Vue
var app = new Vue({
    el: '#app',
    data: {
        password: '', /* parola va fi modificata de fiecare data cand cineva modifica parola in input */     
    },
    computed: {
        score() {
            // definim noul score initial egal cu 0 (diferit fata de cel de mai sus)
            /* let newScore = 0; */
            // evaluam fiecare conditie dintre cele 5
            // adaugam 1 la noul score pentru fiecare conditie adevarata si 0 la fiecare conditie falsa: exemplu procedural
            /* newScore += this.hasSmallLetter(); /* pentru a nu mai scrie atatea linii (ca mai jos), we can assume, that the return valua of the function is either 0 for false, or 1 for true, so we can add that value directly to our newScore 
            newScore += this.hasUpperLetter();
            newScore += this.hasDigit();
            newScore += this.hasSpecialChar();
            newScore += this.isLongEnough(); */
            // o alternativa si mai compacta: exemplu functional
            score = [
                this.hasSmallLetter,
                this.hasUpperLetter,
                this.hasDigit,
                this.hasSpecialChar,
                this.isLongEnough
            ].reduce((score, func) => score + func(), 0); /* adaugam la score functia func(), care va lua pe rand fiecare functie de mai sus (si putem sa adaugam oricate functii noi mai vrem), iar scorul incepe de la 0 */
            return score;
            /* if(this.hasSmallLetter()) {
                newScore += 1;
            }
            if(this.hasUpperLetter()) {
                newScore += 1;
            }
            if(this.hasDigit()) {
                newScore += 1;
            }
            if(this.hasSpecialChar()) {
                newScore += 1;
            }
            if(this.isLongEnough()) {
                newScore += 1;
            } */
        },
        message() {
            let messages = [
                'the worst',
                'very weak',
                'still weak',
                'just medium',
                'better',
                'strong enough'
            ];
            return messages[this.score];
        }
    },
    methods: { /* Vue nu are voie sa lucreze cu date/metode globale, de aceea vom folosi this. */
        hasSmallLetter: function() {
            return /[a-z]/.test(this.password); /* expresiile regulate se scriu intre /[...]/, ea este o functie si are metoda test, iar noi vrem sa testam parola noastra si returneaza true sau false */
        },
        hasUpperLetter: function() {
            return /[A-Z]/.test(this.password);
        },
        hasDigit: function() {
            return /[0-9]/.test(this.password);
        },
        hasSpecialChar: function() {
            return /[^a-zA-Z0-9]/.test(this.password); /* ca sa negam tot ceea ce este intr-o clasa, punem acea caciulita ^, deci noi vom nega toate literele mici, mari si cifrele */
        },
        isLongEnough: function() {
            return this.password.length >= 8;
        }
    }
});