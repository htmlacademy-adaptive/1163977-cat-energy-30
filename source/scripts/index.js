/* в этот файл добавляет скрипты*/
const $toggle = document.querySelector('.toggle');
const $mainMenu = document.querySelector('.main-nav__list');

$toggle.classList.remove('main-nav__toggle--nojs', 'toggle--open');
$mainMenu.classList.remove('main-nav__list--nojs', 'main-nav__list--open');

const menuOpen = () => {
  $toggle.classList.toggle('toggle--open');
  $mainMenu.classList.toggle('main-nav__list--open');
};

$toggle.addEventListener('click', () => menuOpen());

/* валидация формы */
const $form = document.querySelector('.form');
const $input = document.querySelectorAll('input');
const $button = document.querySelector('.button');

const validate = () => {
  if (!$form.checkValidity()) {
    $input.forEach((input) => {
      if (input.hasAttribute('required')) {
        input.classList.add('form__control--invalid');
      }
    });
  }
};
$button.addEventListener('click', () => validate());
