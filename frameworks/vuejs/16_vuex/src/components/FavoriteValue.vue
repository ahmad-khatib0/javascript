<template>
  <h3>{{ counter }}</h3>
  <p>we do more here ,,,</p>
</template>

<script>
export default {
  computed: {
    counter() {
      // return this.$store.getters.finalCounter;
      // return this.$store.getters.normalizeCounter;
      return this.$store.getters['counter/normalizeCounter'];
    },
  },
};
</script>

<style></style>
