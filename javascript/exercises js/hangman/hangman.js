var game = {
    words: ['apple', 'orange', 'banana'],
    word: undefined, /* o sa ia valoarea unui cuvant din "words" */
    letters: [], /* litere incercate deja */
    triesLeft: 6,
    start: function() {
        this.word = this.randomWord();
    },
    randomWord = function() {
        let index = Math.floor(Math.random() * this.words.length);
        return this.words[index];
    },
    tryLetter = function(letter) {
        this.letters.push(letter);
        if(!this.word.split('').includes(letter)) { /* spargem stringul litera cu litera ca sa cautam daca litera apasata este in cuvant */
            this.triesLeft--;
        }
    },
    isDead: function() {
        return this.triesLeft == 0;
    },
    hasWon: function() {
        return this.word.split('')
                   .every(letter => this.letters.includes(letter)); /* toate literele din cuvant sunt incluse in letters */
    }
}

/* aceasta este partea de VIEW */
function renderLetters() { 
    document.getElementById("letters").innerText = game.letters.join(' ');
}
game.letters = ['A', 'E'];
renderLetters();