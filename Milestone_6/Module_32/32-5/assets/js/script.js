function sum(){
    let counter = 0;
    return function(){
        counter++;
        console.log(counter)
    }
}
// console.log(sum());
const result= sum()
result();
result();
result();

const result2= sum();
result2();
result2();
result2();

