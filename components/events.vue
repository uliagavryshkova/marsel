<template>     
    <div class="container">
        <div v-for="itm in Region.items" :key="itm.id" v-bind:itm="itm" class="events__items">                
            <div class="events__item events__item--text">
                <div class="events__item-info info">
                    <h4>{{itm.subtitle}}</h4>
                    <h2>{{itm.title}}</h2>
                    <div class="events__item-decor"><img src="img/events/decor.png" alt=""></div>
                    <div class="info__descr">{{itm.text}}</div>
                    <div class="events__item-caption"> 
                        <div class="events__item-text">              
                            <p><strong>Зал</strong> : {{itm.room}}</p>
                            <p><strong>Количество гостей</strong> : {{itm.col}}</p>
                        </div> 
                        <div class="events__item-text"> 
                            <p><strong>Меню</strong> : Предварительный заказ</p>
                            <p><strong>Развлечения</strong> : {{itm.music}}</p>
                        </div> 
                    </div>
                </div>            
            </div>   
            <div class="events__item events__item--line">
                <div class="events__item-image _ibg">
                    <picture>
                        <source :srcset="itm.webp" type="image/webp">
                        <img :src="itm.img" :alt="itm.title">
                    </picture>            
                </div>
            </div>             
        </div>
    </div>    
</template>
<script>
    export default {
        props: {
            Region: Object
        },
        mounted(){
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
    }
</script>

        

