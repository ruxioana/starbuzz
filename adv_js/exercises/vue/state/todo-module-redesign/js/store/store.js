import Todo from "../class/todo.js";



export default new Vuex.Store({
    state: {
        todos: [
            new Todo('Something to do')
        ], /* este bine ca initial sa avem niste date de test aici, pentru a ne fi mai usor sa vizualizam aplicatia, in loc sa stam sa scriem noi un task nou de fiecare data */
        showDone: true
    },
    mutations: {
        saveTodo: (state, task) => state.todos.push(new Todo(task)),
        checkTodo: (state, index) => state.todos[index].switchDone(), /* Vue va sti ca s-a modificat valoarea */
        deleteTodo: (state, index) => state.todos.splice(index, 1),
        changeShowDone: (state, value) => state.showDone = value
    },
    getters: {
        filteredTodos: (state) => state.todos.filter(todo => state.showDone || !todo.isDone)
    }
})