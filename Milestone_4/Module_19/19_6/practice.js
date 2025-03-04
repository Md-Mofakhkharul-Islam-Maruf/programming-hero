;
let sum = 0;
for (let numbers = 1; numbers <= 100; numbers++) {
    if (numbers % 2 == 0) {
        console.log(numbers)
        sum = sum + numbers;
    }
}
console.log(sum);


