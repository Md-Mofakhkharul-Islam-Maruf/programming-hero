function btn_disable(take){
    document.getElementById(take).disabled = true;
}

function clearhistory(take){
    document.getElementById(take).innerHTML=''
}

    function parse_floatand_task(lePangkha) {
        const value = document.getElementById(lePangkha).innerText;
        let task = parseFloat(value);
        const finalvalue= task-1;
        document.getElementById(lePangkha).innerText= finalvalue;
        
        if (lePangkha === "task-number" && finalvalue === 0) {
            alert("All tasks are completed! Great job!");
        }
        return finalvalue;
    }

function parse_floatand_task_plus(take) {
    const taskChecked = document.getElementById(take).innerText
    const newtask = parseInt(taskChecked) + 1;
    document.getElementById('plus').innerText = newtask
    return newtask;

}

function append(take){
    const firstheading = document.getElementById(take).innerText
    const time = new Date().toLocaleTimeString()
    const conteiner = document.getElementById("container")
    const div = document.createElement("div");
    div.classList.add("bg-green-100")
    div.innerHTML =`
    <p>You have Complete The Task ${firstheading} at ${time}</p>
    `
    return conteiner.appendChild(div)

}
//   if (Id === document.getElementById("task-number") && finalvalue === 0) {
//         alert("All tasks are completed! Great job!");
//     }