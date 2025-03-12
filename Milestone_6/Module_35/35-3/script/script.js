function response(){
    //fetch data and take a promise
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    //convert promise to json
    .then((res)=> res.json())
    //send data to the display
    .then((data)=>displayCategories(data.categories))
}
response();

//add button using api
function displayCategories(data){
    console.log(data)
    const container= document.getElementById('category-container');
    for(detum of data){
        console.log(detum)
        const createDiv= document.createElement('div');
        createDiv.innerHTML=`
                <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${detum.category}</button>
        `;
        container.appendChild(createDiv)
    }


}