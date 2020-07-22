Vue.component('task', {
    template: `
        <li :class="{ done: task.isDone }" class="task" @click="$emit('checked')">  
            <div class="title_container">
                <div class="color" v-bind:style="{ backgroundColor: task.color }"></div>
                <div class="title">{{ task.title }}</div>
            </div>
            <div class="controls">
                <div class="delete" @click="$emit('deleted')"><i class="material-icons">delete</i></div>
            </div>
        </li>
    `,
    props: ['task'] /* daca sunt prea multe proprietati, nu putem tine cont de toate (e mai greu); asa ca trebuie sa setam acest atribut 'todo' pe task, pentru a-l putea folosi (in todo-list) */
});