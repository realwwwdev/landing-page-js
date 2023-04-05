// Нашли все заголовки табов по data атрибуту
const tabHeaders = document.querySelectorAll('[data-tab]');
// Нашли все контент боксы
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function (item) {
  item.addEventListener('click', function () {
    // 1. Скрыть все content box
    contentBoxes.forEach(function (item) {
      item.classList.add('hidden');
    });

    // 2. Выбрать нужный content box и показать его
    const contentBox = document.querySelector('#' + this.dataset.tab);
    contentBox.classList.remove('hidden');
  });
});

// Индикатор для табов

function setIndicator(name) {
  return document.getElementsByClassName(name);
}

let tabPanes = setIndicator('tab-header')[0].getElementsByTagName('div');

for (let i = 0; i < tabPanes.length; i++) {
  tabPanes[i].addEventListener('click', function () {
    setIndicator('tab-indicator')[0].style.top = `calc(80px + ${i * 50}px)`;
  });
}

// Счетчики

let valueDisplays = document.querySelectorAll('.num');
let interval = 1000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute('data-val'));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
