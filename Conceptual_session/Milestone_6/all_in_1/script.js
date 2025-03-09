//pass by value
const name = "Maruf";

function pass_by_value(take) {
    take = 30;
    console.log(take);
}
pass_by_value(name);

//pass by reference
const arr = [10, 3, 5, 2, 6, 8];
function pass_by_ref(take) {
    for (let i = 0; i < take.length; i++) {
        const store = take[i];
        take[i] = store * store;
    }
}
pass_by_ref(arr);
console.log(arr);


// Higher order function & callback funtion
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}
function sayGoodbye() {
    console.log("Goodbye!");
}
greet("Alice", sayGoodbye);

//Default parameter.
function message(take = "Bangladesh") {
    console.log(take)
}
message();


//Template string(``):
const obj = { name: 'Maruf', age: 25 }
const msg = `My name is ${obj.name} and my age is ${obj.age}`;

document.body.innerHTML = `${msg}`;

//Arrow function
const show = () => console.log('From single line arrow function this function has no parameter')
show();

const square = x => {  //single paremeter
    return x * x;
}
console.log(square(5))

const add = (a, b) => {
    console.log('Result: ', a + b) //Multi parameter
}
add(7, 8)



// var|| let || const

// var hle= 'maruf';
// var hle ="hasan";
// console.log(hle);


// let newname= 'maruf';
// let newname ="hasan";
// console.log(newname);


// var usecase1="10";
// let usecase2= "20";
// console.log(window.usecase1);
// console.log(window.usecase2);


//Spered operator
const ourName = ["Maruf", "Munna", "Muhit"];
const ParentsName = ['Mokhlesur', 'Marfi'];
const joinName = [...ourName, ...ParentsName];
console.log(joinName);

// Rest operator
const rest = (...take) => {
    console.log(take)
}
rest(1, 5, 6, 78, 9, 2);
rest(3, 22, 555);

//Array destructing
const className = [5, 8, 9, 3, 7];
const [first, , third, gaddu, laddu] = className;
console.log(gaddu);

// Object destructing
const objName = { a: 'Maruf', b: 20 }
const { a, b } = objName;
console.log(b)

//Object property and method
const school = {
    name: 'Lalmonirhat high school', // object property and value
    location: 'Lalmorinhat',
    message: function () {
        return ('Amra school jai'); //object method 
    }

}
console.log(school.message());


// Objects key value entries loop

const newobj = { name: 'karim', age: 31 };
for (const key in newobj) {
    console.log(key)
}

for (const key in newobj) {
    console.log(newobj[key])
}

const entries = Object.entries(newobj);
console.log(entries)

// Array map
const qube = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const map = qube.map(store => store * store * store);
console.log(map);

// Array filter
const aguntok = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumber = aguntok.filter(store => store % 2 === 0);
console.log(evenNumber);

// Array find
const aguntokNa = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const firstevenNumber = aguntokNa.find(store => store % 2 === 0);
console.log(firstevenNumber);

// Array of object filter
const products = [
    { name: "Apple", price: 20, origin: "USA" },
    { name: "Banana", price: 5, origin: "Ecuador" },
    { name: "Mango", price: 30, origin: "India" },
    { name: "Orange", price: 15, origin: "Spain" },
    { name: "Grapes", price: 20, origin: "Italy" }
];

console.log(products.filter(store => store.price === 20))


//Foreach
const furniture = ['Chair', 'table', 'khat'];
furniture.forEach(element => console.log(element));

//Reduce
const newArray = [[1, 2], [3, 4], [5, 6]];
const singleArray = newArray.reduce((acc, current) => {
    return acc.concat(current);
}, [])
console.log(singleArray)

//ternary , && , ?? is easy;
const n = null;
const myName = 'Maruf';
const check= n?? myName;
console.log(check)


//Optional chaining
const user = {
    name: "Alice",
    address: {
      city: "Wonderland"
    }
  };
  
  console.log(user?.address?.city); // Output: "Wonderland"
  console.log(user?.contact?.phone); // Output: undefined


  //this

  //clouser