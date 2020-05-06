import { Todo } from '../class/todo.js';

Vue.component('todo-list', { /* am facut o componenta de todo pe care sa o putem folosi oriunde */
    template: `
    <div class="todo-list">
        <h1> {{ list_name }} </h1>
        <div class="filters">
            <label>Show done:</label>
            <input type="checkbox" v-model="showDone">
        </div>
        <ul>
            <task 
                v-if="showDone || !todo.isDone"
                v-for="(todo, index) in todos"
                :todo="todo" 
                @checked="checkTodo(index)"
                @deleted="deleteTodo(index)"> <!-- in HTML, de exemplu "isDone" este case insensitive, deci HTML-ul il va transforma in "isdone" si nu va avea corespondent in proprietatile din js, unde este scris "isDone", motiv pentru care "is-done" va fi reinterpretat cum trebuie -->
            </task> <!-- am pus :todo="todo" pentru ca am facut simplificarea in task.js la props -->
        </ul>
        <div class="new_task">
            <div class="new_task_input">Task: <input type="text" v-model="task" @keyup.enter="saveTodo"></div> <!-- keyup este la apasarea unei taste, si noi am zis ca la apasarea tastei enter sa se salveze task-ul scris -->
            <div class="save_task">
                <button @click="saveTodo">Save item</button>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            todos: [ 
                new Todo('Something to do')
            ], /* este bine ca initial sa avem niste date de test aici, pentru a ne fi mai usor sa vizualizam aplicatia, in loc sa stam sa scriem noi un task nou de fiecare data */
            task: '',
            showDone: true
        }
    },
    props: [ 'list_name' ],
    methods: {
        saveTodo() {
            // adaugam valoarea din task in list de todo
            this.todos.push(new Todo(this.task)); /* trebuia sa fie this.task */
            // resetam task-ul
            this.task = '';
        },
        checkTodo(index) {
            this.todos[index].switchDone(); /* Vue va sti ca s-a modificat valoarea */
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
        }
    }
});