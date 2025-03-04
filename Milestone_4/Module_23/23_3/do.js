// calculate total wood needed
function totalwood(tablequantity, chairquantity, bedquantity){
    const pertabelwood= 4; 
    const perchairwood= 3; 
    const perbedwood= 7; 

    let chairwoodtotal= chairquantity* perchairwood;
    let tablewoodtotal= tablequantity* pertabelwood;
    let bedwoodtotal= bedquantity* perbedwood;
    return 'total wood needes:',totalwoodneeded= chairwoodtotal+tablewoodtotal+bedwoodtotal;
}
console.log(totalwood(3,5,9))