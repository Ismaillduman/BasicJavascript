let marks = Array(6) // 6 is index number
marks = new Array(20,40,35,12,37,100)

marks =[20,40,35,12,37,100]

console.log(marks)

console.log(marks[2]) //35

marks[3]= 987

console.log(marks)//20,40,35,987,37,100

console.log(marks.length)//6 while length start from 1, index start from 0 

marks.push(65)// add new element as a last element
marks.pop()//delete last Element 
marks.unshift(12)// add as a first element
console.log(marks)
console.log(marks.indexOf(37))//elements index

console.log(marks.includes(120)+ " check to consist of element") // check to consist of element
console.log("****************************")




marks.slice(2,5)// out put start from 2 to 5-1. last index is not include
submarks= marks.slice(2,5)
// out put 40 35 987
console.log(submarks)
console.log(marks)




var sum=0
for(let i=0;i<marks.length;i++){

    sum= sum + marks[i]
//console.log(marks[i])
}
console.log("sum= "+sum)
