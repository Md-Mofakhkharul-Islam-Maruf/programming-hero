// First task
let fruts=['apple', 'banana','pinapple','goava', 'jackfruts'];
console.log(fruts[3]);

fruts[1]= 'jambura';
console.log(fruts)


//second task
let place=['coxs bajar', 'sitakunda', 'saint-martin'];
place.unshift("rangamati");
place.unshift("khagrachari");
place.unshift("bandarban");
console.log(place);

place.shift();
console.log(place);

//Third task
let books=['bookno1','bookno2','bookno3','bookno4'];
console.log(books.includes('bookno3'));

//Fourth task
console.log(Array.isArray(place));
var value=10;
console.log(Array.isArray(value));


//Fifth task
console.log(place.concat(books));