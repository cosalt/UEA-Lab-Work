const currentDate = new Date();
console.log(currentDate);


let myDate = new Date();
let todaysDate = myDate.toDateString();

if (document.querySelector("#mypara")) {
    document.querySelector("#mypara").innerHTML = 'Today is ' + todaysDate;

    const benefits = document.getElementById("benefits");

    const lastlistitem = benefits.lastElementChild;

    const dateTime = document.getElementById("mypara");
    dateTime.setAttribute("class", "current-date");



    let newPara = document.createElement("p");
    newPara.innerHTML = "Hello, This is a new paragraph!";

    newPara.setAttribute("class", "newPara");



    let sectionElement = document.querySelector("section");
    sectionElement.parentNode.insertBefore(newPara, sectionElement);



    let listitem = document.createElement("li");
    listitem.innerHTML = "Helps improve blood circulation (New list item)";
    benefits.insertBefore(listitem, lastlistitem);


    removeChild = benefits.removeChild(lastlistitem);
}


let hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('shownav');
});


let myForm = document.querySelector('#myForm'); 
if (myForm) {
    let myName = document.querySelector('#name'); 
    let myEmail = document.querySelector('#email');
    let confirmMessage = document.querySelector('.confirmMessage');

    myForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formBody = {
            name: myName.value,
            email: myEmail.value,
            message: message.value
        };
    const requestHeaders = {
        "Content-Type": "application/json"
    };
    
    fetch("/contact", {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify(formBody)
    })
    .then(response => response.json())
    .then((responsedata) => {
        console.log(responsedata);
        confirmMessage.textContent = `Hi ${responsedata.name}, your message has been received, we will contact you at ${responsedata.email}`;
    });
});
}













let schedule = document.querySelector('#schedule');
let localJsonFile = 'data.json';

document.addEventListener('DOMContentLoaded', () => {
    const localJsonFile = 'data.json';

    fetch(localJsonFile)
        .then(response => response.json())
        .then(responseData => {
            const sectionElement = document.getElementById('schedule');

            for (const item of responseData) {
                const scheduleArticle = document.createElement('article');
                scheduleArticle.setAttribute('class', 'services');

                const imageElement = document.createElement('img');
                imageElement.src = item.imageURL;
                imageElement.alt = item.alt;

                const heading = document.createElement('h4');
                heading.textContent = item.style;

                const timePara = document.createElement('p');
                timePara.textContent = `Time: ${item.time}`;

                const focusPara = document.createElement('p');
                focusPara.textContent = `Focus: ${item.focus}`;

                const benefitsPara = document.createElement('p');
                benefitsPara.textContent = `Health Benefits: ${item.benefits}`;

                const levelPara = document.createElement('p');
                levelPara.textContent = `Skill Level: ${item.level}`;

                scheduleArticle.appendChild(imageElement);
                scheduleArticle.appendChild(heading);
                scheduleArticle.appendChild(timePara);
                scheduleArticle.appendChild(focusPara);
                scheduleArticle.appendChild(benefitsPara);
                scheduleArticle.appendChild(levelPara);

                sectionElement.appendChild(scheduleArticle);
            }
        })
        .catch(error => console.error('Error loading JSON:', error));
});
