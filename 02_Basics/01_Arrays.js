//Array
const arr = [5, 3, 2, 6, 1]
const batter = [ "rohit", "virat", "hardik"]

const arr2 = new Array(11, 22, 33, 44)
console.log(arr2[2]) // accessing by index
//arr.push(99)
//arr.pop() it pop the last element out of array
//arr.unshift(122) //got add on start means it shift all the value
console.log(arr)
console.log(arr.indexOf(6)) //finding index using value 
console.log(arr2)

//slice 
//this operation can slice the element using index
// it does not include last index that given e.g having arr of 0to5 (2,4) it give 2,3 but does not inculude 4
// it have (start, end) index but we did include(start to end-1)
console.log("Before slice ", arr)
const first = arr.slice(0,3)
console.log("After Slice of 0to3 we get", first)
console.log("Origin array doesn't have any effect ",arr)

//splice
//splice is  totally different fron slice here we (start,deletecount)
//we delete element from array from start till go until delete count is finished

console.log("before splice", arr)
const second = arr.splice(0,3)
console.log("After Splice of 0to3 we get ",second)
console.log("After splice origin array ", arr)