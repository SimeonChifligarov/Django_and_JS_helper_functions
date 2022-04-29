function onLogout() {
    logout();
    updateUserNav();
    page.redirect('/');
}
