// const name= 'Maruf'
// console.log(nam)  //Error by default ways
// console.log(name)


//Showing error using try catch block
try {
  const name = 'Maruf'
  console.log(name)
  console.log(nam)

}catch (error) {
  console.log(error)
}



//Customizing way to throw an error
try {
  const name = 'Maruf';

  if (!name) {
    console.log("Everything is ok")
  } else {
    throw "name asole nai"
  }
}catch (error) {
  console.log(error)
}
