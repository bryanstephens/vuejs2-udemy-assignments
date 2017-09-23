<template>
  <div class="row">
    <quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">
      {{ quote }}
    </quote>
  </div>
</template>
<script>
  import Quote from './Quote.vue'
  export default {
    name: "quote-container",
    props: {
      'quotes': Array,
    },
    methods: {
      deleteQuote(quoteIndex) {
        this.$emit("quoteDeleted", quoteIndex);
      }
    },
    components: {
      'quote': Quote,
    }
  }
</script>
<style scoped>
</style>
