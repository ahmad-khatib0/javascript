<template>
  <!-- <h3>{{ counter }}</h3> -->
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    // counter() {
    // return this.$store.getters.finalCounter;
    // return this.$store.getters.normalizeCounter;
    // },
    // use maagetters to retrieve the getters directly, instead of above,(define a method for it )
    ...mapGetters('counter', ['finalCounter']),
  },
};
</script>

<style></style>
