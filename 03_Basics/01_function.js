function saymyname(){
    console.log("R")
    console.log("A")
    console.log("M")
}
//saymyname  reference
saymyname() //execution    
function addtwonumber(num1, num2){
    let result = console.log(num1+num2);
    return result // return ke baad koi kaam nhi karega
// return num1+num2
}
const result = addtwonumber(3,4)  

function loginuser(username){
    if(username==undefined){
        console.log("please enter username")
        return
    }
    return `${username} just logged in`
}
// if we do not pass any value then it show undefined
console.log(loginuser("amitesh")) 
console.log(loginuser()) 


function calculatecarprice(...num1){
    return num1
}
function calculatecarprice1(val1, val2, ...num1){
    return num1
}
console.log(calculatecarprice(100, 300, 400))
console.log(calculatecarprice1(100, 300, 400))

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject({
    name: "amitesh",
    price: 2332
})


const myNewArray = [1, 3, 4, 2, 4]
function secondvalue(getarray){
return getarray91
}
secondvalue(myNewArray)