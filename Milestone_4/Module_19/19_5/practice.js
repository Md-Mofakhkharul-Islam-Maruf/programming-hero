// Task 01
let messege = "I will invest at least 6 hrs";
let num = 1;
while(num<=60){
    console.log(messege);
    num++;
}

// Subtask 1
let numbers= 61;
let sum =0;
while(numbers<=100){
    if(numbers % 2 == 1){
        console.log(numbers)
        sum= sum+numbers;
    }
    numbers++;
}
console.log (sum);

// subtask 2
let evennumbers= 68
let evensum = 0
while(evennumbers<=98){
    if(evennumbers % 2 == 0){
        console.log('evennumbers is: '+ evennumbers);
        evensum= evensum+evennumbers;
    }
    evennumbers++;
}
console.log (evensum);

// multiplication table
let digit =1;
while(digit<=10){
    let result= 5*digit;
    console.log('5*'+ digit+' = '+ result);
    digit++
}

