// generare 10 indirizzi email
// e stamparli in pagina all’interno di una lista.

const { createApp } = Vue

createApp ({
    data (){
        return {
            email: "",
            arrEmails: []
        }
    },
    methods: {
        richiestaEmail (){
            for(i = 0; i < 10; i++){

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((result) => {
                    console.log(result.data.response);
                    this.email = result.data.response ;
                    this.arrEmails.push(this.email);
                })
            }
                
        }
    },
    mounted(){

        this.richiestaEmail();
    }
}).mount("#app");

