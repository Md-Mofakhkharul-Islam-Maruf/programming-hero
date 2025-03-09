const person={
    name: 'Maruf',
    age: 25,
    status: true,
    address:{
        hometown: 'lalmonirhat',
        village: 'Dakkhin Balapara'
    }
}
const newPerson = JSON.stringify(person);
console.log(newPerson);
console.log(typeof newPerson);

const newPerson2= JSON.parse(newPerson);
console.log(newPerson2);
console.log(typeof newPerson2);