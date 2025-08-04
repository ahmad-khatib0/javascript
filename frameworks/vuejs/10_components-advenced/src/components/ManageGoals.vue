<template>
  <div>
    <h2>manage goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
      <!-- render it in the body  -->
      <error-alert v-if="inputIsInvalid">
        <h1>input is invalid</h1>
        <p>please enter at least a fev characters...</p>
        <button @click="confirmError">Ok</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") this.inputIsInvalid = true;
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style></style>
