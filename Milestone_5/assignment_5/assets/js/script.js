document.getElementById('clear-history').addEventListener('click',
    function (event) {
        event.preventDefault()
        document.getElementById('container').innerHTML = ''
    })

document.getElementById("go").addEventListener("click",
    function () {
        window.location.href = "blog.html";

    }
)

// 1st card button
document.getElementById('card-1-btn').addEventListener('click',
    function (event) {
        event.preventDefault();

        alert('You click here');
        parse_floatand_task('task-number');
        parse_floatand_task_plus('plus');
        document.getElementById('card-1-btn').disabled = true;
        append('task-heading-1')
    }
)


// 2nd card button
document.getElementById('card-2-btn').addEventListener('click',
    function (event) {
        event.preventDefault();

        alert('You click here');
        parse_floatand_task('task-number');
        parse_floatand_task_plus('plus');
        document.getElementById('card-2-btn').disabled = true;
        append('task-heading-2')
    }
)



// 3rd card button
document.getElementById('card-3-btn').addEventListener('click',
    function (event) {
        event.preventDefault();

        alert('You click here');
        parse_floatand_task('task-number');
        parse_floatand_task_plus('plus');
        document.getElementById('card-3-btn').disabled = true;
        append('task-heading-3')
    }
)


// 4th card button
document.getElementById('card-4-btn').addEventListener('click',
    function (event) {
        event.preventDefault();

        alert('You click here');
        parse_floatand_task('task-number');
        parse_floatand_task_plus('plus');
        document.getElementById('card-4-btn').disabled = true;
        append('task-heading-4')
    }
)


// 5th card button
document.getElementById('card-5-btn').addEventListener('click',
    function (event) {
        event.preventDefault();

        alert('You click here');
        parse_floatand_task('task-number');
        parse_floatand_task_plus('plus');
        document.getElementById('card-5-btn').disabled = true;
        append('task-heading-5')
    }
)


// 6th card button
document.getElementById('card-6-btn').addEventListener('click',
    function (event) {
        event.preventDefault();

        alert('You click here');
        parse_floatand_task('task-number');
        parse_floatand_task_plus('plus');
        document.getElementById('card-6-btn').disabled = true;
        append('task-heading-6')
    }
)

const today = new Date(); 
const dayOfWeek = today.toLocaleString('default', { weekday: 'short' }); 
const month = today.toLocaleString('default', { month: 'short' }); 
const day = today.getDate(); 
const year = today.getFullYear(); 

document.getElementById("dayOfWeek").innerText = `${dayOfWeek},`;

document.getElementById("fullDate").innerText = `${month} ${day} ${year}`;

document.getElementById("theme-btn").addEventListener("click",
    function(){
        const randomTheme = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomTheme;
    }
)