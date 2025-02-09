"Use Strict"; // treat all js code in newer version
//alert(3 + 3) we are using nodejs not browser, this is applicable in browser
///Code readibility  is our high priority


let name = "amitesh"
let age = 15
let ismarried = false
/* type of data type that we use mostly
1. number = 2 to power 53,all float value mein number type
2. bigint
3. boolean = true/false
4. null standalone value jab var  empty hota hai toh uska use krte hai
5. undefined=eska matlab ki abhi value assign nhi hui hai
6. symbol = jab hum unique cheez ki baat krte hai toh hum symbol ki baat krte hai 
8. string = ''we use any of them either single code of double code ""
*/
//object
//In javascript NULL is object

console.log(typeof null)
console.log(typeof undefined)

///     SUMMARY
//there are two datatypes

// 1. Primitive[ these data are CALL BY VALUE]->
// 7 types-> when they call it directly called by their value 
// String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const result = 28.4
const isLoggedin = true
const lowTemp = null



// 2. Non Primitive[ these data are CALL BY REFERENCE] 
// these data when called they call  by their address(refrence)
// types-> Array, object, function.

// Array
const country = ["America", "England", "Newzealand"]
//Object
let myobj ={
    name: "amitesh",
    age: 20

}
//Function
const myfxn = function(){
    console.log("Hello World");
}
