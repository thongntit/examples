var app = new Vue({
    el: "#app",
    data() {
        return {
            goals: [],
            enterdValue: ""
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue)
            this.enterdValue = ""
        }
    }
})