//task 2
let accordianWrapper = document.querySelector('.accordian-wrapper')
let newAccordianDiv = document.createElement('div');
let h3 = document.createElement('h3');
let p = document.createElement('p');
newAccordianDiv.append(h3);
h3.innerText = "Skills";
newAccordianDiv.append(p);
p.innerText = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.";
p.style.display = 'none';
newAccordianDiv.classList.add('accordian');
accordianWrapper.append(newAccordianDiv);

let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

//assignment 2
//task 1
let allAccordians = document.querySelectorAll('.accordian h3');
allAccordians.forEach(element => {
    element.style.backgroundColor = "#DADAF5" 
});
