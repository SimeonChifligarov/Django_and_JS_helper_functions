import { html, render } from './node_modules/lit-html/lit-html.js';


const studentRow = (student) => html`
<tr class=${student.match ? 'select' : '' }>
   <td>${student.item.firstName} ${student.item.lastName}</td>
   <td>${student.item.email}</td>
   <td>${student.item.course}</td>
</tr>`;


const input = document.getElementById('searchField');
document.getElementById('searchBtn').addEventListener('click', onSearch);

let students;
// const mock = {"firstName":"John","lastName":"Dan","email":"john@john-dam.com","course":"JS-CORE","_id":"50537fbe-5d7e-44bf-a90f-69383c3b5bf4"};
start();



async function start() {
   const res = await fetch('http://localhost:3030/jsonstore/advanced/table');
   const data = await res.json();
   students = Object.values(data).map(s => ({ item: s, match: false }));

   // students.forEach(s => s.match = false);

   update();
}

function update() {
   render(students.map(studentRow), document.querySelector('tbody'));
}

function onSearch() {
   const value = input.value.trim();

   for (let student of students) {
      // console.log(Object.values(item));
      // console.log(item);
      student.match = value && Object.values(student.item).some(v => v.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
   }

   update();
}
