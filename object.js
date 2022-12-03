//object is collection of properties

let person= {
    firstName: 'Alex',
    lastName:'deSouza'
}

console.log(person.firstName) // Alex
console.log(person['lastName']) 
person.firstName= 'Yusuf' // you can reassigned
console.log(person.firstName) // yusuf
person.gender='male' // you can create a new feature
console.log(person) 
delete person.gender
console.log(person)