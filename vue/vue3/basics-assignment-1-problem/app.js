const app = Vue.createApp({
    data() { 
        return {
            name: "thong",
            age: 25,
            pictureUrl: "http://t1.gstatic.com/images?q=tbn:ANd9GcT5QaIgwYppBBVj5Tl9-SsTtuOh25VAVKcl6gL8cTBXrBWhh2-l75ao9FOn2D6VYJ2y1t3QD6s-aTeOmYqcVds"
        }
    },
    computed: {
        ageAfter5: function() {
            return this.age + 5
        }
    },
    methods: {
        getAgeAfter5years() {
            return this.age + 5
        },
        getRandomNumber() {
            return Math.random()
        }
    }
})

app.mount("#assignment")