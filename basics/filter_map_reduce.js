const arr = [1, 2, 3]
const ans = arr.reduce(function (acc, curval) {
    console.log(`acc is: ${acc} and curval is: ${curval} `);
    return acc + curval
}, 2)
console.log(ans);


const shppingCart = [
    {
        product: 'shirt',
        price: 1699
    },
    {
        product: 'jeans',
        price: 999
    },
    {
        product: 'shoes',
        price: 1299
    }
]

const payTo = shppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(payTo);
