<template>
  <div>
    <div class="wrapper">
      <ms-header/>    
      <nuxt/>
      <ms-footer/>
    </div>
    <ms-popup/>
  </div>
</template>

<script>
import header from '@/components/header'
import popup from '@/components/popup'
import footer from '@/components/footer'

export default {
  components: {
    'ms-header': header,
    'ms-popup': popup,
    'ms-footer': footer
  },
  mounted(){
    const ua = window.navigator.userAgent.toLowerCase(),
    is_ie = (/trident/gi).test(ua) || (/msie/gi).test(ua);
    if(is_ie){
      // console.log('is_ie')
      const wrapper = document.querySelector('.wrapper')
      wrapper.classList.add('is_ie')
      const popupId = document.getElementById('popup')
      popupId.classList.add('is_ie')
    }

    function testWebP(callback) {
      var webP = new Image();
      webP.onload = webP.onerror = function () {
          callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        }else{
          document.querySelector('body').classList.add('no-webp');
        }
    });
        

    function closePop(){
      body.style.paddingRight = '0px'
      body.classList.remove('lock')
      popupLink.classList.remove('open')
    }

    const menu = document.querySelector('.menu'),
          logo = document.querySelector('.header__logo'),
          popupLink = document.querySelector('.popup');
    if (menu != null || logo != null) {
      menu.addEventListener('click', closePop, false)
      logo.addEventListener('click', closePop, false) 
    }    

    const headerPopup = document.querySelector('.header__popup')
    headerPopup.addEventListener("click", function (e) {
      let headerMenu = document.querySelector('.header__menu')
      if(headerMenu.classList.contains('active')){
        $('.header__burger,.header__menu,.header__social').toggleClass('active')
      }
    });

    const popupLinks = document.querySelectorAll('.popup-link');
    const body = document.querySelector('body');
    const lockPadding = document.querySelectorAll(".lock-padding");

    let unlock = true;

    const timeout = 800;

    if (popupLinks.length > 0) {
      for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
          const popupName = popupLink.getAttribute('href').replace('#', '');
          const curentPopup = document.getElementById(popupName);          
          popupOpen(curentPopup);
          e.preventDefault();
        });
      }
    }
    const popupCloseIcon = document.querySelectorAll('.close-popup');
    if (popupCloseIcon.length > 0) {
      for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
          popupClose(el.closest('.popup'));
          e.preventDefault();
        });
      }
    }

    function popupOpen(curentPopup) {
      if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
          popupClose(popupActive, false);
        } else {
          bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
          if (!e.target.closest('.popup__content')) {
            popupClose(e.target.closest('.popup'));
          }
        });
      }
    }

    function popupClose(popupActive, doUnlock = true) {
      if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
          bodyUnLock();
        }
      }
    }

    function bodyLock() {
      const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

      if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
          const el = lockPadding[index];
          el.style.paddingRight = lockPaddingValue;
        }
      }
      body.style.paddingRight = lockPaddingValue;
      body.classList.add('lock');

      unlock = false;
      setTimeout(function () {
        unlock = true;
      }, timeout);
    }

    function bodyUnLock() {
      setTimeout(function () {
        if (lockPadding.length > 0) {
          for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
          }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
      }, timeout);

      unlock = false;
      setTimeout(function () {
        unlock = true;
      }, timeout);
    }

    document.addEventListener('keydown', function (e) {
      if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
      }
    });

    (function () {
      // проверяем поддержку
      if (!Element.prototype.closest) {
        // реализуем
        Element.prototype.closest = function (css) {
          var node = this;
          while (node) {
            if (node.matches(css)) return node;
            else node = node.parentElement;
          }
          return null;
        };
      }
    })();
    (function () {
      // проверяем поддержку
      if (!Element.prototype.matches) {
        // определяем свойство
        Element.prototype.matches = Element.prototype.matchesSelector ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector;
      }
    })();
  }
}
</script>

