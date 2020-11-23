<template>
    <section class="menu">
        <div class="container">
            <div class="menu__inner">
                <div class="menu__items">
                    <div v-for="itm in Region.items" :key="itm.id" v-bind:itm="itm" class="menu__item">
                        <div class="menu__item-img _ibg">
                            <picture>
                                <source :srcset="itm.webp" type="image/webp">
                                <img :src="itm.img" alt="">
                            </picture>
                        </div> 
                        <div class="menu__item-name">{{itm.name}}</div> 
                    </div>
                </div>
                <div class="menu__items">
                    <div class="menu__items-info info">
                        <h4>Изысканные блюда от шефа</h4>
                        <h2>Сегодня в меню</h2>
                        <span class="info__line"></span>                        
                    </div>
                    <div v-for="itm in Region.items" :key="itm.id" v-bind:itm="itm" class="menu__food">
                        <div class="menu__food-item">
                            <div class="menu__food-name">{{itm.name}}</div>
                            <div class="menu__food-descr">{{itm.text}}</div>
                            <span class="menu__food-price">₴{{itm.price}}</span>
                        </div>
                        <div class="menu__food-item _ibg">
                            <picture>
                                <source :srcset="itm.webp" type="image/webp">
                                <img :src="itm.img" alt="">
                            </picture>
                        </div>
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
    mounted(){
        let _ibg = document.querySelectorAll("._ibg")
        let webp = document.querySelector(".webp")
        
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

}
</script>

