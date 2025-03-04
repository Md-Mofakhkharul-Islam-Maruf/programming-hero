// sum of arrays all elements

function hello(numbers){ 
    let sum=0;
    for(let num of numbers){
        sum= sum+num;
    }
    return sum;

}
console.log(hello([10,2,5,9]))
