const Person=require ('./class.js')

class Pet extends Person{

    constructor(firstName,lastName){
        super(firstName,lastName)
    }

}

let pet =new Pet('Damla','cat')
console.log(pet.fullName())
console.log(pet.location)