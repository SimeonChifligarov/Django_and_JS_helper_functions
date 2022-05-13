// window.addEventListener('load', solve);

function solve() {
    // console.log('it works!');

    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', onSubmit);

    const allHitsDiv = document.querySelector('#all-hits .all-hits-container');

    const savedSongsDiv = document.querySelector('#saved-hits .saved-container');





    function onSubmit(ev) {
        ev.preventDefault();

        // const formData = new FormData(ev.target.parentElement);

        // const genre1 = formData.get('genre');
        // const name1 = formData.get('name');
        // const author1 = formData.get('author');
        // const date1 = formData.get('date');

        // const genre = ev.target.parentElement.querySelector('[name="genre"]').value;
        // const name = ev.target.parentElement.querySelector('[name="name"]').value;
        // const author = ev.target.parentElement.querySelector('[name="author"]').value;
        // const date = ev.target.parentElement.querySelector('[name="date"]').value;

        const genre = document.getElementById('genre').value.trim();
        const name = document.getElementById('name').value.trim();
        const author = document.getElementById('author').value.trim();
        const date = document.getElementById('date').value.trim();

        // console.log(genre, name, author, date);
        // console.log(genre1 === genre);
        // console.log(name1 === name);
        // console.log(author1 === author);
        // console.log(date1 === date);

        if (genre == '' || name == '' || author == '' || date == '') {
            return;
        }

        const saveBtn = e('button', { className: 'save-btn' }, 'Save song');
        saveBtn.addEventListener('click', onSave)

        const likeBtn = e('button', { className: 'like-btn' }, 'Like song');
        likeBtn.addEventListener('click', onLike);

        const delBtn = e('button', { className: 'delete-btn' }, 'Delete');
        delBtn.addEventListener('click', onDelete)

        const newSongDiv = e('div', { className: 'hits-info' },
            e('img', { src: './static/img/img.png' }),
            e('h2', {}, `Genre: ${genre}`),
            e('h2', {}, `Name: ${name}`),
            e('h2', {}, `Author: ${author}`),
            e('h3', {}, `Date: ${date}`),
            saveBtn,
            likeBtn,
            delBtn
        )

        allHitsDiv.appendChild(newSongDiv);

        document.getElementById('genre').value = '';
        document.getElementById('name').value = '';
        document.getElementById('author').value = '';
        document.getElementById('date').value = '';

    }

    function onLike(ev) {
        const likeSpan = document.querySelector('.likes').firstElementChild;
        let likesBefore = Number(likeSpan.textContent.split(': ')[1]);
        likeSpan.textContent = `Total Likes: ${likesBefore + 1}`;

        // console.log(document.querySelector('.likes'));
        ev.target.setAttribute('disabled', 'true');

    }

    function onSave(ev) {
        const currentDiv = ev.target.parentElement;
        const newDivArray = Array.from(currentDiv.children).slice(0, 5);
        // console.log(newDivArray);

        const delBtn = e('button', { className: 'delete-btn' }, 'Delete');
        delBtn.addEventListener('click', onDelete);

        const newDiv = e('div', { className: 'hits-info' });
        newDivArray.forEach(e => newDiv.appendChild(e));
        newDiv.appendChild(delBtn);

        savedSongsDiv.appendChild(newDiv);
        currentDiv.remove();

    }

    function onDelete(ev) {
        ev.target.parentElement.remove();

    }

    function e(type, attributes, ...content) {
        const result = document.createElement(type);

        for (let [attr, value] of Object.entries(attributes || {})) {
            if (attr.substring(0, 2) == 'on') {
                result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
            } else {
                result[attr] = value;
            }
        }

        content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

        content.forEach(el => {
            if (typeof el == 'string' || typeof el == 'number') {
                const node = document.createTextNode(el);
                result.appendChild(node);
            } else {
                result.appendChild(el);
            }
        });

        return result;
    }

}



// // document.body.innerHTML =`
// // <section id="welcome" class="background-image">
// //         <div class="home-container">
// //             <div class="info">
// //                 <h1>Music for everyone.</h1>
// //             </div>
// //         </div>
// //     </section>

// // <div id="wrapper">

// //         <section id="append-song">
// //             <div class="first-container">
// //                 <img src="./static/img/hero-bg.png.png" alt="image">

// //                 <div class="container-text">
// //                     <h2>Add song.</h2>
// //                     <p>Join the world of music, add the latest hits.</p>

// //                     <form action="">
// //                         <label for="genre">Genre:</label>
// //                         <input type="text" id="genre" name="genre" placeholder="Pop">

// //                         <label for="name">Name of the song:</label>
// //                         <input type="text" id="name" name="name" placeholder="Pon de Replay">

// //                         <label for="author">Author of the song:</label>
// //                         <input type="text" id="author" name="author" placeholder="Rihanna">

// //                         <label for="date">Date of creation:</label>
// //                         <input type="text" id="date" name="date" placeholder="26.11.2009">

// //                         <button id="add-btn" type="submit">Add</button>
// //                     </form>
// //                     <span>No spams included</span>

// //                 </div>
// //             </div>
// //         </section>

// //         <section id="all-hits">
// //             <div class="all-hits-container">
// //                 <h1>Collection of songs</h1>

// //             </div>
// //         </section>

// //         <section id="saved-hits">
// //             <div class="saved-container">
// //                 <h1>Saved songs</h1>

// //             </div>
// //         </section>

// //         <section id="total-likes">
// //             <div class="likes">
// //                 <p>Total Likes: 0</p>
// //                 <img src="./static/img/like-btn.jpg" alt="image-like">
// //             </div>
// //         </section>

// //     </div>

// //     <footer>@JS Advanced Exam - Music Site </footer>
// //     <script src="app.js"></script>
// // `;
// // result();
// // const createSong = {
// //       genre: ()=>document.getElementById("genre"),
// //       name: ()=>document.getElementById("name"),
// //       author: ()=>document.getElementById("author"),
// //       date: ()=>document.getElementById("date"),
// //       addBtn: ()=>document.getElementById("add-btn")
// // }
// // createSong.genre().value = 'Jazz';
// // createSong.name().value = 'Chicago';
// // createSong.author().value = 'Frank Sinatra';
// // createSong.date().value = '05.11.2020';

// // createSong.addBtn().click();

// // document.querySelector(".save-btn").click();

// // let savedSection = document.querySelector(".saved-container>.hits-info");

// // let actual = savedSection.innerHTML.trim().replace(/\s/gm,"");
// // let expected = '<img src="./static/img/img.png"><h2>Genre: Jazz</h2><h2>Name: Chicago</h2><h2>Author: Frank Sinatra</h2><h3>Date: 05.11.2020</h3><button class="delete-btn">Delete</button>'.trim().replace(/\s/gm,"");

// // assert.equal(actual,expected);


