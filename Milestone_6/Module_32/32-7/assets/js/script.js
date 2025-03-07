// arguments
function sum(a,b,c,d){
    console.log(arguments);
    const array=[...arguments]
    console.log(array)
}
sum(10,23,32,31)
console.log(sum.length)



 //pass by value that means Maruf as a value that is passed by it's variable name : myName
const myName = "Maruf";
function test(take) {
    take = "hasan"// this can't be change  
}
test(myName);
console.log(myName)


//Pass by reference, tea value is change cz non-primitive data store by location address not by locatios nam
const tea={name: 'pran tea', date: 'Jana nai'}
function chaername(take){
    take.name="Cocola"
}
chaername(tea);
console.log(tea) // Here tea value is changed



//Everything about function, why function return undefined

function islam(){
console.log("My name is Maruf")
// return 'hello'
}
islam();
console.log(islam()) //This line means i want to see return value of this islam funtion
