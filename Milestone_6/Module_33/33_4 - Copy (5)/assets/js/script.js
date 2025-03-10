const loadUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            loadData(json);
        })
}
const loadData = (take) => {
    console.log(take[0].email)
}