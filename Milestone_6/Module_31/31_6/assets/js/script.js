class product{
    constructor(name,price, owner){
        this.a= name;
        this.b= price;
        this.c= owner;
    }
    details(){
        console.log(`I love ${this.a}`)
    }
}
const xaomi= new product('xaomi', 12000, 'Maruf');
console.log(xaomi);
xaomi.details()


const iphone= new product('iphone', 132000, 'Stiv jobs');
console.log(iphone);