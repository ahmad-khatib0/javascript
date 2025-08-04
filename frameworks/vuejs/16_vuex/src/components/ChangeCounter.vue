<template>
  <!-- <button @click="addOne">Add One</button> -->
  <button @click="addTow">Add 2</button>
  <button @click="increment">Add 2 with mapActions</button>
  <button @click="increase({ value: 10 })">Add 10 with mapActions</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    addOne() {
      // this.$store.state.counter++; bad approach
      this.$store.commit('counter/increment');
    },
    // addTow() {
    //   this.$store.commit('increment');
    // },
    addTow() {
      this.$store.dispatch('counter/increment');
    },

    ...mapActions('counter', ['increment', 'increase']), //or by renaming the actions:
    ...mapActions('counter', {
      inc: 'increment',
      increasement: 'increase',
    }),
  },
};
</script>

<style></style>
