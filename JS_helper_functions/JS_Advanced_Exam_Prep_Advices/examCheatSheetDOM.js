// 2 DOM 
// Лесен принцип по който да се водим, за да избегнем проблеми е:
Array.from() // Винаги ползвайте "Array.from" върху DOM колекции, така дори и да деструкторирате и 
// т.н. по тях все ще работят

// DOM cheat sheet
// Selecting DOM elements
let elem1 = document.getElementById('test');
document.querySelector('#test');
document.querySelectorAll('#test li');
 
// Get/Set content
elem1.value;
elem1.textContent;
 
// Traversing DOM
elem1.parentElement;
elem1.children;
 
// Create element
let createdElem = document.createElement('p');
 
// Adding to DOM
elem1.appendChild(createdElem);
 
// Delete from DOM
createdElem.remove();
 
// Events
elem1.addEventListener('click', someFunc);
e.target
 
// maybe
e.preventDefault(); // Buttons in Forms have default behaviour, which we may need to prevent
elem1.removeEventListener('click', someFunc);
 
// HTML Attributes
elem1.setAttribute('name','myName');
elem1.getAttribute('name');
elem1.classList.add('test');
elem1.classList.remove('test');
 
// Styling <=> CSS
elem1.style.setProperty('font-weight','bold');
elem1.style.getPropertyValue('font-weight')
