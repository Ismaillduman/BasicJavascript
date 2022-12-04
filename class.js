module.exports = class Person { //module.exports is a key word to export this class
  age = 25;

  // getter The get syntax binds an object property to a function
  //that will be called when that property is looked up.

  get location() {
    return "canada";
  }

  //constructor is amethod which execute by default when you create object of the class

  constructor(firstName, lastName) {
    this.firstName = firstName //this.firstName eccessible to entire class,
    //ican not use directly firstName
    this.lastName = lastName
  }

  // i can create  a new method named fullName and 
  //in that method be able to use the constructor variabels
  fullName(){ 
    console.log(this.firstName+this.lastName)
  }
}
//let person=new Person('Tim','joseph')//this method os depending upon the object creation ,
// like what parameters you are sending while creating a object
/*let person1=new Person('Busra', 'yusuf')
console.log(person.fullName())
console.log(person1.fullName())*/

// age is class property but first name and lastname is instance property.
//so all the instance properties are we got an instance. 
//variables are defined inside the constructor