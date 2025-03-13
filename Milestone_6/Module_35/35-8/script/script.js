function removeActiveClass(){
  const activeButtons = document.getElementsByClassName('active');
  for(let btn of activeButtons){
    btn.classList.remove('active')
  }
}
function response() {
  //fetch data and take a promise
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    //convert promise to json
    .then((res) => res.json())
    //send data to the display
    .then((data) => displayCategories(data.categories))
}
response();

//add button using api
function displayCategories(category) {
  // console.log(data)
  const container = document.getElementById('category-container');
  for (cat of category) {
    const createDiv = document.createElement('div');
    createDiv.innerHTML = `
                <button id="btn-${cat.category_id}" onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;
    container.appendChild(createDiv)
  }


}

//loading videos
function loadVideos() {
  fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((response) => response.json())
    .then((data) => {
      removeActiveClass();
      document.getElementById('btn-all').classList.add('active')
      showVideos(data.videos);
    })
}


const showVideos = (videos) => {
  const videosContainer = document.getElementById('videos-container');
  videosContainer.innerHTML="";
  if(videos.length==0){
    videosContainer.innerHTML=` <div class="col-span-full flex justify-center items-center flex-col py-10 gap-4 ">
            <img src="assets/Icon.png" alt="">
            <h2 class="font-bold text-2xl">Opps!.... There is no content</h2>
        </div>`;
  }
  videos.forEach((video) => {
    const videoCard = document.createElement('div');

    videoCard.innerHTML = `<div class="card bg-base-100">
            <figure class="relative mb-3">
                <img class="w-full h-[150px] object-cover" src="${video.thumbnail}" alt="Shoes" />
                <span class="absolute bottom-3 right-3 text-white bg-black text-sm px-2 rounded">3hrs 56 min ago</span>
            </figure>

            <div class="flex gap-5 px-0 py-4">
                <div class="profile">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                            <img src="${video.authors[0].profile_picture}" />
                        </div>
                    </div>
                </div>

                <div class="intro">
                    <h2 class="text-sm font-semibold">Midnight Serenade</h2>
                    <p class="flex gap-1">${video.authors[0].profile_name}
                        <img class="w-5 h-5 mt-1" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="">
                    </p>
                    <p class="text-sm text-gray-400 ">${video.others.views}views</p>
                </div>
            </div>
        </div>`;
    videosContainer.appendChild(videoCard)
  });
}

function loadCategoryVideos(id){
  let url= `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;

  fetch(url)
  .then(res=>res.json())
  .then((data) => {
    removeActiveClass();
    const clickedButton = document.getElementById(`btn-${id}`);
    clickedButton.classList.add('active');
    showVideos(data.category);
  });
}