import { Todo } from '../class/todo.js';

Vue.component('todo-list', { /* am facut o componenta de todo pe care sa o putem folosi oriunde */
    template: `
    <div class="todo-list">
        <h1>{{ list_name }}</h1>
        <div class="filters">
        <label>Show done:</label>
        <input type="checkbox" v-model="showDone" />
        </div>
        <ul>
        <task
            v-for="(todo, index) in filteredTodos"
            :key="index"
            :task="todo"
            @checked="checkTodo(index)"
            @deleted="deleteTodo(index)" 
        ></task> <!-- am pus :todo="todo" pentru ca am facut simplificarea in task.js la props -->
        </ul>
        <div class="new_task">
        New:
        <input type="text" class="task_input" v-model="task" @keyup.enter="saveTodo" />
        <div class="save_task">
            <button @click="saveTodo">+</button>
        </div>
        </div>
    </div>
    `,
    props: [ 'list_name' ],
    data() {
        return {
            todos: [
                new Todo('Something to do')
            ], /* este bine ca initial sa avem niste date de test aici, pentru a ne fi mai usor sa vizualizam aplicatia, in loc sa stam sa scriem noi un task nou de fiecare data */
            task: '',
            showDone: true
        }
    },
    methods: {
        saveTodo() {
            // adaugam valoarea din task in lista de todo
            this.todos.push(new Todo(this.task));
            // resetam task-ul
            this.task = '';
        },
        checkTodo(index) {
            this.todos[index].switchDone(); /* Vue va sti ca s-a modificat valoarea */
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
        }
    },
    computed: {
        filteredTodos() {
            return this.todos.filter(todo => this.showDone || !todo.isDone)
        }
    },
});