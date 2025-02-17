function func(n1, n2) {
    return n1 + n2
}
const result = func(3, 4)
console.log(result);

function user(username) {
    if (!username) {
        return ""
    }
    return `${username}`
}

console.log(user(""));

function cart(v1, v2, ...n1) {
    return n1
}
console.log(cart(1, 2, 3, 4, 5));

user = {
    name: 'manjit',
    id: 21
}

function fetchUser(anyuser) {
    console.log(`user is ${anyuser.name} and id is ${anyuser.id}`);
}

fetchUser(user)
fetchUser({
    name:'manjal',
    id:99
})