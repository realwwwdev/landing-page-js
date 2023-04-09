//Для проверки нажатия на слайдер
let sliderOne = false;
let sliderTwo = false;

document.addEventListener('DOMContentLoaded', function () {
  function switchSlider() {
    const box = document.querySelectorAll('.boxes');
    const spans = document.querySelectorAll('.ourproducts_switcher span');
    box[0].classList.add('show');
    spans[0].classList.add('chosed');
  }

  function switcher() {
    const box = document.querySelectorAll('.boxes');
    const spans = document.querySelectorAll('.ourproducts_switcher span');

    let current = 0;
    setInterval(() => {
      box.forEach((e) => e.classList.remove('show'));
      spans.forEach((e) => e.classList.remove('chosed'));
      if (current === box.length) current = 0;
      box[current].classList.add('show');
      spans[current].classList.add('chosed');
      current++;
    }, 10000);
  }

  switcher();
  switchSlider();

  function newSwitchSlider() {
    const box = document.querySelectorAll('.boxes.new');
    const spans = document.querySelectorAll('.ourproducts_switcher.new span');
    box[0].classList.add('show');
    spans[0].classList.add('chosed');
  }

  function newSwitcher() {
    const box = document.querySelectorAll('.boxes.new');
    const spans = document.querySelectorAll('.ourproducts_switcher.new span');

    let current = 0;
    setInterval(() => {
      box.forEach((e) => e.classList.remove('show'));
      spans.forEach((e) => e.classList.remove('chosed'));
      if (current === box.length) current = 0;
      box[current].classList.add('show');
      spans[current].classList.add('chosed');
      current++;
    }, 10000);
  }

  newSwitcher();
  newSwitchSlider();

  function switchFeedback() {
    const box = document.querySelectorAll('.feedback_cards');
    const spans = document.querySelectorAll('.feedback__switch span');
    box[0].classList.add('feed_show');
    spans[0].classList.add('pick');
  }

  function switcherFB() {
    const box = document.querySelectorAll('.feedback_cards');
    const spans = document.querySelectorAll('.feedback__switch span');

    let current = 0;
    setInterval(() => {
      box.forEach((e) => e.classList.remove('feed_show'));
      spans.forEach((e) => e.classList.remove('pick'));
      if (current === box.length) current = 0;
      box[current].classList.add('feed_show');
      spans[current].classList.add('pick');
      current++;
    }, 10000);
  }
});

function sliderPickers() {
  const buttons = document.querySelectorAll('.ourproducts_switcher span');
  buttons.forEach((e) => {
    e.addEventListener('click', sliderChecker);
  });
}
function newsliderPickers() {
  const buttons = document.querySelectorAll('.ourproducts_switcher_new span');
  buttons.forEach((e) => {
    e.addEventListener('click', newsliderChecker);
  });
}

sliderPickers();
newsliderPickers();

function sliderChecker(event) {
  const cards = document.querySelectorAll('.boxes');
  const spans = document.querySelectorAll('.ourproducts_switcher span');
  spans.forEach((e) => {
    e.classList.remove('chosed');
  });
  if (event) {
    event.target.classList.add('chosed');
    cards.forEach((e) => {
      e.classList.remove('show');
      if (e.classList.contains(event.target.dataset['item'])) {
        e.classList.add('show');
      }
    });
  }
}
function newsliderChecker(event) {
  const cards = document.querySelectorAll('.boxes');
  const spans = document.querySelectorAll('.ourproducts_switcher span');
  spans.forEach((e) => {
    e.classList.remove('chosed');
  });
  if (event) {
    event.target.classList.add('chosed');
    cards.forEach((e) => {
      e.classList.remove('show');
      if (e.classList.contains(event.target.dataset['item'])) {
        e.classList.add('show');
      }
    });
  }
}

function feedbackPickers() {
  const buttons = document.querySelectorAll('.feedbacks_picker');
  buttons.forEach((e) => {
    e.addEventListener('click', feedbackChecker);
  });
}

feedbackPickers();

function feedbackChecker(event) {
  const cards = document.querySelectorAll('.feedback_cards');
  const spans = document.querySelectorAll('.feedback__switch span');
  spans.forEach((e) => {
    e.classList.remove('pick');
  });
  if (event) {
    event.target.classList.add('pick');
    cards.forEach((e) => {
      e.classList.remove('feed_show');
      if (e.classList.contains(event.target.dataset['fbnumber'])) {
        e.classList.add('feed_show');
      }
    });
  }
}

function openfbIMG() {
  const img = document.querySelectorAll('.feedback_cards img');

  const body = document.querySelector('#modals');

  const modal = `
        <div class="fb_img_bg">
            <img src="${img[0].getAttribute('src')}" class="fb_img_src">
        </div>
    `;
  const style = `
    <style>
        .fb_img_bg {
            z-index: 10010;
            display: none;
            top: 0px;
            position: fixed;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            background: #0000008a;
        }

        .fb_img_bg > img {
            cursor: default;
            width: auto;
        }

        @media screen and (max-width: 1080px) {
            .fb_img_bg > img {
                width: 80%;
            }
        }
    </style>
    `;
  const div = `
        <div>
            ${style}
            ${modal}
        </div>
    `;
  body.insertAdjacentHTML('afterbegin', div);

  const windowmodal = document.querySelector('.fb_img_bg');
  const imgmodal = document.querySelector('.fb_img_src');

  img.forEach((e) => {
    e.addEventListener('click', () => {
      windowmodal.style.display = 'flex';
      imgmodal.setAttribute('src', e.getAttribute('src'));

      windowmodal.addEventListener('click', (el) => {
        el.target.classList.contains('fb_img_bg')
          ? (windowmodal.style.display = 'none')
          : console.log('miss click');
      });
    });
  });
}
