const arr = [1, 2, 3, 4, 5]
for (const val of arr) {
    console.log(val);

}

const map = new Map()
map.set('in', 'india')
map.set('nz', 'newzeland')
map.set('aus', 'australia')

for (const [key, val] of map) {
    console.log(`${key} : ${val}`);

}

const obj = {
    'name': 'manjit',
    'id': 31
}
for (const val in obj) {
    console.log(`your ${val} is ${obj[val]}`);
}

const names = ['hi', 'hello', 'htu']
names.forEach(function (val) {
    console.log(val);
});

names.forEach((val, ind, ar) => {
    console.log(val, ind, ar);
})

const obj2 = [{ name: 'manjit', id: 31 }, { name: 'manjal', id: 99 }]
obj2.forEach((item) => {
    console.log(`hello ${item.name} your id is ${item.id}`);
})


const nums=obj2.forEach((val) =>{
    // console.log(val);
    return val
})
console.log(nums);

const numbers=[-1,2,-3,4,5,-6]
// const numans=numbers.filter((num)=>{
//     return num>2
// })
const num2=[]
const numans=numbers.forEach((num)=>{
    if(num>0){
        num2.push(num)
    }
})
console.log(num2);
