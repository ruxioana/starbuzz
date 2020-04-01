function spanTitle() {
    let title = document.querySelector('.title');
    let text = title.innerHTML;
    let letters = text.split('');
    let spans = letters.map(
        letter => {
            let span = document.createElement('span');
            span.innerText = letter;
            return span;
        }    
    );
    title.innerHTML = '';
    spans.forEach(span => title.appendChild(span));
    return spans; /* pentru a returna o lista cu span-urile create */
}
function shuffle(array) {
    array.sort( () => 0.5 - Math.random() );
}

let originalSpans = spanTitle(); /* ca sa nu folosim variabile globale; aici introducem fiecare litera taiata */
let oddOrEven = Math.round(Math.random()); /* ne returneaza 0 sau 1 */
let spans = originalSpans.filter( (value, index) => index % 2 ==  oddOrEven); /* filtram numerele impare */
shuffle(spans);
let spansToAnimate = spans.slice(0, 5);
spansToAnimate.forEach(span => span.classList.add('bounce')); 

/* cand facem aceste functii de slide, vor merge o singura data, daca nu stergem clasa precedenta, pentru ca elementul nostru va aveam ambele clase scrise (slide-ou si slice-in) si codul nu se mai executa pentru ca deja este clasa scrisa acolo */
function slideOut() { /* setam elementul nostru "welcome" sa fie in clasa .slide-out pentru a face tranzitia */
    document.querySelector('.welcome').classList.add('slide-out');
    document.querySelector('.welcome').classList.remove('slide-in');
}
function slideIn() { /* setam elementul nostru "back" sa fie in clasa .slide-in pentru a face tranzitia */
    document.querySelector('.welcome').classList.add('slide-in');
    document.querySelector('.welcome').classList.remove('slide-out');
}

document.querySelector('.welcome').addEventListener('click', slideOut);
document.querySelector('.back').addEventListener('click', slideIn);