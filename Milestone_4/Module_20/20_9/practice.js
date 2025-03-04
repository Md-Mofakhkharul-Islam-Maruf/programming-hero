let fullname = {
    fname: 'maruf',
    lname: 'Hasan',
    cname: 'Mofakhkharul'
}

// array : for of
// object: for in

for (let keys in fullname){
    console.log(keys)
    console.log(fullname[keys])  // Here we access values of property through objectname;
}


let keys= Object.keys(fullname)

for(let key of keys){
    console.log(key,':',fullname[key])
}

// Declarataion of object in different way
let obj={name:'Maruf', age: 25};
console.log(obj);
let obj2= new Object();
console.log(obj2);
let obj3 = Object.create({})
console.log(obj3);

