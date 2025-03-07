// primitive data types contains value not address
let name = 'Maruf';
let newName= name;
console.log(newName)

name= 'Hasan';
console.log(newName)   


// Non-primitive data types contains address not value that's why it changable
let name2 = { fname: 'Maruf', lname: 'Hasan'};
let newName2= name2;
console.log(newName2)

name2.fname= 'Mehedi';
console.log(newName2)   