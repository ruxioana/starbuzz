var game = {
    words: ['apple', 'orange', 'banana'],
    word: undefined, /* o sa ia valoarea unui cuvant din "words" */
    letters: [], /* litere incercate deja */
    triesLeft: 6,
    start: function() {
        this.word = this.randomWord();
    },
    randomWord: function() {
        let index = Math.floor(Math.random() * this.words.length);
        return this.words[index];
    },
    tryLetter: function(letter) {
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

function renderWord() {
    let text = game.word.split('')
                        .map(letter => game.letters.includes(letter) ? letter : '_') /* aici este un if la semnul intrebarii */
                        .join(' ');
    document.getElementById("word").innerText = text;
}

function renderDrawing() {
    let parts = ['head', 'body', 'left_arm', 'right_arm', 'left_leg', 'right_leg'];
    let visible = parts.slice(0, 6 - game.triesLeft);
    let invisible = parts.slice(6 - game.triesLeft);
    visible.forEach(name => document.getElementById(name).style.visibility = 'visible'); /* aici luam din css si modificam visibility */
}

function renderView() {
    renderLetters();
    renderWord();
    renderDrawing();
}

window.addEventListener('keydown', function(event) {
    if (game.isDead() || game.hasWon()) return;
    game.tryLetter(event.key);
    renderView();
})

game.start();
renderView();

/* game.word = 'APPLE';     in partea asta testam fiecare bucata in parte sa vedem daca se afiseaza bine
game.letters = ['A', 'E'];
game.triesLeft = 4;
renderLetters();
renderWord();
renderDrawing(); */ 