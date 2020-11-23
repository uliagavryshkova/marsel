<template>
    <section class="gallery">
        <div class="container">
            <div class="gallery__info info">
                <h4>Кухня разных стран мира</h4>
                <h2>Галерея</h2>
                <div class="info__decor"><img src="img/decor.png" alt=""></div>                       
            </div>
            <div class="gallery__list">
                <ul>
                    <li class="gallery__list-info">
                        <span class="gallery__list-link active" property="all">Все</span>
                    </li>
                    <li class="gallery__list-info">
                        <span class="gallery__list-link" property="ital">Итальянская</span>
                    </li>
                    <li class="gallery__list-info">
                        <span class="gallery__list-link" property="tai">Тайская</span>
                    </li>
                    <li class="gallery__list-info">
                        <span class="gallery__list-link" property="franch">Французcкая</span>
                    </li>
                    <li class="gallery__list-info">
                        <span class="gallery__list-link" property="nation">Национальная</span>
                    </li>
                </ul>
            </div>
            <div class="gallery__box done">
                <div  v-for="itm in  Region.items" :key="itm.id" v-bind:itm="itm" class="gallery__item visible" :data-category="itm.category">
                    <div class="gallery__item-img _ibg">
                        <picture>
                            <source :srcset="itm.webp" type="image/webp">
                            <img :src="itm.img" :alt="itm.descr">
                        </picture>
                    </div>
                    <a class="gallery__item-link" data-fancybox="images" :href="itm.fancy">
                        <span><i class="fa fa-search" aria-hidden="true"></i></span>
                    </a> 
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

        
        function choice(e){
            for(var i=0 ; i<galleryLinks.length ; i++){            
               galleryLinks[i].classList.remove('active')
            }            
            this.classList.toggle('active')            
            box.classList.remove('done')
            categoryLink = this.getAttribute('property')

            if (galleryItems != null) {
                for(var i=0 ; i<galleryItems.length ; i++){
                    if(galleryItems[i].classList.contains('visible')){
                        galleryItems[i].classList.remove('visible')
                        galleryItems[i].classList.add('invisible')
                    }                    
                }
            }

            setTimeout(function () {
                if (galleryItems != null) {
                    for(var i=0 ; i<galleryItems.length ; i++){
                        categoryItem = galleryItems[i].getAttribute('data-category')

                        if (categoryLink == categoryItem || categoryLink == 'all'){
                            galleryItems[i].classList.remove('invisible')
                            galleryItems[i].classList.add('visible')
                        }

                        if(galleryItems[i].classList.contains('invisible')){
                            galleryItems[i].style.display = "none"
                        }else{
                            galleryItems[i].style.display = "block" 
                        }                          
                    }
                }
            }, 1500); 
      
        }
        let galleryLinks = document.querySelectorAll('.gallery__list-link'),
            galleryItems = document.querySelectorAll('.gallery__item'),
            categoryLink = null,
            categoryItem = null,
            box = document.querySelector('.gallery__box')
            
        if (galleryLinks != null) {
            for(var i=0 ; i<galleryLinks.length ; i++){            
                galleryLinks[i].addEventListener('click', choice, false)
            }                
        }     
    }
}
</script>

