const person ={
    name: 'maruf',
    age: 25,
    123: 'right',
    status: {
        type: 'error',
        country: 'Bangladesh'
    }
}
console.log(person.status?.country) // Optional chaining with ternary operator.

console.log(person["123"]) // Using Bracets notation cz it is more powerfull thant .notation
