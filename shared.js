var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var mobileNav = document.querySelector('.mobile-nav');

var toggleButton = document.querySelector('.toggle-button');
var selectPlanButtons = document.querySelectorAll('.plan .button');
var modalCloseButton = document.querySelector('.modal__action--negative');
var ctaButton = document.querySelector('.main-nav__item--cta');

for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', () => {
        backdrop.style.display = 'block';
        setTimeout(() => {
            backdrop.classList.add('open');
        }, 1);
        modal.classList.add('open');
    });
}

if (modal) {
    modalCloseButton.addEventListener('click', () => {
        backdrop.classList.remove('open');
        setTimeout(() => {
            backdrop.style.display = 'none';
        }, 200);
        modal.classList.remove('open');
    });
}

backdrop.addEventListener('click', () => {
    backdrop.classList.remove('open');
    setTimeout(() => {
        backdrop.style.display = 'none';
    }, 200);
    if (modal) modal.classList.remove('open');
    mobileNav.classList.remove('open');
});

toggleButton.addEventListener('click', () => {
    setTimeout(() => {
        backdrop.classList.add('open');
    }, 1);
    mobileNav.classList.add('open');
});

ctaButton.addEventListener('animationstart', event => {
    console.log('Animation started', event);
});

var iteration = 0;

ctaButton.addEventListener('animationiteration', event => {
    console.log('Iteration ' + ++iteration, event);
});

ctaButton.addEventListener('animationend', event => {
    console.log('Animation ended', event);
    iteration = 0;
});
