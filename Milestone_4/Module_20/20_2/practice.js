const country ="Bangladesh";
console.log(country.toUpperCase());

const capital = 'Dhaka';
console.log(capital.toLowerCase());

const book= 'chemistry';
const subject= 'Chemistry';

if(country === capital){
    console.log('same name');
}else{
    console.log('different name');
}

//Other case using toLowerCase 
if(country.toLowerCase === capital.toLowerCase){
    console.log('same name');
}else{
    console.log('different name');
}

const space = ' mango';
console.log(space.trim());
