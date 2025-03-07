var x; // Hoisted declaration (undefined by default)
console.log(x); // undefined
x = 10; // Assignment happens here
console.log(x); // 10