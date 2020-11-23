<template>
    <ms-contacts/> 
</template>

<script>
import contacts from '@/components/contacts'
export default {
  components: {
    'ms-contacts': contacts
  },
  mounted(){         
  },
  head: {
    title: "Марсель - контакты",
  }
}
</script>