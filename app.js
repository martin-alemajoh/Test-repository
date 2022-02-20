const person = {
    firstName: "Martin",
    lastName: "Alemajoh",
    age: 23,
    display: function() {
        return this.age;
    } 
}

function makePerson(person){
    return person.firstName + " " + person.lastName
}

function makeHuman(human){
    return human.firstName + " " + human.lastName
}

function makeHuman(human){
    return human.firstName + " " + human.lastName
}

console.log(person.display())