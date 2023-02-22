
# **DOM Assigment 1**
## **Task 1**

In the navigation menu rename the "contacts" to "projects". And the user has to append a new element in the navigation menu named "Hire Me" after the "Projects"


### **After Update**
<p>
<br>

<img src='firstAssignmentImage/task1Output.png' alt='task 1' width="420" height="240" >
</p>


### **Project Solution**

```js
document.querySelector('nav ul').lastElementChild.innerText = "Projects";
let li = document.createElement('li');
let aTagWithText = document.createElement('a').innerText = "Hire Me"
li.append(aTagWithText);
document.querySelector('nav ul').append(li);
```
---
## **Task 2**

    The user needs to change the placeholder message to "Search My Project" from "Search".

### **After Update**

![Task 2](<./firstAssignmentImage/task2Output.png>)

### **Project Solution**

```js
document.querySelector('.search-field input').setAttribute('placeholder', 'Search My Project')
```
---
## **Task 3**

    The user has to change the "a Freelancer" to "an Employee" and "National and International Client" to "iNeuron Intelligence Pvt Ltd".

### **After Update**
![Task 3](<./firstAssignmentImage/task3Output.png>)

### **Project Solution**

```js
let span = document.querySelectorAll('.hero-left-section p span');
span[1].innerText = "an Employee";
span[2].innerText = "iNeuron Intelligence Pvt Ltd.";
```
---
## **Task 4**

    The user needs to change the "Avatar" image with the image of "Hitesh Sir". You can use any of the online available images of Hitesh sir from the internet. 

### **After Update**
![Task 4](<./firstAssignmentImage/task4Output.png>)

### **Project Solution**

```js
document.querySelector('.hero-right-section img').setAttribute('src', 'https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg');
```
---
## **Task 5**

    The user has to create one more button named "Support Me" and needs to add it next to the "Chat With Me" button below the avatar.

### **After Update**
![Task 5](<./firstAssignmentImage/task5Output.png>)

### **Project Solution**

```js
let buttonSection = document.querySelector('.hero-right-section-btns');
let newButton = document.createElement('button');
newButton.innerText = "Support Me";
buttonSection.append(newButton);;
```

