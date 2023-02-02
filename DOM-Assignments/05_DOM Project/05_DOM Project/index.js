const a = document.createElement('a');
a.innerText = 'Pro Subscription';
a.classList.add('btn')
document.querySelector('.nav-links').nextElementSibling.append(a);

const recipeText = document.querySelectorAll('.recipe-text');
recipeText.forEach((ele) => {
    ele.style.color = 'blueviolet';
})