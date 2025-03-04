//Task-1    Take four parameters. Multiply the four numbers and then return the result

function multiply(num1, num2, num3, num4) {
    return result = num1 * num2 * num3 * num4;
}
console.log(multiply(10, 2, 5, 5,))
console.log('==========================')

//Task-2    Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function even_odd(num) {
    if (num % 2 == 0) {
        return num / 2;
    } else {
        return num * 2
    }
}
console.log(even_odd(5))
console.log('==========================')



//Task-3    Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(parameter) {
    let sum = 0;
    for (number of parameter) {
        sum = (sum + number);
    }
    return sum / parameter.length
}
console.log(make_avg([5, 30, 20, 6, 14,]))
console.log('==========================')


//Task-4   Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function search(take) {
    let sum = 0
    for (let i = 0; i < take.length; i++) {
        if (take[i]=='0') {
            sum = sum + 1;
        }
    }    
    return sum;
}
console.log(search('01101011001'))
console.log('==========================')




//  Task 5   Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
function odd_even(para){
    if(para%2==0){
        return 'even'
    }else{
        return 'odd'
    }
}
console.log(odd_even(5))

function getMenu() {
    console.log("Burger, Pizza, Pasta");
   }
getMenu()