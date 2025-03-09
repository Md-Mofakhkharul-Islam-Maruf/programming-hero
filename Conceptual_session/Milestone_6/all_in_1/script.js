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

const add= (a,b)=>{
    console.log('Result: ',a+b) //Multi parameter
}
add(7,8)

