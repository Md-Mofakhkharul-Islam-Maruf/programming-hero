//These check only value not data type

const num1 = 4;
const num2 = 4;
if (num1 == num2){
    console.log('these are same value')
}else{
    console.log('These are not same value')
}

//Check value and data type also
const num3 = 4;
const num4 = "4";
if (num3 === num4){
    console.log('these are same value')
}else{
    console.log('These are not same value')
}

const num5 = [];
const num6 = [];
if (num3 === num4){  //this will not same value because not primitive data store only address not the value inside variable.
    console.log('these are same value')
}else{
    console.log('These are not same value')
}
