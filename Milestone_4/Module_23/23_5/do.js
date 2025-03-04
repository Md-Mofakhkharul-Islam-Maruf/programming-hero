// find total prices
let product = [
    { name: 'shamopp', price: 30, quantity: 5 },
    { name: 'saban', price: 50, quantity: 10 },
    { name: 'shirt', price: 300, quantity: 2 },
    { name: 'pant', price: 400, quantity: 4 },
];
function total_cost(products) {
    let sum=0
    for(let product of products){
        let product_cost = product.price * product.quantity;
        sum= sum+product_cost
    }
    return sum;

}
console.log(total_cost(product))