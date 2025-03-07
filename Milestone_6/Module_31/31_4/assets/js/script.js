//foreach
const name=['Maruf', 'Munna', 'Muhit'];
name.forEach(element =>console.log(element));

const person=[
    {id: 5, name: 'maruf', age: 25, status: 'nice', hometown: 'lalmonirhat'},
    {id: 7, name: 'munna', age: 18, status: 'atractive', hometown: 'lalmonirhat'},
    {id: 9, name: 'muhit', age: 12, status: 'good', hometown: 'lalmonirhat'}
];
person.forEach(p=> console.log(p));
person.forEach(element => {
    console.log(element.name)    
});

person.forEach(element => {
    if(element.id===9){
        console.log(element.age)
    }
});

//fiter
const filter= person.filter(element=>{
    if(element.id===7){
        console.log(element)
    }
})
const newfltr= person.filter(element=>element.age>15)
console.log(newfltr)

// Find 
const find = person.find(store=> store.hometown==="lalmonirhat");
console.log(find)

//reduce
const newperson= person.filter(store=> store.id!= 7)
console.log(newperson)
