// calling a specific function from another function
function add(a, b) {
    return a + b
}
function multiply(a, b) {
    return a * b
}
function sub(a, b) {
    return a - b
}
function div(a, b) {
    return a / b
}



function calculation(a, b, operation) {
    if (operation == 'add') {
        return add(a, b)
    }
    else if (operation == 'sub') {
        return sub(a, b)
    }
    else if (operation == 'multiply') {
        return multiply(a, b)
    }
    else if (operation == 'div') {
        return div(a, b)
    }
    else{
        return 'You are not calling a valid function......'
    }
}
console.log(calculation(8, 4, 'multiply'))