<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <button v-listen:click="doSomethingAwesome">A button</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      directives: {
        listen: {
          bind(el, binding, vnode) {
            if (binding.arg) {
              el.addEventListener(binding.arg, binding.value)
            }
          }
        }
      },
      methods: {
        doSomethingAwesome() {
          alert("Not the something awesome you were thinking, huh?")
        }
      }
    }
</script>

<style>
</style>
