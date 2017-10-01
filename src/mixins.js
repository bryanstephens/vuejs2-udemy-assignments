export const textMixins = {
  computed: {
    reverseText: function() {
      return this.someText.split("").reverse().join("");
    },
    countText: function() {
      return this.someText + " (" + this.someText.length + ")";
    }
  }
}
