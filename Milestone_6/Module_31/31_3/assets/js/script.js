const age=[30,14,53,4,2,43,];
const result= age.map(element=>element)
console.log(result)

const square=[3,4,5,6,7,8,8];
const squareResult= square.map(element=>element*element)
console.log(squareResult)

const result2= age.map(element=>{
    return element;
})
console.log(result2)

const name=['Maruf', 'Munna', 'Muhit']
const finalResult= name.map((element,index)=>{
    return `${index} : ${element}`
})
console.log(finalResult)