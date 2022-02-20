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

function makeMan(man){
    return man.firstName + " " + man.lastName
}

console.log(person.display())