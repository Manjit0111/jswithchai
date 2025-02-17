
// prmitive
let num = 123
let name = "manjit"
let married = false
console.log(typeof num)
console.log(typeof name)
console.log(typeof married)

//reference
let employee = ["emp1", "emp2", "emp3"]
console.log(employee, "is", typeof employee)

let obj1 = {
    name: "manjit",
    id: 123
}
console.log(obj1.id, "is", typeof obj1);

let myfunc = function () {
    console.log("This is function")
}
myfunc()
console.log(typeof myfunc)

let username = "manjit"
let usertwo = username
usertwo = "genius"
console.log(username)
console.log(usertwo)

let obj2 = {
    name: "manjit"
}
let obj3 = obj2
obj3.name = "genius"
console.log(obj2)
console.log(obj3)

const obj4 = {
name:"manjit",
roll_no:31
}
const {roll_no:rn}=obj4
console.log(rn);
