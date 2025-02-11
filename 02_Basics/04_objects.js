//declare object
// const facebook = new object()
const facebook ={}
facebook.id = "amitesh3168"
facebook.name = 'amitesh'
facebook.isloggedin = false
console.log(facebook);
const netflix = {
    email: "amiteshsmb@gmail.com",
    fullname : {
        surname :{
           name: "amitesh",

        }
    }
}
console.log(netflix.fullname.surname.name)
const ob1 ={1:"1",2:"2"}
const ob2 ={A:"1",b:"2"}
//  const obj3 = { ob1, ob2}/
// const obj3 =Object.assign(ob1, ob2)
const obj3 = { ...ob1, ...ob2}
console.log(obj3)

console.log(Object.keys(facebook)) // we can keep out all key of object
console.log(Object.values(facebook))// we can took out all value of object
//asking that do object have thay value 
console.log(facebook.hasOwnProperty('name'))

// all api are in jason form
{}