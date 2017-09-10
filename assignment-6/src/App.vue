<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <app-server-status-board></app-server-status-board>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
  import Header from './components/Header.vue'
  import ServerStatusBoard from './components/ServerStatusBoard.vue'
  import Footer from './components/Footer.vue'
  
  export default {
    components: {
      'app-header': Header,
      'app-server-status-board': ServerStatusBoard,
      'app-footer': Footer
    }
  }
</script>

<style>

</style>
