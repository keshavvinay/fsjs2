
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
        let colorHexCode = generateRandomColor()
        element.style.backgroundColor = colorHexCode;
        element.classList.add('bulk')
    }, 1000);
}

function disappearElement(element){
    setTimeout(() => {
        document.body.removeChild(element)
    }, 2000);
}

// logic taken from anurag sir class
function generateRandomColor(){
    let hex = "0123456789ABCDEF";
    let hash = "#";
    for(let i=0; i<6; i++){
        hash = hash + hex[Math.floor(Math.random() * 16)]
    }
    // console.log(hash)
    return hash;
}