/// Object literals 
   const myfav = Symbol("captian")
const player = {
    name: "jasprit",
    "type":"player",
    [myfav]: "captain",
    age: 32,
    current_status: "Injured",
    place: "Mumbai",
    kids: ["ram", "shyam"]
}
console.log(player.age)
console.log(player["type"])
console.log(player[myfav])
console.log(typeof player[myfav])
player.age=33 // you can able to change this by this method
// Object.freeze(player) 
console.log(player)
player.tip = function() {
    console.log('We still gonna win this match');
}
player.tiptwo = function() {
    console.log(`we win, $ { this. place}`);
}
console.log(player.tip)
console.log(player.tiptwo)