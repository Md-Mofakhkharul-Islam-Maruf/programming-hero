// leap year or not normal edition
function leapornot(number){
    if(number % 4 ==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(leapornot(2024))


//confirm case
function leapornot2(number){
    if(number % 100 !==0 && number%4==0 ){
        return true;
    }
    if(number%400 ==0){
        return True
    }
    else{
        return false;
    }
}
console.log(leapornot2(1700))
