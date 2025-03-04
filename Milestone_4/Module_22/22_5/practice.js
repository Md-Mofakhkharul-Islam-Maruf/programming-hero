// Remove duplicate element from array
function remove(array){
    let newarray=[]
    for(num of array){
            if(newarray.includes(num)==false){
                newarray.push(num)
            }
        }
    return newarray
}
console.log(remove(['maruf', 'munna','muhit', 'munna', 'kamrul', 'kamrul']))