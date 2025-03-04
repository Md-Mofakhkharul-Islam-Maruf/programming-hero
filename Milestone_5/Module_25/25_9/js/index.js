// call all li tags and show them
const all_li = document.getElementsByTagName('li');
console.log(all_li);


// call all classname who have list-item and show them
const all_class = document.getElementsByClassName('list-item');
console.log(all_class);


// call specific id and style them.
const firstSection = document.getElementById('first-section-title');
console.log(firstSection);
firstSection.style.color = 'green';
firstSection.style.backgroundColor = 'purple'


// create element inside a specific id
const firstSectionList = document.getElementById('first-section-list')
const li = document.createElement('li');
li.innerText = 'Dynamic item added successfully';
firstSectionList.appendChild(li);


//create section using innerHTML
const sectionHolder = document.getElementById('main-section');
const section = document.createElement('section')
section.innerHTML = `
    <h1>New section</h1>
    <ul>
        <li>new list 1</li>
        <li>new list 2</li>
        <li>new list 3</li>
        <li>new list 4</li>
    </ul>
`;
sectionHolder.appendChild(section)


// document.querySecectorAll
// document.querySelector