let lastScroll = 0;
let navbar = document.querySelector('#navbar');

function init() {
    if(window.scrollY == 0) {
        navbar.classList.add('atTop');
        navbar.classList.remove('down');
    } else if(window.scrollY > lastScroll) {
        navbar.classList.remove('atTop');
        navbar.classList.add('down');
    } else {
        navbar.classList.remove('atTop');
        navbar.classList.remove('down');
    }

    lastScroll = window.scrollY;
}

window.addEventListener('scroll', (e) => {
    if(window.scrollY == 0) {
        navbar.classList.add('atTop');
        navbar.classList.remove('down');
    } else if(window.scrollY > lastScroll) {
        navbar.classList.remove('atTop');
        navbar.classList.add('down');
    } else {
        navbar.classList.remove('atTop');
        navbar.classList.remove('down');
    }

    lastScroll = window.scrollY;
})


init();