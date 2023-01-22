
document.body.addEventListener('click', (event) => {
    let bubbleElement = document.createElement('div')
    bubbleElement.className = "bubble";
    bubbleElement.style.left = event.clientX + 'px';
    bubbleElement.style.top = event.clientY + 'px';
    document.body.appendChild(bubbleElement)
    bulkElement(bubbleElement)
    disappearElement(bubbleElement);
})

function bulkElement(element){
    setTimeout(() => {
        element.classList.add('bulk')
    }, 1000);
}

function disappearElement(element){
    setTimeout(() => {
        document.body.removeChild(element)
    }, 2000);
}
