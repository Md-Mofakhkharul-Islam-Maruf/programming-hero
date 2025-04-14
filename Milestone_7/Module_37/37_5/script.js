//json
const person={
    name:'Maruf',
    age:25,
    address:{
        village: 'Balapara',
        upozela: 'Aditmary'
    }
}
const jsondata = JSON.stringify(person)
console.log(jsondata);
const plainData= JSON.parse(jsondata);
console.log(plainData)

//Fetch
// fetch('url')
// .then(res=>res.json())
// .then(data=> console.log(''))


//Keys
const keys = Object.keys(person)
console.log(keys)

//values
const values = Object.values(person)
console.log(values)

  
const products = [
    {name:'redmi', brand: 'xaomi', price: 20000, color: 'blue'},
    {name:'galaxy', brand: 'samsung', price: 30000, color: 'black'},
    {name:'oppo f16', brand: 'oppo', price: 40000, color: 'pink'},
    {name:'14 pro max', brand: 'Iphone', price: 120000, color: 'white'},
    {name:'galaxy', brand: 'samsung', price: 30000, color: 'black'},
];
const newProduct={
    name:'walton', 
    brand:'walton', 
    price:10000, 
    color:'yellow'
}

const mergeProducts= [...products,newProduct];
console.log(mergeProducts)

const finalProduct= products.filter(p=>p.name!=='galaxy');
console.log(finalProduct)

const finalProductWithNewProduct= [...finalProduct,newProduct];
console.log(finalProductWithNewProduct)