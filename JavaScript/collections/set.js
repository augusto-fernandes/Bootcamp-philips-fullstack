//set nao pode ter valores repetitivos
const myArray = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 2, 1];

const mySet = new Set(myArray);
console.log(mySet);
//Set(8) { 1, 2, 3, 4, 5, 6, 7, 8 }

console.log("--------------------------------");

const mySet2 = new Set();

console.log(mySet2.add(1));
console.log(mySet2.add(5));

console.log(mySet2.has(1));
//true

console.log(mySet2.has(3));
//false

console.log(mySet2.delete(5));
