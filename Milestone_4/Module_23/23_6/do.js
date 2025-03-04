// Discount the price
function discount(quantity) {
    if (quantity <= 100) {
        return total = quantity * 100
    }
    else if (quantity <= 200) {
        return total = quantity * 90
    }
    else {
        return total = quantity * 70
    }
}
console.log(discount(600))


// Discount leyard 

function discount_layerd(quantity) {
    let first100price = 100;
    let second100price = 90;

    if (quantity <= 100) {
        return total = quantity * 100
    }
    else if (quantity <= 200) {
        let extraquantity = quantity - 100;
        let first100total = first100price* 100;
        let extraquantity_price = extraquantity * 90
        return total = first100total + extraquantity_price;
    }
    else {
        let extraquantity = quantity - 200;
        let extraquantity_price = extraquantity * 70;
        let first100total = first100price* 100;
        let second100total = second100price*100;
        return total = extraquantity_price + first100total + second100total
    }
}
console.log(discount_layerd(202))