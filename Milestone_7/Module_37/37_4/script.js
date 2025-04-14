//Array destructuring
const name= ['maruf', 'munna', 'muhit'];
const [name1, name2, name3]=name;
console.log(name2)


//Object destructuring
const person={
    fname: 'Maruf',
    age:25,
    status: true
}
const {fname,age,status}=person
console.log(status)