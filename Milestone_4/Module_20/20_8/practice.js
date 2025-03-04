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
        lname: 'Hasan',
        cname: 'Mofakhkharul'
    }
}
console.log(Object.keys(maruf))


console.log(Object.values(maruf))


console.log(maruf.fullname.cname)
console.log(maruf.fullname.cname=['Hasan'])

delete maruf.age;
console.log(maruf)




