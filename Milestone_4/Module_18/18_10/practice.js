// Task 01
const money= 500;
money>500? console.log("Buy a burger"): console.log("Buy a coke with extra 30tk");



// Task 02
const bmi= 30;
if(bmi<18.5){
    console.log('you are underweight');
}
else if(bmi>=18.5 && bmi<=24.9){
    console.log('you are Normal');
}
else if(bmi>=25 && bmi<=29.9){
    console.log('you are overweight');
}
else{
    console.log('you are obesed');
}

// task 3
const number = 100;
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

// task 4
const score =87;
const frn_score= 50;
if(score>80){
    if(frn_score<80 && frn_score>=60){
        console.log('Go for a lunch');
    }
    else if(frn_score<60 && frn_score>=40){
        console.log('reply his massage');
    }
    else if(frn_score<40){
        console.log('do not check massage');
    }
}
else{
    console.log('Act as a sad person');
}

// task 4
const num1= 10;
const num2= 5;
if(num1>num2){
    const result= num1*num2;
    console.log(result)
}
else{
    const result= num1+num2;
    console.log(result)
}


const result = num1>num2? num1*num2 : num1+num2;
console.log(result);