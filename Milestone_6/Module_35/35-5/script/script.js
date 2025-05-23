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
function displayCategories(data) {
  // console.log(data)
  const container = document.getElementById('category-container');
  for (detum of data) {
    //console.log(detum)
    const createDiv = document.createElement('div');
    createDiv.innerHTML = `
                <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${detum.category}</button>
        `;
    container.appendChild(createDiv)
  }


}

//loading videos
function loadVideos() {
  fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((response) => response.json())
    .then((data) => showVideos(data.videos))
}
loadVideos();

const showVideos = (videos) => {
  const videosContainer = document.getElementById('videos-container');

  videos.forEach((video) => {
    console.log(video)

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