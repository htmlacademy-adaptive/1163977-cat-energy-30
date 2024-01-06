/* в этот файл добавляет скрипты*/
const $toggle = document.querySelector('.toggle');
const $mainMenu = document.querySelector('.main-menu');

$toggle.classList.remove('main-nav__toggle--nojs', 'toggle--open');
$mainMenu.classList.remove('main-menu--nojs', 'main-menu--open');

const menuOpen = () => {
  $toggle.classList.toggle('toggle--open');
  $mainMenu.classList.toggle('main-menu--open');
};

$toggle.addEventListener('click', () => menuOpen());
