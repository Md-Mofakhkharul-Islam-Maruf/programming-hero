// Greading
const number = 6;
if(number>=80){
    console.log("You got A+");
}
else if(number>=70){
    console.log("You got A");
}
else if(number>=60){
    console.log("You got A-");
}
else if(number>=50){
    console.log("You got B");
}
else if(number>=40){
    console.log("You got C");
}
else{
    console.log('fail');
}

// BMI calculation
const weight = 80;
const height =60;

if(weight<=40 && height<=40){
    console.log("Your BMI is 50");
}
else if(weight<=50 && height<=50){
    console.log("Your BMI is 60");
}
else{
    console.log("You are a fat guy")
}