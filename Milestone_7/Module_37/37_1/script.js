const name= ['maruf', 'munna', 'muhit'];
console.log(name);

// array push means adding an index on last position
name.push('unknown')
console.log(name);

// array pop means remove an index of last position
name.pop()
console.log(name)

// array unshift means adding an index on fast position
name.unshift('Mokhlesur')
console.log(name)

// array shift means remove an index on fast position
name.shift()
console.log(name)

//slice take the first index to previous of last index     
console.log(name.slice(1,2))

//splice take the first index to last index 
console.log(name.splice(1,2))

//for loops
const friends= ['hasan','banna', 'panna']
for(let index = 0; index < friends.length; index++){
    console.log(friends[index])
}

//Function
function sum(a,b){
    const result = a+b;
    return result;
}
const output = sum(5,9)
console.log(output);

//Object
const person={
    name: 'Maruf',
    age: 25,
    person: friends
}
person.name= 'Mehedi';
console.log(person)
console.log(person.person[2])