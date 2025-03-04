// Find the best result
let maruf = '85'
let munna = '88'
let muhit = '90'
function result() {

    if (maruf > munna && maruf > muhit) {
        return 'Maruf is the boss'
    }
    else if (munna > maruf && munna > muhit) {
        return 'Munna is the boss'
    }
    else {
        return 'Muhit is the boss'
    }
}
console.log(result())


// Alternative solution
console.log('Boss number is: ',Math.max(maruf, munna, muhit))