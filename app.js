window.addEventListener('scroll', () => {
    const navbar = document.querySelector('#mainNavbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
});

let slideUp = {
    distance: '60px',
    origin: 'bottom',
    opacity: 0,
    duration: 1000
}

let slideRight = {
    distance: '80px',
    origin: 'left',
    opacity: 0,
    delay: 3000,
    duration: 1500
}

let card1 = {
    distance: '60px',
    origin: 'bottom',
    opacity: 0,
    delay: 1000,
    duration: 1500
}

let card2 = {
    distance: '60px',
    origin: 'bottom',
    opacity: 0,
    delay: 1500,
    duration: 1500
}

let card3 = {
    distance: '60px',
    origin: 'bottom',
    opacity: 0,
    delay: 2000,
    duration: 1500
}

ScrollReveal().reveal('.main-header', slideUp);
ScrollReveal().reveal('#plans-header', slideUp);
ScrollReveal().reveal('.hide-on-small', { delay: 1500 });
ScrollReveal().reveal('.btn-container', slideRight);

ScrollReveal().reveal('#card-1', card1);
ScrollReveal().reveal('#card-2', card2);
ScrollReveal().reveal('#card-3', card3);