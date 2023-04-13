const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            dropdown: 'hidden',
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            dropdown: 'hidden',
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            dropdown: 'hidden',
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Francesco',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            dropdown: 'hidden',
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            dropdown: 'hidden',
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            dropdown: 'hidden',
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Andrea',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            dropdown: 'hidden',
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            dropdown: 'hidden',
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            dropdown: 'hidden',
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            dropdown: 'hidden',
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            dropdown: 'hidden',
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            dropdown: 'hidden',
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            dropdown: 'hidden',
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Giulia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            dropdown: 'hidden',
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Giulia, hai novità?',
                            status: 'sent'
                        },
                        {
                            dropdown: 'hidden',
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            dropdown: 'hidden',
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            dropdown: 'hidden',
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            dropdown: 'hidden',
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            dropdown: 'hidden',
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            dropdown: 'hidden',
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            dropdown: 'hidden',
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                    
                }
            ],

            currentChat: 0,

            typing: '',

            searchName: ''
        }
    },
    methods: {

        activeChat(i){
            return this.currentChat = i;
        },

        addMessage(){
            if(this.typing.length > 1){
                this.contacts[this.currentChat].messages.push({
                    dropdown: 'hidden',
                    date: '',
                    message: this.typing,
                    status: 'sent'
                })
            }
            this.typing = '';

            setTimeout(() => {
                this.AutoReply()
            }, 1000);
        },

        removeMessage(i){
            this.contacts[this.currentChat].messages.splice(i, 1)
        },

        AutoReply(){
            this.contacts[this.currentChat].messages.push({
                dropdown: 'hidden',
                date: '',
                message: 'Ok',
                status: 'received'
            })
        },

        searchInput(){
            const visible = this.contacts.filter((element) => {
                if (element.name.toLowerCase().includes(this.searchName)){
                    return element.visible = true;
                }
                else{
                    return element.visible = false;
                }
            });
            console.log(visible)
        },

        clickMenuDelete(msg){
            if(msg.dropdown == 'hidden'){
                return msg.dropdown = ''
            }
            else{
                return msg.dropdown = 'hidden'
            }
        },

        lastMessageShown(element){
            if (element.messages != false) {
                return element.messages[element.messages.length - 1].message
            }
            else{
                return 'Nessun messaggio'
            }
        }

    }
}).mount('#app')