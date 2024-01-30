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

// function getTextNodesIn(elem, opt_fnFilter) {
//   var textNodes = [];
//   if (elem) {
//     for (var nodes = elem.childNodes, i = nodes.length; i--;) {
//       var node = nodes[i],
//         nodeType = node.nodeType;
//       if (nodeType == 3) {
//         if (!opt_fnFilter || opt_fnFilter(node, elem)) {
//           if (node.data.trim() !== '') {
//             textNodes.push(node.data.trim() !== '' ? node : '');

//           }
//         }
//       } else if (nodeType == 1 || nodeType == 9 || nodeType == 11) {
//         textNodes = textNodes.concat(getTextNodesIn(node, opt_fnFilter));
//       }
//     }
//   }
//   return textNodes;
// }

// getTextNodesIn(document.body).forEach((item) => { item.textContent = "У меня есть несколько клиентов, которые записались ко мне на стрижку, не успев даже зайти в салон." })
