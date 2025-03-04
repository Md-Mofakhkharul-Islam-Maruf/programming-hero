// sum of all odd numbers and avg it
function odds(numbers){
        let sum=0;
        let count=0
    for(num of numbers){
        if(num % 2 !=0){
            sum= sum+num;
            count++
        }     
    }
    return sum/count
}
console.log(odds([25,5,6,3,1]))