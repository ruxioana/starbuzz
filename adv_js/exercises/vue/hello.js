/* elementele noi, create de noi, precum acel tag 'hello' se numesc componente */
Vue.component(
    'hello',
    {
        'template': "<div>Hello World!</div>" /* este un template fix, care va fi afisat in tag-ul hello */
    }
);

var app = new Vue({ /* primeste ca parametru un obiect intre acolade */
    el: '#app', /* de la element, e o proprietate, elementul pe care il controleaza Vue */
    data: { /* datele aplicatiei (model) */
        message: "Hello Vue!", /* daca in consola de exemplu vrem sa schimbam mesajul, putem scrie app.message = 'Hello World!' si se va schimba automat si in pagina noastra */
        show: true, /* daca e true, mesajul va fi afisat, daca este fals, mesajul va disparea - este scos din DOM de VueJS prin app.show = false */
        todos: [
            "Learn JavaScript",
            "Learn Vue.JS",
            "Learn React",
            "Be free"
        ],
        title: "This is a welcome message"
    },
    methods: { /* metodele se definesc separat, nu tot in data */
        reverse: function() {
            this.message = this.message.split('') /* am spart mesajul in caractere separate */
                                       .reverse() /* am inversat fiecare caracter din mesaj */
                                       .join('') /* am unit caracterele cu un caracter gol */
        }
    }
});