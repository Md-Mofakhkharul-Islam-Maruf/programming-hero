//calculaate inchi to feet
function height(inchi){
    let feet = inchi/12
    int=parseInt(feet)
    return int
}
console.log(height(67))



// calculate feet and inchies
function height2(inchi){
    let feet = inchi/12
    int=parseInt(feet)
    float= inchi%12
    return int+' feet '+float+' Inchi'
}
console.log(height2(67))




// kilo to miles 
function keloToMeter(kilo){
let mile= kilo * 0.621371 
return mile
}
console.log(keloToMeter(10))




// miles to kilo 
function miletokilo(mile){
    let kilo= mile / 0.621371 
    return kilo
    }
    console.log(miletokilo(10))