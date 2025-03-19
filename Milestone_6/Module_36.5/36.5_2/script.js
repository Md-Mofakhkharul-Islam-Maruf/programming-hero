function setObj(){
    const person={
        name: 'Maruf',
        age: 20,
        status: true,
        favoriteFruts:['mango', 'banana', 'lichu']
    }
    const stringPerson= JSON.stringify(person)
    localStorage.setItem('Maruf', stringPerson)
    console.log(stringPerson)
}
function getObj(){
    const data = localStorage.getItem("Maruf")
    const normal= JSON.parse(data)
    console.log(normal)
}