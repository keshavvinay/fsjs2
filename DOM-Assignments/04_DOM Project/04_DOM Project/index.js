let clashCard = document.querySelectorAll('.clash-card');
clashCard.forEach(ele => {
    let cardLevel = ele.querySelector('.clash-card__level');
    let cardLevelTextColor = getComputedStyle(cardLevel).color;
    let cardStatus = ele.querySelector('.clash-card__unit-stats');
    cardStatus.style.backgroundColor = cardLevelTextColor;
    cardStatus.style.color = '#ffffff';
    cardStatus.lastElementChild.style.color = '#ffffff';
})