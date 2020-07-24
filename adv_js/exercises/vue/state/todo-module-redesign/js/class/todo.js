export default class Todo {
    constructor(title) {
        this.title = title;
        this.isDone = false;
        this.color = '#' + Math.floor(Math.random()*16777215).toString(16);
    }
    switchDone() { /* vrem sa putem debifa un task daca e nevoie */
        this.isDone = !this.isDone;
    }
}