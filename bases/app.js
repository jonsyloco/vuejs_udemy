const app = Vue.createApp({
    /* template: `
        <h1>Hola mundo</h1>
        <p>desde appjs</p>
        ` */
    data(){
        return{
            author: "Bruce wayne",
            quote: "I'm batman",
        }
    },
    methods: {
        changeFrase(event){
            console.log("Hola",event);
            this.quote = "El wason"
            this.capitalize();
        },
        capitalize(){
            this.author = this.author.toUpperCase();
        }
    }
});

app.mount('#myApp');