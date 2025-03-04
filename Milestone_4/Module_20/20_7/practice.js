let maruf={
    name: 'Maruf',
    age: 25,
    class: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
    type: true,
    "fav places": ['bandarban', 'khagrachari'],

    accelerate: function(){
    },

    fullname: {
        fname: 'maruf',
        lname: 'Hasan'
    }
}

console.log(maruf.age);
console.log(maruf['type']);

let new_type= maruf.type='false' //updated type value
console.log(maruf.type);

let new_name= maruf['name']="mehedi" //Updated names value of maruf's object
console.log(maruf['name']);

let new_places = maruf['fav places']=['Lalmonirhat', "3 bigha koridor"]; //Updated fav places value of maruf's object
console.log(maruf['fav places']);



