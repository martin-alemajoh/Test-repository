const person = {
    firstName: "Martin",
    lastName: "Alemajoh",
    age: 23,
    display: function (){
        console.log(this.age)
    } 
}

function makePerson(person){
    return person.firstName + " " + person.lastName
}

console.log(person.display())