// functions parameter validation like which type data you provide
function checknumber(parameter) {
    if (typeof parameter!== 'number') {
        console.log('You provide a ',typeof parameter)
        return 'Please give a number as parameter'
    }
}
console.log(checknumber('kjfjdf'))
console.log('---------------------------')   



function checkarray(parameter) {
    if (Array.isArray(parameter)==false) {
        console.log('You provide a ',typeof parameter)
        return 'Please give a array as parameter'
    }
}
console.log(checkarray('man'))
console.log('---------------------------')   





function checkobject(parameter) {
    if (typeof parameter!== 'object') {
        console.log('You provide a ',typeof parameter)
        return 'Please give a object as parameter'
    }
}
console.log(checkobject(9))
console.log('---------------------------')   


// else if (typeof parameter) {
//     return 'Please give a number as parameter'
// }

// else if (typeof parameter) {
//     return 'Please give a number as parameter'
// }
// else if (typeof parameter) {
//     return 'Please give a number as parameter'
// }
// else {
//     return 'You are not provide valid data type'
// }