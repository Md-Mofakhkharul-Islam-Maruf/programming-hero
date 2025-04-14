//truthy and falsy value checking

const num = 10;
if(num<=10 && num<20){
    console.log('true')
}else{
    console.log('false')
}
num? console.log('true'): console.log('false');

const isactive =false;
const showUser=()=> console.log('Show the user');
const hideUser=()=> console.log('Hide the user');

isactive && showUser();
isactive || hideUser();

//Type quertion 
let numb ='10';
console.log(typeof numb);

console.log(typeof +numb);