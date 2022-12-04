const Person = require('./class')

let person = new Person('Busra ','duman')
console.log(person.fullName())

//While writing our test automations, 
//it would be sense  to write the main methods in the files we will export.
// to Export module.exports= thats mean this file is public
//to import const className reqiure(./'fileName which we want to use')