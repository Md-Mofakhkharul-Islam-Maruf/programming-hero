class vehicle{
    #licence;
    constructor(name,price, owner, para){
        this.a= name;
        this.b= price;
        this.c= owner;
        this.#licence= para // Another use case of this keyword
    }
    details(){
        console.log(`Your licence number is ${this.#licence}`)
    }
}
const obj= new vehicle('Honda', 100000, 'Maruf', 'ha-11-13-21')
console.log(obj)

obj.details(); // encaptulation