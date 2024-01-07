

const navLink = document.querySelectorAll('.nav_link');
const windowPathname = window.location.pathname;


navLink.forEach(navLink => {
    if (navLink.href.includes(windowPathname)){
        navLink.classList.add('active');
    }
})
