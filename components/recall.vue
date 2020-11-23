<template>
    <section class="recall">
        <div class="container">
            <div class="recall__item-info info">
                <h4>Мнение наших клиентов</h4>
                <h2>Отзывы</h2>
                <div class="info__decor"><img src="img/decor.png" alt=""></div>
            </div>
            <div class="recall-slider">
                <div v-for="itm in Region.items" :key="itm.id" v-bind:itm="itm" class="recall-slider__item">
                    <div class="recall-slider__item-image _ibg">
                        <picture>
                            <source :srcset="itm.webp" type="image/webp">
                            <img :src="itm.img" :alt="itm.author">
                        </picture> 
                    </div>           
                    <div class="recall-slider__item-box">
                        <span class="recall-slider__item-title">{{itm.author}}</span>
                        <p class="recall-slider__item-text">{{itm.text}}</p>
                        <span class="recall-slider__item-date">{{itm.data}}</span>
                    </div>
                </div>
            </div>
            <div class="recall__btn">
                <button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>
                <button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>
            </div>    
        </div>
    </section>
</template>
<script>
export default {
    props: {
        Region: Object
    },
    mounted() {
        $(".recall-slider").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            // autoplay: true,
            autoplaySpeed:6000,
            prevArrow:'.recall__btn .slider-btn__left',
            nextArrow:'.recall__btn .slider-btn__right',
            responsive: [
                {
                    breakpoint: 1213,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });  
    }
};
</script>
