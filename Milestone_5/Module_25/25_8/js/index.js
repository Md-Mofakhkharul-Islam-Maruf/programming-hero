//checking this page work or not
console.log('append.js');

// where to add
const plcesList= document.getElementById('places-list');
// what to be added
const li= document.createElement('li');
li.innerText='Maruf er bou';

// add the child
plcesList.appendChild(li)



// added a section and added inside things
const sectioncontainer= document.getElementById('section-container')
const section = document.createElement('section')
const h3=document.createElement('h3');// create a h3 tag inside section-container id thats means inside main tag
h3.innerText='Our favorite dress'// create value insid h3
section.appendChild(h3) //push h3 inside section
const ul=document.createElement('ul');
section.appendChild(ul)
const li1=document.createElement('li');
const li2=document.createElement('li');
const li3=document.createElement('li');
li1.innerText='lungi';
li2.innerText='Gamcha';
li3.innerText='Bodna';
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
sectioncontainer.appendChild(section) //push section inside section container thats mean main tag


// Alternative easiest way
const sectionfood= document.createElement('section');
sectionfood.innerHTML= `
<h3>Our favorite food</h3>
<ul>
<li>lal vuna</li>
<li>kalavuna</li>
<li>ja pai tai khai</li>
</ul>
`
sectioncontainer.appendChild(sectionfood)

// wow i done it


