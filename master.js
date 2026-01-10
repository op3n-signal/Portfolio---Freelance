
function toggleNav(event) {
    const customNav = document.querySelector('.custom-nav');
    const burgerLine1 = document.querySelector('.burger-line-1');
    const burgerLine2 = document.querySelector('.burger-line-2');
    const burgerLine3 = document.querySelector('.burger-line-3');

    customNav.classList.toggle('open');
    burgerLine1.classList.toggle('active-line-1');
    burgerLine2.classList.toggle('active-line-2');
    burgerLine3.classList.toggle('active-line-3');
}