<template>
    <section class="events">         
        <ms-events v-bind:Region="events"/>          
    </section>
</template>

<script>
import events from '@/components/events'

export default {
    components: {
        'ms-events': events    
    },
    computed: {
        events() {
            return {
                items: this.$store.state.events
            }
        }
    },
    mounted(){ 
        let eventsItem = document.querySelector('.events__items:nth-child(1)')
            if (eventsItem != null){
                setTimeout(() => eventsItem.className += " done", 400);
        }

        document.addEventListener("scroll", () => {
            var buttons = document.querySelectorAll('.events__items'),
                index, button;

            for (index = 1; index < buttons.length; index++) {
                button = buttons[index]
                if(!button.classList.contains('done') && button.getBoundingClientRect().top <= 320) {            
                    button.className += " done"
                }
            }        
        });
    },
    head: {
        title: "Марсель - меропрятия",
    }
}
</script>
