const logo = document.querySelector('header img');
logo.setAttribute('src', './assets/ineuron-logo.png');

const appPrice = document.querySelector('.app_info .app_price');
appPrice.querySelector('span').innerText = '$10';

const div = document.createElement('div');
const i = document.createElement('i');
div.classList.add('footer_social_ico');
i.classList.add('fa-brands');
i.classList.add('fa-linkedin');
div.appendChild(i);
document.querySelector('.footer_social').appendChild(div)