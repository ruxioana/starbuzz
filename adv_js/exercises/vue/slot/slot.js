import 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js'

Vue.component('my-link', {
    template: `
    <a :href="url">
        <slot></slot>
    </a>
    `,
    props: ['url']
});

let app = new Vue({
    el: '#app'
});