const submit=()=>{
    const id = document.getElementById('id').value
    const name = document.getElementById('text').value
    
    const data={id,name}
    localStorage.setItem(id,JSON.stringify(data))
}
const getItem= localStorage.getItem('123');
console.log(JSON.parse(getItem))

const clear = () => {
    localStorage.clear();
}