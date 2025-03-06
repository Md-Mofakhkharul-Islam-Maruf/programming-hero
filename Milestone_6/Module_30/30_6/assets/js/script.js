//spread operator
const name=['maruf','munna', 'muhit'];
console.log(...name);

const name2=['abbu','ammu', ...name];
console.log(name2);

const numberMax= [10,34, 53, 2, 32,];
console.log(Math.max(...numberMax));