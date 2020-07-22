import 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js'

let app = newVue({
    el: '#app',
    data: {
        name: null,
        age: null,
        framework: null,
        errors: []
    },
    methods: {
        validate() {
            // validate name not empty
            // validate age not empty
            // validate framework not empty
        }
    },
    computed: {
        hasErrors() {
            return errors.length > 0
        }
    },
});