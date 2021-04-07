var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var mobileNav = document.querySelector('.mobile-nav');

var toggleButton = document.querySelector('.toggle-button');
var selectPlanButtons = document.querySelectorAll('.plan .button');
var modalCloseButton = document.querySelector('.modal__action--negative');

for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', () => {
        backdrop.classList.add('open');
        modal.classList.add('open');
    });
}

modalCloseButton.addEventListener('click', () => {
    backdrop.classList.remove('open');
    modal.classList.remove('open');
});

backdrop.addEventListener('click', () => {
    backdrop.classList.remove('open');
    modal.classList.remove('open');
    mobileNav.classList.remove('open');
});

toggleButton.addEventListener('click', () => {
    backdrop.classList.add('open');
    mobileNav.classList.add('open');
});
