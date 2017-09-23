<template>
    <div class="container">
      <app-progress :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-progress>
      <new-quote @quoteAdded="addQuote"></new-quote>
      <quote-container :quotes="quotes" @quoteDeleted="deleteQuote"></quote-container>
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="alert alert-info">
            Info: Click on the quote to delete it!
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Progress from './components/Progress.vue'
  import NewQuote from './components/NewQuote.vue'
  import QuoteContainer from './components/QuoteContainer.vue'

  export default {
    components: {
      'app-progress': Progress,
      'new-quote': NewQuote,
      'quote-container': QuoteContainer,
    },
    data() {
      return {
        quotes: ['Some words that might represent a quote.'],
        maxQuotes: 10,
      }
    },
    methods: {
      addQuote(quote) {
        if (this.quotes.length >= this.maxQuotes) {
          alert("Max limit reached, delete a quote to add another.")
          return
        }
        this.quotes.push(quote);
      },
      deleteQuote(index) {
        this.quotes.splice(index, 1);
      }
    }
  }
</script>

<style scoped>
</style>
