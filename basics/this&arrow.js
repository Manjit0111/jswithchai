const user = {
    name: "manjit",
    id: 31,
    welcome: function () {
        console.log(`hello ${this.name}`);
    }
}

user.welcome()
user.name = "manjal"

user.welcome()

const addNo = (n1, n2) => {
    return n1 + n2
}

const mulno = (n1, n2) => (n1 * n2)

console.log(addNo(1, 3));
console.log(mulno(1, 3));
