<template>    
    <ms-gallery  v-bind:Region="galleries"/>
</template>

<script>
import gallery from '@/components/gallery'

export default {
    components: {
        'ms-gallery': gallery
    },
    computed: {
        galleries() {
            return {
                items: this.$store.state.galleries
            };
        },
    },
    head: {
        title: "Марсель - галерея",
    }
}
</script>
