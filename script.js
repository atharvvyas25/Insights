const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});





document.addEventListener('DOMContentLoaded', function () {
    const searchLink = document.getElementById('search-link');
    const shortNavbar = document.querySelector('.short-navbar');
    const searchBarContainer = document.querySelector('.search-bar-container');

    searchLink.addEventListener('click', function (e) {
        e.preventDefault();
        shortNavbar.style.display = 'none';
        searchBarContainer.style.display = 'block';
    });

    document.querySelectorAll('.nav-item a').forEach(link => {
        link.addEventListener('click', function () {
            document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
            this.parentElement.classList.add('active');
        });
    });
});

