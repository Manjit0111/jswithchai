let mydate=new Date()
console.log(mydate);
console.log(mydate.toDateString());
console.log(mydate.toString());
console.log(mydate.toLocaleString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());

//syntex
let newdate=new Date(2003,1,13)
let newdate2=new Date(2003,1,13,5,3)
let newdate3=new Date('02-13-2003')

console.log(newdate.toDateString())
console.log(newdate2.toLocaleString())
console.log(newdate3.toLocaleString())

let timestamp=Date.now()
console.log(newdate2.getMonth()+1);
console.log(newdate2.getDay());

