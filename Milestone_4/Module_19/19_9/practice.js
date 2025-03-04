// Task 1
for(let number= 1; number<=60; number++){
    console.log("I will invest at least 6 hrs every single day for the next 60 days! ",number)
}
//subtask-1
for(let number= 61; number<=100; number++){
    if(number%2==1){
        console.log("Odd number is: ",number);
    }
}
//subtask-2
let sum =0;
for(let number= 61; number<=100; number++){
    if(number%2==1){
        console.log("Odd number is: ",number);
        sum=sum+number;
    }
}
console.log("Addition of odd number is: ",sum);

// Multiplication table

for(let number= 1; number <=10; number++){
    let total=5*number;
    console.log('5 * ',number,'=',total)
}

// countdown timer
for(count=81; count>=65; count--){
    console.log('count: ',count)
}

//using break
for(let stop=1; stop<=200; stop++){
    console.log(stop);
    if(stop==120){
        break;
    }
}

//sum exceed
let total= 0;
for(let num =1; num <=50; num++){
    total = num + total;
    if(total>=100){      
        console.log('sum is: ',total);
        break;  
    }
}

//square

for(let num=1; num<=10; num++){
    if(num*num == 25){
        console.log('square of ',num,'is = ',25)
        break;
    }
}

// display odd number
for(let num=2; num<=40; num++){
    if(num%2 != 0){
        continue;       
    }
    console.log('even number: ', num)
}

//skip even number that divisable by 5
for(let num= 55; num<=85; num++){
    if(num % 5==0){
        continue;
    }
    if(num%2!=0){        
        console.log(num);
    }
}