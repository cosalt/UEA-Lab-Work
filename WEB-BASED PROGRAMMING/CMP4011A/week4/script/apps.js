const currentDate = new Date();
const benefits = document.getElementById("benefits");

const lastlistitem = benefits.lastElementChild;

console.log(currentDate);


let myDate = new Date();
let todaysDate = myDate.toDateString();

document.querySelector("#mypara").innerHTML = 'Today is ' + todaysDate;



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