let a = 2
const b = 3
var c = 8
if (true) {
    let a = 2
    const b = 3
    var c = 5
    console.log("inner :", a);

}
console.log(a);
console.log(b);
console.log(c);

console.log("function without variable :", num1(2));

function num1(num) {
    return num + 1
}

// num2(3)
const num2 = function (num) {
    return num + 2
}
console.log(num2(3))

