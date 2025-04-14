const products = [
    {name:'redmi', brand: 'xaomi', price: 20000, color: 'blue'},
    {name:'galaxy', brand: 'samsung', price: 30000, color: 'black'},
    {name:'oppo f16', brand: 'oppo', price: 40000, color: 'pink'},
    {name:'14 pro max', brand: 'Iphone', price: 120000, color: 'white'},
    {name:'galaxy', brand: 'samsung', price: 30000, color: 'black'},
];
//Array map
const result = products.map(product=> {
    return product.color
});
console.log(result)

//foreach
products.forEach(product=>console.log(product.name))

 //filter
 const filterResult= products.filter(product=>{
    return product.color==="black"
 })
 console.log(filterResult)

 //find
 const findResult = products.find(product=>{
    return product.name==="galaxy";
 })
 console.log(findResult)