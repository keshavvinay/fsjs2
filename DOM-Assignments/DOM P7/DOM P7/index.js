const languagesElement = document.querySelectorAll('.main__languages a');
languagesElement.forEach((ele) => {
    let languages = ele.innerText;
    if(languages.includes('2.0')){
        ele.remove();
    }
})

const button = document.createElement('button');
const div = document.createElement('div');
const buttonCss = `
background-color : red;
color : white;
padding-block: 18px;
border : none;
width : 75%;
margin : 0 auto;
font-size: 18px;
border-radius : 6px;
`;
button.innerText = 'After Writing the text submit the form';
const main = document.querySelector('.main')
main.append(div)
main.append(button)
button.style.cssText = buttonCss;
