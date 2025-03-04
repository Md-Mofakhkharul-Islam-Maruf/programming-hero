// Find maximum prices index
let phones=[
    {brand: 'Xaomi',price:20000, camera:'12mp'},
    {brand: 'Samsung',price:100000, camera:'12mp'},
    {brand: 'htc',price:12000, camera:'12mp'},
    {brand: 'Motorala',price:31000, camera:'12mp'},
];
function maxprice(mobiles){
    let max=mobiles[0]
    for(mobile of mobiles){
        if(mobile.price>max.price){ //for loop er maddhome first mobile er value change kore kore first index er value er sathe compaare koreche
            max= mobile
        }
    }
    return max
}
console.log('Maximum: ',maxprice(phones))





// Find maximum price index
function minprice(mobiles){
    let min=mobiles[0]
    for(mobile of mobiles){
        if(mobile.price<min.price){  //for loop er maddhome first mobile er value change kore kore first index er value er sathe compaare koreche
            min= mobile
        }
    }
    return min
}
console.log('minimum',minprice(phones))