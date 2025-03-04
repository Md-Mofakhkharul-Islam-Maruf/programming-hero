// Object task 1 Access the golden rod color value in output.

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors['golden rod'])

// Object task 2 For this object below add a property named passenger capacity with value 5
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

let ver = car['passenger capacity'] = '5';
console.log(ver)



// Object task 3 Display the physics marks as output.
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks)



// Object task 4 Count the number of properties.
let student2 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
let property_count = Object.keys(student2).length
console.log(property_count)


// Object task 5  Loop through an object and print the key-value pairs with their types

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};
for(let out in myObject){
    console.log('Key: ',out,'| type: ',typeof myObject[out])
}



// Count how many times a string has the letter a
let str='Md. Mofakhkharul Islam Maruf';
console.log(str.split(''));
console.log(str)
for(key of str){
    console.log(str.split[key])
}
