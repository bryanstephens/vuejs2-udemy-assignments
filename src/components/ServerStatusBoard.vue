<template>
  <div class="row">
      <div class="col-xs-12 col-sm-6">
          <ul class="list-group">
              <li
                      class="list-group-item"
                      v-for="index in 5">
                  Server #{{ index }}
              </li>
          </ul>
      </div>
      <app-server-details></app-server-details>
  </div>
</template>
<script>
import ServerStatusDetails from './ServerStatusDetails.vue'
export default {
  components: {
    'app-server-details': ServerStatusDetails
  },
  data: () => ({

  })
}
</script>
<style scoped>
</style>
