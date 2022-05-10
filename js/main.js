const headerContent = document.querySelector('.header__content');
const headerLogo = document.querySelector('.header__logo');
const innerHeaderNav = document.querySelectorAll('.wrap');
const headerNav = document.querySelector('.header__nav');
const menuBurger = document.querySelector('.menu__burger');

let inner = '';

if (window.innerWidth <= 767) {
  for (let i = 0; i < innerHeaderNav.length; i++) {
    inner += innerHeaderNav[i].outerHTML;
    innerHeaderNav[i].remove();
  }

  const headerNav = document.createElement('div');
  headerNav.classList.add('header__nav');
  headerContent.append(headerNav);
  headerNav.innerHTML = inner;
}
menuBurger.addEventListener('click', function () {
  const headerLogo = document.querySelector('.header__logo');
  const innerHeaderNav = document.querySelectorAll('.wrap');
  const headerNav = document.querySelector('.header__nav');
  const menuBurger = document.querySelector('.menu__burger');

  headerNav.classList.toggle("_active");
  menuBurger.classList.toggle("_active");
  headerLogo.classList.toggle("_active");

  for (let i = 0; i < innerHeaderNav.length; i++) {
    innerHeaderNav[i].classList.toggle("_active");
  }

  document.body.classList.toggle("_lock");
});