var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var mobileNav = document.querySelector('.mobile-nav');

var toggleButton = document.querySelector('.toggle-button');
var selectPlanButtons = document.querySelectorAll('.plan .button');
var modalCloseButton = document.querySelector('.modal__action--negative');

for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', () => {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    });
}

modalCloseButton.addEventListener('click', () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
});

backdrop.addEventListener('click', () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
    mobileNav.style.display = 'none';
});

toggleButton.addEventListener('click', () => {
    backdrop.style.display = 'block';
    mobileNav.style.display = 'block';
});
