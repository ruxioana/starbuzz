Vue.component('task', {
    template: `
        <li :class="{ done: todo.isDone }" class="task" @click="$emit('checked')">
            <div class="color_and_title">
                <div class="color" :style="{ backgroundColor: todo.color }"></div> 
                <div class="title">{{ todo.title }}</div>
            </div>
            <div class="controls">
                <div class="delete" @click="$emit('deleted')">
                    <i class="material-icons">delete</i>
                </div>
            </div>
        </li>
    `,
    props: [todo] /* daca sunt prea multe proprietati, nu putem tine cont de toate (e mai greu); asa ca trebuie sa setam acest atribut 'todo' pe task, pentru a-l putea folosi (in todo-list) */
});