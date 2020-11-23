<template>
  <main class="main">
    <div class="main__slider">
      <div v-for="itm in Region.items" :key="itm.id" v-bind:itm="itm">
        <div class="main__slider-item slider-item _ibg">
          <picture>
            <source :srcset="itm.webp" type="image/webp">
            <img :src="itm.img" alt="Марсель - ресторан">
          </picture>                       
        </div>
        <div class="slider-item__info">
          <div class="slider-item__info-title">
            <h3>{{itm.title}}</h3>
          </div>
          <div class="slider-item__info-text">
            <h1>{{itm.text}}</h1>
          </div>
          <div class="slider-item__info-subtext">
            <span>{{itm.subtext}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="main__slider-btn">
      <button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>
      <button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    Region: Object
  },
  mounted() {
    $(".main__slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed:7700,
        pauseOnHover: false,
        prevArrow:'.main__slider-btn .slider-btn__left',
        nextArrow:'.main__slider-btn .slider-btn__right'
    });
    let _ibg = document.querySelectorAll("._ibg"),
        webp = document.querySelector(".webp")
    
    if (webp != null) {
        for (var i = 0; i < _ibg.length; i++) {
            if (_ibg[i].querySelector('source') && _ibg[i].querySelector('source').getAttribute('srcset') != null) {
                _ibg[i].style.backgroundImage = 'url(' + _ibg[i].querySelector('source').getAttribute('srcset') + ')';
            }
        }
    }else{
        for (var i = 0; i < _ibg.length; i++) {
            if (_ibg[i].querySelector('img') && _ibg[i].querySelector('img').getAttribute('src') != null) {
                _ibg[i].style.backgroundImage = 'url(' + _ibg[i].querySelector('img').getAttribute('src') + ')';
            }
        }
    }
  }
};
</script>
