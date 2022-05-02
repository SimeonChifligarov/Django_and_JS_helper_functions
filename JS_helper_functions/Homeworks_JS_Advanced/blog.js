function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', getAllPosts);
    document.getElementById('btnViewPost').addEventListener('click', displayPost);
}

attachEvents();

async function displayPost() {

    const titleEl = document.getElementById('post-title');
    const bodyEl = document.getElementById('post-body');
    const ulEl = document.getElementById('post-comments');

    titleEl.textContent = 'Loading...';
    bodyEl.textContent = '';
    ulEl.replaceChildren();

    const selectedId = document.getElementById('posts').value;

    const [post, comments] = await Promise.all([
        getPostById(selectedId),
        getCommentsById(selectedId)
    ]);

    titleEl.textContent = post.title;
    bodyEl.textContent = post.body;

    comments.forEach(c => {
        const liEl = document.createElement('li');
        liEl.textContent = c.text;
        ulEl.appendChild(liEl);
    });
}

async function getAllPosts() {

    const url = 'http://localhost:3030/jsonstore/blog/posts';

    const resp = await fetch(url);
    const data = await resp.json();


    const selectEl = document.getElementById('posts');
    selectEl.replaceChildren();

    Object.values(data).forEach(p => {
        const optionEl = document.createElement('option');
        optionEl.textContent = p.title;
        optionEl.value = p.id;

        selectEl.appendChild(optionEl);
    });
}

async function getPostById(postId) {
    try {
        const url = 'http://localhost:3030/jsonstore/blog/posts/' + postId;

        const resp = await fetch(url);
        if (resp.ok === false) {
            throw new Error(`${resp.status} ${resp.statusText}`)
        }

        const data = resp.json();

        return data;

    } catch (error) {
        alert('Error', error);
    }
}

async function getCommentsById(postId) {
    try {
        const url = 'http://localhost:3030/jsonstore/blog/comments';

        const resp = await fetch(url);
        if (resp.ok === false) {
            throw new Error(`${resp.status} ${resp.statusText}`)
        }

        const data = await resp.json();

        const comments = Object.values(data).filter(c => c.postId == postId);

        return comments;
        
    } catch (error) {
        alert('Error', error);
    }
}
