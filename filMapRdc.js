
let scores = Array(3) 
scores = new Array(12,13,14,16)
var sum=0
for(let i=0;i<scores.length;i++){

    sum= sum + scores[i]
//console.log(marks[i])
}
console.log("sum= "+sum)


//reduce method
let total= scores.reduce((sum, score)=>sum+score,0)
console.log(total)

//create a new Array with even numbers , multiply each value with 3 , sum them array
//filter method

let newfilterEvenscores= scores.filter(score=>score%2==0)
console.log("newfilterEvenscores "+ newfilterEvenscores)


let mappedArray=newfilterEvenscores.map(score=>score*3)
console.log("mappedArray " +mappedArray)

let totalValue= mappedArray.reduce((sum,val)=> sum+val,0)
console.log(totalValue+ " Total value")

//we can do all of this code with in a line code.

var scores1=[12,13,14,16]

let sumValue= scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(sumValue+"sumValue")