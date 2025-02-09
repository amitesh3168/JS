const batter = ["rohit", "virat", "jaiswal", "surya"]
const bowler = [ " Bumrah", "Shami", "ashwin", "Pandya"]

// batter.push(bowler) // it can add bowler as element in battter 
// console.log(batter)
// console.log(batter[4][3])
//by using concat method we can get over this
// const team = batter.concat(bowler)
// console.log(team)

const team = [...batter, ...bowler]
console.log(team)

const root = [1,2,[3,5,[1,34]],4,5]
const front = root.flat(Infinity)
console.log(front)

console.log(Array.isArray("Amitesh"))
console.log(Array.from("Amitesh"))
console.log(Array.from({name: "Amitesh"}))
