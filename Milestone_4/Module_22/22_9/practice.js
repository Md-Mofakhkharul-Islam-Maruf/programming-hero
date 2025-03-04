//Task-1:   Write a function to convert temperature from Celsius to Fahrenheit.
function fToc(Fahrenheit){
   let celcius= (Fahrenheit-32)*5/9
   return celcius
}
console.log(fToc(658))



// Task-2:   You are given an array of numbers. Count how many times the a number is repeated in the array.

function check(numbers){
   checknumber=[5,6,11,12,98,5]
   let count=0
   for(let i=0; i<=checknumber.length; i++){
      if(checknumber[i] =='5')
      count++
   }
   return count
}
console.log(check('5'))




// Task-3: Write a function to count the number of vowels in a string.
function vowel(check){
   let count=0
   for(let i=0; i<=check.length;i++){
      if(check[i]=='a'||check[i]=='e'||check[i]=='i'||check[i]=='o'||check[i]=='u'){
         count++
      }
   }
   return count;
}
console.log(vowel('qwertyuiopasdfghjklzxcvbnmee'))


console.log('=========================')




// Task-4: Write a function to find the longest word in a given string.
function long_word(take){
   let spl=take.split(' ')   
   let maxword=''
   let i=0;
   for(num of spl){
         if(spl[i].length>=maxword.length){
            maxword= spl[i];
         }
         i++
   }
   return maxword
}
console.log(long_word('I am learning Programming to become a programmer'))


// alternative solution
let str = "The quick brown fox jumps over the lazy dog";
let words = str.split(" ");  // Split the string into an array of words

let maxWord = "";  // Start with an empty string for the longest word

for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxWord.length) {
        maxWord = words[i];  // Update maxWord with the longest word found
    }
}

console.log("The longest word is:", maxWord);




// Task-5: Generate a random number between 10 to 20.
//console.log(Math.random(1, 30))