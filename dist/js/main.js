//select lang

const navigationSelect = document.querySelector('.change__lang');

function initSelect(elem) {
  let selectHolder = elem.querySelector('.holder');
  let selectOptions = elem.querySelectorAll('.dropdown-option li');
  let dropHolder = elem.querySelector('.dropdown');
  let selectedOption = selectOptions[0];

  selectedOption.classList.add('current');

  selectHolder.addEventListener('click', function () {
    dropHolder.classList.toggle('active');
  });

  selectOptions.forEach(function(currentElement) {
    currentElement.addEventListener('click', function() {
      selectedOption.classList.remove('current');
      selectedOption = currentElement;
      currentElement.classList.add('current');
      selectHolder.innerText = currentElement.textContent;
      dropHolder.classList.toggle('active');
    });
  });
};

initSelect(navigationSelect);

//! Subscrible / Подписка
// Не судите строго, я всего-лишь джун
const subscriptionBlock = document.querySelector('.subscription');

if (subscriptionBlock) {
  (function() {
    const container = document.getElementById('subscripContainer');
    const subscrBtn = document.getElementById('subscripBtn');
    // const scrollChange = 120;
  
    subscrBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      container.classList.toggle('active');
      subscrBtn.classList.toggle('active');
    });
  
    document.addEventListener('click', (event) => {
      const closeModal = event.composedPath().includes(container);
      if(!closeModal) {
        container.classList.remove('active');
        subscrBtn.classList.remove('active');
      }
    });
  })();
  
  (function() {
    const radioBtn = document.getElementsByName('radio');
    const radioMonth = document.querySelector('[data-name="month"]');
    const radioYear = document.querySelector('[data-name="year"]');
    const radioInfo = document.querySelector('[data-name="info"]');
    
    const monthAttr = radioMonth.getAttribute('data-name');
    const yearAttr = radioYear.getAttribute('data-name');
    const infoAttr = radioInfo.getAttribute('data-name');
  
    for (let i = 0, length = radioBtn.length; i < length; i++) {
      radioBtn[i].onchange = () => {
        if(monthAttr === radioBtn[i].value) {
          radioMonth.style.display = 'block';
        } else {
          radioMonth.style.display = 'none';
        }
  
        if(yearAttr === radioBtn[i].value) {
          radioYear.style.display = 'block';
        } else {
          radioYear.style.display = 'none';
        }
  
        if(infoAttr === radioBtn[i].value) {
          radioInfo.style.display = 'block';
        } else {
          radioInfo.style.display = 'none';
        }
      }
    };
  })();
}


//Swiper / Свайп
(function() {
  'use strict';

  const breakpoint = window.matchMedia( '(max-width:767px)' );
  let swiper;

  const breakpointChecker = function() {
    if ( breakpoint.matches === true ) {
	    if ( swiper !== undefined ) swiper.destroy( true, true );
	    return;
    } else if ( breakpoint.matches === false ) {
      return enableSwiper();
    }
  };

  const enableSwiper = function() {
    swiper = new Swiper('.partners__container', {
      speed: 400,
      spaceBetween: 50,
      slidesPerView: 4,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        991: {
          slidesPerView: 5,
          spaceBetween: 80
        }
      }
    });
  };

  breakpoint.addEventListener('change', breakpointChecker);

  breakpointChecker();

})();

// hidden/visible block 

(function() {
  const configBtn = document.getElementById('config-btn');
  const hideBlock = document.getElementById('hide-block');

  configBtn.onclick = () => {
    hideBlock.classList.toggle('active')
    if (window.location.hash === '#ru') {
      if(hideBlock.classList.contains('active')) {
        configBtn.innerText = 'Скрыть всё'
      } else {
        configBtn.innerText = 'Посмотреть всё'
      }
    }

    if(window.location.hash === '#en') {
      if(hideBlock.classList.contains('active')) {
        configBtn.innerText = 'Hide all'
      } else {
        configBtn.innerText = 'View all'
      }
    }
  }
})();

//accardion - ebu eto hyina zadrochennaya

const allElements = document.querySelectorAll('.accardion__wrapper .accardion__elem');
const allItems = document.querySelectorAll('.accardion__items .accardion__image');

let image = [];
allElements.forEach((elem, index) => {
  elem.addEventListener('click', function() {
    let blockActive = document.querySelectorAll('.accardion__wrapper .accardion__elem.active');
    let imageActive = document.querySelectorAll('.accardion__items .accardion__image.active');
    image = allItems[index];

    blockActive.forEach((elem => {
      elem.classList.remove('active');
    }))
    imageActive.forEach((elem => {
      elem.classList.remove('active');
    }))

    if (elem.classList.contains('active')) {
      elem.classList.remove('active')
      image.classList.remove('active')
    }
    elem.classList.add('active');
    image.classList.add('active');
  })
})


// change language
const dropSelect = document.querySelector('.dropdown-option');
const droplanguage = document.querySelector('.holder');
const allLang = ['en', 'ru', 'ua'];


dropSelect.addEventListener('click', changeURLLanfuage);

function changeURLLanfuage() {
  let lang = droplanguage.innerText
  location.href = window.location.pathname + '#' + lang.toLowerCase();
  location.reload();
};

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#ru';
    location.reload();
  }

  droplanguage.innerText = hash.toUpperCase();

  if (typeof languages === 'undefined') {
    for(let key in langEmployer){
      let elem = document.querySelector(`.${key}`)
      if (elem) {
        elem.innerText = langEmployer[key][hash]
      }
    }
  };

  if (typeof langEmployer === 'undefined') {
    for(let key in languages){
      let elem = document.querySelector(`.${key}`)
      if (elem) {
        elem.innerText = languages[key][hash]
      }
    }
  };
};
changeLanguage();
