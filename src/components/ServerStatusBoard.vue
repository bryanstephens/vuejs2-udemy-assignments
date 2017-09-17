<template>
  <div class="row">
      <div class="col-xs-12 col-sm-6">
          <ul class="list-group">
              <li
                      class="list-group-item"
                      v-for="server in servers">
                  <server :id="server.id" @click.native="showDetails(server)"></server>
              </li>
          </ul>
      </div>
      <app-server-details :server="selectedServer"></app-server-details>
  </div>
</template>
<script>
import ServerStatusDetails from './ServerStatusDetails.vue'
import Server from './Server.vue'
export default {
  components: {
    'app-server-details': ServerStatusDetails,
    'server': Server
  },
  data: () => ({
    servers: [
      { id: 1, status: "Normal"},
      { id: 2, status: "Critical"},
      { id: 3, status: "Unknown"},
      { id: 4, status: "Normal"}
    ],
    selectedServer: {
      id: '',
      status: ''
    }
  }),
  methods: {
    showDetails(server, event) {
      this.selectedServer = server;
    }
  }
}
</script>
<style scoped>
</style>
