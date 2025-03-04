let myname= 'Maruf';
let slic= myname.slice(1, 4);
console.log(slic);

let good_stu= 'I am a good student';
console.log(good_stu.split('')); 

console.log(good_stu.split(' '));

console.log(good_stu.split('a'));

const newstr= 'Maruf, Munna, Muhit';
console.log(newstr.split(','));


const newstr2= ['Maruf', 'Munna', 'Muhit'];
console.log(newstr2.join('|'));

const fname='Maruf'
const lname='Hasan'
let fullname= fname+lname
console.log(fullname);

let fullname2= fname.concat(' ').concat(lname);
console.log(fullname2);

let fullname3= fname+' '+lname
console.log(fullname3)

console.log(fullname3.includes('f'));




