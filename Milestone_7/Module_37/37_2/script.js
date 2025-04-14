const fname = "Maruf"
const lname = "Hasan"
console.log(fname+lname);

//Template string
console.log(`My name is ${fname} ${lname}`);

//arrow function
const sum=(a,b,c)=> a+b+c;
const result= sum(5,8,3)
console.log(result)

//spread operator
const numbers = [1,8,3,6,4,8,5];
const newNumbers = [...numbers,10,50]
console.log(newNumbers)