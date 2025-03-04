// styling css through js
const Sections= document.querySelectorAll('section') //pickup section tag
for(const section of Sections){
    section.style.border='2px solid red'
    section.style.marginBottom="10px"
    section.style.textAlign="center"
}

//changing css id color through js
const color = document.getElementById('our-places')
color.style.backgroundColor='yellow'

// add and delete id through js
const add_remove= document.getElementById('our-age')
add_remove.classList.add('bg-green')
add_remove.classList.remove('bg-green')