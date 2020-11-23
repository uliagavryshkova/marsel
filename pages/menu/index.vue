<template>
  <div>
    <ms-menu v-bind:Region="menu"/> 
  </div>
</template>

<script>
import menu from '@/components/menu'

export default {
  components: {
    'ms-menu': menu
  },
  computed: {
    menu() {
      return {
          items: this.$store.state.menu
      }
    }
  },
  head: {
    title: "Марсель - меню на сегодня",
  }
}
</script>