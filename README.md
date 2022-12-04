# **JAVASCRIPT**



## _In JavaScript I can defined 3 typeof variables._
---
1.	var
2.	let
3.	const


I can learn “a” is what kind of variable with this method. console.log(typeof(a));
```javascript
let a =4
console.log(a);
console.log(typeof(a));
```



Also wird alles in JavaScript üblicherweise als Zahlendatentyp behandelt.

```javascript
let c = "IsmailDuman"   //string
console.log(typeof(c));
let required = true     //boolean
console.log(typeof(required));

console.log(!required)
to reverse the variable Boolean true—false false—true. (!)
```


## `Differences between the variables`
1.	we can not redeclare with led keyword but that’s possible with var keyword
2.	But we can be reassigned with let. Exmp: let c= “Ismail” c= 12
3.	You cannot reassign const variable. That can be understandable from the name constant
4.	When I want to not change a variable so that I must create const variable. But I want to be reassigned later, I have to create let variables. But I want to both reassign and redeclare var variables



# `Do while and While Loop`

While loop checks the condition first and then executes the statement(s), whereas do while loop will execute the statement(s) at least once, then the condition is checked. 
But if you want to execute code once and then monitor status, then go with the do while loop.
If you're going to have any requirement of executing once and then validate it, then directly go with while loop.

`For Loop`

The major difference between for loop and the while loop is that for loop is used when the number of iterations is known, whereas execution is done in the while loop until the statement in the program is proved wrong

If you have something assignment which you need to evaluate to provide files of it. while loop

And if you have something which you want to run for and then you come back.


** _`Array`_ **

This usage is valid in JavaScript. An array with different data types: string, numbers, and a boolean.

```javascript 
let array = [1, 2, 3, "hello world", 4.12, true];
```
The slice( ) method doesn’t include the last given element.

Important Note: the Slice( ) method can also be used for strings.




# `Splice ( )`
The name of this function is very similar to slice( ). This naming similarity often confuses developers. The splice( ) method changes an array, by adding or removing elements from it. Let’s see how to add and remove elements with splice( ):
Removing Elements
For removing elements, we need to give the index parameter, and the number of elements to be removed:
array.splice(index, number of elements);
 
# `Adding Elements`
For adding elements, we need to give them as the 3rd, 4th, 5th parameter (depends on how many to add) to the splice ( ) method:
array.splice(index, number of elements, element, element);
As an example, I’m adding a and b in the very beginning of the array and I remove nothing:
array.splice(0, 0, 'a', 'b');
 




Split ( )
Slice( ) and splice( ) methods are for arrays. The split( ) method is used for strings. It divides a string into substrings and returns them as an array. It takes 2 parameters, and both are optional.
 

Now let’s split myString by commas, limit them to three substrings, and return them as an array:
let newArray = myString.split(",", 3);
 Only the first 3 elements are returned



# `A Basic Reduction`
Use it when: You have an array of amounts and you want to add them all up.
```javascript 
const euros = [29.76, 41.85, 46.5];

const sum = euros.reduce((total, amount) => total + amount); 

sum // 118.11
```
How to use it:
•	In this example, Reduce accepts two parameters, the total and the current amount.
•	The reduce method cycles through each number in the array much like it would in a for-loop.
•	When the loop starts the total value is the number on the far left (29.76) and the current amount is the one next to it (41.85).
•	In this particular example, we want to add the current amount to the total.
•	The calculation is repeated for each amount in the array, but each time the current value changes to the next number in the array, moving right.
•	When there are no more numbers left in the array the method returns the total value.


# `REDUCE FILTER MAP`

[ReduceFilter Link](https://dev.to/nehal_mahida/filter-map-and-reduce-in-js-when-and-where-to-use-281c)


# `JavaScript Methods`
JavaScript methods are actions that can be performed on objects.
A JavaScript method is a property containing a function definition.


# `Object methods`
```Javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
```
# `Accessing Object Methods`

You access an object method with the following syntax:
```javascript 
objectName.methodName()
```
You will typically describe fullName() as a method of the person object, and fullName as a property.
The fullName property will execute (as a function) when it is invoked with ().
This example accesses the fullName() method of a person object

# `Class`

[class link](https://javascript.info/class)

# `Javascript import and export`

[import export Link](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)

# `Inheritance`
[Inheritance Link](https://www.w3schools.com/js/js_class_inheritance.asp)