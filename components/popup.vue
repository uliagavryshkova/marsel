<template>
    <div id="popup" class="popup">        
        <div class="popup__body">
            <div class="container">
                <div class="popup__content">
                    <a href="#header" class="popup__close close-popup"><span></span></a>                    
                    <div class="info">
                        <h4>Не нужно ждать столик</h4>
                        <h2>Онлайн резервация</h2>
                        <div class="info__decor"><img src="img/events/form-decor.png" alt=""></div>
                    </div>
                    <ms-form/>             
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import form from '@/components/form'
export default {
    components: {
        'ms-form': form
    }
}
</script>
