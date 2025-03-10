const handle = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data)
        // console.log('nice')
    }catch{
        console.log('Error')
    }
}
handle();