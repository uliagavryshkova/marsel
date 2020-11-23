<template>
    <section class="about-us">
        <div class="container">
            <div class="about-us__inner">
                <div class="about-us__item">
                    <div class="info">
                        <h4>{{Region.title}}</h4>
                        <h2>{{Region.subtitle}}</h2>
                        <div class="info__decor"><img src="img/decor.png" alt=""></div>
                        <div class="info__descr">{{Region.text}}</div>
                        <nuxt-link class="info__link" to="/gallery">Подробнее</nuxt-link>
                    </div>            
                </div>
                <div class="about-us__item">
                    <div class="about-us__image _ibg">
                    <picture>
                        <source :srcset="Region.webp" type="image/webp">
                        <img :src="Region.img" alt="Марсель - ресторан">
                    </picture>                       
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        Region: Object
    },
}
</script>
