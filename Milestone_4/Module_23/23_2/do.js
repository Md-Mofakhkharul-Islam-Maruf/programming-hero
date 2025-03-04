//find the maximum number from an array
function maxnum(){
    let numbers=[20,51,69,33,85,40,55,61]
    let max= numbers[0];
    for(num of numbers){
        if(num>max){
            max=num
        }
    }
    return max;
}
console.log(maxnum())




//find the minimum number from an array
function minnum(){
    let numbers=[20,51,69,13,85,40,55,61]
    let min= numbers[0];
    for(num of numbers){
        if(min>num){
            min=num
        }
    }
    return min;
} 
console.log(minnum())