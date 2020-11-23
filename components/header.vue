<template>
  <header class="header lock-padding" id="header">
    <div class="container">
      <div class="header__inner">
        <nuxt-link class="header__logo logo" to="/">
          <span>Marsel</span>
        </nuxt-link>
        <div class="header__menu">
          <nav class="menu">
            <ul class="menu__list">
              <li class="menu__list-item">
                <nuxt-link class="menu__list-link" to="/">Главная</nuxt-link>
              </li>
              <li class="menu__list-item">
                <nuxt-link class="menu__list-link" to="/events">Мероприятия</nuxt-link>
              </li>
              <li class="menu__list-item">
                <nuxt-link class="menu__list-link" to="/gallery">Галерея</nuxt-link>
              </li>
              <li class="menu__list-item">
                <nuxt-link class="menu__list-link" to="/menu">Меню</nuxt-link>
              </li>
              <li class="menu__list-item">
                <nuxt-link class="menu__list-link" to="/contacts">Контакты</nuxt-link>
              </li>
            </ul> 
          </nav> 
          <div class="header__social">
            <span></span>
            <a class="header__social-phone" href="tel:+380674309651">+38 (067) 430-96-51</a>
            <a class="header__social-phone" href="tel:+380432562631">+38 (0432) 56-26-31</a>
            <a class="header__social-email" href="mailto:cafe-marsel@ukr.net">cafe-marsel@ukr.net</a>
            <ul class="header__social-list social">
              <li class="social__item">
                <a class="social__item-link" href="https://m.facebook.com/profile.php?id=172575713096802&__tn__=C-R">
                  <span><i class="fa fa-facebook" aria-hidden="true"></i></span>
                </a>
              </li>
              <li class="social__item">
                <a class="social__item-link" href="https://www.instagram.com/explore/locations/506794886387961/ukraine/vinnytsya/?hl=ru">
                  <span><i class="fa fa-instagram" aria-hidden="true"></i></span>
                </a>
              </li>
            </ul>
          </div>
        </div> 
        <div class="header__burger">
          <span></span>          
        </div>       
        <div class="header__btn">
          <a href="#popup" class="header__popup popup-link">Заказать</a>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  mounted(){
    $(document).ready(function() {
      $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu,.header__social').toggleClass('active');
        $('body').toggleClass('lock');
      });
    });

    const menu = document.querySelectorAll('.menu__list')
    
    if (menu != null) {
      for(let t=0 ; t<menu.length ; t++){
        menu[t].addEventListener('click', function (e) {
          $('.header__burger,.header__menu,.header__social').toggleClass('active');
          $('body').toggleClass('lock');
        });
      }
    }
  }
}
</script>
