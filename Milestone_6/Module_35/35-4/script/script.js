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

        videoCard.innerHTML = `<div class="card bg-base-100  shadow-sm">
        <figure>
          <img src="${video.thumbnail}" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${video.title}</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>`;
        videosContainer.appendChild(videoCard)
    });
}