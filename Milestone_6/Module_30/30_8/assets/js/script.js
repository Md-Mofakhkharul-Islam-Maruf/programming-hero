const maruf={
    age: 25,
    status: 'error',
    activity: 'roster'
};
//Object keys
console.log(Object.keys(maruf));

//Object value
console.log(Object.values(maruf));

//Object entries
console.log(Object.entries(maruf));

//objects delete
console.log(delete maruf.age)

//Object seal
console.log(Object.seal(maruf)); 

//Object freeze
console.log(Object.freeze(maruf));
