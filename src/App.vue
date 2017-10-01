<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <h4>Text: {{ someText }}</h4>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>
                  Reversed: {{ someText | reverse }}
                </p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>
                  Global Filter: {{ someText | count-characters }}
                </p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p>
                  <h4>Computed Properties:</h4>
                  {{ reverseText }} <br />
                  {{ countText }}
                </p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->

            </div>
        </div>
    </div>
</template>

<script>
    import { textMixins } from "./mixins";
    export default {
      data: function() {
        return {
          someText: 'It doesn\'t matter.'
        }
      },
      mixins: [textMixins],
      filters: {
        reverse(value) {
          return value.split("").reverse().join("");
        }
      }
    }
</script>

<style>
</style>
