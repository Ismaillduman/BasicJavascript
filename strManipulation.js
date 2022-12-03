let day='tuesday '
console.log(day.length) //8

let subday= day.slice(4,7)
console.log(subday) //day

console.log(day[1])//u

//tue   day
let splitday=day.split("s")// split from s (s not include)
console.log(splitday)
console.log(splitday[1].length)
console.log(splitday[1].trim().length)// trim remove the gap

let date='23'
let nextDate='27'
let diff=parseInt(nextDate) - parseInt(date) // string to integer with parseInt
console.log(diff)
console.log(diff.toString())  //string to integer


//concatenate to string
let day1= "These days "
let newQuote = day1+ "pass, other days come, but these days are unforgettable."
let val= newQuote.indexOf('day') //what ist the index of  day  in this string
console.log(val)

let count=0
while(val!==-1){
count++
val= newQuote.indexOf('day', val+1)
}
console.log(count)
/*If the word day is in a sentence, the value is not -1. 
In this case it goes inside whileLopp. and the counter is an increment. 
Then it searches again from the index it found the word day, 
if it finds it, it enters the loop again and its counter is incremented.
 When it cannot find the word day then the value is -1 and the loop is broken*/


