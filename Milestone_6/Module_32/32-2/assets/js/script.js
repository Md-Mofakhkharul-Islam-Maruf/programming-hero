// const name= true;
// const name= false;
// const name= "true";
// const name= "false";
// const name= 'Maruf';
// console.log(name==true)
// console.log(!name)
// console.log(!!name)
// const name= "";
// const name= " ";
// const name= 0;
// const name= -0;
// const name= -1;
// const name= 2;
// const name= {};
// const name= [];
// const name= null;
// const name= undefined;
// const name= nan;
const name= function(){};


if(name){
    console.log('This value is truthy')
}else{
    console.log('This value is falsy value.')
}
//Another syntax of if else
if(name) console.log('This value is truthy')