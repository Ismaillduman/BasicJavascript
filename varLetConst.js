// var canbe created as a global level or functional level if i creat in a function level
//and want to write out of function thats an error
// when i not create in function level thats mean var is a global variabel
//let is can be created as a global level or block level. if i creat in a block {} level
//and want to write out of block thats an error
// when i not create in block level thats mean let is a global variabel

const greet = "evening"
//greet= "morning" can not reassigned


if(1==1){
    let animal="dog"
} 
//console.log(animal) let out of block not definied

function add(a,b){
var animal= "dog"
} //console.log(animal) var out of function  not definied

if(1==1){
    const animal="dog"
} console.log(animal)// const out of block not definied