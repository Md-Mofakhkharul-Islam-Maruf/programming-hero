const loadUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            collectUsers(json);
        });
}
const collectUsers = (take) => {
    const ul= document.getElementById('listed-items');
    for (let element of take) {
        // console.log(element.name)
        const li= document.createElement('li');
        li.innerText=element.name;
        ul.appendChild(li);        
    }
}