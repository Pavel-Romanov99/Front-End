var arr = []

var d = new Date
arr.push(d)

var newD = new Date(2018, 11, 8, 21, 0, 0)
arr.push(newD)


//get the number of days in a month
var daysInMonth = []
var d1 = new Date(d.getFullYear(), d.getMonth(),0)
var d2 = new Date(newD.getFullYear(), newD.getMonth(),0)


var finalDate1 = {
    date: d.getDate() + "." + d.getMonth() + "." + d.getFullYear(),
    time: d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds(),
    dayOfWeek: d.getDay(),
    numDays: d1.getDate() + " days"
}

var finalDate2 = {
    date: newD.getDate() + "." + newD.getMonth() + "." + newD.getFullYear(),
    time: newD.getHours() + ":" + newD.getMinutes() + ":" + newD.getSeconds(),
    dayOfWeek: newD.getDay(),
    numDays: d2.getDate() +  " days"
}

var final = []
final.push(finalDate1)
final.push(finalDate2)
console.log(final)