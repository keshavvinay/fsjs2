const languagesElement = document.querySelectorAll('.main__languages a');
languagesElement.forEach((ele) => {
    let languages = ele.innerText;
    if(languages.includes('2.0')){
        ele.remove();
    }
})