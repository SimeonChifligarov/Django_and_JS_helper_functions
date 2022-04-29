// import * as api from './api/data.js';

// window.api = api;

// console.log('it works!');

import { logout } from './api/data.js';
import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { catalogPage } from './views/catalog.js';
// import relevant async function from .js files from views directory


const root = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', homePage);
page('/memes', catalogPage);
// other routings


updateUserNav(); // updating user navigation before starting page
page.start();    // starting page
