<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="progress">
        <div class="progress-bar" role="progressbar" :aria-valuenow="(quoteCount / maxQuotes) * 100"
        aria-valuemin="0" aria-valuemax="100" :style="{width: (quoteCount / maxQuotes) * 100 +'%'}">
          <span v-if="quoteCount > 0">{{ quoteCount }} / {{ maxQuotes }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    quoteCount: Number,
    maxQuotes: Number,
  }
}
</script>
<style scoped>
</style>
