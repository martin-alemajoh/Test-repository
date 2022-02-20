const person = {
    firstName: "Martin",
    lastName: "Alemajoh",
    age: 23,
    display: function (){
        console.log(this.age)
    } 
}

console.log(person.display())