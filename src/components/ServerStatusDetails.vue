<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server.id">Server Details are currently not updated</p>
    <p v-else>
      Server Id: {{ server.id }}
      <br/>
      Server Status: {{ server.status }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    server: Object
  },
  data: () => ({

  })
}
</script>
<style scoped>
</style>
