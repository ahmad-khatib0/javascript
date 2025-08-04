<template>
  <div>
    <header v-if="$slots.header">
      <!-- by doing this check, the header element will disappear  -->
      <!-- from the dom entirely, so it'll not stay as an empty there  -->
      <!-- so eg in BadgeList we don't use headerSlot, so we remove it  -->
      <slot name="header"></slot>
      <!-- name is up to you, you can to have just one  unnamed slot -->
      <!-- <h1>the default</h1> -->
      <!--this h1 will be shown if you didn't provide elements between slots  -->
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$slots);
    // $slots  provided by vue. And it holds information about the slot data
    // this component receives for its different slots.
    console.log(this.$slots.header);
    // you will get once undefined because you didn't use the slot which named
    // in the BadgeList file
    console.log(this.$slots.default);
  },
  props: ["content"],
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
