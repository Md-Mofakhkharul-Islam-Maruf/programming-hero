console.log('Hello')
function response(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res)=> res.json())
    .then((data)=>displayCategories(data.categories))
}
response();

function displayCategories(data){
    console.log(data)
}