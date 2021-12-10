const quotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
];

const app = Vue.createApp({
 
    data(){
        return{
           frases: quotes,
           newQuote:"Hola mundo",
        }
    },
    methods: {
        /* addQuote(event){ //Metodo que se usó cuando en el html estana asi  v-on:keypress="addQuote"
            console.log(this.newQuote, event);
             const {keyCode} = event
             const {code} = event
             let quote = {
                 quote: this.newQuote,
                 author: "Jhonatan Wagner" 
             }
             if(code =="Enter" || keyCode == "13"){
                this.frases.unshift(quote);
             }
        }, */
        addQuote(){
             
             let quote = {
                 quote: this.newQuote,
                 //author: "Jhonatan Wagner" 
             }
                this.frases.unshift(quote);
             
        },
    }
  
});

app.mount('#myApp');