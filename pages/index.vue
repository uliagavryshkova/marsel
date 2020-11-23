<template>
    <div>   
        <ms-slider v-bind:Region="sliders"/>        
        <ms-about-us v-bind:Region="about"/>
        <ms-portfolio/>     
        <ms-recall v-bind:Region="recalls"/>
    </div>
</template>

<script>
import slider from '@/components/slider'
import about_us from '@/components/about_us'
import portfolio from '@/components/portfolio'
import recall from '@/components/recall'

export default {
    components: {
        'ms-slider': slider,
        'ms-about-us': about_us,
        'ms-portfolio': portfolio,
        'ms-recall': recall
    },
    computed: {
        sliders() {
            return {
                items: this.$store.state.sliders
            }
        },
        about() {
            return this.$store.state.about
        },
        recalls() {
            return {
                items: this.$store.state.recalls
            }
        },
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
        
        document.addEventListener("scroll", () => {
            let div = document.querySelector(".about-us")
            if(div != null && !div.classList.contains('done') && div.getBoundingClientRect().top <= 320) {            
                div.className += " done"
            }

            let portfolio = document.querySelector(".portfolio")
            if(portfolio != null && !portfolio.classList.contains('done') && portfolio.getBoundingClientRect().top <= 320) {            
                portfolio.className += " done"
            }

            let recall = document.querySelector(".recall")
            if(recall != null && !recall.classList.contains('anim-done') && recall.getBoundingClientRect().top <= 320) {            
                recall.className += " anim-done"
            }      
        
        });

    },
    head: {
        title: "Марсель - ресторан",
    }
}
</script>