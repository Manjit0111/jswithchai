const array1=new Array(0,1,2,3,4)
console.log(array1);

array1.push(5)
console.log(array1);

array1.pop()
console.log(array1);

array1.unshift(2)
console.log((array1));

array1.shift()
console.log(array1)

const array2=array1.join('')
console.log(`${array2} is ${typeof array2}`);

console.log(array1.slice(1,3));
console.log(array1);

console.log(array1.splice(1,3))
console.log((array1));

const name1=new Array("manjit","genius")
const name2=new Array("manjal","sabr")
// name1.push(name2)
// console.log(name1);

const name3=name1.concat(name2)
console.log(name3);//add only 1 array

const name4=[...name1,...name2]
console.log(name4);//add more than 1 array


const array3=new Array(1,2,3,[4,5],6,[7,[8,9]])
const array4=array3.flat(Infinity)
console.log(array4);

console.log(Array.isArray("manjit"))
console.log(Array.from("manjit"))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))