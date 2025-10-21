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
let myName = document.querySelector('#name'); 
let myEmail = document.querySelector('#email');
let confirmMessage = document.querySelector('.confirmMessage');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    confirmMessage.textContent=`Hi ${myName.value}, your message has been received, we will contact you at ${myEmail.value}.`;
});
