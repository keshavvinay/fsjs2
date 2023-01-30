//task 1
// rename contacts to projects
document.querySelector('nav ul').lastElementChild.innerText = "Projects";

// create "Hire Me" element in navigation menu
let li = document.createElement('li');
let aTagWithText = document.createElement('a').innerText = "Hire Me"
li.append(aTagWithText);
document.querySelector('nav ul').append(li);

//task 2
document.querySelector('.search-field input').setAttribute('placeholder', 'Search My Project')

//task 3
let span = document.querySelectorAll('.hero-left-section p span');
span[1].innerText = "an Employee";
span[2].innerText = "iNeuron Intelligence Pvt Ltd.";

//task 4
document.querySelector('.hero-right-section img').setAttribute('src', 'https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg');

//task 5
let buttonSection = document.querySelector('.hero-right-section-btns');
let newButton = document.createElement('button');
newButton.innerText = "Support Me";
buttonSection.append(newButton);