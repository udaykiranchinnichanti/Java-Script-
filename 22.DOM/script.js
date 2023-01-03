
// DOM

// Document Object Model
// Document - File
// Object 
// Model - 


// DOM:
// It is a platform that is used to change or create or delete HTML Elements, html attributes and CSS Styles


// Access dom
let header = document.getElementById('head');
let horse = document.getElementById('horse');
console.log(header);

// Change attribute by using dom
header.style.color = 'green';
horse.style.width = '300px';

// Insert a element into dom
const para = document.createElement("h3");
const node = document.createTextNode("HeadingG 3");
para.appendChild(node);
const element = document.getElementsByIdName("H3");
element.appendChild(para);