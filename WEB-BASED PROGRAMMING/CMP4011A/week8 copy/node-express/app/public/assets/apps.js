let myDate = new Date();
let todaysDate = myDate.toDateString();

let newPara = document.createElement('p');
let newListItem = document.createElement('li');

if (document.querySelector('#mypara')) {
    const dateTime = document.getElementById("mypara");
    const mainElement = document.querySelector("main");
    const sectionElement = document.querySelector("section");

    const listElement = document.getElementById('Benefits');
    const lastListItem = listElement.lastElementChild;

    newPara.textContent = 'Hello, This is a new Paragraph';
    newListItem.textContent = 'Helps improve blood circulation (New list item)';

    document.querySelector('#mypara').innerHTML = 'Today is ' + todaysDate;
    dateTime.setAttribute("class", "current-date");

    sectionElement.parentNode.insertBefore(newPara, sectionElement);

    listElement.insertBefore(newListItem, lastListItem);

    newPara.setAttribute('id', 'newPara');

    const listElementItems = listElement.children;
    listElement.removeChild(lastListItem);
}

let hamburgerIcon = document.querySelector('#hamburger');
hamburgerIcon.addEventListener('click', function () {
    document.querySelector('nav ul').classList.toggle('shownav');
});

if (document.querySelector('#myForm')) {

    let myForm = document.querySelector('#myForm');

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

        fetch('/contact', {
            method: 'POST',
            headers: requestHeaders,
            body: JSON.stringify(formBody),
        })
        .then(response => response.json())
        .then((responsedata) => {
            console.log(responsedata);
            confirmMessage.textContent = `Hi ${responsedata.name}, your message has been received, we will contact you at ${responsedata.email}`;
        });
    });
}





if (document.querySelector('#schedule')) {
    const sectionElement = document.querySelector('#schedule');
    const localJsonFile = "data.json";

 
    fetch(localJsonFile)
        .then(response => response.json())
        .then(responseData => {
            for (const item of responseData) {

                const schedule = document.createElement('article');
                schedule.setAttribute('class', 'services');
                sectionElement.appendChild(schedule);

                const imageElement = document.createElement('img');
                imageElement.src = item.imageURL;
                imageElement.alt = item.alt;
                schedule.appendChild(imageElement);


                const styleElement = document.createElement('h4');
                const timeElement = document.createElement('p');
                const focusElement = document.createElement('p');
                const benefitsElement = document.createElement('p');
                const levelElement = document.createElement('p');

                styleElement.textContent = item.style;
                timeElement.textContent = `Time: ${item.time}`;
                focusElement.textContent = `Focus: ${item.focus}`;
                benefitsElement.textContent = `Benefits: ${item.benefits}`;
                levelElement.textContent = `Level: ${item.level}`;

                schedule.appendChild(styleElement);
                schedule.appendChild(timeElement);
                schedule.appendChild(focusElement);
                schedule.appendChild(benefitsElement);
                schedule.appendChild(levelElement);
            }
        })
        .catch(error => console.error("Error fetching JSON data:", error));
}