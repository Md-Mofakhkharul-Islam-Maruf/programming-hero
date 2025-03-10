const loadUser = () => {
    fetch('https://jsonplaceholder.typicode.com/posts#')
        .then(response => response.json())
        .then(json => {
            createPost(json)
        });
}
loadUser();
const createPost = (take) => {
    const body = document.getElementById('container')
    for (let element of take) {
        const div = document.createElement('div');
        div.classList.add('card')
        div.innerHTML = `
            <h1>${element.title}</h1>
            <h3>${element.id}</h3>
            <button>Not clickable</button>
        `;
        body.appendChild(div);
    }
}