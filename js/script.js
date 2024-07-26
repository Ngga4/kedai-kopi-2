// toogle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika snack menu diklik
document.querySelector('#snack-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar sidebar untuk menghilangkan nav
const snack = document.querySelector('#snack-menu');

document.addEventListener('click', function(e) {
    if(!snack.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})