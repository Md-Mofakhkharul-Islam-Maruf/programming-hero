// Task 1    Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let reverse_name = []
for (let i = colors.length - 1; i >= 0; i--) {
    let name = colors[i];
    reverse_name.push(name) //reverse variable a name er value push kora hocche prottekta iteration a
}
console.log(reverse_name)



//Task 2     Write a JavaScript code to get the even numbers from an array using any looping technique.
const numbers = [12, 98, 5, 41, 23, 78, 46];
let faka=[]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        faka.push(numbers[i])
    }
}
console.log(faka)



//Task 3    Use a for...of loop to concatenate all the elements of an array into a single string.

var new_name = ['Tom', 'Tim', 'Tin', 'Tik']
let ex_variable=[]
for(let name of new_name){
    ex_variable = ex_variable+name+' '
}
console.log(ex_variable)


//Task 4 (Hard)    Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
const statement = 'I am a hard working person';
console.log(statement.split(' ').reverse().join(' '))