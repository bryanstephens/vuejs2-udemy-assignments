<template>
  <div>
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input class="form-control" type="text" name="firstName" id="firstName" @input="inputChanged(true, $event)" :value="firstName">
      <label for="lastName">Last Name</label>
      <input class="form-control" type="text" name="lastName" id="lastName" @input="inputChanged(false, $event)" :value="lastName">
    </div>
  </div>
</template>
<script>
export default {
  props: ['value'],
  computed: {
    firstName() {
      return this.value.split(" ")[0]
    },
    lastName() {
      return this.value.split(" ")[1]
    }
  },
  methods: {
    inputChanged(isFirstName, event) {
      let fullName = ""
      if (isFirstName) {
        fullName = event.target.value + " " + this.lastName
      } else {
        fullName = this.firstName + " " + event.target.value
      }
      this.$emit("input", fullName)
    }
  }
}
</script>
<style scoped>
</style>
