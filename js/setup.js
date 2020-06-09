'use strict';
var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var WIZARD_SERNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_NUMBER = 4;


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// Нахождение шаблона для копирования
var similarListElement = userDialog.querySelector('.setup-similar-list');

// Показ блока .setup-similar
userDialog.querySelector('.setup-similar').classList.remove('hidden');

// Добавление волшебников в блок
similarListElement.appendChild(renderSimilarWizards(generateWizard(WIZARDS_NUMBER)));

// Функция для заполнения блока похожими магами
function renderSimilarWizards(wizards) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderTemplateWizard(wizards[i]));
  }

  return fragment;
}

// Функция для генерации шаблона мага
function renderTemplateWizard(wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

// Функция для генерации массива с магами
function generateWizard(countNumber) {
  var wizards = [];
  for (var i = 0; i < countNumber; i++) {
    var wizard = {
      name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SERNAMES),
      coatColor: getRandomElement(COAT_COLORS),
      eyesColor: getRandomElement(EYES_COLORS)
    };
    wizards.push(wizard);
  }
  return wizards;
}

// Функция генерации случайных чисел
function generateRandomValue(min, max) {
  return Math.floor(Math.random() * max + min);
}

// Функция генерации случайного значения из массива
function getRandomElement(elements) {
  return elements[generateRandomValue(0, elements.length)];
}
