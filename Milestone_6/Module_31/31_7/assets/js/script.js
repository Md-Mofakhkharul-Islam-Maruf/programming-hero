class vehicle{
    constructor(name,price, owner){
        this.a= name;
        this.b= price;
        this.c= owner;
    }
    details(){
        console.log(`I work from dhaka to cox}`)
    }
}
class bike extends vehicle{
    constructor(name,price, owner, sits){
        super(name, price, owner)
        this.seat= sits
    }
    travel(){
        console.log('I travel from lalmoni to dhaka')
    }
}
class bus extends vehicle{
    constructor(name,price, owner){
        super(name, price, owner)
    }
    travel(){
        console.log('I travel from lalmoni to ng')
    }
}
const objVehicle = new vehicle('Honda', 100000, 'Maruf');
console.log(objVehicle)

const obj= new bike('R15', 560000, 'Maruf', 2);
console.log(obj)

const objBus= new bus('Hanif','10000000','Hanif mia')
console.log(objBus)
objBus.details()// 
