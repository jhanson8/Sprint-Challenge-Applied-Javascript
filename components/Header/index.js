/* jshint esversion: 6 */

// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

  //define new elements
const headerDiv = document.createElement("div");
const dateSpan = document.createElement("span");
const hOne = document.createElement("h1");
const tempSpan = document.createElement("span");

//set class names
headerDiv.classList.add('header');
dateSpan.classList.add('date');
tempSpan.classList.add('temp');

//set structure
headerDiv.appendChild(dateSpan);
headerDiv.appendChild(hOne);
headerDiv.appendChild(tempSpan);

//add content
dateSpan.textContent = "SMARCH 28, 2019";
hOne.textContent = "Lambda Times";
tempSpan.textContent = "98°";



return headerDiv;

}

const headerContainer = document.querySelector(".header-container");

headerContainer.appendChild(Header());
