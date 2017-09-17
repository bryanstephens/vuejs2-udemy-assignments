<template>
  <div>
    Server #{{ id }}
  </div>
</template>
<script>
export default {
  props: {
    id: Number
  },
  data: () => ({

  })
}
</script>
<style scoped>
div {
  cursor: pointer;
}
</style>
