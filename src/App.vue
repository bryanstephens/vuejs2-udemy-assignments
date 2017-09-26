<template>
    <div class="container">
        <form v-if="!submitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <!-- <label for="firstName">First Name
                    <input type="text" name="firstName" id="firstName" v-model="firstName">
                  </label>
                  <label for="lastName">Last Name
                    <input type="text" name="lastName" id="lastName" v-model="lastName">
                  </label> -->
                  <full-name-input v-model="fullName"></full-name-input>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input class="form-control" type="email" name="email" id="email" v-model="email">
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input class="form-control" type="password" name="password" id="password" v-model="password">
                  </div>
                  <fieldset class="form-group">
                    <legend>
                      Store Data
                    </legend>
                    <div class="form-check">
                      <label class="form-check-label" for="persistYes">Yes
                        <input class="form-check-input" type="radio" name="persistYes" id="persistYes" v-model="persist" value="true" />
                      </label>
                    </div>
                    <div class="form-check">
                      <label class="form-check-label" for="persistNo">No
                        <input class="form-check-input" type="radio" name="persistNo" id="persistNo" v-model="persist" value="false" />
                      </label>
                    </div>
                  </fieldset>
                  <button class="btn btn-primary" @click.prevent="submitForm">Submit</button>
                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ persist }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullNameInput from "./FullnameInput.vue"
    export default {
      components: {
        "full-name-input": FullNameInput,
      },
      data: () => ({
        fullName: "Some Guy",
        email: "",
        password: "",
        persist: false,
        submitted: false,
      }),
      methods: {
        submitForm() {
          this.submitted = true
        }
      }
    }
</script>

<style>
</style>
